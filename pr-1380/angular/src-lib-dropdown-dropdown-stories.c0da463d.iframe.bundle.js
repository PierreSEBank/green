/*! For license information please see src-lib-dropdown-dropdown-stories.c0da463d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4173],{"./libs/angular/src/lib/dropdown/dropdown-button.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>NggDropdownButtonDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggDropdownButtonDirective=class NggDropdownButtonDirective{constructor(templateRef){this.templateRef=templateRef}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef}]};NggDropdownButtonDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[nggDropdownButton]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef])],NggDropdownButtonDirective)},"./libs/angular/src/lib/dropdown/dropdown-option.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>NggDropdownOptionDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggDropdownOptionDirective=class NggDropdownOptionDirective{constructor(templateRef){this.templateRef=templateRef}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef}]};NggDropdownOptionDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[nggDropdownOption]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef])],NggDropdownOptionDirective)},"./libs/angular/src/lib/dropdown/dropdown.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>NggDropdownComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var NggDropdownComponent_1,dropdown_componentngResource=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown.component.scss?ngResource"),dropdown_componentngResource_default=__webpack_require__.n(dropdown_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),dropdown_option_directive=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown-option.directive.ts"),dropdown_button_directive=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown-button.directive.ts"),chunk_SSRI6BF6=(__webpack_require__("./dist/libs/core/src/chunks/chunk.TJIMDH6S.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2QXAOTCS.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.3SXUKXZV.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VRM45KID.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2ND5EWHE.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.J66SGCWW.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.SSRI6BF6.js"));__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");let NggDropdownComponent=class NggDropdownComponent{static#_=NggDropdownComponent_1=this;set options(value){this._options=value,this.texts={...this.texts,select:this.displayTextByValue(this._value)}}get options(){return this._options}set multiSelect(value){this._multiSelect=this.convertToBoolean(value)}get multiSelect(){return this._multiSelect}set searchable(value){this._searchable=this.convertToBoolean(value)}get searchable(){return this._searchable}set value(newValue){this.options&&(this._value=newValue,this.texts={...this.texts,select:this.displayTextByValue(this._value)})}get value(){return this._value}get selectedOption(){return Array.isArray(this.value)?this.value.map((v=>this.optionByValue(v))):this.optionByValue(this.value)}get control(){return this.injector.get(fesm2022_forms.vO)}constructor(injector,_cdr){this.injector=injector,this._cdr=_cdr,this.loop=!1,this.display="label",this.useValue="value",this._multiSelect=!1,this._searchable=!1,this.valueChange=new core.EventEmitter,this.touched=new core.EventEmitter,this.onValueChange=event=>{const target=event.target;this._value=target.value,this.texts={...this.texts,select:this.displayTextByValue(this._value)},this.onChangeFn?.(this.value),this.valueChange.emit(this.value),this._cdr.detectChanges()},this.compareWithAdapter=(o1,o2)=>(this.compareWith||((a,b)=>a===b))(o1,o2),this.searchFilterAdapter=(q,o)=>this.searchFilter?this.searchFilter(q,o.value):((q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()))(q,o),this.optionByValue=value=>this.options?.find((o=>o[this.useValue]===value)),this.displayTextByValue=value=>{if(!Array.isArray(value))return this.optionByValue(value)?.[this.display]||(this.texts?.placeholder??"Select");const displayValues=value.map((v=>this.optionByValue(v)?.[this.display]));return displayValues?.length>2?`${displayValues.length} ${this.texts?.selected} `:displayValues?.join(", ")||(this.texts?.placeholder??"Select")},chunk_SSRI6BF6.aB()}ngOnInit(){this._value||(this.multiSelect?this._value=this.options?.filter((o=>!0===o.selected))?.map((o=>o[this.useValue])):this._value=this.options?.find((o=>!0===o.selected))?.[this.useValue],this.texts={...this.texts,select:this.displayTextByValue(this._value)}),this.texts={close:this.texts?.close??"Close",optionsDescription:this.texts?.optionsDescription??"Options",placeholder:this.texts?.placeholder??"Select",searchPlaceholder:this.texts?.searchPlaceholder??"Search",selected:this.texts?.selected??"selected",select:this.displayTextByValue(this._value)}}writeValue(value){this.value=value,this._cdr.detectChanges()}registerOnChange(fn){this.onChangeFn=fn}registerOnTouched(fn){this.onTouchedFn=fn}convertToBoolean(value){return""===value||"true"===value||"true"===value.toString()||!1}static#_2=this.ctorParameters=()=>[{type:core.Injector,decorators:[{type:core.Inject,args:[core.Injector]}]},{type:core.ChangeDetectorRef}];static#_3=this.propDecorators={id:[{type:core.Input}],texts:[{type:core.Input}],loop:[{type:core.Input}],display:[{type:core.Input}],useValue:[{type:core.Input}],label:[{type:core.Input}],valid:[{type:core.Input}],invalid:[{type:core.Input}],compareWith:[{type:core.Input}],searchFilter:[{type:core.Input}],syncPopoverWidth:[{type:core.Input}],size:[{type:core.Input}],hideLabel:[{type:core.Input}],maxHeight:[{type:core.Input}],fixedPlacement:[{type:core.Input}],options:[{type:core.Input}],multiSelect:[{type:core.Input}],searchable:[{type:core.Input}],value:[{type:core.Input}],valueChange:[{type:core.Output}],touched:[{type:core.Output}],customOption:[{type:core.ContentChild,args:[dropdown_option_directive.a]}],customButton:[{type:core.ContentChild,args:[dropdown_button_directive.d]}],gdsDropdown:[{type:core.ViewChild,args:["gdsDropdown",{static:!1}]}]}};NggDropdownComponent=NggDropdownComponent_1=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-dropdown",template:'<div class="form-group">\n  <gds-dropdown\n    *nggCoreElement\n    #gdsDropdown\n    [value]="value"\n    [searchable]="searchable"\n    [label]="label"\n    (change)="onValueChange($event)"\n    [multiple]="multiSelect"\n    [invalid]="invalid"\n    [compareWith]="compareWithAdapter"\n    [searchFilter]="searchFilterAdapter"\n    [syncPopoverWidth]="syncPopoverWidth"\n    [size]="size"\n    [hideLabel]="hideLabel"\n    [maxHeight]="maxHeight"\n  >\n    <span slot="message" #formInfo\n      ><ng-content select="[data-form-info]"></ng-content\n    ></span>\n\n    <span slot="trigger"\n      ><ng-container\n        *ngTemplateOutlet="\n          customButton?.templateRef && selectedOption\n            ? customButton!.templateRef\n            : defaultButton;\n          context: { option: selectedOption }\n        "\n      ></ng-container\n    ></span>\n\n    <ng-container *ngFor="let option of options; let index = index">\n      <ng-container *ngIf="!option.heading; else optionHeading">\n        <gds-option *nggCoreElement [value]="option[useValue]"\n          ><ng-container\n            *ngTemplateOutlet="\n              customOption?.templateRef\n                ? customOption!.templateRef\n                : defaultOption;\n              context: { option: option, index: index }\n            "\n          ></ng-container\n        ></gds-option>\n      </ng-container>\n      <ng-template #optionHeading>\n        <gds-menu-heading *nggCoreElement>{{ option.label }}</gds-menu-heading>\n      </ng-template>\n    </ng-container>\n  </gds-dropdown>\n</div>\n\n<ng-template #defaultButton let-selected="option">\n  <span class="trigger">{{ texts?.select }}</span>\n</ng-template>\n\n<ng-template #defaultOption let-option="option">\n  {{ display ? option[display] : option.name }}\n</ng-template>\n',providers:[{provide:fesm2022_forms.kq,useExisting:NggDropdownComponent_1,multi:!0}],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[dropdown_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.Injector,core.ChangeDetectorRef])],NggDropdownComponent)},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=(0,directive.u$)(e)},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./libs/angular/src/lib/dropdown/dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomOption:()=>CustomOption,Form:()=>Form,FormWithReset:()=>FormWithReset,MultiSelect:()=>MultiSelect,Searchable:()=>Searchable,Select:()=>Select,Small:()=>Small,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dropdown_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),dropdown_component=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown.component.ts"),dropdown_option_directive=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown-option.directive.ts"),dropdown_button_directive=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown-button.directive.ts"),shared=__webpack_require__("./libs/angular/src/lib/shared/index.ts");let NggDropdownModule=class NggDropdownModule{};NggDropdownModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[dropdown_component.d,dropdown_option_directive.a,dropdown_button_directive.d],imports:[common.CommonModule,shared.$M],exports:[dropdown_component.d,dropdown_option_directive.a,dropdown_button_directive.d],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],NggDropdownModule);var of=__webpack_require__("./node_modules/rxjs/_esm5/internal/observable/of.js"),delay=__webpack_require__("./node_modules/rxjs/_esm5/internal/operators/delay.js");const dropdown_stories={title:"Components/Dropdown",component:dropdown_component.d,decorators:[(0,dist.moduleMetadata)({imports:[fesm2022_forms.YN,fesm2022_forms.X1,NggDropdownModule]})],parameters:{componentIds:["component-dropdown"]}},Template=args=>({template:'<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [size]="size" [id]="id"></ngg-dropdown>',props:args}),Select=Template.bind({});Select.args={id:"",texts:{placeholder:"Select meal"},value:"",loop:!0,multiSelect:!1,searchable:!1,display:"label",useValue:"value",options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]};const Small=Template.bind({});Small.args={id:"",texts:{placeholder:"Select meal"},value:"",loop:!0,multiSelect:!1,searchable:!1,display:"label",useValue:"value",size:"small",options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]};const Test=Template.bind({});Test.args={id:"",texts:{placeholder:"Select meal"},value:"",loop:!0,multiSelect:!1,searchable:!1,display:"label",useValue:"value",options:[{label:"Lunch",value:"lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",value:"dinner",heading:!0},{label:"Ramen",value:"ramen"},{label:"Tori Ramen",value:"tori"},{label:"Tokyo Ramen",value:"tokyo"},{label:"Kyoto Ramen",value:"kyoto"},{label:"Sriracha Ramen",value:"sriracha"},{label:"Kimchi Ramen",value:"kimchi"},{label:"Hakodate Ramen",value:"hakodate"}]};const MultiSelect=Template.bind({});MultiSelect.args={id:"",texts:{placeholder:"Select meal(s)"},value:"",loop:!0,multiSelect:!0,searchable:!1,display:"name",useValue:"value",options:[{name:"Tacos",value:"tacos"},{name:"Pizza",value:"pizza"},{name:"Sushi",value:"sushi"}]};const Searchable=Template.bind({});Searchable.args={id:"",texts:{placeholder:"Select meal(s)",searchPlaceholder:"Search meal"},value:"",loop:!0,multiSelect:!1,searchable:!0,display:"name",useValue:"value",options:[{name:"Tacos",value:"tacos"},{name:"Pizza",value:"pizza"},{name:"Sushi",value:"sushi"},{name:"Ramen",value:"ramen"},{name:"Tori Ramen",value:"tori"},{name:"Tokyo Ramen",value:"tokyo"},{name:"Kyoto Ramen",value:"kyoto"},{name:"Sriracha Ramen",value:"sriracha"},{name:"Kimchi Ramen",value:"kimchi"},{name:"Hakodate Ramen",value:"hakodate"}]};const CustomOption=(args=>(args.compareWith=(o1,o2)=>o1.id===o2.id,args.searchFilter=(search,value)=>["kitchen","id"].some((key=>value[key].toLowerCase().includes(search.toLowerCase()))),{component:dropdown_component.d,template:'\n    <ngg-dropdown\n      [texts]="texts"\n      [options]="options"\n      [(value)]="value"\n      [loop]="loop"\n      [multiSelect]="multiSelect"\n      [searchable]="searchable"\n      [searchFilter]="searchFilter"\n      [compareWith]="compareWith"\n      [useValue]="useValue"\n      [display]="display"\n      [id]="id">\n      <ng-template nggDropdownButton let-option="option">\n        <div>\n          <div>{{ option.name }}</div>\n          <div style="font-size: 0.8em">{{ option.val.kitchen }}</div>\n        </div>\n      </ng-template>\n      <ng-template nggDropdownOption let-option="option" let-index="index">\n        <div>\n          <div>{{ index }}. {{ option.name }}</div>\n          <div style="font-size: 0.8em">{{ option.val.kitchen }}</div>\n        </div>\n      </ng-template>\n    </ngg-dropdown>\n    ',props:args})).bind({});CustomOption.args={id:"",texts:{placeholder:"Select meal"},value:"",loop:!0,multiSelect:!1,searchable:!0,useValue:"val",display:"name",options:[{name:"Tacos",val:{id:"tacos",kitchen:"mexican"}},{name:"Pizza",val:{id:"pizza",kitchen:"italian"}},{name:"Sushi",val:{id:"sushi",kitchen:"japanese"}}]};const Form=(args=>{const validationForm=new fesm2022_forms.gE({country:new fesm2022_forms.MJ(void 0,[fesm2022_forms.k0.required])}),options$=(0,of.of)([{label:"Sweden",value:"sweden"},{label:"Denmark",value:"denmark"},{label:"Finland",value:"Finland"},{label:"Norway",value:"norway"},{label:"England",value:"england"},{label:"Germany",value:"germany"},{label:"Estonia",value:"estonia"},{label:"Lithuania",value:"lithuania"},{label:"Belarus",value:"belarus"},{label:"Latvia",value:"latvia"},{label:"Greece",value:"greece"},{label:"Italy",value:"italy"},{label:"Austria",value:"austria"},{label:"Switzerland",value:"switzerland"},{label:"Netherlands",value:"netherlands"},{label:"Belgium",value:"belgium"},{label:"France",value:"france"},{label:"Spain",value:"spain"},{label:"Portugal",value:"portugal"},{label:"Poland",value:"poland"}]).pipe((0,delay.c)(3e3));return{component:dropdown_component.d,template:'\n      <form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save(validationForm.value)">\n  <div class="form-group" *ngIf="validationForm.get(\'country\') as dropdown">\n    <ngg-dropdown\n      label="Country"\n      [options]="options$ | async"\n      formControlName="country"\n      [valid]="dropdown.valid && ngForm.submitted"\n      [invalid]="dropdown.invalid && ngForm.submitted"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n        >Select country</ng-container\n      >\n      <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf="dropdown.errors as errors">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf="errors[\'required\']">Select country</ng-container>\n        </ng-container>\n      </ng-container>\n    </ngg-dropdown>\n  </div>\n  <button type="submit" [disabled]="ngForm?.submitted && validationForm.invalid">\n    Save\n  </button>\n    ',props:{...args,validationForm,options$,save:form=>{console.log("Saved!",form)}}}}).bind({});Form.args={};const FormWithReset=(args=>{const validationFormAdvance=new fesm2022_forms.gE({country:new fesm2022_forms.MJ(void 0,[fesm2022_forms.k0.required])}),options$=(0,of.of)([{label:"Sweden",value:{country:"sweden",id:"1"}},{label:"Australia",value:{country:"Australia",id:"2"}}]).pipe((0,delay.c)(3e3));return{component:dropdown_component.d,template:'\n    <form [formGroup]="validationFormAdvance" #ngForm="ngForm" (submit)="save(validationFormAdvance.value)">\n    <div class="form-group" *ngIf="validationFormAdvance.get(\'country\') as dropdown">\n      <ngg-dropdown\n        label="Country"\n        [options]="options$ | async"\n        formControlName="country"\n        [invalid]="validationFormAdvance.get(\'country\').invalid && validationFormAdvance.get(\'country\').touched"\n      >\n        \x3c!-- Hint text when not submitted --\x3e\n        <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n          >Select country</ng-container\n        >\n        <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n          \x3c!-- Text when form control contains one or more errors --\x3e\n          <ng-container *ngIf="dropdown.errors as errors">\n            \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n            <ng-container *ngIf="errors[\'required\']">Select country</ng-container>\n          </ng-container>\n        </ng-container>\n      </ngg-dropdown>\n    </div>\n    <button type="submit" [disabled]="ngForm?.submitted && validationFormAdvance.invalid">\n      Save\n    </button>\n    <button (click)="validationFormAdvance.reset()">\n      Reset\n    </button>\n    ',props:{...args,validationFormAdvance,options$,save:form=>{console.log("Saved!",form)}}}}).bind({});FormWithReset.args={},Select.parameters={...Select.parameters,docs:{...Select.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => ({\n  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [size]="size" [id]="id"></ngg-dropdown>`,\n  props: args\n})',...Select.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => ({\n  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [size]="size" [id]="id"></ngg-dropdown>`,\n  props: args\n})',...Small.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => ({\n  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [size]="size" [id]="id"></ngg-dropdown>`,\n  props: args\n})',...Test.parameters?.docs?.source}}},MultiSelect.parameters={...MultiSelect.parameters,docs:{...MultiSelect.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => ({\n  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [size]="size" [id]="id"></ngg-dropdown>`,\n  props: args\n})',...MultiSelect.parameters?.docs?.source}}},Searchable.parameters={...Searchable.parameters,docs:{...Searchable.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => ({\n  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [size]="size" [id]="id"></ngg-dropdown>`,\n  props: args\n})',...Searchable.parameters?.docs?.source}}},CustomOption.parameters={...CustomOption.parameters,docs:{...CustomOption.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => {\n  args.compareWith = (o1: any, o2: any) => o1.id === o2.id;\n  args.searchFilter = (search: string, value: any) => [\'kitchen\', \'id\'].some(key => value[key].toLowerCase().includes(search.toLowerCase()));\n  return {\n    component: NggDropdownComponent,\n    template: `\n    <ngg-dropdown\n      [texts]="texts"\n      [options]="options"\n      [(value)]="value"\n      [loop]="loop"\n      [multiSelect]="multiSelect"\n      [searchable]="searchable"\n      [searchFilter]="searchFilter"\n      [compareWith]="compareWith"\n      [useValue]="useValue"\n      [display]="display"\n      [id]="id">\n      <ng-template nggDropdownButton let-option="option">\n        <div>\n          <div>{{ option.name }}</div>\n          <div style="font-size: 0.8em">{{ option.val.kitchen }}</div>\n        </div>\n      </ng-template>\n      <ng-template nggDropdownOption let-option="option" let-index="index">\n        <div>\n          <div>{{ index }}. {{ option.name }}</div>\n          <div style="font-size: 0.8em">{{ option.val.kitchen }}</div>\n        </div>\n      </ng-template>\n    </ngg-dropdown>\n    `,\n    props: args\n  };\n}',...CustomOption.parameters?.docs?.source}}},Form.parameters={...Form.parameters,docs:{...Form.parameters?.docs,source:{originalSource:"(args: NggDropdownComponent) => {\n  const validationForm = new FormGroup({\n    country: new FormControl(undefined, [Validators.required])\n  });\n  const options$ = of([{\n    label: 'Sweden',\n    value: 'sweden'\n  }, {\n    label: 'Denmark',\n    value: 'denmark'\n  }, {\n    label: 'Finland',\n    value: 'Finland'\n  }, {\n    label: 'Norway',\n    value: 'norway'\n  }, {\n    label: 'England',\n    value: 'england'\n  }, {\n    label: 'Germany',\n    value: 'germany'\n  }, {\n    label: 'Estonia',\n    value: 'estonia'\n  }, {\n    label: 'Lithuania',\n    value: 'lithuania'\n  }, {\n    label: 'Belarus',\n    value: 'belarus'\n  }, {\n    label: 'Latvia',\n    value: 'latvia'\n  }, {\n    label: 'Greece',\n    value: 'greece'\n  }, {\n    label: 'Italy',\n    value: 'italy'\n  }, {\n    label: 'Austria',\n    value: 'austria'\n  }, {\n    label: 'Switzerland',\n    value: 'switzerland'\n  }, {\n    label: 'Netherlands',\n    value: 'netherlands'\n  }, {\n    label: 'Belgium',\n    value: 'belgium'\n  }, {\n    label: 'France',\n    value: 'france'\n  }, {\n    label: 'Spain',\n    value: 'spain'\n  }, {\n    label: 'Portugal',\n    value: 'portugal'\n  }, {\n    label: 'Poland',\n    value: 'poland'\n  }]).pipe(delay(3000));\n  const save = (form: any) => {\n    console.log('Saved!', form);\n  };\n  return {\n    component: NggDropdownComponent,\n    template: `\n      <form [formGroup]=\"validationForm\" #ngForm=\"ngForm\" (submit)=\"save(validationForm.value)\">\n  <div class=\"form-group\" *ngIf=\"validationForm.get('country') as dropdown\">\n    <ngg-dropdown\n      label=\"Country\"\n      [options]=\"options$ | async\"\n      formControlName=\"country\"\n      [valid]=\"dropdown.valid && ngForm.submitted\"\n      [invalid]=\"dropdown.invalid && ngForm.submitted\"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf=\"!ngForm['submitted']\"\n        >Select country</ng-container\n      >\n      <ng-container data-form-info *ngIf=\"ngForm['submitted']\">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf=\"dropdown.errors as errors\">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf=\"errors['required']\">Select country</ng-container>\n        </ng-container>\n      </ng-container>\n    </ngg-dropdown>\n  </div>\n  <button type=\"submit\" [disabled]=\"ngForm?.submitted && validationForm.invalid\">\n    Save\n  </button>\n    `,\n    props: {\n      ...args,\n      validationForm,\n      options$,\n      save\n    }\n  };\n}",...Form.parameters?.docs?.source}}},FormWithReset.parameters={...FormWithReset.parameters,docs:{...FormWithReset.parameters?.docs,source:{originalSource:'(args: NggDropdownComponent) => {\n  const validationFormAdvance = new FormGroup({\n    country: new FormControl(undefined, [Validators.required])\n  });\n  const options$ = of([{\n    label: \'Sweden\',\n    value: {\n      country: \'sweden\',\n      id: \'1\'\n    }\n  }, {\n    label: \'Australia\',\n    value: {\n      country: \'Australia\',\n      id: \'2\'\n    }\n  }]).pipe(delay(3000));\n  const save = (form: any) => {\n    console.log(\'Saved!\', form);\n  };\n  return {\n    component: NggDropdownComponent,\n    template: `\n    <form [formGroup]="validationFormAdvance" #ngForm="ngForm" (submit)="save(validationFormAdvance.value)">\n    <div class="form-group" *ngIf="validationFormAdvance.get(\'country\') as dropdown">\n      <ngg-dropdown\n        label="Country"\n        [options]="options$ | async"\n        formControlName="country"\n        [invalid]="validationFormAdvance.get(\'country\').invalid && validationFormAdvance.get(\'country\').touched"\n      >\n        \x3c!-- Hint text when not submitted --\x3e\n        <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n          >Select country</ng-container\n        >\n        <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n          \x3c!-- Text when form control contains one or more errors --\x3e\n          <ng-container *ngIf="dropdown.errors as errors">\n            \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n            <ng-container *ngIf="errors[\'required\']">Select country</ng-container>\n          </ng-container>\n        </ng-container>\n      </ngg-dropdown>\n    </div>\n    <button type="submit" [disabled]="ngForm?.submitted && validationFormAdvance.invalid">\n      Save\n    </button>\n    <button (click)="validationFormAdvance.reset()">\n      Reset\n    </button>\n    `,\n    props: {\n      ...args,\n      validationFormAdvance,\n      options$,\n      save\n    }\n  };\n}',...FormWithReset.parameters?.docs?.source}}};const __namedExportsOrder=["Select","Small","Test","MultiSelect","Searchable","CustomOption","Form","FormWithReset"]},"./libs/angular/src/lib/dropdown/dropdown.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".trigger {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-wrap: nowrap;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);