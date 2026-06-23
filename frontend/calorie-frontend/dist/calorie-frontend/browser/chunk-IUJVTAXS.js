import{c as Ct,d as Dt,f as bt,h as se,i as ce,j as le}from"./chunk-OSXEQO7Z.js";import{a as yt}from"./chunk-YJCZNF6U.js";import"./chunk-7ITALQA5.js";import{a as vt}from"./chunk-YG2JG45C.js";import{a as qe}from"./chunk-XIJYQSCL.js";import{c as _t}from"./chunk-CAZBZBZI.js";import{b as je,c as T,e as y}from"./chunk-WWW2KBFR.js";import{h as H}from"./chunk-BGFQD5PC.js";import{a as gt,b as ft,c as ht}from"./chunk-AY64NGNL.js";import{a as mt,o as dt,p as pt,q as ut}from"./chunk-F5F55BYB.js";import{h as He}from"./chunk-F44D22JM.js";import{b as tt,d as nt,e as rt,h as it,i as at,l as ot,m as st}from"./chunk-O2QOKGSE.js";import{a as ze,c as Ve,d as Ue}from"./chunk-UJAUBIMT.js";import{O as ct,Q as lt,R as J,b as Qe,e as Ge,h as Ke,k as Ze,r as Je}from"./chunk-MFSZHEOF.js";import{a as E}from"./chunk-OHL4OTLM.js";import"./chunk-HBMZ6VAA.js";import{a as q,b as Q,c as G,d as Ye,f as K,h as Z,i as X,j as Y}from"./chunk-TRL63XCT.js";import{$ as ye,$b as We,Da as x,Dc as Ne,E as he,Ec as j,Fb as R,G as _e,Ga as Pe,Gb as N,Gc as $e,I as Ce,Ja as L,Jb as v,Kb as _,O as De,Ob as Te,Pb as Be,Q as be,Qb as Ae,Qc as I,Ra as o,Ub as $,Vb as z,Vc as Xe,Wb as Le,Xa as ke,Xb as V,Yb as s,Zb as b,_ as ve,_b as C,a as ge,bb as D,ca as ie,cb as we,db as Oe,dc as d,ec as u,fc as Fe,hb as Ie,hc as Re,ia as Ee,id as et,ka as xe,kd as S,ld as P,ma as p,pb as M,qb as g,r as re,ra as w,rb as f,sa as O,ta as ae,ua as Me,ub as W,v as fe,vb as F,wb as m,wc as U,xa as Se,xb as a,yb as i,za as oe,zb as h}from"./chunk-3Q57M4B7.js";var kt=["determinateSpinner"];function wt(n,t){if(n&1&&(ae(),a(0,"svg",11),h(1,"circle",12),i()),n&2){let e=_();M("viewBox",e._viewBox()),o(),z("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),M("r",e._circleRadius())}}var Ot=new xe("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Et})}),Et=100,It=10,xt=(()=>{class n{_elementRef=p(L);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=p(Ot),r=et(),c=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=c.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&c.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Et;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-It)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=D({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,c){if(r&1&&Te(kt,5),r&2){let l;Be(l=Ae())&&(c._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,c){r&2&&(M("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",c.mode==="determinate"?c.value:null)("mode",c.mode),V("mat-"+c.color),z("width",c.diameter,"px")("height",c.diameter,"px")("--mat-progress-spinner-size",c.diameter+"px")("--mat-progress-spinner-active-indicator-width",c.diameter+"px"),Le("_mat-animation-noopable",c._noopAnimations)("mdc-circular-progress--indeterminate",c.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",U],diameter:[2,"diameter","diameter",U],strokeWidth:[2,"strokeWidth","strokeWidth",U]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,c){if(r&1&&(Ie(0,wt,2,8,"ng-template",null,0,Re),a(2,"div",2,1),ae(),a(4,"svg",3),h(5,"circle",4),i()(),Me(),a(6,"div",5)(7,"div",6)(8,"div",7),R(9,8),i(),a(10,"div",9),R(11,8),i(),a(12,"div",10),R(13,8),i()()()),r&2){let l=$(1);o(4),M("viewBox",c._viewBox()),o(),z("stroke-dasharray",c._strokeCircumference(),"px")("stroke-dashoffset",c._strokeDashOffset(),"px")("stroke-width",c._circleStrokeWidth(),"%"),M("r",c._circleRadius()),o(4),m("ngTemplateOutlet",l),o(2),m("ngTemplateOutlet",l),o(2),m("ngTemplateOutlet",l)}},dependencies:[Ne],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Mt=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=we({type:n});static \u0275inj=Ee({imports:[Xe]})}return n})();var Bt=(n,t)=>t._id;function At(n,t){n&1&&h(0,"mat-spinner",5)}function Lt(n,t){if(n&1&&(a(0,"mat-option",8)(1,"span",10),s(2),i(),a(3,"span",11),s(4),d(5,"calorieFormat"),i()()),n&2){let e=t.$implicit;m("value",e),o(2),b(e.name),o(2),C(" ",u(5,3,e.caloriesPer100g)," / 100 \u05D2\u05E8\u05DD ")}}function Wt(n,t){n&1&&(a(0,"mat-option",9),s(1,"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"),i())}function Ft(n,t){if(n&1&&(W(0,Lt,6,5,"mat-option",8,Bt),g(2,Wt,2,0,"mat-option",9)),n&2){let e=t,r=_();F(e),o(2),f(r.hasSearched()&&!r.loading()&&!r.searchError()&&e.length===0?2:-1)}}function Rt(n,t){n&1&&(a(0,"p",7),s(1),i()),n&2&&(o(),b(t))}var ee=class n{productService=p(gt);initialSearch="";searchChange=new oe;productSelected=new oe;searchControl=new Ke("",{nonNullable:!0});loading=x(!1);hasSearched=x(!1);searchError=x(null);filteredProducts$=this.searchControl.valueChanges.pipe(ve(""),Ce(300),fe(t=>t.trim()),De(),ie(t=>{this.searchChange.emit(t),this.hasSearched.set(t.length>0)}),ye(t=>t?(this.loading.set(!0),this.productService.searchProducts(t).pipe(ie(()=>this.searchError.set(null)),be(()=>this.loading.set(!1)),_e(e=>(e.status===401?this.searchError.set("\u05D9\u05E9 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D7\u05E4\u05E9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"):this.searchError.set(e.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"),re([]))))):(this.loading.set(!1),this.searchError.set(null),re([]))));ngOnInit(){this.initialSearch&&this.searchControl.setValue(this.initialSearch,{emitEvent:!0})}displayProduct=t=>typeof t=="string"?t:t.name;onProductSelected(t){this.productSelected.emit(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-product-search"]],inputs:{initialSearch:"initialSearch"},outputs:{searchChange:"searchChange",productSelected:"productSelected"},decls:13,vars:8,consts:[["auto","matAutocomplete"],[1,"product-search"],["appearance","outline",1,"search-field"],["matInput","","type","search","placeholder","\u05D4\u05E7\u05DC\u05D9\u05D3\u05D9 \u05E9\u05DD \u05DE\u05D5\u05E6\u05E8, \u05DC\u05DE\u05E9\u05DC: \u05D7\u05D5\u05DE\u05D5\u05E1","autocomplete","off",3,"formControl","matAutocomplete"],["matPrefix",""],["matSuffix","","diameter","20"],[3,"optionSelected","displayWith"],["role","alert",1,"search-error"],[3,"value"],["disabled",""],[1,"option-name"],[1,"option-meta"]],template:function(e,r){if(e&1&&(a(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),s(3,"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8"),i(),h(4,"input",3),a(5,"mat-icon",4),s(6,"search"),i(),g(7,At,1,0,"mat-spinner",5),a(8,"mat-autocomplete",6,0),v("optionSelected",function(l){return r.onProductSelected(l.option.value)}),g(10,Ft,3,1),d(11,"async"),i()(),g(12,Rt,2,1,"p",7),i()),e&2){let c,l,A=$(9);o(4),m("formControl",r.searchControl)("matAutocomplete",A),o(3),f(r.loading()?7:-1),o(),m("displayWith",r.displayProduct),o(2),f((c=u(11,6,r.filteredProducts$))?10:-1,c),o(2),f((l=r.searchError())?12:-1,l)}},dependencies:[Je,Qe,Ge,Ze,at,it,tt,nt,rt,st,ot,ut,dt,mt,pt,P,S,Mt,xt,j,E],styles:[".product-search[_ngcontent-%COMP%], .search-field[_ngcontent-%COMP%]{width:100%}.option-name[_ngcontent-%COMP%]{font-weight:500}.option-meta[_ngcontent-%COMP%]{margin-inline-start:8px;font-size:.85rem;color:#0000008a}.search-error[_ngcontent-%COMP%]{margin:-8px 0 0;padding:8px 12px;border-radius:8px;background:#fff3e0;color:#e65100;font-size:.9rem}"]})};var zt=(n,t)=>t._id;function Vt(n,t){n&1&&(a(0,"p",1),s(1,"\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7 \u2014 \u05D7\u05E4\u05E9\u05D9 \u05DE\u05D5\u05E6\u05E8 \u05D5\u05D4\u05D5\u05E1\u05D9\u05E4\u05D9 \u05DC\u05E1\u05DC"),i())}function Ut(n,t){if(n&1){let e=N();a(0,"mat-list-item",3)(1,"div",4)(2,"div",5)(3,"span",6),s(4),i(),a(5,"span",7),s(6),i()(),a(7,"div",8)(8,"span",9),s(9),d(10,"calorieFormat"),i(),a(11,"button",10),v("click",function(){let c=w(e).$implicit,l=_(2);return O(l.confirmRemove(c))}),a(12,"mat-icon"),s(13,"delete"),i()()()()()}if(n&2){let e=t.$implicit,r=_(2);o(4),b(e.productName),o(2),We(" ",e.quantity," \xD7 ",r.unitLabel(e.unit)," "),o(3),b(u(10,5,e.calories)),o(2),m("disabled",r.loading)}}function jt(n,t){if(n&1&&(a(0,"mat-list",2),W(1,Ut,14,7,"mat-list-item",3,zt),i()),n&2){let e=_();o(),F(e.items)}}var te=class n{store=p(H);dialog=p(_t);items=[];loading=!1;unitLabel=ft;confirmRemove(t){let e={title:"\u05D4\u05E1\u05E8\u05D4 \u05DE\u05D4\u05E1\u05DC",message:`\u05D4\u05D0\u05DD \u05D0\u05EA \u05D1\u05D8\u05D5\u05D7\u05D4 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E1\u05D9\u05E8 \u05D0\u05EA "${t.productName}" \u05DE\u05D4\u05E1\u05DC?`,confirmText:"\u05D4\u05E1\u05E8",cancelText:"\u05D1\u05D9\u05D8\u05D5\u05DC"};this.dialog.open(vt,{data:e,width:"400px",maxWidth:"95vw"}).afterClosed().pipe(he(r=>r===!0)).subscribe(()=>{this.store.dispatch(y.removeItem({itemId:t._id}))})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-basket"]],inputs:{items:"items",loading:"loading"},decls:9,vars:2,consts:[["appearance","outlined",1,"basket-card"],[1,"empty-basket"],["aria-label","\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05D1\u05E1\u05DC",1,"basket-list"],[1,"basket-item"],[1,"item-content"],[1,"item-main"],[1,"item-name"],[1,"item-details"],[1,"item-actions"],[1,"item-calories"],["mat-icon-button","","type","button","aria-label","\u05D4\u05E1\u05E8 \u05E4\u05E8\u05D9\u05D8",3,"click","disabled"]],template:function(e,r){e&1&&(a(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),s(3,"\u05E1\u05DC \u05D9\u05D5\u05DE\u05D9"),i(),a(4,"mat-card-subtitle"),s(5),i()(),a(6,"mat-card-content"),g(7,Vt,2,0,"p",1)(8,jt,3,0,"mat-list",2),i()()),e&2&&(o(5),C("",r.items.length," \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD"),o(2),f(r.items.length===0?7:8))},dependencies:[Z,q,G,K,Ye,Q,bt,Ct,Dt,J,ct,P,S,E],styles:[".basket-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{display:block;margin-block-end:4px}.empty-basket[_ngcontent-%COMP%]{margin:0;padding:16px 0;text-align:center;color:#0000008a}.basket-list[_ngcontent-%COMP%]{padding:0}.basket-item[_ngcontent-%COMP%]{height:auto;padding-block:8px}.item-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding-block:4px}.item-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;min-width:0}.item-name[_ngcontent-%COMP%]{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-details[_ngcontent-%COMP%]{font-size:.85rem;color:#0000008a}.item-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;flex-shrink:0}.item-calories[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;white-space:nowrap}"]})};var k=class n{el=p(L);renderer=p(ke);appCalorieWarning=0;ngOnChanges(){let t=this.appCalorieWarning;this.renderer.removeClass(this.el.nativeElement,"warning-orange"),this.renderer.removeClass(this.el.nativeElement,"warning-red"),t>120?this.renderer.addClass(this.el.nativeElement,"warning-red"):t>100&&this.renderer.addClass(this.el.nativeElement,"warning-orange")}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Oe({type:n,selectors:[["","appCalorieWarning",""]],inputs:{appCalorieWarning:"appCalorieWarning"},features:[Pe]})};var ne=class n{totalCalories=0;goal=2e3;get percentConsumed(){return this.goal?this.totalCalories/this.goal*100:0}get barValue(){return Math.min(this.percentConsumed,100)}get statusClass(){return this.percentConsumed>120?"status-over":this.percentConsumed>100?"status-warn":"status-ok"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-progress-bar"]],inputs:{totalCalories:"totalCalories",goal:"goal"},decls:12,vars:14,consts:[[1,"progress-panel",3,"appCalorieWarning"],[1,"progress-label"],[1,"progress-separator"],["mode","determinate",3,"value"],[1,"progress-percent"]],template:function(e,r){e&1&&(a(0,"div",0)(1,"p",1),s(2),d(3,"calorieFormat"),a(4,"span",2),s(5,"\u05DE\u05EA\u05D5\u05DA"),i(),s(6),d(7,"calorieFormat"),i(),h(8,"mat-progress-bar",3),a(9,"p",4),s(10),d(11,"number"),i()()),e&2&&(V(r.statusClass),m("appCalorieWarning",r.percentConsumed),o(2),C(" ",u(3,7,r.totalCalories)," "),o(4),C(" ",u(7,9,r.goal)," "),o(2),m("value",r.barValue),o(2),C("",Fe(11,11,r.percentConsumed,"1.0-0"),"% \u05DE\u05D4\u05D9\u05E2\u05D3"))},dependencies:[Y,X,k,$e,E],styles:[".progress-panel[_ngcontent-%COMP%]{padding:12px;border-radius:8px;transition:background-color .2s ease}.progress-label[_ngcontent-%COMP%]{margin:0 0 12px;font-size:1rem;font-weight:500}.progress-separator[_ngcontent-%COMP%]{margin-inline:6px;font-weight:400;color:#0000008a}.progress-percent[_ngcontent-%COMP%]{margin:8px 0 0;font-size:.9rem;color:#0009;text-align:end}.status-ok[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #4caf50;--mdc-linear-progress-track-color: #e8f5e9}.status-warn[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #ff9800;--mdc-linear-progress-track-color: #fff3e0}.status-over[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #f44336;--mdc-linear-progress-track-color: #ffebee}"]})};function qt(n,t){n&1&&(a(0,"a",6)(1,"mat-icon"),s(2,"admin_panel_settings"),i(),s(3," \u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA "),i())}function Qt(n,t){n&1&&h(0,"mat-progress-bar",9)}function Gt(n,t){n&1&&(a(0,"p",10),s(1),i()),n&2&&(o(),b(t))}function Kt(n,t){if(n&1&&(a(0,"section",13)(1,"mat-card",21)(2,"mat-card-content")(3,"span",22),s(4,"\u05E0\u05E6\u05E8\u05DB\u05D5 \u05D4\u05D9\u05D5\u05DD:"),i(),a(5,"span",23),s(6),d(7,"calorieFormat"),i(),a(8,"span",24),s(9,"/"),i(),a(10,"span",25),s(11),d(12,"calorieFormat"),i()()()()),n&2){let e=t;o(),m("appCalorieWarning",e.totalCaloriesConsumed/e.targetCalories*100),o(5),b(u(7,3,e.totalCaloriesConsumed)),o(5),C("\u05D9\u05E2\u05D3: ",u(12,5,e.targetCalories))}}function Zt(n,t){if(n&1&&(h(0,"app-basket",17),d(1,"async")),n&2){let e=_();m("items",t.items)("loading",u(1,2,e.loading$)??!1)}}function Jt(n,t){if(n&1){let e=N();a(0,"mat-card",19)(1,"mat-card-header")(2,"mat-card-title"),s(3,"\u05DE\u05D5\u05E6\u05E8 \u05E0\u05D1\u05D7\u05E8"),i()(),a(4,"mat-card-content")(5,"p",26),s(6),i(),a(7,"p",27),s(8),d(9,"calorieFormat"),i(),a(10,"app-unit-selector",28),v("selectionChange",function(c){w(e);let l=_();return O(l.onUnitSelectionChange(c))}),i(),a(11,"button",29),d(12,"async"),v("click",function(){w(e);let c=_();return O(c.addToBasket())}),s(13," \u05D4\u05D5\u05E1\u05E3 \u05DC\u05E1\u05DC "),i()()()}if(n&2){let e=t,r=_();o(6),b(e.name),o(2),C(" ",u(9,4,e.caloriesPer100g)," / 100 \u05D2\u05E8\u05DD "),o(2),m("product",e),o(),m("disabled",!r.unitSelection()||u(12,6,r.loading$))}}function Xt(n,t){if(n&1&&(a(0,"mat-card",20)(1,"mat-card-header")(2,"mat-card-title"),s(3,"\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA"),i()(),a(4,"mat-card-content"),h(5,"app-progress-bar",30),i()()),n&2){let e=t;o(5),m("totalCalories",e.totalCaloriesConsumed)("goal",e.targetCalories)}}var Pt=class n{store=p(H);actions$=p(je);router=p(Ve);route=p(ze);authService=p(qe);toastr=p(He);destroyRef=p(Se);todayLog$=this.store.select(se);loading$=this.store.select(ce);error$=this.store.select(le);initialSearch=this.route.snapshot.queryParamMap.get("search")??"";selectedProduct=x(null);unitSelection=x(null);ngOnInit(){if(!this.authService.isAuthenticated()){this.router.navigate(["/login"],{queryParams:ge({returnUrl:"dashboard"},this.initialSearch?{search:this.initialSearch}:{})});return}this.store.dispatch(y.loadToday()),this.actions$.pipe(T(y.addItemSuccess),I(this.destroyRef)).subscribe(({log:t})=>{let r=t.items.at(-1)?.productName??"\u05D4\u05E4\u05E8\u05D9\u05D8";this.toastr.success(`${r} \u05E0\u05D5\u05E1\u05E3 \u05DC\u05E1\u05DC`)}),this.actions$.pipe(T(y.addItemFailure),I(this.destroyRef)).subscribe(({error:t})=>{this.toastr.error(t)}),this.actions$.pipe(T(y.removeItemSuccess),I(this.destroyRef)).subscribe(()=>{this.toastr.info("\u05D4\u05E4\u05E8\u05D9\u05D8 \u05D4\u05D5\u05E1\u05E8 \u05DE\u05D4\u05E1\u05DC")}),this.actions$.pipe(T(y.removeItemFailure),I(this.destroyRef)).subscribe(({error:t})=>{this.toastr.error(t)})}onSearchChange(t){this.router.navigate([],{relativeTo:this.route,queryParams:{search:t||null},queryParamsHandling:"merge",replaceUrl:!0})}onProductSelected(t){this.selectedProduct.set(t),this.unitSelection.set(null)}onUnitSelectionChange(t){this.unitSelection.set(t)}addToBasket(){let t=this.selectedProduct(),e=this.unitSelection();!t||!e||this.store.dispatch(y.addItem({payload:{productId:t._id,unit:e.unit,quantity:e.quantity}}))}logout(){this.authService.logout(),this.toastr.info("\u05D4\u05EA\u05E0\u05EA\u05E7\u05EA \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-dashboard"]],decls:42,vars:18,consts:[[1,"dashboard-page"],[1,"dashboard-header"],[1,"subtitle"],["aria-label","\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05D4\u05D9\u05E8",1,"page-nav"],["mat-button","","routerLink","/my-products"],["mat-button","","routerLink","/products"],["mat-button","","routerLink","/admin"],["mat-button","","routerLink","/profile"],["mat-button","","type","button",3,"click"],["mode","indeterminate",1,"page-loading"],["role","alert",1,"error-banner"],[1,"search-section"],[3,"searchChange","productSelected","initialSearch"],["aria-label","\u05E1\u05D9\u05DB\u05D5\u05DD \u05D9\u05D5\u05DE\u05D9",1,"summary-section"],["aria-label","\u05D2\u05E8\u05E3 \u05E9\u05D1\u05D5\u05E2\u05D9",1,"chart-section"],[1,"dashboard-grid"],["aria-label","\u05E1\u05DC \u05D9\u05D5\u05DE\u05D9",1,"basket-section"],[3,"items","loading"],[1,"side-panel"],["appearance","outlined",1,"selected-product-card"],["appearance","outlined",1,"progress-card"],["appearance","outlined",1,"summary-card",3,"appCalorieWarning"],[1,"summary-label"],[1,"summary-value"],[1,"summary-separator"],[1,"summary-goal"],[1,"product-name"],[1,"product-meta"],[3,"selectionChange","product"],["mat-flat-button","","color","primary","type","button",1,"add-btn",3,"click","disabled"],[3,"totalCalories","goal"]],template:function(e,r){if(e&1&&(a(0,"div",0)(1,"header",1)(2,"h1"),s(3,"\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E8\u05D4 \u05D9\u05D5\u05DE\u05D9"),i(),a(4,"p",2),s(5,"\u05D7\u05E4\u05E9\u05D9 \u05DE\u05D5\u05E6\u05E8, \u05D4\u05D5\u05E1\u05D9\u05E4\u05D9 \u05DC\u05E1\u05DC \u05D5\u05E2\u05E7\u05D1\u05D9 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA"),i(),a(6,"nav",3)(7,"a",4)(8,"mat-icon"),s(9,"inventory_2"),i(),s(10," \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E9\u05DC\u05D9 "),i(),a(11,"a",5)(12,"mat-icon"),s(13,"storefront"),i(),s(14," \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DB\u05DC\u05DC\u05D9\u05D9\u05DD "),i(),g(15,qt,4,0,"a",6),a(16,"a",7)(17,"mat-icon"),s(18,"person"),i(),s(19," \u05E4\u05E8\u05D5\u05E4\u05D9\u05DC "),i(),a(20,"button",8),v("click",function(){return r.logout()}),a(21,"mat-icon"),s(22,"logout"),i(),s(23," \u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA "),i()()(),g(24,Qt,1,0,"mat-progress-bar",9),d(25,"async"),g(26,Gt,2,1,"p",10),d(27,"async"),a(28,"section",11)(29,"app-product-search",12),v("searchChange",function(l){return r.onSearchChange(l)})("productSelected",function(l){return r.onProductSelected(l)}),i()(),g(30,Kt,13,7,"section",13),d(31,"async"),a(32,"section",14),h(33,"app-weekly-chart"),i(),a(34,"div",15)(35,"section",16),g(36,Zt,2,4,"app-basket",17),d(37,"async"),i(),a(38,"aside",18),g(39,Jt,14,8,"mat-card",19),g(40,Xt,6,2,"mat-card",20),d(41,"async"),i()()()),e&2){let c,l,A,de,pe,ue;o(15),f(((c=r.authService.currentUser())==null?null:c.role)==="admin"?15:-1),o(9),f(u(25,8,r.loading$)?24:-1),o(2),f((l=u(27,10,r.error$))?26:-1,l),o(3),m("initialSearch",r.initialSearch),o(),f((A=u(31,12,r.todayLog$))?30:-1,A),o(6),f((de=u(37,14,r.todayLog$))?36:-1,de),o(3),f((pe=r.selectedProduct())?39:-1,pe),o(),f((ue=u(41,16,r.todayLog$))?40:-1,ue)}},dependencies:[Ue,J,lt,Z,q,G,K,Q,P,S,Y,X,ee,ht,te,ne,k,yt,j,E],styles:[".dashboard-page[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:24px 16px 32px;box-sizing:border-box}.dashboard-header[_ngcontent-%COMP%]{margin-block-end:24px;text-align:center}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.75rem;font-weight:500}.subtitle[_ngcontent-%COMP%]{margin:0;color:#0009}.page-loading[_ngcontent-%COMP%]{margin-block-end:16px}.error-banner[_ngcontent-%COMP%]{margin:0 0 16px;padding:12px 16px;border-radius:8px;background:#ffebee;color:#c62828}.search-section[_ngcontent-%COMP%]{margin-block-end:20px}.summary-section[_ngcontent-%COMP%], .chart-section[_ngcontent-%COMP%]{margin-block-end:24px}.page-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;margin-block-start:12px}.page-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-inline-end:4px}.summary-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px;padding-block:12px;border-radius:8px;transition:background-color .2s ease}.progress-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding-block-start:0}.summary-label[_ngcontent-%COMP%], .summary-goal[_ngcontent-%COMP%]{color:#0009}.summary-value[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:500}.dashboard-grid[_ngcontent-%COMP%]{display:grid;gap:20px}.side-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.placeholder-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .selected-product-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding-block-start:0}.placeholder-text[_ngcontent-%COMP%]{margin:0;color:#00000073;font-style:italic}.placeholder-meta[_ngcontent-%COMP%]{margin:8px 0 0;color:#0009}.product-name[_ngcontent-%COMP%]{margin:0 0 4px;font-size:1.1rem;font-weight:500}.product-meta[_ngcontent-%COMP%]{margin:0 0 12px;color:#0009}.add-btn[_ngcontent-%COMP%]{width:100%;margin-block-start:12px;height:44px}@media(min-width:600px){.dashboard-header[_ngcontent-%COMP%]{text-align:start}.page-nav[_ngcontent-%COMP%]{justify-content:flex-start}.dashboard-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;align-items:start}}@media(min-width:960px){.dashboard-grid[_ngcontent-%COMP%]{grid-template-columns:minmax(0,2fr) minmax(280px,1fr)}}@media(max-width:599.98px){.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}}"]})};export{Pt as DashboardComponent};
