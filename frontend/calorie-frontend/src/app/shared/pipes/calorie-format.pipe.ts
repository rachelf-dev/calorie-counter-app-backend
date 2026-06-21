import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'calorieFormat', standalone: true })
export class CalorieFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || Number.isNaN(value)) {
      return '—';
    }

    return Math.round(value).toLocaleString('he-IL') + ' קק״ל';
  }
}
