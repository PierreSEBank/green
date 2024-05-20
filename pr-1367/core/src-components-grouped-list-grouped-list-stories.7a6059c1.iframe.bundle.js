"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[56],{"./libs/core/src/components/grouped-list/grouped-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdjustingAppearance:()=>AdjustingAppearance,Basic:()=>Basic,WithValues:()=>WithValues,WithValuesAndAction:()=>WithValuesAndAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grouped_list_stories});var _templateObject,_templateObject2,taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),lit=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/lit/index.js")),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_ZLWSCK7R=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var chunk_73TOOYEY_templateObject,GdsGroupedList=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),(0,chunk_KBYQYDL3.t)(this),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-grouped-list")}render(){return(0,chunk_VOYMQ322.qy)(_templateObject||(_templateObject=_taggedTemplateLiteral(["",'\n      <div role="list" aria-labelledby="label">\n        <slot gds-allow="gds-list-item"></slot>\n      </div>'])),(0,when.z)(this.label,(()=>(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div class="gds-list-heading" aria-hidden="true" id="label">\n            ',"\n          </div>"])),this.label))))}};(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-grouped-list")],GdsGroupedList);var GdsListItem=class extends chunk_ZQ4D5K7J.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return(0,chunk_VOYMQ322.qy)(chunk_73TOOYEY_templateObject||(chunk_73TOOYEY_templateObject=function chunk_73TOOYEY_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["<slot></slot>"])))}};GdsListItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-list-item")],GdsListItem);var grouped_list_stories_templateObject,grouped_list_stories_templateObject2,_templateObject3;__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");(0,__webpack_require__("./dist/libs/core/src/transitional-styles.js").Y)();const grouped_list_stories={title:"Components/Groued List",component:"gds-grouped-list",subcomponents:{ListItem:"gds-list-item"},parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/grouped-list)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-list)\n\nist are used to list many datapoints with labels in a structured way. They may be grouped under\nheading and they may have a link or button added to act on the data being displayed."}}},tags:["autodocs"]};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"array"}}},args:{innerHTML:"<gds-list-item>Item 1</gds-list-item>\n<gds-list-item>Item 2</gds-list-item>\n<gds-list-item>Item 3</gds-list-item>",label:"Grouped list label"}},Basic=Object.assign({},DefaultParams),WithValues=Object.assign({},DefaultParams,{name:"Grouped list with values",render:function render(args){return(0,lit.qy)(grouped_list_stories_templateObject||(grouped_list_stories_templateObject=taggedTemplateLiteralLoose_default()(['\n    <gds-grouped-list label="Example with values">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  '])))}}),WithValuesAndAction=Object.assign({},DefaultParams,{name:"Grouped list with values and action",render:function render(args){return(0,lit.qy)(grouped_list_stories_templateObject2||(grouped_list_stories_templateObject2=taggedTemplateLiteralLoose_default()(['\n    <gds-grouped-list label="Example with links">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n  '])))}}),AdjustingAppearance=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()(['\n    <gds-grouped-list label="Example of left aligned list">\n      <gds-list-item style="justify-content: left">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n\n    <gds-grouped-list label="Example of vertical list">\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  '])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams\n}",...Basic.parameters?.docs?.source}}},WithValues.parameters={...WithValues.parameters,docs:{...WithValues.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams,\n  name: 'Grouped list with values',\n  render: args => html`\n    <gds-grouped-list label=\"Example with values\">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  `\n}",...WithValues.parameters?.docs?.source},description:{story:"By default, the list items are displayed as `flex` containers with `space-between` alignment.",...WithValues.parameters?.docs?.description}}},WithValuesAndAction.parameters={...WithValuesAndAction.parameters,docs:{...WithValuesAndAction.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  name: \'Grouped list with values and action\',\n  render: args => html`\n    <gds-grouped-list label="Example with links">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n  `\n}',...WithValuesAndAction.parameters?.docs?.source},description:{story:"Elements such as links or buttons can be slotted into the list items.",...WithValuesAndAction.parameters?.docs?.description}}},AdjustingAppearance.parameters={...AdjustingAppearance.parameters,docs:{...AdjustingAppearance.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-grouped-list label="Example of left aligned list">\n      <gds-list-item style="justify-content: left">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n\n    <gds-grouped-list label="Example of vertical list">\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  `\n}',...AdjustingAppearance.parameters?.docs?.source},description:{story:"The slotted elements can be styled using inline styles or CSS classes.",...AdjustingAppearance.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","WithValues","WithValuesAndAction","AdjustingAppearance"]},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})}}]);