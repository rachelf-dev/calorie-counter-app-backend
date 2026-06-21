import {
  AuthService,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatProgressBar,
  MatProgressBarModule,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-PJJY5VYC.js";
import {
  Router,
  RouterLink,
  ToastrService
} from "./chunk-6XI3PSXE.js";
import {
  Component,
  finalize,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-B6F4MWGM.js";

// src/app/shared/validators/auth.validators.ts
function passwordMatchValidator(passwordKey = "password", confirmKey = "confirmPassword") {
  return (group) => {
    const password = group.get(passwordKey)?.value;
    const confirm = group.get(confirmKey)?.value;
    if (!confirm) {
      return null;
    }
    return password === confirm ? null : { passwordMismatch: true };
  };
}

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 2);
  }
}
function RegisterComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D4\u05E9\u05DD \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05D4\u05E9\u05DD \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05DB\u05D9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05EA\u05D5\u05D5\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05E9\u05D3\u05D4 \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05DB\u05D9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05D9\u05E9 \u05DC\u05D0\u05DE\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\u05D4\u05E1\u05D9\u05E1\u05DE\u05D5\u05EA \u05D0\u05D9\u05E0\u05DF \u05EA\u05D5\u05D0\u05DE\u05D5\u05EA");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  hidePassword = signal(true, ...ngDevMode ? [{ debugName: "hidePassword" }] : (
    /* istanbul ignore next */
    []
  ));
  hideConfirmPassword = signal(true, ...ngDevMode ? [{ debugName: "hideConfirmPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", Validators.required]
  }, { validators: passwordMatchValidator() });
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, password } = this.form.getRawValue();
    this.loading.set(true);
    this.authService.register({ name, email, password }).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (res) => {
        this.toastr.success(`\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0, ${res.user.name}`);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.toastr.error(err.error?.message ?? "\u05D0\u05D9\u05E8\u05E2\u05D4 \u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D4\u05E8\u05E9\u05DE\u05D4");
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 51, vars: 15, consts: [[1, "auth-page"], ["appearance", "outlined", 1, "auth-card"], ["mode", "indeterminate"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "autocomplete", "name"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "autocomplete", "email", 1, "ltr-input"], ["matInput", "", "formControlName", "password", "autocomplete", "new-password", 1, "ltr-input", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "autocomplete", "new-password", 1, "ltr-input", 3, "type"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "full-width", "submit-btn", 3, "disabled"], [1, "auth-footer"], ["mat-button", "", "color", "primary", "routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1);
      \u0275\u0275conditionalCreate(2, RegisterComponent_Conditional_2_Template, 1, 0, "mat-progress-bar", 2);
      \u0275\u0275elementStart(3, "mat-card-header")(4, "mat-card-title");
      \u0275\u0275text(5, "\u05D4\u05E8\u05E9\u05DE\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-card-subtitle");
      \u0275\u0275text(7, "\u05E6\u05D5\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF \u05D7\u05D3\u05E9 \u05DC\u05E1\u05E4\u05D9\u05E8\u05EA \u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "mat-card-content")(9, "form", 3);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "mat-form-field", 4)(11, "mat-label");
      \u0275\u0275text(12, "\u05E9\u05DD \u05DE\u05DC\u05D0");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 5);
      \u0275\u0275elementStart(14, "mat-icon", 6);
      \u0275\u0275text(15, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, RegisterComponent_Conditional_16_Template, 2, 0, "mat-error")(17, RegisterComponent_Conditional_17_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-form-field", 4)(19, "mat-label");
      \u0275\u0275text(20, "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 7);
      \u0275\u0275elementStart(22, "mat-icon", 6);
      \u0275\u0275text(23, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, RegisterComponent_Conditional_24_Template, 2, 0, "mat-error")(25, RegisterComponent_Conditional_25_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-form-field", 4)(27, "mat-label");
      \u0275\u0275text(28, "\u05E1\u05D9\u05E1\u05DE\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 8);
      \u0275\u0275elementStart(30, "button", 9);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_30_listener() {
        return ctx.hidePassword.set(!ctx.hidePassword());
      });
      \u0275\u0275elementStart(31, "mat-icon");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(33, RegisterComponent_Conditional_33_Template, 2, 0, "mat-error")(34, RegisterComponent_Conditional_34_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-form-field", 4)(36, "mat-label");
      \u0275\u0275text(37, "\u05D0\u05D9\u05DE\u05D5\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 10);
      \u0275\u0275elementStart(39, "button", 9);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_39_listener() {
        return ctx.hideConfirmPassword.set(!ctx.hideConfirmPassword());
      });
      \u0275\u0275elementStart(40, "mat-icon");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(42, RegisterComponent_Conditional_42_Template, 2, 0, "mat-error")(43, RegisterComponent_Conditional_43_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 11);
      \u0275\u0275text(45, " \u05D4\u05E8\u05E9\u05DE\u05D4 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "mat-card-actions", 12)(47, "span");
      \u0275\u0275text(48, "\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 13);
      \u0275\u0275text(50, "\u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 2 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.name.touched && ctx.form.controls.name.hasError("required") ? 16 : ctx.form.controls.name.touched && ctx.form.controls.name.hasError("minlength") ? 17 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.form.controls.email.touched && ctx.form.controls.email.hasError("required") ? 24 : ctx.form.controls.email.touched && ctx.form.controls.email.hasError("email") ? 25 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.hidePassword() ? "\u05D4\u05E6\u05D2 \u05E1\u05D9\u05E1\u05DE\u05D4" : "\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4")("aria-pressed", !ctx.hidePassword());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.touched && ctx.form.controls.password.hasError("required") ? 33 : ctx.form.controls.password.touched && ctx.form.controls.password.hasError("minlength") ? 34 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.hideConfirmPassword() ? "password" : "text");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.hideConfirmPassword() ? "\u05D4\u05E6\u05D2 \u05E1\u05D9\u05E1\u05DE\u05D4" : "\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4")("aria-pressed", !ctx.hideConfirmPassword());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hideConfirmPassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.confirmPassword.touched && ctx.form.controls.confirmPassword.hasError("required") ? 42 : ctx.form.touched && ctx.form.hasError("passwordMismatch") ? 43 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressBarModule,
    MatProgressBar
  ], styles: ["\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  min-height: 100dvh;\n  padding: 24px 16px;\n  box-sizing: border-box;\n  background:\n    linear-gradient(\n      160deg,\n      #e3f2fd 0%,\n      #fafafa 45%,\n      #fafafa 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  overflow: hidden;\n}\n.auth-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-end: 8px;\n  text-align: center;\n}\n.auth-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin-block-end: 4px;\n}\n.auth-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.auth-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding-block-start: 8px;\n}\n.auth-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ltr-input[_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: start;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  margin-block-start: 12px;\n  height: 48px;\n  font-size: 1rem;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px 16px 16px;\n}\n@media (max-width: 599.98px) {\n  .auth-page[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 16px 12px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-block-start: 8px;\n  }\n  .auth-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .submit-btn[_ngcontent-%COMP%] {\n    height: 44px;\n  }\n}\n@media (min-width: 600px) {\n  .auth-card[_ngcontent-%COMP%] {\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  }\n}\n/*# sourceMappingURL=auth-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [
      ReactiveFormsModule,
      RouterLink,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressBarModule
    ], template: `<div class="auth-page">\r
  <mat-card class="auth-card" appearance="outlined">\r
    @if (loading()) {\r
      <mat-progress-bar mode="indeterminate" />\r
    }\r
\r
    <mat-card-header>\r
      <mat-card-title>\u05D4\u05E8\u05E9\u05DE\u05D4</mat-card-title>\r
      <mat-card-subtitle>\u05E6\u05D5\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF \u05D7\u05D3\u05E9 \u05DC\u05E1\u05E4\u05D9\u05E8\u05EA \u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA</mat-card-subtitle>\r
    </mat-card-header>\r
\r
    <mat-card-content>\r
      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\r
        <mat-form-field appearance="outline" class="full-width">\r
          <mat-label>\u05E9\u05DD \u05DE\u05DC\u05D0</mat-label>\r
          <input matInput formControlName="name" autocomplete="name" />\r
          <mat-icon matPrefix>person</mat-icon>\r
          @if (form.controls.name.touched && form.controls.name.hasError('required')) {\r
            <mat-error>\u05E9\u05D3\u05D4 \u05D4\u05E9\u05DD \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4</mat-error>\r
          } @else if (form.controls.name.touched && form.controls.name.hasError('minlength')) {\r
            <mat-error>\u05D4\u05E9\u05DD \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05DB\u05D9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05EA\u05D5\u05D5\u05D9\u05DD</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full-width">\r
          <mat-label>\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC</mat-label>\r
          <input\r
            matInput\r
            type="email"\r
            formControlName="email"\r
            autocomplete="email"\r
            class="ltr-input"\r
          />\r
          <mat-icon matPrefix>mail</mat-icon>\r
          @if (form.controls.email.touched && form.controls.email.hasError('required')) {\r
            <mat-error>\u05E9\u05D3\u05D4 \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4</mat-error>\r
          } @else if (form.controls.email.touched && form.controls.email.hasError('email')) {\r
            <mat-error>\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full-width">\r
          <mat-label>\u05E1\u05D9\u05E1\u05DE\u05D4</mat-label>\r
          <input\r
            matInput\r
            [type]="hidePassword() ? 'password' : 'text'"\r
            formControlName="password"\r
            autocomplete="new-password"\r
            class="ltr-input"\r
          />\r
          <button\r
            type="button"\r
            mat-icon-button\r
            matSuffix\r
            (click)="hidePassword.set(!hidePassword())"\r
            [attr.aria-label]="hidePassword() ? '\u05D4\u05E6\u05D2 \u05E1\u05D9\u05E1\u05DE\u05D4' : '\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4'"\r
            [attr.aria-pressed]="!hidePassword()"\r
          >\r
            <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>\r
          </button>\r
          @if (form.controls.password.touched && form.controls.password.hasError('required')) {\r
            <mat-error>\u05E9\u05D3\u05D4 \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4</mat-error>\r
          } @else if (\r
            form.controls.password.touched && form.controls.password.hasError('minlength')\r
          ) {\r
            <mat-error>\u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05DB\u05D9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full-width">\r
          <mat-label>\u05D0\u05D9\u05DE\u05D5\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4</mat-label>\r
          <input\r
            matInput\r
            [type]="hideConfirmPassword() ? 'password' : 'text'"\r
            formControlName="confirmPassword"\r
            autocomplete="new-password"\r
            class="ltr-input"\r
          />\r
          <button\r
            type="button"\r
            mat-icon-button\r
            matSuffix\r
            (click)="hideConfirmPassword.set(!hideConfirmPassword())"\r
            [attr.aria-label]="hideConfirmPassword() ? '\u05D4\u05E6\u05D2 \u05E1\u05D9\u05E1\u05DE\u05D4' : '\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4'"\r
            [attr.aria-pressed]="!hideConfirmPassword()"\r
          >\r
            <mat-icon>{{ hideConfirmPassword() ? 'visibility_off' : 'visibility' }}</mat-icon>\r
          </button>\r
          @if (\r
            form.controls.confirmPassword.touched &&\r
            form.controls.confirmPassword.hasError('required')\r
          ) {\r
            <mat-error>\u05D9\u05E9 \u05DC\u05D0\u05DE\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4</mat-error>\r
          } @else if (form.touched && form.hasError('passwordMismatch')) {\r
            <mat-error>\u05D4\u05E1\u05D9\u05E1\u05DE\u05D5\u05EA \u05D0\u05D9\u05E0\u05DF \u05EA\u05D5\u05D0\u05DE\u05D5\u05EA</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <button\r
          mat-flat-button\r
          color="primary"\r
          type="submit"\r
          class="full-width submit-btn"\r
          [disabled]="loading()"\r
        >\r
          \u05D4\u05E8\u05E9\u05DE\u05D4\r
        </button>\r
      </form>\r
    </mat-card-content>\r
\r
    <mat-card-actions class="auth-footer">\r
      <span>\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?</span>\r
      <a mat-button color="primary" routerLink="/login">\u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA</a>\r
    </mat-card-actions>\r
  </mat-card>\r
</div>\r
`, styles: ["/* src/app/features/auth/auth-page.scss */\n.auth-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  min-height: 100dvh;\n  padding: 24px 16px;\n  box-sizing: border-box;\n  background:\n    linear-gradient(\n      160deg,\n      #e3f2fd 0%,\n      #fafafa 45%,\n      #fafafa 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n  overflow: hidden;\n}\n.auth-card mat-card-header {\n  display: block;\n  margin-block-end: 8px;\n  text-align: center;\n}\n.auth-card mat-card-title {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin-block-end: 4px;\n}\n.auth-card mat-card-subtitle {\n  font-size: 0.95rem;\n}\n.auth-card mat-card-content {\n  padding-block-start: 8px;\n}\n.auth-card form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.full-width {\n  width: 100%;\n}\n.ltr-input {\n  direction: ltr;\n  text-align: start;\n}\n.submit-btn {\n  margin-block-start: 12px;\n  height: 48px;\n  font-size: 1rem;\n}\n.auth-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px 16px 16px;\n}\n@media (max-width: 599.98px) {\n  .auth-page {\n    align-items: flex-start;\n    padding: 16px 12px;\n  }\n  .auth-card {\n    max-width: 100%;\n    margin-block-start: 8px;\n  }\n  .auth-card mat-card-title {\n    font-size: 1.35rem;\n  }\n  .submit-btn {\n    height: 44px;\n  }\n}\n@media (min-width: 600px) {\n  .auth-card {\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  }\n}\n/*# sourceMappingURL=auth-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 34 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-LYPW3YIV.js.map
