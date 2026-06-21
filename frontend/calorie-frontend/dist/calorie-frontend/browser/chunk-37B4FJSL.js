import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-B6F4MWGM.js";

// src/app/features/my-products/product-form/product-form.component.ts
var ProductFormComponent = class _ProductFormComponent {
  static \u0275fac = function ProductFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], decls: 2, vars: 0, template: function ProductFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "Product Form \u2014 Day 5 (Developer B)");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductFormComponent, [{
    type: Component,
    args: [{
      selector: "app-product-form",
      standalone: true,
      template: `<p>Product Form \u2014 Day 5 (Developer B)</p>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src/app/features/my-products/product-form/product-form.component.ts", lineNumber: 8 });
})();
export {
  ProductFormComponent
};
//# sourceMappingURL=chunk-37B4FJSL.js.map
