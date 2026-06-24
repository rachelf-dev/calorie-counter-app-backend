import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AgentChatRequest, AgentChatResponse } from '../models/agent.models';

@Injectable({ providedIn: 'root' })
export class AgentService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/agent`;

  sendMessage(request: AgentChatRequest): Observable<AgentChatResponse> {
    return this.http.post<AgentChatResponse>(`${this.baseUrl}/chat`, request);
  }
}
