"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4316],{"./libs/core/src/components/segmented-control/segmented-control.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,SegmentSize:()=>SegmentSize,Small:()=>Small,Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>segmented_control_stories});var _templateObject,taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),lit=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/lit/index.js")),chunk_XEIPYLYK=__webpack_require__("./dist/libs/core/src/chunks/chunk.XEIPYLYK.js"),chunk_5LNBEZ2R=__webpack_require__("./dist/libs/core/src/chunks/chunk.5LNBEZ2R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var GdsSegment=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),chunk_5LNBEZ2R.nD.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return(0,chunk_VOYMQ322.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["<button aria-current=",">\n      <slot></slot>\n    </button>"])),String(this.selected))}};GdsSegment.styles=[...chunk_XEIPYLYK.L,(0,lit.iz)(":host {\n  display: flex;\n  transition: 0.2s;\n  z-index: 1;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-family: inherit;\n  font-size: inherit;\n  overflow: hidden;\n  padding: 0 1rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n@media (pointer: fine) {\n  button:hover {\n    background-color: color-mix(\n      in srgb,\n      var(--gds-sys-color-state-layers-state-black-dim1),\n      transparent\n    );\n  }\n}\n\nbutton:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: -2px;\n}\n")],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsSegment.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegment.prototype,"value",2),GdsSegment=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-segment")],GdsSegment);var chunk_IZQEZTY4_templateObject,_templateObject2,_templateObject3,chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js");function chunk_IZQEZTY4_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _value,_firstVisibleIndex,_calculatedSegmentWidth,_segmentWidth,_segmentsContainerLeft,_focusedIndex,_dragStartX,_dragStartLeft,_isDragging,_startDrag,_drag,_endDrag,_calcVisibleAfterDrag,_calcLayout,_applySegmentsTransform,_handleSlotChange,handleSlotChange_fn,_scrollLeft,_scrollRight,_updateScrollBtnState,_updateIndicator,_handleSegmentClick,_updateSelectedFromValue,BTN_SIZE={small:36,medium:44},getSegmentGap=transitionalStyles=>transitionalStyles?0:4,GdsSegmentedControl=class extends chunk_ZQ4D5K7J.j{constructor(){var _this;super(...arguments),_this=this,(0,chunk_5VURDMKE.VK)(this,_handleSlotChange),this.segMinWidth=100,this.size="medium",(0,chunk_5VURDMKE.VK)(this,_value,void 0),this._showPrevButton=!1,this._showNextButton=!1,(0,chunk_5VURDMKE.VK)(this,_firstVisibleIndex,0),(0,chunk_5VURDMKE.VK)(this,_calculatedSegmentWidth,0),(0,chunk_5VURDMKE.VK)(this,_segmentWidth,0),(0,chunk_5VURDMKE.VK)(this,_segmentsContainerLeft,0),(0,chunk_5VURDMKE.VK)(this,_focusedIndex,0),(0,chunk_5VURDMKE.VK)(this,_dragStartX,0),(0,chunk_5VURDMKE.VK)(this,_dragStartLeft,0),(0,chunk_5VURDMKE.VK)(this,_isDragging,!1),(0,chunk_5VURDMKE.VK)(this,_startDrag,(event=>{(0,chunk_5VURDMKE.OV)(this,_dragStartX,event.clientX),(0,chunk_5VURDMKE.OV)(this,_dragStartLeft,(0,chunk_5VURDMKE.S7)(this,_segmentsContainerLeft)),(0,chunk_5VURDMKE.OV)(this,_isDragging,!0)})),(0,chunk_5VURDMKE.VK)(this,_drag,(event=>{if((0,chunk_5VURDMKE.S7)(this,_isDragging)){event.preventDefault();var delta=event.clientX-(0,chunk_5VURDMKE.S7)(this,_dragStartX);if(!(Math.abs(delta)<5))try{this._elSegments.hasPointerCapture(event.pointerId)||this._elSegments.setPointerCapture(event.pointerId),(0,chunk_5VURDMKE.OV)(this,_segmentsContainerLeft,(0,chunk_5VURDMKE.S7)(this,_dragStartLeft)+delta),(0,chunk_5VURDMKE.S7)(this,_applySegmentsTransform).call(this)}catch(e){}}})),(0,chunk_5VURDMKE.VK)(this,_endDrag,(event=>{if((0,chunk_5VURDMKE.S7)(this,_isDragging)){(0,chunk_5VURDMKE.OV)(this,_isDragging,!1);try{this._elSegments.releasePointerCapture(event.pointerId),(0,chunk_5VURDMKE.S7)(this,_calcVisibleAfterDrag).call(this)}catch(e){}}})),(0,chunk_5VURDMKE.VK)(this,_calcVisibleAfterDrag,(()=>{(0,chunk_5VURDMKE.OV)(this,_firstVisibleIndex,Math.round(-(0,chunk_5VURDMKE.S7)(this,_segmentsContainerLeft)/(0,chunk_5VURDMKE.S7)(this,_calculatedSegmentWidth))),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)})),(0,chunk_5VURDMKE.VK)(this,_calcLayout,(function(){var followFocus=arguments.length>0&&void 0!==arguments[0]&&arguments[0],calcNumVisibleSegments=()=>{var numSegments=_this.segments.length,availableWidth=_this._elTrack.offsetWidth;if(availableWidth/numSegments>_this.segMinWidth)return{count:numSegments,segmentWidth:(availableWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(numSegments-1))/numSegments};var availableWidthIncBtns=_this.offsetWidth-2*BTN_SIZE[_this.size],maxVisibleSegments=Math.floor(availableWidthIncBtns/_this.segMinWidth);return{count:maxVisibleSegments,segmentWidth:(availableWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(maxVisibleSegments-1))/maxVisibleSegments}},{count}=calcNumVisibleSegments();followFocus&&((0,chunk_5VURDMKE.S7)(_this,_focusedIndex)>=(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)+count&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,(0,chunk_5VURDMKE.S7)(_this,_focusedIndex)-count+1),(0,chunk_5VURDMKE.S7)(_this,_focusedIndex)<(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,(0,chunk_5VURDMKE.S7)(_this,_focusedIndex)));var endFirstIndex=_this.segments.length-count,hasReachedEnd=(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)>=endFirstIndex,isAtStart=(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)<=0;hasReachedEnd&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,endFirstIndex),isAtStart&&(0,chunk_5VURDMKE.OV)(_this,_firstVisibleIndex,0),(0,chunk_5VURDMKE.S7)(_this,_updateScrollBtnState).call(_this,count),_this.updateComplete.then((()=>{var{segmentWidth,count:count2}=calcNumVisibleSegments();_this.segments.forEach((segment=>{segment.style.width=segmentWidth+"px"})),(0,chunk_5VURDMKE.OV)(_this,_segmentsContainerLeft,-(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)*segmentWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(0,chunk_5VURDMKE.S7)(_this,_firstVisibleIndex)),(0,chunk_5VURDMKE.S7)(_this,_applySegmentsTransform).call(_this),(0,chunk_5VURDMKE.OV)(_this,_calculatedSegmentWidth,segmentWidth),(0,chunk_5VURDMKE.OV)(_this,_segmentWidth,segmentWidth),(0,chunk_5VURDMKE.S7)(_this,_updateIndicator).call(_this)}))})),(0,chunk_5VURDMKE.VK)(this,_applySegmentsTransform,(()=>{window.requestAnimationFrame((()=>{this._elSegments.style.transform="translateX(".concat((0,chunk_5VURDMKE.S7)(this,_segmentsContainerLeft),"px)")}))})),(0,chunk_5VURDMKE.VK)(this,_scrollLeft,(()=>{(0,chunk_5VURDMKE.nT)(this,_firstVisibleIndex)._--,(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)})),(0,chunk_5VURDMKE.VK)(this,_scrollRight,(()=>{(0,chunk_5VURDMKE.nT)(this,_firstVisibleIndex)._++,(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)})),(0,chunk_5VURDMKE.VK)(this,_updateScrollBtnState,(numVisibleSegments=>{this._showPrevButton=(0,chunk_5VURDMKE.S7)(this,_firstVisibleIndex)>0,this._showNextButton=(0,chunk_5VURDMKE.S7)(this,_firstVisibleIndex)<this.segments.length-numVisibleSegments})),(0,chunk_5VURDMKE.VK)(this,_updateIndicator,(()=>{var segment=this.segments.find((s=>s.selected));if(segment){var selectedSegmentIndex=this.segments.indexOf(segment),offset=selectedSegmentIndex*(0,chunk_5VURDMKE.S7)(this,_segmentWidth)+getSegmentGap(this._isUsingTransitionalStyles)*selectedSegmentIndex;this._elIndicator.style.transform="translateX(".concat(offset,"px)"),this._elIndicator.style.width="".concat((0,chunk_5VURDMKE.S7)(this,_segmentWidth),"px")}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"})),(0,chunk_5VURDMKE.VK)(this,_handleSegmentClick,(event=>{var selectedSegment=this.segments.find((s=>s===event.target||s.contains(event.target)));selectedSegment&&(this.segments.forEach((s=>s.selected=!1)),selectedSegment.selected=!0,(0,chunk_5VURDMKE.OV)(this,_value,selectedSegment.value),(0,chunk_5VURDMKE.S7)(this,_updateIndicator).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:selectedSegment},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)(this,_updateSelectedFromValue,(()=>{(0,chunk_5VURDMKE.S7)(this,_value)&&this.updateComplete.then((()=>{var selectedSegment=this.segments.find((s=>s.value===(0,chunk_5VURDMKE.S7)(this,_value)));selectedSegment&&(this.segments.forEach((s=>s.selected=!1)),selectedSegment.selected=!0,(0,chunk_5VURDMKE.OV)(this,_focusedIndex,this.segments.indexOf(selectedSegment)),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this,!0))}))}))}get value(){return(0,chunk_5VURDMKE.S7)(this,_value)}set value(val){(0,chunk_5VURDMKE.OV)(this,_value,val),(0,chunk_5VURDMKE.S7)(this,_updateSelectedFromValue).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),chunk_5LNBEZ2R.nD.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",(e=>{e.target instanceof GdsSegment&&((0,chunk_5VURDMKE.OV)(this,_focusedIndex,this.segments.indexOf(e.target)),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this,!0))}))}render(){return(0,chunk_VOYMQ322.qy)(chunk_IZQEZTY4_templateObject||(chunk_IZQEZTY4_templateObject=chunk_IZQEZTY4_taggedTemplateLiteral(["",'\n      <div\n        id="track"\n        @scroll=','\n      >\n        <div\n          id="segments"\n          @pointerdown=',"\n          @pointermove=","\n          @touchmove=","\n          @pointerup=","\n          @pointercancel=",'\n          role="list"\n        >\n          <slot\n            gds-allow="gds-segment"\n            @click=',"\n            @slotchange=",'\n            role="none"\n          ></slot>\n          <div id="indicator" role="none"></div>\n        </div>\n      </div>\n      ',""])),(0,when.z)(this._showPrevButton,(()=>(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=chunk_IZQEZTY4_taggedTemplateLiteral(['<button\n            id="btn-prev"\n            @click=',"\n            aria-label=","\n          >\n            <gds-icon-chevron-left />\n          </button>"])),(0,chunk_5VURDMKE.S7)(this,_scrollLeft),(0,lit_localize.ab)("Scroll right")))),(()=>{this._elTrack.scrollLeft=0}),(0,chunk_5VURDMKE.S7)(this,_startDrag),(0,chunk_5VURDMKE.S7)(this,_drag),(0,chunk_5VURDMKE.S7)(this,_drag),(0,chunk_5VURDMKE.S7)(this,_endDrag),(0,chunk_5VURDMKE.S7)(this,_endDrag),(0,chunk_5VURDMKE.S7)(this,_handleSegmentClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn),(0,when.z)(this._showNextButton,(()=>(0,chunk_VOYMQ322.qy)(_templateObject3||(_templateObject3=chunk_IZQEZTY4_taggedTemplateLiteral(['<button\n            id="btn-next"\n            @click=',"\n            aria-label=","\n          >\n            <gds-icon-chevron-right />\n          </button>"])),(0,chunk_5VURDMKE.S7)(this,_scrollRight),(0,lit_localize.ab)("Scroll right")))))}_recalculateMinWidth(){this.updateComplete.then((()=>(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)))}};_value=new WeakMap,_firstVisibleIndex=new WeakMap,_calculatedSegmentWidth=new WeakMap,_segmentWidth=new WeakMap,_segmentsContainerLeft=new WeakMap,_focusedIndex=new WeakMap,_dragStartX=new WeakMap,_dragStartLeft=new WeakMap,_isDragging=new WeakMap,_startDrag=new WeakMap,_drag=new WeakMap,_endDrag=new WeakMap,_calcVisibleAfterDrag=new WeakMap,_calcLayout=new WeakMap,_applySegmentsTransform=new WeakMap,_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selSegmentValue=null==(_a=this.segments.find((s=>s.selected)))?void 0:_a.value;selSegmentValue&&(0,chunk_5VURDMKE.OV)(this,_value,selSegmentValue),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)},_scrollLeft=new WeakMap,_scrollRight=new WeakMap,_updateScrollBtnState=new WeakMap,_updateIndicator=new WeakMap,_handleSegmentClick=new WeakMap,_updateSelectedFromValue=new WeakMap,GdsSegmentedControl.styles=[chunk_XEIPYLYK.L,(0,lit.iz)(":host {\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  box-sizing: border-box;\n  contain: layout;\n  display: inline-flex;\n  gap: 0.25rem;\n  height: 3rem;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n:host([size='small']) {\n  height: 2.5rem;\n}\n\n#track {\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 1;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n#segments {\n  box-sizing: border-box;\n  display: inline-flex;\n  gap: 0.25rem;\n  position: relative;\n  transition: 0.2s;\n  z-index: 1;\n}\n\n#btn-prev,\n#btn-next {\n  align-items: center;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  aspect-ratio: 1;\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  height: 100%;\n  justify-content: center;\n  width: 2.5rem;\n\n  @media (pointer: fine) {\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        var(--gds-sys-color-container-container-dim1)\n      );\n    }\n  }\n}\n\n:host([size='small']) #btn-prev,\n:host([size='small']) #btn-next {\n  width: 2rem;\n}\n\n::slotted(*) {\n  flex-grow: 1;\n  flex-shrink: 0;\n  z-index: 1;\n}\n\n#indicator {\n  background-color: var(--gds-sys-color-container-container-bright);\n  border-radius: calc(infinity * 1px);\n  height: 100%;\n  left: 0;\n  position: absolute;\n  transition:\n    transform 0.2s,\n    width 0.2s;\n  z-index: 0;\n}\n")],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number,attribute:"seg-min-width"})],GdsSegmentedControl.prototype,"segMinWidth",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegmentedControl.prototype,"size",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegmentedControl.prototype,"value",1),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsSegmentedControl.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#indicator")],GdsSegmentedControl.prototype,"_elIndicator",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#track")],GdsSegmentedControl.prototype,"_elTrack",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#segments")],GdsSegmentedControl.prototype,"_elSegments",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showPrevButton",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showNextButton",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)(),(0,chunk_2WO4NHJ2.w)("segMinWidth")],GdsSegmentedControl.prototype,"_recalculateMinWidth",1),GdsSegmentedControl=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-segmented-control")],GdsSegmentedControl);var segmented_control_stories_templateObject,segmented_control_stories_templateObject2,segmented_control_stories_templateObject3;__webpack_require__("./dist/libs/core/src/chunks/chunk.M5FNUZ66.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");const segmented_control_stories={title:"Components/Segmented Control",component:"gds-segmented-control",subcomponents:{MenuItem:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/segmented-control)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)\n\nA segmented control is a group of 2-5 buttons that lets the user switch views or sort elements."}}},tags:["autodocs"]};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:'<gds-segment value="1">Item 1</gds-segment>\n<gds-segment value="2">Item 2</gds-segment>\n<gds-segment value="3">Item 3</gds-segment>',value:"1"}},Basic=Object.assign({},DefaultParams),Usage=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(segmented_control_stories_templateObject||(segmented_control_stories_templateObject=taggedTemplateLiteralLoose_default()(['\n    <gds-segmented-control\n      value="2"\n      onchange="document.getElementById(\'sel\').innerText = event.target.value"\n    >\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n      <gds-segment value="4">Fourth</gds-segment>\n      <gds-segment value="5">Fifth</gds-segment>\n    </gds-segmented-control>\n    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>\n  '])))}}),Small=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(segmented_control_stories_templateObject2||(segmented_control_stories_templateObject2=taggedTemplateLiteralLoose_default()(['\n    <gds-segmented-control size="small" value="2">\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n    </gds-segmented-control>\n  '])))}}),SegmentSize=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(segmented_control_stories_templateObject3||(segmented_control_stories_templateObject3=taggedTemplateLiteralLoose_default()(['\n    <div style="max-width: 800px">\n      <gds-segmented-control seg-min-width="200" value="3">\n        <gds-segment value="1">First</gds-segment>\n        <gds-segment value="2">Unusually long label text</gds-segment>\n        <gds-segment value="3">Third</gds-segment>\n        <gds-segment value="4">Fourth</gds-segment>\n        <gds-segment value="5">Fifth</gds-segment>\n      </gds-segmented-control>\n    </div>\n  '])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams\n}",...Basic.parameters?.docs?.source}}},Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-segmented-control\n      value="2"\n      onchange="document.getElementById(\'sel\').innerText = event.target.value"\n    >\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n      <gds-segment value="4">Fourth</gds-segment>\n      <gds-segment value="5">Fifth</gds-segment>\n    </gds-segmented-control>\n    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>\n  `\n}',...Usage.parameters?.docs?.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...Usage.parameters?.docs?.description}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-segmented-control size="small" value="2">\n      <gds-segment value="1">First</gds-segment>\n      <gds-segment value="2">Second</gds-segment>\n      <gds-segment value="3">Third</gds-segment>\n    </gds-segmented-control>\n  `\n}',...Small.parameters?.docs?.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...Small.parameters?.docs?.description}}},SegmentSize.parameters={...SegmentSize.parameters,docs:{...SegmentSize.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <div style="max-width: 800px">\n      <gds-segmented-control seg-min-width="200" value="3">\n        <gds-segment value="1">First</gds-segment>\n        <gds-segment value="2">Unusually long label text</gds-segment>\n        <gds-segment value="3">Third</gds-segment>\n        <gds-segment value="4">Fourth</gds-segment>\n        <gds-segment value="5">Fifth</gds-segment>\n      </gds-segmented-control>\n    </div>\n  `\n}',...SegmentSize.parameters?.docs?.source},description:{story:"The size of the segments can be configured using the `seg-min-width` attribute. This influences\nhow many segments will be visible at the same time. If you have long segment labels and want to\navoid concatenation, you can increase the `seg-min-width` attribute. But keep in mind that the\nbest practice is to keep the segment labels short.",...SegmentSize.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","Usage","Small","SegmentSize"]},"./dist/libs/core/src/chunks/chunk.L7I7KHQL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject;__webpack_require__.d(__webpack_exports__,{q:()=>icon_style_css_default});var icon_style_css_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  @layer icon;\n\n  @layer icon {\n    :host {\n      display: contents;\n    }\n\n    :host(:not([width], [height])) {\n      & > svg {\n        height: 1lh;\n        width: auto;\n      }\n    }\n  }\n"])))},"./dist/libs/core/src/chunks/chunk.M5FNUZ66.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>GdsIcon});var _templateObject,_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");var GdsIcon=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__.j{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){var svgContent='<svg\n      width="'.concat(this.width,'"\n      height="').concat(this.height,'"\n      viewBox="0 0 24 24"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ').concat(this.label?'aria-label="'.concat(this.label,'"'):'aria-label="'.concat(this.constructor._name,'"'),'\n      role="graphics-symbol"\n    >\n      ').concat(this.solid?this.constructor._solidSVG:this.constructor._regularSVG,"\n    </svg>");return(0,lit__WEBPACK_IMPORTED_MODULE_3__.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["",""])),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__._)(svgContent))}};GdsIcon.styles=[_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_0__.q],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Number})],GdsIcon.prototype,"width",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Number})],GdsIcon.prototype,"height",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean})],GdsIcon.prototype,"solid",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:String})],GdsIcon.prototype,"label",2)},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return(proto,propertyKey,descriptor)=>{var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((()=>{this.__resizeObserver_tids[propertyKey]&&clearTimeout(this.__resizeObserver_tids[propertyKey]),this.__resizeObserver_tids[propertyKey]=setTimeout((()=>{var _a;null==(_a=descriptor.value)||_a.call(this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})}}]);