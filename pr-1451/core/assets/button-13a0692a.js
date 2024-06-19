import{b as D,a as R,r as E,s as B,x as G,T as N}from"./lit-element-2a5e401f.js";import{g as T,n as d,h as F}from"./gds-element-24e794df.js";import{a as P}from"./query-b9d3c2af.js";import{n as U}from"./when-cf7256a5.js";import{G as j,o as y}from"./form-control-cdf6d873.js";import{e as q}from"./class-map-43969d56.js";import{c as V}from"./constrain-slots-08d8606c.js";import{e as X,i as Y,t as H}from"./directive-12249aa5.js";import{T as I}from"./transitional-styles-494a8762.js";import{t as W}from"./tokens.style-1e462ec5.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=Symbol.for(""),J=e=>{if((e==null?void 0:e.r)===O)return e==null?void 0:e._$litStatic$},z=(e,...t)=>({_$litStatic$:t.reduce((r,o,s)=>r+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1],e[0]),r:O}),C=new Map,K=e=>(t,...r)=>{const o=r.length;let s,a;const i=[],w=[];let _,v=0,$=!1;for(;v<o;){for(_=t[v];v<o&&(a=r[v],(s=J(a))!==void 0);)_+=s+t[++v],$=!0;v!==o&&w.push(a),i.push(_),v++}if(v===o&&i.push(t[o]),$){const x=i.join("$$lit$$");(t=C.get(x))===void 0&&(i.raw=i,C.set(x,t=i)),r=w}return e(t,...r)},Q=K(D);class Z extends Y{constructor(t){if(super(t),t.type!==H.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return R}update(t,[r]){var a;const o=t.element,s=(a=t.options)==null?void 0:a.host;Array.from(s.attributes).forEach(i=>{r(i)&&o.setAttribute(i.name.replace("gds-",""),i.value)})}}const tt=X(Z),et=`:host{--gds-ripple-motion-name: ripple;--gds-ripple-motion: var(--gds-ripple-motion-name) var(--gds-sys-motion-duration) var(--gds-sys-motion-timing-function) var(--gds-sys-motion-delay) var(--gds-sys-motion-iteration-count) var(--gds-sys-motion-direction) var(--gds-sys-motion-fill-mode) var(--gds-sys-motion-play-state);border-radius:var(--gds-sys-radii-full);contain:strict;display:flex;height:100%;top:0;right:0;bottom:0;left:0;overflow:hidden;position:absolute;width:100%}div{background-color:currentColor;border-radius:var(--gds-sys-radii-full);display:flex;height:20px;left:var(--gds-ripple-left, 50%);margin-left:-10px;margin-top:-10px;opacity:0;pointer-events:none;position:absolute;top:var(--gds-ripple-top, 50%);width:20px;will-change:transform}div.gds-ripple-effect{animation:var(--gds-ripple-motion)}@keyframes ripple{0%{opacity:.5;transform:scale(0)}to{opacity:0;transform:scale(calc(3 * var(--mt-ripple-spread, 4)))}}@media (prefers-reduced-motion: reduce){:host{--gds-ripple-motion-name: none !important}}
`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,A=(e,t,r,o)=>{for(var s=o>1?void 0:o?ot(t,r):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&rt(t,r,s),s};let b=class extends B{constructor(){super(...arguments),this.onmousedown=e=>{const r=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-r.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-r.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return G`<div></div>`}};b.styles=[W,E(et)];A([P("div")],b.prototype,"_rippleEl",2);b=A([T("gds-ripple")],b);const st=`@layer tokens,a11y,core,ranks,sizes,variants,disabled;@layer tokens{:host{--_gap: var(--gds-sys-space-spacer-m);--_transition: var(--gds-sys-transition);--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-m);--_border-radius: var(--gds-sys-radii-full);--_border-width: 1px;--_border-style: solid;--_color-bg: var(--gds-sys-color-content-content);--_color-text: var(--gds-sys-color-content-content-inverse);--_color-border: var(--gds-sys-color-stroke-stroke);--_color-outline-alpha: 60%;--_color-outline: var(--_color-border);--_state-layer-hover: var(--gds-sys-color-state-layers-state-black);--_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);--gds-sys-transition-properties: color;contain:layout;display:inline-block;isolation:isolate;max-width:100%}}@layer a11y{@media (prefers-reduced-motion: reduce){:host{--_transition: none}}}@layer core{.button{--gds-sys-transition-properties: color !important;align-items:center;background-color:var(--_color-bg);block-size:100%;border-color:var(--_color-border);border-radius:var(--_border-radius);border-style:var(--_border-style);border-width:var(--_border-width);box-sizing:border-box;color:var(--_color-text);color-scheme:dark light;cursor:pointer;display:inline-flex;font-family:inherit;font-size:1rem;font-weight:400;gap:var(--_gap);height:var(--_size);inline-size:100%;justify-content:space-between;justify-items:center;line-height:1.25;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;text-decoration:none;transition:var(--_transition);transition-property:color,border-color}.button:focus{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha))}.button:focus:not(:focus-visible){outline-color:transparent}.button:hover{background-color:color-mix(in srgb,var(--_color-bg),var(--_state-layer-hover));border-color:color-mix(in srgb,var(--_color-border),var(--_state-layer-hover))}.button:active{background-color:color-mix(in srgb,var(--_color-bg),var(--_state-layer-active));border-color:color-mix(in srgb,var(--_color-border),var(--_state-layer-active))}.button slot:not([name]){display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.button.icon slot{display:contents}}@layer ranks{:host([rank*="secondary"]) .button{--_color-bg: var(--gds-sys-color-content-content-inverse);--_color-text: var(--gds-sys-color-content-content);--_color-border: var(--gds-sys-color-stroke-stroke)}:host([rank*="secondary"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1)}:host([rank*="tertiary"]) .button{--_color-bg: transparent;--_color-text: var(--gds-sys-color-content-content);--_color-border: transparent}:host([rank*="tertiary"]) .button:hover{--_color-border: var(--gds-sys-color-stroke-stroke)}:host([rank*="tertiary"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);--_color-border: var(--gds-sys-color-stroke-stroke)}.button.circle{display:flex;height:var(--_size);width:var(--_size);aspect-ratio:1/1;justify-content:center;align-items:center;padding:0}}@layer sizes{:host([size="small"]) .button{--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-s);--_size: 2rem;font-size:.875rem}:host([size="medium"]) .button{--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-m);--_size: 2.5rem}:host([size="large"]) .button{--_padding-inline: var(--gds-sys-space-padding-xl);--_padding-block: var(--gds-sys-space-padding-m);--_size: 3rem}}@layer variants{:host([rank="primary"][variant="positive"]) .button{--_bg: var(--gds-sys-color-container-container-positive);--_color-bg: var(--_bg);--_color-border: var(--_bg)}:host([rank="primary"][variant="positive"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1)}:host([rank="primary"][variant="positive"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2)}:host([rank="primary"][variant="positive"]) .button:focus{--_color-outline: var(--_bg)}:host([rank="secondary"][variant="positive"]) .button{--_color-bg: var(--gds-sys-color-content-content-inverse);--_color-text: var(--gds-sys-color-content-content-positive);--_color-border: var(--gds-sys-color-stroke-stroke-positive)}:host([rank="secondary"][variant="positive"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-positive)}:host([rank="secondary"][variant="positive"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-positive-dim )}:host([rank="tertiary"][variant="positive"]) .button{--_color-bg: transparent;--_color-text: var(--gds-sys-color-content-content-positive);--_color-border: transparent}:host([rank="tertiary"][variant="positive"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);--_color-border: var(--gds-sys-color-stroke-stroke-positive)}:host([rank="tertiary"][variant="positive"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-positive-dim );--_color-border: var(--gds-sys-color-stroke-stroke-positive)}:host([rank="primary"][variant="negative"]) .button{--_bg: var(--gds-sys-color-container-container-negative);--_color-bg: var(--_bg);--_color-text: var(--gds-sys-color-status-negative-on-negative);--_color-border: var(--_bg)}:host([rank="primary"][variant="negative"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1)}:host([rank="primary"][variant="negative"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2)}:host([rank="primary"][variant="negative"]) .button:focus{--_color-outline: var(--_bg)}:host([rank="secondary"][variant="negative"]) .button{--_color-bg: var(--gds-sys-color-content-content-inverse);--_color-text: var(--gds-sys-color-content-content-negative);--_color-border: var(--gds-sys-color-stroke-stroke-negative)}:host([rank="secondary"][variant="negative"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-negative)}:host([rank="secondary"][variant="negative"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-negative-dim )}:host([rank="tertiary"][variant="negative"]) .button{--_color-bg: transparent;--_color-text: var(--gds-sys-color-content-content-negative);--_color-border: transparent}:host([rank="tertiary"][variant="negative"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);--_color-border: var(--gds-sys-color-stroke-stroke-negative)}:host([rank="tertiary"][variant="negative"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-negative-dim );--_color-border: var(--gds-sys-color-stroke-stroke-negative)}}@layer disabled{.button:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`,S=new WeakMap;function at(e){return(t,...r)=>{let o=S.get(t);return o||(o=t.map(s=>s.replace(/\n[\s]+</gm,"<")),o.raw=t.raw,S.set(t,o)),e(o,...r)}}var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,c=(e,t,r,o)=>{for(var s=o>1?void 0:o?nt(t,r):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&it(t,r,s),s},L=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(L(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},lt=(e,t,r,o)=>(L(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),u,p,g,m,M,f,k;const ct=at(F);let n=class extends j{constructor(){super(),h(this,p),h(this,m),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",h(this,u,!1),h(this,f,()=>{var t;const e=((t=this._mainSlot)==null?void 0:t.assignedNodes())??[];lt(this,u,e.length===1&&e.some(r=>r.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),h(this,k,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!l(this,p,g)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),V(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),I.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:l(this,u),icon:l(this,u),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=l(this,p,g)?z`a`:z`button`;return Q`
      <${t}
        class=${q(e)}
        type="${y(l(this,p,g)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||N}
        href=${y(l(this,p,g)?this.href:void 0)}
        target=${y(l(this,p,g)?this.target:void 0)}
        rel=${y(l(this,p,g)?this.rel||l(this,m,M):void 0)}
        download=${y(l(this,p,g)?this.download:void 0)}
        part="_button"
        @click="${l(this,k)}"
        ${tt(r=>r.name.startsWith("gds-aria")||r.name==="gds-role")}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${l(this,f)}></slot>
        <slot name="trail"></slot>
        ${U(!this._isUsingTransitionalStyles,()=>ct`<gds-ripple></gds-ripple>`)}
      </${t}>
    `}};u=new WeakMap;p=new WeakSet;g=function(){return this.href.length>0};m=new WeakSet;M=function(){return this.target==="_blank"?"noreferrer noopener":void 0};f=new WeakMap;k=new WeakMap;n.styles=[W,E(st)];n.shadowRootOptions={mode:"open",delegatesFocus:!0};c([d({type:Boolean,reflect:!0})],n.prototype,"disabled",2);c([d({reflect:!0})],n.prototype,"type",2);c([d({reflect:!0})],n.prototype,"rank",2);c([d({reflect:!0})],n.prototype,"variant",2);c([d({reflect:!0})],n.prototype,"size",2);c([d()],n.prototype,"label",2);c([d()],n.prototype,"href",2);c([d()],n.prototype,"target",2);c([d()],n.prototype,"rel",2);c([d()],n.prototype,"download",2);c([P("slot:not([name])")],n.prototype,"_mainSlot",2);n=c([T("gds-button")],n);
