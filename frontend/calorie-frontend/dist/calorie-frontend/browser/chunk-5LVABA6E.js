import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-B6F4MWGM.js";

// src/app/features/history/history.component.ts
var HistoryComponent = class _HistoryComponent {
  static \u0275fac = function HistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["app-history"]], decls: 2, vars: 0, template: function HistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "History \u2014 Day 5 (Developer B)");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryComponent, [{
    type: Component,
    args: [{
      selector: "app-history",
      standalone: true,
      template: `<p>History \u2014 Day 5 (Developer B)</p>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app/features/history/history.component.ts", lineNumber: 8 });
})();
export {
  HistoryComponent
};
//# sourceMappingURL=chunk-5LVABA6E.js.map
