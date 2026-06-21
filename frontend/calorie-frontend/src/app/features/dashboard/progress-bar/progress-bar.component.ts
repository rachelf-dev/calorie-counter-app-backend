import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CalorieFormatPipe } from '../../../shared/pipes/calorie-format.pipe';
import { CalorieWarningDirective } from '../../../shared/directives/calorie-warning.directive';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [DecimalPipe, MatProgressBarModule, CalorieFormatPipe, CalorieWarningDirective],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input({ required: true }) totalCalories = 0;
  @Input({ required: true }) goal = 2000;

  get percentConsumed(): number {
    if (!this.goal) {
      return 0;
    }

    return (this.totalCalories / this.goal) * 100;
  }

  get barValue(): number {
    return Math.min(this.percentConsumed, 100);
  }

  get statusClass(): string {
    if (this.percentConsumed > 120) {
      return 'status-over';
    }

    if (this.percentConsumed > 100) {
      return 'status-warn';
    }

    return 'status-ok';
  }
}
