import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-B6F4MWGM.js";

// src/app/features/my-products/my-products.component.ts
var MyProductsComponent = class _MyProductsComponent {
  static \u0275fac = function MyProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyProductsComponent, selectors: [["app-my-products"]], decls: 2, vars: 0, template: function MyProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "My Products \u2014 Day 5 (Developer B)");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProductsComponent, [{
    type: Component,
    args: [{
      selector: "app-my-products",
      standalone: true,
      template: `<p>My Products \u2014 Day 5 (Developer B)</p>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyProductsComponent, { className: "MyProductsComponent", filePath: "src/app/features/my-products/my-products.component.ts", lineNumber: 8 });
})();
export {
  MyProductsComponent
};
//# sourceMappingURL=chunk-5HZOHPPS.js.map
