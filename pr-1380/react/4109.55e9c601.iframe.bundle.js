"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4109],{"./libs/react/src/lib/context-menu/context-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tz:()=>ContextMenu,hM:()=>CoreMenuHeading,Dr:()=>MenuItem});var _templateObject,_templateObject2,_t,_t2,react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./libs/react/node_modules/@lit/react/index.js"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),classCallCheck=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),assertThisInitialized=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),get=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_5LNBEZ2R=__webpack_require__("./dist/libs/core/src/chunks/chunk.5LNBEZ2R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit=__webpack_require__("./node_modules/lit/index.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _handleItemClick,handleItemClick_fn,context_menu_styles_default=(0,lit.AH)(_t||(_t=_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    button {\n      display: flex;\n      border-width: 0;\n      background-color: #ededed;\n      border-radius: calc(1px * infinity);\n      padding: 0.4rem 0.8rem;\n      font-family: inherit;\n      cursor: pointer;\n      align-items: center;\n      gap: 0.5rem;\n    }\n\n    button:hover {\n      background-color: #dcdcdc;\n    }\n  }\n"])))),GdsContextMenu=function(_GdsElement){(0,inherits.A)(GdsContextMenu,_GdsElement);var _super=_createSuper(GdsContextMenu);function GdsContextMenu(){var _this;return(0,classCallCheck.A)(this,GdsContextMenu),_this=_super.call(this),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleItemClick),_this.open=!1,_this.buttonLabel=(0,lit_localize.ab)("Open context menu"),_this.showLabel=!1,_this.label="",_this.placement="bottom-start",(0,chunk_KBYQYDL3.t)((0,assertThisInitialized.A)(_this)),_this}return(0,createClass.A)(GdsContextMenu,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;(0,get.A)((0,getPrototypeOf.A)(GdsContextMenu.prototype),"connectedCallback",this).call(this),chunk_5LNBEZ2R.nD.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",(function(e){_this2.open&&"Tab"==e.key&&(e.preventDefault(),_this2.open=!1,_this2.elTriggerBtn.then((function(el){return el.focus()})))}))}},{key:"render",value:function render(){var _a,_b,_c,_this3=this;return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(['<button\n        id="trigger"\n        class="icon border-0 small ','"\n        aria-label=','\n        aria-haspopup="menu"\n        aria-controls="menu"\n        aria-expanded=','\n      >\n        <slot name="trigger">\n          ','\n          <svg width="24" height="24" viewBox="0 0 24 24">\n            <path\n              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"\n              fill="#353531"\n            />\n          </svg>\n        </slot>\n      </button>\n      <gds-popover\n        id="menu"\n        .open=',"\n        .triggerRef=","\n        .anchorRef=","\n        .label=","\n        .placement=","\n        @gds-ui-state=","\n      >\n        <gds-menu\n          aria-label=","\n          @gds-menu-item-click=",'\n        >\n          <slot allow="gds-menu-item gds-menu-heading"></slot>\n        </gds-menu>\n      </gds-popover>']))),(0,class_map.H)({highlighted:this.open}),null!=(_a=this.buttonLabel)?_a:this.label,this.open,this.showLabel?null!=(_b=this.buttonLabel)?_b:this.label:lit.s6,this.open,this.elTriggerBtn,this.elTriggerBtn,this.label,this.placement,(function(e){return _this3.open=e.detail.open}),null!=(_c=this.label)?_c:this.buttonLabel,(0,chunk_5VURDMKE.jq)(this,_handleItemClick,handleItemClick_fn))}}]),GdsContextMenu}(chunk_ZQ4D5K7J.j);_handleItemClick=new WeakSet,handleItemClick_fn=function handleItemClick_fn(){this.open=!1},GdsContextMenu.styles=[context_menu_styles_default],GdsContextMenu.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsContextMenu.prototype,"open",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({attribute:"button-label"})],GdsContextMenu.prototype,"buttonLabel",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({attribute:"show-label",type:Boolean})],GdsContextMenu.prototype,"showLabel",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"placement",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)("#trigger")],GdsContextMenu.prototype,"elTriggerBtn",2),GdsContextMenu=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-context-menu")],GdsContextMenu);var chunk_BES3ZPRI_templateObject,chunk_BES3ZPRI_t,_slotRef,chunk_2X23R32H=__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js");function chunk_BES3ZPRI_createSuper(Derived){var hasNativeReflectConstruct=chunk_BES3ZPRI_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_BES3ZPRI_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_BES3ZPRI_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsMenu=function(_GdsElement){(0,inherits.A)(GdsMenu,_GdsElement);var _super=chunk_BES3ZPRI_createSuper(GdsMenu);function GdsMenu(){var _this;return(0,classCallCheck.A)(this,GdsMenu),_this=_super.call(this),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_slotRef,(0,ref._)()),new chunk_2X23R32H.y((0,assertThisInitialized.A)(_this)),_this}return(0,createClass.A)(GdsMenu,[{key:"connectedCallback",value:function connectedCallback(){(0,get.A)((0,getPrototypeOf.A)(GdsMenu.prototype),"connectedCallback",this).call(this),this.setAttribute("role","menu"),chunk_5LNBEZ2R.nD.instance.apply(this,"gds-listbox")}},{key:"navigableItems",get:function get(){return(0,chunk_5VURDMKE.S7)(this,_slotRef).value&&(0,chunk_2X23R32H.o)((0,chunk_5VURDMKE.S7)(this,_slotRef).value).assignedElements().filter((function(o){return!o.hasAttribute("isplaceholder")&&"gds-menu-item"===o.gdsElementName}))||[]}},{key:"focus",value:function focus(){var _a;null==(_a=this.navigableItems[0])||_a.focus()}},{key:"render",value:function render(){return(0,chunk_VOYMQ322.qy)(chunk_BES3ZPRI_t||(chunk_BES3ZPRI_t=chunk_BES3ZPRI_templateObject||(chunk_BES3ZPRI_templateObject=taggedTemplateLiteralLoose_default()(["<slot ","></slot>"]))),(0,ref.K)((0,chunk_5VURDMKE.S7)(this,_slotRef)))}}]),GdsMenu}(chunk_ZQ4D5K7J.j);_slotRef=new WeakMap,GdsMenu=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-menu")],GdsMenu);var chunk_UCOIQUXN_templateObject,chunk_UCOIQUXN_t,_handleOnClick,chunk_2ND5EWHE=__webpack_require__("./dist/libs/core/src/chunks/chunk.2ND5EWHE.js");function chunk_UCOIQUXN_createSuper(Derived){var hasNativeReflectConstruct=chunk_UCOIQUXN_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_UCOIQUXN_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_UCOIQUXN_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsMenuItem=function(_Focusable){(0,inherits.A)(GdsMenuItem,_Focusable);var _super=chunk_UCOIQUXN_createSuper(GdsMenuItem);function GdsMenuItem(){var _this;return(0,classCallCheck.A)(this,GdsMenuItem),_this=_super.apply(this,arguments),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleOnClick,(function(){_this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})),_this}return(0,createClass.A)(GdsMenuItem,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;(0,get.A)((0,getPrototypeOf.A)(GdsMenuItem.prototype),"connectedCallback",this).call(this),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),_this2.click())})),this.addEventListener("click",(0,chunk_5VURDMKE.S7)(this,_handleOnClick)),chunk_5LNBEZ2R.nD.instance.apply(this,"gds-option")}},{key:"render",value:function render(){return(0,chunk_VOYMQ322.qy)(chunk_UCOIQUXN_t||(chunk_UCOIQUXN_t=chunk_UCOIQUXN_templateObject||(chunk_UCOIQUXN_templateObject=taggedTemplateLiteralLoose_default()(["<div><slot></slot></div>"]))))}}]),GdsMenuItem}((0,chunk_2ND5EWHE.z)(chunk_ZQ4D5K7J.j));_handleOnClick=new WeakMap,GdsMenuItem.styles=[chunk_2ND5EWHE.l],GdsMenuItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-menu-item")],GdsMenuItem);var chunk_XFVCUSEN=__webpack_require__("./dist/libs/core/src/chunks/chunk.XFVCUSEN.js"),scoping=(__webpack_require__("./dist/libs/core/src/chunks/chunk.Y3QYM3PT.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.3BCIYHO6.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.M5FNUZ66.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),__webpack_require__("./dist/libs/core/src/scoping.js"));(0,__webpack_require__("./dist/libs/core/src/transitional-styles.js").Y)();var ContextMenu=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-context-menu"),elementClass:GdsContextMenu,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react}),MenuItem=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-menu-item"),elementClass:GdsMenuItem,events:{onMenuItemClick:"gds-menu-item-click"},react}),CoreMenuHeading=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-menu-heading"),elementClass:chunk_XFVCUSEN.A,react})},"./libs/react/src/lib/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ms:()=>Dropdown});var objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./libs/react/node_modules/@lit/react/index.js"),chunk_BRPJSXL7=(__webpack_require__("./dist/libs/core/src/chunks/chunk.XFVCUSEN.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.BRPJSXL7.js")),chunk_S7K4GJTN=(__webpack_require__("./dist/libs/core/src/chunks/chunk.ABX5MSZM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.S7K4GJTN.js")),scoping=(__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2ND5EWHE.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.Y3QYM3PT.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.3BCIYHO6.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.M5FNUZ66.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5LNBEZ2R.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),__webpack_require__("./dist/libs/core/src/scoping.js")),transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),node_modules_react=__webpack_require__("./node_modules/react/index.js"),context_menu=__webpack_require__("./libs/react/src/lib/context-menu/context-menu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["compareWith","display","id","informationLabel","label","multiSelect","onChange","options","searchFilter","searchable","texts","useValue","validator","value","syncPopoverWidth"];(0,transitional_styles.Y)();var CoreDropdown=(0,react.a)({tagName:(0,scoping.Eq)("gds-dropdown"),elementClass:chunk_BRPJSXL7.E,events:{onchange:"change"},react:node_modules_react}),CoreOption=(0,react.a)({tagName:(0,scoping.Eq)("gds-option"),elementClass:chunk_S7K4GJTN.Y,react:node_modules_react}),Dropdown=function Dropdown(_ref){var compareWith=_ref.compareWith,_ref$display=_ref.display,display=void 0===_ref$display?"label":_ref$display,id=_ref.id,informationLabel=_ref.informationLabel,label=_ref.label,multiSelect=_ref.multiSelect,onChange=_ref.onChange,options=_ref.options,searchFilter=_ref.searchFilter,searchable=_ref.searchable,texts=_ref.texts,_ref$useValue=_ref.useValue,useValue=void 0===_ref$useValue?"value":_ref$useValue,validator=_ref.validator,value=_ref.value,syncPopoverWidth=_ref.syncPopoverWidth,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{className:"form-group",children:(0,jsx_runtime.jsxs)(CoreDropdown,{id,label,searchable,multiple:multiSelect,onchange:function handleOnChange(e){"value"in e.detail&&(null==onChange||onChange(e.detail.value))},invalid:"error"===(null==validator?void 0:validator.indicator),compareWith:function compareWithAdapter(o1,o2){return(compareWith||function(a,b){return a===b})(o1,o2)},value,searchFilter:function searchFilterAdapter(q,o){return searchFilter?searchFilter(q,o.value[useValue]):function(q,o){return o.innerHTML.toLowerCase().includes(q.toLowerCase())}(q,o)},syncPopoverWidth,size:props.size,hideLabel:props.hideLabel,maxHeight:props.maxHeight,children:[informationLabel&&(0,jsx_runtime.jsx)("span",{slot:"sub-label",children:informationLabel}),validator&&(0,jsx_runtime.jsx)("span",{slot:"message",children:validator.message}),(0,jsx_runtime.jsx)(CoreOption,{isPlaceholder:!0,"aria-hidden":!0,children:(null==texts?void 0:texts.placeholder)||"Select"}),options.map((function(option){return option.heading?(0,jsx_runtime.jsx)(context_menu.hM,{children:option[display]},option.label):(0,jsx_runtime.jsx)(CoreOption,{value:option[useValue],children:option[display]},option[useValue])}))]})})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"OnChange<any>"}},compareWith:{defaultValue:null,description:"",name:"compareWith",required:!1,type:{name:"CompareWith<any>"}},display:{defaultValue:{value:"label"},description:"",name:"display",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},informationLabel:{defaultValue:null,description:"",name:"informationLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}},searchFilter:{defaultValue:null,description:"",name:"searchFilter",required:!1,type:{name:"SearchFilter<any>"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:"boolean"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"DropdownTexts"}},useValue:{defaultValue:{value:"value"},description:"",name:"useValue",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"IValidator"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},syncPopoverWidth:{defaultValue:null,description:"Force width of the popover to match trigger",name:"syncPopoverWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the dropdown trigger",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},hideLabel:{defaultValue:null,description:"Hide the label",name:"hideLabel",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"Max height of the dropdown",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/dropdown/dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"libs/react/src/lib/dropdown/dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"OnChange<any>"}},compareWith:{defaultValue:null,description:"",name:"compareWith",required:!1,type:{name:"CompareWith<any>"}},display:{defaultValue:{value:"label"},description:"",name:"display",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},informationLabel:{defaultValue:null,description:"",name:"informationLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}},searchFilter:{defaultValue:null,description:"",name:"searchFilter",required:!1,type:{name:"SearchFilter<any>"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:"boolean"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"DropdownTexts"}},useValue:{defaultValue:{value:"value"},description:"",name:"useValue",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"IValidator"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},syncPopoverWidth:{defaultValue:null,description:"Force width of the popover to match trigger",name:"syncPopoverWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size of the dropdown trigger",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},hideLabel:{defaultValue:null,description:"Hide the label",name:"hideLabel",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"Max height of the dropdown",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/dropdown/dropdown.tsx#dropdown"]={docgenInfo:dropdown.__docgenInfo,name:"dropdown",path:"libs/react/src/lib/dropdown/dropdown.tsx#dropdown"})}catch(__react_docgen_typescript_loader_error){}}}]);