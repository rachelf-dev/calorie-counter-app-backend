import{a as bn}from"./chunk-Q4KYSLRL.js";import{a as en,b as nn,c as an,d as on,e as rn,f as sn,g as ln,h as dn,i as cn,j as mn,k as un}from"./chunk-OW3T53ZL.js";import{a as Gt}from"./chunk-YG2JG45C.js";import{a as De}from"./chunk-XIJYQSCL.js";import{a as Ze,c as Ke,d as Ye,e as Xe,f as Je,g as tn}from"./chunk-CAZBZBZI.js";import{a as wt,b as St}from"./chunk-AY64NGNL.js";import{a as It,c as je,e as We,f as Ht,r as Mt,s as Pt}from"./chunk-F5F55BYB.js";import{h as ve}from"./chunk-F44D22JM.js";import{a as He,b as _t,c as Ge,d as Ve,h as ht,i as ft,l as gt,m as vt}from"./chunk-O2QOKGSE.js";import{d as fe}from"./chunk-UJAUBIMT.js";import{C as Fe,E as Ne,F as ze,M as zt,N as $e,O as Dt,Q as Ct,R as yt,b as mt,c as A,e as ut,f as Ce,h as ye,i as xe,j as Ee,k as Te,l as ke,m as Ie,n as we,o as Me,p as Pe,q as Se,r as bt,v as Le,w as Oe}from"./chunk-MFSZHEOF.js";import{a as qe}from"./chunk-OHL4OTLM.js";import{e as Ue,f as Qe}from"./chunk-HBMZ6VAA.js";import{h as Re,i as Tt,j as kt}from"./chunk-TRL63XCT.js";import{$ as tt,Aa as W,C as te,D as X,Da as C,Db as P,E as G,Eb as S,Ga as se,Gb as w,Ha as et,I as J,Ja as U,Jb as h,Ka as le,Kb as u,Lb as ot,Mb as rt,Nb as st,O as ee,Ob as Z,Pb as v,Q as ne,Qb as D,Qc as ge,Ra as d,Ta as nt,Tc as Ft,Ua as at,Ub as Ot,Vb as be,Vc as Ae,Wb as E,Wc as Nt,Xa as Bt,Xb as lt,Yb as l,Z as ae,Za as de,Zb as T,Zc as Be,_ as V,_b as Q,a as Kt,aa as j,ac as pe,bb as M,bc as K,ca as ie,cb as ce,db as z,dc as _e,e as N,ec as he,g as Yt,gb as q,hb as g,i as Y,ia as oe,ib as me,jd as pt,ka as $,kd as xt,ld as Et,ma as m,o as Xt,ob as it,pb as L,qb as p,r as Jt,ra as y,rb as _,sa as x,sb as ue,tb as H,tc as dt,ub as B,va as Lt,vb as O,vc as k,wb as b,wc as ct,xa as re,xb as r,yb as s,za as I,zb as f}from"./chunk-3Q57M4B7.js";var jt=["*"];function kn(n,i){n&1&&rt(0)}var In=["tabListContainer"],wn=["tabList"],Mn=["tabListInner"],Pn=["nextPaginator"],Sn=["previousPaginator"],An=["content"];function Rn(n,i){}var Ln=["tabBodyWrapper"],Bn=["tabHeader"];function On(n,i){}function Fn(n,i){if(n&1&&g(0,On,0,0,"ng-template",12),n&2){let t=u().$implicit;b("cdkPortalOutlet",t.templateLabel)}}function Nn(n,i){if(n&1&&l(0),n&2){let t=u().$implicit;T(t.textLabel)}}function zn(n,i){if(n&1){let t=w();r(0,"div",7,2),h("click",function(){let a=y(t),o=a.$implicit,c=a.$index,R=u(),F=Ot(1);return x(R._handleClick(o,F,c))})("cdkFocusChange",function(a){let o=y(t).$index,c=u();return x(c._tabFocusChanged(a,o))}),f(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),p(6,Fn,1,1,null,12)(7,Nn,1,1),s()()()}if(n&2){let t=i.$implicit,e=i.$index,a=Ot(1),o=u();lt(t.labelClass),E("mdc-tab--active",o.selectedIndex===e),b("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),L("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),b("matRippleTrigger",a)("matRippleDisabled",t.disabled||o.disableRipple),d(3),_(t.templateLabel?6:7)}}function Hn(n,i){n&1&&rt(0)}function Gn(n,i){if(n&1){let t=w();r(0,"mat-tab-body",13),h("_onCentered",function(){y(t);let a=u();return x(a._removeTabBodyWrapperHeight())})("_onCentering",function(a){y(t);let o=u();return x(o._setTabBodyWrapperHeight(a))})("_beforeCentering",function(a){y(t);let o=u();return x(o._bodyCentered(a))}),s()}if(n&2){let t=i.$implicit,e=i.$index,a=u();lt(t.bodyClass),b("id",a._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",a.animationDuration)("preserveContent",a.preserveContent),L("tabindex",a.contentTabIndex!=null&&a.selectedIndex===e?a.contentTabIndex:null)("aria-labelledby",a._getTabLabelId(t,e))("aria-hidden",a.selectedIndex!==e)}}var Vn=new $("MatTabContent"),$n=(()=>{class n{template=m(at);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,selectors:[["","matTabContent",""]],features:[K([{provide:Vn,useExisting:n}])]})}return n})(),Un=new $("MatTabLabel"),gn=new $("MAT_TAB"),Wt=(()=>{class n extends We{_closestTab=m(gn,{optional:!0});static \u0275fac=(()=>{let t;return function(a){return(t||(t=et(n)))(a||n)}})();static \u0275dir=z({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[K([{provide:Un,useExisting:n}]),q]})}return n})(),vn=new $("MAT_TAB_GROUP"),qt=(()=>{class n{_viewContainerRef=m(de);_closestTabGroup=m(vn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Y;position=null;origin=null;isActive=!1;constructor(){m(Be).load($e)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new je(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-tab"]],contentQueries:function(e,a,o){if(e&1&&st(o,Wt,5)(o,$n,7,at),e&2){let c;v(c=D())&&(a.templateLabel=c.first),v(c=D())&&(a._explicitContent=c.first)}},viewQuery:function(e,a){if(e&1&&Z(at,7),e&2){let o;v(o=D())&&(a._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,a){e&2&&L("id",null)},inputs:{disabled:[2,"disabled","disabled",k],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[K([{provide:gn,useExisting:n}]),se],ngContentSelectors:jt,decls:1,vars:0,template:function(e,a){e&1&&(ot(),me(0,kn,1,0,"ng-template"))},encapsulation:2})}return n})(),Vt="mdc-tab-indicator--active",pn="mdc-tab-indicator--no-transition",$t=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(a=>a.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let a=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(a),this._currentItem=t}}},Qn=(()=>{class n{_elementRef=m(U);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Vt);return}let a=e.getBoundingClientRect(),o=t.width/a.width,c=t.left-a.left;e.classList.add(pn),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(pn),e.classList.add(Vt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Vt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),a=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",k]}})}return n})();var Dn=(()=>{class n extends Qn{elementRef=m(U);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(a){return(t||(t=et(n)))(a||n)}})();static \u0275dir=z({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,a){e&2&&(L("aria-disabled",!!a.disabled),E("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",k]},features:[q]})}return n})(),_n={passive:!0},jn=650,Wn=100,qn=(()=>{class n{_elementRef=m(U);_changeDetectorRef=m(dt);_viewportRuler=m(Qe);_dir=m(Ft,{optional:!0});_ngZone=m(W);_platform=m(Nt);_sharedResizeObserver=m(He);_injector=m(Lt);_renderer=m(Bt);_animationsDisabled=pt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),_n),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),_n))}ngAfterContentInit(){let t=this._dir?this._dir.change:Jt("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(J(32),j(this._destroyed)),a=this._viewportRuler.change(150).pipe(j(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ne(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),nt(o,{injector:this._injector}),X(t,a,e,this._items.changes,this._itemsResized()).pipe(j(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?Xt:this._items.changes.pipe(V(this._items),tt(t=>new Yt(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(o=>e.next(o));return t.forEach(o=>a.observe(o.elementRef.nativeElement)),()=>{a.disconnect()}}))),ae(1),G(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Fe(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:c}=e.elementRef.nativeElement,R,F;this._getLayoutDirection()=="ltr"?(R=o,F=R+c):(F=this._tabListInner.nativeElement.offsetWidth-o,R=F-c);let Rt=this.scrollDistance,Zt=this.scrollDistance+a;R<Rt?this.scrollDistance-=Rt-R:F>Zt&&(this.scrollDistance+=Math.min(F-Zt,R-Rt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,a=t-e>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),te(jn,Wn).pipe(j(X(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:o}=this._scrollHeader(t);(o===0||o>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",k],selectedIndex:[2,"selectedIndex","selectedIndex",ct]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),Zn=(()=>{class n extends qn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new $t(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(a){return(t||(t=et(n)))(a||n)}})();static \u0275cmp=M({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,a,o){if(e&1&&st(o,Dn,4),e&2){let c;v(c=D())&&(a._items=c)}},viewQuery:function(e,a){if(e&1&&Z(In,7)(wn,7)(Mn,7)(Pn,5)(Sn,5),e&2){let o;v(o=D())&&(a._tabListContainer=o.first),v(o=D())&&(a._tabList=o.first),v(o=D())&&(a._tabListInner=o.first),v(o=D())&&(a._nextPaginator=o.first),v(o=D())&&(a._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,a){e&2&&E("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl",a._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",k]},features:[q],ngContentSelectors:jt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,a){e&1&&(ot(),r(0,"div",5,0),h("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(c){return a._handlePaginatorPress("before",c)})("touchend",function(){return a._stopInterval()}),f(2,"div",6),s(),r(3,"div",7,1),h("keydown",function(c){return a._handleKeydown(c)}),r(5,"div",8,2),h("cdkObserveContent",function(){return a._onContentChanges()}),r(7,"div",9,3),rt(9),s()()(),r(10,"div",10,4),h("mousedown",function(c){return a._handlePaginatorPress("after",c)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),f(12,"div",6),s()),e&2&&(E("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),b("matRippleDisabled",a._disableScrollBefore||a.disableRipple),d(3),E("_mat-animation-noopable",a._animationsDisabled),d(2),L("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null),d(5),E("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),b("matRippleDisabled",a._disableScrollAfter||a.disableRipple))},dependencies:[zt,Oe],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),Kn=new $("MAT_TABS_CONFIG"),hn=(()=>{class n extends Ht{_host=m(Ut);_ngZone=m(W);_centeringSub=N.EMPTY;_leavingSub=N.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(V(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,selectors:[["","matTabBodyHost",""]],features:[q]})}return n})(),Ut=(()=>{class n{_elementRef=m(U);_dir=m(Ft,{optional:!0});_ngZone=m(W);_injector=m(Lt);_renderer=m(Bt);_diAnimationsDisabled=pt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=N.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=m(dt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),nt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),nt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,a){if(e&1&&Z(hn,5)(An,5),e&2){let o;v(o=D())&&(a._portalHost=o.first),v(o=D())&&(a._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,a){e&2&&L("inert",a._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,a){e&1&&(r(0,"div",1,0),g(2,Rn,0,0,"ng-template",2),s()),e&2&&E("mat-tab-body-content-left",a._position==="left")("mat-tab-body-content-right",a._position==="right")("mat-tab-body-content-can-animate",a._position==="center"||a._previousPosition==="center")},dependencies:[hn,Ue],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),Cn=(()=>{class n{_elementRef=m(U);_changeDetectorRef=m(dt);_ngZone=m(W);_tabsSubscription=N.EMPTY;_tabLabelSubscription=N.EMPTY;_tabBodySubscription=N.EMPTY;_diAnimationsDisabled=pt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new le;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!m(Nt).isBrowser;constructor(){let t=m(Kn,{optional:!0});this._groupId=m(ze).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,o)=>a.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,a)=>{e.position=a-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),a;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,a=e[o];break}!a&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(V(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Qt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=X(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,a){e.focusIndex=a,t.disabled||(this.selectedIndex=a)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,a)=>e._setActiveClass(a===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,a,o){if(e&1&&st(o,qt,5),e&2){let c;v(c=D())&&(a._allTabs=c)}},viewQuery:function(e,a){if(e&1&&Z(Ln,5)(Bn,5)(Ut,5),e&2){let o;v(o=D())&&(a._tabBodyWrapper=o.first),v(o=D())&&(a._tabHeader=o.first),v(o=D())&&(a._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,a){e&2&&(L("mat-align-tabs",a.alignTabs),lt("mat-"+(a.color||"primary")),be("--mat-tab-animation-duration",a.animationDuration),E("mat-mdc-tab-group-dynamic-height",a.dynamicHeight)("mat-mdc-tab-group-inverted-header",a.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",a.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",k],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",k],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",k],selectedIndex:[2,"selectedIndex","selectedIndex",ct],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ct],disablePagination:[2,"disablePagination","disablePagination",k],disableRipple:[2,"disableRipple","disableRipple",k],preserveContent:[2,"preserveContent","preserveContent",k],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[K([{provide:vn,useExisting:n}])],ngContentSelectors:jt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,a){e&1&&(ot(),r(0,"mat-tab-header",3,0),h("indexFocused",function(c){return a._focusChanged(c)})("selectFocusedIndex",function(c){return a.selectedIndex=c}),B(2,zn,8,17,"div",4,H),s(),p(4,Hn,1,0),r(5,"div",5,1),B(7,Gn,1,10,"mat-tab-body",6,H),s()),e&2&&(b("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),it("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby),d(2),O(a._tabs),d(2),_(a._isServer?4:-1),d(),E("_mat-animation-noopable",a._animationsDisabled()),d(2),O(a._tabs))},dependencies:[Zn,Dn,Le,zt,Ht,Ut],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),Qt=class{index;tab};var yn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[Ae]})}return n})();function sa(n,i){n&1&&f(0,"mat-progress-bar",2)}function la(n,i){if(n&1&&(r(0,"p",3),l(1),s()),n&2){let t=u();d(),T(t.form.getError("server"))}}function da(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),s())}function ca(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05DB\u05D9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05EA\u05D5\u05D5\u05D9\u05DD"),s())}function ma(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA \u05DC-100 \u05D2\u05E8\u05DD \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),s())}function ua(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05D9\u05E9 \u05DC\u05D4\u05D6\u05D9\u05DF \u05DC\u05E4\u05D7\u05D5\u05EA 1 \u05E7\u05E7\u05F4\u05DC"),s())}function ba(n,i){if(n&1&&(r(0,"mat-option",18),l(1),s()),n&2){let t=i.$implicit,e=u(2);b("value",t),d(),T(e.unitLabel(t))}}function pa(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05D1\u05D7\u05E8\u05D9 \u05D9\u05D7\u05D9\u05D3\u05D4"),s())}function _a(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05DE\u05E9\u05E7\u05DC \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),s())}function ha(n,i){n&1&&(r(0,"mat-error"),l(1,"\u05DE\u05E9\u05E7\u05DC \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC \u05DE-0"),s())}function fa(n,i){if(n&1){let t=w();r(0,"div",12)(1,"mat-form-field",16)(2,"mat-label"),l(3,"\u05D9\u05D7\u05D9\u05D3\u05D4"),s(),r(4,"mat-select",17),B(5,ba,2,2,"mat-option",18,H),s(),p(7,pa,2,0,"mat-error"),s(),r(8,"mat-form-field",19)(9,"mat-label"),l(10,"\u05DE\u05E9\u05E7\u05DC (\u05D2\u05E8\u05DD)"),s(),f(11,"input",20),p(12,_a,2,0,"mat-error")(13,ha,2,0,"mat-error"),s(),r(14,"button",21),h("click",function(){let a=y(t).$index,o=u();return x(o.removeServingSize(a))}),r(15,"mat-icon"),l(16,"remove_circle_outline"),s()()()}if(n&2){let t=i.$implicit,e=i.$index,a=u();b("formGroupName",e),d(5),O(a.unitOptions),d(2),_(t.controls.unit.touched&&t.controls.unit.hasError("required")?7:-1),d(5),_(t.controls.weightInGrams.touched&&t.controls.weightInGrams.hasError("required")?12:t.controls.weightInGrams.touched&&t.controls.weightInGrams.hasError("min")?13:-1),d(2),b("disabled",a.servingSizes.length<=1)}}var ga=["teaspoon","tablespoon","cup","slice","single","grams"],At=class n{fb=m(Se);productService=m(wt);dialogRef=m(Ze);unitOptions=ga;unitLabel=St;submitting=C(!1);form=this.fb.nonNullable.group({name:["",[A.required,A.minLength(2)]],caloriesPer100g:[null,[A.required,A.min(1)]],imageUrl:[""],servingSizes:this.fb.nonNullable.array([this.createServingSizeGroup()],A.minLength(1))});get servingSizes(){return this.form.controls.servingSizes}createServingSizeGroup(){return this.fb.nonNullable.group({unit:["",A.required],weightInGrams:[null,[A.required,A.min(.1)]]})}addServingSize(){this.servingSizes.push(this.createServingSizeGroup())}removeServingSize(i){this.servingSizes.length<=1||this.servingSizes.removeAt(i)}onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}let{name:i,caloriesPer100g:t,imageUrl:e,servingSizes:a}=this.form.getRawValue(),o=Kt({name:i.trim(),caloriesPer100g:Number(t),servingSizes:a.map(c=>({unit:c.unit,weightInGrams:Number(c.weightInGrams)}))},e.trim()?{imageUrl:e.trim()}:{});this.submitting.set(!0),this.form.disable(),this.productService.createProduct(o).pipe(ne(()=>{this.submitting.set(!1),this.form.enable()})).subscribe({next:c=>this.dialogRef.close(c),error:c=>{this.form.setErrors({server:c.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8"})}})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["app-admin-product-dialog"]],decls:39,vars:7,consts:[["mat-dialog-title",""],[1,"dialog-subtitle"],["mode","indeterminate",1,"dialog-loading"],["role","alert",1,"error-banner"],["novalidate","","id","admin-product-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","autocomplete","off"],["matInput","","type","number","formControlName","caloriesPer100g","min","1","step","1"],["matInput","","formControlName","imageUrl",1,"ltr-input"],["formArrayName","servingSizes",1,"serving-section"],[1,"section-header"],["mat-stroked-button","","type","button",3,"click"],[1,"serving-row",3,"formGroupName"],["align","end"],["mat-button","","type","button",3,"click","disabled"],["mat-flat-button","","color","primary","type","submit","form","admin-product-form",3,"disabled"],["appearance","outline",1,"unit-field"],["formControlName","unit"],[3,"value"],["appearance","outline",1,"weight-field"],["matInput","","type","number","formControlName","weightInGrams","min","0.1","step","0.1"],["mat-icon-button","","type","button","aria-label","\u05D4\u05E1\u05E8 \u05D9\u05D7\u05D9\u05D3\u05D4",3,"click","disabled"]],template:function(t,e){t&1&&(r(0,"h2",0),l(1,"\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9"),s(),r(2,"mat-dialog-content")(3,"p",1),l(4," \u05D4\u05DE\u05D5\u05E6\u05E8 \u05D9\u05D4\u05D9\u05D4 \u05D6\u05DE\u05D9\u05DF \u05DC\u05DB\u05DC \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD (createdBy = null). \u05E8\u05E7 \u05DE\u05E0\u05D4\u05DC \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9. "),s(),p(5,sa,1,0,"mat-progress-bar",2),p(6,la,2,1,"p",3),r(7,"form",4),h("ngSubmit",function(){return e.onSubmit()}),r(8,"mat-form-field",5)(9,"mat-label"),l(10,"\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8"),s(),f(11,"input",6),p(12,da,2,0,"mat-error")(13,ca,2,0,"mat-error"),s(),r(14,"mat-form-field",5)(15,"mat-label"),l(16,"\u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA \u05DC-100 \u05D2\u05E8\u05DD"),s(),f(17,"input",7),p(18,ma,2,0,"mat-error")(19,ua,2,0,"mat-error"),s(),r(20,"mat-form-field",5)(21,"mat-label"),l(22,"\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4 (\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)"),s(),f(23,"input",8),s(),r(24,"section",9)(25,"div",10)(26,"h3"),l(27,"\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05DE\u05E0\u05D4"),s(),r(28,"button",11),h("click",function(){return e.addServingSize()}),r(29,"mat-icon"),l(30,"add"),s(),l(31," \u05D4\u05D5\u05E1\u05E3 \u05D9\u05D7\u05D9\u05D3\u05D4 "),s()(),B(32,fa,17,4,"div",12,ue),s()()(),r(34,"mat-dialog-actions",13)(35,"button",14),h("click",function(){return e.cancel()}),l(36,"\u05D1\u05D9\u05D8\u05D5\u05DC"),s(),r(37,"button",15),l(38," \u05E9\u05DE\u05D5\u05E8 \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9 "),s()()),t&2&&(d(5),_(e.submitting()?5:-1),d(),_(e.form.hasError("server")?6:-1),d(),b("formGroup",e.form),d(5),_(e.form.controls.name.touched&&e.form.controls.name.hasError("required")?12:e.form.controls.name.touched&&e.form.controls.name.hasError("minlength")?13:-1),d(6),_(e.form.controls.caloriesPer100g.touched&&e.form.controls.caloriesPer100g.hasError("required")?18:e.form.controls.caloriesPer100g.touched&&e.form.controls.caloriesPer100g.hasError("min")?19:-1),d(14),O(e.servingSizes.controls),d(3),b("disabled",e.submitting()),d(2),b("disabled",e.submitting()))},dependencies:[bt,xe,mt,Ee,ut,Ce,Pe,Me,we,ke,Ie,tn,Ye,Je,Xe,ft,ht,_t,Ge,vt,gt,Pt,Mt,It,yt,Ct,Dt,Et,xt,kt,Tt],styles:[".dialog-subtitle[_ngcontent-%COMP%]{margin:0 0 16px;color:#0009;line-height:1.5}.dialog-loading[_ngcontent-%COMP%]{margin-block-end:12px}.error-banner[_ngcontent-%COMP%]{margin:0 0 12px;padding:10px 12px;border-radius:8px;background:#ffebee;color:#c62828;font-size:.875rem}.full-width[_ngcontent-%COMP%]{width:100%}.ltr-input[_ngcontent-%COMP%]{direction:ltr;text-align:start}.serving-section[_ngcontent-%COMP%]{margin-block-start:8px;padding-block-start:12px;border-top:1px solid rgba(0,0,0,.12)}.section-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-block-end:12px}.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:500}.serving-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:start;margin-block-end:8px}@media(max-width:599.98px){.serving-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};function va(n,i){n&1&&(r(0,"mat-icon",20),l(1,"inventory_2"),s(),l(2," \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9\u05D9\u05DD "))}function Da(n,i){n&1&&f(0,"mat-progress-bar",16)}function Ca(n,i){n&1&&(r(0,"p",17),l(1),s()),n&2&&(d(),T(i))}function ya(n,i){if(n&1){let t=w();r(0,"div",18)(1,"p"),l(2,"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9\u05D9\u05DD."),s(),r(3,"button",21),h("click",function(){y(t);let a=u();return x(a.openAddGlobalProductDialog())}),r(4,"mat-icon"),l(5,"add"),s(),l(6," \u05D4\u05D5\u05E1\u05E3 \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9 \u05E8\u05D0\u05E9\u05D5\u05DF "),s()()}}function xa(n,i){n&1&&(r(0,"th",34),l(1,"\u05E9\u05DD"),s())}function Ea(n,i){if(n&1&&(r(0,"td",35),l(1),s()),n&2){let t=i.$implicit;d(),T(t.name)}}function Ta(n,i){n&1&&(r(0,"th",34),l(1,"\u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA / 100 \u05D2\u05F3"),s())}function ka(n,i){if(n&1&&(r(0,"td",35),l(1),_e(2,"calorieFormat"),s()),n&2){let t=i.$implicit;d(),Q(" ",he(2,1,t.caloriesPer100g)," ")}}function Ia(n,i){n&1&&(r(0,"th",34),l(1,"\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05DE\u05D9\u05D3\u05D4"),s())}function wa(n,i){if(n&1&&(r(0,"td",36),l(1),s()),n&2){let t=i.$implicit,e=u(2);d(),Q(" ",e.servingSizesSummary(t)," ")}}function Ma(n,i){n&1&&(r(0,"th",34),l(1,"\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"),s())}function Pa(n,i){if(n&1){let t=w();r(0,"td",35)(1,"button",37),h("click",function(){let a=y(t).$implicit,o=u(2);return x(o.confirmDeleteProduct(a))}),r(2,"mat-icon"),l(3,"delete"),s()()()}if(n&2){let t=i.$implicit,e=u(2);d(),b("disabled",e.deletingProductId()===t._id)}}function Sa(n,i){n&1&&f(0,"tr",38)}function Aa(n,i){n&1&&f(0,"tr",39)}function Ra(n,i){if(n&1&&(r(0,"div",22)(1,"table",23),P(2,24),g(3,xa,2,0,"th",25)(4,Ea,2,1,"td",26),S(),P(5,27),g(6,Ta,2,0,"th",25)(7,ka,3,3,"td",26),S(),P(8,28),g(9,Ia,2,0,"th",25)(10,wa,2,1,"td",29),S(),P(11,30),g(12,Ma,2,0,"th",25)(13,Pa,4,1,"td",26),S(),g(14,Sa,1,0,"tr",31)(15,Aa,1,0,"tr",32),s()(),r(16,"p",33),l(17),s()),n&2){let t=u();d(),b("dataSource",t.globalProducts()),d(13),b("matHeaderRowDef",t.productColumns),d(),b("matRowDefColumns",t.productColumns),d(2),Q("",t.globalProducts().length," \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9\u05D9\u05DD")}}function La(n,i){n&1&&(r(0,"mat-icon",20),l(1,"group"),s(),l(2," \u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD "))}function Ba(n,i){n&1&&f(0,"mat-progress-bar",16)}function Oa(n,i){n&1&&(r(0,"p",17),l(1),s()),n&2&&(d(),T(i))}function Fa(n,i){n&1&&(r(0,"p",18),l(1,"\u05D0\u05D9\u05DF \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD."),s())}function Na(n,i){n&1&&(r(0,"th",34),l(1,"\u05E9\u05DD"),s())}function za(n,i){if(n&1&&(r(0,"td",35),l(1),s()),n&2){let t=i.$implicit;d(),T(t.name)}}function Ha(n,i){n&1&&(r(0,"th",34),l(1,"\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC"),s())}function Ga(n,i){if(n&1&&(r(0,"td",43),l(1),s()),n&2){let t=i.$implicit;d(),T(t.email)}}function Va(n,i){n&1&&(r(0,"th",34),l(1,"\u05EA\u05E4\u05E7\u05D9\u05D3"),s())}function $a(n,i){if(n&1&&(r(0,"span",44)(1,"span",46),l(2),s(),r(3,"span",47),l(4,"(\u05D0\u05EA)"),s()()),n&2){let t=u().$implicit,e=u(2);d(),E("role-admin",t.role==="admin"),d(),Q(" ",e.roleLabel(t.role)," ")}}function Ua(n,i){if(n&1&&(r(0,"mat-option",49),l(1),s()),n&2){let t=i.$implicit,e=u(4);b("value",t),d(),T(e.roleLabel(t))}}function Qa(n,i){if(n&1){let t=w();r(0,"mat-form-field",45)(1,"mat-select",48),h("selectionChange",function(a){y(t);let o=u().$implicit,c=u(2);return x(c.onUserRoleChange(o,a.value))}),B(2,Ua,2,2,"mat-option",49,H),s()()}if(n&2){let t=u().$implicit,e=u(2);d(),it("aria-label",pe("\u05E9\u05D9\u05E0\u05D5\u05D9 \u05EA\u05E4\u05E7\u05D9\u05D3 \u05E2\u05D1\u05D5\u05E8 ",t.name)),b("value",t.role)("disabled",e.updatingRoleUserId()===t._id),d(),O(e.roleOptions)}}function ja(n,i){if(n&1&&(r(0,"td",35),p(1,$a,5,3,"span",44)(2,Qa,4,4,"mat-form-field",45),s()),n&2){let t=i.$implicit,e=u(2);d(),_(e.isCurrentUser(t)?1:2)}}function Wa(n,i){n&1&&(r(0,"th",34),l(1,"\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"),s())}function qa(n,i){n&1&&(r(0,"span",47),l(1,"\u2014"),s())}function Za(n,i){if(n&1){let t=w();r(0,"button",51),h("click",function(){y(t);let a=u().$implicit,o=u(2);return x(o.confirmDeleteUser(a))}),r(1,"mat-icon"),l(2,"delete"),s()()}if(n&2){let t=u().$implicit,e=u(2);b("disabled",e.deletingUserId()===t._id)}}function Ka(n,i){if(n&1&&(r(0,"td",35),p(1,qa,2,0,"span",47)(2,Za,3,1,"button",50),s()),n&2){let t=i.$implicit,e=u(2);d(),_(e.isCurrentUser(t)?1:2)}}function Ya(n,i){n&1&&f(0,"tr",38)}function Xa(n,i){n&1&&f(0,"tr",39)}function Ja(n,i){if(n&1&&(r(0,"div",22)(1,"table",23),P(2,24),g(3,Na,2,0,"th",25)(4,za,2,1,"td",26),S(),P(5,40),g(6,Ha,2,0,"th",25)(7,Ga,2,1,"td",41),S(),P(8,42),g(9,Va,2,0,"th",25)(10,ja,3,1,"td",26),S(),P(11,30),g(12,Wa,2,0,"th",25)(13,Ka,3,1,"td",26),S(),g(14,Ya,1,0,"tr",31)(15,Xa,1,0,"tr",32),s()(),r(16,"p",33),l(17),s()),n&2){let t=u();d(),b("dataSource",t.users()),d(13),b("matHeaderRowDef",t.userColumns),d(),b("matRowDefColumns",t.userColumns),d(2),Q("",t.users().length," \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD")}}var xn=class n{productService=m(wt);userService=m(bn);authService=m(De);dialog=m(Ke);toastr=m(ve);destroyRef=m(re);selectedTab=C("products");globalProducts=C([]);productsLoading=C(!1);productsError=C(null);deletingProductId=C(null);productSearchControl=new ye("",{nonNullable:!0});productColumns=["name","calories","servingSizes","actions"];users=C([]);usersLoading=C(!1);usersError=C(null);updatingRoleUserId=C(null);deletingUserId=C(null);userColumns=["name","email","role","actions"];roleOptions=["user","admin"];unitLabel=St;ngOnInit(){this.productSearchControl.valueChanges.pipe(V(this.productSearchControl.value),J(300),ee(),ie(()=>{this.productsLoading.set(!0),this.productsError.set(null)}),tt(i=>this.productService.searchProducts(i.trim())),ge(this.destroyRef)).subscribe({next:i=>{this.globalProducts.set(i.filter(t=>t.createdBy===null)),this.productsLoading.set(!1)},error:i=>{this.productsError.set(i?.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"),this.productsLoading.set(!1)}})}onTabChange(i){let t=i===0?"products":"users";this.selectedTab.set(t),t==="users"&&this.loadUsers()}roleLabel(i){return i==="admin"?"\u05DE\u05E0\u05D4\u05DC":"\u05DE\u05E9\u05EA\u05DE\u05E9"}isCurrentUser(i){return i._id===this.authService.currentUser()?._id}onUserRoleChange(i,t){t===i.role||this.isCurrentUser(i)||(this.updatingRoleUserId.set(i._id),this.userService.updateUserRole(i._id,t).subscribe({next:e=>{this.users.update(a=>a.map(o=>o._id===e._id?e:o)),this.updatingRoleUserId.set(null),this.toastr.success(`\u05EA\u05E4\u05E7\u05D9\u05D3 "${i.name}" \u05E2\u05D5\u05D3\u05DB\u05DF \u05DC-${this.roleLabel(t)}`)},error:e=>{this.updatingRoleUserId.set(null),this.toastr.error(e?.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E2\u05D3\u05DB\u05D5\u05DF \u05D4\u05EA\u05E4\u05E7\u05D9\u05D3")}}))}confirmDeleteUser(i){if(this.isCurrentUser(i))return;let t={title:"\u05DE\u05D7\u05D9\u05E7\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9",message:`\u05D4\u05D0\u05DD \u05D0\u05EA \u05D1\u05D8\u05D5\u05D7\u05D4 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA "${i.name}" (${i.email})? \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05D0\u05D9\u05E0\u05D4 \u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC.`,confirmText:"\u05DE\u05D7\u05E7",cancelText:"\u05D1\u05D9\u05D8\u05D5\u05DC"};this.dialog.open(Gt,{data:t,width:"420px",maxWidth:"95vw"}).afterClosed().pipe(G(e=>e===!0)).subscribe(()=>this.deleteUser(i))}deleteUser(i){this.deletingUserId.set(i._id),this.userService.deleteUser(i._id).subscribe({next:()=>{this.users.update(t=>t.filter(e=>e._id!==i._id)),this.deletingUserId.set(null),this.toastr.success(`"${i.name}" \u05E0\u05DE\u05D7\u05E7 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4`)},error:t=>{this.deletingUserId.set(null),this.toastr.error(t?.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05DE\u05D7\u05D9\u05E7\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9")}})}loadUsers(){this.usersLoading.set(!0),this.usersError.set(null),this.userService.listUsers().subscribe({next:i=>{this.users.set(i),this.usersLoading.set(!1)},error:i=>{this.usersError.set(i?.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD"),this.usersLoading.set(!1)}})}tabIndex(){return this.selectedTab()==="products"?0:1}servingSizesSummary(i){return i.servingSizes.length?i.servingSizes.map(t=>`${this.unitLabel(t.unit)} (${t.weightInGrams} \u05D2\u05F3)`).join(" \xB7 "):"\u2014"}openAddGlobalProductDialog(){this.dialog.open(At,{width:"640px",maxWidth:"95vw",maxHeight:"90vh",autoFocus:"first-tabbable"}).afterClosed().pipe(G(i=>!!i)).subscribe(i=>this.onGlobalProductCreated(i))}onGlobalProductCreated(i){if(i.createdBy!==null)return;let t=this.productSearchControl.value.trim().toLowerCase();(!t||i.name.toLowerCase().includes(t))&&this.globalProducts.update(a=>[...a,i].sort((o,c)=>o.name.localeCompare(c.name,"he"))),this.toastr.success(`"${i.name}" \u05E0\u05D5\u05E1\u05E3 \u05DB\u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9`)}confirmDeleteProduct(i){let t={title:"\u05DE\u05D7\u05D9\u05E7\u05EA \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9",message:`\u05D4\u05D0\u05DD \u05D0\u05EA \u05D1\u05D8\u05D5\u05D7\u05D4 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA "${i.name}"? \u05D4\u05DE\u05D5\u05E6\u05E8 \u05D9\u05D5\u05E1\u05E8 \u05DE\u05DB\u05DC \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.`,confirmText:"\u05DE\u05D7\u05E7",cancelText:"\u05D1\u05D9\u05D8\u05D5\u05DC"};this.dialog.open(Gt,{data:t,width:"420px",maxWidth:"95vw"}).afterClosed().pipe(G(e=>e===!0)).subscribe(()=>this.deleteGlobalProduct(i))}deleteGlobalProduct(i){this.deletingProductId.set(i._id),this.productService.deleteProduct(i._id).subscribe({next:()=>{this.globalProducts.update(t=>t.filter(e=>e._id!==i._id)),this.deletingProductId.set(null),this.toastr.success(`"${i.name}" \u05E0\u05DE\u05D7\u05E7 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4`)},error:t=>{this.deletingProductId.set(null),this.toastr.error(t?.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05DE\u05D7\u05D9\u05E7\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8")}})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["app-admin"]],decls:43,vars:10,consts:[[1,"admin-page"],[1,"page-header"],[1,"header-text"],[1,"subtitle"],["aria-label","\u05E0\u05D9\u05D5\u05D5\u05D8",1,"page-nav"],["mat-button","","routerLink","/dashboard"],["animationDuration","200ms",1,"admin-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],["aria-label","\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9\u05D9\u05DD",1,"tab-panel"],[1,"panel-toolbar"],[1,"toolbar-start"],[1,"panel-hint"],["mat-flat-button","","color","primary","type","button",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"search-field"],["matInput","","autocomplete","off",3,"formControl"],["matPrefix","","aria-hidden","true"],["mode","indeterminate",1,"panel-loading"],["role","alert",1,"error-banner"],[1,"empty-state"],["aria-label","\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD",1,"tab-panel"],["aria-hidden","true",1,"tab-icon"],["mat-stroked-button","","color","primary","type","button",3,"click"],[1,"table-wrapper"],["mat-table","",1,"admin-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","calories"],["matColumnDef","servingSizes"],["mat-cell","","class","serving-cell",4,"matCellDef"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"results-count"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"serving-cell"],["mat-icon-button","","type","button","color","warn","aria-label","\u05DE\u05D7\u05E7 \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9",3,"click","disabled"],["mat-header-row",""],["mat-row",""],["matColumnDef","email"],["mat-cell","","class","email-cell",4,"matCellDef"],["matColumnDef","role"],["mat-cell","",1,"email-cell"],[1,"role-cell-self"],["appearance","outline","subscriptSizing","dynamic",1,"role-field"],[1,"role-badge"],[1,"self-hint"],[3,"selectionChange","value","disabled","aria-label"],[3,"value"],["mat-icon-button","","type","button","color","warn","aria-label","\u05DE\u05D7\u05E7 \u05DE\u05E9\u05EA\u05DE\u05E9",3,"disabled"],["mat-icon-button","","type","button","color","warn","aria-label","\u05DE\u05D7\u05E7 \u05DE\u05E9\u05EA\u05DE\u05E9",3,"click","disabled"]],template:function(t,e){if(t&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"h1"),l(4,"\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA"),s(),r(5,"p",3),l(6,"\u05D2\u05D9\u05E9\u05D4 \u05DC\u05DE\u05E0\u05D4\u05DC \u05D1\u05DC\u05D1\u05D3 \u2014 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9\u05D9\u05DD \u05D5\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD"),s(),r(7,"nav",4)(8,"a",5)(9,"mat-icon"),l(10,"home"),s(),l(11," \u05DC\u05D5\u05D7 \u05D4\u05D1\u05E7\u05E8\u05D4 "),s()()()(),r(12,"mat-tab-group",6),h("selectedIndexChange",function(o){return e.onTabChange(o)}),r(13,"mat-tab"),g(14,va,3,0,"ng-template",7),r(15,"section",8)(16,"div",9)(17,"div",10)(18,"p",11),l(19,"\u05E8\u05E7 \u05DE\u05E0\u05D4\u05DC \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D0\u05D5 \u05DC\u05DE\u05D7\u05D5\u05E7 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9\u05D9\u05DD"),s(),r(20,"button",12),h("click",function(){return e.openAddGlobalProductDialog()}),r(21,"mat-icon"),l(22,"add"),s(),l(23," \u05D4\u05D5\u05E1\u05E3 \u05DE\u05D5\u05E6\u05E8 \u05D2\u05DC\u05D5\u05D1\u05DC\u05D9 "),s()(),r(24,"mat-form-field",13)(25,"mat-label"),l(26,"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8"),s(),f(27,"input",14),r(28,"mat-icon",15),l(29,"search"),s()()(),p(30,Da,1,0,"mat-progress-bar",16),p(31,Ca,2,1,"p",17),p(32,ya,7,0,"div",18),p(33,Ra,18,4),s()(),r(34,"mat-tab"),g(35,La,3,0,"ng-template",7),r(36,"section",19)(37,"p",11),l(38,"\u05E9\u05D9\u05E0\u05D5\u05D9 \u05EA\u05E4\u05E7\u05D9\u05D3 \u05D5\u05DE\u05D7\u05D9\u05E7\u05D4 \u2014 \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05D5 \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D4\u05DE\u05D7\u05D5\u05D1\u05E8 (\u05D0\u05EA)"),s(),p(39,Ba,1,0,"mat-progress-bar",16),p(40,Oa,2,1,"p",17),p(41,Fa,2,0,"p",18),p(42,Ja,18,4),s()()()()),t&2){let a,o;d(12),b("selectedIndex",e.tabIndex()),d(15),b("formControl",e.productSearchControl),d(3),_(e.productsLoading()?30:-1),d(),_((a=e.productsError())?31:-1,a),d(),_(!e.productsLoading()&&!e.productsError()&&e.globalProducts().length===0?32:-1),d(),_(e.globalProducts().length>0?33:-1),d(6),_(e.usersLoading()?39:-1),d(),_((o=e.usersError())?40:-1,o),d(),_(!e.usersLoading()&&!e.usersError()&&e.users().length===0?41:-1),d(),_(e.users().length>0?42:-1)}},dependencies:[bt,mt,ut,Te,fe,yt,Ct,Dt,Re,ft,ht,_t,Ve,Et,xt,vt,gt,kt,Tt,Pt,Mt,It,un,en,an,ln,on,nn,dn,rn,sn,cn,mn,yn,Wt,qt,Cn,qe],styles:[".admin-page[_ngcontent-%COMP%]{max-width:1100px;margin:0 auto;padding:24px 16px 32px;box-sizing:border-box}.page-header[_ngcontent-%COMP%]{margin-block-end:24px}.header-text[_ngcontent-%COMP%]{text-align:center}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.75rem;font-weight:500}.subtitle[_ngcontent-%COMP%]{margin:0;color:#0009}.page-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;margin-block-start:12px}.page-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-inline-end:4px}.admin-tabs[_ngcontent-%COMP%]{margin-block-start:8px}.tab-icon[_ngcontent-%COMP%]{margin-inline-end:6px;vertical-align:middle}.tab-panel[_ngcontent-%COMP%]{padding:20px 0 8px}.panel-toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-block-end:16px}.toolbar-start[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:12px}.toolbar-start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-inline-end:4px}.panel-hint[_ngcontent-%COMP%]{margin:0;font-size:.875rem;color:#0000008c}.search-field[_ngcontent-%COMP%]{width:100%;max-width:360px}.panel-loading[_ngcontent-%COMP%]{margin-block-end:16px}.error-banner[_ngcontent-%COMP%]{margin:0 0 16px;padding:12px 16px;border-radius:8px;background:#ffebee;color:#c62828}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;margin:0;padding:32px 16px;text-align:center;color:#00000073}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-style:italic}.empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-inline-end:4px}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;border-radius:8px;border:1px solid rgba(0,0,0,.12)}.admin-table[_ngcontent-%COMP%]{width:100%}.serving-cell[_ngcontent-%COMP%]{max-width:280px;font-size:.875rem;line-height:1.4;color:#000000a6}.results-count[_ngcontent-%COMP%]{margin:12px 0 0;font-size:.875rem;color:#00000080;text-align:end}.email-cell[_ngcontent-%COMP%]{direction:ltr;text-align:start;font-size:.875rem}.role-badge[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;border-radius:999px;font-size:.8125rem;background:#e3f2fd;color:#1565c0}.role-badge.role-admin[_ngcontent-%COMP%]{background:#ede7f6;color:#4527a0}.role-cell-self[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px}.self-hint[_ngcontent-%COMP%]{font-size:.8125rem;color:#00000073}.role-field[_ngcontent-%COMP%]{width:132px;margin:0}.role-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{display:none}.panel-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-block-end:8px}.placeholder-text[_ngcontent-%COMP%]{margin:0;padding:16px;border-radius:8px;background:#3f51b50f;color:#000000b3;line-height:1.5}@media(min-width:600px){.header-text[_ngcontent-%COMP%]{text-align:start}.page-nav[_ngcontent-%COMP%]{justify-content:flex-start}.panel-toolbar[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-end;justify-content:space-between}.toolbar-start[_ngcontent-%COMP%]{flex-direction:row;align-items:center;flex-wrap:wrap}}@media(max-width:599.98px){.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.tab-panel[_ngcontent-%COMP%]{padding-block-start:16px}}"]})};export{xn as AdminComponent};
