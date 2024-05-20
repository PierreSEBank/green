/*! For license information please see src-components-segmented-control-segmented-control-stories.7fa6dd92.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[316],{"./node_modules/@lit/localize/lit-localize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ab:()=>msg,gx:()=>str,fA:()=>updateWhenLocaleChanges});const str=(strings,...values)=>({strTag:!0,strings,values});class LocalizeController{constructor(host){this.__litLocalizeEventHandler=event=>{"ready"===event.detail.status&&this.host.requestUpdate()},this.host=host}hostConnected(){window.addEventListener("lit-localize-status",this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener("lit-localize-status",this.__litLocalizeEventHandler)}}const updateWhenLocaleChanges=host=>host.addController(new LocalizeController(host));const hl=[];for(let i=0;i<256;i++)hl[i]=(i>>4&15).toString(16)+(15&i).toString(16);new WeakMap,new Map;let loading=new class deferred_Deferred{constructor(){this.settled=!1,this.promise=new Promise(((resolve,reject)=>{this._resolve=resolve,this._reject=reject}))}resolve(value){this.settled=!0,this._resolve(value)}reject(error){this.settled=!0,this._reject(error)}};loading.resolve();let msg=template=>{return"string"!=typeof(val=template)&&"strTag"in val?((strings,values,valueOrder)=>{let concat=strings[0];for(let i=1;i<strings.length;i++)concat+=values[valueOrder?valueOrder[i-1]:i-1],concat+=strings[i];return concat})(template.strings,template.values):template;var val}},"./libs/core/src/components/segmented-control/segmented-control.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,SegmentSize:()=>SegmentSize,Small:()=>Small,Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>segmented_control_stories});var _templateObject,taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),lit=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/lit/index.js")),chunk_N4CCDFIX=__webpack_require__("./dist/libs/core/src/chunks/chunk.N4CCDFIX.js"),chunk_ZLWSCK7R=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var GdsSegment=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return(0,chunk_VOYMQ322.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["<button aria-current=",">\n      <slot></slot>\n    </button>"])),String(this.selected))}};GdsSegment.styles=[...chunk_N4CCDFIX.L,(0,lit.iz)(":host {\n  display: flex;\n  transition: 0.2s;\n  z-index: 1;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-family: inherit;\n  font-size: inherit;\n  overflow: hidden;\n  padding: 0 1rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n@media (pointer: fine) {\n  button:hover {\n    background-color: color-mix(\n      in srgb,\n      var(--gds-sys-color-state-layers-state-black-dim1),\n      transparent\n    );\n  }\n}\n\nbutton:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: -2px;\n}\n")],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsSegment.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegment.prototype,"value",2),GdsSegment=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-segment")],GdsSegment);var chunk_76TCSZCA_templateObject,_templateObject2,_templateObject3,chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js");function chunk_76TCSZCA_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _value,_firstVisibleIndex,_calculatedSegmentWidth,_segmentWidth,_segmentsContainerLeft,_focusedIndex,_dragStartX,_dragStartLeft,_isDragging,_startDrag,_drag,_endDrag,_calcVisibleAfterDrag,_calcLayout,_applySegmentsTransform,_handleSlotChange,handleSlotChange_fn,_scrollLeft,_scrollRight,_updateScrollBtnState,_updateIndicator,_handleSegmentClick,_updateSelectedFromValue,BTN_SIZE={small:36,medium:44},getSegmentGap=transitionalStyles=>transitionalStyles?0:4,GdsSegmentedControl=class extends chunk_ZQ4D5K7J.j{constructor(){var _this;super(...arguments),_this=this,(0,chunk_5VURDMKE.VK)(this,_handleSlotChange),this.segMinWidth=100,this.size="medium",(0,chunk_5VURDMKE.VK)(this,_value,void 0),this._showPrevButton=!1,this._showNextButton=!1,(0,chunk_5VURDMKE.VK)(this,_firstVisibleIndex,0),(0,chunk_5VURDMKE.VK)(this,_calculatedSegmentWidth,0),(0,chunk_5VURDMKE.VK)(this,_segmentWidth,0),(0,chunk_5VURDMKE.VK)(this,_segmentsContainerLeft,0),(0,chunk_5VURDMKE.VK)(this,_focusedIndex,0),(0,chunk_5VURDMKE.VK)(this,_dragStartX,0),(0,chunk_5VURDMKE.VK)(this,_dragStartLeft,0),(0,chunk_5VURDMKE.VK)(this,_isDragging,!1),(0,chunk_5VURDMKE.VK)(this,_startDrag,(event=>{(0,chunk_5VURDMKE.OV)(this,_dragStartX,event.clientX),(0,chunk_5VURDMKE.OV)(this,_dragStartLeft,(0,chunk_5VURDMKE.S7)(this,_segmentsContainerLeft)),(0,chunk_5VURDMKE.OV)(this,_isDragging,!0)})),(0,chunk_5VURDMKE.VK)(this,_drag,(event=>{if((0,chunk_5VURDMKE.S7)(this,_isDragging)){event.preventDefault();var delta=event.clientX-(0,chunk_5VURDMKE.S7)(this,_dragStartX);if(!(Math.abs(delta)<5))try{this._elSegments.hasPointerCapture(event.pointerId)||this._elSegments.setPointerCapture(event.pointerId),(0,chunk_5VURDMKE.OV)(this,_segmentsContainerLeft,(0,chunk_5VURDMKE.S7)(this,_dragStartLeft)+delta),(0,chunk_5VURDMKE.S7)(this,_applySegmentsTransform).call(this)}catch(e){}}})),(0,chunk_5VURDMKE.VK)(this,_endDrag,(event=>{if((0,chunk_5VURDMKE.S7)(this,_isDragging)){(0,chunk_5VURDMKE.OV)(this,_isDragging,!1);try{this._elSegments.releasePointerCapture(event.pointerId),(0,chunk_5VURDMKE.S7)(this,_calcVisibleAfterDrag).call(this)}catch(e){}}})),(0,chunk_5VURDMKE.VK)(this,_calcVisibleAfterDrag,(()=>{(0,chunk_5VURDMKE.OV)(this,_firstVisibleIndex,Math.round(-(0,chunk_5VURDMKE.S7)(this,_segmentsContainerLeft)/(0,chunk_5VURDMKE.S7)(this,_calculatedSegmentWidth))),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)})),(0,chunk_5VURDMKE.VK)(this,_calcLayout,(function(){var followFocus=arguments.length>0&&void 0!==arguments[0]&&arguments[0],calcNumVisibleSegments=()=>{var numSegments=_this.segments.length,availableWidth=_this._elTrack.offsetWidth;if(availableWidth/numSegments>_this.segMinWidth)return{count:numSegments,segmentWidth:(availableWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(numSegments-1))/numSegments};var availableWidthIncBtns=_this.offsetWidth-2*BTN_SIZE[_this.size],maxVisibleSegments=Math.floor(availableWidthIncBtns/_this.segMinWidth);return{count:maxVisibleSegments,segmentWidth:(availableWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(maxVisibleSegments-1))/maxVisibleSegments}},{count}=calcNumVisibleSegments();followFocus&&((0,chunk_5VURDMKE.S7)(_this,_focusedIndex)>=(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)+count&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,(0,chunk_5VURDMKE.S7)(_this,_focusedIndex)-count+1),(0,chunk_5VURDMKE.S7)(_this,_focusedIndex)<(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,(0,chunk_5VURDMKE.S7)(_this,_focusedIndex)));var endFirstIndex=_this.segments.length-count,hasReachedEnd=(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)>=endFirstIndex,isAtStart=(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)<=0;hasReachedEnd&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,endFirstIndex),isAtStart&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,0),(0,chunk_5VURDMKE.S7)(_this,_updateScrollBtnState).call(_this,count),_this.updateComplete.then((()=>{var{segmentWidth,count:count2}=calcNumVisibleSegments();_this.segments.forEach((segment=>{segment.style.width=segmentWidth+"px"})),(0,chunk_5VURDMKE.OV)(_this,_segmentsContainerLeft,-(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)*segmentWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)),(0,chunk_5VURDMKE.S7)(_this,_applySegmentsTransform).call(_this),(0,chunk_5VURDMKE.OV)(_this,_calculatedSegmentWidth,segmentWidth),(0,chunk_5VURDMKE.OV)(_this,_segmentWidth,segmentWidth),(0,chunk_5VURDMKE.S7)(_this,_updateIndicator).call(_this)}))})),(0,chunk_5VURDMKE.VK)(this,_applySegmentsTransform,(()=>{window.requestAnimationFrame((()=>{this._elSegments.style.transform="translateX(".concat((0,chunk_5VURDMKE.S7)(this,_segmentsContainerLeft),"px)")}))})),(0,chunk_5VURDMKE.VK)(this,_scrollLeft,(()=>{(0,chunk_5VURDMKE.nT)(this,_firstVisibleIndex)._--,(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)})),(0,chunk_5VURDMKE.VK)(this,_scrollRight,(()=>{(0,chunk_5VURDMKE.nT)(this,_firstVisibleIndex)._++,(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)})),(0,chunk_5VURDMKE.VK)(this,_updateScrollBtnState,(numVisibleSegments=>{this._showPrevButton=(0,chunk_5VURDMKE.S7)(this,_firstVisibleIndex)>0,this._showNextButton=(0,chunk_5VURDMKE.S7)(this,_firstVisibleIndex)<this.segments.length-numVisibleSegments})),(0,chunk_5VURDMKE.VK)(this,_updateIndicator,(()=>{var segment=this.segments.find((s=>s.selected));if(segment){var selectedSegmentIndex=this.segments.indexOf(segment),offset=selectedSegmentIndex*(0,chunk_5VURDMKE.S7)(this,_segmentWidth)+getSegmentGap(this._isUsingTransitionalStyles)*selectedSegmentIndex;this._elIndicator.style.transform="translateX(".concat(offset,"px)"),this._elIndicator.style.width="".concat((0,chunk_5VURDMKE.S7)(this,_segmentWidth),"px")}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"})),(0,chunk_5VURDMKE.VK)(this,_handleSegmentClick,(event=>{var selectedSegment=this.segments.find((s=>s===event.target||s.contains(event.target)));selectedSegment&&(this.segments.forEach((s=>s.selected=!1)),selectedSegment.selected=!0,(0,chunk_5VURDMKE.OV)(this,_value,selectedSegment.value),(0,chunk_5VURDMKE.S7)(this,_updateIndicator).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:selectedSegment},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)(this,_updateSelectedFromValue,(()=>{(0,chunk_5VURDMKE.S7)(this,_value)&&this.updateComplete.then((()=>{var selectedSegment=this.segments.find((s=>s.value===(0,chunk_5VURDMKE.S7)(this,_value)));selectedSegment&&(this.segments.forEach((s=>s.selected=!1)),selectedSegment.selected=!0,(0,chunk_5VURDMKE.OV)(this,_focusedIndex,this.segments.indexOf(selectedSegment)),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this,!0))}))}))}get value(){return(0,chunk_5VURDMKE.S7)(this,_value)}set value(val){(0,chunk_5VURDMKE.OV)(this,_value,val),(0,chunk_5VURDMKE.S7)(this,_updateSelectedFromValue).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",(e=>{e.target instanceof GdsSegment&&((0,chunk_5VURDMKE.OV)(this,_focusedIndex,this.segments.indexOf(e.target)),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this,!0))}))}render(){return(0,chunk_VOYMQ322.qy)(chunk_76TCSZCA_templateObject||(chunk_76TCSZCA_templateObject=chunk_76TCSZCA_taggedTemplateLiteral(["",'\n      <div\n        id="track"\n        @scroll=','\n      >\n        <div\n          id="segments"\n          @pointerdown=',"\n          @pointermove=","\n          @touchmove=","\n          @pointerup=","\n          @pointercancel=",'\n          role="list"\n        >\n          <slot\n            gds-allow="gds-segment"\n            @click=',"\n            @slotchange=",'\n            role="none"\n          ></slot>\n          <div id="indicator" role="none"></div>\n        </div>\n      </div>\n      ',""])),(0,when.z)(this._showPrevButton,(()=>(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=chunk_76TCSZCA_taggedTemplateLiteral(['<button\n            id="btn-prev"\n            @click=',"\n            aria-label=",'\n          >\n            <gds-icon name="chevron-left"></gds-icon>\n          </button>'])),(0,chunk_5VURDMKE.S7)(this,_scrollLeft),(0,lit_localize.ab)("Scroll right")))),(()=>{this._elTrack.scrollLeft=0}),(0,chunk_5VURDMKE.S7)(this,_startDrag),(0,chunk_5VURDMKE.S7)(this,_drag),(0,chunk_5VURDMKE.S7)(this,_drag),(0,chunk_5VURDMKE.S7)(this,_endDrag),(0,chunk_5VURDMKE.S7)(this,_endDrag),(0,chunk_5VURDMKE.S7)(this,_handleSegmentClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn),(0,when.z)(this._showNextButton,(()=>(0,chunk_VOYMQ322.qy)(_templateObject3||(_templateObject3=chunk_76TCSZCA_taggedTemplateLiteral(['<button\n            id="btn-next"\n            @click=',"\n            aria-label=",'\n          >\n            <gds-icon name="chevron-right"></gds-icon>\n          </button>'])),(0,chunk_5VURDMKE.S7)(this,_scrollRight),(0,lit_localize.ab)("Scroll right")))))}_recalculateMinWidth(){this.updateComplete.then((()=>(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)))}};_value=new WeakMap,_firstVisibleIndex=new WeakMap,_calculatedSegmentWidth=new WeakMap,_segmentWidth=new WeakMap,_segmentsContainerLeft=new WeakMap,_focusedIndex=new WeakMap,_dragStartX=new WeakMap,_dragStartLeft=new WeakMap,_isDragging=new WeakMap,_startDrag=new WeakMap,_drag=new WeakMap,_endDrag=new WeakMap,_calcVisibleAfterDrag=new WeakMap,_calcLayout=new WeakMap,_applySegmentsTransform=new WeakMap,_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selSegmentValue=null==(_a=this.segments.find((s=>s.selected)))?void 0:_a.value;selSegmentValue&&(0,chunk_5VURDMKE.OV)(this,_value,selSegmentValue),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)},_scrollLeft=new WeakMap,_scrollRight=new WeakMap,_updateScrollBtnState=new WeakMap,_updateIndicator=new WeakMap,_handleSegmentClick=new WeakMap,_updateSelectedFromValue=new WeakMap,GdsSegmentedControl.styles=[chunk_N4CCDFIX.L,(0,lit.iz)(":host {\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  box-sizing: border-box;\n  contain: layout;\n  display: inline-flex;\n  gap: 0.25rem;\n  height: 3rem;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n:host([size='small']) {\n  height: 2.5rem;\n}\n\n#track {\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 1;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n#segments {\n  box-sizing: border-box;\n  display: inline-flex;\n  gap: 0.25rem;\n  position: relative;\n  transition: 0.2s;\n  z-index: 1;\n}\n\n#btn-prev,\n#btn-next {\n  align-items: center;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  aspect-ratio: 1;\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  height: 100%;\n  justify-content: center;\n  width: 2.5rem;\n\n  @media (pointer: fine) {\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        var(--gds-sys-color-container-container-dim1)\n      );\n    }\n  }\n}\n\n:host([size='small']) #btn-prev,\n:host([size='small']) #btn-next {\n  width: 2rem;\n}\n\n::slotted(*) {\n  flex-grow: 1;\n  flex-shrink: 0;\n  z-index: 1;\n}\n\n#indicator {\n  background-color: var(--gds-sys-color-container-container-bright);\n  border-radius: calc(infinity * 1px);\n  height: 100%;\n  left: 0;\n  position: absolute;\n  transition:\n    transform 0.2s,\n    width 0.2s;\n  z-index: 0;\n}\n")],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number,attribute:"seg-min-width"})],GdsSegmentedControl.prototype,"segMinWidth",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegmentedControl.prototype,"size",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegmentedControl.prototype,"value",1),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsSegmentedControl.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#indicator")],GdsSegmentedControl.prototype,"_elIndicator",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#track")],GdsSegmentedControl.prototype,"_elTrack",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#segments")],GdsSegmentedControl.prototype,"_elSegments",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showPrevButton",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showNextButton",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)(),(0,chunk_2WO4NHJ2.w)("segMinWidth")],GdsSegmentedControl.prototype,"_recalculateMinWidth",1),GdsSegmentedControl=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-segmented-control")],GdsSegmentedControl);var segmented_control_stories_templateObject,segmented_control_stories_templateObject2,segmented_control_stories_templateObject3;__webpack_require__("./dist/libs/core/src/chunks/chunk.DFTJBJPB.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");const segmented_control_stories={title:"Components/Segmented Control",component:"gds-segmented-control",subcomponents:{MenuItem:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/segmented-control)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)\n\nA segmented control is a group of 2-5 buttons that lets the user switch views or sort elements."}}},tags:["autodocs"]};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:'<gds-segment value="1">Item 1</gds-segment>\n<gds-segment value="2">Item 2</gds-segment>\n<gds-segment value="3">Item 3</gds-segment>',value:"1"}},Basic=Object.assign({},DefaultParams),Usage=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(segmented_control_stories_templateObject||(segmented_control_stories_templateObject=taggedTemplateLiteralLoose_default()(['\n    <gds-segmented-control\n      value="2"\n      onchange="document.getElementById(\'sel\').innerText = event.target.value"\n    >\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n      <gds-segment value="4">Fourth</gds-segment>\n      <gds-segment value="5">Fifth</gds-segment>\n    </gds-segmented-control>\n    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>\n  '])))}}),Small=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(segmented_control_stories_templateObject2||(segmented_control_stories_templateObject2=taggedTemplateLiteralLoose_default()(['\n    <gds-segmented-control size="small" value="2">\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n    </gds-segmented-control>\n  '])))}}),SegmentSize=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(segmented_control_stories_templateObject3||(segmented_control_stories_templateObject3=taggedTemplateLiteralLoose_default()(['\n    <div style="max-width: 800px">\n      <gds-segmented-control seg-min-width="200" value="3">\n        <gds-segment value="1">First</gds-segment>\n        <gds-segment value="2">Unusually long label text</gds-segment>\n        <gds-segment value="3">Third</gds-segment>\n        <gds-segment value="4">Fourth</gds-segment>\n        <gds-segment value="5">Fifth</gds-segment>\n      </gds-segmented-control>\n    </div>\n  '])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams\n}",...Basic.parameters?.docs?.source}}},Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-segmented-control\n      value="2"\n      onchange="document.getElementById(\'sel\').innerText = event.target.value"\n    >\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n      <gds-segment value="4">Fourth</gds-segment>\n      <gds-segment value="5">Fifth</gds-segment>\n    </gds-segmented-control>\n    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>\n  `\n}',...Usage.parameters?.docs?.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...Usage.parameters?.docs?.description}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-segmented-control size="small" value="2">\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n    </gds-segmented-control>\n  `\n}',...Small.parameters?.docs?.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...Small.parameters?.docs?.description}}},SegmentSize.parameters={...SegmentSize.parameters,docs:{...SegmentSize.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <div style="max-width: 800px">\n      <gds-segmented-control seg-min-width="200" value="3">\n        <gds-segment value="1">First</gds-segment>\n        <gds-segment value="2">Unusually long label text</gds-segment>\n        <gds-segment value="3">Third</gds-segment>\n        <gds-segment value="4">Fourth</gds-segment>\n        <gds-segment value="5">Fifth</gds-segment>\n      </gds-segmented-control>\n    </div>\n  `\n}',...SegmentSize.parameters?.docs?.source},description:{story:"The size of the segments can be configured using the `seg-min-width` attribute. This influences\nhow many segments will be visible at the same time. If you have long segment labels and want to\navoid concatenation, you can increase the `seg-min-width` attribute. But keep in mind that the\nbest practice is to keep the segment labels short.",...SegmentSize.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","Usage","Small","SegmentSize"]},"./dist/libs/core/src/chunks/chunk.DFTJBJPB.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js");var GdsIcon=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_0__.j{constructor(){super(...arguments),this.open=!1,this.name=""}static get styles(){return(0,lit__WEBPACK_IMPORTED_MODULE_3__.iz)("svg:not([display=none]) {\n  contain: layout style;\n  display: flex;\n  height: 1lh;\n  isolation: isolate;\n  overflow: hidden;\n  width: auto;\n}\n\nsymbol {\n  fill: none;\n  height: 24px;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2px;\n  width: 24px;\n}")}render(){var{name}=this;return(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n      <svg display="none">\n        <symbol id="plus">\n          <line x1="12" y1="5" x2="12" y2="19" />\n          <line x1="5" y1="12" x2="19" y2="12" />\n        </symbol>\n        <symbol id="x">\n          <line x1="18" y1="6" x2="6" y2="18" />\n          <line x1="6" y1="6" x2="18" y2="18" />\n        </symbol>\n        <symbol id="chevron-right">\n          <polyline points="9 18 15 12 9 6" />\n        </symbol>\n        <symbol id="chevron-left">\n          <polyline points="15 18 9 12 15 6" />\n        </symbol>\n        <symbol id="chevron-down">\n          <polyline points="6 9 12 15 18 9" />\n        </symbol>\n        <symbol id="arrow">\n          <line x1="5" y1="12" x2="19" y2="12" />\n          <polyline points="12 5 19 12 12 19" />\n        </symbol>\n        <symbol id="bell">\n          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />\n          <path d="M13.73 21a2 2 0 0 1-3.46 0" />\n        </symbol>\n        <symbol id="calendar">\n          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />\n          <line x1="16" y1="2" x2="16" y2="6" />\n          <line x1="8" y1="2" x2="8" y2="6" />\n          <line x1="3" y1="10" x2="21" y2="10" />\n        </symbol>\n        <symbol id="lock">\n          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\n          <path d="M7 11V7a5 5 0 0 1 10 0v4" />\n        </symbol>\n        <symbol id="eye">\n          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\n          <circle cx="12" cy="12" r="3" />\n        </symbol>\n        <symbol id="hash">\n          <line x1="4" y1="9" x2="20" y2="9" />\n          <line x1="4" y1="15" x2="20" y2="15" />\n          <line x1="10" y1="3" x2="8" y2="21" />\n          <line x1="16" y1="3" x2="14" y2="21" />\n        </symbol>\n        <symbol id="mail">\n          <path\n            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"\n          />\n          <polyline points="22,6 12,13 2,6" />\n        </symbol>\n        <symbol id="send">\n          <line x1="22" y1="2" x2="11" y2="13" />\n          <polygon points="22 2 15 22 11 13 2 9 22 2" />\n        </symbol>\n        <symbol id="info">\n          <circle cx="12" cy="12" r="10" />\n          <line x1="12" y1="16" x2="12" y2="12" />\n          <line x1="12" y1="8" x2="12.01" y2="8" />\n        </symbol>\n        <symbol id="tel">\n          <path\n            d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"\n          />\n        </symbol>\n        <symbol id="search">\n          <circle cx="11" cy="11" r="8" />\n          <line x1="21" y1="21" x2="16.65" y2="16.65" />\n        </symbol>\n        <symbol id="user">\n          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />\n          <circle cx="12" cy="7" r="4" />\n        </symbol>\n        <symbol id="arrow-up">\n          <line x1="12" y1="19" x2="12" y2="5" />\n          <polyline points="5 12 12 5 19 12" />\n        </symbol>\n        <symbol id="arrow-down">\n          <line x1="12" y1="5" x2="12" y2="19" />\n          <polyline points="19 12 12 19 5 12" />\n        </symbol>\n        <symbol id="warning">\n          <path\n            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\n          />\n          <line x1="12" y1="9" x2="12" y2="13" />\n          <path x1="12" y1="17" x2="12.01" y2="17" />\n        </symbol>\n        <symbol id="checkmark">\n          <path\n            d="M2.75 15.0938L9 20.25L21.25 3.75"\n            stroke-width="2"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n          />\n        </symbol>\n      </svg>\n      <svg viewBox="0 0 24 24">\n        <use href="#','"></use>\n      </svg>\n    '])),name)}};GdsIcon.properties={open:{type:String,reflect:!0},name:{type:String}},GdsIcon=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon")],GdsIcon)},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return(proto,propertyKey,descriptor)=>{var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((()=>{this.__resizeObserver_tids[propertyKey]&&clearTimeout(this.__resizeObserver_tids[propertyKey]),this.__resizeObserver_tids[propertyKey]=setTimeout((()=>{var _a;null==(_a=descriptor.value)||_a.call(this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})}}]);