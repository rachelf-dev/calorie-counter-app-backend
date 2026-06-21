import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({ selector: '[appCalorieWarning]', standalone: true })
export class CalorieWarningDirective implements OnChanges {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  @Input() appCalorieWarning = 0;

  ngOnChanges(): void {
    const pct = this.appCalorieWarning;

    this.renderer.removeClass(this.el.nativeElement, 'warning-orange');
    this.renderer.removeClass(this.el.nativeElement, 'warning-red');

    if (pct > 120) {
      this.renderer.addClass(this.el.nativeElement, 'warning-red');
    } else if (pct > 100) {
      this.renderer.addClass(this.el.nativeElement, 'warning-orange');
    }
  }
}
