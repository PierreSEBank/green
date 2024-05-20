"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[774],{"./libs/core/src/components/filter-chips/filter-chips.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,MultiSelect:()=>MultiSelect,RowCollapse:()=>RowCollapse,Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__),lit__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/lit/index.js"));__webpack_require__("./dist/libs/core/src/components/filter-chips/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Filter Chips",component:"gds-filter-chips",parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/filter-chips)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)\n\nThe filter chips component allows users to quickly refine the result of data they want to be presented on the page."}}},tags:["autodocs"]};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{chips:{control:{type:"array"}}},args:{innerHTML:'<gds-filter-chip value="1">Item 1</gds-filter-chip>\n<gds-filter-chip value="2">Item 2</gds-filter-chip>\n<gds-filter-chip value="3">Item 3</gds-filter-chip>'}},Basic=Object.assign({},DefaultParams),Usage=Object.assign({},DefaultParams,{render:function render(args){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.qy)(_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(['\n    <gds-filter-chips\n      value="top-news"\n      label="Pick news channel"\n      onchange="document.getElementById(\'sel\').innerText = event.target.value"\n    >\n      <gds-filter-chip value="all">All</gds-filter-chip>\n      <gds-filter-chip value="top-news">Top news</gds-filter-chip>\n      <gds-filter-chip value="division">Division</gds-filter-chip>\n      <gds-filter-chip value="global">Global</gds-filter-chip>\n      <gds-filter-chip value="country">Country</gds-filter-chip>\n      <gds-filter-chip value="lcfi">\n        Large Corporate & Financial Institutions\n      </gds-filter-chip>\n    </gds-filter-chips>\n    <div style={{ marginTop: \'1rem\' }}>\n      Selected: <span id="sel">top-news</span>\n    </div>\n  '])))}}),MultiSelect=Object.assign({},DefaultParams,{render:function render(args){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.qy)(_templateObject2||(_templateObject2=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(['\n    <gds-filter-chips\n      value="top-news,global"\n      label="Pick news channels"\n      multiple\n    >\n      <gds-filter-chip value="all">All</gds-filter-chip>\n      <gds-filter-chip value="top-news">Top news</gds-filter-chip>\n      <gds-filter-chip value="division">Division</gds-filter-chip>\n      <gds-filter-chip value="global">Global</gds-filter-chip>\n      <gds-filter-chip value="country">Country</gds-filter-chip>\n      <gds-filter-chip value="lcfi">\n        Large Corporate & Financial Institutions\n      </gds-filter-chip>\n    </gds-filter-chips>\n  '])))}}),RowCollapse=Object.assign({},DefaultParams,{render:function render(args){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.qy)(_templateObject3||(_templateObject3=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(['\n    <gds-filter-chips value="top-news" label="Pick news channel" row-collapse>\n      <gds-filter-chip value="all">All</gds-filter-chip>\n      <gds-filter-chip value="top-news">Top news</gds-filter-chip>\n      <gds-filter-chip value="division">Division</gds-filter-chip>\n      <gds-filter-chip value="global">Global</gds-filter-chip>\n      <gds-filter-chip value="country">Country</gds-filter-chip>\n      <gds-filter-chip value="lcfi">\n        Large Corporate & Financial Institutions\n      </gds-filter-chip>\n    </gds-filter-chips>\n  '])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams\n}",...Basic.parameters?.docs?.source}}},Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-filter-chips\n      value="top-news"\n      label="Pick news channel"\n      onchange="document.getElementById(\'sel\').innerText = event.target.value"\n    >\n      <gds-filter-chip value="all">All</gds-filter-chip>\n      <gds-filter-chip value="top-news">Top news</gds-filter-chip>\n      <gds-filter-chip value="division">Division</gds-filter-chip>\n      <gds-filter-chip value="global">Global</gds-filter-chip>\n      <gds-filter-chip value="country">Country</gds-filter-chip>\n      <gds-filter-chip value="lcfi">\n        Large Corporate & Financial Institutions\n      </gds-filter-chip>\n    </gds-filter-chips>\n    <div style={{ marginTop: \'1rem\' }}>\n      Selected: <span id="sel">top-news</span>\n    </div>\n  `\n}',...Usage.parameters?.docs?.source},description:{story:"This component works like many other types of input controls. A `value` property holds the currently\nselcted value/values and a `change` event is emitted when the value changes.\n\n## Single select\n\nBy default, the filter chips component is single select. Each filter-chip needs to have a unique value\nattribute. This determines the value of the parent components, and which chip is selected.\nChips without value cannot be selected.\n\n**Note:** It is important to remember to set the label attribute. Omitting it will cause poor\naccessibility for screen reader useSharedState. Internally in the component, the label attribute\nwill be used to set `aria-label` for the appropriate element.",...Usage.parameters?.docs?.description}}},MultiSelect.parameters={...MultiSelect.parameters,docs:{...MultiSelect.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-filter-chips\n      value="top-news,global"\n      label="Pick news channels"\n      multiple\n    >\n      <gds-filter-chip value="all">All</gds-filter-chip>\n      <gds-filter-chip value="top-news">Top news</gds-filter-chip>\n      <gds-filter-chip value="division">Division</gds-filter-chip>\n      <gds-filter-chip value="global">Global</gds-filter-chip>\n      <gds-filter-chip value="country">Country</gds-filter-chip>\n      <gds-filter-chip value="lcfi">\n        Large Corporate & Financial Institutions\n      </gds-filter-chip>\n    </gds-filter-chips>\n  `\n}',...MultiSelect.parameters?.docs?.source},description:{story:"Setting the `multiple` attribute will allow users to select multiple filter chips. The value of the\ncomponent will be an array of the selected chip values.",...MultiSelect.parameters?.docs?.description}}},RowCollapse.parameters={...RowCollapse.parameters,docs:{...RowCollapse.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-filter-chips value="top-news" label="Pick news channel" row-collapse>\n      <gds-filter-chip value="all">All</gds-filter-chip>\n      <gds-filter-chip value="top-news">Top news</gds-filter-chip>\n      <gds-filter-chip value="division">Division</gds-filter-chip>\n      <gds-filter-chip value="global">Global</gds-filter-chip>\n      <gds-filter-chip value="country">Country</gds-filter-chip>\n      <gds-filter-chip value="lcfi">\n        Large Corporate & Financial Institutions\n      </gds-filter-chip>\n    </gds-filter-chips>\n  `\n}',...RowCollapse.parameters?.docs?.source},description:{story:"In some cases, layout constraints may require the filter chips to collapse into a single row.\n\nSetting the `row-collapse` attribute will enable this behavior when the chips require more than two rows. Instead, scrolling overflow will be used to accommodate the chips.",...RowCollapse.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","Usage","MultiSelect","RowCollapse"]},"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:value=>new Date(value),toAttribute:value=>value.toISOString()},dateArrayConverter={fromAttribute:value=>value.split(",").map((d=>new Date(d.trim()))),toAttribute:value=>JSON.stringify(value.map((d=>d.toISOString())))},stringArrayConverter={fromAttribute:value=>value.split(","),toAttribute:value=>Array.isArray(value)?value.join(","):value}},"./dist/libs/core/src/chunks/chunk.DFTJBJPB.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js");var GdsIcon=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_0__.j{constructor(){super(...arguments),this.open=!1,this.name=""}static get styles(){return(0,lit__WEBPACK_IMPORTED_MODULE_3__.iz)("svg:not([display=none]) {\n  contain: layout style;\n  display: flex;\n  height: 1lh;\n  isolation: isolate;\n  overflow: hidden;\n  width: auto;\n}\n\nsymbol {\n  fill: none;\n  height: 24px;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2px;\n  width: 24px;\n}")}render(){var{name}=this;return(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n      <svg display="none">\n        <symbol id="plus">\n          <line x1="12" y1="5" x2="12" y2="19" />\n          <line x1="5" y1="12" x2="19" y2="12" />\n        </symbol>\n        <symbol id="x">\n          <line x1="18" y1="6" x2="6" y2="18" />\n          <line x1="6" y1="6" x2="18" y2="18" />\n        </symbol>\n        <symbol id="chevron-right">\n          <polyline points="9 18 15 12 9 6" />\n        </symbol>\n        <symbol id="chevron-left">\n          <polyline points="15 18 9 12 15 6" />\n        </symbol>\n        <symbol id="chevron-down">\n          <polyline points="6 9 12 15 18 9" />\n        </symbol>\n        <symbol id="arrow">\n          <line x1="5" y1="12" x2="19" y2="12" />\n          <polyline points="12 5 19 12 12 19" />\n        </symbol>\n        <symbol id="bell">\n          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />\n          <path d="M13.73 21a2 2 0 0 1-3.46 0" />\n        </symbol>\n        <symbol id="calendar">\n          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />\n          <line x1="16" y1="2" x2="16" y2="6" />\n          <line x1="8" y1="2" x2="8" y2="6" />\n          <line x1="3" y1="10" x2="21" y2="10" />\n        </symbol>\n        <symbol id="lock">\n          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />\n          <path d="M7 11V7a5 5 0 0 1 10 0v4" />\n        </symbol>\n        <symbol id="eye">\n          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\n          <circle cx="12" cy="12" r="3" />\n        </symbol>\n        <symbol id="hash">\n          <line x1="4" y1="9" x2="20" y2="9" />\n          <line x1="4" y1="15" x2="20" y2="15" />\n          <line x1="10" y1="3" x2="8" y2="21" />\n          <line x1="16" y1="3" x2="14" y2="21" />\n        </symbol>\n        <symbol id="mail">\n          <path\n            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"\n          />\n          <polyline points="22,6 12,13 2,6" />\n        </symbol>\n        <symbol id="send">\n          <line x1="22" y1="2" x2="11" y2="13" />\n          <polygon points="22 2 15 22 11 13 2 9 22 2" />\n        </symbol>\n        <symbol id="info">\n          <circle cx="12" cy="12" r="10" />\n          <line x1="12" y1="16" x2="12" y2="12" />\n          <line x1="12" y1="8" x2="12.01" y2="8" />\n        </symbol>\n        <symbol id="tel">\n          <path\n            d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"\n          />\n        </symbol>\n        <symbol id="search">\n          <circle cx="11" cy="11" r="8" />\n          <line x1="21" y1="21" x2="16.65" y2="16.65" />\n        </symbol>\n        <symbol id="user">\n          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />\n          <circle cx="12" cy="7" r="4" />\n        </symbol>\n        <symbol id="arrow-up">\n          <line x1="12" y1="19" x2="12" y2="5" />\n          <polyline points="5 12 12 5 19 12" />\n        </symbol>\n        <symbol id="arrow-down">\n          <line x1="12" y1="5" x2="12" y2="19" />\n          <polyline points="19 12 12 19 5 12" />\n        </symbol>\n        <symbol id="warning">\n          <path\n            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\n          />\n          <line x1="12" y1="9" x2="12" y2="13" />\n          <path x1="12" y1="17" x2="12.01" y2="17" />\n        </symbol>\n        <symbol id="checkmark">\n          <path\n            d="M2.75 15.0938L9 20.25L21.25 3.75"\n            stroke-width="2"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n          />\n        </symbol>\n      </svg>\n      <svg viewBox="0 0 24 24">\n        <use href="#','"></use>\n      </svg>\n    '])),name)}};GdsIcon.properties={open:{type:String,reflect:!0},name:{type:String}},GdsIcon=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon")],GdsIcon)},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return(proto,propertyKey,descriptor)=>{var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((()=>{this.__resizeObserver_tids[propertyKey]&&clearTimeout(this.__resizeObserver_tids[propertyKey]),this.__resizeObserver_tids[propertyKey]=setTimeout((()=>{var _a;null==(_a=descriptor.value)||_a.call(this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./dist/libs/core/src/components/filter-chips/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_MZSK66DN=__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,styles=(0,lit.AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: inline-block;\n      max-width: 100%;\n    }\n\n    .chips {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 0.5rem;\n    }\n\n    .collapse {\n      overflow: auto;\n      scroll-snap-type: both mandatory;\n      overscroll-behavior-x: contain;\n      flex-wrap: nowrap;\n      padding-bottom: 0.5rem;\n      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;\n      scrollbar-width: thin;\n    }\n\n    ::slotted(*) {\n      scroll-snap-align: start;\n      scroll-snap-stop: always;\n    }\n  }\n"]))),GdsFilterChips=class extends chunk_MZSK66DN.S{constructor(){super(...arguments),(0,chunk_5VURDMKE.VK)(this,_getChipHeight),(0,chunk_5VURDMKE.VK)(this,_handleSlotChange),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,(0,chunk_5VURDMKE.VK)(this,_handleChipClick,(event=>{var clickedChip=this.chips.find((s=>s===event.target||s.contains(event.target)));clickedChip&&(this.multiple&&Array.isArray(this.value)?clickedChip.selected?this.value=this.value.filter((v=>v!==clickedChip.value)):this.value=[...this.value,clickedChip.value]:this.value=clickedChip.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:this.value},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)(this,_collapseThreshold,3),(0,chunk_5VURDMKE.VK)(this,_collapsedAt,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){var layoutClasses={collapse:this._collapsed};return(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div\n      class="chips ','"\n      role="listbox"\n      aria-label=',"\n      aria-multiselectable=",'\n    >\n      <slot\n        gds-allow="gds-filter-chip"\n        @click=',"\n        @slotchange=",'\n        role="none"\n      ></slot>\n    </div>'])),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_5VURDMKE.S7)(this,_handleChipClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn))}_handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_5VURDMKE.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_5VURDMKE.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_5VURDMKE.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_5VURDMKE.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((()=>{this.chips.forEach((chip=>{chip.selected=this.multiple?this.value.includes(chip.value):this.value===chip.value}))})))}};_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selChipValue=null==(_a=this.chips.find((s=>s.selected)))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_HL44DPZO_templateObject,chunk_HL44DPZO_templateObject2,chunk_ZLWSCK7R=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js");function chunk_HL44DPZO_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var chunk_HL44DPZO_styles=(0,lit.AH)(chunk_HL44DPZO_templateObject||(chunk_HL44DPZO_templateObject=chunk_HL44DPZO_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    .btn-p {\n      padding: 0 0.75rem;\n    }\n    .icon {\n      width: 1rem;\n    }\n  }\n"]))),GdsFilterChip=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-filter-chip"),this._button.then((btn=>{chunk_ZLWSCK7R.nD.instance.apply(btn,"gds-button")}))}render(){var btnClasses={"btn-p":!this.selected};return(0,chunk_VOYMQ322.qy)(chunk_HL44DPZO_templateObject2||(chunk_HL44DPZO_templateObject2=chunk_HL44DPZO_taggedTemplateLiteral(['<gds-button\n      class="btn"\n      size="small"\n      .rank=',"\n      variant=",'\n      gds-role="option"\n      gds-aria-selected=',"\n    >\n      <span class=",'><slot></slot></span>\n      <gds-icon\n        name="checkmark"\n        slot="trail"\n        style="display: ','"\n        class="icon"\n      ></gds-icon>\n    </gds-button>'])),this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"block":"none")}};GdsFilterChip.styles=[chunk_HL44DPZO_styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)((0,chunk_VOYMQ322.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chip")],GdsFilterChip);__webpack_require__("./dist/libs/core/src/chunks/chunk.DFTJBJPB.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.7TRH4RBD.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.3BAXSBIV.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.N4CCDFIX.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js")},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})}}]);