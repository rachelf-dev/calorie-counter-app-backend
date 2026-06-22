import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';

import { DailyLog } from '../../core/models/api.models';
import { LogService } from '../../core/services/log.service';
import { CalorieFormatPipe } from '../../shared/pipes/calorie-format.pipe';
import { WeeklyChartComponent } from '../../shared/weekly-chart/weekly-chart.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    DatePipe,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    CalorieFormatPipe,
    WeeklyChartComponent,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent implements OnInit {
  private readonly logService = inject(LogService);

  readonly logs = signal<DailyLog[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly displayedColumns = ['date', 'consumed', 'target', 'goalMet'];

  ngOnInit(): void {
    this.loadHistory();
  }

  private loadHistory(): void {
    this.loading.set(true);
    this.error.set(null);

    this.logService.getHistory().subscribe({
      next: (logs) => {
        this.logs.set(logs);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? 'שגיאה בטעינת ההיסטוריה');
        this.loading.set(false);
      },
    });
  }
}
