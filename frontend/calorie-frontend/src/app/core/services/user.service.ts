import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../models/api.models';

export interface UpdateProfilePayload {
  name?: string;
  calorieGoal?: number;
  age?: number;
  gender?: string;
  weight?: number;
  height?: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/users`;
  private readonly serverOrigin = environment.apiUrl.replace(/\/api\/?$/, '');

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/profile`);
  }

  updateProfile(payload: UpdateProfilePayload): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/profile`, payload);
  }

  uploadProfileImage(file: File): Observable<User> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.put<User>(`${this.baseUrl}/profile/image`, formData);
  }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/`);
  }

  deleteUser(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }

  updateUserRole(id: string, role: User['role']): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}/role`, { role });
  }

  imageUrl(path?: string): string {
    if (!path) {
      return '';
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.serverOrigin}${path.startsWith('/') ? path : `/${path}`}`;
  }
}
