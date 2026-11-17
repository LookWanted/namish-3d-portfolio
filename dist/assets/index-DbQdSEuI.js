(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function m_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var af={exports:{}},Ma={},lf={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function RE(){if(B0)return _t;B0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(I,ne,Te){this.props=I,this.context=ne,this.refs=T,this.updater=Te||_}y.prototype.isReactComponent={},y.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(I,ne,Te){this.props=I,this.context=ne,this.refs=T,this.updater=Te||_}var L=R.prototype=new S;L.constructor=R,M(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,F={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(I,ne,Te){var Q,ve={},Ee=null,Ue=null;if(ne!=null)for(Q in ne.ref!==void 0&&(Ue=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)O.call(ne,Q)&&!E.hasOwnProperty(Q)&&(ve[Q]=ne[Q]);var _e=arguments.length-2;if(_e===1)ve.children=Te;else if(1<_e){for(var Le=Array(_e),it=0;it<_e;it++)Le[it]=arguments[it+2];ve.children=Le}if(I&&I.defaultProps)for(Q in _e=I.defaultProps,_e)ve[Q]===void 0&&(ve[Q]=_e[Q]);return{$$typeof:n,type:I,key:Ee,ref:Ue,props:ve,_owner:F.current}}function Y(I,ne){return{$$typeof:n,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function U(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Te){return ne[Te]})}var ee=/\/+/g;function fe(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?U(""+I.key):ne.toString(36)}function V(I,ne,Te,Q,ve){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var Ue=!1;if(I===null)Ue=!0;else switch(Ee){case"string":case"number":Ue=!0;break;case"object":switch(I.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=I,ve=ve(Ue),I=Q===""?"."+fe(Ue,0):Q,P(ve)?(Te="",I!=null&&(Te=I.replace(ee,"$&/")+"/"),V(ve,ne,Te,"",function(it){return it})):ve!=null&&(B(ve)&&(ve=Y(ve,Te+(!ve.key||Ue&&Ue.key===ve.key?"":(""+ve.key).replace(ee,"$&/")+"/")+I)),ne.push(ve)),1;if(Ue=0,Q=Q===""?".":Q+":",P(I))for(var _e=0;_e<I.length;_e++){Ee=I[_e];var Le=Q+fe(Ee,_e);Ue+=V(Ee,ne,Te,Le,ve)}else if(Le=g(I),typeof Le=="function")for(I=Le.call(I),_e=0;!(Ee=I.next()).done;)Ee=Ee.value,Le=Q+fe(Ee,_e++),Ue+=V(Ee,ne,Te,Le,ve);else if(Ee==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Ue}function J(I,ne,Te){if(I==null)return I;var Q=[],ve=0;return V(I,Q,"","",function(Ee){return ne.call(Te,Ee,ve++)}),Q}function le(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Te){(I._status===0||I._status===-1)&&(I._status=1,I._result=Te)},function(Te){(I._status===0||I._status===-1)&&(I._status=2,I._result=Te)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var q={current:null},G={transition:null},H={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function W(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:J,forEach:function(I,ne,Te){J(I,function(){ne.apply(this,arguments)},Te)},count:function(I){var ne=0;return J(I,function(){ne++}),ne},toArray:function(I){return J(I,function(ne){return ne})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=R,_t.StrictMode=r,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,_t.act=W,_t.cloneElement=function(I,ne,Te){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=M({},I.props),ve=I.key,Ee=I.ref,Ue=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,Ue=F.current),ne.key!==void 0&&(ve=""+ne.key),I.type&&I.type.defaultProps)var _e=I.type.defaultProps;for(Le in ne)O.call(ne,Le)&&!E.hasOwnProperty(Le)&&(Q[Le]=ne[Le]===void 0&&_e!==void 0?_e[Le]:ne[Le])}var Le=arguments.length-2;if(Le===1)Q.children=Te;else if(1<Le){_e=Array(Le);for(var it=0;it<Le;it++)_e[it]=arguments[it+2];Q.children=_e}return{$$typeof:n,type:I.type,key:ve,ref:Ee,props:Q,_owner:Ue}},_t.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},_t.createElement=C,_t.createFactory=function(I){var ne=C.bind(null,I);return ne.type=I,ne},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:u,render:I}},_t.isValidElement=B,_t.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:le}},_t.memo=function(I,ne){return{$$typeof:h,type:I,compare:ne===void 0?null:ne}},_t.startTransition=function(I){var ne=G.transition;G.transition={};try{I()}finally{G.transition=ne}},_t.unstable_act=W,_t.useCallback=function(I,ne){return q.current.useCallback(I,ne)},_t.useContext=function(I){return q.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return q.current.useDeferredValue(I)},_t.useEffect=function(I,ne){return q.current.useEffect(I,ne)},_t.useId=function(){return q.current.useId()},_t.useImperativeHandle=function(I,ne,Te){return q.current.useImperativeHandle(I,ne,Te)},_t.useInsertionEffect=function(I,ne){return q.current.useInsertionEffect(I,ne)},_t.useLayoutEffect=function(I,ne){return q.current.useLayoutEffect(I,ne)},_t.useMemo=function(I,ne){return q.current.useMemo(I,ne)},_t.useReducer=function(I,ne,Te){return q.current.useReducer(I,ne,Te)},_t.useRef=function(I){return q.current.useRef(I)},_t.useState=function(I){return q.current.useState(I)},_t.useSyncExternalStore=function(I,ne,Te){return q.current.useSyncExternalStore(I,ne,Te)},_t.useTransition=function(){return q.current.useTransition()},_t.version="18.3.1",_t}var z0;function Sp(){return z0||(z0=1,lf.exports=RE()),lf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function PE(){if(V0)return Ma;V0=1;var n=Sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,v={},g=null,_=null;h!==void 0&&(g=""+h),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(_=f.ref);for(m in f)r.call(f,m)&&!a.hasOwnProperty(m)&&(v[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:u,key:g,ref:_,props:v,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=c,Ma.jsxs=c,Ma}var H0;function DE(){return H0||(H0=1,af.exports=PE()),af.exports}var D=DE(),Pe=Sp();const LE=m_(Pe);var ac={},cf={exports:{}},Jn={},uf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function NE(){return G0||(G0=1,(function(n){function e(G,H){var W=G.length;G.push(H);e:for(;0<W;){var I=W-1>>>1,ne=G[I];if(0<o(ne,H))G[I]=H,G[W]=ne,W=I;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var H=G[0],W=G.pop();if(W!==H){G[0]=W;e:for(var I=0,ne=G.length,Te=ne>>>1;I<Te;){var Q=2*(I+1)-1,ve=G[Q],Ee=Q+1,Ue=G[Ee];if(0>o(ve,W))Ee<ne&&0>o(Ue,ve)?(G[I]=Ue,G[Ee]=W,I=Ee):(G[I]=ve,G[Q]=W,I=Q);else if(Ee<ne&&0>o(Ue,W))G[I]=Ue,G[Ee]=W,I=Ee;else break e}}return H}function o(G,H){var W=G.sortIndex-H.sortIndex;return W!==0?W:G.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,v=null,g=3,_=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(G){for(var H=t(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=G)r(h),H.sortIndex=H.expirationTime,e(f,H);else break;H=t(h)}}function P(G){if(T=!1,L(G),!M)if(t(f)!==null)M=!0,le(O);else{var H=t(h);H!==null&&q(P,H.startTime-G)}}function O(G,H){M=!1,T&&(T=!1,S(C),C=-1),_=!0;var W=g;try{for(L(H),v=t(f);v!==null&&(!(v.expirationTime>H)||G&&!U());){var I=v.callback;if(typeof I=="function"){v.callback=null,g=v.priorityLevel;var ne=I(v.expirationTime<=H);H=n.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(f)&&r(f),L(H)}else r(f);v=t(f)}if(v!==null)var Te=!0;else{var Q=t(h);Q!==null&&q(P,Q.startTime-H),Te=!1}return Te}finally{v=null,g=W,_=!1}}var F=!1,E=null,C=-1,Y=5,B=-1;function U(){return!(n.unstable_now()-B<Y)}function ee(){if(E!==null){var G=n.unstable_now();B=G;var H=!0;try{H=E(!0,G)}finally{H?fe():(F=!1,E=null)}}else F=!1}var fe;if(typeof R=="function")fe=function(){R(ee)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,J=V.port2;V.port1.onmessage=ee,fe=function(){J.postMessage(null)}}else fe=function(){y(ee,0)};function le(G){E=G,F||(F=!0,fe())}function q(G,H){C=y(function(){G(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,le(O))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(G){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var W=g;g=H;try{return G()}finally{g=W}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,H){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=g;g=G;try{return H()}finally{g=W}},n.unstable_scheduleCallback=function(G,H,W){var I=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?I+W:I):W=I,G){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=W+ne,G={id:m++,callback:H,priorityLevel:G,startTime:W,expirationTime:ne,sortIndex:-1},W>I?(G.sortIndex=W,e(h,G),t(f)===null&&G===t(h)&&(T?(S(C),C=-1):T=!0,q(P,W-I))):(G.sortIndex=ne,e(f,G),M||_||(M=!0,le(O))),G},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(G){var H=g;return function(){var W=g;g=H;try{return G.apply(this,arguments)}finally{g=W}}}})(df)),df}var W0;function IE(){return W0||(W0=1,uf.exports=NE()),uf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function UE(){if(X0)return Jn;X0=1;var n=Sp(),e=IE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(i){return f.call(v,i)?!0:f.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function _(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,d){if(s===null||typeof s>"u"||_(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,l,d,p,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,R);y[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,R);y[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,R);y[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,d){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,d)&&(l=null),d||p===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var P=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),F=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),U=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),G=Symbol.iterator;function H(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var W=Object.assign,I;function ne(i){if(I===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);I=s&&s[1]||""}return`
`+I+i}var Te=!1;function Q(i,s){if(!i||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(pe){var d=pe}Reflect.construct(i,[],s)}else{try{s.call()}catch(pe){d=pe}i.call(s.prototype)}else{try{throw Error()}catch(pe){d=pe}i()}}catch(pe){if(pe&&d&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),x=d.stack.split(`
`),A=p.length-1,z=x.length-1;1<=A&&0<=z&&p[A]!==x[z];)z--;for(;1<=A&&0<=z;A--,z--)if(p[A]!==x[z]){if(A!==1||z!==1)do if(A--,z--,0>z||p[A]!==x[z]){var $=`
`+p[A].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=A&&0<=z);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ne(i):""}function ve(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function Ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case E:return"Fragment";case F:return"Portal";case Y:return"Profiler";case C:return"StrictMode";case fe:return"Suspense";case V:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case ee:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return s=i.displayName||null,s!==null?s:Ee(i.type)||"Memo";case le:s=i._payload,i=i._init;try{return Ee(i(s))}catch{}}return null}function Ue(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Le(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function it(i){var s=Le(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){d=""+A,x.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ge(i){i._valueTracker||(i._valueTracker=it(i))}function mt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Le(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function gt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Xe(i,s){var l=s.checked;return W({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Wt(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=_e(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function kt(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function en(i,s){kt(i,s);var l=_e(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Kt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Kt(i,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Pt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Kt(i,s,l){(s!=="number"||gt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Nt=Array.isArray;function Bt(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+_e(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Zt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function an(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Nt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:_e(l)}}function K(i,s){var l=_e(s.value),d=_e(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function tn(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function bt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function It(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?bt(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var we,wt=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=we.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function He(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(i){N.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),rt[s]=rt[i]})});function w(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||rt.hasOwnProperty(i)&&rt[i]?(""+s).trim():s+"px"}function ie(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=w(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Ae=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(i,s){if(s){if(Ae[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function De(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function me(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var X=null,de=null,k=null;function ae(i){if(i=aa(i)){if(typeof X!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ml(s),X(i.stateNode,i.type,s))}}function te(i){de?k?k.push(i):k=[i]:de=i}function ye(){if(de){var i=de,s=k;if(k=de=null,ae(i),s)for(i=0;i<s.length;i++)ae(s[i])}}function xe(i,s){return i(s)}function Se(){}var ze=!1;function ct(i,s,l){if(ze)return i(s,l);ze=!0;try{return xe(i,s,l)}finally{ze=!1,(de!==null||k!==null)&&(Se(),ye())}}function Me(i,s){var l=i.stateNode;if(l===null)return null;var d=Ml(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ye=!1;if(u)try{var at={};Object.defineProperty(at,"passive",{get:function(){Ye=!0}}),window.addEventListener("test",at,at),window.removeEventListener("test",at,at)}catch{Ye=!1}function Oe(i,s,l,d,p,x,A,z,$){var pe=Array.prototype.slice.call(arguments,3);try{s.apply(l,pe)}catch(Ce){this.onError(Ce)}}var vt=!1,Ht=null,In=!1,as=null,Vo={onError:function(i){vt=!0,Ht=i}};function Pu(i,s,l,d,p,x,A,z,$){vt=!1,Ht=null,Oe.apply(Vo,arguments)}function il(i,s,l,d,p,x,A,z,$){if(Pu.apply(this,arguments),vt){if(vt){var pe=Ht;vt=!1,Ht=null}else throw Error(t(198));In||(In=!0,as=pe)}}function Hi(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Gi(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Os(i){if(Hi(i)!==i)throw Error(t(188))}function rl(i){var s=i.alternate;if(!s){if(s=Hi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return Os(p),i;if(x===d)return Os(p),s;x=x.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=x;else{for(var A=!1,z=p.child;z;){if(z===l){A=!0,l=p,d=x;break}if(z===d){A=!0,d=p,l=x;break}z=z.sibling}if(!A){for(z=x.child;z;){if(z===l){A=!0,l=x,d=p;break}if(z===d){A=!0,d=x,l=p;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Ho(i){return i=rl(i),i!==null?ls(i):null}function ls(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ls(i);if(s!==null)return s;i=i.sibling}return null}var Go=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,cs=e.unstable_shouldYield,Du=e.unstable_requestPaint,$t=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,Xo=e.unstable_ImmediatePriority,ol=e.unstable_UserBlockingPriority,ks=e.unstable_NormalPriority,al=e.unstable_LowPriority,b=e.unstable_IdlePriority,j=null,ce=null;function se(i){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(j,i,void 0,(i.current.flags&128)===128)}catch{}}var re=Math.clz32?Math.clz32:Fe,ke=Math.log,je=Math.LN2;function Fe(i){return i>>>=0,i===0?32:31-(ke(i)/je|0)|0}var Be=64,qe=4194304;function lt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ht(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var z=A&~p;z!==0?d=lt(z):(x&=A,x!==0&&(d=lt(x)))}else A=l&~p,A!==0?d=lt(A):x!==0&&(d=lt(x));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-re(s),p=1<<l,d|=i[l],s&=~p;return d}function Ke(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xt(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-re(x),z=1<<A,$=p[A];$===-1?((z&l)===0||(z&d)!==0)&&(p[A]=Ke(z,s)):$<=s&&(i.expiredLanes|=z),x&=~z}}function Yt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ft(){var i=Be;return Be<<=1,(Be&4194240)===0&&(Be=64),i}function Dt(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function nn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-re(s),i[s]=l}function Ze(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-re(l),x=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~x}}function mn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-re(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var tt=0;function Wi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gn,Tr,Ei,Xi,St,ln=!1,Un=[],Ct=null,zt=null,En=null,Ar=new Map,jo=new Map,br=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(i,s){switch(i){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Ar.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(s.pointerId)}}function $o(i,s,l,d,p,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[p]},s!==null&&(s=aa(s),s!==null&&Tr(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function QS(i,s,l,d,p){switch(s){case"focusin":return Ct=$o(Ct,i,s,l,d,p),!0;case"dragenter":return zt=$o(zt,i,s,l,d,p),!0;case"mouseover":return En=$o(En,i,s,l,d,p),!0;case"pointerover":var x=p.pointerId;return Ar.set(x,$o(Ar.get(x)||null,i,s,l,d,p)),!0;case"gotpointercapture":return x=p.pointerId,jo.set(x,$o(jo.get(x)||null,i,s,l,d,p)),!0}return!1}function Em(i){var s=us(i.target);if(s!==null){var l=Hi(s);if(l!==null){if(s=l.tag,s===13){if(s=Gi(l),s!==null){i.blockedOn=s,St(i.priority,function(){Ei(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ll(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Nu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Ie=d,l.target.dispatchEvent(d),Ie=null}else return s=aa(l),s!==null&&Tr(s),i.blockedOn=l,!1;s.shift()}return!0}function wm(i,s,l){ll(i)&&l.delete(s)}function JS(){ln=!1,Ct!==null&&ll(Ct)&&(Ct=null),zt!==null&&ll(zt)&&(zt=null),En!==null&&ll(En)&&(En=null),Ar.forEach(wm),jo.forEach(wm)}function Yo(i,s){i.blockedOn===s&&(i.blockedOn=null,ln||(ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,JS)))}function qo(i){function s(p){return Yo(p,i)}if(0<Un.length){Yo(Un[0],i);for(var l=1;l<Un.length;l++){var d=Un[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Ct!==null&&Yo(Ct,i),zt!==null&&Yo(zt,i),En!==null&&Yo(En,i),Ar.forEach(s),jo.forEach(s),l=0;l<br.length;l++)d=br[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)Em(l),l.blockedOn===null&&br.shift()}var Bs=P.ReactCurrentBatchConfig,cl=!0;function eM(i,s,l,d){var p=tt,x=Bs.transition;Bs.transition=null;try{tt=1,Lu(i,s,l,d)}finally{tt=p,Bs.transition=x}}function tM(i,s,l,d){var p=tt,x=Bs.transition;Bs.transition=null;try{tt=4,Lu(i,s,l,d)}finally{tt=p,Bs.transition=x}}function Lu(i,s,l,d){if(cl){var p=Nu(i,s,l,d);if(p===null)Ku(i,s,d,ul,l),Mm(i,d);else if(QS(p,i,s,l,d))d.stopPropagation();else if(Mm(i,d),s&4&&-1<ZS.indexOf(i)){for(;p!==null;){var x=aa(p);if(x!==null&&gn(x),x=Nu(i,s,l,d),x===null&&Ku(i,s,d,ul,l),x===p)break;p=x}p!==null&&d.stopPropagation()}else Ku(i,s,d,null,l)}}var ul=null;function Nu(i,s,l,d){if(ul=null,i=me(d),i=us(i),i!==null)if(s=Hi(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Gi(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ul=i,null}function Tm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sl()){case Xo:return 1;case ol:return 4;case ks:case al:return 16;case b:return 536870912;default:return 16}default:return 16}}var Cr=null,Iu=null,dl=null;function Am(){if(dl)return dl;var i,s=Iu,l=s.length,d,p="value"in Cr?Cr.value:Cr.textContent,x=p.length;for(i=0;i<l&&s[i]===p[i];i++);var A=l-i;for(d=1;d<=A&&s[l-d]===p[x-d];d++);return dl=p.slice(i,1<d?1-d:void 0)}function fl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function hl(){return!0}function bm(){return!1}function ii(i){function s(l,d,p,x,A){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(x):x[z]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?hl:bm,this.isPropagationStopped=bm,this}return W(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),s}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=ii(zs),Ko=W({},zs,{view:0,detail:0}),nM=ii(Ko),Fu,Ou,Zo,pl=W({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Zo&&(Zo&&i.type==="mousemove"?(Fu=i.screenX-Zo.screenX,Ou=i.screenY-Zo.screenY):Ou=Fu=0,Zo=i),Fu)},movementY:function(i){return"movementY"in i?i.movementY:Ou}}),Cm=ii(pl),iM=W({},pl,{dataTransfer:0}),rM=ii(iM),sM=W({},Ko,{relatedTarget:0}),ku=ii(sM),oM=W({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),aM=ii(oM),lM=W({},zs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),cM=ii(lM),uM=W({},zs,{data:0}),Rm=ii(uM),dM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=hM[i])?!!s[i]:!1}function Bu(){return pM}var mM=W({},Ko,{key:function(i){if(i.key){var s=dM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=fl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?fM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(i){return i.type==="keypress"?fl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),gM=ii(mM),vM=W({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=ii(vM),xM=W({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),_M=ii(xM),yM=W({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SM=ii(yM),MM=W({},pl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),EM=ii(MM),wM=[9,13,27,32],zu=u&&"CompositionEvent"in window,Qo=null;u&&"documentMode"in document&&(Qo=document.documentMode);var TM=u&&"TextEvent"in window&&!Qo,Dm=u&&(!zu||Qo&&8<Qo&&11>=Qo),Lm=" ",Nm=!1;function Im(i,s){switch(i){case"keyup":return wM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Vs=!1;function AM(i,s){switch(i){case"compositionend":return Um(s);case"keypress":return s.which!==32?null:(Nm=!0,Lm);case"textInput":return i=s.data,i===Lm&&Nm?null:i;default:return null}}function bM(i,s){if(Vs)return i==="compositionend"||!zu&&Im(i,s)?(i=Am(),dl=Iu=Cr=null,Vs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Dm&&s.locale!=="ko"?null:s.data;default:return null}}var CM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!CM[i.type]:s==="textarea"}function Om(i,s,l,d){te(d),s=_l(s,"onChange"),0<s.length&&(l=new Uu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var Jo=null,ea=null;function RM(i){tg(i,0)}function ml(i){var s=js(i);if(mt(s))return i}function PM(i,s){if(i==="change")return s}var km=!1;if(u){var Vu;if(u){var Hu="oninput"in document;if(!Hu){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),Hu=typeof Bm.oninput=="function"}Vu=Hu}else Vu=!1;km=Vu&&(!document.documentMode||9<document.documentMode)}function zm(){Jo&&(Jo.detachEvent("onpropertychange",Vm),ea=Jo=null)}function Vm(i){if(i.propertyName==="value"&&ml(ea)){var s=[];Om(s,ea,i,me(i)),ct(RM,s)}}function DM(i,s,l){i==="focusin"?(zm(),Jo=s,ea=l,Jo.attachEvent("onpropertychange",Vm)):i==="focusout"&&zm()}function LM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ml(ea)}function NM(i,s){if(i==="click")return ml(s)}function IM(i,s){if(i==="input"||i==="change")return ml(s)}function UM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var wi=typeof Object.is=="function"?Object.is:UM;function ta(i,s){if(wi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(s,p)||!wi(i[p],s[p]))return!1}return!0}function Hm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Gm(i,s){var l=Hm(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hm(l)}}function Wm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Wm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Xm(){for(var i=window,s=gt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=gt(i.document)}return s}function Gu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function FM(i){var s=Xm(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Wm(l.ownerDocument.documentElement,l)){if(d!==null&&Gu(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,x=Math.min(d.start,p);d=d.end===void 0?x:Math.min(d.end,p),!i.extend&&x>d&&(p=d,d=x,x=p),p=Gm(l,x);var A=Gm(l,d);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),x>d?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var OM=u&&"documentMode"in document&&11>=document.documentMode,Hs=null,Wu=null,na=null,Xu=!1;function jm(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Xu||Hs==null||Hs!==gt(d)||(d=Hs,"selectionStart"in d&&Gu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),na&&ta(na,d)||(na=d,d=_l(Wu,"onSelect"),0<d.length&&(s=new Uu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=Hs)))}function gl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Gs={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},ju={},$m={};u&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function vl(i){if(ju[i])return ju[i];if(!Gs[i])return i;var s=Gs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in $m)return ju[i]=s[l];return i}var Ym=vl("animationend"),qm=vl("animationiteration"),Km=vl("animationstart"),Zm=vl("transitionend"),Qm=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(i,s){Qm.set(i,s),a(s,[i])}for(var $u=0;$u<Jm.length;$u++){var Yu=Jm[$u],kM=Yu.toLowerCase(),BM=Yu[0].toUpperCase()+Yu.slice(1);Rr(kM,"on"+BM)}Rr(Ym,"onAnimationEnd"),Rr(qm,"onAnimationIteration"),Rr(Km,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Zm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function eg(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,il(d,s,void 0,i),i.currentTarget=null}function tg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var x=void 0;if(s)for(var A=d.length-1;0<=A;A--){var z=d[A],$=z.instance,pe=z.currentTarget;if(z=z.listener,$!==x&&p.isPropagationStopped())break e;eg(p,z,pe),x=$}else for(A=0;A<d.length;A++){if(z=d[A],$=z.instance,pe=z.currentTarget,z=z.listener,$!==x&&p.isPropagationStopped())break e;eg(p,z,pe),x=$}}}if(In)throw i=as,In=!1,as=null,i}function Xt(i,s){var l=s[nd];l===void 0&&(l=s[nd]=new Set);var d=i+"__bubble";l.has(d)||(ng(s,i,2,!1),l.add(d))}function qu(i,s,l){var d=0;s&&(d|=4),ng(l,i,d,s)}var xl="_reactListening"+Math.random().toString(36).slice(2);function ra(i){if(!i[xl]){i[xl]=!0,r.forEach(function(l){l!=="selectionchange"&&(zM.has(l)||qu(l,!1,i),qu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[xl]||(s[xl]=!0,qu("selectionchange",!1,s))}}function ng(i,s,l,d){switch(Tm(s)){case 1:var p=eM;break;case 4:p=tM;break;default:p=Lu}l=p.bind(null,s,l,i),p=void 0,!Ye||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Ku(i,s,l,d,p){var x=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var z=d.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(A===4)for(A=d.return;A!==null;){var $=A.tag;if(($===3||$===4)&&($=A.stateNode.containerInfo,$===p||$.nodeType===8&&$.parentNode===p))return;A=A.return}for(;z!==null;){if(A=us(z),A===null)return;if($=A.tag,$===5||$===6){d=x=A;continue e}z=z.parentNode}}d=d.return}ct(function(){var pe=x,Ce=me(l),Re=[];e:{var be=Qm.get(i);if(be!==void 0){var We=Uu,Qe=i;switch(i){case"keypress":if(fl(l)===0)break e;case"keydown":case"keyup":We=gM;break;case"focusin":Qe="focus",We=ku;break;case"focusout":Qe="blur",We=ku;break;case"beforeblur":case"afterblur":We=ku;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=rM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=_M;break;case Ym:case qm:case Km:We=aM;break;case Zm:We=SM;break;case"scroll":We=nM;break;case"wheel":We=EM;break;case"copy":case"cut":case"paste":We=cM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Pm}var et=(s&4)!==0,cn=!et&&i==="scroll",oe=et?be!==null?be+"Capture":null:be;et=[];for(var Z=pe,ue;Z!==null;){ue=Z;var Ne=ue.stateNode;if(ue.tag===5&&Ne!==null&&(ue=Ne,oe!==null&&(Ne=Me(Z,oe),Ne!=null&&et.push(sa(Z,Ne,ue)))),cn)break;Z=Z.return}0<et.length&&(be=new We(be,Qe,null,l,Ce),Re.push({event:be,listeners:et}))}}if((s&7)===0){e:{if(be=i==="mouseover"||i==="pointerover",We=i==="mouseout"||i==="pointerout",be&&l!==Ie&&(Qe=l.relatedTarget||l.fromElement)&&(us(Qe)||Qe[lr]))break e;if((We||be)&&(be=Ce.window===Ce?Ce:(be=Ce.ownerDocument)?be.defaultView||be.parentWindow:window,We?(Qe=l.relatedTarget||l.toElement,We=pe,Qe=Qe?us(Qe):null,Qe!==null&&(cn=Hi(Qe),Qe!==cn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(We=null,Qe=pe),We!==Qe)){if(et=Cm,Ne="onMouseLeave",oe="onMouseEnter",Z="mouse",(i==="pointerout"||i==="pointerover")&&(et=Pm,Ne="onPointerLeave",oe="onPointerEnter",Z="pointer"),cn=We==null?be:js(We),ue=Qe==null?be:js(Qe),be=new et(Ne,Z+"leave",We,l,Ce),be.target=cn,be.relatedTarget=ue,Ne=null,us(Ce)===pe&&(et=new et(oe,Z+"enter",Qe,l,Ce),et.target=ue,et.relatedTarget=cn,Ne=et),cn=Ne,We&&Qe)t:{for(et=We,oe=Qe,Z=0,ue=et;ue;ue=Ws(ue))Z++;for(ue=0,Ne=oe;Ne;Ne=Ws(Ne))ue++;for(;0<Z-ue;)et=Ws(et),Z--;for(;0<ue-Z;)oe=Ws(oe),ue--;for(;Z--;){if(et===oe||oe!==null&&et===oe.alternate)break t;et=Ws(et),oe=Ws(oe)}et=null}else et=null;We!==null&&ig(Re,be,We,et,!1),Qe!==null&&cn!==null&&ig(Re,cn,Qe,et,!0)}}e:{if(be=pe?js(pe):window,We=be.nodeName&&be.nodeName.toLowerCase(),We==="select"||We==="input"&&be.type==="file")var nt=PM;else if(Fm(be))if(km)nt=IM;else{nt=LM;var st=DM}else(We=be.nodeName)&&We.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(nt=NM);if(nt&&(nt=nt(i,pe))){Om(Re,nt,l,Ce);break e}st&&st(i,be,pe),i==="focusout"&&(st=be._wrapperState)&&st.controlled&&be.type==="number"&&Kt(be,"number",be.value)}switch(st=pe?js(pe):window,i){case"focusin":(Fm(st)||st.contentEditable==="true")&&(Hs=st,Wu=pe,na=null);break;case"focusout":na=Wu=Hs=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,jm(Re,l,Ce);break;case"selectionchange":if(OM)break;case"keydown":case"keyup":jm(Re,l,Ce)}var ot;if(zu)e:{switch(i){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Vs?Im(i,l)&&(ut="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(Dm&&l.locale!=="ko"&&(Vs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Vs&&(ot=Am()):(Cr=Ce,Iu="value"in Cr?Cr.value:Cr.textContent,Vs=!0)),st=_l(pe,ut),0<st.length&&(ut=new Rm(ut,i,null,l,Ce),Re.push({event:ut,listeners:st}),ot?ut.data=ot:(ot=Um(l),ot!==null&&(ut.data=ot)))),(ot=TM?AM(i,l):bM(i,l))&&(pe=_l(pe,"onBeforeInput"),0<pe.length&&(Ce=new Rm("onBeforeInput","beforeinput",null,l,Ce),Re.push({event:Ce,listeners:pe}),Ce.data=ot))}tg(Re,s)})}function sa(i,s,l){return{instance:i,listener:s,currentTarget:l}}function _l(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Me(i,l),x!=null&&d.unshift(sa(i,x,p)),x=Me(i,s),x!=null&&d.push(sa(i,x,p))),i=i.return}return d}function Ws(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ig(i,s,l,d,p){for(var x=s._reactName,A=[];l!==null&&l!==d;){var z=l,$=z.alternate,pe=z.stateNode;if($!==null&&$===d)break;z.tag===5&&pe!==null&&(z=pe,p?($=Me(l,x),$!=null&&A.unshift(sa(l,$,z))):p||($=Me(l,x),$!=null&&A.push(sa(l,$,z)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var VM=/\r\n?/g,HM=/\u0000|\uFFFD/g;function rg(i){return(typeof i=="string"?i:""+i).replace(VM,`
`).replace(HM,"")}function yl(i,s,l){if(s=rg(s),rg(i)!==s&&l)throw Error(t(425))}function Sl(){}var Zu=null,Qu=null;function Ju(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,GM=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,WM=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(i){return sg.resolve(null).then(i).catch(XM)}:ed;function XM(i){setTimeout(function(){throw i})}function td(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),qo(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);qo(s)}function Pr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function og(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),ji="__reactFiber$"+Xs,oa="__reactProps$"+Xs,lr="__reactContainer$"+Xs,nd="__reactEvents$"+Xs,jM="__reactListeners$"+Xs,$M="__reactHandles$"+Xs;function us(i){var s=i[ji];if(s)return s;for(var l=i.parentNode;l;){if(s=l[lr]||l[ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=og(i);i!==null;){if(l=i[ji])return l;i=og(i)}return s}i=l,l=i.parentNode}return null}function aa(i){return i=i[ji]||i[lr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ml(i){return i[oa]||null}var id=[],$s=-1;function Dr(i){return{current:i}}function jt(i){0>$s||(i.current=id[$s],id[$s]=null,$s--)}function Gt(i,s){$s++,id[$s]=i.current,i.current=s}var Lr={},Fn=Dr(Lr),Yn=Dr(!1),ds=Lr;function Ys(i,s){var l=i.type.contextTypes;if(!l)return Lr;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=s[x];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function qn(i){return i=i.childContextTypes,i!=null}function El(){jt(Yn),jt(Fn)}function ag(i,s,l){if(Fn.current!==Lr)throw Error(t(168));Gt(Fn,s),Gt(Yn,l)}function lg(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,Ue(i)||"Unknown",p));return W({},l,d)}function wl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Lr,ds=Fn.current,Gt(Fn,i),Gt(Yn,Yn.current),!0}function cg(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=lg(i,s,ds),d.__reactInternalMemoizedMergedChildContext=i,jt(Yn),jt(Fn),Gt(Fn,i)):jt(Yn),Gt(Yn,l)}var cr=null,Tl=!1,rd=!1;function ug(i){cr===null?cr=[i]:cr.push(i)}function YM(i){Tl=!0,ug(i)}function Nr(){if(!rd&&cr!==null){rd=!0;var i=0,s=tt;try{var l=cr;for(tt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}cr=null,Tl=!1}catch(p){throw cr!==null&&(cr=cr.slice(i+1)),Go(Xo,Nr),p}finally{tt=s,rd=!1}}return null}var qs=[],Ks=0,Al=null,bl=0,fi=[],hi=0,fs=null,ur=1,dr="";function hs(i,s){qs[Ks++]=bl,qs[Ks++]=Al,Al=i,bl=s}function dg(i,s,l){fi[hi++]=ur,fi[hi++]=dr,fi[hi++]=fs,fs=i;var d=ur;i=dr;var p=32-re(d)-1;d&=~(1<<p),l+=1;var x=32-re(s)+p;if(30<x){var A=p-p%5;x=(d&(1<<A)-1).toString(32),d>>=A,p-=A,ur=1<<32-re(s)+p|l<<p|d,dr=x+i}else ur=1<<x|l<<p|d,dr=i}function sd(i){i.return!==null&&(hs(i,1),dg(i,1,0))}function od(i){for(;i===Al;)Al=qs[--Ks],qs[Ks]=null,bl=qs[--Ks],qs[Ks]=null;for(;i===fs;)fs=fi[--hi],fi[hi]=null,dr=fi[--hi],fi[hi]=null,ur=fi[--hi],fi[hi]=null}var ri=null,si=null,qt=!1,Ti=null;function fg(i,s){var l=vi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function hg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ri=i,si=Pr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ri=i,si=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=fs!==null?{id:ur,overflow:dr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=vi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ri=i,si=null,!0):!1;default:return!1}}function ad(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ld(i){if(qt){var s=si;if(s){var l=s;if(!hg(i,s)){if(ad(i))throw Error(t(418));s=Pr(l.nextSibling);var d=ri;s&&hg(i,s)?fg(d,l):(i.flags=i.flags&-4097|2,qt=!1,ri=i)}}else{if(ad(i))throw Error(t(418));i.flags=i.flags&-4097|2,qt=!1,ri=i}}}function pg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ri=i}function Cl(i){if(i!==ri)return!1;if(!qt)return pg(i),qt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Ju(i.type,i.memoizedProps)),s&&(s=si)){if(ad(i))throw mg(),Error(t(418));for(;s;)fg(i,s),s=Pr(s.nextSibling)}if(pg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){si=Pr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}si=null}}else si=ri?Pr(i.stateNode.nextSibling):null;return!0}function mg(){for(var i=si;i;)i=Pr(i.nextSibling)}function Zs(){si=ri=null,qt=!1}function cd(i){Ti===null?Ti=[i]:Ti.push(i)}var qM=P.ReactCurrentBatchConfig;function la(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var z=p.refs;A===null?delete z[x]:z[x]=A},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Rl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function gg(i){var s=i._init;return s(i._payload)}function vg(i){function s(oe,Z){if(i){var ue=oe.deletions;ue===null?(oe.deletions=[Z],oe.flags|=16):ue.push(Z)}}function l(oe,Z){if(!i)return null;for(;Z!==null;)s(oe,Z),Z=Z.sibling;return null}function d(oe,Z){for(oe=new Map;Z!==null;)Z.key!==null?oe.set(Z.key,Z):oe.set(Z.index,Z),Z=Z.sibling;return oe}function p(oe,Z){return oe=Vr(oe,Z),oe.index=0,oe.sibling=null,oe}function x(oe,Z,ue){return oe.index=ue,i?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<Z?(oe.flags|=2,Z):ue):(oe.flags|=2,Z)):(oe.flags|=1048576,Z)}function A(oe){return i&&oe.alternate===null&&(oe.flags|=2),oe}function z(oe,Z,ue,Ne){return Z===null||Z.tag!==6?(Z=ef(ue,oe.mode,Ne),Z.return=oe,Z):(Z=p(Z,ue),Z.return=oe,Z)}function $(oe,Z,ue,Ne){var nt=ue.type;return nt===E?Ce(oe,Z,ue.props.children,Ne,ue.key):Z!==null&&(Z.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===le&&gg(nt)===Z.type)?(Ne=p(Z,ue.props),Ne.ref=la(oe,Z,ue),Ne.return=oe,Ne):(Ne=Jl(ue.type,ue.key,ue.props,null,oe.mode,Ne),Ne.ref=la(oe,Z,ue),Ne.return=oe,Ne)}function pe(oe,Z,ue,Ne){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ue.containerInfo||Z.stateNode.implementation!==ue.implementation?(Z=tf(ue,oe.mode,Ne),Z.return=oe,Z):(Z=p(Z,ue.children||[]),Z.return=oe,Z)}function Ce(oe,Z,ue,Ne,nt){return Z===null||Z.tag!==7?(Z=Ss(ue,oe.mode,Ne,nt),Z.return=oe,Z):(Z=p(Z,ue),Z.return=oe,Z)}function Re(oe,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=ef(""+Z,oe.mode,ue),Z.return=oe,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return ue=Jl(Z.type,Z.key,Z.props,null,oe.mode,ue),ue.ref=la(oe,null,Z),ue.return=oe,ue;case F:return Z=tf(Z,oe.mode,ue),Z.return=oe,Z;case le:var Ne=Z._init;return Re(oe,Ne(Z._payload),ue)}if(Nt(Z)||H(Z))return Z=Ss(Z,oe.mode,ue,null),Z.return=oe,Z;Rl(oe,Z)}return null}function be(oe,Z,ue,Ne){var nt=Z!==null?Z.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return nt!==null?null:z(oe,Z,""+ue,Ne);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case O:return ue.key===nt?$(oe,Z,ue,Ne):null;case F:return ue.key===nt?pe(oe,Z,ue,Ne):null;case le:return nt=ue._init,be(oe,Z,nt(ue._payload),Ne)}if(Nt(ue)||H(ue))return nt!==null?null:Ce(oe,Z,ue,Ne,null);Rl(oe,ue)}return null}function We(oe,Z,ue,Ne,nt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return oe=oe.get(ue)||null,z(Z,oe,""+Ne,nt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case O:return oe=oe.get(Ne.key===null?ue:Ne.key)||null,$(Z,oe,Ne,nt);case F:return oe=oe.get(Ne.key===null?ue:Ne.key)||null,pe(Z,oe,Ne,nt);case le:var st=Ne._init;return We(oe,Z,ue,st(Ne._payload),nt)}if(Nt(Ne)||H(Ne))return oe=oe.get(ue)||null,Ce(Z,oe,Ne,nt,null);Rl(Z,Ne)}return null}function Qe(oe,Z,ue,Ne){for(var nt=null,st=null,ot=Z,ut=Z=0,An=null;ot!==null&&ut<ue.length;ut++){ot.index>ut?(An=ot,ot=null):An=ot.sibling;var Rt=be(oe,ot,ue[ut],Ne);if(Rt===null){ot===null&&(ot=An);break}i&&ot&&Rt.alternate===null&&s(oe,ot),Z=x(Rt,Z,ut),st===null?nt=Rt:st.sibling=Rt,st=Rt,ot=An}if(ut===ue.length)return l(oe,ot),qt&&hs(oe,ut),nt;if(ot===null){for(;ut<ue.length;ut++)ot=Re(oe,ue[ut],Ne),ot!==null&&(Z=x(ot,Z,ut),st===null?nt=ot:st.sibling=ot,st=ot);return qt&&hs(oe,ut),nt}for(ot=d(oe,ot);ut<ue.length;ut++)An=We(ot,oe,ut,ue[ut],Ne),An!==null&&(i&&An.alternate!==null&&ot.delete(An.key===null?ut:An.key),Z=x(An,Z,ut),st===null?nt=An:st.sibling=An,st=An);return i&&ot.forEach(function(Hr){return s(oe,Hr)}),qt&&hs(oe,ut),nt}function et(oe,Z,ue,Ne){var nt=H(ue);if(typeof nt!="function")throw Error(t(150));if(ue=nt.call(ue),ue==null)throw Error(t(151));for(var st=nt=null,ot=Z,ut=Z=0,An=null,Rt=ue.next();ot!==null&&!Rt.done;ut++,Rt=ue.next()){ot.index>ut?(An=ot,ot=null):An=ot.sibling;var Hr=be(oe,ot,Rt.value,Ne);if(Hr===null){ot===null&&(ot=An);break}i&&ot&&Hr.alternate===null&&s(oe,ot),Z=x(Hr,Z,ut),st===null?nt=Hr:st.sibling=Hr,st=Hr,ot=An}if(Rt.done)return l(oe,ot),qt&&hs(oe,ut),nt;if(ot===null){for(;!Rt.done;ut++,Rt=ue.next())Rt=Re(oe,Rt.value,Ne),Rt!==null&&(Z=x(Rt,Z,ut),st===null?nt=Rt:st.sibling=Rt,st=Rt);return qt&&hs(oe,ut),nt}for(ot=d(oe,ot);!Rt.done;ut++,Rt=ue.next())Rt=We(ot,oe,ut,Rt.value,Ne),Rt!==null&&(i&&Rt.alternate!==null&&ot.delete(Rt.key===null?ut:Rt.key),Z=x(Rt,Z,ut),st===null?nt=Rt:st.sibling=Rt,st=Rt);return i&&ot.forEach(function(CE){return s(oe,CE)}),qt&&hs(oe,ut),nt}function cn(oe,Z,ue,Ne){if(typeof ue=="object"&&ue!==null&&ue.type===E&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case O:e:{for(var nt=ue.key,st=Z;st!==null;){if(st.key===nt){if(nt=ue.type,nt===E){if(st.tag===7){l(oe,st.sibling),Z=p(st,ue.props.children),Z.return=oe,oe=Z;break e}}else if(st.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===le&&gg(nt)===st.type){l(oe,st.sibling),Z=p(st,ue.props),Z.ref=la(oe,st,ue),Z.return=oe,oe=Z;break e}l(oe,st);break}else s(oe,st);st=st.sibling}ue.type===E?(Z=Ss(ue.props.children,oe.mode,Ne,ue.key),Z.return=oe,oe=Z):(Ne=Jl(ue.type,ue.key,ue.props,null,oe.mode,Ne),Ne.ref=la(oe,Z,ue),Ne.return=oe,oe=Ne)}return A(oe);case F:e:{for(st=ue.key;Z!==null;){if(Z.key===st)if(Z.tag===4&&Z.stateNode.containerInfo===ue.containerInfo&&Z.stateNode.implementation===ue.implementation){l(oe,Z.sibling),Z=p(Z,ue.children||[]),Z.return=oe,oe=Z;break e}else{l(oe,Z);break}else s(oe,Z);Z=Z.sibling}Z=tf(ue,oe.mode,Ne),Z.return=oe,oe=Z}return A(oe);case le:return st=ue._init,cn(oe,Z,st(ue._payload),Ne)}if(Nt(ue))return Qe(oe,Z,ue,Ne);if(H(ue))return et(oe,Z,ue,Ne);Rl(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,Z!==null&&Z.tag===6?(l(oe,Z.sibling),Z=p(Z,ue),Z.return=oe,oe=Z):(l(oe,Z),Z=ef(ue,oe.mode,Ne),Z.return=oe,oe=Z),A(oe)):l(oe,Z)}return cn}var Qs=vg(!0),xg=vg(!1),Pl=Dr(null),Dl=null,Js=null,ud=null;function dd(){ud=Js=Dl=null}function fd(i){var s=Pl.current;jt(Pl),i._currentValue=s}function hd(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function eo(i,s){Dl=i,ud=Js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Kn=!0),i.firstContext=null)}function pi(i){var s=i._currentValue;if(ud!==i)if(i={context:i,memoizedValue:s,next:null},Js===null){if(Dl===null)throw Error(t(308));Js=i,Dl.dependencies={lanes:0,firstContext:i}}else Js=Js.next=i;return s}var ps=null;function pd(i){ps===null?ps=[i]:ps.push(i)}function _g(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,pd(s)):(l.next=p.next,p.next=l),s.interleaved=l,fr(i,d)}function fr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ir=!1;function md(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function hr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ur(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Tt&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,fr(i,l)}return p=d.interleaved,p===null?(s.next=s,pd(d)):(s.next=p.next,p.next=s),d.interleaved=s,fr(i,l)}function Ll(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,mn(i,l)}}function Sg(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?p=x=s:x=x.next=s}else p=x=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Nl(i,s,l,d){var p=i.updateQueue;Ir=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var $=z,pe=$.next;$.next=null,A===null?x=pe:A.next=pe,A=$;var Ce=i.alternate;Ce!==null&&(Ce=Ce.updateQueue,z=Ce.lastBaseUpdate,z!==A&&(z===null?Ce.firstBaseUpdate=pe:z.next=pe,Ce.lastBaseUpdate=$))}if(x!==null){var Re=p.baseState;A=0,Ce=pe=$=null,z=x;do{var be=z.lane,We=z.eventTime;if((d&be)===be){Ce!==null&&(Ce=Ce.next={eventTime:We,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Qe=i,et=z;switch(be=s,We=l,et.tag){case 1:if(Qe=et.payload,typeof Qe=="function"){Re=Qe.call(We,Re,be);break e}Re=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=et.payload,be=typeof Qe=="function"?Qe.call(We,Re,be):Qe,be==null)break e;Re=W({},Re,be);break e;case 2:Ir=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,be=p.effects,be===null?p.effects=[z]:be.push(z))}else We={eventTime:We,lane:be,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ce===null?(pe=Ce=We,$=Re):Ce=Ce.next=We,A|=be;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;be=z,z=be.next,be.next=null,p.lastBaseUpdate=be,p.shared.pending=null}}while(!0);if(Ce===null&&($=Re),p.baseState=$,p.firstBaseUpdate=pe,p.lastBaseUpdate=Ce,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);vs|=A,i.lanes=A,i.memoizedState=Re}}function Mg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ca={},$i=Dr(ca),ua=Dr(ca),da=Dr(ca);function ms(i){if(i===ca)throw Error(t(174));return i}function gd(i,s){switch(Gt(da,s),Gt(ua,i),Gt($i,ca),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:It(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=It(s,i)}jt($i),Gt($i,s)}function to(){jt($i),jt(ua),jt(da)}function Eg(i){ms(da.current);var s=ms($i.current),l=It(s,i.type);s!==l&&(Gt(ua,i),Gt($i,l))}function vd(i){ua.current===i&&(jt($i),jt(ua))}var Qt=Dr(0);function Il(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var xd=[];function _d(){for(var i=0;i<xd.length;i++)xd[i]._workInProgressVersionPrimary=null;xd.length=0}var Ul=P.ReactCurrentDispatcher,yd=P.ReactCurrentBatchConfig,gs=0,Jt=null,vn=null,wn=null,Fl=!1,fa=!1,ha=0,KM=0;function On(){throw Error(t(321))}function Sd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!wi(i[l],s[l]))return!1;return!0}function Md(i,s,l,d,p,x){if(gs=x,Jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ul.current=i===null||i.memoizedState===null?eE:tE,i=l(d,p),fa){x=0;do{if(fa=!1,ha=0,25<=x)throw Error(t(301));x+=1,wn=vn=null,s.updateQueue=null,Ul.current=nE,i=l(d,p)}while(fa)}if(Ul.current=Bl,s=vn!==null&&vn.next!==null,gs=0,wn=vn=Jt=null,Fl=!1,s)throw Error(t(300));return i}function Ed(){var i=ha!==0;return ha=0,i}function Yi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Jt.memoizedState=wn=i:wn=wn.next=i,wn}function mi(){if(vn===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=vn.next;var s=wn===null?Jt.memoizedState:wn.next;if(s!==null)wn=s,vn=i;else{if(i===null)throw Error(t(310));vn=i,i={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},wn===null?Jt.memoizedState=wn=i:wn=wn.next=i}return wn}function pa(i,s){return typeof s=="function"?s(i):s}function wd(i){var s=mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=vn,p=d.baseQueue,x=l.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}d.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,d=d.baseState;var z=A=null,$=null,pe=x;do{var Ce=pe.lane;if((gs&Ce)===Ce)$!==null&&($=$.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),d=pe.hasEagerState?pe.eagerState:i(d,pe.action);else{var Re={lane:Ce,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};$===null?(z=$=Re,A=d):$=$.next=Re,Jt.lanes|=Ce,vs|=Ce}pe=pe.next}while(pe!==null&&pe!==x);$===null?A=d:$.next=z,wi(d,s.memoizedState)||(Kn=!0),s.memoizedState=d,s.baseState=A,s.baseQueue=$,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do x=p.lane,Jt.lanes|=x,vs|=x,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Td(i){var s=mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,x=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do x=i(x,A.action),A=A.next;while(A!==p);wi(x,s.memoizedState)||(Kn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,d]}function wg(){}function Tg(i,s){var l=Jt,d=mi(),p=s(),x=!wi(d.memoizedState,p);if(x&&(d.memoizedState=p,Kn=!0),d=d.queue,Ad(Cg.bind(null,l,d,i),[i]),d.getSnapshot!==s||x||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,ma(9,bg.bind(null,l,d,p,s),void 0,null),Tn===null)throw Error(t(349));(gs&30)!==0||Ag(l,s,p)}return p}function Ag(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function bg(i,s,l,d){s.value=l,s.getSnapshot=d,Rg(s)&&Pg(i)}function Cg(i,s,l){return l(function(){Rg(s)&&Pg(i)})}function Rg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!wi(i,l)}catch{return!0}}function Pg(i){var s=fr(i,1);s!==null&&Ri(s,i,1,-1)}function Dg(i){var s=Yi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:i},s.queue=i,i=i.dispatch=JM.bind(null,Jt,i),[s.memoizedState,i]}function ma(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Lg(){return mi().memoizedState}function Ol(i,s,l,d){var p=Yi();Jt.flags|=i,p.memoizedState=ma(1|s,l,void 0,d===void 0?null:d)}function kl(i,s,l,d){var p=mi();d=d===void 0?null:d;var x=void 0;if(vn!==null){var A=vn.memoizedState;if(x=A.destroy,d!==null&&Sd(d,A.deps)){p.memoizedState=ma(s,l,x,d);return}}Jt.flags|=i,p.memoizedState=ma(1|s,l,x,d)}function Ng(i,s){return Ol(8390656,8,i,s)}function Ad(i,s){return kl(2048,8,i,s)}function Ig(i,s){return kl(4,2,i,s)}function Ug(i,s){return kl(4,4,i,s)}function Fg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Og(i,s,l){return l=l!=null?l.concat([i]):null,kl(4,4,Fg.bind(null,s,i),l)}function bd(){}function kg(i,s){var l=mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Sd(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function Bg(i,s){var l=mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Sd(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function zg(i,s,l){return(gs&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(wi(l,s)||(l=Ft(),Jt.lanes|=l,vs|=l,i.baseState=!0),s)}function ZM(i,s){var l=tt;tt=l!==0&&4>l?l:4,i(!0);var d=yd.transition;yd.transition={};try{i(!1),s()}finally{tt=l,yd.transition=d}}function Vg(){return mi().memoizedState}function QM(i,s,l){var d=Br(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Hg(i))Gg(s,l);else if(l=_g(i,s,l,d),l!==null){var p=Gn();Ri(l,i,d,p),Wg(l,s,d)}}function JM(i,s,l){var d=Br(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hg(i))Gg(s,p);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,z=x(A,l);if(p.hasEagerState=!0,p.eagerState=z,wi(z,A)){var $=s.interleaved;$===null?(p.next=p,pd(s)):(p.next=$.next,$.next=p),s.interleaved=p;return}}catch{}finally{}l=_g(i,s,p,d),l!==null&&(p=Gn(),Ri(l,i,d,p),Wg(l,s,d))}}function Hg(i){var s=i.alternate;return i===Jt||s!==null&&s===Jt}function Gg(i,s){fa=Fl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Wg(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,mn(i,l)}}var Bl={readContext:pi,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},eE={readContext:pi,useCallback:function(i,s){return Yi().memoizedState=[i,s===void 0?null:s],i},useContext:pi,useEffect:Ng,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Ol(4194308,4,Fg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Ol(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ol(4,2,i,s)},useMemo:function(i,s){var l=Yi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Yi();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=QM.bind(null,Jt,i),[d.memoizedState,i]},useRef:function(i){var s=Yi();return i={current:i},s.memoizedState=i},useState:Dg,useDebugValue:bd,useDeferredValue:function(i){return Yi().memoizedState=i},useTransition:function(){var i=Dg(!1),s=i[0];return i=ZM.bind(null,i[1]),Yi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=Jt,p=Yi();if(qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Tn===null)throw Error(t(349));(gs&30)!==0||Ag(d,s,l)}p.memoizedState=l;var x={value:l,getSnapshot:s};return p.queue=x,Ng(Cg.bind(null,d,x,i),[i]),d.flags|=2048,ma(9,bg.bind(null,d,x,l,s),void 0,null),l},useId:function(){var i=Yi(),s=Tn.identifierPrefix;if(qt){var l=dr,d=ur;l=(d&~(1<<32-re(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=ha++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=KM++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},tE={readContext:pi,useCallback:kg,useContext:pi,useEffect:Ad,useImperativeHandle:Og,useInsertionEffect:Ig,useLayoutEffect:Ug,useMemo:Bg,useReducer:wd,useRef:Lg,useState:function(){return wd(pa)},useDebugValue:bd,useDeferredValue:function(i){var s=mi();return zg(s,vn.memoizedState,i)},useTransition:function(){var i=wd(pa)[0],s=mi().memoizedState;return[i,s]},useMutableSource:wg,useSyncExternalStore:Tg,useId:Vg,unstable_isNewReconciler:!1},nE={readContext:pi,useCallback:kg,useContext:pi,useEffect:Ad,useImperativeHandle:Og,useInsertionEffect:Ig,useLayoutEffect:Ug,useMemo:Bg,useReducer:Td,useRef:Lg,useState:function(){return Td(pa)},useDebugValue:bd,useDeferredValue:function(i){var s=mi();return vn===null?s.memoizedState=i:zg(s,vn.memoizedState,i)},useTransition:function(){var i=Td(pa)[0],s=mi().memoizedState;return[i,s]},useMutableSource:wg,useSyncExternalStore:Tg,useId:Vg,unstable_isNewReconciler:!1};function Ai(i,s){if(i&&i.defaultProps){s=W({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Cd(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:W({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var zl={isMounted:function(i){return(i=i._reactInternals)?Hi(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=Gn(),p=Br(i),x=hr(d,p);x.payload=s,l!=null&&(x.callback=l),s=Ur(i,x,p),s!==null&&(Ri(s,i,p,d),Ll(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=Gn(),p=Br(i),x=hr(d,p);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Ur(i,x,p),s!==null&&(Ri(s,i,p,d),Ll(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Gn(),d=Br(i),p=hr(l,d);p.tag=2,s!=null&&(p.callback=s),s=Ur(i,p,d),s!==null&&(Ri(s,i,d,l),Ll(s,i,d))}};function Xg(i,s,l,d,p,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,x,A):s.prototype&&s.prototype.isPureReactComponent?!ta(l,d)||!ta(p,x):!0}function jg(i,s,l){var d=!1,p=Lr,x=s.contextType;return typeof x=="object"&&x!==null?x=pi(x):(p=qn(s)?ds:Fn.current,d=s.contextTypes,x=(d=d!=null)?Ys(i,p):Lr),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=x),s}function $g(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&zl.enqueueReplaceState(s,s.state,null)}function Rd(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},md(i);var x=s.contextType;typeof x=="object"&&x!==null?p.context=pi(x):(x=qn(s)?ds:Fn.current,p.context=Ys(i,x)),p.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Cd(i,s,x,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&zl.enqueueReplaceState(p,p.state,null),Nl(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function no(i,s){try{var l="",d=s;do l+=ve(d),d=d.return;while(d);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:p,digest:null}}function Pd(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Dd(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function Yg(i,s,l){l=hr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){$l||($l=!0,jd=d),Dd(i,s)},l}function qg(i,s,l){l=hr(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Dd(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Dd(i,s),typeof d!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Kg(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new iE;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=vE.bind(null,i,s,l),s.then(i,i))}function Zg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Qg(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=hr(-1,1),s.tag=2,Ur(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var rE=P.ReactCurrentOwner,Kn=!1;function Hn(i,s,l,d){s.child=i===null?xg(s,null,l,d):Qs(s,i.child,l,d)}function Jg(i,s,l,d,p){l=l.render;var x=s.ref;return eo(s,p),d=Md(i,s,l,d,x,p),l=Ed(),i!==null&&!Kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,pr(i,s,p)):(qt&&l&&sd(s),s.flags|=1,Hn(i,s,d,p),s.child)}function e0(i,s,l,d,p){if(i===null){var x=l.type;return typeof x=="function"&&!Jd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,t0(i,s,x,d,p)):(i=Jl(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&p)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:ta,l(A,d)&&i.ref===s.ref)return pr(i,s,p)}return s.flags|=1,i=Vr(x,d),i.ref=s.ref,i.return=s,s.child=i}function t0(i,s,l,d,p){if(i!==null){var x=i.memoizedProps;if(ta(x,d)&&i.ref===s.ref)if(Kn=!1,s.pendingProps=d=x,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return s.lanes=i.lanes,pr(i,s,p)}return Ld(i,s,l,d,p)}function n0(i,s,l){var d=s.pendingProps,p=d.children,x=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(ro,oi),oi|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(ro,oi),oi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,Gt(ro,oi),oi|=d}else x!==null?(d=x.baseLanes|l,s.memoizedState=null):d=l,Gt(ro,oi),oi|=d;return Hn(i,s,p,l),s.child}function i0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Ld(i,s,l,d,p){var x=qn(l)?ds:Fn.current;return x=Ys(s,x),eo(s,p),l=Md(i,s,l,d,x,p),d=Ed(),i!==null&&!Kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,pr(i,s,p)):(qt&&d&&sd(s),s.flags|=1,Hn(i,s,l,p),s.child)}function r0(i,s,l,d,p){if(qn(l)){var x=!0;wl(s)}else x=!1;if(eo(s,p),s.stateNode===null)Hl(i,s),jg(s,l,d),Rd(s,l,d,p),d=!0;else if(i===null){var A=s.stateNode,z=s.memoizedProps;A.props=z;var $=A.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=pi(pe):(pe=qn(l)?ds:Fn.current,pe=Ys(s,pe));var Ce=l.getDerivedStateFromProps,Re=typeof Ce=="function"||typeof A.getSnapshotBeforeUpdate=="function";Re||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==d||$!==pe)&&$g(s,A,d,pe),Ir=!1;var be=s.memoizedState;A.state=be,Nl(s,d,A,p),$=s.memoizedState,z!==d||be!==$||Yn.current||Ir?(typeof Ce=="function"&&(Cd(s,l,Ce,d),$=s.memoizedState),(z=Ir||Xg(s,l,z,d,be,$,pe))?(Re||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=$),A.props=d,A.state=$,A.context=pe,d=z):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{A=s.stateNode,yg(i,s),z=s.memoizedProps,pe=s.type===s.elementType?z:Ai(s.type,z),A.props=pe,Re=s.pendingProps,be=A.context,$=l.contextType,typeof $=="object"&&$!==null?$=pi($):($=qn(l)?ds:Fn.current,$=Ys(s,$));var We=l.getDerivedStateFromProps;(Ce=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Re||be!==$)&&$g(s,A,d,$),Ir=!1,be=s.memoizedState,A.state=be,Nl(s,d,A,p);var Qe=s.memoizedState;z!==Re||be!==Qe||Yn.current||Ir?(typeof We=="function"&&(Cd(s,l,We,d),Qe=s.memoizedState),(pe=Ir||Xg(s,l,pe,d,be,Qe,$)||!1)?(Ce||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,Qe,$),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,Qe,$)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&be===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&be===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Qe),A.props=d,A.state=Qe,A.context=$,d=pe):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&be===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&be===i.memoizedState||(s.flags|=1024),d=!1)}return Nd(i,s,l,d,x,p)}function Nd(i,s,l,d,p,x){i0(i,s);var A=(s.flags&128)!==0;if(!d&&!A)return p&&cg(s,l,!1),pr(i,s,x);d=s.stateNode,rE.current=s;var z=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&A?(s.child=Qs(s,i.child,null,x),s.child=Qs(s,null,z,x)):Hn(i,s,z,x),s.memoizedState=d.state,p&&cg(s,l,!0),s.child}function s0(i){var s=i.stateNode;s.pendingContext?ag(i,s.pendingContext,s.pendingContext!==s.context):s.context&&ag(i,s.context,!1),gd(i,s.containerInfo)}function o0(i,s,l,d,p){return Zs(),cd(p),s.flags|=256,Hn(i,s,l,d),s.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Ud(i){return{baseLanes:i,cachePool:null,transitions:null}}function a0(i,s,l){var d=s.pendingProps,p=Qt.current,x=!1,A=(s.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(p&2)!==0),z?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt(Qt,p&1),i===null)return ld(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=d.children,i=d.fallback,x?(d=s.mode,x=s.child,A={mode:"hidden",children:A},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=ec(A,d,0,null),i=Ss(i,d,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Ud(l),s.memoizedState=Id,i):Fd(s,A));if(p=i.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return sE(i,s,A,d,z,p,l);if(x){x=d.fallback,A=s.mode,p=i.child,z=p.sibling;var $={mode:"hidden",children:d.children};return(A&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=$,s.deletions=null):(d=Vr(p,$),d.subtreeFlags=p.subtreeFlags&14680064),z!==null?x=Vr(z,x):(x=Ss(x,A,l,null),x.flags|=2),x.return=s,d.return=s,d.sibling=x,s.child=d,d=x,x=s.child,A=i.child.memoizedState,A=A===null?Ud(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,s.memoizedState=Id,d}return x=i.child,i=x.sibling,d=Vr(x,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Fd(i,s){return s=ec({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vl(i,s,l,d){return d!==null&&cd(d),Qs(s,i.child,null,l),i=Fd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function sE(i,s,l,d,p,x,A){if(l)return s.flags&256?(s.flags&=-257,d=Pd(Error(t(422))),Vl(i,s,A,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=d.fallback,p=s.mode,d=ec({mode:"visible",children:d.children},p,0,null),x=Ss(x,p,A,null),x.flags|=2,d.return=s,x.return=s,d.sibling=x,s.child=d,(s.mode&1)!==0&&Qs(s,i.child,null,A),s.child.memoizedState=Ud(A),s.memoizedState=Id,x);if((s.mode&1)===0)return Vl(i,s,A,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var z=d.dgst;return d=z,x=Error(t(419)),d=Pd(x,d,void 0),Vl(i,s,A,d)}if(z=(A&i.childLanes)!==0,Kn||z){if(d=Tn,d!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,fr(i,p),Ri(d,i,p,-1))}return Qd(),d=Pd(Error(t(421))),Vl(i,s,A,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=xE.bind(null,i),p._reactRetry=s,null):(i=x.treeContext,si=Pr(p.nextSibling),ri=s,qt=!0,Ti=null,i!==null&&(fi[hi++]=ur,fi[hi++]=dr,fi[hi++]=fs,ur=i.id,dr=i.overflow,fs=s),s=Fd(s,d.children),s.flags|=4096,s)}function l0(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),hd(i.return,s,l)}function Od(i,s,l,d,p){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=p)}function c0(i,s,l){var d=s.pendingProps,p=d.revealOrder,x=d.tail;if(Hn(i,s,d.children,l),d=Qt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&l0(i,l,s);else if(i.tag===19)l0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Gt(Qt,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Il(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Od(s,!1,p,l,x);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Il(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Od(s,!0,l,null,x);break;case"together":Od(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function pr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),vs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Vr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function oE(i,s,l){switch(s.tag){case 3:s0(s),Zs();break;case 5:Eg(s);break;case 1:qn(s.type)&&wl(s);break;case 4:gd(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Gt(Pl,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Gt(Qt,Qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?a0(i,s,l):(Gt(Qt,Qt.current&1),i=pr(i,s,l),i!==null?i.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return c0(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Qt,Qt.current),d)break;return null;case 22:case 23:return s.lanes=0,n0(i,s,l)}return pr(i,s,l)}var u0,kd,d0,f0;u0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},kd=function(){},d0=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,ms($i.current);var x=null;switch(l){case"input":p=Xe(i,p),d=Xe(i,d),x=[];break;case"select":p=W({},p,{value:void 0}),d=W({},d,{value:void 0}),x=[];break;case"textarea":p=Zt(i,p),d=Zt(i,d),x=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Sl)}ge(l,d);var A;l=null;for(pe in p)if(!d.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var z=p[pe];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?x||(x=[]):(x=x||[]).push(pe,null));for(pe in d){var $=d[pe];if(z=p!=null?p[pe]:void 0,d.hasOwnProperty(pe)&&$!==z&&($!=null||z!=null))if(pe==="style")if(z){for(A in z)!z.hasOwnProperty(A)||$&&$.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in $)$.hasOwnProperty(A)&&z[A]!==$[A]&&(l||(l={}),l[A]=$[A])}else l||(x||(x=[]),x.push(pe,l)),l=$;else pe==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,z=z?z.__html:void 0,$!=null&&z!==$&&(x=x||[]).push(pe,$)):pe==="children"?typeof $!="string"&&typeof $!="number"||(x=x||[]).push(pe,""+$):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?($!=null&&pe==="onScroll"&&Xt("scroll",i),x||z===$||(x=[])):(x=x||[]).push(pe,$))}l&&(x=x||[]).push("style",l);var pe=x;(s.updateQueue=pe)&&(s.flags|=4)}},f0=function(i,s,l,d){l!==d&&(s.flags|=4)};function ga(i,s){if(!qt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function kn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function aE(i,s,l){var d=s.pendingProps;switch(od(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(s),null;case 1:return qn(s.type)&&El(),kn(s),null;case 3:return d=s.stateNode,to(),jt(Yn),jt(Fn),_d(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Cl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ti!==null&&(qd(Ti),Ti=null))),kd(i,s),kn(s),null;case 5:vd(s);var p=ms(da.current);if(l=s.type,i!==null&&s.stateNode!=null)d0(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return kn(s),null}if(i=ms($i.current),Cl(s)){d=s.stateNode,l=s.type;var x=s.memoizedProps;switch(d[ji]=s,d[oa]=x,i=(s.mode&1)!==0,l){case"dialog":Xt("cancel",d),Xt("close",d);break;case"iframe":case"object":case"embed":Xt("load",d);break;case"video":case"audio":for(p=0;p<ia.length;p++)Xt(ia[p],d);break;case"source":Xt("error",d);break;case"img":case"image":case"link":Xt("error",d),Xt("load",d);break;case"details":Xt("toggle",d);break;case"input":Wt(d,x),Xt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},Xt("invalid",d);break;case"textarea":an(d,x),Xt("invalid",d)}ge(l,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var z=x[A];A==="children"?typeof z=="string"?d.textContent!==z&&(x.suppressHydrationWarning!==!0&&yl(d.textContent,z,i),p=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(x.suppressHydrationWarning!==!0&&yl(d.textContent,z,i),p=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Xt("scroll",d)}switch(l){case"input":Ge(d),Pt(d,x,!0);break;case"textarea":Ge(d),tn(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=Sl)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=bt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=A.createElement(l,{is:d.is}):(i=A.createElement(l),l==="select"&&(A=i,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):i=A.createElementNS(i,l),i[ji]=s,i[oa]=d,u0(i,s,!1,!1),s.stateNode=i;e:{switch(A=De(l,d),l){case"dialog":Xt("cancel",i),Xt("close",i),p=d;break;case"iframe":case"object":case"embed":Xt("load",i),p=d;break;case"video":case"audio":for(p=0;p<ia.length;p++)Xt(ia[p],i);p=d;break;case"source":Xt("error",i),p=d;break;case"img":case"image":case"link":Xt("error",i),Xt("load",i),p=d;break;case"details":Xt("toggle",i),p=d;break;case"input":Wt(i,d),p=Xe(i,d),Xt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=W({},d,{value:void 0}),Xt("invalid",i);break;case"textarea":an(i,d),p=Zt(i,d),Xt("invalid",i);break;default:p=d}ge(l,p),z=p;for(x in z)if(z.hasOwnProperty(x)){var $=z[x];x==="style"?ie(i,$):x==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&wt(i,$)):x==="children"?typeof $=="string"?(l!=="textarea"||$!=="")&&He(i,$):typeof $=="number"&&He(i,""+$):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?$!=null&&x==="onScroll"&&Xt("scroll",i):$!=null&&L(i,x,$,A))}switch(l){case"input":Ge(i),Pt(i,d,!1);break;case"textarea":Ge(i),tn(i);break;case"option":d.value!=null&&i.setAttribute("value",""+_e(d.value));break;case"select":i.multiple=!!d.multiple,x=d.value,x!=null?Bt(i,!!d.multiple,x,!1):d.defaultValue!=null&&Bt(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Sl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return kn(s),null;case 6:if(i&&s.stateNode!=null)f0(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=ms(da.current),ms($i.current),Cl(s)){if(d=s.stateNode,l=s.memoizedProps,d[ji]=s,(x=d.nodeValue!==l)&&(i=ri,i!==null))switch(i.tag){case 3:yl(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&yl(d.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ji]=s,s.stateNode=d}return kn(s),null;case 13:if(jt(Qt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qt&&si!==null&&(s.mode&1)!==0&&(s.flags&128)===0)mg(),Zs(),s.flags|=98560,x=!1;else if(x=Cl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ji]=s}else Zs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;kn(s),x=!1}else Ti!==null&&(qd(Ti),Ti=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Qt.current&1)!==0?xn===0&&(xn=3):Qd())),s.updateQueue!==null&&(s.flags|=4),kn(s),null);case 4:return to(),kd(i,s),i===null&&ra(s.stateNode.containerInfo),kn(s),null;case 10:return fd(s.type._context),kn(s),null;case 17:return qn(s.type)&&El(),kn(s),null;case 19:if(jt(Qt),x=s.memoizedState,x===null)return kn(s),null;if(d=(s.flags&128)!==0,A=x.rendering,A===null)if(d)ga(x,!1);else{if(xn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Il(i),A!==null){for(s.flags|=128,ga(x,!1),d=A.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)x=l,i=d,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt(Qt,Qt.current&1|2),s.child}i=i.sibling}x.tail!==null&&$t()>so&&(s.flags|=128,d=!0,ga(x,!1),s.lanes=4194304)}else{if(!d)if(i=Il(A),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ga(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!qt)return kn(s),null}else 2*$t()-x.renderingStartTime>so&&l!==1073741824&&(s.flags|=128,d=!0,ga(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=$t(),s.sibling=null,l=Qt.current,Gt(Qt,d?l&1|2:l&1),s):(kn(s),null);case 22:case 23:return Zd(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(oi&1073741824)!==0&&(kn(s),s.subtreeFlags&6&&(s.flags|=8192)):kn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function lE(i,s){switch(od(s),s.tag){case 1:return qn(s.type)&&El(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return to(),jt(Yn),jt(Fn),_d(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return vd(s),null;case 13:if(jt(Qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Zs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt(Qt),null;case 4:return to(),null;case 10:return fd(s.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var Gl=!1,Bn=!1,cE=typeof WeakSet=="function"?WeakSet:Set,$e=null;function io(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){rn(i,s,d)}else l.current=null}function Bd(i,s,l){try{l()}catch(d){rn(i,s,d)}}var h0=!1;function uE(i,s){if(Zu=cl,i=Xm(),Gu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,z=-1,$=-1,pe=0,Ce=0,Re=i,be=null;t:for(;;){for(var We;Re!==l||p!==0&&Re.nodeType!==3||(z=A+p),Re!==x||d!==0&&Re.nodeType!==3||($=A+d),Re.nodeType===3&&(A+=Re.nodeValue.length),(We=Re.firstChild)!==null;)be=Re,Re=We;for(;;){if(Re===i)break t;if(be===l&&++pe===p&&(z=A),be===x&&++Ce===d&&($=A),(We=Re.nextSibling)!==null)break;Re=be,be=Re.parentNode}Re=We}l=z===-1||$===-1?null:{start:z,end:$}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qu={focusedElem:i,selectionRange:l},cl=!1,$e=s;$e!==null;)if(s=$e,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,$e=i;else for(;$e!==null;){s=$e;try{var Qe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var et=Qe.memoizedProps,cn=Qe.memoizedState,oe=s.stateNode,Z=oe.getSnapshotBeforeUpdate(s.elementType===s.type?et:Ai(s.type,et),cn);oe.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var ue=s.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){rn(s,s.return,Ne)}if(i=s.sibling,i!==null){i.return=s.return,$e=i;break}$e=s.return}return Qe=h0,h0=!1,Qe}function va(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var x=p.destroy;p.destroy=void 0,x!==void 0&&Bd(s,l,x)}p=p.next}while(p!==d)}}function Wl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function zd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function p0(i){var s=i.alternate;s!==null&&(i.alternate=null,p0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[ji],delete s[oa],delete s[nd],delete s[jM],delete s[$M])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function m0(i){return i.tag===5||i.tag===3||i.tag===4}function g0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||m0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Vd(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Sl));else if(d!==4&&(i=i.child,i!==null))for(Vd(i,s,l),i=i.sibling;i!==null;)Vd(i,s,l),i=i.sibling}function Hd(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Hd(i,s,l),i=i.sibling;i!==null;)Hd(i,s,l),i=i.sibling}var Pn=null,bi=!1;function Fr(i,s,l){for(l=l.child;l!==null;)v0(i,s,l),l=l.sibling}function v0(i,s,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(j,l)}catch{}switch(l.tag){case 5:Bn||io(l,s);case 6:var d=Pn,p=bi;Pn=null,Fr(i,s,l),Pn=d,bi=p,Pn!==null&&(bi?(i=Pn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Pn.removeChild(l.stateNode));break;case 18:Pn!==null&&(bi?(i=Pn,l=l.stateNode,i.nodeType===8?td(i.parentNode,l):i.nodeType===1&&td(i,l),qo(i)):td(Pn,l.stateNode));break;case 4:d=Pn,p=bi,Pn=l.stateNode.containerInfo,bi=!0,Fr(i,s,l),Pn=d,bi=p;break;case 0:case 11:case 14:case 15:if(!Bn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Bd(l,s,A),p=p.next}while(p!==d)}Fr(i,s,l);break;case 1:if(!Bn&&(io(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){rn(l,s,z)}Fr(i,s,l);break;case 21:Fr(i,s,l);break;case 22:l.mode&1?(Bn=(d=Bn)||l.memoizedState!==null,Fr(i,s,l),Bn=d):Fr(i,s,l);break;default:Fr(i,s,l)}}function x0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new cE),s.forEach(function(d){var p=_E.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Ci(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var x=i,A=s,z=A;e:for(;z!==null;){switch(z.tag){case 5:Pn=z.stateNode,bi=!1;break e;case 3:Pn=z.stateNode.containerInfo,bi=!0;break e;case 4:Pn=z.stateNode.containerInfo,bi=!0;break e}z=z.return}if(Pn===null)throw Error(t(160));v0(x,A,p),Pn=null,bi=!1;var $=p.alternate;$!==null&&($.return=null),p.return=null}catch(pe){rn(p,s,pe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_0(s,i),s=s.sibling}function _0(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ci(s,i),qi(i),d&4){try{va(3,i,i.return),Wl(3,i)}catch(et){rn(i,i.return,et)}try{va(5,i,i.return)}catch(et){rn(i,i.return,et)}}break;case 1:Ci(s,i),qi(i),d&512&&l!==null&&io(l,l.return);break;case 5:if(Ci(s,i),qi(i),d&512&&l!==null&&io(l,l.return),i.flags&32){var p=i.stateNode;try{He(p,"")}catch(et){rn(i,i.return,et)}}if(d&4&&(p=i.stateNode,p!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,z=i.type,$=i.updateQueue;if(i.updateQueue=null,$!==null)try{z==="input"&&x.type==="radio"&&x.name!=null&&kt(p,x),De(z,A);var pe=De(z,x);for(A=0;A<$.length;A+=2){var Ce=$[A],Re=$[A+1];Ce==="style"?ie(p,Re):Ce==="dangerouslySetInnerHTML"?wt(p,Re):Ce==="children"?He(p,Re):L(p,Ce,Re,pe)}switch(z){case"input":en(p,x);break;case"textarea":K(p,x);break;case"select":var be=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var We=x.value;We!=null?Bt(p,!!x.multiple,We,!1):be!==!!x.multiple&&(x.defaultValue!=null?Bt(p,!!x.multiple,x.defaultValue,!0):Bt(p,!!x.multiple,x.multiple?[]:"",!1))}p[oa]=x}catch(et){rn(i,i.return,et)}}break;case 6:if(Ci(s,i),qi(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,x=i.memoizedProps;try{p.nodeValue=x}catch(et){rn(i,i.return,et)}}break;case 3:if(Ci(s,i),qi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{qo(s.containerInfo)}catch(et){rn(i,i.return,et)}break;case 4:Ci(s,i),qi(i);break;case 13:Ci(s,i),qi(i),p=i.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Xd=$t())),d&4&&x0(i);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,i.mode&1?(Bn=(pe=Bn)||Ce,Ci(s,i),Bn=pe):Ci(s,i),qi(i),d&8192){if(pe=i.memoizedState!==null,(i.stateNode.isHidden=pe)&&!Ce&&(i.mode&1)!==0)for($e=i,Ce=i.child;Ce!==null;){for(Re=$e=Ce;$e!==null;){switch(be=$e,We=be.child,be.tag){case 0:case 11:case 14:case 15:va(4,be,be.return);break;case 1:io(be,be.return);var Qe=be.stateNode;if(typeof Qe.componentWillUnmount=="function"){d=be,l=be.return;try{s=d,Qe.props=s.memoizedProps,Qe.state=s.memoizedState,Qe.componentWillUnmount()}catch(et){rn(d,l,et)}}break;case 5:io(be,be.return);break;case 22:if(be.memoizedState!==null){M0(Re);continue}}We!==null?(We.return=be,$e=We):M0(Re)}Ce=Ce.sibling}e:for(Ce=null,Re=i;;){if(Re.tag===5){if(Ce===null){Ce=Re;try{p=Re.stateNode,pe?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(z=Re.stateNode,$=Re.memoizedProps.style,A=$!=null&&$.hasOwnProperty("display")?$.display:null,z.style.display=w("display",A))}catch(et){rn(i,i.return,et)}}}else if(Re.tag===6){if(Ce===null)try{Re.stateNode.nodeValue=pe?"":Re.memoizedProps}catch(et){rn(i,i.return,et)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===i)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===i)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===i)break e;Ce===Re&&(Ce=null),Re=Re.return}Ce===Re&&(Ce=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ci(s,i),qi(i),d&4&&x0(i);break;case 21:break;default:Ci(s,i),qi(i)}}function qi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(m0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(He(p,""),d.flags&=-33);var x=g0(i);Hd(i,x,p);break;case 3:case 4:var A=d.stateNode.containerInfo,z=g0(i);Vd(i,z,A);break;default:throw Error(t(161))}}catch($){rn(i,i.return,$)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function dE(i,s,l){$e=i,y0(i)}function y0(i,s,l){for(var d=(i.mode&1)!==0;$e!==null;){var p=$e,x=p.child;if(p.tag===22&&d){var A=p.memoizedState!==null||Gl;if(!A){var z=p.alternate,$=z!==null&&z.memoizedState!==null||Bn;z=Gl;var pe=Bn;if(Gl=A,(Bn=$)&&!pe)for($e=p;$e!==null;)A=$e,$=A.child,A.tag===22&&A.memoizedState!==null?E0(p):$!==null?($.return=A,$e=$):E0(p);for(;x!==null;)$e=x,y0(x),x=x.sibling;$e=p,Gl=z,Bn=pe}S0(i)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,$e=x):S0(i)}}function S0(i){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Bn||Wl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Bn)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Ai(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Mg(s,x,d);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Mg(s,A,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var $=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&l.focus();break;case"img":$.src&&(l.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var pe=s.alternate;if(pe!==null){var Ce=pe.memoizedState;if(Ce!==null){var Re=Ce.dehydrated;Re!==null&&qo(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Bn||s.flags&512&&zd(s)}catch(be){rn(s,s.return,be)}}if(s===i){$e=null;break}if(l=s.sibling,l!==null){l.return=s.return,$e=l;break}$e=s.return}}function M0(i){for(;$e!==null;){var s=$e;if(s===i){$e=null;break}var l=s.sibling;if(l!==null){l.return=s.return,$e=l;break}$e=s.return}}function E0(i){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Wl(4,s)}catch($){rn(s,l,$)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch($){rn(s,p,$)}}var x=s.return;try{zd(s)}catch($){rn(s,x,$)}break;case 5:var A=s.return;try{zd(s)}catch($){rn(s,A,$)}}}catch($){rn(s,s.return,$)}if(s===i){$e=null;break}var z=s.sibling;if(z!==null){z.return=s.return,$e=z;break}$e=s.return}}var fE=Math.ceil,Xl=P.ReactCurrentDispatcher,Gd=P.ReactCurrentOwner,gi=P.ReactCurrentBatchConfig,Tt=0,Tn=null,fn=null,Dn=0,oi=0,ro=Dr(0),xn=0,xa=null,vs=0,jl=0,Wd=0,_a=null,Zn=null,Xd=0,so=1/0,mr=null,$l=!1,jd=null,Or=null,Yl=!1,kr=null,ql=0,ya=0,$d=null,Kl=-1,Zl=0;function Gn(){return(Tt&6)!==0?$t():Kl!==-1?Kl:Kl=$t()}function Br(i){return(i.mode&1)===0?1:(Tt&2)!==0&&Dn!==0?Dn&-Dn:qM.transition!==null?(Zl===0&&(Zl=Ft()),Zl):(i=tt,i!==0||(i=window.event,i=i===void 0?16:Tm(i.type)),i)}function Ri(i,s,l,d){if(50<ya)throw ya=0,$d=null,Error(t(185));nn(i,l,d),((Tt&2)===0||i!==Tn)&&(i===Tn&&((Tt&2)===0&&(jl|=l),xn===4&&zr(i,Dn)),Qn(i,d),l===1&&Tt===0&&(s.mode&1)===0&&(so=$t()+500,Tl&&Nr()))}function Qn(i,s){var l=i.callbackNode;xt(i,s);var d=ht(i,i===Tn?Dn:0);if(d===0)l!==null&&Wo(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&Wo(l),s===1)i.tag===0?YM(T0.bind(null,i)):ug(T0.bind(null,i)),WM(function(){(Tt&6)===0&&Nr()}),l=null;else{switch(Wi(d)){case 1:l=Xo;break;case 4:l=ol;break;case 16:l=ks;break;case 536870912:l=b;break;default:l=ks}l=N0(l,w0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function w0(i,s){if(Kl=-1,Zl=0,(Tt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(oo()&&i.callbackNode!==l)return null;var d=ht(i,i===Tn?Dn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Ql(i,d);else{s=d;var p=Tt;Tt|=2;var x=b0();(Tn!==i||Dn!==s)&&(mr=null,so=$t()+500,_s(i,s));do try{mE();break}catch(z){A0(i,z)}while(!0);dd(),Xl.current=x,Tt=p,fn!==null?s=0:(Tn=null,Dn=0,s=xn)}if(s!==0){if(s===2&&(p=Yt(i),p!==0&&(d=p,s=Yd(i,p))),s===1)throw l=xa,_s(i,0),zr(i,d),Qn(i,$t()),l;if(s===6)zr(i,d);else{if(p=i.current.alternate,(d&30)===0&&!hE(p)&&(s=Ql(i,d),s===2&&(x=Yt(i),x!==0&&(d=x,s=Yd(i,x))),s===1))throw l=xa,_s(i,0),zr(i,d),Qn(i,$t()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:ys(i,Zn,mr);break;case 3:if(zr(i,d),(d&130023424)===d&&(s=Xd+500-$t(),10<s)){if(ht(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=ed(ys.bind(null,i,Zn,mr),s);break}ys(i,Zn,mr);break;case 4:if(zr(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var A=31-re(d);x=1<<A,A=s[A],A>p&&(p=A),d&=~x}if(d=p,d=$t()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*fE(d/1960))-d,10<d){i.timeoutHandle=ed(ys.bind(null,i,Zn,mr),d);break}ys(i,Zn,mr);break;case 5:ys(i,Zn,mr);break;default:throw Error(t(329))}}}return Qn(i,$t()),i.callbackNode===l?w0.bind(null,i):null}function Yd(i,s){var l=_a;return i.current.memoizedState.isDehydrated&&(_s(i,s).flags|=256),i=Ql(i,s),i!==2&&(s=Zn,Zn=l,s!==null&&qd(s)),i}function qd(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function hE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],x=p.getSnapshot;p=p.value;try{if(!wi(x(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zr(i,s){for(s&=~Wd,s&=~jl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-re(s),d=1<<l;i[l]=-1,s&=~d}}function T0(i){if((Tt&6)!==0)throw Error(t(327));oo();var s=ht(i,0);if((s&1)===0)return Qn(i,$t()),null;var l=Ql(i,s);if(i.tag!==0&&l===2){var d=Yt(i);d!==0&&(s=d,l=Yd(i,d))}if(l===1)throw l=xa,_s(i,0),zr(i,s),Qn(i,$t()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ys(i,Zn,mr),Qn(i,$t()),null}function Kd(i,s){var l=Tt;Tt|=1;try{return i(s)}finally{Tt=l,Tt===0&&(so=$t()+500,Tl&&Nr())}}function xs(i){kr!==null&&kr.tag===0&&(Tt&6)===0&&oo();var s=Tt;Tt|=1;var l=gi.transition,d=tt;try{if(gi.transition=null,tt=1,i)return i()}finally{tt=d,gi.transition=l,Tt=s,(Tt&6)===0&&Nr()}}function Zd(){oi=ro.current,jt(ro)}function _s(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,GM(l)),fn!==null)for(l=fn.return;l!==null;){var d=l;switch(od(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&El();break;case 3:to(),jt(Yn),jt(Fn),_d();break;case 5:vd(d);break;case 4:to();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:fd(d.type._context);break;case 22:case 23:Zd()}l=l.return}if(Tn=i,fn=i=Vr(i.current,null),Dn=oi=s,xn=0,xa=null,Wd=jl=vs=0,Zn=_a=null,ps!==null){for(s=0;s<ps.length;s++)if(l=ps[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,x=l.pending;if(x!==null){var A=x.next;x.next=p,d.next=A}l.pending=d}ps=null}return i}function A0(i,s){do{var l=fn;try{if(dd(),Ul.current=Bl,Fl){for(var d=Jt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Fl=!1}if(gs=0,wn=vn=Jt=null,fa=!1,ha=0,Gd.current=null,l===null||l.return===null){xn=1,xa=s,fn=null;break}e:{var x=i,A=l.return,z=l,$=s;if(s=Dn,z.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var pe=$,Ce=z,Re=Ce.tag;if((Ce.mode&1)===0&&(Re===0||Re===11||Re===15)){var be=Ce.alternate;be?(Ce.updateQueue=be.updateQueue,Ce.memoizedState=be.memoizedState,Ce.lanes=be.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var We=Zg(A);if(We!==null){We.flags&=-257,Qg(We,A,z,x,s),We.mode&1&&Kg(x,pe,s),s=We,$=pe;var Qe=s.updateQueue;if(Qe===null){var et=new Set;et.add($),s.updateQueue=et}else Qe.add($);break e}else{if((s&1)===0){Kg(x,pe,s),Qd();break e}$=Error(t(426))}}else if(qt&&z.mode&1){var cn=Zg(A);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Qg(cn,A,z,x,s),cd(no($,z));break e}}x=$=no($,z),xn!==4&&(xn=2),_a===null?_a=[x]:_a.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var oe=Yg(x,$,s);Sg(x,oe);break e;case 1:z=$;var Z=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Or===null||!Or.has(ue)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ne=qg(x,z,s);Sg(x,Ne);break e}}x=x.return}while(x!==null)}R0(l)}catch(nt){s=nt,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function b0(){var i=Xl.current;return Xl.current=Bl,i===null?Bl:i}function Qd(){(xn===0||xn===3||xn===2)&&(xn=4),Tn===null||(vs&268435455)===0&&(jl&268435455)===0||zr(Tn,Dn)}function Ql(i,s){var l=Tt;Tt|=2;var d=b0();(Tn!==i||Dn!==s)&&(mr=null,_s(i,s));do try{pE();break}catch(p){A0(i,p)}while(!0);if(dd(),Tt=l,Xl.current=d,fn!==null)throw Error(t(261));return Tn=null,Dn=0,xn}function pE(){for(;fn!==null;)C0(fn)}function mE(){for(;fn!==null&&!cs();)C0(fn)}function C0(i){var s=L0(i.alternate,i,oi);i.memoizedProps=i.pendingProps,s===null?R0(i):fn=s,Gd.current=null}function R0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=aE(l,s,oi),l!==null){fn=l;return}}else{if(l=lE(l,s),l!==null){l.flags&=32767,fn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{xn=6,fn=null;return}}if(s=s.sibling,s!==null){fn=s;return}fn=s=i}while(s!==null);xn===0&&(xn=5)}function ys(i,s,l){var d=tt,p=gi.transition;try{gi.transition=null,tt=1,gE(i,s,l,d)}finally{gi.transition=p,tt=d}return null}function gE(i,s,l,d){do oo();while(kr!==null);if((Tt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Ze(i,x),i===Tn&&(fn=Tn=null,Dn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Yl||(Yl=!0,N0(ks,function(){return oo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=gi.transition,gi.transition=null;var A=tt;tt=1;var z=Tt;Tt|=4,Gd.current=null,uE(i,l),_0(l,i),FM(Qu),cl=!!Zu,Qu=Zu=null,i.current=l,dE(l),Du(),Tt=z,tt=A,gi.transition=x}else i.current=l;if(Yl&&(Yl=!1,kr=i,ql=p),x=i.pendingLanes,x===0&&(Or=null),se(l.stateNode),Qn(i,$t()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if($l)throw $l=!1,i=jd,jd=null,i;return(ql&1)!==0&&i.tag!==0&&oo(),x=i.pendingLanes,(x&1)!==0?i===$d?ya++:(ya=0,$d=i):ya=0,Nr(),null}function oo(){if(kr!==null){var i=Wi(ql),s=gi.transition,l=tt;try{if(gi.transition=null,tt=16>i?16:i,kr===null)var d=!1;else{if(i=kr,kr=null,ql=0,(Tt&6)!==0)throw Error(t(331));var p=Tt;for(Tt|=4,$e=i.current;$e!==null;){var x=$e,A=x.child;if(($e.flags&16)!==0){var z=x.deletions;if(z!==null){for(var $=0;$<z.length;$++){var pe=z[$];for($e=pe;$e!==null;){var Ce=$e;switch(Ce.tag){case 0:case 11:case 15:va(8,Ce,x)}var Re=Ce.child;if(Re!==null)Re.return=Ce,$e=Re;else for(;$e!==null;){Ce=$e;var be=Ce.sibling,We=Ce.return;if(p0(Ce),Ce===pe){$e=null;break}if(be!==null){be.return=We,$e=be;break}$e=We}}}var Qe=x.alternate;if(Qe!==null){var et=Qe.child;if(et!==null){Qe.child=null;do{var cn=et.sibling;et.sibling=null,et=cn}while(et!==null)}}$e=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,$e=A;else e:for(;$e!==null;){if(x=$e,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:va(9,x,x.return)}var oe=x.sibling;if(oe!==null){oe.return=x.return,$e=oe;break e}$e=x.return}}var Z=i.current;for($e=Z;$e!==null;){A=$e;var ue=A.child;if((A.subtreeFlags&2064)!==0&&ue!==null)ue.return=A,$e=ue;else e:for(A=Z;$e!==null;){if(z=$e,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Wl(9,z)}}catch(nt){rn(z,z.return,nt)}if(z===A){$e=null;break e}var Ne=z.sibling;if(Ne!==null){Ne.return=z.return,$e=Ne;break e}$e=z.return}}if(Tt=p,Nr(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(j,i)}catch{}d=!0}return d}finally{tt=l,gi.transition=s}}return!1}function P0(i,s,l){s=no(l,s),s=Yg(i,s,1),i=Ur(i,s,1),s=Gn(),i!==null&&(nn(i,1,s),Qn(i,s))}function rn(i,s,l){if(i.tag===3)P0(i,i,l);else for(;s!==null;){if(s.tag===3){P0(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Or===null||!Or.has(d))){i=no(l,i),i=qg(s,i,1),s=Ur(s,i,1),i=Gn(),s!==null&&(nn(s,1,i),Qn(s,i));break}}s=s.return}}function vE(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=Gn(),i.pingedLanes|=i.suspendedLanes&l,Tn===i&&(Dn&l)===l&&(xn===4||xn===3&&(Dn&130023424)===Dn&&500>$t()-Xd?_s(i,0):Wd|=l),Qn(i,s)}function D0(i,s){s===0&&((i.mode&1)===0?s=1:(s=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var l=Gn();i=fr(i,s),i!==null&&(nn(i,s,l),Qn(i,l))}function xE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),D0(i,l)}function _E(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),D0(i,l)}var L0;L0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Yn.current)Kn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Kn=!1,oE(i,s,l);Kn=(i.flags&131072)!==0}else Kn=!1,qt&&(s.flags&1048576)!==0&&dg(s,bl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Hl(i,s),i=s.pendingProps;var p=Ys(s,Fn.current);eo(s,l),p=Md(null,s,d,i,p,l);var x=Ed();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,qn(d)?(x=!0,wl(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,md(s),p.updater=zl,s.stateNode=p,p._reactInternals=s,Rd(s,d,i,l),s=Nd(null,s,d,!0,x,l)):(s.tag=0,qt&&x&&sd(s),Hn(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(Hl(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=SE(d),i=Ai(d,i),p){case 0:s=Ld(null,s,d,i,l);break e;case 1:s=r0(null,s,d,i,l);break e;case 11:s=Jg(null,s,d,i,l);break e;case 14:s=e0(null,s,d,Ai(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ai(d,p),Ld(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ai(d,p),r0(i,s,d,p,l);case 3:e:{if(s0(s),i===null)throw Error(t(387));d=s.pendingProps,x=s.memoizedState,p=x.element,yg(i,s),Nl(s,d,null,l);var A=s.memoizedState;if(d=A.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=no(Error(t(423)),s),s=o0(i,s,d,l,p);break e}else if(d!==p){p=no(Error(t(424)),s),s=o0(i,s,d,l,p);break e}else for(si=Pr(s.stateNode.containerInfo.firstChild),ri=s,qt=!0,Ti=null,l=xg(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Zs(),d===p){s=pr(i,s,l);break e}Hn(i,s,d,l)}s=s.child}return s;case 5:return Eg(s),i===null&&ld(s),d=s.type,p=s.pendingProps,x=i!==null?i.memoizedProps:null,A=p.children,Ju(d,p)?A=null:x!==null&&Ju(d,x)&&(s.flags|=32),i0(i,s),Hn(i,s,A,l),s.child;case 6:return i===null&&ld(s),null;case 13:return a0(i,s,l);case 4:return gd(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Qs(s,null,d,l):Hn(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ai(d,p),Jg(i,s,d,p,l);case 7:return Hn(i,s,s.pendingProps,l),s.child;case 8:return Hn(i,s,s.pendingProps.children,l),s.child;case 12:return Hn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,x=s.memoizedProps,A=p.value,Gt(Pl,d._currentValue),d._currentValue=A,x!==null)if(wi(x.value,A)){if(x.children===p.children&&!Yn.current){s=pr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var z=x.dependencies;if(z!==null){A=x.child;for(var $=z.firstContext;$!==null;){if($.context===d){if(x.tag===1){$=hr(-1,l&-l),$.tag=2;var pe=x.updateQueue;if(pe!==null){pe=pe.shared;var Ce=pe.pending;Ce===null?$.next=$:($.next=Ce.next,Ce.next=$),pe.pending=$}}x.lanes|=l,$=x.alternate,$!==null&&($.lanes|=l),hd(x.return,l,s),z.lanes|=l;break}$=$.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),hd(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Hn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,eo(s,l),p=pi(p),d=d(p),s.flags|=1,Hn(i,s,d,l),s.child;case 14:return d=s.type,p=Ai(d,s.pendingProps),p=Ai(d.type,p),e0(i,s,d,p,l);case 15:return t0(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ai(d,p),Hl(i,s),s.tag=1,qn(d)?(i=!0,wl(s)):i=!1,eo(s,l),jg(s,d,p),Rd(s,d,p,l),Nd(null,s,d,!0,i,l);case 19:return c0(i,s,l);case 22:return n0(i,s,l)}throw Error(t(156,s.tag))};function N0(i,s){return Go(i,s)}function yE(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(i,s,l,d){return new yE(i,s,l,d)}function Jd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function SE(i){if(typeof i=="function")return Jd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ee)return 11;if(i===J)return 14}return 2}function Vr(i,s){var l=i.alternate;return l===null?(l=vi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Jl(i,s,l,d,p,x){var A=2;if(d=i,typeof i=="function")Jd(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case E:return Ss(l.children,p,x,s);case C:A=8,p|=8;break;case Y:return i=vi(12,l,s,p|2),i.elementType=Y,i.lanes=x,i;case fe:return i=vi(13,l,s,p),i.elementType=fe,i.lanes=x,i;case V:return i=vi(19,l,s,p),i.elementType=V,i.lanes=x,i;case q:return ec(l,p,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:A=10;break e;case U:A=9;break e;case ee:A=11;break e;case J:A=14;break e;case le:A=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=vi(A,l,s,p),s.elementType=i,s.type=d,s.lanes=x,s}function Ss(i,s,l,d){return i=vi(7,i,d,s),i.lanes=l,i}function ec(i,s,l,d){return i=vi(22,i,d,s),i.elementType=q,i.lanes=l,i.stateNode={isHidden:!1},i}function ef(i,s,l){return i=vi(6,i,null,s),i.lanes=l,i}function tf(i,s,l){return s=vi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ME(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dt(0),this.expirationTimes=Dt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function nf(i,s,l,d,p,x,A,z,$){return i=new ME(i,s,l,z,$),s===1?(s=1,x===!0&&(s|=8)):s=0,x=vi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(x),i}function EE(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function I0(i){if(!i)return Lr;i=i._reactInternals;e:{if(Hi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(qn(l))return lg(i,l,s)}return s}function U0(i,s,l,d,p,x,A,z,$){return i=nf(l,d,!0,i,p,x,A,z,$),i.context=I0(null),l=i.current,d=Gn(),p=Br(l),x=hr(d,p),x.callback=s??null,Ur(l,x,p),i.current.lanes=p,nn(i,p,d),Qn(i,d),i}function tc(i,s,l,d){var p=s.current,x=Gn(),A=Br(p);return l=I0(l),s.context===null?s.context=l:s.pendingContext=l,s=hr(x,A),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Ur(p,s,A),i!==null&&(Ri(i,p,A,x),Ll(i,p,A)),A}function nc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function F0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function rf(i,s){F0(i,s),(i=i.alternate)&&F0(i,s)}function wE(){return null}var O0=typeof reportError=="function"?reportError:function(i){console.error(i)};function sf(i){this._internalRoot=i}ic.prototype.render=sf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));tc(i,s,null,null)},ic.prototype.unmount=sf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;xs(function(){tc(null,i,null,null)}),s[lr]=null}};function ic(i){this._internalRoot=i}ic.prototype.unstable_scheduleHydration=function(i){if(i){var s=Xi();i={blockedOn:null,target:i,priority:s};for(var l=0;l<br.length&&s!==0&&s<br[l].priority;l++);br.splice(l,0,i),l===0&&Em(i)}};function of(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function rc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function k0(){}function TE(i,s,l,d,p){if(p){if(typeof d=="function"){var x=d;d=function(){var pe=nc(A);x.call(pe)}}var A=U0(s,d,i,0,null,!1,!1,"",k0);return i._reactRootContainer=A,i[lr]=A.current,ra(i.nodeType===8?i.parentNode:i),xs(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var z=d;d=function(){var pe=nc($);z.call(pe)}}var $=nf(i,0,!1,null,null,!1,!1,"",k0);return i._reactRootContainer=$,i[lr]=$.current,ra(i.nodeType===8?i.parentNode:i),xs(function(){tc(s,$,l,d)}),$}function sc(i,s,l,d,p){var x=l._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var z=p;p=function(){var $=nc(A);z.call($)}}tc(s,A,i,p)}else A=TE(l,s,i,p,d);return nc(A)}gn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=lt(s.pendingLanes);l!==0&&(mn(s,l|1),Qn(s,$t()),(Tt&6)===0&&(so=$t()+500,Nr()))}break;case 13:xs(function(){var d=fr(i,1);if(d!==null){var p=Gn();Ri(d,i,1,p)}}),rf(i,1)}},Tr=function(i){if(i.tag===13){var s=fr(i,134217728);if(s!==null){var l=Gn();Ri(s,i,134217728,l)}rf(i,134217728)}},Ei=function(i){if(i.tag===13){var s=Br(i),l=fr(i,s);if(l!==null){var d=Gn();Ri(l,i,s,d)}rf(i,s)}},Xi=function(){return tt},St=function(i,s){var l=tt;try{return tt=i,s()}finally{tt=l}},X=function(i,s,l){switch(s){case"input":if(en(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=Ml(d);if(!p)throw Error(t(90));mt(d),en(d,p)}}}break;case"textarea":K(i,l);break;case"select":s=l.value,s!=null&&Bt(i,!!l.multiple,s,!1)}},xe=Kd,Se=xs;var AE={usingClientEntryPoint:!1,Events:[aa,js,Ml,te,ye,Kd]},Sa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bE={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ho(i),i===null?null:i.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||wE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{j=oc.inject(bE),ce=oc}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE,Jn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(s))throw Error(t(200));return EE(i,s,null,l)},Jn.createRoot=function(i,s){if(!of(i))throw Error(t(299));var l=!1,d="",p=O0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=nf(i,1,!1,null,null,l,!1,d,p),i[lr]=s.current,ra(i.nodeType===8?i.parentNode:i),new sf(s)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Ho(s),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return xs(i)},Jn.hydrate=function(i,s,l){if(!rc(s))throw Error(t(200));return sc(null,i,s,!0,l)},Jn.hydrateRoot=function(i,s,l){if(!of(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,x="",A=O0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=U0(s,null,i,1,l??null,p,!1,x,A),i[lr]=s.current,ra(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new ic(s)},Jn.render=function(i,s,l){if(!rc(s))throw Error(t(200));return sc(null,i,s,!1,l)},Jn.unmountComponentAtNode=function(i){if(!rc(i))throw Error(t(40));return i._reactRootContainer?(xs(function(){sc(null,null,i,!1,function(){i._reactRootContainer=null,i[lr]=null})}),!0):!1},Jn.unstable_batchedUpdates=Kd,Jn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!rc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return sc(i,s,l,!1,d)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var j0;function FE(){if(j0)return cf.exports;j0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),cf.exports=UE(),cf.exports}var $0;function OE(){if($0)return ac;$0=1;var n=FE();return ac.createRoot=n.createRoot,ac.hydrateRoot=n.hydrateRoot,ac}var kE=OE();const BE=m_(kE),Mp=Pe.createContext({});function es(n){const e=Pe.useRef(null);return e.current===null&&(e.current=n()),e.current}const zE=typeof window<"u",ja=zE?Pe.useLayoutEffect:Pe.useEffect,xu=Pe.createContext(null);function Ep(n,e){n.indexOf(e)===-1&&n.push(e)}function Qc(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Vi=(n,e,t)=>t>e?e:t<n?n:t;let _u=()=>{};const ts={},g_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),v_=n=>typeof n=="object"&&n!==null,x_=n=>/^0[^.\s]+$/u.test(n);function __(n){let e;return()=>(e===void 0&&(e=n()),e)}const ti=n=>n,$a=(...n)=>n.reduce((e,t)=>r=>t(e(r))),Ro=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class wp{constructor(){this.subscriptions=[]}add(e){return Ep(this.subscriptions,e),()=>Qc(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ci=n=>n*1e3,Si=n=>n/1e3,Tp=(n,e)=>e?n*(1e3/e):0,y_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,VE=1e-7,HE=12;function GE(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=y_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>VE&&++u<HE);return c}function Ya(n,e,t,r){if(n===e&&t===r)return ti;const o=a=>GE(a,0,1,n,t);return a=>a===0||a===1?a:y_(o(a),e,r)}const S_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,M_=n=>e=>1-n(1-e),E_=Ya(.33,1.53,.69,.99),Ap=M_(E_),w_=S_(Ap),T_=n=>n>=1?1:(n*=2)<1?.5*Ap(n):.5*(2-Math.pow(2,-10*(n-1))),bp=n=>1-Math.sin(Math.acos(n)),A_=M_(bp),b_=S_(bp),WE=Ya(.42,0,1,1),XE=Ya(0,0,.58,1),C_=Ya(.42,0,.58,1),jE=n=>Array.isArray(n)&&typeof n[0]!="number",R_=n=>Array.isArray(n)&&typeof n[0]=="number",$E={linear:ti,easeIn:WE,easeInOut:C_,easeOut:XE,circIn:bp,circInOut:b_,circOut:A_,backIn:Ap,backInOut:w_,backOut:E_,anticipate:T_},YE=n=>typeof n=="string",Y0=n=>{if(R_(n)){_u(n.length===4);const[e,t,r,o]=n;return Ya(e,t,r,o)}else if(YE(n))return $E[n];return n},lc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function qE(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,m=!1,v=!1)=>{const _=v&&r?e:t;return m&&a.add(h),_.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0;const m=e;e=t,t=m,e.forEach(u),e.clear(),r=!1,o&&(o=!1,f.process(h))}};return f}const KE=40;function P_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=lc.reduce((L,P)=>(L[P]=qE(a),L),{}),{setup:u,read:f,resolveKeyframes:h,preUpdate:m,update:v,preRender:g,render:_,postRender:M}=c,T=()=>{const L=ts.useManualTiming,P=L?o.timestamp:performance.now();t=!1,L||(o.delta=r?1e3/60:Math.max(Math.min(P-o.timestamp,KE),1)),o.timestamp=P,o.isProcessing=!0,u.process(o),f.process(o),h.process(o),m.process(o),v.process(o),g.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},y=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:lc.reduce((L,P)=>{const O=c[P];return L[P]=(F,E=!1,C=!1)=>(t||y(),O.schedule(F,E,C)),L},{}),cancel:L=>{for(let P=0;P<lc.length;P++)c[lc[P]].cancel(L)},state:o,steps:c}}const{schedule:At,cancel:Mi,state:Cn,steps:ff}=P_(typeof requestAnimationFrame<"u"?requestAnimationFrame:ti,!0);let kc;function ZE(){kc=void 0}const Xn={now:()=>(kc===void 0&&Xn.set(Cn.isProcessing||ts.useManualTiming?Cn.timestamp:performance.now()),kc),set:n=>{kc=n,queueMicrotask(ZE)}},D_=n=>e=>typeof e=="string"&&e.startsWith(n),L_=D_("--"),QE=D_("var(--"),Cp=n=>QE(n)?JE.test(n.split("/*")[0].trim()):!1,JE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function q0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Fo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},za={...Fo,transform:n=>Vi(0,1,n)},cc={...Fo,default:1},Na=n=>Math.round(n*1e5)/1e5,Rp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ew(n){return n==null}const tw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pp=(n,e)=>t=>!!(typeof t=="string"&&tw.test(t)&&t.startsWith(n)||e&&!ew(t)&&Object.prototype.hasOwnProperty.call(t,e)),N_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(Rp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},nw=n=>Vi(0,255,n),hf={...Fo,transform:n=>Math.round(nw(n))},Cs={test:Pp("rgb","red"),parse:N_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+hf.transform(n)+", "+hf.transform(e)+", "+hf.transform(t)+", "+Na(za.transform(r))+")"};function iw(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const oh={test:Pp("#"),parse:iw,transform:Cs.transform},qa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Sr=qa("deg"),rr=qa("%"),Je=qa("px"),rw=qa("vh"),sw=qa("vw"),K0={...rr,parse:n=>rr.parse(n)/100,transform:n=>rr.transform(n*100)},Eo={test:Pp("hsl","hue"),parse:N_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+rr.transform(Na(e))+", "+rr.transform(Na(t))+", "+Na(za.transform(r))+")"},pn={test:n=>Cs.test(n)||oh.test(n)||Eo.test(n),parse:n=>Cs.test(n)?Cs.parse(n):Eo.test(n)?Eo.parse(n):oh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Cs.transform(n):Eo.transform(n),getAnimatableNone:n=>{const e=pn.parse(n);return e.alpha=0,pn.transform(e)}},ow=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function aw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Rp))==null?void 0:e.length)||0)+(((t=n.match(ow))==null?void 0:t.length)||0)>0}const I_="number",U_="color",lw="var",cw="var(",Z0="${}",uw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Po(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(uw,f=>(pn.test(f)?(r.color.push(a),o.push(U_),t.push(pn.parse(f))):f.startsWith(cw)?(r.var.push(a),o.push(lw),t.push(f)):(r.number.push(a),o.push(I_),t.push(parseFloat(f))),++a,Z0)).split(Z0);return{values:t,split:u,indexes:r,types:o}}function dw(n){return Po(n).values}function F_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===I_?o+=Na(r[a]):c===U_?o+=pn.transform(r[a]):o+=r[a]}return o}}function fw(n){return F_(Po(n))}const hw=n=>typeof n=="number"?0:pn.test(n)?pn.getAnimatableNone(n):n,pw=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:hw(n);function mw(n){const e=Po(n);return F_(e)(e.values.map((r,o)=>pw(r,e.split[o])))}const Bi={test:aw,parse:dw,createTransformer:fw,getAnimatableNone:mw};function pf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function gw({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;o=pf(f,u,n+1/3),a=pf(f,u,n),c=pf(f,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function Jc(n,e){return t=>t>0?e:n}const Vt=(n,e,t)=>n+(e-n)*t,mf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},vw=[oh,Cs,Eo],xw=n=>vw.find(e=>e.test(n));function Q0(n){const e=xw(n);if(!e)return!1;let t=e.parse(n);return e===Eo&&(t=gw(t)),t}const J0=(n,e)=>{const t=Q0(n),r=Q0(e);if(!t||!r)return Jc(n,e);const o={...t};return a=>(o.red=mf(t.red,r.red,a),o.green=mf(t.green,r.green,a),o.blue=mf(t.blue,r.blue,a),o.alpha=Vt(t.alpha,r.alpha,a),Cs.transform(o))},ah=new Set(["none","hidden"]);function _w(n,e){return ah.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function yw(n,e){return t=>Vt(n,e,t)}function Dp(n){return typeof n=="number"?yw:typeof n=="string"?Cp(n)?Jc:pn.test(n)?J0:Ew:Array.isArray(n)?O_:typeof n=="object"?pn.test(n)?J0:Sw:Jc}function O_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Dp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function Sw(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Dp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function Mw(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],u=n.values[c]??0;t[o]=u,r[a]++}return t}const Ew=(n,e)=>{const t=Bi.createTransformer(e),r=Po(n),o=Po(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?ah.has(n)&&!o.values.length||ah.has(e)&&!r.values.length?_w(n,e):$a(O_(Mw(r,o),o.values),t):Jc(n,e)};function k_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Vt(n,e,t):Dp(n)(n,e)}const ww=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>At.update(e,t),stop:()=>Mi(e),now:()=>Cn.isProcessing?Cn.timestamp:Xn.now()}},B_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},eu=2e4;function Lp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<eu;)e+=t,r=n.next(e);return e>=eu?1/0:e}function Tw(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Lp(r),eu);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:Si(o)}}const sn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function lh(n,e){return n*Math.sqrt(1-e*e)}const Aw=12;function bw(n,e,t){let r=t;for(let o=1;o<Aw;o++)r=r-n(r)/e(r);return r}const gf=.001;function Cw({duration:n=sn.duration,bounce:e=sn.bounce,velocity:t=sn.velocity,mass:r=sn.mass}){let o,a,c=1-e;c=Vi(sn.minDamping,sn.maxDamping,c),n=Vi(sn.minDuration,sn.maxDuration,Si(n)),c<1?(o=h=>{const m=h*c,v=m*n,g=m-t,_=lh(h,c),M=Math.exp(-v);return gf-g/_*M},a=h=>{const v=h*c*n,g=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=lh(Math.pow(h,2),c);return(-o(h)+gf>0?-1:1)*((g-_)*M)/T}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-gf+m*v},a=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const u=5/n,f=bw(o,a,u);if(n=ci(n),isNaN(f))return{stiffness:sn.stiffness,damping:sn.damping,duration:n};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const Rw=["duration","bounce"],Pw=["stiffness","damping","mass"];function ev(n,e){return e.some(t=>n[t]!==void 0)}function Dw(n){let e={velocity:sn.velocity,stiffness:sn.stiffness,damping:sn.damping,mass:sn.mass,isResolvedFromDuration:!1,...n};if(!ev(n,Pw)&&ev(n,Rw))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Vi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:sn.mass,stiffness:o,damping:a}}else{const t=Cw({...n,velocity:0});e={...e,...t,mass:sn.mass},e.isResolvedFromDuration=!0}return e}function tu(n=sn.visualDuration,e=sn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:f,damping:h,mass:m,duration:v,velocity:g,isResolvedFromDuration:_}=Dw({...t,velocity:-Si(t.velocity||0)}),M=g||0,T=h/(2*Math.sqrt(f*m)),y=c-a,S=Si(Math.sqrt(f/m)),R=Math.abs(y)<5;r||(r=R?sn.restSpeed.granular:sn.restSpeed.default),o||(o=R?sn.restDelta.granular:sn.restDelta.default);let L,P,O,F,E,C;if(T<1)O=lh(S,T),F=(M+T*S*y)/O,L=B=>{const U=Math.exp(-T*S*B);return c-U*(F*Math.sin(O*B)+y*Math.cos(O*B))},E=T*S*F+y*O,C=T*S*y-F*O,P=B=>Math.exp(-T*S*B)*(E*Math.sin(O*B)+C*Math.cos(O*B));else if(T===1){L=U=>c-Math.exp(-S*U)*(y+(M+S*y)*U);const B=M+S*y;P=U=>Math.exp(-S*U)*(S*B*U-M)}else{const B=S*Math.sqrt(T*T-1);L=V=>{const J=Math.exp(-T*S*V),le=Math.min(B*V,300);return c-J*((M+T*S*y)*Math.sinh(le)+B*y*Math.cosh(le))/B};const U=(M+T*S*y)/B,ee=T*S*U-y*B,fe=T*S*y-U*B;P=V=>{const J=Math.exp(-T*S*V),le=Math.min(B*V,300);return J*(ee*Math.sinh(le)+fe*Math.cosh(le))}}const Y={calculatedDuration:_&&v||null,velocity:B=>ci(P(B)),next:B=>{if(!_&&T<1){const ee=Math.exp(-T*S*B),fe=Math.sin(O*B),V=Math.cos(O*B),J=c-ee*(F*fe+y*V),le=ci(ee*(E*fe+C*V));return u.done=Math.abs(le)<=r&&Math.abs(c-J)<=o,u.value=u.done?c:J,u}const U=L(B);if(_)u.done=B>=v;else{const ee=ci(P(B));u.done=Math.abs(ee)<=r&&Math.abs(c-U)<=o}return u.value=u.done?c:U,u},toString:()=>{const B=Math.min(Lp(Y),eu),U=B_(ee=>Y.next(B*ee).value,B,30);return B+"ms "+U},toTransition:()=>{}};return Y}tu.applyToOptions=n=>{const e=Tw(n,100,tu);return n.ease=e.ease,n.duration=ci(e.duration),n.type="keyframes",n};const Lw=5;function z_(n,e,t){const r=Math.max(e-Lw,0);return Tp(t-n(r),e-r)}function ch({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:f,restDelta:h=.5,restSpeed:m}){const v=n[0],g={done:!1,value:v},_=C=>u!==void 0&&C<u||f!==void 0&&C>f,M=C=>u===void 0?f:f===void 0||Math.abs(u-C)<Math.abs(f-C)?u:f;let T=t*e;const y=v+T,S=c===void 0?y:c(y);S!==y&&(T=S-v);const R=C=>-T*Math.exp(-C/r),L=C=>S+R(C),P=C=>{const Y=R(C),B=L(C);g.done=Math.abs(Y)<=h,g.value=g.done?S:B};let O,F;const E=C=>{_(g.value)&&(O=C,F=tu({keyframes:[g.value,M(g.value)],velocity:z_(L,C,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:m}))};return E(0),{calculatedDuration:null,next:C=>{let Y=!1;return!F&&O===void 0&&(Y=!0,P(C),E(C)),O!==void 0&&C>=O?F.next(C-O):(!Y&&P(C),g)}}}function Nw(n,e,t){const r=[],o=t||ts.mix||k_,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||ti:e;u=$a(f,u)}r.push(u)}return r}function Np(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(_u(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=Nw(e,r,o),f=u.length,h=m=>{if(c&&m<n[0])return e[0];let v=0;if(f>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const g=Ro(n[v],n[v+1],m);return u[v](g)};return t?m=>h(Vi(n[0],n[a-1],m)):h}function Iw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ro(0,e,r);n.push(Vt(t,1,o))}}function V_(n){const e=[0];return Iw(e,n.length-1),e}function Uw(n,e){return n.map(t=>t*e)}function Fw(n,e){return n.map(()=>e||C_).splice(0,n.length-1)}function Ia({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=jE(r)?r.map(Y0):Y0(r),a={done:!1,value:e[0]},c=Uw(t&&t.length===e.length?t:V_(e),n),u=Np(c,e,{ease:Array.isArray(o)?o:Fw(e,o)});return{calculatedDuration:n,next:f=>(a.value=u(f),a.done=f>=n,a)}}const Ow=n=>n!==null;function yu(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(Ow),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||r===void 0?a[u]:r}const kw={decay:ch,inertia:ch,tween:Ia,keyframes:Ia,spring:tu};function H_(n){typeof n.type=="string"&&(n.type=kw[n.type])}class Ip{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Bw=n=>n/100;class nu extends Ip{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Xn.now()&&this.tick(Xn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;H_(e);const{type:t=Ia,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const f=t||Ia;f!==Ia&&typeof u[0]!="number"&&(this.mixKeyframes=$a(Bw,k_(u[0],u[1])),u=[0,100]);const h=f({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Lp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:f}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:g,repeatDelay:_,type:M,onUpdate:T,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let L=this.currentTime,P=r;if(v){const C=Math.min(this.currentTime,o)/u;let Y=Math.floor(C),B=C%1;!B&&C>=1&&(B=1),B===1&&Y--,Y=Math.min(Y,v+1),!!(Y%2)&&(g==="reverse"?(B=1-B,_&&(B-=_/u)):g==="mirror"&&(P=c)),L=Vi(0,1,B)*u}let O;R?(this.delayState.value=m[0],O=this.delayState):O=P.next(L),a&&!R&&(O.value=a(O.value));let{done:F}=O;!R&&f!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return E&&M!==ch&&(O.value=yu(m,this.options,y,this.speed)),T&&T(O.value),E&&this.finish(),O}then(e,t){return this.finished.then(e,t)}get duration(){return Si(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Si(e)}get time(){return Si(this.currentTime)}set time(e){e=ci(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return z_(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Xn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Si(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=ww,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Xn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function zw(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Rs=n=>n*180/Math.PI,uh=n=>{const e=Rs(Math.atan2(n[1],n[0]));return dh(e)},Vw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:uh,rotateZ:uh,skewX:n=>Rs(Math.atan(n[1])),skewY:n=>Rs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},dh=n=>(n=n%360,n<0&&(n+=360),n),tv=uh,nv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),iv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Hw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:nv,scaleY:iv,scale:n=>(nv(n)+iv(n))/2,rotateX:n=>dh(Rs(Math.atan2(n[6],n[5]))),rotateY:n=>dh(Rs(Math.atan2(-n[2],n[0]))),rotateZ:tv,rotate:tv,skewX:n=>Rs(Math.atan(n[4])),skewY:n=>Rs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function fh(n){return n.includes("scale")?1:0}function hh(n,e){if(!n||n==="none")return fh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=Hw,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Vw,o=u}if(!o)return fh(e);const a=r[e],c=o[1].split(",").map(Ww);return typeof a=="function"?a(c):c[a]}const Gw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return hh(t,e)};function Ww(n){return parseFloat(n.trim())}const Oo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ko=new Set([...Oo,"pathRotation"]),rv=n=>n===Fo||n===Je,Xw=new Set(["x","y","z"]),jw=Oo.filter(n=>!Xw.has(n));function $w(n){const e=[];return jw.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Zr={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>hh(e,"x"),y:(n,{transform:e})=>hh(e,"y")};Zr.translateX=Zr.x;Zr.translateY=Zr.y;const Ps=new Set;let ph=!1,mh=!1,gh=!1;function G_(){if(mh){const n=Array.from(Ps).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=$w(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))==null||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}mh=!1,ph=!1,Ps.forEach(n=>n.complete(gh)),Ps.clear()}function W_(){Ps.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(mh=!0)})}function Yw(){gh=!0,W_(),G_(),gh=!1}class Up{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Ps.add(this),ph||(ph=!0,At.read(W_),At.resolveKeyframes(G_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}zw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ps.delete(this)}cancel(){this.state==="scheduled"&&(Ps.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qw=n=>n.startsWith("--");function X_(n,e,t){qw(e)?n.style.setProperty(e,t):n.style[e]=t}const Kw={};function Fp(n,e){const t=__(n);return()=>Kw[e]??t()}const Op=Fp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),j_=Fp(()=>window.ViewTimeline!==void 0,"viewTimeline"),$_=Fp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ra=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,sv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ra([0,.65,.55,1]),circOut:Ra([.55,0,1,.45]),backIn:Ra([.31,.01,.66,-.59]),backOut:Ra([.33,1.53,.69,.99])};function Y_(n,e){if(n)return typeof n=="function"?$_()?B_(n,e):"ease-out":R_(n)?Ra(n):Array.isArray(n)?n.map(t=>Y_(t,e)||sv.easeOut):sv[n]}function Zw(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:f}={},h=void 0){const m={[e]:t};f&&(m.offset=f);const v=Y_(u,o);Array.isArray(v)&&(m.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(m,g)}function q_(n){return typeof n=="function"&&"applyToOptions"in n}function Qw({type:n,...e}){return q_(n)&&$_()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class K_ extends Ip{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:f}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,_u(typeof e.type!="string");const h=Qw(e);this.animation=Zw(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=yu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(m),X_(t,r,m),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return Si(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Si(e)}get time(){return Si(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ci(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Op()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),ti):o(this)}}const Z_={anticipate:T_,backInOut:w_,circInOut:b_};function Jw(n){return n in Z_}function e1(n){typeof n.ease=="string"&&Jw(n.ease)&&(n.ease=Z_[n.ease])}const vf=10;class t1 extends K_{constructor(e){e1(e),H_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new nu({...c,autoplay:!1}),f=Math.max(vf,Xn.now()-this.startTime),h=Vi(0,vf,f-vf),m=u.sample(f).value,{name:v}=this.options;a&&v&&X_(a,v,m),t.setWithVelocity(u.sample(Math.max(0,f-h)).value,m,h),u.stop()}}const ov=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Bi.test(n)||n==="0")&&!n.startsWith("url("));function n1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function i1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=ov(o,e),u=ov(a,e);return!c||!u?!1:n1(n)||(t==="spring"||q_(t))&&r}function vh(n){n.duration=0,n.type="keyframes"}const Q_=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),r1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function s1(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&r1.test(n[e]))return!0;return!1}const o1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),a1=__(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function l1(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:u}=n,f=(v=e==null?void 0:e.owner)==null?void 0:v.current;if(!(f instanceof HTMLElement)&&!(f instanceof SVGElement))return!1;const{onUpdate:h,transformTemplate:m}=e.owner.getProps();return a1()&&t&&(Q_.has(t)||o1.has(t)&&s1(u))&&(t!=="transform"||!m)&&!h&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const c1=40;class u1 extends Ip{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:f,motionValue:h,element:m,...v}){var M;super(),this.stop=()=>{var T,y;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Xn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:f,motionValue:h,element:m,...v},_=(m==null?void 0:m.KeyframeResolver)||Up;this.keyframeResolver=new _(u,(T,y,S)=>this.onKeyframesResolved(T,y,g,!S),f,h,m),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var S,R;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:f,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Xn.now();let v=!0;i1(e,a,c,u)||(v=!1,(ts.instantAnimations||!f)&&(m==null||m(yu(e,r,t))),e[0]=e[e.length-1],vh(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>c1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&l1(_),T=(R=(S=_.motionValue)==null?void 0:S.owner)==null?void 0:R.current;let y;if(M)try{y=new t1({..._,element:T})}catch{y=new nu(_)}else y=new nu(_);y.finished.then(()=>{this.notifyFinished()}).catch(ti),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),Yw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function J_(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:u-a*r}const av=30,d1=n=>!isNaN(parseFloat(n)),Ua={current:void 0};class f1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Xn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Xn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=d1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new wp);const r=this.events[e].add(t);return e==="change"?()=>{r(),At.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ua.current&&Ua.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Xn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>av)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,av);return Tp(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Oi(n,e){return new f1(n,e)}function ey(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function kp(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?ey(t,n):t}const h1={type:"spring",stiffness:500,damping:25,restSpeed:10},p1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),m1={type:"keyframes",duration:.8},g1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},v1=(n,{keyframes:e})=>e.length>2?m1:ko.has(n)?n.startsWith("scale")?p1(e[1]):h1:g1,x1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function _1(n){for(const e in n)if(!x1.has(e))return!0;return!1}const Bp=(n,e,t,r={},o,a)=>c=>{const u=kp(r,n)||{},f=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ci(f);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};_1(u)||Object.assign(m,v1(n,m)),m.duration&&(m.duration=ci(m.duration)),m.repeatDelay&&(m.repeatDelay=ci(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(vh(m),m.delay===0&&(v=!0)),(ts.instantAnimations||ts.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(v=!0,vh(m),m.delay=0),m.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const g=yu(m.keyframes,u);if(g!==void 0){At.update(()=>{m.onUpdate(g),m.onComplete()});return}}return u.isSync?new nu(m):new u1(m)},y1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function S1(n){const e=y1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function ty(n,e,t=1){const[r,o]=S1(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return g_(c)?parseFloat(c):c}return Cp(o)?ty(o,e,t+1):o}function lv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function zp(n,e,t,r){if(typeof e=="function"){const[o,a]=lv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=lv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Ds(n,e,t){const r=n.getProps();return zp(r,e,t!==void 0?t:r.custom,n)}const ny=new Set(["width","height","top","left","right","bottom",...Oo]),xh=n=>Array.isArray(n);function M1(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Oi(t))}function E1(n){return xh(n)?n[n.length-1]||0:n}function w1(n,e){const t=Ds(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=E1(a[c]);M1(n,c,u)}}const Ln=n=>!!(n&&n.getVelocity);function T1(n){return!!(Ln(n)&&n.add)}function _h(n,e){const t=n.getValue("willChange");if(T1(t))return t.add(e);if(!t&&ts.WillChange){const r=new ts.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Vp(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const A1="framerAppearId",iy="data-"+Vp(A1);function ry(n){return n.props[iy]}function b1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function sy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const f=n.getDefaultTransition();a=a?ey(a,f):f;const h=a==null?void 0:a.reduceMotion,m=a==null?void 0:a.skipAnimations;r&&(a=r);const v=[],g=o&&n.animationState&&n.animationState.getState()[o],_=a==null?void 0:a.path;_&&_.animateVisualElement(n,u,a,t,v);for(const M in u){const T=n.getValue(M,n.latestValues[M]??null),y=u[M];if(y===void 0||g&&b1(g,M))continue;const S={delay:t,...kp(a||{},M)};m&&(S.skipAnimations=!0);const R=T.get();if(R!==void 0&&!T.isAnimating()&&!Array.isArray(y)&&y===R&&!S.velocity){At.update(()=>T.set(y));continue}let L=!1;if(window.MotionHandoffAnimation){const F=ry(n);if(F){const E=window.MotionHandoffAnimation(F,M,At);E!==null&&(S.startTime=E,L=!0)}}_h(n,M);const P=h??n.shouldReduceMotion;T.start(Bp(M,T,y,P&&ny.has(M)?{type:!1}:S,n,L));const O=T.animation;O&&v.push(O)}if(c){const M=()=>At.update(()=>{c&&w1(n,c)});v.length?Promise.all(v).then(M):M()}return v}function yh(n,e,t={}){var f;const r=Ds(n,e,t.type==="exit"?(f=n.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(sy(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:g}=o;return C1(n,e,h,m,v,g,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,m]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>m())}else return Promise.all([a(),c(t.delay)])}function C1(n,e,t=0,r=0,o=0,a=1,c){const u=[];for(const f of n.variantChildren)f.notify("AnimationStart",e),u.push(yh(f,e,{...c,delay:t+(typeof r=="function"?0:r)+J_(n.variantChildren,f,r,o,a)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(u)}function R1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>yh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=yh(n,e,t);else{const o=typeof e=="function"?Ds(n,e,t.custom):e;r=Promise.all(sy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const P1={test:n=>n==="auto",parse:n=>n},oy=n=>e=>e.test(n),ay=[Fo,Je,rr,Sr,sw,rw,P1],cv=n=>ay.find(oy(n));function D1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||x_(n):!0}const L1=new Set(["brightness","contrast","saturate","opacity"]);function N1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Rp)||[];if(!r)return n;const o=t.replace(r,"");let a=L1.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const I1=/\b([a-z-]*)\(.*?\)/gu,Sh={...Bi,getAnimatableNone:n=>{const e=n.match(I1);return e?e.map(N1).join(" "):n}},Mh={...Bi,getAnimatableNone:n=>{const e=Bi.parse(n);return Bi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},uv={...Fo,transform:Math.round},U1={rotate:Sr,pathRotation:Sr,rotateX:Sr,rotateY:Sr,rotateZ:Sr,scale:cc,scaleX:cc,scaleY:cc,scaleZ:cc,skew:Sr,skewX:Sr,skewY:Sr,distance:Je,translateX:Je,translateY:Je,translateZ:Je,x:Je,y:Je,z:Je,perspective:Je,transformPerspective:Je,opacity:za,originX:K0,originY:K0,originZ:Je},iu={borderWidth:Je,borderTopWidth:Je,borderRightWidth:Je,borderBottomWidth:Je,borderLeftWidth:Je,borderRadius:Je,borderTopLeftRadius:Je,borderTopRightRadius:Je,borderBottomRightRadius:Je,borderBottomLeftRadius:Je,width:Je,maxWidth:Je,height:Je,maxHeight:Je,top:Je,right:Je,bottom:Je,left:Je,inset:Je,insetBlock:Je,insetBlockStart:Je,insetBlockEnd:Je,insetInline:Je,insetInlineStart:Je,insetInlineEnd:Je,padding:Je,paddingTop:Je,paddingRight:Je,paddingBottom:Je,paddingLeft:Je,paddingBlock:Je,paddingBlockStart:Je,paddingBlockEnd:Je,paddingInline:Je,paddingInlineStart:Je,paddingInlineEnd:Je,margin:Je,marginTop:Je,marginRight:Je,marginBottom:Je,marginLeft:Je,marginBlock:Je,marginBlockStart:Je,marginBlockEnd:Je,marginInline:Je,marginInlineStart:Je,marginInlineEnd:Je,fontSize:Je,backgroundPositionX:Je,backgroundPositionY:Je,...U1,zIndex:uv,fillOpacity:za,strokeOpacity:za,numOctaves:uv},F1={...iu,color:pn,backgroundColor:pn,outlineColor:pn,fill:pn,stroke:pn,borderColor:pn,borderTopColor:pn,borderRightColor:pn,borderBottomColor:pn,borderLeftColor:pn,filter:Sh,WebkitFilter:Sh,mask:Mh,WebkitMask:Mh},ly=n=>F1[n],O1=new Set([Sh,Mh]);function cy(n,e){let t=ly(n);return O1.has(t)||(t=Bi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const k1=new Set(["auto","none","0"]);function B1(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!k1.has(a)&&Po(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=cy(t,o)}class z1 extends Up{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),Cp(v))){const g=ty(v,t.current);g!==void 0&&(e[m]=g),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!ny.has(r)||e.length!==2)return;const[o,a]=e,c=cv(o),u=cv(a),f=q0(o),h=q0(a);if(f!==h&&Zr[r]){this.needsMeasurement=!0;return}if(c!==u)if(rv(c)&&rv(u))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else Zr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||D1(e[o]))&&r.push(o);r.length&&B1(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=Zr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([f,h])=>{e.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Hp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function uy(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Eh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Fa(n){return v_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Do,cancel:dy}=P_(queueMicrotask,!1),Ii={x:!1,y:!1};function fy(){return Ii.x||Ii.y}function V1(n){return n==="x"||n==="y"?Ii[n]?null:(Ii[n]=!0,()=>{Ii[n]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function hy(n,e){const t=uy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function H1(n){return!(n.pointerType==="touch"||fy())}function G1(n,e,t={}){const[r,o,a]=hy(n,t);return r.forEach(c=>{let u=!1,f=!1,h;const m=()=>{c.removeEventListener("pointerleave",M)},v=y=>{h&&(h(y),h=void 0),m()},g=y=>{u=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),f&&(f=!1,v(y))},_=()=>{u=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=y=>{if(y.pointerType!=="touch"){if(u){f=!0;return}v(y)}},T=y=>{if(!H1(y))return;f=!1;const S=e(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",T,o),c.addEventListener("pointerdown",_,o)}),a}const py=(n,e)=>e?n===e?!0:py(n,e.parentElement):!1,Gp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,W1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function X1(n){return W1.has(n.tagName)||n.isContentEditable===!0}const j1=new Set(["INPUT","SELECT","TEXTAREA"]);function $1(n){return j1.has(n.tagName)||n.isContentEditable===!0}const Bc=new WeakSet;function dv(n){return e=>{e.key==="Enter"&&n(e)}}function xf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Y1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=dv(()=>{if(Bc.has(t))return;xf(t,"down");const o=dv(()=>{xf(t,"up")}),a=()=>xf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function fv(n){return Gp(n)&&!fy()}const hv=new WeakSet;function q1(n,e,t={}){const[r,o,a]=hy(n,t),c=u=>{const f=u.currentTarget;if(!fv(u)||hv.has(u))return;Bc.add(f),t.stopPropagation&&hv.add(u);const h=e(f,u),m={...o,capture:!0},v=(M,T)=>{window.removeEventListener("pointerup",g,m),window.removeEventListener("pointercancel",_,m),Bc.has(f)&&Bc.delete(f),fv(M)&&typeof h=="function"&&h(M,{success:T})},g=M=>{v(M,f===window||f===document||t.useGlobalTarget||py(f,M.target))},_=M=>{v(M,!1)};window.addEventListener("pointerup",g,m),window.addEventListener("pointercancel",_,m)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),Fa(u)&&(u.addEventListener("focus",h=>Y1(h,o)),!X1(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function Wp(n){return v_(n)&&"ownerSVGElement"in n}const zc=new WeakMap;let Yr;const my=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:Wp(r)&&"getBBox"in r?r.getBBox()[e]:r[t],K1=my("inline","width","offsetWidth"),Z1=my("block","height","offsetHeight");function Q1({target:n,borderBoxSize:e}){var t;(t=zc.get(n))==null||t.forEach(r=>{r(n,{get width(){return K1(n,e)},get height(){return Z1(n,e)}})})}function J1(n){n.forEach(Q1)}function eT(){typeof ResizeObserver>"u"||(Yr=new ResizeObserver(J1))}function tT(n,e){Yr||eT();const t=uy(n);return t.forEach(r=>{let o=zc.get(r);o||(o=new Set,zc.set(r,o)),o.add(e),Yr==null||Yr.observe(r)}),()=>{t.forEach(r=>{const o=zc.get(r);o==null||o.delete(e),o!=null&&o.size||Yr==null||Yr.unobserve(r)})}}const Vc=new Set;let wo;function nT(){wo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Vc.forEach(e=>e(n))},window.addEventListener("resize",wo)}function iT(n){return Vc.add(n),wo||nT(),()=>{Vc.delete(n),!Vc.size&&typeof wo=="function"&&(window.removeEventListener("resize",wo),wo=void 0)}}function wh(n,e){return typeof n=="function"?iT(n):tT(n,e)}function gy(n,e){let t;const r=()=>{const{currentTime:o}=e,c=(o===null?0:o.value)/100;t!==c&&n(c),t=c};return At.preUpdate(r,!0),()=>Mi(r)}function rT(n){return Wp(n)&&n.tagName==="svg"}function sT(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=Np(o,a,c);return e?u(r):u}const oT=[...ay,pn,Bi],aT=n=>oT.find(oy(n)),pv=()=>({translate:0,scale:1,origin:0,originPoint:0}),To=()=>({x:pv(),y:pv()}),mv=()=>({min:0,max:0}),_n=()=>({x:mv(),y:mv()}),lT=new WeakMap;function Su(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Va(n){return typeof n=="string"||Array.isArray(n)}const Xp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jp=["initial",...Xp];function Mu(n){return Su(n.animate)||jp.some(e=>Va(n[e]))}function vy(n){return!!(Mu(n)||n.variants)}function cT(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Ln(o))n.addValue(r,o);else if(Ln(a))n.addValue(r,Oi(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Oi(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Th={current:null},xy={current:!1},uT=typeof window<"u";function dT(){if(xy.current=!0,!!uT)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Th.current=n.matches;n.addEventListener("change",e),e()}else Th.current=!1}const gv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ru={};function _y(n){ru=n}function fT(){return ru}class hT{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Up,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Xn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,At.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=Mu(t),this.isVariantNode=vy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in g){const M=g[_];h[_]!==void 0&&Ln(M)&&M.set(h[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,lT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(xy.current||dT(),this.shouldReduceMotion=Th.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Mi(this.notifyUpdate),Mi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Q_.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:f,ease:h,duration:m}=t.accelerate,v=new K_({element:this.current,name:e,keyframes:u,times:f,ease:h,duration:ci(m)}),g=c(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=ko.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&At.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ru){const t=ru[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_n()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<gv.length;r++){const o=gv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=cT(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Oi(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(g_(r)||x_(r))?r=parseFloat(r):!aT(r)&&Bi.test(t)&&(r=cy(e,t)),this.setBaseTarget(e,Ln(r)?r.get():r)),Ln(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=zp(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Ln(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new wp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Do.render(this.render)}}class yy extends hT{constructor(){super(...arguments),this.KeyframeResolver=z1}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ln(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ss{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Sy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function pT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function mT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function _f(n){return n===void 0||n===1}function Ah({scale:n,scaleX:e,scaleY:t}){return!_f(n)||!_f(e)||!_f(t)}function bs(n){return Ah(n)||My(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function My(n){return vv(n.x)||vv(n.y)}function vv(n){return n&&n!=="0%"}function su(n,e,t){const r=n-t,o=e*r;return t+o}function xv(n,e,t,r,o){return o!==void 0&&(n=su(n,o,r)),su(n,t,r)+e}function bh(n,e=0,t=1,r,o){n.min=xv(n.min,e,t,r,o),n.max=xv(n.max,e,t,r,o)}function Ey(n,{x:e,y:t}){bh(n.x,e.translate,e.scale,e.originPoint),bh(n.y,t.translate,t.scale,t.originPoint)}const _v=.999999999999,yv=1.0000000000001;function gT(n,e,t,r=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let f=0;f<o;f++){a=t[f],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Ji(n.x,-a.scroll.offset.x),Ji(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Ey(n,c)),r&&bs(a.latestValues)&&Hc(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<yv&&e.x>_v&&(e.x=1),e.y<yv&&e.y>_v&&(e.y=1)}function Ji(n,e){n.min+=e,n.max+=e}function Sv(n,e,t,r,o=.5){const a=Vt(n.min,n.max,o);bh(n,e,t,a,r)}function Mv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Hc(n,e,t){const r=t??n;Sv(n.x,Mv(e.x,r.x),e.scaleX,e.scale,e.originX),Sv(n.y,Mv(e.y,r.y),e.scaleY,e.scale,e.originY)}function wy(n,e){return Sy(mT(n.getBoundingClientRect(),e))}function vT(n,e,t){const r=wy(n,t),{scroll:o}=e;return o&&(Ji(r.x,o.offset.x),Ji(r.y,o.offset.y)),r}const xT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_T=Oo.length;function yT(n,e,t){let r="",o=!0;for(let c=0;c<_T;c++){const u=Oo[c],f=n[u];if(f===void 0)continue;let h=!0;if(typeof f=="number")h=f===(u.startsWith("scale")?1:0);else{const m=parseFloat(f);h=u.startsWith("scale")?m===1:m===0}if(!h||t){const m=Eh(f,iu[u]);if(!h){o=!1;const v=xT[u]||u;r+=`${v}(${m}) `}t&&(e[u]=m)}}const a=n.pathRotation;return a&&(o=!1,r+=`rotate(${Eh(a,iu.pathRotation)}) `),r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function $p(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const f in e){const h=e[f];if(ko.has(f)){c=!0;continue}else if(L_(f)){o[f]=h;continue}else{const m=Eh(h,iu[f]);f.startsWith("origin")?(u=!0,a[f]=m):r[f]=m}}if(e.transform||(c||t?r.transform=yT(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:m=0}=a;r.transformOrigin=`${f} ${h} ${m}`}}function Ty(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function Ev(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ea={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Je.test(n))n=parseFloat(n);else return n;const t=Ev(n,e.target.x),r=Ev(n,e.target.y);return`${t}% ${r}%`}},ST={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Bi.parse(n);if(o.length>5)return r;const a=Bi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=f;const h=Vt(u,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},Ch={borderRadius:{...Ea,applyTo:[...Hp]},borderTopLeftRadius:Ea,borderTopRightRadius:Ea,borderBottomLeftRadius:Ea,borderBottomRightRadius:Ea,boxShadow:ST};function Ay(n,{layout:e,layoutId:t}){return ko.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ch[n]||n==="opacity")}function Yp(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const u in r)(Ln(r[u])||o&&Ln(o[u])||Ay(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=r[u]);return a}function MT(n){return window.getComputedStyle(n)}class ET extends yy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ty}mount(e){_u(!!e.style),super.mount(e)}readValueFromInstance(e,t){var r;if(ko.has(t))return(r=this.projection)!=null&&r.isProjecting?fh(t):Gw(e,t);{const o=MT(e),a=(L_(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return wy(e,t)}build(e,t,r){$p(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Yp(e,t,r)}}const wT={offset:"stroke-dashoffset",array:"stroke-dasharray"},TT={offset:"strokeDashoffset",array:"strokeDasharray"};function AT(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?wT:TT;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const bT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function by(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},f,h,m){if($p(n,u,h),f){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete v.transformBox);for(const _ of bT)v[_]!==void 0&&(g[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&AT(v,o,a,c,!1)}const Cy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ry=n=>typeof n=="string"&&n.toLowerCase()==="svg";function CT(n,e,t,r){Ty(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Cy.has(o)?o:Vp(o),e.attrs[o])}function Py(n,e,t){const r=Yp(n,e,t);for(const o in n)if(Ln(n[o])||Ln(e[o])){const a=Oo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class RT extends yy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=_n}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ko.has(t)){const r=ly(t);return r&&r.default||0}return t=Cy.has(t)?t:Vp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Py(e,t,r)}build(e,t,r){by(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){CT(e,t,r,o)}mount(e){this.isSVGTag=Ry(e.tagName),super.mount(e)}}const PT=jp.length;function Dy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Dy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<PT;t++){const r=jp[t],o=n.props[r];(Va(o)||o===!1)&&(e[r]=o)}return e}function Ly(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const DT=[...Xp].reverse(),LT=Xp.length;function NT(n){return e=>Promise.all(e.map(({animation:t,options:r})=>R1(n,t,r)))}function IT(n){let e=NT(n),t=wv(),r=!0,o=!1;const a=h=>(m,v)=>{var _;const g=Ds(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(g){const{transition:M,transitionEnd:T,...y}=g;m={...m,...y,...T}}return m};function c(h){e=h(n)}function u(h){const{props:m}=n,v=Dy(n.parent)||{},g=[],_=new Set;let M={},T=1/0;for(let S=0;S<LT;S++){const R=DT[S],L=t[R],P=m[R]!==void 0?m[R]:v[R],O=Va(P),F=R===h?L.isActive:null;F===!1&&(T=S);let E=P===v[R]&&P!==m[R]&&O;if(E&&(r||o)&&n.manuallyAnimateOnMount&&(E=!1),L.protectedKeys={...M},!L.isActive&&F===null||!P&&!L.prevProp||Su(P)||typeof P=="boolean")continue;if(R==="exit"&&L.isActive&&F!==!0){L.prevResolvedValues&&(M={...M,...L.prevResolvedValues});continue}const C=UT(L.prevProp,P);let Y=C||R===h&&L.isActive&&!E&&O||S>T&&O,B=!1;const U=Array.isArray(P)?P:[P];let ee=U.reduce(a(R),{});F===!1&&(ee={});const{prevResolvedValues:fe={}}=L,V={...fe,...ee},J=G=>{Y=!0,_.has(G)&&(B=!0,_.delete(G)),L.needsAnimating[G]=!0;const H=n.getValue(G);H&&(H.liveStyle=!1)};for(const G in V){const H=ee[G],W=fe[G];if(M.hasOwnProperty(G))continue;let I=!1;xh(H)&&xh(W)?I=!Ly(H,W)||C:I=H!==W,I?H!=null?J(G):_.add(G):H!==void 0&&_.has(G)?J(G):L.protectedKeys[G]=!0}L.prevProp=P,L.prevResolvedValues=ee,L.isActive&&(M={...M,...ee}),(r||o)&&n.blockInitialAnimation&&(Y=!1);const le=E&&C;Y&&(!le||B)&&g.push(...U.map(G=>{const H={type:R};if(typeof G=="string"&&(r||o)&&!le&&n.manuallyAnimateOnMount&&n.parent){const{parent:W}=n,I=Ds(W,G);if(W.enteringChildren&&I){const{delayChildren:ne}=I.transition||{};H.delay=J_(W.enteringChildren,n,ne)}}return{animation:G,options:H}}))}if(_.size){const S={};if(typeof m.initial!="boolean"){const R=Ds(n,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(S.transition=R.transition)}_.forEach(R=>{const L=n.getBaseTarget(R),P=n.getValue(R);P&&(P.liveStyle=!0),S[R]=L??null}),g.push({animation:S})}let y=!!g.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(g):Promise.resolve()}function f(h,m){var g;if(t[h].isActive===m)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,m)}),t[h].isActive=m;const v=u(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>t,reset:()=>{t=wv(),o=!0}}}function UT(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Ly(e,n):!1}function Ms(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wv(){return{animate:Ms(!0),whileInView:Ms(),whileHover:Ms(),whileTap:Ms(),whileDrag:Ms(),whileFocus:Ms(),exit:Ms()}}function Rh(n,e){n.min=e.min,n.max=e.max}function Pi(n,e){Rh(n.x,e.x),Rh(n.y,e.y)}function Tv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const Ny=1e-4,FT=1-Ny,OT=1+Ny,Iy=.01,kT=0-Iy,BT=0+Iy;function jn(n){return n.max-n.min}function zT(n,e,t){return Math.abs(n-e)<=t}function Av(n,e,t,r=.5){n.origin=r,n.originPoint=Vt(e.min,e.max,n.origin),n.scale=jn(t)/jn(e),n.translate=Vt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=FT&&n.scale<=OT||isNaN(n.scale))&&(n.scale=1),(n.translate>=kT&&n.translate<=BT||isNaN(n.translate))&&(n.translate=0)}function Oa(n,e,t,r){Av(n.x,e.x,t.x,r?r.originX:void 0),Av(n.y,e.y,t.y,r?r.originY:void 0)}function bv(n,e,t,r=0){const o=r?Vt(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+jn(e)}function VT(n,e,t,r){bv(n.x,e.x,t.x,r==null?void 0:r.x),bv(n.y,e.y,t.y,r==null?void 0:r.y)}function Cv(n,e,t,r=0){const o=r?Vt(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+jn(e)}function ou(n,e,t,r){Cv(n.x,e.x,t.x,r==null?void 0:r.x),Cv(n.y,e.y,t.y,r==null?void 0:r.y)}function Rv(n,e,t,r,o){return n-=e,n=su(n,1/t,r),o!==void 0&&(n=su(n,1/o,r)),n}function HT(n,e=0,t=1,r=.5,o,a=n,c=n){if(rr.test(e)&&(e=parseFloat(e),e=Vt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Vt(a.min,a.max,r);n===a&&(u-=e),n.min=Rv(n.min,e,t,u,o),n.max=Rv(n.max,e,t,u,o)}function Pv(n,e,[t,r,o],a,c){HT(n,e[t],e[r],e[o],e.scale,a,c)}const GT=["x","scaleX","originX"],WT=["y","scaleY","originY"];function Dv(n,e,t,r){Pv(n.x,e,GT,t?t.x:void 0,r?r.x:void 0),Pv(n.y,e,WT,t?t.y:void 0,r?r.y:void 0)}function Lv(n){return n.translate===0&&n.scale===1}function Uy(n){return Lv(n.x)&&Lv(n.y)}function Nv(n,e){return n.min===e.min&&n.max===e.max}function XT(n,e){return Nv(n.x,e.x)&&Nv(n.y,e.y)}function Iv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Fy(n,e){return Iv(n.x,e.x)&&Iv(n.y,e.y)}function Uv(n){return jn(n.x)/jn(n.y)}function Fv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Qi(n){return[n("x"),n("y")]}function jT(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,pathRotation:v,rotateX:g,rotateY:_,skewX:M,skewY:T}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotate(${v}deg) `),g&&(r+=`rotateX(${g}deg) `),_&&(r+=`rotateY(${_}deg) `),M&&(r+=`skewX(${M}deg) `),T&&(r+=`skewY(${T}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(r+=`scale(${u}, ${f})`),r||"none"}const $T=Hp.length,Ov=n=>typeof n=="string"?parseFloat(n):n,kv=n=>typeof n=="number"||Je.test(n);function YT(n,e,t,r,o,a){o?(n.opacity=Vt(0,t.opacity??1,qT(r)),n.opacityExit=Vt(e.opacity??1,0,KT(r))):a&&(n.opacity=Vt(e.opacity??1,t.opacity??1,r));for(let c=0;c<$T;c++){const u=Hp[c];let f=Bv(e,u),h=Bv(t,u);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||kv(f)===kv(h)?(n[u]=Math.max(Vt(Ov(f),Ov(h),r),0),(rr.test(h)||rr.test(f))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Vt(e.rotate||0,t.rotate||0,r))}function Bv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const qT=Oy(0,.5,A_),KT=Oy(.5,.95,ti);function Oy(n,e,t){return r=>r<n?0:r>e?1:t(Ro(n,e,r))}function ZT(n,e,t){const r=Ln(n)?n:Oi(n);return r.start(Bp("",r,e,t)),r.animation}function Ha(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}const QT=(n,e)=>n.depth-e.depth;class JT{constructor(){this.children=[],this.isDirty=!1}add(e){Ep(this.children,e),this.isDirty=!0}remove(e){Qc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(QT),this.isDirty=!1,this.children.forEach(e)}}function eA(n,e){const t=Xn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Mi(r),n(a-e))};return At.setup(r,!0),()=>Mi(r)}function Gc(n){return Ln(n)?n.get():n}class tA{constructor(){this.members=[]}add(e){Ep(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(Qc(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(Qc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},yf=["","X","Y","Z"],nA=1e3;let iA=0;function Sf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ky(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=ry(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",At,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ky(r)}function By({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=iA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(oA),this.nodes.forEach(fA),this.nodes.forEach(hA),this.nodes.forEach(aA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new JT)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new wp),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const f=this.eventHandlers.get(c);f&&f.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Wp(c)&&!rT(c),this.instance=c;const{layoutId:u,layout:f,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||u)&&(this.isLayoutDirty=!0),n){let m,v=0;const g=()=>this.root.updateBlockedByResize=!1;At.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,m&&m(),m=eA(g,250),Wc.hasAnimatedSinceResize&&(Wc.hasAnimatedSinceResize=!1,this.nodes.forEach(Hv)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||xA,{onLayoutAnimationStart:T,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!Fy(this.targetLayout,_),R=!v&&g;if(this.options.layoutRoot||this.resumeFrom||R||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...kp(M,"layout"),onPlay:T,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(m,R,L.path)}else v||Hv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ky(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const f=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),f&&this.nodes.forEach(cA),this.nodes.forEach(zv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Vv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(uA),this.nodes.forEach(dA),this.nodes.forEach(rA),this.nodes.forEach(sA)):this.nodes.forEach(Vv),this.clearAllSnapshots();const u=Xn.now();Cn.delta=Vi(0,1e3/60,u-Cn.timestamp),Cn.timestamp=u,Cn.isProcessing=!0,ff.update.process(Cn),ff.preRender.process(Cn),ff.render.process(Cn),Cn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Do.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(lA),this.sharedNodes.forEach(mA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,At.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!jn(this.snapshot.measuredBox.x)&&!jn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=_n()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Uy(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||bs(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return c&&(f=this.removeTransform(f)),_A(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return _n();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(yA))){const{scroll:m}=this.root;m&&(Ji(u.x,m.offset.x),Ji(u.y,m.offset.y))}return u}removeElementScroll(c){var f;const u=_n();if(Pi(u,c),(f=this.scroll)!=null&&f.wasRoot)return u;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:g}=m;m!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Pi(u,c),Ji(u.x,v.offset.x),Ji(u.y,v.offset.y))}return u}applyTransform(c,u=!1,f){var m,v;const h=f||_n();Pi(h,c);for(let g=0;g<this.path.length;g++){const _=this.path[g];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Ji(h.x,-_.scroll.offset.x),Ji(h.y,-_.scroll.offset.y)),bs(_.latestValues)&&Hc(h,_.latestValues,(m=_.layout)==null?void 0:m.layoutBox)}return bs(this.latestValues)&&Hc(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var f;const u=_n();Pi(u,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!bs(m.latestValues))continue;let v;m.instance&&(Ah(m.latestValues)&&m.updateSnapshot(),v=_n(),Pi(v,m.measurePageBox())),Dv(u,m.latestValues,(f=m.snapshot)==null?void 0:f.layoutBox,v)}return bs(this.latestValues)&&Dv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Cn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==u;if(!(c||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=Cn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=_n(),this.targetWithTransforms=_n()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Pi(this.target,this.layout.layoutBox),Ey(this.target,this.targetDelta)):Pi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ah(this.parent.latestValues)||My(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,f){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_n(),this.relativeTargetOrigin=_n(),ou(this.relativeTargetOrigin,u,f,this.options.layoutAnchor||void 0),Pi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let f=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(f=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Cn.timestamp&&(f=!1),f)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;Pi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;gT(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=_n());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Tv(this.prevProjectionDelta.x,this.projectionDelta.x),Tv(this.prevProjectionDelta.y,this.projectionDelta.y)),Oa(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Fv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=To(),this.projectionDelta=To(),this.projectionDeltaWithTransform=To()}setAnimationOrigin(c,u=!1,f){const h=this.snapshot,m=h?h.latestValues:{},v={...this.latestValues},g=To();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const _=_n(),M=h?h.source:void 0,T=this.layout?this.layout.source:void 0,y=M!==T,S=this.getStack(),R=!S||S.members.length<=1,L=!!(y&&!R&&this.options.crossfade===!0&&!this.path.some(vA));this.animationProgress=0;let P;const O=f==null?void 0:f.interpolateProjection(c);this.mixTargetDelta=F=>{const E=F/1e3,C=O==null?void 0:O(E);C?(g.x.translate=C.x,g.x.scale=Vt(c.x.scale,1,E),g.x.origin=c.x.origin,g.x.originPoint=c.x.originPoint,g.y.translate=C.y,g.y.scale=Vt(c.y.scale,1,E),g.y.origin=c.y.origin,g.y.originPoint=c.y.originPoint):(Gv(g.x,c.x,E),Gv(g.y,c.y,E)),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ou(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),gA(this.relativeTarget,this.relativeTargetOrigin,_,E),P&&XT(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=_n()),Pi(P,this.relativeTarget)),y&&(this.animationValues=v,YT(v,m,this.latestValues,E,L,R)),C&&C.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=C.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,f,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{Wc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Oi(0)),this.motionValue.jump(0,!1),this.currentAnimation=ZT(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:f,layout:h,latestValues:m}=c;if(!(!u||!f||!h)){if(this!==c&&this.layout&&h&&zy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||_n();const v=jn(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+v;const g=jn(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+g}Pi(u,f),Hc(u,m),Oa(this.projectionDeltaWithTransform,this.layoutCorrected,u,m)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new tA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const h={};f.z&&Sf("z",c,h,this.animationValues);for(let m=0;m<yf.length;m++)Sf(`rotate${yf[m]}`,c,h,this.animationValues),Sf(`skew${yf[m]}`,c,h,this.animationValues);c.render();for(const m in h)c.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=Gc(u==null?void 0:u.pointerEvents)||"",c.transform=f?f(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=Gc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!bs(this.latestValues)&&(c.transform=f?f({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=jT(this.projectionDeltaWithTransform,this.treeScale,m);f&&(v=f(m,v)),c.transform=v;const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in Ch){if(m[M]===void 0)continue;const{correct:T,applyTo:y,isCSSVariable:S}=Ch[M],R=v==="none"?m[M]:T(m[M],h);if(y){const L=y.length;for(let P=0;P<L;P++)c[y[P]]=R}else S?this.options.visualElement.renderState.vars[M]=R:c[M]=R}this.options.layoutId&&(c.pointerEvents=h===this?Gc(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(zv),this.root.sharedNodes.clear()}}}function rA(n){n.updateLayout()}function sA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Qi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=jn(g);g.min=r[v].min,g.max=g.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";Rh(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else zy(a,e.layoutBox,r)&&Qi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=jn(r[v]);g.max=g.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const u=To();Oa(u,r,e.layoutBox);const f=To();c?Oa(f,n.applyTransform(o,!0),e.measuredBox):Oa(f,r,e.layoutBox);const h=!Uy(u);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:_}=v;if(g&&_){const M=n.options.layoutAnchor||void 0,T=_n();ou(T,e.layoutBox,g.layoutBox,M);const y=_n();ou(y,r,_.layoutBox,M),Fy(T,y)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=T,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:f,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function oA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function aA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function lA(n){n.clearSnapshot()}function zv(n){n.clearMeasurements()}function cA(n){n.isLayoutDirty=!0,n.updateLayout()}function Vv(n){n.isLayoutDirty=!1}function uA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function dA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Hv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function fA(n){n.resolveTargetDelta()}function hA(n){n.calcProjection()}function pA(n){n.resetSkewAndRotation()}function mA(n){n.removeLeadSnapshot()}function Gv(n,e,t){n.translate=Vt(e.translate,0,t),n.scale=Vt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Wv(n,e,t,r){n.min=Vt(e.min,t.min,r),n.max=Vt(e.max,t.max,r)}function gA(n,e,t,r){Wv(n.x,e.x,t.x,r),Wv(n.y,e.y,t.y,r)}function vA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const xA={duration:.45,ease:[.4,0,.1,1]},Xv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),jv=Xv("applewebkit/")&&!Xv("chrome/")?Math.round:ti;function $v(n){n.min=jv(n.min),n.max=jv(n.max)}function _A(n){$v(n.x),$v(n.y)}function zy(n,e,t){return n==="position"||n==="preserve-aspect"&&!zT(Uv(e),Uv(t),.2)}function yA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const SA=By({attachResizeListener:(n,e)=>Ha(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Mf={current:void 0},Vy=By({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Mf.current){const n=new SA({});n.mount(window),n.setOptions({layoutScroll:!0}),Mf.current=n}return Mf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Eu=Pe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Yv(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function MA(...n){return e=>{let t=!1;const r=n.map(o=>{const a=Yv(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Yv(n[o],null)}}}}function EA(...n){return Pe.useCallback(MA(...n),n)}class wA extends Pe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Fa(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=Fa(r)&&r.offsetWidth||0,a=Fa(r)&&r.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function TA({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var g;const c=Pe.useId(),u=Pe.useRef(null),f=Pe.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=Pe.useContext(Eu),m=a!==!1?((g=n.props)==null?void 0:g.ref)??(n==null?void 0:n.ref):void 0,v=EA(u,m);return Pe.useInsertionEffect(()=>{const{width:_,height:M,top:T,left:y,right:S,bottom:R,direction:L}=f.current;if(e||a===!1||!u.current||!_||!M)return;const P=L==="rtl",O=t==="left"?P?`right: ${S}`:`left: ${y}`:P?`left: ${y}`:`right: ${S}`,F=r==="bottom"?`bottom: ${R}`:`top: ${T}`;u.current.dataset.motionPopId=c;const E=document.createElement("style");h&&(E.nonce=h);const C=o??document.head;return C.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${O}px !important;
            ${F}px !important;
          }
        `),()=>{var Y;(Y=u.current)==null||Y.removeAttribute("data-motion-pop-id"),C.contains(E)&&C.removeChild(E)}},[e]),D.jsx(wA,{isPresent:e,childRef:u,sizeRef:f,pop:a,children:a===!1?n:Pe.cloneElement(n,{ref:v})})}const AA=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:f,root:h})=>{const m=es(bA),v=Pe.useId(),g=Pe.useRef(t),_=Pe.useRef(r);ja(()=>{g.current=t,_.current=r});let M=!0,T=Pe.useMemo(()=>(M=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:y=>{m.set(y,!0);for(const S of m.values())if(!S)return;r&&r()},register:y=>(m.set(y,!1),()=>{var S;m.delete(y),!g.current&&!m.size&&((S=_.current)==null||S.call(_))})}),[t,m,r]);return a&&M&&(T={...T}),Pe.useMemo(()=>{m.forEach((y,S)=>m.set(S,!1))},[t]),Pe.useEffect(()=>{!t&&!m.size&&r&&r()},[t]),n=D.jsx(TA,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:f,root:h,children:n}),D.jsx(xu.Provider,{value:T,children:n})};function bA(){return new Map}function Hy(n=!0){const e=Pe.useContext(xu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Pe.useId();Pe.useEffect(()=>{if(n)return o(a)},[n]);const c=Pe.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const uc=n=>n.key||"";function qv(n){const e=[];return Pe.Children.forEach(n,t=>{Pe.isValidElement(t)&&e.push(t)}),e}const qp=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:f="top",root:h})=>{const[m,v]=Hy(c),g=Pe.useMemo(()=>qv(n),[n]),_=c&&!m?[]:g.map(uc),M=Pe.useRef(!0),T=Pe.useRef(g),y=es(()=>new Map),S=Pe.useRef(new Set),[R,L]=Pe.useState(g),[P,O]=Pe.useState(g);ja(()=>{M.current=!1,T.current=g;for(let C=0;C<P.length;C++){const Y=uc(P[C]);_.includes(Y)?(y.delete(Y),S.current.delete(Y)):y.get(Y)!==!0&&y.set(Y,!1)}},[P,_.length,_.join("-")]);const F=[];if(g!==R){let C=[...g];for(let Y=0;Y<P.length;Y++){const B=P[Y],U=uc(B);_.includes(U)||(C.splice(Y,0,B),F.push(B))}return a==="wait"&&F.length&&(C=F),O(qv(C)),L(g),null}const{forceRender:E}=Pe.useContext(Mp);return D.jsx(D.Fragment,{children:P.map(C=>{const Y=uc(C),B=c&&!m?!1:g===P||_.includes(Y),U=()=>{if(S.current.has(Y))return;if(y.has(Y))S.current.add(Y),y.set(Y,!0);else return;let ee=!0;y.forEach(fe=>{fe||(ee=!1)}),ee&&(E==null||E(),O(T.current),c&&(v==null||v()),r&&r())};return D.jsx(AA,{isPresent:B,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:B?void 0:U,anchorX:u,anchorY:f,children:C},Y)})})},Gy=Pe.createContext({strict:!1}),Kv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Zv=!1;function CA(){if(Zv)return;const n={};for(const e in Kv)n[e]={isEnabled:t=>Kv[e].some(r=>!!t[r])};_y(n),Zv=!0}function Wy(){return CA(),fT()}function RA(n){const e=Wy();for(const t in n)e[t]={...e[t],...n[t]};_y(e)}const PA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function au(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||PA.has(n)}let Xy=n=>!au(n);function DA(n){typeof n=="function"&&(Xy=e=>e.startsWith("on")?!au(e):n(e))}try{DA(require("@emotion/is-prop-valid").default)}catch{}function LA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||Ln(n[o])||(Xy(o)||t===!0&&au(o)||!e&&!au(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const wu=Pe.createContext({});function NA(n,e){if(Mu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Va(t)?t:void 0,animate:Va(r)?r:void 0}}return n.inherit!==!1?e:{}}function IA(n){const{initial:e,animate:t}=NA(n,Pe.useContext(wu));return Pe.useMemo(()=>({initial:e,animate:t}),[Qv(e),Qv(t)])}function Qv(n){return Array.isArray(n)?n.join(" "):n}const Kp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function jy(n,e,t){for(const r in e)!Ln(e[r])&&!Ay(r,t)&&(n[r]=e[r])}function UA({transformTemplate:n},e){return Pe.useMemo(()=>{const t=Kp();return $p(t,e,n),Object.assign({},t.vars,t.style)},[e])}function FA(n,e){const t=n.style||{},r={};return jy(r,t,n),Object.assign(r,UA(n,e)),r}function OA(n,e){const t={},r=FA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const $y=()=>({...Kp(),attrs:{}});function kA(n,e,t,r){const o=Pe.useMemo(()=>{const a=$y();return by(a,e,Ry(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};jy(a,n.style,n),o.style={...a,...o.style}}return o}const BA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Zp(n){return typeof n!="string"||n.includes("-")?!1:!!(BA.indexOf(n)>-1||/[A-Z]/u.test(n))}function zA(n,e,t,{latestValues:r},o,a=!1,c){const f=(c??Zp(n)?kA:OA)(e,r,o,n),h=LA(e,typeof n=="string",a),m=n!==Pe.Fragment?{...h,...f,ref:t}:{},{children:v}=e,g=Pe.useMemo(()=>Ln(v)?v.get():v,[v]);return Pe.createElement(n,{...m,children:g})}function VA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:HA(t,r,o,n),renderState:e()}}function HA(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=Gc(a[g]);let{initial:c,animate:u}=n;const f=Mu(n),h=vy(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const v=m?u:c;if(v&&typeof v!="boolean"&&!Su(v)){const g=Array.isArray(v)?v:[v];for(let _=0;_<g.length;_++){const M=zp(n,g[_]);if(M){const{transitionEnd:T,transition:y,...S}=M;for(const R in S){let L=S[R];if(Array.isArray(L)){const P=m?L.length-1:0;L=L[P]}L!==null&&(o[R]=L)}for(const R in T)o[R]=T[R]}}}return o}const Yy=n=>(e,t)=>{const r=Pe.useContext(wu),o=Pe.useContext(xu),a=()=>VA(n,e,r,o);return t?a():es(a)},GA=Yy({scrapeMotionValuesFromProps:Yp,createRenderState:Kp}),WA=Yy({scrapeMotionValuesFromProps:Py,createRenderState:$y}),XA=Symbol.for("motionComponentSymbol");function jA(n,e,t){const r=Pe.useRef(t);Pe.useInsertionEffect(()=>{r.current=t});const o=Pe.useRef(null);return Pe.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=r.current;if(typeof c=="function")if(a){const f=c(a);typeof f=="function"&&(o.current=f)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const qy=Pe.createContext({});function So(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function $A(n,e,t,r,o,a){var L,P;const{visualElement:c}=Pe.useContext(wu),u=Pe.useContext(Gy),f=Pe.useContext(xu),h=Pe.useContext(Eu),m=h.reducedMotion,v=h.skipAnimations,g=Pe.useRef(null),_=Pe.useRef(!1);r=r||u.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:a}),_.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,T=Pe.useContext(qy);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&YA(g.current,t,o,T);const y=Pe.useRef(!1);Pe.useInsertionEffect(()=>{M&&y.current&&M.update(t,f)});const S=t[iy],R=Pe.useRef(!!S&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,S))&&((P=window.MotionHasOptimisedAnimation)==null?void 0:P.call(window,S)));return ja(()=>{_.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),R.current&&M.animationState&&M.animationState.animateChanges())}),Pe.useEffect(()=>{M&&(!R.current&&M.animationState&&M.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var O;(O=window.MotionHandoffMarkAsComplete)==null||O.call(window,S)}),R.current=!1),M.enteringChildren=void 0)}),M}function YA(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:f,layoutRoot:h,layoutAnchor:m,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ky(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&So(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:f,layoutRoot:h,layoutAnchor:m})}function Ky(n){if(n)return n.options.allowProjection!==!1?n.projection:Ky(n.parent)}function Ef(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&RA(r);const a=t?t==="svg":Zp(n),c=a?WA:GA;function u(h,m){let v;const g={...Pe.useContext(Eu),...h,layoutId:qA(h)},{isStatic:_}=g,M=IA(h),T=c(h,_);if(!_&&typeof window<"u"){KA();const y=ZA(g);v=y.MeasureLayout,M.visualElement=$A(n,T,g,o,y.ProjectionNode,a)}return D.jsxs(wu.Provider,{value:M,children:[v&&M.visualElement?D.jsx(v,{visualElement:M.visualElement,...g}):null,zA(n,h,jA(T,M.visualElement,m),T,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=Pe.forwardRef(u);return f[XA]=n,f}function qA({layoutId:n}){const e=Pe.useContext(Mp).id;return e&&n!==void 0?e+"-"+n:n}function KA(n,e){Pe.useContext(Gy).strict}function ZA(n){const e=Wy(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function QA(n,e){if(typeof Proxy>"u")return Ef;const t=new Map,r=(a,c)=>Ef(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Ef(c,void 0,n,e)),t.get(c))})}const JA=(n,e)=>e.isSVG??Zp(n)?new RT(e):new ET(e,{allowProjection:n!==Pe.Fragment});class eb extends ss{constructor(e){super(e),e.animationState||(e.animationState=IT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Su(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let tb=0;class nb extends ss{constructor(){super(...arguments),this.id=tb++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const f=Ds(this.node,c,u);if(f){const{transition:h,transitionEnd:m,...v}=f;for(const g in v)(a=this.node.getValue(g))==null||a.jump(v[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ib={animation:{Feature:eb},exit:{Feature:nb}};function Ka(n){return{point:{x:n.pageX,y:n.pageY}}}const rb=n=>e=>Gp(e)&&n(e,Ka(e));function ka(n,e,t,r){return Ha(n,e,rb(t),r)}const Zy=({current:n})=>n?n.ownerDocument.defaultView:null,Jv=(n,e)=>Math.abs(n-e);function sb(n,e){const t=Jv(n.x,e.x),r=Jv(n.y,e.y);return Math.sqrt(t**2+r**2)}const ex=new Set(["auto","scroll"]);class Qy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=dc(this.lastRawMoveEventInfo,this.transformPagePoint));const M=wf(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,y=sb(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!y)return;const{point:S}=M,{timestamp:R}=Cn;this.history.push({...S,timestamp:R});const{onStart:L,onMove:P}=this.handlers;T||(L&&L(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,M)},this.handlePointerMove=(M,T)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=T,this.lastMoveEventInfo=dc(T,this.transformPagePoint),At.update(this.updatePoint,!0)},this.handlePointerUp=(M,T)=>{this.end();const{onEnd:y,onSessionEnd:S,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=wf(M.type==="pointercancel"?this.lastMoveEventInfo:dc(T,this.transformPagePoint),this.history);this.startEvent&&y&&y(M,L),S&&S(M,L)},!Gp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const f=Ka(e),h=dc(f,this.transformPagePoint),{point:m}=h,{timestamp:v}=Cn;this.history=[{...m,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,wf(h,this.history));const _={passive:!0,capture:!0};this.removeListeners=$a(ka(this.contextWindow,"pointermove",this.handlePointerMove,_),ka(this.contextWindow,"pointerup",this.handlePointerUp,_),ka(this.contextWindow,"pointercancel",this.handlePointerUp,_)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(ex.has(r.overflowX)||ex.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),At.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Mi(this.updatePoint)}}function dc(n,e){return e?{point:e(n.point)}:n}function tx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function wf({point:n},e){return{point:n,delta:tx(n,Jy(e)),offset:tx(n,ob(e)),velocity:ab(e,.1)}}function ob(n){return n[0]}function Jy(n){return n[n.length-1]}function ab(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Jy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ci(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ci(e)*2&&(r=n[1]);const a=Si(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function lb(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Vt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Vt(t,n,r.max):Math.min(n,t)),n}function nx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function cb(n,{top:e,left:t,bottom:r,right:o}){return{x:nx(n.x,t,o),y:nx(n.y,e,r)}}function ix(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function ub(n,e){return{x:ix(n.x,e.x),y:ix(n.y,e.y)}}function db(n,e){let t=.5;const r=jn(n),o=jn(e);return o>r?t=Ro(e.min,e.max-r,n.min):r>o&&(t=Ro(n.min,n.max-o,e.min)),Vi(0,1,t)}function fb(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Ph=.35;function hb(n=Ph){return n===!1?n=0:n===!0&&(n=Ph),{x:rx(n,"left","right"),y:rx(n,"top","bottom")}}function rx(n,e,t){return{min:sx(n,e),max:sx(n,t)}}function sx(n,e){return typeof n=="number"?n:n[e]||0}const pb=new WeakMap;class mb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=_n(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(Ka(v).point),this.stopAnimation()},c=(v,g)=>{const{drag:_,dragPropagation:M,onDragStart:T}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=V1(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qi(S=>{let R=this.getAxisMotionValue(S).get()||0;if(rr.test(R)){const{projection:L}=this.visualElement;if(L&&L.layout){const P=L.layout.layoutBox[S];P&&(R=jn(P)*(parseFloat(R)/100))}}this.originPoint[S]=R}),T&&At.update(()=>T(v,g),!1,!0),_h(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},u=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:T,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=g;if(M&&this.currentDirection===null){this.currentDirection=vb(S),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),y&&At.update(()=>y(v,g),!1,!0)},f=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new Qy(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Zy(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&At.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!fc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=lb(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&So(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=cb(r.layoutBox,e):this.constraints=!1,this.elastic=hb(t),o!==this.constraints&&!So(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Qi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=fb(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!So(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=vT(r,o.root,this.visualElement.getTransformPagePoint());let c=ub(o.layout.layoutBox,a);if(t){const u=t(pT(c));this.hasMutatedConstraints=!!u,u&&(c=Sy(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},h=Qi(m=>{if(!fc(m,t,this.currentDirection))return;let v=f&&f[m]||{};(c===!0||c===m)&&(v={min:0,max:0});const g=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return _h(this.visualElement,e),r.start(Bp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Qi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Qi(t=>{const{drag:r}=this.getProps();if(!fc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],f=a.get()||0;a.set(e[t]-Vt(c,u,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!So(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Qi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const f=u.get();o[c]=db({min:f,max:f},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Qi(c=>{if(!fc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];u.set(Vt(f,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;pb.set(this.visualElement,this);const e=this.visualElement.current,t=ka(e,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),g=h.target,_=g!==e&&$1(g);m&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();So(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=gb(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),At.read(o);const u=Ha(window,"resize",()=>this.scalePositionWithinConstraints()),f=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Qi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),f&&f(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Ph,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function ox(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function gb(n,e,t){const r=wh(n,ox(t)),o=wh(e,ox(t));return()=>{r(),o()}}function fc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function vb(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class xb extends ss{constructor(e){super(e),this.removeGroupControls=ti,this.removeListeners=ti,this.controls=new mb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ti}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Tf=n=>(e,t)=>{n&&At.update(()=>n(e,t),!1,!0)};class _b extends ss{constructor(){super(...arguments),this.removePointerDownListener=ti}onPointerDown(e){this.session=new Qy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Tf(e),onStart:Tf(t),onMove:Tf(r),onEnd:(a,c)=>{delete this.session,o&&At.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=ka(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Af=!1;class yb extends Pe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Af&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Af=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||At.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),Do.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Af=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function eS(n){const[e,t]=Hy(),r=Pe.useContext(Mp);return D.jsx(yb,{...n,layoutGroup:r,switchLayoutGroup:Pe.useContext(qy),isPresent:e,safeToRemove:t})}const Sb={pan:{Feature:_b},drag:{Feature:xb,ProjectionNode:Vy,MeasureLayout:eS}};function ax(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&At.postRender(()=>a(e,Ka(e)))}class Mb extends ss{mount(){const{current:e}=this.node;e&&(this.unmount=G1(e,(t,r)=>(ax(this.node,r,"Start"),o=>ax(this.node,o,"End"))))}unmount(){}}class Eb extends ss{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(Ha(this.node.current,"focus",()=>this.onFocus()),Ha(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function lx(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&At.postRender(()=>a(e,Ka(e)))}class wb extends ss{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=q1(e,(o,a)=>(lx(this.node,a,"Start"),(c,{success:u})=>lx(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Dh=new WeakMap,bf=new WeakMap,Tb=n=>{const e=Dh.get(n.target);e&&e(n)},Ab=n=>{n.forEach(Tb)};function bb({root:n,...e}){const t=n||document;bf.has(t)||bf.set(t,{});const r=bf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Ab,{root:n,...e})),r[o]}function Cb(n,e,t){const r=bb(e);return Dh.set(n,t),r.observe(n),()=>{Dh.delete(n),r.unobserve(n)}}const Rb={some:0,all:1};class Pb extends ss{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var f;(f=this.stopObserver)==null||f.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Rb[o]},u=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),_=m?v:g;_&&_(h)};this.stopObserver=Cb(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Db(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Db({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Lb={inView:{Feature:Pb},tap:{Feature:wb},focus:{Feature:Eb},hover:{Feature:Mb}},Nb={layout:{ProjectionNode:Vy,MeasureLayout:eS}},Ib={...ib,...Lb,...Sb,...Nb},di=QA(Ib,JA);function lu(n){return typeof window>"u"?!1:n?j_():Op()}const Ub=50,cx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Fb=()=>({time:0,x:cx(),y:cx()}),Ob={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ux(n,e,t,r){const o=t[e],{length:a,position:c}=Ob[e],u=o.current,f=t.time;o.current=Math.abs(n[`scroll${c}`]),o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Ro(0,o.scrollLength,o.current);const h=r-f;o.velocity=h>Ub?0:Tp(o.current-u,h)}function kb(n,e,t){ux(n,"x",e,t),ux(n,"y",e,t),e.time=t}function Bb(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(Fa(r))t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let c=null,u=r.parentNode;for(;!c;)u.tagName==="svg"&&(c=u),u=r.parentNode;r=c}else break;return t}const Lh={start:0,center:.5,end:1};function dx(n,e,t=0){let r=0;if(n in Lh&&(n=Lh[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const zb=[0,0];function Vb(n,e,t,r){let o=Array.isArray(n)?n:zb,a=0,c=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,Lh[n]?n:"0"]),a=dx(o[0],t,r),c=dx(o[1],e),a-c}const Pa={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Hb={x:0,y:0};function Gb(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function Wb(n,e,t){const{offset:r=Pa.All}=t,{target:o=n,axis:a="y"}=t,c=a==="y"?"height":"width",u=o!==n?Bb(o,n):Hb,f=o===n?{width:n.scrollWidth,height:n.scrollHeight}:Gb(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let m=!e[a].interpolate;const v=r.length;for(let g=0;g<v;g++){const _=Vb(r[g],h[c],f[c],u[a]);!m&&_!==e[a].interpolatorOffsets[g]&&(m=!0),e[a].offset[g]=_}m&&(e[a].interpolate=Np(e[a].offset,V_(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Vi(0,1,e[a].interpolate(e[a].current))}function Xb(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function jb(n,e,t,r={}){return{measure:o=>{Xb(n,r.target,t),kb(n,t,o),(r.offset||r.target)&&Wb(n,t,r)},notify:()=>e(t)}}const ao=new WeakMap,fx=new WeakMap,Cf=new WeakMap,hx=new WeakMap,hc=new WeakMap,px=n=>n===document.scrollingElement?window:n;function tS(n,{container:e=document.scrollingElement,trackContentSize:t=!1,...r}={}){if(!e)return ti;let o=Cf.get(e);o||(o=new Set,Cf.set(e,o));const a=Fb(),c=jb(e,n,a,r);if(o.add(c),!ao.has(e)){const f=()=>{for(const g of o)g.measure(Cn.timestamp);At.preUpdate(h)},h=()=>{for(const g of o)g.notify()},m=()=>At.read(f);ao.set(e,m);const v=px(e);window.addEventListener("resize",m),e!==document.documentElement&&fx.set(e,wh(e,m)),v.addEventListener("scroll",m),m()}if(t&&!hc.has(e)){const f=ao.get(e),h={width:e.scrollWidth,height:e.scrollHeight};hx.set(e,h);const m=()=>{const g=e.scrollWidth,_=e.scrollHeight;(h.width!==g||h.height!==_)&&(f(),h.width=g,h.height=_)},v=At.read(m,!0);hc.set(e,v)}const u=ao.get(e);return At.read(u,!1,!0),()=>{var v;Mi(u);const f=Cf.get(e);if(!f||(f.delete(c),f.size))return;const h=ao.get(e);ao.delete(e),h&&(px(e).removeEventListener("scroll",h),(v=fx.get(e))==null||v(),window.removeEventListener("resize",h));const m=hc.get(e);m&&(Mi(m),hc.delete(e)),hx.delete(e)}}const $b=[[Pa.Enter,"entry"],[Pa.Exit,"exit"],[Pa.Any,"cover"],[Pa.All,"contain"]],mx={start:0,end:1};function Yb(n){const e=n.trim().split(/\s+/);if(e.length!==2)return;const t=mx[e[0]],r=mx[e[1]];if(!(t===void 0||r===void 0))return[t,r]}function qb(n){if(n.length!==2)return;const e=[];for(const t of n)if(Array.isArray(t))e.push(t);else if(typeof t=="string"){const r=Yb(t);if(!r)return;e.push(r)}else return;return e}function Kb(n,e){const t=qb(n);if(!t)return!1;for(let r=0;r<2;r++){const o=t[r],a=e[r];if(o[0]!==a[0]||o[1]!==a[1])return!1}return!0}function Qp(n){if(!n)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,t]of $b)if(Kb(n,e))return{rangeStart:`${t} 0%`,rangeEnd:`${t} 100%`}}const gx=new Map;function vx(n){const e={value:0},t=tS(r=>{e.value=r[n.axis].progress*100},n);return{currentTime:e,cancel:t}}function nS({source:n,container:e,...t}){const{axis:r}=t;n&&(e=n);let o=gx.get(e);o||(o=new Map,gx.set(e,o));const a=t.target??"self";let c=o.get(a);c||(c={},o.set(a,c));const u=r+(t.offset??[]).join(",");return c[u]||(t.target&&lu(t.target)?Qp(t.offset)?c[u]=new ViewTimeline({subject:t.target,axis:r}):c[u]=vx({container:e,...t}):lu()?c[u]=new ScrollTimeline({source:e,axis:r}):c[u]=vx({container:e,...t})),c[u]}function Zb(n,e){const t=nS(e),r=e.target?Qp(e.offset):void 0,o=e.target?lu(e.target)&&!!r:lu();return n.attachTimeline({timeline:o?t:void 0,...r&&o&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:a=>(a.pause(),gy(c=>{a.time=a.iterationDuration*c},t))})}function Qb(n){return n&&(n.target||n.offset)}function Jb(n){return n.length===2}function eC(n,e){return Jb(n)||Qb(e)?tS(t=>{n(t[e.axis].progress,t)},e):gy(n,nS(e))}function iS(n,{axis:e="y",container:t=document.scrollingElement,...r}={}){if(!t)return ti;const o={axis:e,container:t,...r};return typeof n=="function"?eC(n,o):Zb(n,o)}const tC=()=>({scrollX:Oi(0),scrollY:Oi(0),scrollXProgress:Oi(0),scrollYProgress:Oi(0)}),Ao=n=>n?!n.current:!1;function xx(n,e,t,r){return{factory:o=>{let a;const c=()=>{if(Ao(t)||Ao(r)){Do.read(c);return}a=iS(o,{...e,axis:n,container:(t==null?void 0:t.current)||void 0,target:(r==null?void 0:r.current)||void 0})};return Do.read(c),()=>{dy(c),a==null||a()}},times:[0,1],keyframes:[0,1],ease:o=>o,duration:1}}function nC(n,e){return typeof window>"u"?!1:n?j_()&&!!Qp(e):Op()}function rS({container:n,target:e,...t}={}){const r=es(tC);nC(e,t.offset)&&(r.scrollXProgress.accelerate=xx("x",t,n,e),r.scrollYProgress.accelerate=xx("y",t,n,e));const o=Pe.useRef(null),a=Pe.useRef(!1),c=Pe.useCallback(()=>(o.current=iS((u,{x:f,y:h})=>{r.scrollX.set(f.current),r.scrollXProgress.set(f.progress),r.scrollY.set(h.current),r.scrollYProgress.set(h.progress)},{...t,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var u;(u=o.current)==null||u.call(o)}),[n,e,JSON.stringify(t.offset)]);return ja(()=>{if(a.current=!1,Ao(n)||Ao(e)){a.current=!0;return}else return c()},[c]),Pe.useEffect(()=>{if(!a.current)return;let u;const f=()=>{const h=Ao(n),m=Ao(e);!h&&!m&&(u=c())};return Do.read(f),()=>{dy(f),u==null||u()}},[c]),r}function iC(n){const e=es(()=>Oi(n)),{isStatic:t}=Pe.useContext(Eu);if(t){const[,r]=Pe.useState(n);Pe.useEffect(()=>e.on("change",r),[])}return e}function sS(n,e){const t=iC(e()),r=()=>t.set(e());return r(),ja(()=>{const o=()=>At.preRender(r,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Mi(r)}}),t}function rC(n){Ua.current=[],n();const e=sS(Ua.current,n);return Ua.current=void 0,e}function Jp(n,e,t,r){if(typeof n=="function")return rC(n);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return sC(n,e,t,r);const c=typeof e=="function"?e:sT(e,t,r),u=Array.isArray(n)?_x(n,c):_x([n],([h])=>c(h)),f=Array.isArray(n)?void 0:n.accelerate;return f&&!f.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(r==null?void 0:r.clamp)!==!1&&(u.accelerate={...f,times:e,keyframes:t,isTransformed:!0}),u}function _x(n,e){const t=es(()=>[]);return sS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function sC(n,e,t,r){const o=es(()=>Object.keys(t)),a=es(()=>({}));for(const c of o)a[c]=Jp(n,e,t[c],r);return a}const un=({children:n,delay:e=0,duration:t=.7,x:r=0,y:o=30,className:a="",ease:c=[.25,.1,.25,1],as:u="div",immediate:f=!1})=>{const h=di[u]||di.div;return f?D.jsx(h,{initial:{opacity:0,x:r,y:o},animate:{opacity:1,x:0,y:0},transition:{duration:t,delay:e,ease:c},className:a,children:n}):D.jsx(h,{initial:{opacity:0,x:r,y:o},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"50px",amount:0},transition:{duration:t,delay:e,ease:c},className:a,children:n})},em=({onClick:n,className:e="",label:t="Contact Me"})=>D.jsx(di.button,{whileHover:{scale:1.04},whileTap:{scale:.96},onClick:n,style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",boxShadow:"0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",outline:"2px solid white",outlineOffset:"-3px"},className:`rounded-full text-white font-medium uppercase tracking-widest cursor-pointer select-none transition-all duration-300 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 group ${e}`,children:D.jsx("span",{className:"relative z-10",children:t})});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Mn=(n,e)=>{const t=Pe.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:u="",children:f,...h},m)=>Pe.createElement("svg",{ref:m,...oC,width:o,height:o,stroke:r,strokeWidth:c?Number(a)*24/Number(o):a,className:["lucide",`lucide-${aC(n)}`,u].join(" "),...h},[...e.map(([v,g])=>Pe.createElement(v,g)),...Array.isArray(f)?f:[f]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=Mn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=Mn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Mn("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=Mn("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=Mn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=Mn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=Mn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=Mn("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=Mn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Mn("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=Mn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=Mn("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=Mn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Mn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=Mn("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=Mn("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Mn("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=Mn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Mn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Pf=["/certificates/cert_11.png","/certificates/cert_13.png","/certificates/cert_03.png","/certificates/cert_01.png","/certificates/cert_23.png","/certificates/cert_26.png","/certificates/cert_05.png","/certificates/cert_07.png","/certificates/cert_10.png","/certificates/cert_18.png","/certificates/cert_02.png"],Df=["/certificates/cert_15.png","/certificates/cert_27.png","/certificates/cert_06.png","/certificates/cert_25.png","/certificates/cert_12.png","/certificates/cert_17.png","/certificates/cert_09.png","/certificates/cert_16.png","/certificates/cert_20.png","/certificates/cert_22.png","/certificates/cert_21.png","/certificates/cert_14.png"],yx=[{id:"kvrss-runner-up",number:"01",title:"SMART Self-Stabilizing Spoon — National Runner-Up",organization:"Dr. K. V. Rao Scientific Society (KVRSS SPARK 2024-25)",category:"Physics & Hardware Innovation (BHOUTIKAM)",badge:"National Runner-Up · SPARK Awards",year:"2024–2025 · Hyderabad",description:"Awarded National Runner-Up in the BHOUTIKAM (Physics) category at SPARK Innovation Awards 2024-25. Engineered a 3D-modeled self-stabilizing spoon featuring dual-axis gyroscopic PID control to counteract hand tremors in Parkinson's patients.",highlights:["1st Runner-Up across national STEM finalists","Real-time dual-axis PID gyroscopic stabilization with MPU6050","Ergonomic custom 3D-modeled and printed physical enclosure","Presented to leading scientists & researchers in Hyderabad"],certificateImg:"/certificates/cert_11.png",secondaryImg:"/certificates/cert_14.png",tags:["Physics","3D CAD","Arduino","Gyroscopic PID","Assistive Tech"],link:"https://github.com/LookWanted/parkinsons-spoon-Data"},{id:"macmillan-grand-finale-2025",number:"02",title:"Macmillan Budding Scientist Grand Finale — 2nd Prize",organization:"Powered by Springer Nature & IIT Delhi",category:"National Grand Finale · STEM Research",badge:"2nd Prize · Grand Finale",year:"February 2025 · IIT Delhi",description:"Secured Second Prize in the prestigious National Grand Finale of the Macmillan Budding Scientist 2024-25 competition, organized by Macmillan Education in association with Indian Institute of Technology (IIT) Delhi.",highlights:["Second Prize at the national Grand Finale at IIT Delhi","Rigorous scientific jury evaluation by IIT Delhi faculty & scientists","Recognized for innovative applied STEM methodology & execution"],certificateImg:"/certificates/cert_13.png",secondaryImg:"/certificates/cert_15.png",tags:["Springer Nature","IIT Delhi","STEM Research","Grand Finale"]},{id:"ncrypt-dps-first",number:"03",title:"1st Position in nCreate — nCrypt 2025",organization:"Delhi Public School (DPS) Sushant Lok, Gurugram",category:"Inter-School Tech Fest & Creative Tech",badge:"First Position · nCreate 2025",year:"October 2025",description:"Clinched 1st Position in the high-stakes 'nCreate' event at nCrypt 2025, one of Delhi NCR's premier inter-school technical symposiums, competing against top schools in creative development and technical design.",highlights:["1st Position in competitive development & creative technology","Time-bound UI/UX design and logic execution under live constraints","Recognized by nCrypt tech jury for design polish and innovation"],certificateImg:"/certificates/cert_03.png",tags:["nCrypt 2025","UI/UX","Creative Dev","DPS Sushant Lok"]},{id:"macmillan-north-zone-first",number:"04",title:"Macmillan Budding Scientist — 1st Prize North Zone",organization:"Springer Nature & Tryst, IIT Delhi",category:"Zonal Science & Innovation Championship",badge:"First Prize · North Zone",year:"2022–2023 · IIT Delhi",description:"Awarded First Prize across North Zone in Macmillan Budding Scientist 2022-23, powered by Springer Nature in association with Tryst, IIT Delhi, advancing to represent the zone at national forums.",highlights:["First Prize in North Zone regional finals","Collaborative research and scientific model presentation at Tryst, IIT Delhi","Consistent recognition across multiple editions of the Budding Scientist initiative"],certificateImg:"/certificates/cert_23.png",secondaryImg:"/certificates/cert_18.png",tags:["First Prize","Springer Nature","Tryst IIT Delhi","North Zone"]},{id:"summer-fields-best-it",number:"05",title:"Best Student in IT & Best Student with Innovation",organization:"Summer Fields School (DLF QEC Innovative Schools)",category:"Annual Institutional Honors",badge:"Best Student in IT (Class IX & VIII-A)",year:"2024–2025",description:"Conferred the prestigious Merit Certificate for 'Best Student in IT' (Class IX) and 'Best Student with Innovation & IT Skills' (Class VIII-A), recognizing exceptional technical leadership, programming capability, and creative problem-solving.",highlights:["Awarded Best Student in IT for consecutive academic sessions","Recognized by school Principal and Head of IT Department","Demonstrated continuous mentorship and project contribution"],certificateImg:"/certificates/cert_01.png",secondaryImg:"/certificates/cert_02.png",tags:["Merit Award","Innovation","IT Leadership","School Honors"]},{id:"intel-ai-for-all",number:"06",title:"Intel & CBSE 'AI For All' + Tech Fest Workshop Lead",organization:"Intel, Digital India & Summer Fields School",category:"AI Certification & Technical Mentorship",badge:"AI Appreciate & AI Aware · Intel",year:"2025",description:"Completed both the 'AI Appreciate' and 'AI Aware' stages of the national AI For All initiative by Intel, Digital India, and CBSE. Additionally, conducted hands-on technical workshops at school Tech Fests to introduce peers to modern tech tools.",highlights:["Certified by Director Asia Pacific & Japan, Intel Partnerships","Completed AI ethics, neural networks, and applications curriculum","Led workshops at Summer Fields Tech Fest and volunteered for CyferNode 4.0"],certificateImg:"/certificates/cert_26.png",secondaryImg:"/certificates/cert_27.png",tags:["Intel","Digital India","AI For All","CBSE","Workshop Lead"]}],pc=[{id:"parkinsons-spoon",number:"01",title:"Parkinson's Self-Stabilizing Spoon",category:"Hardware / 3D & Embedded",badge:"Runner-Up · KVRSS India (Physics)",badgeType:"award",description:"An Arduino-powered smart spoon with real-time gyroscopic stabilization to counteract hand tremors — engineered with embedded C++ control code and a custom 3D-modeled ergonomic enclosure, enabling Parkinson's patients to eat independently.",highlights:["1st Runner-Up at KVRSS India Physics Category","Real-time dual-axis PID gyroscopic stabilization","Custom 3D-printed enclosure & lightweight ergonomic handle"],tags:["C++","Arduino","3D CAD & Modeling","MPU6050 Gyro","Control Systems"],col1Image1:"/projects/arduino_hero.jpg",col1Image2:"/projects/spoon_hero.jpg",col2Image:"/projects/spoon_hero.jpg",liveUrl:"https://github.com/LookWanted/parkinsons-spoon-Data",githubUrl:"https://github.com/LookWanted/parkinsons-spoon-Data"},{id:"collab-code-for-all",number:"02",title:"CollabCodeForAll",category:"Web App · Full Stack",badge:"Live · Real-Time Web",badgeType:"live",description:"A real-time collaborative coding platform designed for live pair programming and time-bound collaborative workflows. Features instant code synchronization, room management, syntax highlighting, and an ultra-responsive dark interface.",highlights:["Built in a time-bound rapid development sprint","Instant real-time multi-user code synchronization","Seamless client-side state handling & low latency"],tags:["React","JavaScript","Real-Time Sync","Tailwind CSS","Vercel"],col1Image1:"/projects/collab_hero.jpg",col1Image2:"/projects/collab_hero.jpg",col2Image:"/projects/collab_hero.jpg",liveUrl:"https://collabcodeforall.vercel.app",githubUrl:"https://github.com/LookWanted"},{id:"dev98os",number:"03",title:"Dev98OS",category:"OS Simulation · Web",badge:"Live · Retro Desktop",badgeType:"live",description:"A fully interactive retro operating system simulation in the browser. Combines authentic late-90s UI paradigms, draggable window manager, taskbar navigation, system audio, and mini-applications with modern web technologies.",highlights:["Custom multi-window management engine","Interactive retro desktop icons, menus & sound cues","Lightweight zero-dependency architecture"],tags:["JavaScript","HTML/CSS","System Architecture","Retro UI","Vercel"],col1Image1:"/projects/dev98os_hero.jpg",col1Image2:"/projects/dev98os_hero.jpg",col2Image:"/projects/dev98os_hero.jpg",liveUrl:"https://dev98os.vercel.app",githubUrl:"https://github.com/LookWanted"},{id:"grid-lock",number:"04",title:"Grid-Lock",category:"Interactive Game · Logic",badge:"Live · Game",badgeType:"live",description:"A minimalist, highly engaging spatial puzzle game built around pure geometric grid mechanics. Features smooth state transitions, intuitive keyboard/touch interactions, score systems, and challenging cognitive mechanics.",highlights:["Dynamic matrix grid computation","Zero-latency input detection and smooth CSS animations","Cross-platform responsive puzzle controls"],tags:["JavaScript","HTML/CSS","Game Logic","Grid UI","Vercel"],col1Image1:"/projects/gridlock_hero.jpg",col1Image2:"/projects/gridlock_hero.jpg",col2Image:"/projects/gridlock_hero.jpg",liveUrl:"https://grid-lock-black.vercel.app",githubUrl:"https://github.com/LookWanted"},{id:"geometry-dash-vibe",number:"05",title:"Geometry Dash HTML Vibe",category:"Game Engine · Canvas",badge:"Live · Canvas Engine",badgeType:"live",description:"A fast-paced, rhythm-synchronized browser platformer recreation built from the ground up using HTML5 Canvas API. Features precise collision boxes, gravity scaling, responsive jump physics, dynamic obstacle rendering, and high-FPS loops.",highlights:["Custom 60FPS Canvas physics loop","AABB collision handling & level generation","Dynamic soundtrack sync and particle effects"],tags:["JavaScript","Canvas API","Physics Engine","Vercel","Audio Sync"],col1Image1:"/projects/geodash_hero.jpg",col1Image2:"/projects/geodash_hero.jpg",col2Image:"/projects/geodash_hero.jpg",liveUrl:"https://geometry-dash-html-vibe.vercel.app",githubUrl:"https://github.com/LookWanted"},{id:"github-open-source",number:"06",title:"Robotics & Open-Source Lab",category:"17+ Repositories · STEM",badge:"17+ Repositories on GitHub",badgeType:"repo",description:"Seventeen public repositories spanning Arduino-based automated systems, NodeMCU IoT controllers, C++ embedded sensor drivers, mechanical 3D models, React prototypes, and browser-based games.",highlights:["17+ active repositories on GitHub","Embedded hardware, IoT & Web prototypes","Hands-on STEM & Robotics engineering"],tags:["Embedded C++","Arduino","NodeMCU IoT","3D CAD","React","Open Source"],col1Image1:"/projects/arduino_hero.jpg",col1Image2:"/projects/spoon_hero.jpg",col2Image:"/projects/arduino_hero.jpg",liveUrl:"https://github.com/LookWanted?tab=repositories",githubUrl:"https://github.com/LookWanted?tab=repositories"}],Rn={email:"dawarnamish28@gmail.com",github:"https://github.com/LookWanted",instagram:"https://www.instagram.com/namish_dawar",discord:"namishhaha",discordUrl:"https://discord.com/users/namishhaha",website:"https://namishdawar.xyz"};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const om="187",gC=0,Sx=1,vC=2,Xc=1,xC=2,Da=3,Ns=0,ni=1,tr=2,bo=0,Ba=1,Mx=2,Ex=3,wx=4,_C=5,Mo=100,yC=101,SC=102,MC=103,EC=104,wC=200,TC=201,AC=202,bC=203,lS=204,cS=205,CC=206,RC=207,PC=208,DC=209,LC=210,NC=211,IC=212,UC=213,FC=214,Nh=0,Ih=1,Uh=2,Ga=3,Fh=4,Oh=5,kh=6,Bh=7,uS=0,OC=1,kC=2,Er=0,dS=1,fS=2,hS=3,pS=4,mS=5,gS=6,vS=7,xS=300,Lo=301,Wa=302,Lf=303,Nf=304,zh=1e3,Mr=1001,Vh=1002,Nn=1003,BC=1004,mc=1005,ei=1006,If=1007,Qr=1008,yi=1009,_S=1010,yS=1011,Xa=1012,am=1013,or=1014,nr=1015,ar=1016,lm=1017,cm=1018,No=1020,SS=35902,MS=35899,ES=1021,wS=1022,ir=1023,ns=1026,Jr=1027,TS=1028,um=1029,Is=1030,dm=1031,fm=1033,jc=33776,$c=33777,Yc=33778,qc=33779,Hh=35840,Gh=35841,Wh=35842,Xh=35843,jh=36196,$h=37492,Yh=37496,qh=37488,Kh=37489,cu=37490,Zh=37491,Qh=37808,Jh=37809,ep=37810,tp=37811,np=37812,ip=37813,rp=37814,sp=37815,op=37816,ap=37817,lp=37818,cp=37819,up=37820,dp=37821,fp=36492,hp=36494,pp=36495,mp=36283,gp=36284,uu=36285,vp=36286,zC=3200,Tx=0,VC=1,Kr="",_i="srgb",du="srgb-linear",fu="linear",Ot="srgb",Uf=7680,HC=519,GC=512,WC=513,XC=514,AS=515,jC=516,$C=517,bS=518,CS=519,YC=35044,Ax="300 es",ki=2e3,hu=2001;function qC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function KC(){const n=pu("canvas");return n.style.display="block",n}const bx={};function Cx(...n){const e="THREE."+n.shift();console.log(e,...n)}function RS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=RS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Lt(...n){n=RS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Kc(...n){const e=n.join(" ");e in bx||(bx[e]=!0,dt(...n))}function ZC(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const QC={[Nh]:Nh,[Uh]:kh,[Fh]:Fh,[Ga]:Oh,[Ih]:Ih,[kh]:Uh,[Bh]:Bh,[Oh]:Ga};class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,xp=180/Math.PI;function Ja(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function JC(n,e){return(n%e+e)%e}function Of(n,e,t){return(1-t)*n+t*e}function eR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hm(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tR(n,e){if(e.constructor===Float32Array)return n;const t=hm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function nR(n,e){if(e.constructor===Float32Array)return n;const t=hm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const xm=class xm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xm.prototype.isVector2=!0;let yt=xm;class Bo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let f=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],g=a[c+0],_=a[c+1],M=a[c+2],T=a[c+3];if(v!==T||f!==g||h!==_||m!==M){let y=f*g+h*_+m*M+v*T;y<0&&(g=-g,_=-_,M=-M,T=-T,y=-y);let S=1-u;if(y<.9995){const R=Math.acos(y),L=Math.sin(R);S=Math.sin(S*R)/L,u=Math.sin(u*R)/L,f=f*S+g*u,h=h*S+_*u,m=m*S+M*u,v=v*S+T*u}else{f=f*S+g*u,h=h*S+_*u,m=m*S+M*u,v=v*S+T*u;const R=1/Math.sqrt(f*f+h*h+m*m+v*v);f*=R,h*=R,m*=R,v*=R}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],f=r[o+1],h=r[o+2],m=r[o+3],v=a[c],g=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+m*v+f*_-h*g,e[t+1]=f*M+m*g+h*v-u*_,e[t+2]=h*M+m*_+u*g-f*v,e[t+3]=m*M-u*v-f*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(r/2),m=u(o/2),v=u(a/2),g=f(r/2),_=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=g*m*v+h*_*M,this._y=h*_*v-g*m*M,this._z=h*m*M+g*_*v,this._w=h*m*v-g*_*M;break;case"YXZ":this._x=g*m*v+h*_*M,this._y=h*_*v-g*m*M,this._z=h*m*M-g*_*v,this._w=h*m*v+g*_*M;break;case"ZXY":this._x=g*m*v-h*_*M,this._y=h*_*v+g*m*M,this._z=h*m*M+g*_*v,this._w=h*m*v-g*_*M;break;case"ZYX":this._x=g*m*v-h*_*M,this._y=h*_*v+g*m*M,this._z=h*m*M-g*_*v,this._w=h*m*v+g*_*M;break;case"YZX":this._x=g*m*v+h*_*M,this._y=h*_*v+g*m*M,this._z=h*m*M-g*_*v,this._w=h*m*v-g*_*M;break;case"XZY":this._x=g*m*v-h*_*M,this._y=h*_*v-g*m*M,this._z=h*m*M+g*_*v,this._w=h*m*v+g*_*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],v=t[10],g=r+u+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(m-f)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>u&&r>v){const _=2*Math.sqrt(1+r-u-v);this._w=(m-f)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(f+m)/_}else{const _=2*Math.sqrt(1+v-r-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(f+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=r*m+c*u+o*h-a*f,this._y=o*m+c*f+a*u-r*h,this._z=a*m+c*h+r*f-o*u,this._w=c*m-r*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),m=Math.sin(h);f=Math.sin(f*h)/m,t=Math.sin(t*h)/m,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _m=class _m{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*r),m=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+f*h+c*v-u*m,this.y=r+f*m+u*h-a*v,this.z=o+f*v+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-r*f,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_m.prototype.isVector3=!0;let he=_m;const kf=new he,Rx=new Bo,ym=class ym{constructor(e,t,r,o,a,c,u,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,f,h)}set(e,t,r,o,a,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],f=r[6],h=r[1],m=r[4],v=r[7],g=r[2],_=r[5],M=r[8],T=o[0],y=o[3],S=o[6],R=o[1],L=o[4],P=o[7],O=o[2],F=o[5],E=o[8];return a[0]=c*T+u*R+f*O,a[3]=c*y+u*L+f*F,a[6]=c*S+u*P+f*E,a[1]=h*T+m*R+v*O,a[4]=h*y+m*L+v*F,a[7]=h*S+m*P+v*E,a[2]=g*T+_*R+M*O,a[5]=g*y+_*L+M*F,a[8]=g*S+_*P+M*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-r*a*m+r*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],v=m*c-u*h,g=u*f-m*a,_=h*a-c*f,M=t*v+r*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-m*r)*T,e[2]=(u*r-o*c)*T,e[3]=g*T,e[4]=(m*t-o*f)*T,e[5]=(o*a-u*t)*T,e[6]=_*T,e[7]=(r*f-h*t)*T,e[8]=(c*t-r*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(r*f,r*h,-r*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return Kc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bf.makeScale(e,t)),this}rotate(e){return Kc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bf.makeRotation(-e)),this}translate(e,t){return Kc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ym.prototype.isMatrix3=!0;let ft=ym;const Bf=new ft,Px=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iR(){const n={enabled:!0,workingColorSpace:du,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ot&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(o.r=Co(o.r),o.g=Co(o.g),o.b=Co(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Kr?fu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[du]:{primaries:e,whitePoint:r,transfer:fu,toXYZ:Px,fromXYZ:Dx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:Px,fromXYZ:Dx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),n}const Mt=iR();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let lo;class rR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{lo===void 0&&(lo=pu("canvas")),lo.width=e.width,lo.height=e.height;const o=lo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=lo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=wr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wr(t[r]/255)*255):t[r]=wr(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sR=0;class pm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(zf(o[c].image)):a.push(zf(o[c]))}else a=zf(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function zf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let oR=0;const Vf=new he;class $n extends Fs{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,r=Mr,o=Mr,a=ei,c=Qr,u=ir,f=yi,h=$n.DEFAULT_ANISOTROPY,m=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Ja(),this.name="",this.source=new pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vf).x}get height(){return this.source.getSize(Vf).y}get depth(){return this.source.getSize(Vf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=xS;$n.DEFAULT_ANISOTROPY=1;const Sm=class Sm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const f=e.elements,h=f[0],m=f[4],v=f[8],g=f[1],_=f[5],M=f[9],T=f[2],y=f[6],S=f[10];if(Math.abs(m-g)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(_+1)/2,O=(S+1)/2,F=(m+g)/4,E=(v+T)/4,C=(M+y)/4;return L>P&&L>O?L<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(L),o=F/r,a=E/r):P>O?P<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),r=F/o,a=C/o):O<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(O),r=E/a,o=C/a),this.set(r,o,a,t),this}let R=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(g-m)*(g-m));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(v-T)/R,this.z=(g-m)/R,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sm.prototype.isVector4=!0;let on=Sm;class aR extends Fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o=r.count;for(let a=0;a<o;a++)this.textures[a]=new $n({width:e,height:t,depth:r.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new pm(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends aR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class PS extends $n{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lR extends $n{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const vu=class vu{constructor(e,t,r,o,a,c,u,f,h,m,v,g,_,M,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,f,h,m,v,g,_,M,T,y)}set(e,t,r,o,a,c,u,f,h,m,v,g,_,M,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=f,S[2]=h,S[6]=m,S[10]=v,S[14]=g,S[3]=_,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/co.setFromMatrixColumn(e,0).length(),a=1/co.setFromMatrixColumn(e,1).length(),c=1/co.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o),m=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*m,_=c*v,M=u*m,T=u*v;t[0]=f*m,t[4]=-f*v,t[8]=h,t[1]=_+M*h,t[5]=g-T*h,t[9]=-u*f,t[2]=T-g*h,t[6]=M+_*h,t[10]=c*f}else if(e.order==="YXZ"){const g=f*m,_=f*v,M=h*m,T=h*v;t[0]=g+T*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*m,t[9]=-u,t[2]=_*u-M,t[6]=T+g*u,t[10]=c*f}else if(e.order==="ZXY"){const g=f*m,_=f*v,M=h*m,T=h*v;t[0]=g-T*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*m,t[9]=T-g*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const g=c*m,_=c*v,M=u*m,T=u*v;t[0]=f*m,t[4]=M*h-_,t[8]=g*h+T,t[1]=f*v,t[5]=T*h+g,t[9]=_*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,_=c*h,M=u*f,T=u*h;t[0]=f*m,t[4]=T-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=_*v+M,t[10]=g-T*v}else if(e.order==="XZY"){const g=c*f,_=c*h,M=u*f,T=u*h;t[0]=f*m,t[4]=-v,t[8]=h*m,t[1]=g*v+T,t[5]=c*m,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*m,t[10]=T*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cR,e,uR)}lookAt(e,t,r){const o=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Gr.crossVectors(r,ai),Gr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Gr.crossVectors(r,ai)),Gr.normalize(),gc.crossVectors(ai,Gr),o[0]=Gr.x,o[4]=gc.x,o[8]=ai.x,o[1]=Gr.y,o[5]=gc.y,o[9]=ai.y,o[2]=Gr.z,o[6]=gc.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],f=r[8],h=r[12],m=r[1],v=r[5],g=r[9],_=r[13],M=r[2],T=r[6],y=r[10],S=r[14],R=r[3],L=r[7],P=r[11],O=r[15],F=o[0],E=o[4],C=o[8],Y=o[12],B=o[1],U=o[5],ee=o[9],fe=o[13],V=o[2],J=o[6],le=o[10],q=o[14],G=o[3],H=o[7],W=o[11],I=o[15];return a[0]=c*F+u*B+f*V+h*G,a[4]=c*E+u*U+f*J+h*H,a[8]=c*C+u*ee+f*le+h*W,a[12]=c*Y+u*fe+f*q+h*I,a[1]=m*F+v*B+g*V+_*G,a[5]=m*E+v*U+g*J+_*H,a[9]=m*C+v*ee+g*le+_*W,a[13]=m*Y+v*fe+g*q+_*I,a[2]=M*F+T*B+y*V+S*G,a[6]=M*E+T*U+y*J+S*H,a[10]=M*C+T*ee+y*le+S*W,a[14]=M*Y+T*fe+y*q+S*I,a[3]=R*F+L*B+P*V+O*G,a[7]=R*E+L*U+P*J+O*H,a[11]=R*C+L*ee+P*le+O*W,a[15]=R*Y+L*fe+P*q+O*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],v=e[6],g=e[10],_=e[14],M=e[3],T=e[7],y=e[11],S=e[15],R=f*_-h*g,L=u*_-h*v,P=u*g-f*v,O=c*_-h*m,F=c*g-f*m,E=c*v-u*m;return t*(T*R-y*L+S*P)-r*(M*R-y*O+S*F)+o*(M*L-T*O+S*E)-a*(M*P-T*F+y*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],u=e[9],f=e[2],h=e[6],m=e[10];return t*(c*m-u*h)-r*(a*m-u*f)+o*(a*h-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],v=e[9],g=e[10],_=e[11],M=e[12],T=e[13],y=e[14],S=e[15],R=t*u-r*c,L=t*f-o*c,P=t*h-a*c,O=r*f-o*u,F=r*h-a*u,E=o*h-a*f,C=m*T-v*M,Y=m*y-g*M,B=m*S-_*M,U=v*y-g*T,ee=v*S-_*T,fe=g*S-_*y,V=R*fe-L*ee+P*U+O*B-F*Y+E*C;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/V;return e[0]=(u*fe-f*ee+h*U)*J,e[1]=(o*ee-r*fe-a*U)*J,e[2]=(T*E-y*F+S*O)*J,e[3]=(g*F-v*E-_*O)*J,e[4]=(f*B-c*fe-h*Y)*J,e[5]=(t*fe-o*B+a*Y)*J,e[6]=(y*P-M*E-S*L)*J,e[7]=(m*E-g*P+_*L)*J,e[8]=(c*ee-u*B+h*C)*J,e[9]=(r*B-t*ee-a*C)*J,e[10]=(M*F-T*P+S*R)*J,e[11]=(v*P-m*F-_*R)*J,e[12]=(u*Y-c*U-f*C)*J,e[13]=(t*U-r*Y+o*C)*J,e[14]=(T*L-M*O-y*R)*J,e[15]=(m*O-v*L+g*R)*J,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,f=e.z,h=a*c,m=a*u;return this.set(h*c+r,h*u-o*f,h*f+o*u,0,h*u+o*f,m*u+r,m*f-o*c,0,h*f-o*u,m*f+o*c,a*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,m=c+c,v=u+u,g=a*h,_=a*m,M=a*v,T=c*m,y=c*v,S=u*v,R=f*h,L=f*m,P=f*v,O=r.x,F=r.y,E=r.z;return o[0]=(1-(T+S))*O,o[1]=(_+P)*O,o[2]=(M-L)*O,o[3]=0,o[4]=(_-P)*F,o[5]=(1-(g+S))*F,o[6]=(y+R)*F,o[7]=0,o[8]=(M+L)*E,o[9]=(y-R)*E,o[10]=(1-(g+T))*E,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=co.set(o[0],o[1],o[2]).length();const u=co.set(o[4],o[5],o[6]).length(),f=co.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Di.copy(this);const h=1/c,m=1/u,v=1/f;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=m,Di.elements[5]*=m,Di.elements[6]*=m,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,t.setFromRotationMatrix(Di),r.x=c,r.y=u,r.z=f,this}makePerspective(e,t,r,o,a,c,u=ki,f=!1){const h=this.elements,m=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let M,T;if(f)M=a/(c-a),T=c*a/(c-a);else if(u===ki)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(u===hu)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=ki,f=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,T;if(f)M=1/(c-a),T=c/(c-a);else if(u===ki)M=-2/(c-a),T=-(c+a)/(c-a);else if(u===hu)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};vu.prototype.isMatrix4=!0;let dn=vu;const co=new he,Di=new dn,cR=new he(0,0,0),uR=new he(1,1,1),Gr=new he,gc=new he,ai=new he,Lx=new dn,Nx=new Bo;class Us{constructor(e=0,t=0,r=0,o=Us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],m=o[9],v=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,_),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Us.DEFAULT_ORDER="XYZ";class DS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dR=0;const Ix=new he,uo=new Bo,gr=new dn,vc=new he,wa=new he,fR=new he,hR=new Bo,Ux=new he(1,0,0),Fx=new he(0,1,0),Ox=new he(0,0,1),kx={type:"added"},pR={type:"removed"},fo={type:"childadded",child:null},Hf={type:"childremoved",child:null};class ui extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new he,t=new Us,r=new Bo,o=new he(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new ft}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new DS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(Ux,e)}rotateY(e){return this.rotateOnAxis(Fx,e)}rotateZ(e){return this.rotateOnAxis(Ox,e)}translateOnAxis(e,t){return Ix.copy(e).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ux,e)}translateY(e){return this.translateOnAxis(Fx,e)}translateZ(e){return this.translateOnAxis(Ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vc.copy(e):vc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(wa,vc,this.up):gr.lookAt(vc,wa,this.up),this.quaternion.setFromRotationMatrix(gr),o&&(gr.extractRotation(o.matrixWorld),uo.setFromRotationMatrix(gr),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kx),fo.child=e,this.dispatchEvent(fo),fo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pR),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kx),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,fR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,hR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const v=f[h];a(e.shapes,v)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ui.DEFAULT_UP=new he(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mR={type:"move"};class Gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(mR)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const LS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Wf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Mt.workingColorSpace){if(e=JC(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Wf(c,a,e+1/3),this.g=Wf(c,a,e),this.b=Wf(c,a,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(a){a!==void 0&&parseFloat(a)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=LS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Mt.workingToColorSpace(Vn.copy(this),e),Math.round(Et(Vn.r*255,0,255))*65536+Math.round(Et(Vn.g*255,0,255))*256+Math.round(Et(Vn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Vn.copy(this),t);const r=Vn.r,o=Vn.g,a=Vn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const v=c-u;switch(h=m<=.5?v/(c+u):v/(2-c-u),c){case r:f=(o-a)/v+(o<a?6:0);break;case o:f=(a-r)/v+2;break;case a:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=_i){Mt.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,r=Vn.g,o=Vn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(_c);const r=Of(Wr.h,_c.h,t),o=Of(Wr.s,_c.s,t),a=Of(Wr.l,_c.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Ut;Ut.NAMES=LS;class gR extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Us,this.environmentIntensity=1,this.environmentRotation=new Us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new he,vr=new he,Xf=new he,xr=new he,ho=new he,po=new he,Bx=new he,jf=new he,$f=new he,Yf=new he,qf=new on,Kf=new on,Zf=new on;class Fi{constructor(e=new he,t=new he,r=new he){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Li.subVectors(e,t),o.cross(Li);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Li.subVectors(o,t),vr.subVectors(r,t),Xf.subVectors(e,t);const c=Li.dot(Li),u=Li.dot(vr),f=Li.dot(Xf),h=vr.dot(vr),m=vr.dot(Xf),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(h*f-u*m)*g,M=(c*m-u*f)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,xr)===null?!1:xr.x>=0&&xr.y>=0&&xr.x+xr.y<=1}static getInterpolation(e,t,r,o,a,c,u,f){return this.getBarycoord(e,t,r,o,xr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,xr.x),f.addScaledVector(c,xr.y),f.addScaledVector(u,xr.z),f)}static getInterpolatedAttribute(e,t,r,o,a,c){return qf.setScalar(0),Kf.setScalar(0),Zf.setScalar(0),qf.fromBufferAttribute(e,t),Kf.fromBufferAttribute(e,r),Zf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(qf,a.x),c.addScaledVector(Kf,a.y),c.addScaledVector(Zf,a.z),c}static isFrontFacing(e,t,r,o){return Li.subVectors(r,t),vr.subVectors(e,t),Li.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Li.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Fi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;ho.subVectors(o,r),po.subVectors(a,r),jf.subVectors(e,r);const f=ho.dot(jf),h=po.dot(jf);if(f<=0&&h<=0)return t.copy(r);$f.subVectors(e,o);const m=ho.dot($f),v=po.dot($f);if(m>=0&&v<=m)return t.copy(o);const g=f*v-m*h;if(g<=0&&f>=0&&m<=0&&f-m>0)return c=f/(f-m),t.copy(r).addScaledVector(ho,c);Yf.subVectors(e,a);const _=ho.dot(Yf),M=po.dot(Yf);if(M>=0&&_<=M)return t.copy(a);const T=_*h-f*M;if(T<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(po,u);const y=m*M-_*v;if(y<=0&&v-m>=0&&_-M>=0)return Bx.subVectors(a,o),u=(v-m)/(v-m+(_-M)),t.copy(o).addScaledVector(Bx,u);const S=1/(y+T+g);return c=T*S,u=g*S,t.copy(r).addScaledVector(ho,c).addScaledVector(po,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class el{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ni):Ni.fromBufferAttribute(a,c),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Sc.subVectors(this.max,Ta),mo.subVectors(e.a,Ta),go.subVectors(e.b,Ta),vo.subVectors(e.c,Ta),Xr.subVectors(go,mo),jr.subVectors(vo,go),Es.subVectors(mo,vo);let t=[0,-Xr.z,Xr.y,0,-jr.z,jr.y,0,-Es.z,Es.y,Xr.z,0,-Xr.x,jr.z,0,-jr.x,Es.z,0,-Es.x,-Xr.y,Xr.x,0,-jr.y,jr.x,0,-Es.y,Es.x,0];return!Qf(t,mo,go,vo,Sc)||(t=[1,0,0,0,1,0,0,0,1],!Qf(t,mo,go,vo,Sc))?!1:(Mc.crossVectors(Xr,jr),t=[Mc.x,Mc.y,Mc.z],Qf(t,mo,go,vo,Sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new he,new he,new he,new he,new he,new he,new he,new he],Ni=new he,yc=new el,mo=new he,go=new he,vo=new he,Xr=new he,jr=new he,Es=new he,Ta=new he,Sc=new he,Mc=new he,ws=new he;function Qf(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){ws.fromArray(n,a);const u=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),f=e.dot(ws),h=t.dot(ws),m=r.dot(ws);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const hn=new he,Ec=new yt;let vR=0;class Ls extends Fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=YC,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?hm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tR(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):nR(e,this.array)}}class NS extends Ls{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class IS extends Ls{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class zi extends Ls{constructor(e,t,r){super(new Float32Array(e),t,r)}}const xR=new el,Aa=new he,Jf=new he;class mm{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):xR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Aa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Jf)),this.expandByPoint(Aa.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _R=0;const xi=new dn,eh=new ui,xo=new he,li=new el,ba=new el,bn=new he;class os extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qC(e)?IS:NS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ft().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,r){return xi.makeTranslation(e,t,r),this.applyMatrix4(xi),this}scale(e,t,r){return xi.makeScale(e,t,r),this.applyMatrix4(xi),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new zi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];li.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ba.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(li.min,ba.min),li.expandByPoint(bn),bn.addVectors(li.max,ba.max),li.expandByPoint(bn)):(li.expandByPoint(ba.min),li.expandByPoint(ba.max))}li.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)bn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(bn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)bn.fromBufferAttribute(u,h),f&&(xo.fromBufferAttribute(e,h),bn.add(xo)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Ls(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const u=[],f=[],h=new Uint8Array(r.count);for(let Y=0;Y<r.count;Y++)u[Y]=new he,f[Y]=new he;const m=new he,v=new he,g=new he,_=new yt,M=new yt,T=new yt,y=new he,S=new he;function R(Y,B,U){h[Y]=h[B]=h[U]=1,m.fromBufferAttribute(r,Y),v.fromBufferAttribute(r,B),g.fromBufferAttribute(r,U),_.fromBufferAttribute(a,Y),M.fromBufferAttribute(a,B),T.fromBufferAttribute(a,U),v.sub(m),g.sub(m),M.sub(_),T.sub(_);const ee=1/(M.x*T.y-T.x*M.y);isFinite(ee)&&(y.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(ee),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(ee),u[Y].add(y),u[B].add(y),u[U].add(y),f[Y].add(S),f[B].add(S),f[U].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,B=L.length;Y<B;++Y){const U=L[Y],ee=U.start,fe=U.count;for(let V=ee,J=ee+fe;V<J;V+=3)R(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const P=new he,O=new he,F=new he,E=new he;function C(Y){F.fromBufferAttribute(o,Y),E.copy(F);const B=u[Y];P.copy(B),P.sub(F.multiplyScalar(F.dot(B))).normalize(),O.crossVectors(E,B);const ee=O.dot(f[Y])<0?-1:1;c.setXYZW(Y,P.x,P.y,P.z,ee)}for(let Y=0,B=r.count;Y<B;++Y)h[Y]&&C(Y);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ls(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new he,a=new he,c=new he,u=new he,f=new he,h=new he,m=new he,v=new he;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),u.add(m),f.add(m),h.add(m),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,v=u.normalized,g=new h.constructor(f.length*m);let _=0,M=0;for(let T=0,y=f.length;T<y;T++){u.isInterleavedBufferAttribute?_=f[T]*u.data.stride+u.offset:_=f[T]*m;for(let S=0;S<m;S++)g[M++]=h[_++]}return new Ls(g,m,v)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new os,r=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let m=0,v=h.length;m<v;m++){const g=h[m],_=e(g,r);f.push(_)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];m.push(_.toJSON(e.data))}m.length>0&&(o[f]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],v=a[h];for(let g=0,_=v.length;g<_;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new he,yR=new he,SR=new ft;class qr{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=th.subVectors(r,t).cross(yR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(th),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||SR.getNormalMatrix(e),o=this.coplanarPoint(th).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let MR=0;class Au extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Ba,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lS,this.blendDst=cS,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=HC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uf,this.stencilZFail=Uf,this.stencilZPass=Uf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new yt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new he,nh=new he,wc=new he,Tc=new he;class ER{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){nh.copy(e).add(t).multiplyScalar(.5),wc.copy(t).sub(e).normalize(),Tc.copy(this.origin).sub(nh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(wc),u=Tc.dot(this.direction),f=-Tc.dot(wc),h=Tc.lengthSq(),m=Math.abs(1-c*c);let v,g,_,M;if(m>0)if(v=c*f-u,g=c*u-f,M=a*m,v>=0)if(g>=-M)if(g<=M){const T=1/m;v*=T,g*=T,_=v*(v+c*g+2*u)+g*(c*v+g+2*f)+h}else g=a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*f)+h;else g=-a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*f)+h;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-f),a),_=-v*v+g*(g+2*f)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-f),a),_=g*(g+2*f)+h):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-f),a),_=-v*v+g*(g+2*f)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(nh).addScaledVector(wc,g),_}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),o=yr.dot(yr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(a=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(a=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-g.z)*v,f=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,f=(e.min.z-g.z)*v),r>f||u>o)||((u>r||r!==r)&&(r=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,o,a){const c=this.origin,u=this.direction,f=u.x,h=u.y,m=u.z,v=e.x-c.x,g=e.y-c.y,_=e.z-c.z,M=t.x-c.x,T=t.y-c.y,y=t.z-c.z,S=r.x-c.x,R=r.y-c.y,L=r.z-c.z,P=Math.abs(f),O=Math.abs(h),F=Math.abs(m);let E,C,Y,B,U,ee,fe,V,J,le,q,G;if(P>=O&&P>=F?(Y=f,ee=v,J=M,G=S,f>=0?(E=h,C=m,B=g,U=_,fe=T,V=y,le=R,q=L):(E=m,C=h,B=_,U=g,fe=y,V=T,le=L,q=R)):O>=F?(Y=h,ee=g,J=T,G=R,h>=0?(E=m,C=f,B=_,U=v,fe=y,V=M,le=L,q=S):(E=f,C=m,B=v,U=_,fe=M,V=y,le=S,q=L)):(Y=m,ee=_,J=y,G=L,m>=0?(E=f,C=h,B=v,U=g,fe=M,V=T,le=S,q=R):(E=h,C=f,B=g,U=v,fe=T,V=M,le=R,q=S)),Y===0)return null;const H=E/Y,W=C/Y,I=1/Y,ne=B-H*ee,Te=U-W*ee,Q=fe-H*J,ve=V-W*J,Ee=le-H*G,Ue=q-W*G,_e=Ee*ve-Ue*Q,Le=ne*Ue-Te*Ee,it=Q*Te-ve*ne;if(o){if(_e<0||Le<0||it<0)return null}else if((_e<0||Le<0||it<0)&&(_e>0||Le>0||it>0))return null;const Ge=_e+Le+it;if(Ge===0)return null;const mt=I*(_e*ee+Le*J+it*G);return(Ge>0?mt<0:mt>0)?null:this.at(mt/Ge,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wR extends Au{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.combine=uS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zx=new dn,Ts=new ER,Ac=new mm,Vx=new he,bc=new he,Cc=new he,Rc=new he,ih=new he,Pc=new he,Hx=new he,Dc=new he;class is extends ui{constructor(e=new os,t=new wR){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Pc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=u[f],v=a[f];m!==0&&(ih.fromBufferAttribute(v,e),c?Pc.addScaledVector(ih,m):Pc.addScaledVector(ih.sub(t),m))}t.add(Pc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(a),Ts.copy(e.ray).recast(e.near),!(Ac.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ac,Vx)===null||Ts.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(zx.copy(a).invert(),Ts.copy(e.ray).applyMatrix4(zx),!(r.boundingBox!==null&&Ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],R=Math.max(y.start,_.start),L=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let P=R,O=L;P<O;P+=3){const F=u.getX(P),E=u.getX(P+1),C=u.getX(P+2);o=Lc(this,S,e,r,h,m,v,F,E,C),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),T=Math.min(u.count,_.start+_.count);for(let y=M,S=T;y<S;y+=3){const R=u.getX(y),L=u.getX(y+1),P=u.getX(y+2);o=Lc(this,c,e,r,h,m,v,R,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],R=Math.max(y.start,_.start),L=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let P=R,O=L;P<O;P+=3){const F=P,E=P+1,C=P+2;o=Lc(this,S,e,r,h,m,v,F,E,C),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=M,S=T;y<S;y+=3){const R=y,L=y+1,P=y+2;o=Lc(this,c,e,r,h,m,v,R,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function TR(n,e,t,r,o,a,c,u){let f;if(e.side===ni?f=r.intersectTriangle(c,a,o,!0,u):f=r.intersectTriangle(o,a,c,e.side===Ns,u),f===null)return null;Dc.copy(u),Dc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Dc);return h<t.near||h>t.far?null:{distance:h,point:Dc.clone(),object:n}}function Lc(n,e,t,r,o,a,c,u,f,h){n.getVertexPosition(u,bc),n.getVertexPosition(f,Cc),n.getVertexPosition(h,Rc);const m=TR(n,e,t,r,bc,Cc,Rc,Hx);if(m){const v=new he;Fi.getBarycoord(Hx,bc,Cc,Rc,v),o&&(m.uv=Fi.getInterpolatedAttribute(o,u,f,h,v,new yt)),a&&(m.uv1=Fi.getInterpolatedAttribute(a,u,f,h,v,new yt)),c&&(m.normal=Fi.getInterpolatedAttribute(c,u,f,h,v,new he),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new he,materialIndex:0};Fi.getNormal(bc,Cc,Rc,g.normal),m.face=g,m.barycoord=v}return m}class AR extends $n{constructor(e=null,t=1,r=1,o,a,c,u,f,h=Nn,m=Nn,v,g){super(null,c,u,f,h,m,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const As=new mm,bR=new yt(.5,.5),Nc=new he;class mu{constructor(e=new qr,t=new qr,r=new qr,o=new qr,a=new qr,c=new qr){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ki,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],m=a[4],v=a[5],g=a[6],_=a[7],M=a[8],T=a[9],y=a[10],S=a[11],R=a[12],L=a[13],P=a[14],O=a[15];if(o[0].setComponents(h-c,_-m,S-M,O-R).normalize(),o[1].setComponents(h+c,_+m,S+M,O+R).normalize(),o[2].setComponents(h+u,_+v,S+T,O+L).normalize(),o[3].setComponents(h-u,_-v,S-T,O-L).normalize(),r)o[4].setComponents(f,g,y,P).normalize(),o[5].setComponents(h-f,_-g,S-y,O-P).normalize();else if(o[4].setComponents(h-f,_-g,S-y,O-P).normalize(),t===ki)o[5].setComponents(h+f,_+g,S+y,O+P).normalize();else if(t===hu)o[5].setComponents(f,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const t=bR.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Nc.x=o.normal.x>0?e.max.x:e.min.x,Nc.y=o.normal.y>0?e.max.y:e.min.y,Nc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gx=new dn;class gm{constructor(){this.coordinateSystem=ki,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const a=t[o];Gx.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),r[o]===void 0&&(r[o]=new mu),r[o].setFromProjectionMatrix(Gx,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new mu),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new gm().copy(this)}}class US extends $n{constructor(e=[],t=Lo,r,o,a,c,u,f,h,m){super(e,t,r,o,a,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Io extends $n{constructor(e,t,r=or,o,a,c,u=Nn,f=Nn,h,m=ns,v=1){if(m!==ns&&m!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,u,f,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class FS extends Io{constructor(e,t=or,r=Lo,o,a,c=Nn,u=Nn,f,h=ns){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,a,c,u,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class OS extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tl extends os{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],m=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(f),this.setAttribute("position",new zi(h,3)),this.setAttribute("normal",new zi(m,3)),this.setAttribute("uv",new zi(v,2));function M(T,y,S,R,L,P,O,F,E,C,Y){const B=P/E,U=O/C,ee=P/2,fe=O/2,V=F/2,J=E+1,le=C+1;let q=0,G=0;const H=new he;for(let W=0;W<le;W++){const I=W*U-fe;for(let ne=0;ne<J;ne++){const Te=ne*B-ee;H[T]=Te*R,H[y]=I*L,H[S]=V,h.push(H.x,H.y,H.z),H[T]=0,H[y]=0,H[S]=F>0?1:-1,m.push(H.x,H.y,H.z),v.push(ne/E),v.push(1-W/C),q+=1}}for(let W=0;W<C;W++)for(let I=0;I<E;I++){const ne=g+I+J*W,Te=g+I+J*(W+1),Q=g+(I+1)+J*(W+1),ve=g+(I+1)+J*W;f.push(ne,Te,ve),f.push(Te,Q,ve),G+=6}u.addGroup(_,G,Y),_+=G,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bu extends os{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),f=Math.floor(o),h=u+1,m=f+1,v=e/u,g=t/f,_=[],M=[],T=[],y=[];for(let S=0;S<m;S++){const R=S*g-c;for(let L=0;L<h;L++){const P=L*v-a;M.push(P,-R,0),T.push(0,0,1),y.push(L/u),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let R=0;R<u;R++){const L=R+h*S,P=R+h*(S+1),O=R+1+h*(S+1),F=R+1+h*S;_.push(L,P,F),_.push(P,O,F)}this.setIndex(_),this.setAttribute("position",new zi(M,3)),this.setAttribute("normal",new zi(T,3)),this.setAttribute("uv",new zi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Uo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Wx(o))o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Wx(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Wn(n){const e={};for(let t=0;t<n.length;t++){const r=Uo(n[t]);for(const o in r)e[o]=r[o]}return e}function Wx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function CR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const RR={clone:Uo,merge:Wn};var PR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Au{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PR,this.fragmentShader=DR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=CR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[r].value=new yt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new he().fromArray(o.value);break;case"v4":this.uniforms[r].value=new on().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class LR extends rs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NR extends Au{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IR extends Au{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ic=new he,Uc=new Bo,Ki=new he;class BS extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ic,Uc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Uc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ic,Uc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Uc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $r=new he,Xx=new yt,jx=new yt;class Ui extends BS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,Xx,jx),t.subVectors(jx,Xx)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ff*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class UR extends BS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=-90,yo=1;class _p extends ui{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ui(_o,yo,e,t);o.layers=this.layers,this.add(o);const a=new Ui(_o,yo,e,t);a.layers=this.layers,this.add(a);const c=new Ui(_o,yo,e,t);c.layers=this.layers,this.add(c);const u=new Ui(_o,yo,e,t);u.layers=this.layers,this.add(u);const f=new Ui(_o,yo,e,t);f.layers=this.layers,this.add(f);const h=new Ui(_o,yo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class FR extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function $x(n,e,t,r){const o=OR(r);switch(t){case ES:return n*e;case TS:return n*e/o.components*o.byteLength;case um:return n*e/o.components*o.byteLength;case Is:return n*e*2/o.components*o.byteLength;case dm:return n*e*2/o.components*o.byteLength;case wS:return n*e*3/o.components*o.byteLength;case ir:return n*e*4/o.components*o.byteLength;case fm:return n*e*4/o.components*o.byteLength;case jc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(n,16)*Math.max(e,8)/4;case Hh:case Wh:return Math.max(n,8)*Math.max(e,8)/2;case jh:case $h:case qh:case Kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yh:case cu:case Zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case rp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case op:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ap:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case up:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fp:case hp:case pp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mp:case gp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uu:case vp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OR(n){switch(n){case yi:case _S:return{byteLength:1,components:1};case Xa:case yS:case ar:return{byteLength:2,components:1};case lm:case cm:return{byteLength:2,components:4};case or:case am:case nr:return{byteLength:4,components:1};case SS:case MS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:om}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=om);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zS(){let n=null,e=!1,t=null,r=null;function o(a,c){r=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function kR(n){const e=new WeakMap;function t(u,f){const h=u.array,m=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,h,m),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,f,h){const m=f.array,v=f.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,m);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],T=v[_];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,v[g]=T)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const T=v[_];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}var BR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$R=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,u2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p2="gl_FragColor = linearToOutputTexel( gl_FragColor );",m2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,P2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,D2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z2=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_P=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VP=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$P=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:BR,alphahash_pars_fragment:zR,alphamap_fragment:VR,alphamap_pars_fragment:HR,alphatest_fragment:GR,alphatest_pars_fragment:WR,aomap_fragment:XR,aomap_pars_fragment:jR,batching_pars_vertex:$R,batching_vertex:YR,begin_vertex:qR,beginnormal_vertex:KR,bsdfs:ZR,iridescence_fragment:QR,bumpmap_pars_fragment:JR,clipping_planes_fragment:e2,clipping_planes_pars_fragment:t2,clipping_planes_pars_vertex:n2,clipping_planes_vertex:i2,color_fragment:r2,color_pars_fragment:s2,color_pars_vertex:o2,color_vertex:a2,common:l2,defaultnormal_vertex:c2,displacementmap_pars_vertex:u2,displacementmap_vertex:d2,emissivemap_fragment:f2,emissivemap_pars_fragment:h2,colorspace_fragment:p2,colorspace_pars_fragment:m2,envmap_fragment:g2,envmap_common_pars_fragment:v2,envmap_pars_fragment:x2,envmap_pars_vertex:_2,envmap_physical_pars_fragment:P2,envmap_vertex:y2,fog_vertex:S2,fog_pars_vertex:M2,fog_fragment:E2,fog_pars_fragment:w2,gradientmap_pars_fragment:T2,lightmap_pars_fragment:A2,lights_lambert_fragment:b2,lights_lambert_pars_fragment:C2,lights_pars_begin:R2,lights_toon_fragment:D2,lights_toon_pars_fragment:L2,lights_phong_fragment:N2,lights_phong_pars_fragment:I2,lights_physical_fragment:U2,lights_physical_pars_fragment:F2,lights_fragment_begin:O2,lights_fragment_maps:k2,lights_fragment_end:B2,lightprobes_pars_fragment:z2,logdepthbuf_fragment:V2,logdepthbuf_pars_fragment:H2,logdepthbuf_pars_vertex:G2,logdepthbuf_vertex:W2,map_fragment:X2,map_pars_fragment:j2,map_particle_fragment:$2,map_particle_pars_fragment:Y2,metalnessmap_fragment:q2,metalnessmap_pars_fragment:K2,morphinstance_vertex:Z2,morphcolor_vertex:Q2,morphnormal_vertex:J2,morphtarget_pars_vertex:eP,morphtarget_vertex:tP,normal_fragment_begin:nP,normal_fragment_maps:iP,normal_pars_fragment:rP,normal_pars_vertex:sP,normal_vertex:oP,normalmap_pars_fragment:aP,clearcoat_normal_fragment_begin:lP,clearcoat_normal_fragment_maps:cP,clearcoat_pars_fragment:uP,iridescence_pars_fragment:dP,opaque_fragment:fP,packing:hP,premultiplied_alpha_fragment:pP,project_vertex:mP,dithering_fragment:gP,dithering_pars_fragment:vP,roughnessmap_fragment:xP,roughnessmap_pars_fragment:_P,shadowmap_pars_fragment:yP,shadowmap_pars_vertex:SP,shadowmap_vertex:MP,shadowmask_pars_fragment:EP,skinbase_vertex:wP,skinning_pars_vertex:TP,skinning_vertex:AP,skinnormal_vertex:bP,specularmap_fragment:CP,specularmap_pars_fragment:RP,tonemapping_fragment:PP,tonemapping_pars_fragment:DP,transmission_fragment:LP,transmission_pars_fragment:NP,uv_pars_fragment:IP,uv_pars_vertex:UP,uv_vertex:FP,worldpos_vertex:OP,background_vert:kP,background_frag:BP,backgroundCube_vert:zP,backgroundCube_frag:VP,cube_vert:HP,cube_frag:GP,depth_vert:WP,depth_frag:XP,distance_vert:jP,distance_frag:$P,equirect_vert:YP,equirect_frag:qP,linedashed_vert:KP,linedashed_frag:ZP,meshbasic_vert:QP,meshbasic_frag:JP,meshlambert_vert:e3,meshlambert_frag:t3,meshmatcap_vert:n3,meshmatcap_frag:i3,meshnormal_vert:r3,meshnormal_frag:s3,meshphong_vert:o3,meshphong_frag:a3,meshphysical_vert:l3,meshphysical_frag:c3,meshtoon_vert:u3,meshtoon_frag:d3,points_vert:f3,points_frag:h3,shadow_vert:p3,shadow_frag:m3,sprite_vert:g3,sprite_frag:v3},Ve={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},er={basic:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Wn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Wn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Wn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Wn([Ve.points,Ve.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Wn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Wn([Ve.common,Ve.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Wn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Wn([Ve.sprite,Ve.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Wn([Ve.common,Ve.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Wn([Ve.lights,Ve.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};er.physical={uniforms:Wn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Fc={r:0,b:0,g:0},x3=new dn,VS=new ft;VS.set(-1,0,0,0,1,0,0,0,1);function _3(n,e,t,r,o,a){const c=new Ut(0);let u=o===!0?0:1,f,h,m=null,v=0,g=null;function _(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const P=R.backgroundBlurriness>0;L=e.get(L,P)}return L}function M(R){let L=!1;const P=_(R);P===null?y(c,u):P&&P.isColor&&(y(P,1),L=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(R,L){const P=_(L);P&&P.isCubeTexture?(h===void 0&&(h=new is(new tl(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Uo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,F,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x3.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(VS),h.material.toneMapped=Mt.getTransfer(P.colorSpace)!==Ot,(m!==P||v!==P.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=P,v=P.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new is(new bu(2,2),new rs({name:"BackgroundMaterial",uniforms:Uo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=Mt.getTransfer(P.colorSpace)!==Ot,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,m=P,v=P.version,g=n.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function y(R,L){R.getRGB(Fc,kS(n)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,L,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),u=L,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,y(c,u)},render:M,addToRenderList:T,dispose:S}}function y3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function u(U,ee,fe,V,J){let le=!1;const q=v(U,V,fe,ee);a!==q&&(a=q,h(a.object)),le=_(U,V,fe,J),le&&M(U,V,fe,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,P(U,ee,fe,V),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.createVertexArray()}function h(U){return n.bindVertexArray(U)}function m(U){return n.deleteVertexArray(U)}function v(U,ee,fe,V){const J=V.wireframe===!0;let le=r[ee.id];le===void 0&&(le={},r[ee.id]=le);const q=U.isInstancedMesh===!0?U.id:0;let G=le[q];G===void 0&&(G={},le[q]=G);let H=G[fe.id];H===void 0&&(H={},G[fe.id]=H);let W=H[J];return W===void 0&&(W=g(f()),H[J]=W),W}function g(U){const ee=[],fe=[],V=[];for(let J=0;J<t;J++)ee[J]=0,fe[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:fe,attributeDivisors:V,object:U,attributes:{},index:null}}function _(U,ee,fe,V){const J=a.attributes,le=ee.attributes;let q=0;const G=fe.getAttributes();for(const H in G)if(G[H].location>=0){const I=J[H];let ne=le[H];if(ne===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),I===void 0||I.attribute!==ne||ne&&I.data!==ne.data)return!0;q++}return a.attributesNum!==q||a.index!==V}function M(U,ee,fe,V){const J={},le=ee.attributes;let q=0;const G=fe.getAttributes();for(const H in G)if(G[H].location>=0){let I=le[H];I===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(I=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(I=U.instanceColor));const ne={};ne.attribute=I,I&&I.data&&(ne.data=I.data),J[H]=ne,q++}a.attributes=J,a.attributesNum=q,a.index=V}function T(){const U=a.newAttributes;for(let ee=0,fe=U.length;ee<fe;ee++)U[ee]=0}function y(U){S(U,0)}function S(U,ee){const fe=a.newAttributes,V=a.enabledAttributes,J=a.attributeDivisors;fe[U]=1,V[U]===0&&(n.enableVertexAttribArray(U),V[U]=1),J[U]!==ee&&(n.vertexAttribDivisor(U,ee),J[U]=ee)}function R(){const U=a.newAttributes,ee=a.enabledAttributes;for(let fe=0,V=ee.length;fe<V;fe++)ee[fe]!==U[fe]&&(n.disableVertexAttribArray(fe),ee[fe]=0)}function L(U,ee,fe,V,J,le,q){q===!0?n.vertexAttribIPointer(U,ee,fe,J,le):n.vertexAttribPointer(U,ee,fe,V,J,le)}function P(U,ee,fe,V){T();const J=V.attributes,le=fe.getAttributes(),q=ee.defaultAttributeValues;for(const G in le){const H=le[G];if(H.location>=0){let W=J[G];if(W===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){const I=W.normalized,ne=W.itemSize,Te=e.get(W);if(Te===void 0)continue;const Q=Te.buffer,ve=Te.type,Ee=Te.bytesPerElement,Ue=ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===am;if(W.isInterleavedBufferAttribute){const _e=W.data,Le=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,it=W.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ge=0;Ge<H.locationSize;Ge++)S(H.location+Ge,_e.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)y(H.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Ge=0;Ge<H.locationSize;Ge++)L(H.location+Ge,ne/H.locationSize,ve,I,Le*Ee,(it+ne/H.locationSize*Ge)*Ee,Ue)}else{if(W.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)S(H.location+_e,W.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let _e=0;_e<H.locationSize;_e++)L(H.location+_e,ne/H.locationSize,ve,I,ne*Ee,ne/H.locationSize*_e*Ee,Ue)}}else if(q!==void 0){const I=q[G];if(I!==void 0)switch(I.length){case 2:n.vertexAttrib2fv(H.location,I);break;case 3:n.vertexAttrib3fv(H.location,I);break;case 4:n.vertexAttrib4fv(H.location,I);break;default:n.vertexAttrib1fv(H.location,I)}}}}R()}function O(){Y();for(const U in r){const ee=r[U];for(const fe in ee){const V=ee[fe];for(const J in V){const le=V[J];for(const q in le)m(le[q].object),delete le[q];delete V[J]}}delete r[U]}}function F(U){if(r[U.id]===void 0)return;const ee=r[U.id];for(const fe in ee){const V=ee[fe];for(const J in V){const le=V[J];for(const q in le)m(le[q].object),delete le[q];delete V[J]}}delete r[U.id]}function E(U){for(const ee in r){const fe=r[ee];for(const V in fe){const J=fe[V];if(J[U.id]===void 0)continue;const le=J[U.id];for(const q in le)m(le[q].object),delete le[q];delete J[U.id]}}}function C(U){for(const ee in r){const fe=r[ee],V=U.isInstancedMesh===!0?U.id:0,J=fe[V];if(J!==void 0){for(const le in J){const q=J[le];for(const G in q)m(q[G].object),delete q[G];delete J[le]}delete fe[V],Object.keys(fe).length===0&&delete r[ee]}}}function Y(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfObject:C,releaseStatesOfProgram:E,initAttributes:T,enableAttribute:y,disableUnusedAttributes:R}}function S3(n,e,t){let r;function o(f){r=f}function a(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function c(f,h,m){m!==0&&(n.drawArraysInstanced(r,f,h,m),t.update(h,r,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,m);let g=0;for(let _=0;_<m;_++)g+=h[_];t.update(g,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function M3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(E){return!(E!==ir&&r.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(E){const C=E===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==yi&&E!==nr&&!C&&r.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(dt("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=n.getParameter(n.MAX_SAMPLES),F=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:P,maxSamples:O,samples:F}}function E3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new qr,u=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||r!==0||o;return o=g,r=v.length,_},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||M===null||M.length===0||a&&!y)a?m(null):h();else{const R=a?0:r,L=R*4;let P=S.clippingState||null;f.value=P,P=m(M,g,L,_);for(let O=0;O!==L;++O)P[O]=t[O];S.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,g,_,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=f.value,M!==!0||y===null){const S=_+T*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,P=_;L!==T;++L,P+=4)c.copy(v[L]).applyMatrix4(R,u),c.normal.toArray(y,P),y[P+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}class vm extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new US(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new tl(5,5,5),a=new rs({name:"CubemapFromEquirect",uniforms:Uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ni,blending:bo});a.uniforms.tEquirect.value=t;const c=new is(o,a),u=t.minFilter;return t.minFilter===Qr&&(t.minFilter=ei),new _p(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}const Yx=256,w3=3,T3=20,HS=256,GS=16,A3=3,b3=new he,C3=new Ut;class gu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _p(1,10,null),this._boxMesh=new is(new tl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=b3}=a,f=this._renderer;this._setSize(c);const h=this._allocateTarget(),m=this._getSourceTarget(!0);t>0&&(m.texture.mipmapsAutoUpdate=!1);const v=f.autoClear,g=f.autoClearColor,_=f.autoClearDepth,M=f.autoClearStencil,T=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,T===null&&(e.background=f.getClearColor(C3));const y=new _p(r,o,m);return y.position.copy(u),y.update(f,e),f.autoClear=v,f.autoClearColor=g,f.autoClearDepth=_,f.autoClearStencil=M,e.background=T,t>0&&(m.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Yx,eR(e))}_fromTexture(e,t){e.mapping===Lo||e.mapping===Wa?this._setSize(e.image.length===0?Yx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=qx(e,!1,!1),r=Math.log2(e)-w3;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=qx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,a=this._cubeCamera;o.material=r,a.renderTarget=e,a.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),a.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Lo||e.mapping===Wa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=R3(),this._integrationMaterial=P3());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/GS);for(let c=0;c<=r;c++){const u=gu.lodToRoughness(c,r);if(c>r-A3)a.roughness.value=u,this._renderCube(e,c,this._integrationMaterial);else{const f=u>0?Math.log2(t)+.5*Math.log2(6/(HS*Math.pow(u,4)))+.5:0;o.roughness.value=u,o.lodBias.value=f,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=D3());const r=this._blurMaterial,o=r.uniforms,a=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=a.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(a,0,r)}}function qx(n,e,t){return new vm(n,{minFilter:Qr,generateMipmaps:e,type:ar,colorSpace:du,depthBuffer:t})}function nl(n,e,t){return new rs({name:n,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:ni,blending:bo,depthTest:!1,depthWrite:!1})}function R3(){return nl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${HS}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function P3(){return nl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:GS}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function D3(){return nl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${T3}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kx(){return nl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zx(){return nl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function L3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?c(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===Lf||_===Nf)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new vm(M.height);return T.fromEquirectangularTexture(n,g),e.set(g,T),g.addEventListener("dispose",h),u(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const _=g.mapping,M=_===Lf||_===Nf,T=_===Lo||_===Wa;if(M||T){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new gu(n)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return M&&R&&R.height>0||T&&R&&f(R)?(r===null&&(r=new gu(n)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",m),y.texture):null}}}return g}function u(g,_){return _===Lf?g.mapping=Lo:_===Nf&&(g.mapping=Wa),g}function f(g){let _=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function m(g){const _=g.target;_.removeEventListener("dispose",m);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function N3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Kc("WebGLRenderer: "+r+" extension not supported."),o}}}function I3(n,e,t,r){const o={},a=new WeakMap,c=new FinalizationRegistry(M=>delete o[M]);function u(M){f(M.target)}function f(M){M.index!==null&&e.remove(M.index);for(const y in M.attributes)e.remove(M.attributes[y]);M.removeEventListener("dispose",u),delete o[M.id],c.unregister(M);const T=a.get(M);T&&(e.remove(T),a.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function h(M,T){return o[T.id]!==void 0||(T.addEventListener("dispose",u),o[T.id]=new WeakRef(T),c.register(T,T.id,T),t.memory.geometries++),T}function m(M){const T=M.attributes;for(const y in T)e.update(T[y],n.ARRAY_BUFFER)}function v(M){const T=M.index,y=M.attributes.position;let S=0;if(y===void 0)return;const R=T!==null?T.array.length:y.array.length/3-1,L=y.count>=65535?IS:NS,P=new L(Math.ceil(R/3)*6,1),O=P.array;if(T!==null){const E=T.array;S=T.version;for(let C=0,Y=0;C<R;C+=3){const B=E[C+0],U=E[C+1],ee=E[C+2];O[Y++]=B,O[Y++]=U,O[Y++]=U,O[Y++]=ee,O[Y++]=ee,O[Y++]=B}}else{S=y.version;for(let E=0,C=0;E<R;E+=3){const Y=E+0,B=E+1,U=E+2;O[C++]=Y,O[C++]=B,O[C++]=B,O[C++]=U,O[C++]=U,O[C++]=Y}}P.version=S;const F=a.get(M);F&&e.remove(F),a.set(M,P)}function g(M){const T=a.get(M);if(T){const y=M.index;y!==null&&T.version<y.version&&v(M)}else v(M);return a.get(M)}function _(){for(const M in o){const T=o[M].deref();T!==void 0&&f(T)}}return{get:h,update:m,getWireframeAttribute:g,dispose:_}}function U3(n,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function f(v,g){n.drawElements(r,g,a,v*c),t.update(g,r,1)}function h(v,g,_){_!==0&&(n.drawElementsInstanced(r,g,a,v*c,_),t.update(g,r,_))}function m(v,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,a,v,0,_);let T=0;for(let y=0;y<_;y++)T+=g[y];t.update(T,r,1)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=m}function F3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function O3(n,e,t){const r=new WeakMap,o=new on;function a(c,u,f){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let B=function(){C.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var _=B;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let P=0;M===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let O=u.attributes.position.count*P,F=1;O>e.maxTextureSize&&(F=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const E=new Float32Array(O*F*4*v),C=new PS(E,O,F,v);C.type=nr,C.needsUpdate=!0;const Y=P*4;for(let U=0;U<v;U++){const ee=S[U],fe=R[U],V=L[U],J=O*F*4*U;for(let le=0;le<ee.count;le++){const q=le*Y;M===!0&&(o.fromBufferAttribute(ee,le),E[J+q+0]=o.x,E[J+q+1]=o.y,E[J+q+2]=o.z,E[J+q+3]=0),T===!0&&(o.fromBufferAttribute(fe,le),E[J+q+4]=o.x,E[J+q+5]=o.y,E[J+q+6]=o.z,E[J+q+7]=0),y===!0&&(o.fromBufferAttribute(V,le),E[J+q+8]=o.x,E[J+q+9]=o.y,E[J+q+10]=o.z,E[J+q+11]=V.itemSize===4?o.w:1)}}g={count:v,texture:C,size:new yt(O,F)},r.set(u,g),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function k3(n,e,t,r,o){let a=new WeakMap;function c(h){const m=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==m&&(_.update(),a.set(_,m))}return g}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const B3={[dS]:"LINEAR_TONE_MAPPING",[fS]:"REINHARD_TONE_MAPPING",[hS]:"CINEON_TONE_MAPPING",[pS]:"ACES_FILMIC_TONE_MAPPING",[gS]:"AGX_TONE_MAPPING",[vS]:"NEUTRAL_TONE_MAPPING",[mS]:"CUSTOM_TONE_MAPPING"};function z3(n,e,t,r,o,a){const c=new sr(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,f=null,h=null;const m=new os;m.setAttribute("position",new zi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new zi([0,2,0,0,2,0],2));const v=new LR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new is(m,v),_=new UR(-1,1,1,-1,0,1);let M=null,T=null,y=!1,S,R=null,L=[],P=!1;this.setSize=function(O,F){c.setSize(O,F),u!==null&&u.setSize(O,F),f!==null&&f.setSize(O,F);for(let E=0;E<L.length;E++){const C=L[E];C.setSize&&C.setSize(O,F)}},this.setEffects=function(O){L=O,P=L.length>0&&L[0].isRenderPass===!0;const F=c.width,E=c.height;L.length>0&&u===null&&(u=new sr(F,E,{type:ar,depthBuffer:!1,stencilBuffer:!1}),f=new sr(F,E,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const C=o===!0&&L.some(Y=>Y.needsDepthTexture===!0);C!==(c.depthTexture!==null)&&(C===!0&&h===null&&(h=new Io(F,E),a===!0&&(h.format=Jr,h.type=No)),c.dispose(),c.depthTexture=C?h:null,c.resolveDepthBuffer=C,c.storeMultisampledDepthBuffer=C);for(let Y=0;Y<L.length;Y++){const B=L[Y];B.setSize&&B.setSize(F,E),C&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(h)}},this.begin=function(O,F){if(y||O.toneMapping===Er&&L.length===0)return!1;if(R=F,F!==null){const E=F.width,C=F.height;(c.width!==E||c.height!==C)&&this.setSize(E,C)}return P===!1&&O.setRenderTarget(c),S=O.toneMapping,O.toneMapping=Er,!0},this.hasRenderPass=function(){return P},this.end=function(O,F){O.toneMapping=S,y=!0;let E=c,C=u;for(let Y=0;Y<L.length;Y++){const B=L[Y];B.enabled!==!1&&(B.render(O,C,E,F),B.needsSwap!==!1&&(E=C,C=C===u?f:u))}if(M!==O.outputColorSpace||T!==O.toneMapping){M=O.outputColorSpace,T=O.toneMapping,v.defines={},Mt.getTransfer(M)===Ot&&(v.defines.SRGB_TRANSFER="");const Y=B3[T];Y&&(v.defines[Y]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=E.texture,O.setRenderTarget(R),O.render(g,_),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),m.dispose(),v.dispose()}}const WS=new $n,XS=new Io(1,1),jS=new FS(1),$S=new PS,YS=new lR,qS=new US,Qx=[],Jx=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function zo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Qx[o];if(a===void 0&&(a=new Float32Array(o),Qx[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function yn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Cu(n,e){let t=Jx[e];t===void 0&&(t=new Int32Array(e),Jx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function V3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2fv(this.addr,e),Sn(t,e)}}function G3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;n.uniform3fv(this.addr,e),Sn(t,e)}}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4fv(this.addr,e),Sn(t,e)}}function X3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;n_.set(r),n.uniformMatrix2fv(this.addr,!1,n_),Sn(t,r)}}function j3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;t_.set(r),n.uniformMatrix3fv(this.addr,!1,t_),Sn(t,r)}}function $3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;e_.set(r),n.uniformMatrix4fv(this.addr,!1,e_),Sn(t,r)}}function Y3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2iv(this.addr,e),Sn(t,e)}}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3iv(this.addr,e),Sn(t,e)}}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4iv(this.addr,e),Sn(t,e)}}function Q3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function J3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2uiv(this.addr,e),Sn(t,e)}}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3uiv(this.addr,e),Sn(t,e)}}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4uiv(this.addr,e),Sn(t,e)}}function Ru(n){return n.version===0&&(n.compareFunction=CS,n.needsUpdate=!0),n}function nD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?a=Ru(XS):a=WS,t.setTexture2D(e||a,o)}function iD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||YS,o)}function rD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Ru(jS):a=qS,t.setTextureCube(e||a,o)}function sD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||$S,o)}function oD(n){switch(n){case 5126:return V3;case 35664:return H3;case 35665:return G3;case 35666:return W3;case 35674:return X3;case 35675:return j3;case 35676:return $3;case 5124:case 35670:return Y3;case 35667:case 35671:return q3;case 35668:case 35672:return K3;case 35669:case 35673:return Z3;case 5125:return Q3;case 36294:return J3;case 36295:return eD;case 36296:return tD;case 35678:case 36198:case 36298:case 36306:case 35682:return nD;case 35679:case 36299:case 36307:return iD;case 35680:case 36300:case 36308:case 36293:return rD;case 36289:case 36303:case 36311:case 36292:return sD}}function aD(n,e){n.uniform1fv(this.addr,e)}function lD(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function cD(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function uD(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function dD(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fD(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hD(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pD(n,e){n.uniform1iv(this.addr,e)}function mD(n,e){n.uniform2iv(this.addr,e)}function gD(n,e){n.uniform3iv(this.addr,e)}function vD(n,e){n.uniform4iv(this.addr,e)}function xD(n,e){n.uniform1uiv(this.addr,e)}function _D(n,e){n.uniform2uiv(this.addr,e)}function yD(n,e){n.uniform3uiv(this.addr,e)}function SD(n,e){n.uniform4uiv(this.addr,e)}function MD(n,e,t){const r=this.cache,o=e.length,a=Cu(t,o);yn(r,a)||(n.uniform1iv(this.addr,a),Sn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Ru(XS):c=WS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function ED(n,e,t){const r=this.cache,o=e.length,a=Cu(t,o);yn(r,a)||(n.uniform1iv(this.addr,a),Sn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||YS,a[c])}function wD(n,e,t){const r=this.cache,o=e.length,a=Cu(t,o);yn(r,a)||(n.uniform1iv(this.addr,a),Sn(r,a));let c;this.type===n.SAMPLER_CUBE_SHADOW?c=Ru(jS):c=qS;for(let u=0;u!==o;++u)t.setTextureCube(e[u]||c,a[u])}function TD(n,e,t){const r=this.cache,o=e.length,a=Cu(t,o);yn(r,a)||(n.uniform1iv(this.addr,a),Sn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||$S,a[c])}function AD(n){switch(n){case 5126:return aD;case 35664:return lD;case 35665:return cD;case 35666:return uD;case 35674:return dD;case 35675:return fD;case 35676:return hD;case 5124:case 35670:return pD;case 35667:case 35671:return mD;case 35668:case 35672:return gD;case 35669:case 35673:return vD;case 5125:return xD;case 36294:return _D;case 36295:return yD;case 36296:return SD;case 35678:case 36198:case 36298:case 36306:case 35682:return MD;case 35679:case 36299:case 36307:return ED;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return TD}}class bD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=oD(t.type)}}class CD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AD(t.type)}}class RD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function i_(n,e){n.seq.push(e),n.map[e.id]=e}function PD(n,e,t){const r=n.name,o=r.length;for(rh.lastIndex=0;;){const a=rh.exec(r),c=rh.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){i_(t,h===void 0?new bD(u,n,e):new CD(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new RD(u),i_(t,v)),t=v}}}class Zc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),f=e.getUniformLocation(t,u.name);PD(u,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=r[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function r_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const DD=37297;let LD=0;function ND(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const s_=new ft;function ID(n){Mt._getMatrix(s_,Mt.workingColorSpace,n);const e=`mat3( ${s_.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case fu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function o_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+ND(n.getShaderSource(e),u)}else return a}function UD(n,e){const t=ID(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const FD={[dS]:"Linear",[fS]:"Reinhard",[hS]:"Cineon",[pS]:"ACESFilmic",[gS]:"AgX",[vS]:"Neutral",[mS]:"Custom"};function OD(n,e){const t=FD[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new he;function kD(){Mt.getLuminanceCoefficients(Oc);const n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function zD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function VD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function La(n){return n!==""}function a_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function l_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HD=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(n){return n.replace(HD,GD)}function GD(n,e){const t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yp(t)}const WD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(n){return n.replace(WD,XD)}function XD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function u_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jD={[Xc]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function $D(n){return jD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YD={[Wa]:"ENVMAP_MODE_REFRACTION"};function qD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":YD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KD={[uS]:"ENVMAP_BLENDING_MULTIPLY",[OC]:"ENVMAP_BLENDING_MIX",[kC]:"ENVMAP_BLENDING_ADD"};function ZD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KD[n.combine]||"ENVMAP_BLENDING_NONE"}function QD(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=$D(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",m=qD(t),v=ZD(t),g=BD(t),_=zD(a),M=o.createProgram();let T,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(La).join(`
`),T.length>0&&(T+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(La).join(`
`),y.length>0&&(y+=`
`)):(T=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),y=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?pt.tonemapping_pars_fragment:"",t.toneMapping!==Er?OD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,UD("linearToOutputTexel",t.outputColorSpace),kD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),c=yp(c),c=a_(c,t),c=l_(c,t),u=yp(u),u=a_(u,t),u=l_(u,t),c=c_(c),u=c_(u),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,T=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",t.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+T+c,L=S+y+u,P=r_(o,o.VERTEX_SHADER,R),O=r_(o,o.FRAGMENT_SHADER,L);o.attachShader(M,P),o.attachShader(M,O),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(B){if(n.debug.checkShaderErrors){const U=o.getProgramInfoLog(M)||"",ee=o.getShaderInfoLog(P)||"",fe=o.getShaderInfoLog(O)||"",V=U.trim(),J=ee.trim(),le=fe.trim();let q=!0,G=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,P,O);else{const H=o_(o,P,"vertex"),W=o_(o,O,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+V+`
`+H+`
`+W)}else V!==""?dt("WebGLProgram: Program Info Log:",V):(J===""||le==="")&&(G=!1);G&&(B.diagnostics={runnable:q,programLog:V,vertexShader:{log:J,prefix:T},fragmentShader:{log:le,prefix:y}})}o.deleteShader(P),o.deleteShader(O),E=new Zc(o,M),C=VD(o,M)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(M,DD)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LD++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=O,this}let JD=0;class eL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new tL(e),t.set(e,r)),r}}class tL{constructor(e){this.id=JD++,this.code=e,this.usedTimes=0}}function nL(n){return n===Is||n===cu||n===uu}function iL(n,e,t,r,o,a){const c=new DS,u=new eL,f=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return f.add(E),E===0?"uv":`uv${E}`}function M(E,C,Y,B,U,ee){const fe=B.fog,V=U.geometry,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,le=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||J,le),G=g[E.type];let H=r.precision;E.precision!==null&&(H=r.getMaxPrecision(E.precision),H!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",H,"instead."));const W=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,I=W!==void 0?W.length:0;let ne=0;V.morphAttributes.position!==void 0&&(ne=1),V.morphAttributes.normal!==void 0&&(ne=2),V.morphAttributes.color!==void 0&&(ne=3);let Te,Q,ve,Ee;if(G){const Oe=er[G];Te=Oe.vertexShader,Q=Oe.fragmentShader}else{Te=E.vertexShader,Q=E.fragmentShader;const Oe=u.getVertexShaderStage(E),vt=u.getFragmentShaderStage(E);u.update(E,Oe,vt),ve=Oe.id,Ee=vt.id}const Ue=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,Ge=!!E.map,mt=!!E.matcap,gt=!!q,Xe=gt&&q.isPMREMTexture===!0,Wt=!!E.aoMap,kt=!!E.lightMap,en=!!E.bumpMap&&E.wireframe===!1,Pt=!!E.normalMap,Kt=!!E.displacementMap,Nt=!!E.emissiveMap,Bt=!!E.metalnessMap,Zt=!!E.roughnessMap,an=E.anisotropy>0,K=E.clearcoat>0,tn=E.diffuseRoughness>0,bt=E.dispersion>0,It=E.retroreflectivity>0,we=E.iridescence>0,wt=E.sheen>0,He=E.transmission>0,rt=an&&!!E.anisotropyMap,N=K&&!!E.clearcoatMap,w=K&&!!E.clearcoatNormalMap,ie=K&&!!E.clearcoatRoughnessMap,Ae=tn&&!!E.diffuseRoughnessMap,ge=we&&!!E.iridescenceMap,De=we&&!!E.iridescenceThicknessMap,Ie=wt&&!!E.sheenColorMap,me=wt&&!!E.sheenRoughnessMap,X=!!E.specularMap,de=!!E.specularColorMap,k=!!E.specularIntensityMap,ae=He&&!!E.transmissionMap,te=He&&!!E.thicknessMap,ye=!!E.gradientMap,xe=!!E.alphaMap,Se=E.alphaTest>0,ze=!!E.alphaHash,ct=!!E.extensions;let Me=Er;E.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Me=n.toneMapping);const Ye=Xe?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,at={shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:Q,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:H,batching:it,batchingColor:it&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ge,matcap:mt,envMap:gt,envMapMode:gt&&q.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ye.length-1:null,envMapSize:Xe?Ye[0].width:null,aoMap:Wt,lightMap:kt,bumpMap:en,normalMap:Pt,displacementMap:Kt,emissiveMap:Nt,normalMapObjectSpace:Pt&&E.normalMapType===VC,normalMapTangentSpace:Pt&&E.normalMapType===Tx,packedNormalMap:Pt&&E.normalMapType===Tx&&nL(E.normalMap.format),metalnessMap:Bt,roughnessMap:Zt,anisotropy:an,anisotropyMap:rt,clearcoat:K,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:ie,diffuseRoughness:tn,diffuseRoughnessMap:Ae,dispersion:bt,retroreflection:It,iridescence:we,iridescenceMap:ge,iridescenceThicknessMap:De,sheen:wt,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:X,specularColorMap:de,specularIntensityMap:k,transmission:He,transmissionMap:ae,thicknessMap:te,gradientMap:ye,opaque:E.transparent===!1&&E.blending===Ba&&E.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:ze,combine:E.combine,mapUv:Ge&&_(E.map.channel),aoMapUv:Wt&&_(E.aoMap.channel),lightMapUv:kt&&_(E.lightMap.channel),bumpMapUv:en&&_(E.bumpMap.channel),normalMapUv:Pt&&_(E.normalMap.channel),displacementMapUv:Kt&&_(E.displacementMap.channel),emissiveMapUv:Nt&&_(E.emissiveMap.channel),metalnessMapUv:Bt&&_(E.metalnessMap.channel),roughnessMapUv:Zt&&_(E.roughnessMap.channel),anisotropyMapUv:rt&&_(E.anisotropyMap.channel),clearcoatMapUv:N&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:w&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ae&&_(E.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(E.sheenRoughnessMap.channel),specularMapUv:X&&_(E.specularMap.channel),specularColorMapUv:de&&_(E.specularColorMap.channel),specularIntensityMapUv:k&&_(E.specularIntensityMap.channel),transmissionMapUv:ae&&_(E.transmissionMap.channel),thicknessMapUv:te&&_(E.thicknessMap.channel),alphaMapUv:xe&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pt||an),vertexNormals:!!V.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Ge||xe),fog:!!fe,useFog:E.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||V.attributes.normal===void 0&&Pt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ee.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:Nt&&E.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===tr,flipSided:E.side===ni,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ct&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&E.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return at.vertexUv1s=f.has(1),at.vertexUv2s=f.has(2),at.vertexUv3s=f.has(3),f.clear(),at}function T(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)C.push(Y),C.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(y(C,E),S(C,E),C.push(n.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function y(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapPMREM),E.push(C.envMapMaxLod),E.push(C.envMapSize),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.diffuseRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.numSunLights),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numSunLightShadows),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.numLightProbeGrids),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function S(E,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.retroreflection&&c.enable(24),C.diffuseRoughness&&c.enable(25),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),C.packedNormalMap&&c.enable(22),C.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),C.numLightProbeGrids>0&&c.enable(22),C.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function R(E){const C=g[E.type];let Y;if(C){const B=er[C];Y=RR.clone(B.uniforms)}else Y=E.uniforms;return Y}function L(E,C){let Y=m.get(C);return Y!==void 0?++Y.usedTimes:(Y=new QD(n,C,E,o),h.push(Y),m.set(C,Y)),Y}function P(E){if(--E.usedTimes===0){const C=h.indexOf(E);h[C]=h[h.length-1],h.pop(),m.delete(E.cacheKey),E.destroy()}}function O(E){u.remove(E)}function F(){u.dispose()}return{getParameters:M,getProgramCacheKey:T,getUniforms:R,acquireProgram:L,releaseProgram:P,releaseShaderCache:O,programs:h,dispose:F}}function rL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,f){n.get(c)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function sL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function d_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,T,y,S){let R=n[e];return R===void 0?(R={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:S},n[e]=R):(R.id=g.id,R.object=g,R.geometry=_,R.material=M,R.materialVariant=c(g),R.groupOrder=T,R.renderOrder=g.renderOrder,R.z=y,R.group=S),e++,R}function f(g,_,M,T,y,S,R){R.reversedDepth===!0&&(y=-y);const L=u(g,_,M,T,y,S);M.transmission>0?r.push(L):M.transparent===!0?o.push(L):t.push(L)}function h(g,_,M,T,y,S){const R=u(g,_,M,T,y,S);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function m(g,_){t.length>1&&t.sort(g||sL),r.length>1&&r.sort(_||d_),o.length>1&&o.sort(_||d_)}function v(){for(let g=e,_=n.length;g<_;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:f,unshift:h,finish:v,sort:m}}function oL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new f_,n.set(r,[c])):o>=a.length?(c=new f_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function aL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new he,color:new Ut};break;case"SpotLight":t={position:new he,direction:new he,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new he,halfWidth:new he,halfHeight:new he};break}return n[e.id]=t,t}}}function lL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cL=0;function uL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dL(n){const e=new aL,t=lL(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new he);const o=new he,a=new dn,c=new dn;function u(h){let m=0,v=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,M=0,T=0,y=0,S=0,R=0,L=0,P=0,O=0,F=0,E=0,C=0,Y=0,B=0;h.sort(uL);for(let ee=0,fe=h.length;ee<fe;ee++){const V=h[ee],J=V.color,le=V.intensity,q=V.distance;let G=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Is?G=V.shadow.map.texture:G=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)m+=J.r*le,v+=J.g*le,g+=J.b*le;else if(V.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(V.sh.coefficients[H],le);B++}else if(V.isSunLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,I=t.get(V);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),r.sunShadow[M]=I,r.sunShadowMap[M]=G;const ne=W.getViewportCount();for(let Te=0;Te<ne;Te++)r.sunShadowMatrix[T+Te]=W.getMatrix(Te),r.sunShadowCascade[T+Te]=W._cascadeData[Te];T+=ne,M++}r.sun[_]=H,_++}else if(V.isDirectionalLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,I=t.get(V);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,r.directionalShadow[y]=I,r.directionalShadowMap[y]=G,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=H,y++}else if(V.isSpotLight){const H=e.get(V);H.position.setFromMatrixPosition(V.matrixWorld),H.color.copy(J).multiplyScalar(le),H.distance=q,H.coneCos=Math.cos(V.angle),H.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),H.decay=V.decay,r.spot[R]=H;const W=V.shadow;if(V.map&&(r.spotLightMap[C]=V.map,C++,W.updateMatrices(V),V.castShadow&&Y++),r.spotLightMatrix[R]=W.matrix,V.castShadow){const I=t.get(V);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,r.spotShadow[R]=I,r.spotShadowMap[R]=G,E++}R++}else if(V.isRectAreaLight){const H=e.get(V);H.color.copy(J).multiplyScalar(le),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),r.rectArea[L]=H,L++}else if(V.isPointLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),H.distance=V.distance,H.decay=V.decay,V.castShadow){const W=V.shadow,I=t.get(V);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,r.pointShadow[S]=I,r.pointShadowMap[S]=G,r.pointShadowMatrix[S]=V.shadow.matrix,F++}r.point[S]=H,S++}else if(V.isHemisphereLight){const H=e.get(V);H.skyColor.copy(V.color).multiplyScalar(le),H.groundColor.copy(V.groundColor).multiplyScalar(le),r.hemi[P]=H,P++}}L>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=g;const U=r.hash;(U.sunLength!==_||U.directionalLength!==y||U.pointLength!==S||U.spotLength!==R||U.rectAreaLength!==L||U.hemiLength!==P||U.numSunShadows!==M||U.numDirectionalShadows!==O||U.numPointShadows!==F||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==B)&&(r.sun.length=_,r.directional.length=y,r.spot.length=R,r.rectArea.length=L,r.point.length=S,r.hemi.length=P,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=F,r.pointShadowMap.length=F,r.pointShadowMatrix.length=F,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+C-Y,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=B,U.sunLength=_,U.directionalLength=y,U.pointLength=S,U.spotLength=R,U.rectAreaLength=L,U.hemiLength=P,U.numSunShadows=M,U.numDirectionalShadows=O,U.numPointShadows=F,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=B,r.version=cL++)}function f(h,m){let v=0,g=0,_=0,M=0,T=0,y=0;const S=m.matrixWorldInverse;for(let R=0,L=h.length;R<L;R++){const P=h[R];if(P.isSunLight){const O=r.sun[v];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(S),v++}else if(P.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),g++}else if(P.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),T++}else if(P.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(S),y++}}}return{setup:u,setupView:f,state:r}}function h_(n){const e=new dL(n),t=[],r=[],o=[];function a(v){m.camera=v,t.length=0,r.length=0,o.length=0}function c(v){v.isLightProbeGrid?o.push(v):t.push(v)}function u(v){r.push(v)}function f(){e.setup(t),o.sort((v,g)=>v.priority-g.priority||v.id-g.id)}function h(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function fL(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new h_(n),e.set(o,[u])):a>=c.length?(u=new h_(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const hL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mL=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],gL=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],p_=new dn,Ca=new he,sh=new he;function vL(n,e,t){let r=new mu;const o=new yt,a=new yt,c=new on,u=new NR,f=new IR,h={},m=t.maxTextureSize,v={[Ns]:ni,[ni]:Ns,[tr]:tr},g=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:hL,fragmentShader:pL}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new os;M.setAttribute("position",new Ls(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new is(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let S=this.type;this.render=function(F,E,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===xC&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xc);const Y=n.getRenderTarget(),B=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(bo),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const fe=S!==this.type;fe&&E.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(J=>J.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,J=F.length;V<J;V++){const le=F[V],q=le.shadow;if(q===void 0){dt("WebGLShadowMap:",le,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const G=q.getFrameExtents();o.multiply(G),a.copy(q.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/G.x),o.x=a.x*G.x,q.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/G.y),o.y=a.y*G.y,q.mapSize.y=a.y));const H=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=H,q.map===null||fe===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Da){if(le.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new sr(o.x,o.y,{format:Is,type:ar,minFilter:ei,magFilter:ei,generateMipmaps:!1}),q.map.texture.name=le.name+".shadowMap",q.map.depthTexture=new Io(o.x,o.y,nr),q.map.depthTexture.name=le.name+".shadowMapDepth",q.map.depthTexture.format=ns,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn}else le.isPointLight?(q.map=new vm(o.x),q.map.depthTexture=new FS(o.x,or)):(q.map=new sr(o.x,o.y),q.map.depthTexture=new Io(o.x,o.y,or)),q.map.depthTexture.name=le.name+".shadowMap",q.map.depthTexture.format=ns,this.type===Xc?(q.map.depthTexture.compareFunction=H?bS:AS,q.map.depthTexture.minFilter=ei,q.map.depthTexture.magFilter=ei):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==o.x||q.map.height!==o.y)&&q.map.setSize(o.x,o.y);const W=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();le.isPointLight!==!0&&q.updateMatrices(le,C);const I=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:C.layers;for(let ne=0;ne<W;ne++){const Te=q.getCamera(ne);if(le.isPointLight){const Q=q.camera,ve=q.matrix,Ee=le.distance||Q.far;Ee!==Q.far&&(Q.far=Ee,Q.updateProjectionMatrix()),Ca.setFromMatrixPosition(le.matrixWorld),Q.position.copy(Ca),sh.copy(Q.position),sh.add(mL[ne]),Q.up.copy(gL[ne]),Q.lookAt(sh),Q.updateMatrixWorld(),ve.makeTranslation(-Ca.x,-Ca.y,-Ca.z),p_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),q._frustum.setFromProjectionMatrix(p_,Q.coordinateSystem,Q.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(q.map),n.clear());const Q=q.getViewport(ne);c.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),ee.viewport(c)}r=q.getFrustum(ne),P(E,C,Te,le,I,this.type)}q.isPointLightShadow!==!0&&this.type===Da&&R(q,C),q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(Y,B,U)};function R(F,E){const C=e.update(T);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,_.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),F.mapPass===null?F.mapPass=new sr(o.x,o.y,{format:Is,type:ar}):(F.mapPass.width!==F.map.width||F.mapPass.height!==F.map.height)&&F.mapPass.setSize(F.map.width,F.map.height),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value.set(F.map.width,F.map.height),g.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(E,null,C,g,T,null),_.uniforms.shadow_pass.value=F.mapPass.texture,_.uniforms.resolution.value.set(F.map.width,F.map.height),_.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(E,null,C,_,T,null)}function L(F,E,C,Y){let B=null;const U=C.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(U!==void 0)B=U;else if(B=C.isPointLight===!0?f:u,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const ee=B.uuid,fe=E.uuid;let V=h[ee];V===void 0&&(V={},h[ee]=V);let J=V[fe];J===void 0&&(J=B.clone(),V[fe]=J,E.addEventListener("dispose",O)),B=J}if(B.visible=E.visible,B.wireframe=E.wireframe,Y===Da?B.side=E.shadowSide!==null?E.shadowSide:E.side:B.side=E.shadowSide!==null?E.shadowSide:v[E.side],B.alphaMap=E.alphaMap,B.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,B.map=E.map,B.clipShadows=E.clipShadows,B.clippingPlanes=E.clippingPlanes,B.clipIntersection=E.clipIntersection,B.displacementMap=E.displacementMap,B.displacementScale=E.displacementScale,B.displacementBias=E.displacementBias,B.wireframeLinewidth=E.wireframeLinewidth,B.linewidth=E.linewidth,C.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const ee=n.properties.get(B);ee.light=C}return B}function P(F,E,C,Y,B,U){if(F.visible===!1)return;if(F.layers.test(B)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&U===Da)&&(!F.frustumCulled||F.intersectsFrustum(r))){F.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,F.matrixWorld);const V=e.update(F),J=F.material;if(Array.isArray(J)){const le=V.groups;for(let q=0,G=le.length;q<G;q++){const H=le[q],W=J[H.materialIndex];if(W&&W.visible){const I=L(F,W,Y,U);F.onBeforeShadow(n,F,E,C,V,I,H),n.renderBufferDirect(C,null,V,I,F,H),F.onAfterShadow(n,F,E,C,V,I,H)}}}else if(J.visible){const le=L(F,J,Y,U);F.onBeforeShadow(n,F,E,C,V,le,null),n.renderBufferDirect(C,null,V,le,F,null),F.onAfterShadow(n,F,E,C,V,le,null)}}const fe=F.children;for(let V=0,J=fe.length;V<J;V++)P(fe[V],E,C,Y,B,U)}function O(F){F.target.removeEventListener("dispose",O);for(const C in h){const Y=h[C],B=F.target.uuid;B in Y&&(Y[B].dispose(),delete Y[B])}}}function xL(n,e){function t(){let k=!1;const ae=new on;let te=null;const ye=new on(0,0,0,0);return{setMask:function(xe){te!==xe&&!k&&(n.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){k=xe},setClear:function(xe,Se,ze,ct,Me){Me===!0&&(xe*=ct,Se*=ct,ze*=ct),ae.set(xe,Se,ze,ct),ye.equals(ae)===!1&&(n.clearColor(xe,Se,ze,ct),ye.copy(ae))},reset:function(){k=!1,te=null,ye.set(-1,0,0,0)}}}function r(){let k=!1,ae=!1,te=null,ye=null,xe=null;return{setReversed:function(Se){if(ae!==Se){const ze=e.get("EXT_clip_control");Se?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ae=Se;const ct=xe;xe=null,this.setClear(ct)}},getReversed:function(){return ae},setTest:function(Se){Se?_e(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Se){te!==Se&&!k&&(n.depthMask(Se),te=Se)},setFunc:function(Se){if(ae&&(Se=QC[Se]),ye!==Se){switch(Se){case Nh:n.depthFunc(n.NEVER);break;case Ih:n.depthFunc(n.ALWAYS);break;case Uh:n.depthFunc(n.LESS);break;case Ga:n.depthFunc(n.LEQUAL);break;case Fh:n.depthFunc(n.EQUAL);break;case Oh:n.depthFunc(n.GEQUAL);break;case kh:n.depthFunc(n.GREATER);break;case Bh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Se}},setLocked:function(Se){k=Se},setClear:function(Se){xe!==Se&&(xe=Se,ae&&(Se=1-Se),n.clearDepth(Se))},reset:function(){k=!1,te=null,ye=null,xe=null,ae=!1}}}function o(){let k=!1,ae=null,te=null,ye=null,xe=null,Se=null,ze=null,ct=null,Me=null;return{setTest:function(Ye){k||(Ye?_e(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Ye){ae!==Ye&&!k&&(n.stencilMask(Ye),ae=Ye)},setFunc:function(Ye,at,Oe){(te!==Ye||ye!==at||xe!==Oe)&&(n.stencilFunc(Ye,at,Oe),te=Ye,ye=at,xe=Oe)},setOp:function(Ye,at,Oe){(Se!==Ye||ze!==at||ct!==Oe)&&(n.stencilOp(Ye,at,Oe),Se=Ye,ze=at,ct=Oe)},setLocked:function(Ye){k=Ye},setClear:function(Ye){Me!==Ye&&(n.clearStencil(Ye),Me=Ye)},reset:function(){k=!1,ae=null,te=null,ye=null,xe=null,Se=null,ze=null,ct=null,Me=null}}}const a=new t,c=new r,u=new o;let f={};const h=new WeakMap;let m={},v={},g={},_=new WeakMap,M=[],T=null,y=!1,S=null,R=null,L=null,P=null,O=null,F=null,E=null,C=new Ut(0,0,0),Y=0,B=!1,U=null,ee=null,fe=null,V=null,J=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=G>=2);let W=null,I={};const ne=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Q=new on().fromArray(ne),ve=new on().fromArray(Te);function Ee(k,ae,te,ye){const xe=new Uint8Array(4),Se=n.createTexture();n.bindTexture(k,Se),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<te;ze++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ae+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return Se}const Ue={};Ue[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),_e(n.DEPTH_TEST),c.setFunc(Ga),en(!1),Pt(Sx),_e(n.CULL_FACE),Wt(bo);function _e(k){m[k]!==!0&&(n.enable(k),m[k]=!0)}function Le(k){m[k]!==!1&&(n.disable(k),m[k]=!1)}function it(k,ae){return g[k]!==ae?(n.bindFramebuffer(k,ae),g[k]=ae,k===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ae),k===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ge(k,ae){let te=M,ye=!1;if(k){te=_.get(ae),te===void 0&&(te=[],_.set(ae,te));const xe=k.textures;if(te.length!==xe.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,ze=xe.length;Se<ze;Se++)te[Se]=n.COLOR_ATTACHMENT0+Se;te.length=xe.length,ye=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ye=!0);ye&&n.drawBuffers(te)}function mt(k){return T!==k?(n.useProgram(k),T=k,!0):!1}const gt={[Mo]:n.FUNC_ADD,[yC]:n.FUNC_SUBTRACT,[SC]:n.FUNC_REVERSE_SUBTRACT};gt[MC]=n.MIN,gt[EC]=n.MAX;const Xe={[wC]:n.ZERO,[TC]:n.ONE,[AC]:n.SRC_COLOR,[lS]:n.SRC_ALPHA,[LC]:n.SRC_ALPHA_SATURATE,[PC]:n.DST_COLOR,[CC]:n.DST_ALPHA,[bC]:n.ONE_MINUS_SRC_COLOR,[cS]:n.ONE_MINUS_SRC_ALPHA,[DC]:n.ONE_MINUS_DST_COLOR,[RC]:n.ONE_MINUS_DST_ALPHA,[NC]:n.CONSTANT_COLOR,[IC]:n.ONE_MINUS_CONSTANT_COLOR,[UC]:n.CONSTANT_ALPHA,[FC]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(k,ae,te,ye,xe,Se,ze,ct,Me,Ye){if(k===bo){y===!0&&(Le(n.BLEND),y=!1);return}if(y===!1&&(_e(n.BLEND),y=!0),k!==_C){if(k!==S||Ye!==B){if((R!==Mo||O!==Mo)&&(n.blendEquation(n.FUNC_ADD),R=Mo,O=Mo),Ye)switch(k){case Ba:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mx:n.blendFunc(n.ONE,n.ONE);break;case Ex:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ex:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wx:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",k);break}L=null,P=null,F=null,E=null,C.set(0,0,0),Y=0,S=k,B=Ye}return}xe=xe||ae,Se=Se||te,ze=ze||ye,(ae!==R||xe!==O)&&(n.blendEquationSeparate(gt[ae],gt[xe]),R=ae,O=xe),(te!==L||ye!==P||Se!==F||ze!==E)&&(n.blendFuncSeparate(Xe[te],Xe[ye],Xe[Se],Xe[ze]),L=te,P=ye,F=Se,E=ze),(ct.equals(C)===!1||Me!==Y)&&(n.blendColor(ct.r,ct.g,ct.b,Me),C.copy(ct),Y=Me),S=k,B=!1}function kt(k,ae){k.side===tr?Le(n.CULL_FACE):_e(n.CULL_FACE);let te=k.side===ni;ae&&(te=!te),en(te),k.blending===Ba&&k.transparent===!1?Wt(bo):Wt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const ye=k.stencilWrite;u.setTest(ye),ye&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function en(k){U!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),U=k)}function Pt(k){k!==gC?(_e(n.CULL_FACE),k!==ee&&(k===Sx?n.cullFace(n.BACK):k===vC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),ee=k}function Kt(k){k!==fe&&(q&&n.lineWidth(k),fe=k)}function Nt(k,ae,te){k?(_e(n.POLYGON_OFFSET_FILL),(V!==ae||J!==te)&&(V=ae,J=te,c.getReversed()&&(ae=-ae,te=-te),n.polygonOffset(ae,te))):Le(n.POLYGON_OFFSET_FILL)}function Bt(k){k?_e(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Zt(k){k===void 0&&(k=n.TEXTURE0+le-1),W!==k&&(n.activeTexture(k),W=k)}function an(k,ae,te){te===void 0&&(W===null?te=n.TEXTURE0+le-1:te=W);let ye=I[te];ye===void 0&&(ye={type:void 0,texture:void 0},I[te]=ye),(ye.type!==k||ye.texture!==ae)&&(W!==te&&(n.activeTexture(te),W=te),n.bindTexture(k,ae||Ue[k]),ye.type=k,ye.texture=ae)}function K(){const k=I[W];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tn(){try{n.compressedTexImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function bt(){try{n.compressedTexImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function It(){try{n.texSubImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function we(){try{n.texSubImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function wt(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function rt(){try{n.texStorage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function N(){try{n.texStorage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function w(){try{n.texImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function ie(){try{n.texImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function Ae(k){return v[k]!==void 0?v[k]:n.getParameter(k)}function ge(k,ae){v[k]!==ae&&(n.pixelStorei(k,ae),v[k]=ae)}function De(k){Q.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function Ie(k){ve.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ve.copy(k))}function me(k,ae){let te=h.get(ae);te===void 0&&(te=new WeakMap,h.set(ae,te));let ye=te.get(k);ye===void 0&&(ye=n.getUniformBlockIndex(ae,k.name),n.uniformBlockBinding(ae,ye,ye),te.set(k,ye))}function X(k,ae,te){const xe=h.get(ae).get(k);f[xe]!==te&&(n.bindBufferBase(n.UNIFORM_BUFFER,xe,te),f[xe]=te)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},W=null,I={},g={},f={},_=new WeakMap,M=[],T=null,y=!1,S=null,R=null,L=null,P=null,O=null,F=null,E=null,C=new Ut(0,0,0),Y=0,B=!1,U=null,ee=null,fe=null,V=null,J=null,Q.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:_e,disable:Le,bindFramebuffer:it,drawBuffers:Ge,useProgram:mt,setBlending:Wt,setMaterial:kt,setFlipSided:en,setCullFace:Pt,setLineWidth:Kt,setPolygonOffset:Nt,setScissorTest:Bt,activeTexture:Zt,bindTexture:an,unbindTexture:K,compressedTexImage2D:tn,compressedTexImage3D:bt,texImage2D:w,texImage3D:ie,pixelStorei:ge,getParameter:Ae,updateUBOMapping:me,uniformBlockBinding:X,texStorage2D:rt,texStorage3D:N,texSubImage2D:It,texSubImage3D:we,compressedTexSubImage2D:wt,compressedTexSubImage3D:He,scissor:De,viewport:Ie,reset:de}}function _L(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new yt,m=new WeakMap,v=new Set;let g;const _=new WeakMap,M=new Set,T=new FinalizationRegistry(N=>M.delete(N));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,w){return y?new OffscreenCanvas(N,w):pu("canvas")}function R(N,w,ie){let Ae=1;const ge=rt(N);if((ge.width>ie||ge.height>ie)&&(Ae=ie/Math.max(ge.width,ge.height)),Ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const De=Math.floor(Ae*ge.width),Ie=Math.floor(Ae*ge.height);g===void 0&&(g=S(De,Ie));const me=w?S(De,Ie):g;return me.width=De,me.height=Ie,me.getContext("2d").drawImage(N,0,0,De,Ie),dt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+De+"x"+Ie+")."),me}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function L(N){return N.generateMipmaps}function P(N){n.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function F(N,w,ie,Ae,ge,De=!1){if(N!==null){if(n[N]!==void 0)return n[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ie;Ae&&(Ie=e.get("EXT_texture_norm16"),Ie||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=w;if(w===n.RED&&(ie===n.FLOAT&&(me=n.R32F),ie===n.HALF_FLOAT&&(me=n.R16F),ie===n.UNSIGNED_BYTE&&(me=n.R8),ie===n.UNSIGNED_SHORT&&Ie&&(me=Ie.R16_EXT),ie===n.SHORT&&Ie&&(me=Ie.R16_SNORM_EXT)),w===n.RED_INTEGER&&(ie===n.UNSIGNED_BYTE&&(me=n.R8UI),ie===n.UNSIGNED_SHORT&&(me=n.R16UI),ie===n.UNSIGNED_INT&&(me=n.R32UI),ie===n.BYTE&&(me=n.R8I),ie===n.SHORT&&(me=n.R16I),ie===n.INT&&(me=n.R32I)),w===n.RG&&(ie===n.FLOAT&&(me=n.RG32F),ie===n.HALF_FLOAT&&(me=n.RG16F),ie===n.UNSIGNED_BYTE&&(me=n.RG8),ie===n.UNSIGNED_SHORT&&Ie&&(me=Ie.RG16_EXT),ie===n.SHORT&&Ie&&(me=Ie.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(ie===n.UNSIGNED_BYTE&&(me=n.RG8UI),ie===n.UNSIGNED_SHORT&&(me=n.RG16UI),ie===n.UNSIGNED_INT&&(me=n.RG32UI),ie===n.BYTE&&(me=n.RG8I),ie===n.SHORT&&(me=n.RG16I),ie===n.INT&&(me=n.RG32I)),w===n.RGB_INTEGER&&(ie===n.UNSIGNED_BYTE&&(me=n.RGB8UI),ie===n.UNSIGNED_SHORT&&(me=n.RGB16UI),ie===n.UNSIGNED_INT&&(me=n.RGB32UI),ie===n.BYTE&&(me=n.RGB8I),ie===n.SHORT&&(me=n.RGB16I),ie===n.INT&&(me=n.RGB32I)),w===n.RGBA_INTEGER&&(ie===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),ie===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),ie===n.UNSIGNED_INT&&(me=n.RGBA32UI),ie===n.BYTE&&(me=n.RGBA8I),ie===n.SHORT&&(me=n.RGBA16I),ie===n.INT&&(me=n.RGBA32I)),w===n.RGB&&(ie===n.UNSIGNED_SHORT&&Ie&&(me=Ie.RGB16_EXT),ie===n.SHORT&&Ie&&(me=Ie.RGB16_SNORM_EXT),ie===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),ie===n.UNSIGNED_INT_10F_11F_11F_REV&&(me=n.R11F_G11F_B10F)),w===n.RGBA){const X=De?fu:Mt.getTransfer(ge);ie===n.FLOAT&&(me=n.RGBA32F),ie===n.HALF_FLOAT&&(me=n.RGBA16F),ie===n.UNSIGNED_BYTE&&(me=X===Ot?n.SRGB8_ALPHA8:n.RGBA8),ie===n.UNSIGNED_SHORT&&Ie&&(me=Ie.RGBA16_EXT),ie===n.SHORT&&Ie&&(me=Ie.RGBA16_SNORM_EXT),ie===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ie===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function E(N,w){let ie;return N?w===null||w===or||w===No?ie=n.DEPTH24_STENCIL8:w===nr?ie=n.DEPTH32F_STENCIL8:w===Xa&&(ie=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===or||w===No?ie=n.DEPTH_COMPONENT24:w===nr?ie=n.DEPTH_COMPONENT32F:w===Xa&&(ie=n.DEPTH_COMPONENT16),ie}function C(N,w){return L(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nn&&N.minFilter!==ei?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function Y(N){const w=new WeakRef(N);r.get(N).__ref=w,M.add(w),T.register(N,w,w)}function B(N){const w=r.get(N).__ref;w!==void 0&&(M.delete(w),T.unregister(w))}function U(N){fe(N.target)}function ee(N){V(N.target)}function fe(N){N.removeEventListener("dispose",U),B(N),le(N),N.isVideoTexture&&m.delete(N),N.isHTMLTexture&&v.delete(N)}function V(N){N.removeEventListener("dispose",ee),B(N),G(N)}function J(){for(const N of M){const w=N.deref();w!==void 0&&(w.isRenderTarget===!0?V(w):fe(w))}M.clear(),v.clear()}function le(N){const w=r.get(N);if(w.__webglInit===void 0)return;const ie=N.source,Ae=_.get(ie);if(Ae){const ge=Ae[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&q(N),Object.keys(Ae).length===0&&_.delete(ie)}r.remove(N)}function q(N){const w=r.get(N);n.deleteTexture(w.__webglTexture);const ie=N.source,Ae=_.get(ie);delete Ae[w.__cacheKey],c.memory.textures--}function G(N){const w=r.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();const ie=N.depthTexture;if(ie&&ie.renderTarget===N&&fe(ie),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let De=0;De<w.__webglFramebuffer[ge].length;De++)n.deleteFramebuffer(w.__webglFramebuffer[ge][De]);else n.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[ge]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Ae=N.textures;for(let ge=0,De=Ae.length;ge<De;ge++){const Ie=r.get(Ae[ge]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),c.memory.textures--),r.remove(Ae[ge])}r.remove(N)}let H=0;function W(){H=0}function I(){return H}function ne(N){H=N}function Te(){const N=H;return N>=o.maxTextures&&dt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function Q(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function ve(N,w){const ie=r.get(N);if(N.isVideoTexture&&wt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ie.__version!==N.version){const Ae=N.image;if(Ae===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(ie,N,w);return}}else N.isExternalTexture&&(ie.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture,n.TEXTURE0+w)}function Ee(N,w){const ie=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){kt(ie,N,w);return}else N.isExternalTexture&&(ie.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ie.__webglTexture,n.TEXTURE0+w)}function Ue(N,w){const ie=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){kt(ie,N,w);return}t.bindTexture(n.TEXTURE_3D,ie.__webglTexture,n.TEXTURE0+w)}function _e(N,w){const ie=r.get(N);if(N.version>0&&ie.__version!==N.version){en(ie,N,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture,n.TEXTURE0+w)}const Le={[zh]:n.REPEAT,[Mr]:n.CLAMP_TO_EDGE,[Vh]:n.MIRRORED_REPEAT},it={[Nn]:n.NEAREST,[BC]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[If]:n.LINEAR_MIPMAP_NEAREST,[Qr]:n.LINEAR_MIPMAP_LINEAR},Ge={[GC]:n.NEVER,[CS]:n.ALWAYS,[WC]:n.LESS,[AS]:n.LEQUAL,[XC]:n.EQUAL,[bS]:n.GEQUAL,[jC]:n.GREATER,[$C]:n.NOTEQUAL};function mt(N,w){if(w.type===nr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ei||w.magFilter===If||w.magFilter===mc||w.magFilter===Qr||w.minFilter===ei||w.minFilter===If||w.minFilter===mc||w.minFilter===Qr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Le[w.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Le[w.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Le[w.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,it[w.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,it[w.minFilter]),w.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==mc&&w.minFilter!==Qr||w.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function gt(N,w){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",U),Y(w));const Ae=w.source;let ge=_.get(Ae);ge===void 0&&(ge={},_.set(Ae,ge));const De=Q(w);if(De!==N.__cacheKey){ge[De]===void 0&&(ge[De]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ge[De].usedTimes++;const Ie=ge[N.__cacheKey];Ie!==void 0&&(ge[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&q(w)),N.__cacheKey=De,N.__webglTexture=ge[De].texture}return ie}function Xe(N,w,ie){return Math.floor(Math.floor(N/ie)/w)}function Wt(N,w,ie,Ae){const De=N.updateRanges;if(De.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,ie,Ae,w.data);else{De.sort((k,ae)=>k.start-ae.start);let Ie=0;for(let k=1;k<De.length;k++){const ae=De[Ie],te=De[k],ye=ae.start+ae.count,xe=Xe(te.start,w.width,4),Se=Xe(ae.start,w.width,4);te.start<=ye+1&&xe===Se&&Xe(te.start+te.count-1,w.width,4)===xe?ae.count=Math.max(ae.count,te.start+te.count-ae.start):(++Ie,De[Ie]=te)}De.length=Ie+1;const me=t.getParameter(n.UNPACK_ROW_LENGTH),X=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let k=0,ae=De.length;k<ae;k++){const te=De[k],ye=Math.floor(te.start/4),xe=Math.ceil(te.count/4),Se=ye%w.width,ze=Math.floor(ye/w.width),ct=xe,Me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(n.TEXTURE_2D,0,Se,ze,ct,Me,ie,Ae,w.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,me),t.pixelStorei(n.UNPACK_SKIP_PIXELS,X),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function kt(N,w,ie){let Ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ae=n.TEXTURE_3D);const ge=gt(N,w),De=w.source;t.bindTexture(Ae,N.__webglTexture,n.TEXTURE0+ie);const Ie=r.get(De);if(De.version!==Ie.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+ie),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Me=Mt.getPrimaries(Mt.workingColorSpace),Ye=w.colorSpace===Kr?null:Mt.getPrimaries(w.colorSpace),at=w.colorSpace===Kr||Me===Ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let X=R(w.image,!1,o.maxTextureSize);X=He(w,X);const de=a.convert(w.format,w.colorSpace),k=a.convert(w.type);let ae=F(w.internalFormat,de,k,w.normalized,w.colorSpace,w.isVideoTexture);mt(Ae,w);let te;const ye=w.mipmaps,xe=w.isVideoTexture!==!0,Se=Ie.__version===void 0||ge===!0,ze=De.dataReady,ct=C(w,X);if(w.isDepthTexture)ae=E(w.format===Jr,w.type),Se&&(xe?t.texStorage2D(n.TEXTURE_2D,1,ae,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,ae,X.width,X.height,0,de,k,null));else if(w.isDataTexture)if(ye.length>0){xe&&Se&&t.texStorage2D(n.TEXTURE_2D,ct,ae,ye[0].width,ye[0].height);for(let Me=0,Ye=ye.length;Me<Ye;Me++)te=ye[Me],xe?ze&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,te.width,te.height,de,k,te.data):t.texImage2D(n.TEXTURE_2D,Me,ae,te.width,te.height,0,de,k,te.data);w.generateMipmaps=!1}else xe?(Se&&t.texStorage2D(n.TEXTURE_2D,ct,ae,X.width,X.height),ze&&Wt(w,X,de,k)):t.texImage2D(n.TEXTURE_2D,0,ae,X.width,X.height,0,de,k,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xe&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ae,ye[0].width,ye[0].height,X.depth);for(let Me=0,Ye=ye.length;Me<Ye;Me++)if(te=ye[Me],w.format!==ir)if(de!==null)if(xe){if(ze)if(w.layerUpdates.size>0){const at=$x(te.width,te.height,w.format,w.type);for(const Oe of w.layerUpdates){const vt=te.data.subarray(Oe*at/te.data.BYTES_PER_ELEMENT,(Oe+1)*at/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,Oe,te.width,te.height,1,de,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,te.width,te.height,X.depth,de,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,ae,te.width,te.height,X.depth,0,te.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,te.width,te.height,X.depth,de,k,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,ae,te.width,te.height,X.depth,0,de,k,te.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{xe&&Se&&t.texStorage2D(n.TEXTURE_2D,ct,ae,ye[0].width,ye[0].height);for(let Me=0,Ye=ye.length;Me<Ye;Me++)te=ye[Me],w.format!==ir?de!==null?xe?ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,te.width,te.height,de,te.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,ae,te.width,te.height,0,te.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?ze&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,te.width,te.height,de,k,te.data):t.texImage2D(n.TEXTURE_2D,Me,ae,te.width,te.height,0,de,k,te.data)}else if(w.isDataArrayTexture)if(xe){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ae,X.width,X.height,X.depth),ze)if(w.layerUpdates.size>0){const Me=$x(X.width,X.height,w.format,w.type);for(const Ye of w.layerUpdates){const at=X.data.subarray(Ye*Me/X.data.BYTES_PER_ELEMENT,(Ye+1)*Me/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ye,X.width,X.height,1,de,k,at)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,k,X.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,X.width,X.height,X.depth,0,de,k,X.data);else if(w.isData3DTexture)xe?(Se&&t.texStorage3D(n.TEXTURE_3D,ct,ae,X.width,X.height,X.depth),ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,k,X.data)):t.texImage3D(n.TEXTURE_3D,0,ae,X.width,X.height,X.depth,0,de,k,X.data);else if(w.isFramebufferTexture){if(Se)if(xe)t.texStorage2D(n.TEXTURE_2D,ct,ae,X.width,X.height);else{let Me=X.width,Ye=X.height;for(let at=0;at<ct;at++)t.texImage2D(n.TEXTURE_2D,at,ae,Me,Ye,0,de,k,null),Me>>=1,Ye>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const Me=n.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),X.parentNode!==Me){Me.appendChild(X),v.add(w),Me.onpaint=Ye=>{const at=Ye.changedElements;for(const Oe of v)at.includes(Oe.image)&&(Oe.needsUpdate=!0)},Me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,X);else{const at=n.RGBA,Oe=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,at,Oe,vt,X)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ye.length>0){if(xe&&Se){const Me=rt(ye[0]);t.texStorage2D(n.TEXTURE_2D,ct,ae,Me.width,Me.height)}for(let Me=0,Ye=ye.length;Me<Ye;Me++)te=ye[Me],xe?ze&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,de,k,te):t.texImage2D(n.TEXTURE_2D,Me,ae,de,k,te);w.generateMipmaps=!1}else if(xe){if(Se){const Me=rt(X);t.texStorage2D(n.TEXTURE_2D,ct,ae,Me.width,Me.height)}ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,k,X)}else t.texImage2D(n.TEXTURE_2D,0,ae,de,k,X);L(w)&&w.mipmapsAutoUpdate===!0&&P(Ae),Ie.__version=De.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function en(N,w,ie){if(w.image.length!==6)return;const Ae=gt(N,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+ie);const De=r.get(ge);if(ge.version!==De.__version||Ae===!0){t.activeTexture(n.TEXTURE0+ie);const Ie=Mt.getPrimaries(Mt.workingColorSpace),me=w.colorSpace===Kr?null:Mt.getPrimaries(w.colorSpace),X=w.colorSpace===Kr||Ie===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const de=w.isCompressedTexture||w.image[0].isCompressedTexture,k=w.image[0]&&w.image[0].isDataTexture,ae=[];for(let Oe=0;Oe<6;Oe++)!de&&!k?ae[Oe]=R(w.image[Oe],!0,o.maxCubemapSize):ae[Oe]=k?w.image[Oe].image:w.image[Oe],ae[Oe]=He(w,ae[Oe]);const te=ae[0],ye=a.convert(w.format,w.colorSpace),xe=a.convert(w.type);let Se=F(w.internalFormat,ye,xe,w.normalized,w.colorSpace);const ze=w.isVideoTexture!==!0,ct=De.__version===void 0||Ae===!0,Me=ge.dataReady;let Ye=C(w,te);mt(n.TEXTURE_CUBE_MAP,w);let at;if(w.isDepthTexture){if(Se=E(w.format===Jr,w.type),ct)if(ze)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Se,te.width,te.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Se,te.width,te.height,0,ye,xe,null)}else if(de){ze&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ye,Se,te.width,te.height);for(let Oe=0;Oe<6;Oe++){at=ae[Oe].mipmaps;for(let vt=0;vt<at.length;vt++){const Ht=at[vt];w.format!==ir?ye!==null?ze?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,0,0,Ht.width,Ht.height,ye,Ht.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,Se,Ht.width,Ht.height,0,Ht.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,0,0,Ht.width,Ht.height,ye,xe,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,Se,Ht.width,Ht.height,0,ye,xe,Ht.data)}}}else{if(at=w.mipmaps,ze&&ct){at.length>0&&Ye++;const Oe=rt(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ye,Se,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(k){ze?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ae[Oe].width,ae[Oe].height,ye,xe,ae[Oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Se,ae[Oe].width,ae[Oe].height,0,ye,xe,ae[Oe].data);for(let vt=0;vt<at.length;vt++){const In=at[vt].image[Oe].image;ze?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,0,0,In.width,In.height,ye,xe,In.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,Se,In.width,In.height,0,ye,xe,In.data)}}else{ze?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ye,xe,ae[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Se,ye,xe,ae[Oe]);for(let vt=0;vt<at.length;vt++){const Ht=at[vt];ze?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,0,0,ye,xe,Ht.image[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,Se,ye,xe,Ht.image[Oe])}}}L(w)&&w.mipmapsAutoUpdate===!0&&P(n.TEXTURE_CUBE_MAP),De.__version=ge.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Pt(N,w,ie,Ae,ge,De){const Ie=a.convert(ie.format,ie.colorSpace),me=a.convert(ie.type),X=F(ie.internalFormat,Ie,me,ie.normalized,ie.colorSpace),de=r.get(w),k=r.get(ie);if(k.__renderTarget=w,!de.__hasExternalTextures){const ae=Math.max(1,w.width>>De),te=Math.max(1,w.height>>De);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,De,X,ae,te,w.depth,0,Ie,me,null):t.texImage2D(ge,De,X,ae,te,0,Ie,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),we(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ge,k.__webglTexture,0,It(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ge,k.__webglTexture,De),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(N,w,ie){if(n.bindRenderbuffer(n.RENDERBUFFER,N),w.depthBuffer){const Ae=w.depthTexture,ge=Ae&&Ae.isDepthTexture?Ae.type:null,De=E(w.stencilBuffer,ge),Ie=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(w),De,w.width,w.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(w),De,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,De,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,N)}else{const Ae=w.textures;for(let ge=0;ge<Ae.length;ge++){const De=Ae[ge],Ie=a.convert(De.format,De.colorSpace),me=a.convert(De.type),X=F(De.internalFormat,Ie,me,De.normalized,De.colorSpace);we(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(w),X,w.width,w.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(w),X,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,X,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(N,w,ie){const Ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(w.depthTexture);ge.__renderTarget=w;const De=Ae?w.depthTexture.image[0]:w.depthTexture.image;(!ge.__webglTexture||De.width!==w.width||De.height!==w.height)&&(De.width=w.width,De.height=w.height,w.depthTexture.needsUpdate=!0),Ae?_e(w.depthTexture,0):ve(w.depthTexture,0);const Ie=ge.__webglTexture,me=It(w),X=Ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+ie:n.TEXTURE_2D,de=w.depthTexture.format===Jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===ns)we(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,X,Ie,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,de,X,Ie,0);else if(w.depthTexture.format===Jr)we(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,X,Ie,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,de,X,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(N){const w=r.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const Ae=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ae){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ae.removeEventListener("dispose",ge)};Ae.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=Ae}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(ie)for(let Ae=0;Ae<6;Ae++)Nt(w.__webglFramebuffer[Ae],N,Ae);else N.texture.mipmaps.length>0?Nt(w.__webglFramebuffer[0],N,0):Nt(w.__webglFramebuffer,N,0);else if(ie){w.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Ae]),w.__webglDepthbuffer[Ae]===void 0)w.__webglDepthbuffer[Ae]=n.createRenderbuffer(),Kt(w.__webglDepthbuffer[Ae],N,!1);else{const ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=w.__webglDepthbuffer[Ae];n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,De)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Kt(w.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,De)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(N,w,ie){const Ae=r.get(N);w!==void 0&&Pt(Ae.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ie!==void 0&&Bt(N)}function an(N){const w=N.texture,ie=r.get(N),Ae=r.get(w);N.addEventListener("dispose",ee),Y(N);const ge=N.textures,De=N.isWebGLCubeRenderTarget===!0,Ie=ge.length>1;if(Ie||(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=w.version,c.memory.textures++),De){ie.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps.length>0){ie.__webglFramebuffer[me]=[];for(let X=0;X<w.mipmaps.length;X++)ie.__webglFramebuffer[me][X]=n.createFramebuffer()}else ie.__webglFramebuffer[me]=n.createFramebuffer()}else{if(w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)ie.__webglFramebuffer[me]=n.createFramebuffer()}else ie.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let me=0,X=ge.length;me<X;me++){const de=r.get(ge[me]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),c.memory.textures++)}if(N.samples>0&&we(N)===!1){ie.__webglMultisampledFramebuffer=n.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let me=0;me<ge.length;me++){const X=ge[me];ie.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ie.__webglColorRenderbuffer[me]);const de=a.convert(X.format,X.colorSpace),k=a.convert(X.type),ae=F(X.internalFormat,de,k,X.normalized,X.colorSpace,N.isXRRenderTarget===!0),te=It(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ae,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ie.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=n.createRenderbuffer(),Kt(ie.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(De){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),mt(n.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps.length>0)for(let X=0;X<w.mipmaps.length;X++)Pt(ie.__webglFramebuffer[me][X],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,X);else Pt(ie.__webglFramebuffer[me],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);L(w)?P(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ie){for(let me=0,X=ge.length;me<X;me++){const de=ge[me],k=r.get(de);let ae=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ae=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,k.__webglTexture),mt(ae,de),Pt(ie.__webglFramebuffer,N,de,n.COLOR_ATTACHMENT0+me,ae,0),L(de)&&P(ae)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Ae.__webglTexture),mt(me,w),w.mipmaps.length>0)for(let X=0;X<w.mipmaps.length;X++)Pt(ie.__webglFramebuffer[X],N,w,n.COLOR_ATTACHMENT0,me,X);else Pt(ie.__webglFramebuffer,N,w,n.COLOR_ATTACHMENT0,me,0);L(w)?P(me):w.mipmaps.length>0&&n.texParameteri(me,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Bt(N)}function K(N){const w=N.textures;for(let ie=0,Ae=w.length;ie<Ae;ie++){const ge=w[ie];if(L(ge)&&ge.mipmapsAutoUpdate===!0){const De=O(N),Ie=r.get(ge).__webglTexture;t.bindTexture(De,Ie),P(De),t.unbindTexture()}}}const tn=[];function bt(N){if(N.samples>0){if(we(N)===!1){const w=N.textures,ie=N.width,Ae=N.height;let ge=n.COLOR_BUFFER_BIT;const De=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=r.get(N),me=w.length>1;if(me)for(let de=0;de<w.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let de=0;de<w.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[de]);const k=r.get(w[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,ie,Ae,0,0,ie,Ae,ge,n.NEAREST),f===!0&&(tn.length=0,tn.push(n.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&tn.push(De),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let de=0;de<w.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[de]);const k=r.get(w[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,k,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&f){const w=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function It(N){return Math.min(o.maxSamples,N.samples)}function we(N){const w=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(N){const w=c.render.frame;m.get(N)!==w&&(m.set(N,w),N.update())}function He(N,w){const ie=N.colorSpace,Ae=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ie!==du&&ie!==Kr&&(Mt.getTransfer(ie)===Ot?(Ae!==ir||ge!==yi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ie)),w}function rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Te,this.resetTextureUnits=W,this.getTextureUnits=I,this.setTextureUnits=ne,this.setTexture2D=ve,this.setTexture2DArray=Ee,this.setTexture3D=Ue,this.setTextureCube=_e,this.rebindTextures=Zt,this.setupRenderTarget=an,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=we,this.dispose=J}function yL(n,e){function t(r,o=Kr){let a;const c=Mt.getTransfer(o);if(r===yi)return n.UNSIGNED_BYTE;if(r===lm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===cm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===SS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===MS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===_S)return n.BYTE;if(r===yS)return n.SHORT;if(r===Xa)return n.UNSIGNED_SHORT;if(r===am)return n.INT;if(r===or)return n.UNSIGNED_INT;if(r===nr)return n.FLOAT;if(r===ar)return n.HALF_FLOAT;if(r===ES)return n.ALPHA;if(r===wS)return n.RGB;if(r===ir)return n.RGBA;if(r===ns)return n.DEPTH_COMPONENT;if(r===Jr)return n.DEPTH_STENCIL;if(r===TS)return n.RED;if(r===um)return n.RED_INTEGER;if(r===Is)return n.RG;if(r===dm)return n.RG_INTEGER;if(r===fm)return n.RGBA_INTEGER;if(r===jc||r===$c||r===Yc||r===qc)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hh||r===Gh||r===Wh||r===Xh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh||r===$h||r===Yh||r===qh||r===Kh||r===cu||r===Zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===jh||r===$h)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===qh)return a.COMPRESSED_R11_EAC;if(r===Kh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===cu)return a.COMPRESSED_RG11_EAC;if(r===Zh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Qh||r===Jh||r===ep||r===tp||r===np||r===ip||r===rp||r===sp||r===op||r===ap||r===lp||r===cp||r===up||r===dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ep)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===np)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ip)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===op)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ap)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===up)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fp||r===hp||r===pp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fp)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mp||r===gp||r===uu||r===vp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===mp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const SL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ML=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new OS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new rs({vertexShader:SL,fragmentShader:ML,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new is(new bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wL extends Fs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,m=null,v=null,g=null,_=null,M=null;const T=typeof XRWebGLBinding<"u",y=new EL,S={},R=t.getContextAttributes();let L=null,P=null;const O=[],F=[],E=new yt;let C=null,Y=null;const B=new Ui;B.viewport=new on;const U=new Ui;U.viewport=new on;const ee=[B,U],fe=new FR;let V=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=O[Q];return ve===void 0&&(ve=new Gf,O[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=O[Q];return ve===void 0&&(ve=new Gf,O[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=O[Q];return ve===void 0&&(ve=new Gf,O[Q]=ve),ve.getHandSpace()};function le(Q){const ve=F.indexOf(Q.inputSource);if(ve===-1)return;const Ee=O[ve];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,h||c),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",q),o.removeEventListener("inputsourceschange",G);for(let Q=0;Q<O.length;Q++){const ve=F[Q];ve!==null&&(F[Q]=null,O[Q].disconnect(ve))}V=null,J=null,y.reset();for(const Q in S)delete S[Q];if(e.setRenderTarget(L),_=null,g=null,v=null,o=null,P=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),Y!==null){const Q=Y.camera;Q.fov=Y.fov,Q.zoom=Y.zoom,Q.updateProjectionMatrix(),Y=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",q),o.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,_e=null;R.depth&&(_e=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=R.stencil?Jr:ns,Ue=R.stencil?No:or);const Le={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(Le),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new sr(g.textureWidth,g.textureHeight,{format:ir,type:yi,depthTexture:new Io(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new sr(_.framebufferWidth,_.framebufferHeight,{format:ir,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(Q){for(let ve=0;ve<Q.removed.length;ve++){const Ee=Q.removed[ve],Ue=F.indexOf(Ee);Ue>=0&&(F[Ue]=null,O[Ue].disconnect(Ee))}for(let ve=0;ve<Q.added.length;ve++){const Ee=Q.added[ve];let Ue=F.indexOf(Ee);if(Ue===-1){for(let Le=0;Le<O.length;Le++)if(Le>=F.length){F.push(Ee),Ue=Le;break}else if(F[Le]===null){F[Le]=Ee,Ue=Le;break}if(Ue===-1)break}const _e=O[Ue];_e&&_e.connect(Ee)}}function H(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ve=Q.near,Ee=Q.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),fe.near=U.near=B.near=ve,fe.far=U.far=B.far=Ee,(V!==fe.near||J!==fe.far)&&(o.updateRenderState({depthNear:fe.near,depthFar:fe.far}),V=fe.near,J=fe.far),fe.layers.mask=Q.layers.mask|6,B.layers.mask=fe.layers.mask&-5,U.layers.mask=fe.layers.mask&-3;const Ue=Q.parent,_e=fe.cameras;H(fe,Ue);for(let Le=0;Le<_e.length;Le++)H(_e[Le],Ue);fe.projectionMatrix.copy(B.projectionMatrix),fe.projectionMatrixInverse.copy(B.projectionMatrixInverse),Y===null&&Q.isPerspectiveCamera&&(Y={camera:Q,fov:Q.fov,zoom:Q.zoom}),W(Q,fe,Ue)};function W(Q,ve,Ee){Ee===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=xp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return fe},this.getFoveation=function(){if(!(g===null&&_===null))return f},this.setFoveation=function(Q){f=Q,g!==null&&(g.fixedFoveation=Q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(fe)},this.getCameraTexture=function(Q){return S[Q]};let I=null;function ne(Q,ve){if(m=ve.getViewerPose(h||c),M=ve,m!==null){const Ee=m.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let Ue=!1;Ee.length!==fe.cameras.length&&(fe.cameras.length=0,Ue=!0);for(let Ge=0;Ge<Ee.length;Ge++){const mt=Ee[Ge];let gt=null;if(_!==null)gt=_.getViewport(mt);else{const Wt=v.getViewSubImage(g,mt);gt=Wt.viewport,Ge===0&&(e.setRenderTargetTextures(P,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(P))}let Xe=ee[Ge];Xe===void 0&&(Xe=new Ui,Xe.layers.enable(Ge),Xe.viewport=new on,ee[Ge]=Xe),Xe.matrix.fromArray(mt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(mt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(gt.x,gt.y,gt.width,gt.height),Ge===0&&(fe.matrix.copy(Xe.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale)),Ue===!0&&fe.cameras.push(Xe)}const _e=o.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const Ge=v.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&y.init(Ge,o.renderState)}if(_e&&_e.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let Ge=0;Ge<Ee.length;Ge++){const mt=Ee[Ge].camera;if(mt){let gt=S[mt];gt||(gt=new OS,S[mt]=gt);const Xe=v.getCameraImage(mt);gt.sourceTexture=Xe}}}}for(let Ee=0;Ee<O.length;Ee++){const Ue=F[Ee],_e=O[Ee];Ue!==null&&_e!==void 0&&_e.update(Ue,ve,h||c)}I&&I(Q,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Te=new zS;Te.setAnimationLoop(ne),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const TL=new dn,KS=new ft;KS.set(-1,0,0,0,1,0,0,0,1);function AL(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,kS(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,L,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),g(y,S),S.isMeshPhysicalMaterial&&_(y,S,P)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),T(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&u(y,S)):S.isPointsMaterial?f(y,S,R,L):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ni&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ni&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),L=R.envMap,P=R.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(TL.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(KS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function u(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,R,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,R){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function bL(n,e,t,r){let o={},a={};function c(R,L){const P=L.program;r.uniformBlockBinding(R,P,o[R.id])}function u(R,L){let P=o[R.id];P===void 0&&(M(R),P=f(R),o[R.id]=P,R.addEventListener("dispose",y));const O=L.program;r.updateUBOMapping(R,O);const F=e.render.frame;a[R.id]!==F&&(h(R),a[R.id]=F)}function f(R){const L=n.createBuffer(),P=R.__size,O=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,P,O),n.bindBuffer(n.UNIFORM_BUFFER,null),L}function h(R){const L=o[R.id],P=R.uniforms,O=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let F=0,E=P.length;F<E;F++){const C=P[F];if(Array.isArray(C))for(let Y=0,B=C.length;Y<B;Y++)m(C[Y],F,Y,O);else m(C,F,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,L,P,O){if(g(R,L,P,O)===!0){const F=R.__offset,E=R.value;if(Array.isArray(E)){let C=0;for(let Y=0;Y<E.length;Y++){const B=E[Y],U=T(B,!0);v(B,R.__data,C),C+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else v(E,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}function v(R,L,P){typeof R=="number"||typeof R=="boolean"?L[P]=R:R.isMatrix3?(L[P]=R.elements[0],L[P+1]=R.elements[1],L[P+2]=R.elements[2],L[P+3]=0,L[P+4]=R.elements[3],L[P+5]=R.elements[4],L[P+6]=R.elements[5],L[P+7]=0,L[P+8]=R.elements[6],L[P+9]=R.elements[7],L[P+10]=R.elements[8],L[P+11]=0):ArrayBuffer.isView(R)?L.set(R.subarray(0,L.length-P),P):R.toArray(L,P)}function g(R,L,P,O){const F=R.value,E=L+"_"+P;if(Array.isArray(F)){O[E]===void 0&&(O[E]=[]);const C=O[E];let Y=!1;for(let B=0;B<F.length;B++)_(F[B],C,B)===!0&&(Y=!0);return Y}return _(F,O,E)}function _(R,L,P){if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:ArrayBuffer.isView(R)?L[P]=R.slice():L[P]=R.clone(),!0;{const O=L[P];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return L[P]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(O.equals(R)===!1)return O.copy(R),!0}}return!1}function M(R){const L=R.uniforms;let P=0;const O=16;for(let E=0,C=L.length;E<C;E++){const Y=Array.isArray(L[E])?L[E]:[L[E]];for(let B=0,U=Y.length;B<U;B++){const ee=Y[B],fe=Array.isArray(ee.value)?ee.value:[ee.value],V=Array.isArray(L[E])||Array.isArray(ee.value);let J=P;for(let q=0,G=fe.length;q<G;q++){const H=fe[q],W=T(H,V),I=P%O,ne=I%W.boundary,Te=I+ne;P+=ne,Te!==0&&O-Te<W.storage&&(P+=O-Te),q===0&&(J=P),P+=W.storage}const le=ee.type==="int"?Int32Array:ee.type==="uint"?Uint32Array:Float32Array;ee.__data=new le((P-J)/Float32Array.BYTES_PER_ELEMENT),ee.__offset=J}}const F=P%O;return F>0&&(P+=O-F),R.__size=P,R.__cache={},this}function T(R,L){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=16,P.storage=48):R.isMatrix4?(P.boundary=16,P.storage=64):R.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",R),L===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function y(R){const L=R.target;L.removeEventListener("dispose",y),n.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function S(){for(const R in o)n.deleteBuffer(o[R]);o={},a={}}return{bind:c,update:u,dispose:S}}const CL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function RL(){return Zi===null&&(Zi=new AR(CL,16,16,Is,ar),Zi.name="DFG_LUT",Zi.minFilter=ei,Zi.magFilter=ei,Zi.wrapS=Mr,Zi.wrapT=Mr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class PL{constructor(e={}){const{canvas:t=KC(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=yi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const T=_,y=new Set([fm,dm,um]),S=new Set([yi,or,Xa,No,lm,cm]),R=new Uint32Array(4),L=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let O=null,F=null;const E=[],C=[];let Y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let U=!1,ee=null,fe=null,V=null,J=null;this._outputColorSpace=_i;let le=0,q=0,G=null,H=-1,W=null;const I=new on,ne=new on;let Te=null;const Q=new Ut(0);let ve=0,Ee=t.width,Ue=t.height,_e=1,Le=null,it=null;const Ge=new on(0,0,Ee,Ue),mt=new on(0,0,Ee,Ue);let gt=!1;const Xe=new mu,Wt=new gm;let kt=!1,en=!1;const Pt=new dn,Kt=new he,Nt=new on,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function an(){return G===null?_e:1}let K=r;function tn(b,j){return t.getContext(b,j)}let bt,It,we,wt,He,rt,N,w,ie,Ae,ge,De,Ie,me,X,de,k,ae,te,ye,xe,Se,ze;try{const b={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${om}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),K===null){const j="webgl2";if(K=tn(j,b),K===null)throw tn(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(b){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Lt("WebGLRenderer: "+b.message),b}function ct(){bt=new N3(K),bt.init(),xe=new yL(K,bt),It=new M3(K,bt,e,xe),we=new xL(K,bt),It.reversedDepthBuffer&&g&&we.buffers.depth.setReversed(!0),fe=K.createFramebuffer(),V=K.createFramebuffer(),J=K.createFramebuffer(),wt=new F3(K),He=new rL,rt=new _L(K,bt,we,He,It,xe,wt),N=new L3(B),w=new kR(K),Se=new y3(K,w),ie=new I3(K,w,wt,Se),Ae=new k3(K,ie,w,Se,wt),ae=new O3(K,It,rt),X=new E3(He),ge=new iL(B,N,bt,It,Se,X),De=new AL(B,He),Ie=new oL,me=new fL(bt),k=new _3(B,N,we,Ae,M,f),de=new vL(B,Ae,It),ze=new bL(K,wt,It,we),te=new S3(K,bt,wt),ye=new U3(K,bt,wt),wt.programs=ge.programs,B.capabilities=It,B.extensions=bt,B.properties=He,B.renderLists=Ie,B.shadowMap=de,B.state=we,B.info=wt}T!==yi&&(Y=new z3(T,t.width,t.height,u,o,a));const Me=new wL(B,K);this.xr=Me,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(b){b!==void 0&&(_e=b,this.setSize(Ee,Ue,!1))},this.getSize=function(b){return b.set(Ee,Ue)},this.setSize=function(b,j,ce=!0){if(Me.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Ue=j,t.width=Math.floor(b*_e),t.height=Math.floor(j*_e),ce===!0&&(t.style.width=b+"px",t.style.height=j+"px"),Y!==null&&Y.setSize(t.width,t.height),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(Ee*_e,Ue*_e).floor()},this.setDrawingBufferSize=function(b,j,ce){Ee=b,Ue=j,_e=ce,t.width=Math.floor(b*ce),t.height=Math.floor(j*ce),this.setViewport(0,0,b,j)},this.setEffects=function(b){if(T===yi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let j=0;j<b.length;j++)if(b[j].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Ge)},this.setViewport=function(b,j,ce,se){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,j,ce,se),we.viewport(I.copy(Ge).multiplyScalar(an()).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,j,ce,se){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,j,ce,se),we.scissor(ne.copy(mt).multiplyScalar(an()).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(b){we.setScissorTest(gt=b)},this.setOpaqueSort=function(b){Le=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,ce=!0){let se=0;if(b){let re=!1;if(G!==null){const ke=G.texture.format;re=y.has(ke)}if(re){const ke=G.texture.type,je=S.has(ke),Fe=k.getClearColor(),Be=k.getClearAlpha(),qe=Fe.r,lt=Fe.g,ht=Fe.b;je?(R[0]=qe,R[1]=lt,R[2]=ht,R[3]=Be,K.clearBufferuiv(K.COLOR,0,R)):(L[0]=qe,L[1]=lt,L[2]=ht,L[3]=Be,K.clearBufferiv(K.COLOR,0,L))}else se|=K.COLOR_BUFFER_BIT}j&&(se|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&K.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),ee=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),k.dispose(),Ie.dispose(),me.dispose(),rt.dispose(),He.dispose(),N.dispose(),Ae.dispose(),ie.dispose(),Se.dispose(),ze.dispose(),ge.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",il),Me.removeEventListener("sessionend",Hi),Gi.stop()};function Ye(b){b.preventDefault(),Cx("WebGLRenderer: Context Lost."),U=!0}function at(){Cx("WebGLRenderer: Context Restored."),U=!1;const b=wt.autoReset,j=de.enabled,ce=de.autoUpdate,se=de.needsUpdate,re=de.type;ct(),wt.autoReset=b,de.enabled=j,de.autoUpdate=ce,de.needsUpdate=se,de.type=re}function Oe(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){const j=b.target;j.removeEventListener("dispose",vt),Ht(j)}function Ht(b){In(b),He.remove(b)}function In(b){const j=He.get(b).programs;j!==void 0&&(j.forEach(function(ce){ge.releaseProgram(ce)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,ce,se,re,ke){j===null&&(j=Bt);const je=re.isMesh&&re.matrixWorld.determinantAffine()<0,Fe=Xo(b,j,ce,se,re);we.setMaterial(se,je);let Be=ce.index,qe=1;if(se.wireframe===!0){if(Be=ie.getWireframeAttribute(ce),Be===void 0)return;qe=2}const lt=ce.drawRange,ht=ce.attributes.position;let Ke=lt.start*qe,xt=(lt.start+lt.count)*qe;ke!==null&&(Ke=Math.max(Ke,ke.start*qe),xt=Math.min(xt,(ke.start+ke.count)*qe)),Be!==null?(Ke=Math.max(Ke,0),xt=Math.min(xt,Be.count)):ht!=null&&(Ke=Math.max(Ke,0),xt=Math.min(xt,ht.count));const Yt=xt-Ke;if(Yt<0||Yt===1/0)return;Se.setup(re,se,Fe,ce,Be);let Ft,Dt=te;if(Be!==null&&(Ft=w.get(Be),Dt=ye,Dt.setIndex(Ft)),re.isMesh)se.wireframe===!0?(we.setLineWidth(se.wireframeLinewidth*an()),Dt.setMode(K.LINES)):Dt.setMode(K.TRIANGLES);else if(re.isLine){let nn=se.linewidth;nn===void 0&&(nn=1),we.setLineWidth(nn*an()),re.isLineSegments?Dt.setMode(K.LINES):re.isLineLoop?Dt.setMode(K.LINE_LOOP):Dt.setMode(K.LINE_STRIP)}else re.isPoints?Dt.setMode(K.POINTS):re.isSprite&&Dt.setMode(K.TRIANGLES);if(re.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const nn=re._multiDrawStarts,Ze=re._multiDrawCounts,mn=re._multiDrawCount,tt=Be?w.get(Be).bytesPerElement:1,Wi=He.get(se).currentProgram.getUniforms();for(let gn=0;gn<mn;gn++)Wi.setValue(K,"_gl_DrawID",gn),Dt.render(nn[gn]/tt,Ze[gn])}else if(re.isInstancedMesh)Dt.renderInstances(Ke,Yt,re.count);else if(ce.isInstancedBufferGeometry){const nn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ze=Math.min(ce.instanceCount,nn);Dt.renderInstances(Ke,Yt,Ze)}else Dt.render(Ke,Yt)};function as(b,j,ce,se){ee!==null&&b.isNodeMaterial&&ee.setObject(se,b),kt===!0&&X.setState(b,ce,!1),b.transparent===!0&&b.side===tr&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,cs(b,j,se),b.side=Ns,b.needsUpdate=!0,cs(b,j,se),b.side=tr):cs(b,j,se)}this.compile=function(b,j,ce=null){ce===null&&(ce=b),ee!==null&&ee.renderStart(b,j,ce),F=me.get(ce),F.init(j),C.push(F),ce.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(F.pushLight(re),re.castShadow&&F.pushShadow(re))}),b!==ce&&b.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(F.pushLight(re),re.castShadow&&F.pushShadow(re))}),F.setupLights(),ee!==null&&ee.updateLights(F.state.lightsArray),en=this.localClippingEnabled,kt=X.init(this.clippingPlanes,en),kt===!0&&X.setGlobalState(this.clippingPlanes,j),ee!==null&&de.render(F.state.shadowsArray,ce,j);const se=new Set;return b.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ke=re.material;if(ke)if(Array.isArray(ke))for(let je=0;je<ke.length;je++){const Fe=ke[je];as(Fe,ce,j,re),se.add(Fe)}else as(ke,ce,j,re),se.add(ke)}),F=C.pop(),ee!==null&&ee.renderEnd(),se},this.compileAsync=function(b,j,ce=null){const se=this.compile(b,j,ce);return new Promise(re=>{function ke(){if(se.forEach(function(je){const Be=He.get(je).currentProgram;(Be===void 0||Be.isReady())&&se.delete(je)}),se.size===0){re(b);return}setTimeout(ke,10)}bt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Vo=null;function Pu(b){Vo&&Vo(b)}function il(){Gi.stop()}function Hi(){Gi.start()}const Gi=new zS;Gi.setAnimationLoop(Pu),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){Vo=b,Me.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Me.addEventListener("sessionstart",il),Me.addEventListener("sessionend",Hi),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;ee!==null&&ee.renderStart(b,j);const ce=Me.enabled===!0&&Me.isPresenting===!0,se=Y!==null&&(G===null||ce)&&Y.begin(B,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(j),j=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,j,G),F=me.get(b,C.length),F.init(j),F.state.textureUnits=rt.getTextureUnits(),C.push(F),Pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?Wt.setFromArrayCamera(j):Xe.setFromProjectionMatrix(Pt,ki,j.reversedDepth),en=this.localClippingEnabled,kt=X.init(this.clippingPlanes,en),O=Ie.get(b,E.length),O.init(),E.push(O),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){const je=B.xr.getDepthSensingMesh();je!==null&&Os(je,j,-1/0,B.sortObjects)}Os(b,j,0,B.sortObjects),O.finish(),ee!==null&&ee.updateLights(F.state.lightsArray),B.sortObjects===!0&&O.sort(Le,it),Zt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Zt&&k.addToRenderList(O,b),this.info.autoReset===!0&&this.info.reset(),kt===!0&&X.beginShadows();const re=F.state.shadowsArray;if(de.render(re,b,j),kt===!0&&X.endShadows(),(se&&Y.hasRenderPass())===!1){const je=O.opaque,Fe=O.transmissive;if(F.setupLights(),j.isArrayCamera){const Be=j.cameras;if(Fe.length>0)for(let qe=0,lt=Be.length;qe<lt;qe++){const ht=Be[qe];Ho(je,Fe,b,ht)}Zt&&k.render(b);for(let qe=0,lt=Be.length;qe<lt;qe++){const ht=Be[qe];rl(O,b,ht,ht.viewport)}}else Fe.length>0&&Ho(je,Fe,b,j),Zt&&k.render(b),rl(O,b,j)}G!==null&&q===0&&(rt.updateMultisampleRenderTarget(G),rt.updateRenderTargetMipmap(G)),se&&Y.end(B),b.isScene===!0&&b.onAfterRender(B,b,j),Se.resetDefaultState(),H=-1,W=null,C.pop(),C.length>0?(F=C[C.length-1],rt.setTextureUnits(F.state.textureUnits),kt===!0&&X.setGlobalState(B.clippingPlanes,F.state.camera)):F=null,E.pop(),E.length>0?O=E[E.length-1]:O=null,ee!==null&&ee.renderEnd()};function Os(b,j,ce,se){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)ce=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)F.pushLight(b),b.castShadow&&F.pushShadow(b);else if(b.isSprite){const je=j.isArrayCamera?Wt:Xe;if(!b.frustumCulled||b.intersectsFrustum(je)){se&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pt);const Fe=Ae.update(b),Be=b.material;Be.visible&&O.push(b,Fe,Be,ce,Nt.z,null,j)}}else if(b.isMesh||b.isLine||b.isPoints){const je=j.isArrayCamera?Wt:Xe;if(!b.frustumCulled||b.intersectsFrustum(je)){const Fe=Ae.update(b),Be=b.material;if(se&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Nt.copy(Fe.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(Pt)),Array.isArray(Be)){const qe=Fe.groups;for(let lt=0,ht=qe.length;lt<ht;lt++){const Ke=qe[lt],xt=Be[Ke.materialIndex];xt&&xt.visible&&O.push(b,Fe,xt,ce,Nt.z,Ke,j)}}else Be.visible&&O.push(b,Fe,Be,ce,Nt.z,null,j)}}}const ke=b.children;for(let je=0,Fe=ke.length;je<Fe;je++)Os(ke[je],j,ce,se)}function rl(b,j,ce,se){const{opaque:re,transmissive:ke,transparent:je}=b;F.setupLightsView(ce),kt===!0&&X.setGlobalState(B.clippingPlanes,ce),se&&we.viewport(I.copy(se)),re.length>0&&ls(re,j,ce),ke.length>0&&ls(ke,j,ce),je.length>0&&ls(je,j,ce),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ho(b,j,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[se.id]===void 0){const Ke=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[se.id]=new sr(1,1,{generateMipmaps:!0,type:Ke?ar:yi,minFilter:Qr,samples:Math.max(4,It.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const ke=F.state.transmissionRenderTarget[se.id],je=se.viewport||I;ke.setSize(je.z*B.transmissionResolutionScale,je.w*B.transmissionResolutionScale);const Fe=B.getRenderTarget(),Be=B.getActiveCubeFace(),qe=B.getActiveMipmapLevel();B.setRenderTarget(ke),B.getClearColor(Q),ve=B.getClearAlpha(),ve<1&&B.setClearColor(16777215,.5),B.clear(),Zt&&k.render(ce);const lt=B.toneMapping;B.toneMapping=Er;const ht=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),F.setupLightsView(se),kt===!0&&X.setGlobalState(B.clippingPlanes,se),ls(b,ce,se),rt.updateMultisampleRenderTarget(ke),rt.updateRenderTargetMipmap(ke),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let xt=0,Yt=j.length;xt<Yt;xt++){const Ft=j[xt],{object:Dt,geometry:nn,material:Ze,group:mn}=Ft;if(Ze.side===tr&&Dt.layers.test(se.layers)){const tt=Ze.side;Ze.side=ni,Ze.needsUpdate=!0,Go(Dt,ce,se,nn,Ze,mn),Ze.side=tt,Ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(rt.updateMultisampleRenderTarget(ke),rt.updateRenderTargetMipmap(ke))}B.setRenderTarget(Fe,Be,qe),B.setClearColor(Q,ve),ht!==void 0&&(se.viewport=ht),B.toneMapping=lt}function ls(b,j,ce){const se=j.isScene===!0?j.overrideMaterial:null;for(let re=0,ke=b.length;re<ke;re++){const je=b[re],{object:Fe,geometry:Be,group:qe}=je;let lt=je.material;lt.allowOverride===!0&&se!==null&&(lt=se),Fe.layers.test(ce.layers)&&Go(Fe,j,ce,Be,lt,qe)}}function Go(b,j,ce,se,re,ke){ee!==null&&re.isNodeMaterial&&ee.setObject(b,re),b.onBeforeRender(B,j,ce,se,re,ke),b.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),re.onBeforeRender(B,j,ce,se,b,ke),re.transparent===!0&&re.side===tr&&re.forceSinglePass===!1?(re.side=ni,re.needsUpdate=!0,B.renderBufferDirect(ce,j,se,re,b,ke),re.side=Ns,re.needsUpdate=!0,B.renderBufferDirect(ce,j,se,re,b,ke),re.side=tr):B.renderBufferDirect(ce,j,se,re,b,ke),b.onAfterRender(B,j,ce,se,re,ke)}function Wo(b){let j=0;for(const ce of b)ce.texture!==null&&j++;return j}function cs(b,j,ce){j.isScene!==!0&&(j=Bt);const se=He.get(b),re=F.state.lights,ke=F.state.shadowsArray,je=re.state.version,Fe=ge.getParameters(b,re.state,ke,j,ce,F.state.lightProbeGridArray),Be=ge.getProgramCacheKey(Fe);let qe=se.programs;se.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,se.fog=j.fog;const lt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;se.envMap=N.get(b.envMap||se.environment,lt),se.envMapRotation=se.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",vt),qe=new Map,se.programs=qe,se.programVariants=new Map);let ht=qe.get(Be);if(ht!==void 0){if(se.currentProgram===ht&&se.lightsStateVersion===je)return sl(b,Fe),ht}else Fe.uniforms=ge.getUniforms(b),ee!==null&&b.isNodeMaterial&&ee.build(b,ce,Fe),b.onBeforeCompile(Fe,B),ht=ge.acquireProgram(Fe,Be),qe.set(Be,ht),se.uniforms=Fe.uniforms;const Ke=se.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=X.uniform),sl(b,Fe),se.needsLights=ks(b),se.lightsStateVersion=je,se.needsLights&&(Ke.ambientLightColor.value=re.state.ambient,Ke.lightProbe.value=re.state.probe,Ke.sunLights.value=re.state.sun,Ke.sunLightShadows.value=re.state.sunShadow,Ke.directionalLights.value=re.state.directional,Ke.directionalLightShadows.value=re.state.directionalShadow,Ke.spotLights.value=re.state.spot,Ke.spotLightShadows.value=re.state.spotShadow,Ke.rectAreaLights.value=re.state.rectArea,Ke.ltc_1.value=re.state.rectAreaLTC1,Ke.ltc_2.value=re.state.rectAreaLTC2,Ke.pointLights.value=re.state.point,Ke.pointLightShadows.value=re.state.pointShadow,Ke.hemisphereLights.value=re.state.hemi,Ke.sunShadowMatrix.value=re.state.sunShadowMatrix,Ke.sunShadowCascade.value=re.state.sunShadowCascade,Ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ke.spotLightMatrix.value=re.state.spotLightMatrix,Ke.spotLightMap.value=re.state.spotLightMap,Ke.pointShadowMatrix.value=re.state.pointShadowMatrix),se.numLightProbeGrids=Wo(F.state.lightProbeGridArray),se.currentProgram=ht,se.uniformsList=null,ht}function Du(b,j,ce,se,re){const ke=He.get(b),je=ke.currentProgram.id+","+se+","+re;let Fe=ke.programVariants.get(je);return Fe===void 0?(Fe=cs(b,j,ce),ke.programVariants.set(je,Fe)):(ke.currentProgram=Fe,ke.uniformsList=null,ke.outputColorSpace=se,ke.toneMapping=re),Fe}function $t(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Zc.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function sl(b,j){const ce=He.get(b);ce.outputColorSpace=j.outputColorSpace,ce.batching=j.batching,ce.batchingColor=j.batchingColor,ce.instancing=j.instancing,ce.instancingColor=j.instancingColor,ce.instancingMorph=j.instancingMorph,ce.skinning=j.skinning,ce.morphTargets=j.morphTargets,ce.morphNormals=j.morphNormals,ce.morphColors=j.morphColors,ce.morphTargetsCount=j.morphTargetsCount,ce.numClippingPlanes=j.numClippingPlanes,ce.numIntersection=j.numClipIntersection,ce.vertexAlphas=j.vertexAlphas,ce.vertexTangents=j.vertexTangents,ce.toneMapping=j.toneMapping}function Xo(b,j,ce,se,re){j.isScene!==!0&&(j=Bt),rt.resetTextureUnits();const ke=j.fog,je=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?j.environment:null,Fe=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Mt.workingColorSpace,Be=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,qe=N.get(se.envMap||je,Be),lt=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!ce.morphAttributes.position,xt=!!ce.morphAttributes.normal,Yt=!!ce.morphAttributes.color;let Ft=Er;se.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ft=B.toneMapping);const Dt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,nn=Dt!==void 0?Dt.length:0,Ze=He.get(se),mn=F.state.lights;if(kt===!0&&(en===!0||b!==W)){const Ct=b===W&&se.id===H;X.setState(se,b,Ct)}let tt=!1,Wi=!1;se.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==mn.state.version||re.isBatchedMesh&&Ze.batching===!1||!re.isBatchedMesh&&Ze.batching===!0||re.isBatchedMesh&&Ze.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ze.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ze.instancing===!1||!re.isInstancedMesh&&Ze.instancing===!0||re.isSkinnedMesh&&Ze.skinning===!1||!re.isSkinnedMesh&&Ze.skinning===!0||re.isInstancedMesh&&Ze.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ze.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ze.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ze.instancingMorph===!1&&re.morphTexture!==null||Ze.envMap!==qe||se.fog===!0&&Ze.fog!==ke||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==X.numPlanes||Ze.numIntersection!==X.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==ht||Ze.morphTargets!==Ke||Ze.morphNormals!==xt||Ze.morphColors!==Yt||Ze.morphTargetsCount!==nn||Ze.numLightProbeGrids!==Wo(F.state.lightProbeGridArray)?tt=!0:(Ze.outputColorSpace!==Fe||Ze.toneMapping!==Ft)&&(Wi=!0):(tt=!0,Ze.__version=se.version);let gn=Ze.currentProgram;(tt===!0||Wi===!0)&&(gn=Wi===!0?Du(se,j,re,Fe,Ft):cs(se,j,re),ee&&se.isNodeMaterial&&ee.onUpdateProgram(se,gn,Ze));let Tr=!1,Ei=!1,Xi=!1;const St=gn.getUniforms(),ln=Ze.uniforms;if(we.useProgram(gn.program)&&(Tr=!0,Ei=!0,Xi=!0),se.id!==H&&(H=se.id,Ei=!0),Tr||W!==b){we.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),St.setValue(K,"projectionMatrix",b.projectionMatrix),St.setValue(K,"viewMatrix",b.matrixWorldInverse);const zt=St.map.cameraPosition;zt!==void 0&&zt.setValue(K,Kt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&St.setValue(K,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&St.setValue(K,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,Ei=!0,Xi=!0)}if(Ze.needsLights&&(mn.state.sunShadowMap.length>0&&St.setValue(K,"sunShadowMap",mn.state.sunShadowMap,rt),mn.state.directionalShadowMap.length>0&&St.setValue(K,"directionalShadowMap",mn.state.directionalShadowMap,rt),mn.state.spotShadowMap.length>0&&St.setValue(K,"spotShadowMap",mn.state.spotShadowMap,rt),mn.state.pointShadowMap.length>0&&St.setValue(K,"pointShadowMap",mn.state.pointShadowMap,rt)),re.isSkinnedMesh){St.setOptional(K,re,"bindMatrix"),St.setOptional(K,re,"bindMatrixInverse");const Ct=re.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),St.setValue(K,"boneTexture",Ct.boneTexture,rt))}re.isBatchedMesh&&(St.setOptional(K,re,"batchingTexture"),St.setValue(K,"batchingTexture",re._matricesTexture,rt),St.setOptional(K,re,"batchingIdTexture"),St.setValue(K,"batchingIdTexture",re._indirectTexture,rt),St.setOptional(K,re,"batchingColorTexture"),re._colorsTexture!==null&&St.setValue(K,"batchingColorTexture",re._colorsTexture,rt));const Un=ce.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ae.update(re,ce,gn),(Ei||Ze.receiveShadow!==re.receiveShadow)&&(Ze.receiveShadow=re.receiveShadow,St.setValue(K,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&j.environment!==null&&(ln.envMapIntensity.value=j.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=RL()),Ei){if(St.setValue(K,"toneMappingExposure",B.toneMappingExposure),Ze.needsLights&&ol(ln,Xi),ke&&se.fog===!0&&De.refreshFogUniforms(ln,ke),De.refreshMaterialUniforms(ln,se,_e,Ue,F.state.transmissionRenderTarget[b.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const Ct=P;let zt=0;for(const En of F.state.lightProbeGridArray)En.texture!==null&&(Ct.textures[zt]=En.texture,Ct.min[zt]=En.boundingBox.min,Ct.max[zt]=En.boundingBox.max,Ct.resolution[zt]=En.resolution,zt++);for(const En in Ct)Ct[En].length=zt;ln.probesSH.value=Ct.textures,ln.probesMin.value=Ct.min,ln.probesMax.value=Ct.max,ln.probesResolution.value=Ct.resolution}Zc.upload(K,$t(Ze),ln,rt)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zc.upload(K,$t(Ze),ln,rt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&St.setValue(K,"center",re.center),St.setValue(K,"modelViewMatrix",re.modelViewMatrix),St.setValue(K,"normalMatrix",re.normalMatrix),St.setValue(K,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Ct=se.uniformsGroups;for(let zt=0,En=Ct.length;zt<En;zt++){const Ar=Ct[zt];ze.update(Ar,gn),ze.bind(Ar,gn)}}return gn}function ol(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.sunLights.needsUpdate=j,b.sunLightShadows.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function ks(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,j,ce){const se=He.get(b);se.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),He.get(b.texture).__webglTexture=j,He.get(b.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const ce=He.get(b);ce.__webglFramebuffer=j,ce.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,ce=0){G=b,le=j,q=ce;let se=null,re=!1,ke=!1;if(b){const Fe=He.get(b);if(Fe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(K.FRAMEBUFFER,Fe.__webglFramebuffer),I.copy(b.viewport),ne.copy(b.scissor),Te=b.scissorTest,we.viewport(I),we.scissor(ne),we.setScissorTest(Te),H=-1;return}else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(b);else if(Fe.__hasExternalTextures)rt.rebindTextures(b,He.get(b.texture).__webglTexture,He.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const lt=b.depthTexture;if(Fe.__boundDepthTexture!==lt){if(lt!==null&&He.has(lt)&&(b.width!==lt.image.width||b.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ke=!0);const qe=He.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?se=qe[j][ce]:se=qe[j],re=!0):b.samples>0&&rt.useMultisampledRTT(b)===!1?se=He.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?se=qe[ce]:se=qe,I.copy(b.viewport),ne.copy(b.scissor),Te=b.scissorTest}else I.copy(Ge).multiplyScalar(_e).floor(),ne.copy(mt).multiplyScalar(_e).floor(),Te=gt;if(ce!==0&&(se=fe),we.bindFramebuffer(K.FRAMEBUFFER,se)&&we.drawBuffers(b,se),we.viewport(I),we.scissor(ne),we.setScissorTest(Te),re){const Fe=He.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,ce)}else if(ke){const Fe=j;for(let Be=0;Be<b.textures.length;Be++){const qe=He.get(b.textures[Be]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Be,qe.__webglTexture,ce,Fe)}}else if(b!==null&&ce!==0){const Fe=He.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Fe.__webglTexture,ce)}H=-1};function al(b){const j=He.get(b);return(j.__readFormat!==b.format||j.__readType!==b.type)&&(j.__readFormat=b.format,j.__readType=b.type,j.__formatReadable=It.textureFormatReadable(b.format),j.__typeReadable=It.textureTypeReadable(b.type)),j}this.readRenderTargetPixels=function(b,j,ce,se,re,ke,je,Fe=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&je!==void 0&&(Be=Be[je],Array.isArray(Be)&&(Be=Be[0])),Be){we.bindFramebuffer(K.FRAMEBUFFER,Be);try{const qe=b.textures[Fe],lt=qe.format,ht=qe.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe);const Ke=al(qe);if(Ke.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-se&&ce>=0&&ce<=b.height-re&&K.readPixels(j,ce,se,re,xe.convert(lt),xe.convert(ht),ke)}finally{const qe=G!==null?He.get(G).__webglFramebuffer:null;we.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,j,ce,se,re,ke,je,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&je!==void 0&&(Be=Be[je],Array.isArray(Be)&&(Be=Be[0])),Be)if(j>=0&&j<=b.width-se&&ce>=0&&ce<=b.height-re){we.bindFramebuffer(K.FRAMEBUFFER,Be);const qe=b.textures[Fe],lt=qe.format,ht=qe.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe);const Ke=al(qe);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,xt),K.bufferData(K.PIXEL_PACK_BUFFER,ke.byteLength,K.STREAM_READ),K.readPixels(j,ce,se,re,xe.convert(lt),xe.convert(ht),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Yt=G!==null?He.get(G).__webglFramebuffer:null;we.bindFramebuffer(K.FRAMEBUFFER,Yt);const Ft=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await ZC(K,Ft,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,xt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,ke),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(xt),K.deleteSync(Ft),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,ce=0){const se=Math.pow(2,-ce),re=Math.floor(b.image.width*se),ke=Math.floor(b.image.height*se),je=j!==null?j.x:0,Fe=j!==null?j.y:0;rt.setTexture2D(b,0),K.copyTexSubImage2D(K.TEXTURE_2D,ce,0,0,je,Fe,re,ke),we.unbindTexture()},this.copyTextureToTexture=function(b,j,ce=null,se=null,re=0,ke=0){let je,Fe,Be,qe,lt,ht,Ke,xt,Yt;const Ft=b.isCompressedTexture?b.mipmaps[ke]:b.image;if(ce!==null)je=ce.max.x-ce.min.x,Fe=ce.max.y-ce.min.y,Be=ce.isBox3?ce.max.z-ce.min.z:1,qe=ce.min.x,lt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const St=Math.pow(2,-re);je=Math.floor(Ft.width*St),Fe=Math.floor(Ft.height*St),b.isDataArrayTexture?Be=Ft.depth:b.isData3DTexture?Be=Math.floor(Ft.depth*St):Be=1,qe=0,lt=0,ht=0}se!==null?(Ke=se.x,xt=se.y,Yt=se.z):(Ke=0,xt=0,Yt=0);const Dt=xe.convert(j.format),nn=xe.convert(j.type);let Ze;j.isData3DTexture?(rt.setTexture3D(j,0),Ze=K.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(rt.setTexture2DArray(j,0),Ze=K.TEXTURE_2D_ARRAY):(rt.setTexture2D(j,0),Ze=K.TEXTURE_2D),we.activeTexture(K.TEXTURE0),we.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,j.flipY),we.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),we.pixelStorei(K.UNPACK_ALIGNMENT,j.unpackAlignment);const mn=we.getParameter(K.UNPACK_ROW_LENGTH),tt=we.getParameter(K.UNPACK_IMAGE_HEIGHT),Wi=we.getParameter(K.UNPACK_SKIP_PIXELS),gn=we.getParameter(K.UNPACK_SKIP_ROWS),Tr=we.getParameter(K.UNPACK_SKIP_IMAGES);we.pixelStorei(K.UNPACK_ROW_LENGTH,Ft.width),we.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ft.height),we.pixelStorei(K.UNPACK_SKIP_PIXELS,qe),we.pixelStorei(K.UNPACK_SKIP_ROWS,lt),we.pixelStorei(K.UNPACK_SKIP_IMAGES,ht);const Ei=b.isDataArrayTexture||b.isData3DTexture,Xi=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const St=He.get(b),ln=He.get(j),Un=He.get(St.__renderTarget),Ct=He.get(ln.__renderTarget);we.bindFramebuffer(K.READ_FRAMEBUFFER,Un.__webglFramebuffer),we.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let zt=0;zt<Be;zt++)Ei&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,He.get(b).__webglTexture,re,ht+zt),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,He.get(j).__webglTexture,ke,Yt+zt)),K.blitFramebuffer(qe,lt,qe+je,lt+Fe,Ke,xt,Ke+je,xt+Fe,K.DEPTH_BUFFER_BIT,K.NEAREST);we.bindFramebuffer(K.READ_FRAMEBUFFER,null),we.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(re!==0||b.isRenderTargetTexture||He.has(b)){const St=He.get(b),ln=He.get(j);we.bindFramebuffer(K.READ_FRAMEBUFFER,V),we.bindFramebuffer(K.DRAW_FRAMEBUFFER,J);for(let Un=0;Un<Be;Un++)Ei?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,St.__webglTexture,re,ht+Un):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,St.__webglTexture,re),Xi?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ln.__webglTexture,ke,Yt+Un):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ln.__webglTexture,ke),re!==0?K.blitFramebuffer(qe,lt,qe+je,lt+Fe,Ke,xt,Ke+je,xt+Fe,K.COLOR_BUFFER_BIT,K.NEAREST):Xi?K.copyTexSubImage3D(Ze,ke,Ke,xt,Yt+Un,qe,lt,je,Fe):K.copyTexSubImage2D(Ze,ke,Ke,xt,qe,lt,je,Fe);we.bindFramebuffer(K.READ_FRAMEBUFFER,null),we.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Xi?b.isDataTexture||b.isData3DTexture?K.texSubImage3D(Ze,ke,Ke,xt,Yt,je,Fe,Be,Dt,nn,Ft.data):j.isCompressedArrayTexture?K.compressedTexSubImage3D(Ze,ke,Ke,xt,Yt,je,Fe,Be,Dt,Ft.data):K.texSubImage3D(Ze,ke,Ke,xt,Yt,je,Fe,Be,Dt,nn,Ft):b.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ke,Ke,xt,je,Fe,Dt,nn,Ft.data):b.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ke,Ke,xt,Ft.width,Ft.height,Dt,Ft.data):K.texSubImage2D(K.TEXTURE_2D,ke,Ke,xt,je,Fe,Dt,nn,Ft);we.pixelStorei(K.UNPACK_ROW_LENGTH,mn),we.pixelStorei(K.UNPACK_IMAGE_HEIGHT,tt),we.pixelStorei(K.UNPACK_SKIP_PIXELS,Wi),we.pixelStorei(K.UNPACK_SKIP_ROWS,gn),we.pixelStorei(K.UNPACK_SKIP_IMAGES,Tr),ke===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&K.generateMipmap(Ze),we.unbindTexture()},this.initRenderTarget=function(b){He.get(b).__webglFramebuffer===void 0&&rt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?rt.setTextureCube(b,0):b.isData3DTexture?rt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?rt.setTexture2DArray(b,0):rt.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){le=0,q=0,G=null,we.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function DL(n){let e=0,t=0,r=0;n>=390&&n<440?(e=-(n-440)/50,t=0,r=1):n>=440&&n<490?(e=0,t=(n-440)/50,r=1):n>=490&&n<510?(e=0,t=1,r=-(n-510)/20):n>=510&&n<580?(e=(n-510)/70,t=1,r=0):n>=580&&n<645?(e=1,t=-(n-645)/65,r=0):n>=645&&n<=750&&(e=1,t=0,r=0);let o=1;return n<420?o=.4+.6*(n-390)/30:n>660&&(o=.4+.6*(750-n)/90),[Math.round(Math.min(255,Math.max(0,e*o*255))),Math.round(Math.min(255,Math.max(0,t*o*255))),Math.round(Math.min(255,Math.max(0,r*o*255)))]}const LL=()=>{const n=Pe.useRef(null),e=Pe.useRef(null),t=Pe.useRef(null);return Pe.useEffect(()=>{const r=n.current,o=e.current,a=t.current;if(!r||!o||!a)return;let c,u=r.clientWidth||window.innerWidth,f=r.clientHeight||window.innerHeight;const h={x:.65,y:.55,targetX:.65,targetY:.55,lastInteraction:Date.now()},m=V=>{const J=r.getBoundingClientRect(),le="touches"in V?V.touches[0].clientX:V.clientX,q="touches"in V?V.touches[0].clientY:V.clientY;h.targetX=Math.max(.02,Math.min(.98,(le-J.left)/J.width)),h.targetY=Math.max(.02,Math.min(.98,(q-J.top)/J.height)),h.lastInteraction=Date.now()};window.addEventListener("mousemove",m,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0});const v=new gR,g=new Ui(40,u/f,.1,2e3);g.position.set(0,0,750);const _=new PL({canvas:o,alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(u,f),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const M=`
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,T=`
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      // Studio environment lights (mathematically aligned to catch beveled chamfers)
      vec3 sampleStudio(vec3 R) {
        // 1. Dominant right key panel: aligned to right chamfer reflection (0.814, 0.470, -0.342)
        vec3 keyDir = normalize(vec3(0.814, 0.470, -0.342));
        float keyDot = dot(R, keyDir);
        float keyHighlight = 0.0;
        if (keyDot > 0.0) {
          keyHighlight = pow(keyDot, 50.0) * 16.0 + pow(keyDot, 14.0) * 5.0;
        }

        // 2. Soft left fill panel: aligned to left chamfer reflection (-0.814, 0.470, -0.342)
        vec3 rimDir = normalize(vec3(-0.814, 0.470, -0.342));
        float rimDot = dot(R, rimDir);
        float rimHighlight = 0.0;
        if (rimDot > 0.0) {
          rimHighlight = pow(rimDot, 22.0) * 3.5 + pow(rimDot, 8.0) * 1.5;
        }

        // 3. Crisp bottom floor panel: aligned to base chamfer reflection (0.0, -0.939, -0.343)
        vec3 btmDir = normalize(vec3(0.0, -0.939, -0.343));
        float btmDot = dot(R, btmDir);
        float btmHighlight = 0.0;
        if (btmDot > 0.0) {
          btmHighlight = pow(btmDot, 30.0) * 4.0;
        }

        // 4. Overhead strip
        vec3 topDir = normalize(vec3(0.0, 0.70, -0.71));
        float topDot = max(0.0, dot(R, topDir));
        float topHighlight = pow(topDot, 24.0) * 2.5;

        // Dark ambient room reflection
        vec3 room = mix(vec3(0.02, 0.025, 0.035), vec3(0.045, 0.055, 0.075), R.y * 0.5 + 0.5);

        return room + 
               vec3(0.85, 0.94, 1.0) * keyHighlight + 
               vec3(0.75, 0.85, 0.95) * rimHighlight + 
               vec3(0.90, 0.92, 0.96) * btmHighlight +
               vec3(1.0, 1.0, 1.0) * topHighlight;
      }

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vViewDir);
        vec3 R = reflect(-V, N);

        float facing = clamp(dot(V, N), 0.0, 1.0);
        // Dielectric Fresnel for dense flint crystal glass (IOR 1.645)
        float F0 = 0.0593;
        float fresnel = F0 + (1.0 - F0) * pow(1.0 - facing, 3.8);

        vec3 studioRadiance = sampleStudio(R);

        // Dark smoky crystal body
        vec3 glassBody = vec3(0.025, 0.035, 0.050);

        // Chamfer edge glint
        float edgeGlint = pow(1.0 - facing, 2.5);

        // Combine crystal transmission + specular reflection
        vec3 finalColor = glassBody * (1.0 - fresnel * 0.75) + 
                          studioRadiance * fresnel * 0.85 + 
                          vec3(0.92, 0.96, 1.0) * edgeGlint * 0.32;

        // Soft filmic shoulder
        finalColor = finalColor / (1.0 + finalColor * 0.5);

        // Alpha: front inner window is translucent so light shines through;
        // beveled facets and sides are denser with brilliant specular gleam
        float alpha = clamp(0.24 + fresnel * 0.68 + length(studioRadiance) * 0.09 + edgeGlint * 0.35, 0.20, 0.98);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,y=new rs({vertexShader:M,fragmentShader:T,transparent:!0,depthWrite:!0,side:tr});let S;function R(V,J){const le=new os,q=V/Math.sqrt(3),G=new yt(0,q),H=new yt(V/2,-q/2),W=new yt(-V/2,-q/2),ne=1-.075*(2*Math.sqrt(3)),Te=new yt(0,ne*q),Q=new yt(ne*V/2,-ne*q/2),ve=new yt(-ne*V/2,-ne*q/2),Ee=J/2,Ue=J*.22,_e=Ee,Le=Ee-Ue,it=-Ee+Ue,Ge=-Ee,mt=[],gt=[];function Xe(Wt,kt,en,Pt){let Kt=Pt;if(!Kt){const Nt=new he(...Wt),Bt=new he(...kt),Zt=new he(...en),an=new he().subVectors(Bt,Nt),K=new he().subVectors(Zt,Nt),tn=new he().crossVectors(an,K).normalize();Kt=[tn.x,tn.y,tn.z]}mt.push(...Wt,...kt,...en),gt.push(...Kt,...Kt,...Kt)}return Xe([Te.x,Te.y,_e],[ve.x,ve.y,_e],[Q.x,Q.y,_e],[0,0,1]),Xe([Te.x,Te.y,_e],[H.x,H.y,Le],[G.x,G.y,Le]),Xe([Te.x,Te.y,_e],[Q.x,Q.y,_e],[H.x,H.y,Le]),Xe([Q.x,Q.y,_e],[W.x,W.y,Le],[H.x,H.y,Le]),Xe([Q.x,Q.y,_e],[ve.x,ve.y,_e],[W.x,W.y,Le]),Xe([ve.x,ve.y,_e],[G.x,G.y,Le],[W.x,W.y,Le]),Xe([ve.x,ve.y,_e],[Te.x,Te.y,_e],[G.x,G.y,Le]),Xe([G.x,G.y,Le],[H.x,H.y,Le],[H.x,H.y,it]),Xe([G.x,G.y,Le],[H.x,H.y,it],[G.x,G.y,it]),Xe([H.x,H.y,Le],[W.x,W.y,Le],[W.x,W.y,it]),Xe([H.x,H.y,Le],[W.x,W.y,it],[H.x,H.y,it]),Xe([W.x,W.y,Le],[G.x,G.y,Le],[G.x,G.y,it]),Xe([W.x,W.y,Le],[G.x,G.y,it],[W.x,W.y,it]),Xe([Te.x,Te.y,Ge],[G.x,G.y,it],[H.x,H.y,it]),Xe([Te.x,Te.y,Ge],[H.x,H.y,it],[Q.x,Q.y,Ge]),Xe([Q.x,Q.y,Ge],[H.x,H.y,it],[W.x,W.y,it]),Xe([Q.x,Q.y,Ge],[W.x,W.y,it],[ve.x,ve.y,Ge]),Xe([ve.x,ve.y,Ge],[W.x,W.y,it],[G.x,G.y,it]),Xe([ve.x,ve.y,Ge],[G.x,G.y,it],[Te.x,Te.y,Ge]),Xe([Te.x,Te.y,Ge],[Q.x,Q.y,Ge],[ve.x,ve.y,Ge],[0,0,-1]),le.setAttribute("position",new zi(mt,3)),le.setAttribute("normal",new zi(gt,3)),le}const L=Array.from({length:65},()=>({t:Math.random(),offset:(Math.random()-.5)*22,radius:.6+Math.random()*1.4,alpha:.25+Math.random()*.65,speed:.0016+Math.random()*.0022,twinklePhase:Math.random()*Math.PI*2})),P=72,O=[];for(let V=0;V<P;V++){const J=415+V/(P-1)*270,le=J*.001,q=1.2+.095/(le*le);O.push({nm:J,rgb:DL(J),ior:q})}let F=280,E=u*.65,C=f*.5;function Y(){u=(r==null?void 0:r.clientWidth)||window.innerWidth,f=(r==null?void 0:r.clientHeight)||window.innerHeight,g.aspect=u/f,g.updateProjectionMatrix(),_.setSize(u,f),a.width=u,a.height=f,u<820?(F=Math.min(u*.5,f*.26,210),E=u*.5,C=f*.54):(F=Math.min(u*.21,f*.4,280),E=u*.65,C=f*.5),S&&v.remove(S);const J=F*.45,le=R(F,J);S=new is(le,y),v.add(S);const q=new he(E/u*2-1,-(C/f)*2+1,.5);q.unproject(g);const G=q.sub(g.position).normalize(),H=-g.position.z/G.z,W=g.position.clone().add(G.multiplyScalar(H));S.position.set(W.x,W.y,0)}Y();const B=new ResizeObserver(()=>Y());B.observe(r);const U=a.getContext("2d");let ee=performance.now();const fe=V=>{c=requestAnimationFrame(fe);const J=(V-ee)*.001,le=Date.now()-h.lastInteraction>3e3;if(le&&(h.targetX=.65+Math.sin(J*.35)*.07,h.targetY=.55+Math.cos(J*.28)*.08),h.x+=(h.targetX-h.x)*.09,h.y+=(h.targetY-h.y)*.09,S&&(S.rotation.y=(h.x-.65)*.25+(le?Math.sin(J*.4)*.012:0),S.rotation.x=-(h.y-.5)*.18+(le?Math.cos(J*.3)*.01:0),S.rotation.z=(h.x-.5)*.03),_.render(v,g),!U)return;U.clearRect(0,0,u,f);const q=F/Math.sqrt(3),G=[E,C-q],H=[E+F/2,C+q/2],W=[E-F/2,C+q/2],I=[H[0]-G[0],H[1]-G[1]],ne=Math.hypot(I[0],I[1]),Te=[I[0]/ne,I[1]/ne],Q=[Te[1],-Te[0]],ve=[-Q[0],-Q[1]],Ee=[G[0]-W[0],G[1]-W[1]],Ue=Math.hypot(Ee[0],Ee[1]),_e=[Ee[0]/Ue,Ee[1]/Ue],Le=[_e[1],-_e[0]],it=[W[0]-H[0],W[1]-H[1]],Ge=Math.hypot(it[0],it[1]),mt=[it[0]/Ge,it[1]/Ge],gt=[mt[1],-mt[0]],Xe=F*.055,Wt=Xe/2,kt=.15+h.x*.7,Pt=(-10+h.y*82)*(Math.PI/180),Kt=Math.cos(Pt),Nt=Math.sin(Pt),Bt=[ve[0]*Kt-ve[1]*Nt,ve[0]*Nt+ve[1]*Kt],Zt=[-Bt[1],Bt[0]];function an(X,de,k,ae){const te=ae[0]-k[0],ye=ae[1]-k[1],xe=de[0]*ye-de[1]*te;if(Math.abs(xe)<1e-6)return null;const Se=((k[0]-X[0])*ye-(k[1]-X[1])*te)/xe,ze=((k[0]-X[0])*de[1]-(k[1]-X[1])*de[0])/xe;return Se>.01&&ze>=0&&ze<=1?{t:Se,u:ze,point:[X[0]+de[0]*Se,X[1]+de[1]*Se]}:null}function K(X,de,k){const ae=-(X[0]*de[0]+X[1]*de[1]),te=1/k,ye=te*te*(1-ae*ae);if(ye>1)return null;const xe=Math.sqrt(1-ye);return[te*X[0]+(te*ae-xe)*de[0],te*X[1]+(te*ae-xe)*de[1]]}function tn(X,de,k){const ae=X[0]*de[0]+X[1]*de[1];if(ae<=0)return{tir:!0,outDir:X};const te=k,ye=te*te*(1-ae*ae);if(ye>1)return{tir:!0,outDir:[X[0]-2*ae*de[0],X[1]-2*ae*de[1]]};const xe=Math.sqrt(1-ye),Se=[te*X[0]+(xe-te*ae)*de[0],te*X[1]+(xe-te*ae)*de[1]],ze=Math.hypot(Se[0],Se[1])||1;return{tir:!1,outDir:[Se[0]/ze,Se[1]/ze]}}const bt=7,It=Array.from({length:bt},(X,de)=>-Wt+de/(bt-1)*Xe),we=[G[0]+I[0]*kt,G[1]+I[1]*kt],wt=Math.max(u,f)*1.5,He=[we[0]-Bt[0]*wt,we[1]-Bt[1]*wt];U.save(),U.globalCompositeOperation="lighter";const rt=U.createLinearGradient(He[0],He[1],we[0],we[1]);rt.addColorStop(0,"rgba(255, 255, 255, 0.01)"),rt.addColorStop(.5,"rgba(235, 245, 255, 0.18)"),rt.addColorStop(1,"rgba(255, 255, 255, 0.45)"),U.strokeStyle=rt,U.lineWidth=Xe+14,U.lineCap="round",U.beginPath(),U.moveTo(He[0],He[1]),U.lineTo(we[0],we[1]),U.stroke();const N=U.createLinearGradient(He[0],He[1],we[0],we[1]);N.addColorStop(0,"rgba(255, 255, 255, 0.25)"),N.addColorStop(.6,"rgba(255, 255, 255, 0.75)"),N.addColorStop(1,"rgba(255, 255, 255, 0.98)"),U.strokeStyle=N,U.lineWidth=Xe,U.lineCap="round",U.beginPath(),U.moveTo(He[0],He[1]),U.lineTo(we[0],we[1]),U.stroke(),U.strokeStyle="#ffffff",U.lineWidth=2.8,U.lineCap="round",U.beginPath(),U.moveTo(He[0],He[1]),U.lineTo(we[0],we[1]),U.stroke();for(const X of L){X.t+=X.speed,X.t>1&&(X.t=0);const de=He[0]+(we[0]-He[0])*X.t+Zt[0]*X.offset,k=He[1]+(we[1]-He[1])*X.t+Zt[1]*X.offset,ae=.5+.5*Math.sin(J*4+X.twinklePhase),te=X.alpha*ae*Math.sin(X.t*Math.PI);U.fillStyle=`rgba(255, 255, 255, ${te.toFixed(3)})`,U.beginPath(),U.arc(de,k,X.radius,0,Math.PI*2),U.fill()}const w=[];for(let X=0;X<bt;X++){const de=It[X],k=[we[0]+Zt[0]*de,we[1]+Zt[1]*de],ae=[];for(let te=0;te<P;te++){const{ior:ye}=O[te],xe=K(Bt,Q,ye);if(!xe)continue;const Se=Math.hypot(xe[0],xe[1])||1,ze=[xe[0]/Se,xe[1]/Se],ct=an(k,ze,W,G),Me=an(k,ze,H,W);let Ye=ct,at=Le;if((!Ye||Me&&Me.t<Ye.t)&&(Ye=Me,at=gt),!Ye)continue;const Oe=tn(ze,at,ye);let vt,Ht;if(Oe.tir){const In=an(Ye.point,Oe.outDir,H,W);In&&(vt=In.point,Ht=tn(Oe.outDir,gt,ye).outDir)}ae.push({entry:k,exit:Ye.point,outDir:Oe.outDir,tir:Oe.tir,tirExit:vt,tirOutDir:Ht})}w.push(ae)}const ie=w[0],Ae=w[w.length-1];if(ie&&Ae&&ie.length===Ae.length)for(let X=0;X<ie.length-1;X++){const de=ie[X],k=ie[X+1],ae=Ae[X],te=Ae[X+1];if(!de||!k||!ae||!te)continue;const[ye,xe,Se]=O[X].rgb;U.fillStyle=`rgba(${ye}, ${xe}, ${Se}, 0.55)`,U.beginPath(),U.moveTo(de.entry[0],de.entry[1]),U.lineTo(k.entry[0],k.entry[1]),U.lineTo(te.exit[0],te.exit[1]),U.lineTo(ae.exit[0],ae.exit[1]),U.closePath(),U.fill()}const ge=[];for(let X=0;X<P;X++){const de=ie?ie[X]:null,k=Ae?Ae[X]:null;de&&k&&!de.tir&&!k.tir&&ge.push({wIdx:X,topExit:de.exit,topDir:de.outDir,btmExit:k.exit,btmDir:k.outDir})}if(ge.length>2){for(let X=0;X<ge.length-1;X++){const de=ge[X],k=ge[X+1],[ae,te,ye]=O[de.wIdx].rgb,xe=de.topExit,Se=k.btmExit,ze=[xe[0]+de.topDir[0]*wt,xe[1]+de.topDir[1]*wt],ct=[Se[0]+k.btmDir[0]*wt,Se[1]+k.btmDir[1]*wt],Me=U.createLinearGradient(xe[0],xe[1],ze[0],ze[1]);Me.addColorStop(0,`rgba(${ae}, ${te}, ${ye}, 0.98)`),Me.addColorStop(.2,`rgba(${ae}, ${te}, ${ye}, 0.90)`),Me.addColorStop(.55,`rgba(${ae}, ${te}, ${ye}, 0.55)`),Me.addColorStop(.85,`rgba(${ae}, ${te}, ${ye}, 0.20)`),Me.addColorStop(1,`rgba(${ae}, ${te}, ${ye}, 0.0)`),U.fillStyle=Me,U.beginPath(),U.moveTo(xe[0],xe[1]),U.lineTo(Se[0],Se[1]),U.lineTo(ct[0],ct[1]),U.lineTo(ze[0],ze[1]),U.closePath(),U.fill()}for(let X=0;X<ge.length;X+=2){const de=ge[X],[k,ae,te]=O[de.wIdx].rgb,ye=[(de.topExit[0]+de.btmExit[0])/2,(de.topExit[1]+de.btmExit[1])/2],xe=[(de.topDir[0]+de.btmDir[0])/2,(de.topDir[1]+de.btmDir[1])/2],Se=U.createLinearGradient(ye[0],ye[1],ye[0]+xe[0]*wt,ye[1]+xe[1]*wt);Se.addColorStop(0,`rgba(${k}, ${ae}, ${te}, 0.95)`),Se.addColorStop(.3,`rgba(${k}, ${ae}, ${te}, 0.75)`),Se.addColorStop(.7,`rgba(${k}, ${ae}, ${te}, 0.25)`),Se.addColorStop(1,`rgba(${k}, ${ae}, ${te}, 0.0)`),U.strokeStyle=Se,U.lineWidth=2,U.beginPath(),U.moveTo(ye[0],ye[1]),U.lineTo(ye[0]+xe[0]*wt,ye[1]+xe[1]*wt),U.stroke()}}const De=[],Ie=w[Math.floor(bt/2)]||[];for(const X of Ie)X.tir&&X.tirExit&&X.tirOutDir&&De.push({exit:X.tirExit,dir:X.tirOutDir});if(De.length>0){const X=De[Math.floor(De.length/2)],de=U.createLinearGradient(X.exit[0],X.exit[1],X.exit[0]+X.dir[0]*320,X.exit[1]+X.dir[1]*320);de.addColorStop(0,"rgba(180, 220, 255, 0.75)"),de.addColorStop(.35,"rgba(230, 200, 140, 0.40)"),de.addColorStop(.75,"rgba(100, 160, 240, 0.15)"),de.addColorStop(1,"rgba(0, 0, 0, 0)"),U.strokeStyle=de,U.lineWidth=Xe*.85,U.lineCap="round",U.beginPath(),U.moveTo(X.exit[0],X.exit[1]),U.lineTo(X.exit[0]+X.dir[0]*320,X.exit[1]+X.dir[1]*320),U.stroke()}const me=U.createRadialGradient(we[0],we[1],0,we[0],we[1],30);if(me.addColorStop(0,"rgba(255, 255, 255, 1.0)"),me.addColorStop(.25,"rgba(240, 250, 255, 0.75)"),me.addColorStop(.65,"rgba(180, 220, 255, 0.2)"),me.addColorStop(1,"rgba(0, 0, 0, 0)"),U.fillStyle=me,U.beginPath(),U.arc(we[0],we[1],30,0,Math.PI*2),U.fill(),ge.length>0){const X=ge[Math.floor(ge.length/2)],de=U.createRadialGradient(X.topExit[0],X.topExit[1],0,X.topExit[0],X.topExit[1],40);de.addColorStop(0,"rgba(255, 255, 255, 0.85)"),de.addColorStop(.3,"rgba(255, 220, 100, 0.45)"),de.addColorStop(.7,"rgba(100, 180, 255, 0.2)"),de.addColorStop(1,"rgba(0, 0, 0, 0)"),U.fillStyle=de,U.beginPath(),U.arc(X.topExit[0],X.topExit[1],40,0,Math.PI*2),U.fill()}U.restore()};return c=requestAnimationFrame(fe),()=>{cancelAnimationFrame(c),window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),B.disconnect(),_.dispose(),y.dispose()}},[]),D.jsxs("div",{ref:n,className:"absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0","aria-hidden":"true",children:[D.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full block"}),D.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block pointer-events-none",style:{mixBlendMode:"screen"}})]})},NL=({onOpenContact:n})=>{const e=t=>{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})};return D.jsxs("section",{className:"relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]",children:[D.jsx(LL,{}),D.jsx("div",{className:"absolute top-0 left-0 right-0 z-[1] pointer-events-none",style:{height:"90px",background:"linear-gradient(to bottom, #0C0C0C 10%, transparent)"}}),D.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-[1] pointer-events-none",style:{height:"70px",background:"linear-gradient(to top, #0C0C0C 10%, transparent)"}}),D.jsx(un,{delay:0,y:-20,as:"nav",className:"w-full z-20 relative",immediate:!0,children:D.jsxs("div",{className:"w-full px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between",children:[D.jsx("button",{onClick:()=>e("about"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer",children:"About"}),D.jsx("button",{onClick:()=>e("achievements"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer",children:"achievments"}),D.jsx("button",{onClick:()=>e("skills"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer",children:"Skills"}),D.jsx("button",{onClick:()=>e("projects"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer",children:"Projects"}),D.jsx("button",{onClick:n,className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer",children:"Contact"})]})}),D.jsx("div",{className:"w-full flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 z-10 relative pointer-events-none py-12 md:py-0",children:D.jsxs("div",{className:"max-w-xl md:max-w-2xl text-left pointer-events-auto",children:[D.jsx(un,{delay:0,duration:.4,y:15,immediate:!0,children:D.jsx("h1",{className:"font-black uppercase tracking-tight leading-[0.92] select-none text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)] mb-4 md:mb-6",style:{fontSize:"clamp(3.5rem, 8vw, 8rem)"},children:"Hi, i'm Namish"})}),D.jsx(un,{delay:.08,duration:.4,y:15,immediate:!0,children:D.jsx("p",{className:"text-white font-medium uppercase tracking-wide leading-relaxed mb-6 md:mb-8 text-base sm:text-lg md:text-xl max-w-md drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]",children:"a 3d creator driven by crafting striking and unforgettable projects"})}),D.jsxs(un,{delay:.16,duration:.4,y:15,className:"flex items-center gap-4 sm:gap-6 flex-wrap",immediate:!0,children:[D.jsx("div",{className:"drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]",children:D.jsx(em,{onClick:n})}),D.jsxs("div",{className:"flex items-center gap-2.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]",children:[D.jsx("a",{href:Rn.github,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-white flex items-center justify-center transition-all border border-white/10","aria-label":"GitHub Profile",children:D.jsx(Qa,{className:"w-4 h-4"})}),D.jsx("a",{href:Rn.instagram,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-pink-400 flex items-center justify-center transition-all border border-white/10","aria-label":"Instagram Profile",children:D.jsx(im,{className:"w-4 h-4"})}),D.jsx("a",{href:`mailto:${Rn.email}`,className:"w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-amber-400 flex items-center justify-center transition-all border border-white/10","aria-label":"Email Namish",children:D.jsx(rm,{className:"w-4 h-4"})}),D.jsx("a",{href:Rn.website,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-cyan-400 flex items-center justify-center transition-all border border-white/10","aria-label":"Official Website",children:D.jsx(nm,{className:"w-4 h-4"})})]})]})]})})]})},IL=({onSelectCertificate:n})=>{const e=Pe.useRef(null),[t,r]=Pe.useState(0);Pe.useEffect(()=>{const c=()=>{if(!e.current)return;const u=e.current.getBoundingClientRect(),f=window.scrollY+u.top,h=(window.scrollY-f+window.innerHeight)*.3;r(h)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>{window.removeEventListener("scroll",c)}},[]);const o=[...Pf,...Pf,...Pf],a=[...Df,...Df,...Df];return D.jsx("section",{ref:e,className:"relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none",children:D.jsxs("div",{className:"flex flex-col gap-3",children:[D.jsx("div",{className:"flex gap-3 whitespace-nowrap cursor-pointer",style:{transform:`translateX(${t-200}px)`,willChange:"transform"},children:o.map((c,u)=>D.jsxs("div",{onClick:()=>n==null?void 0:n(c),className:"w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-white/15 p-2 flex items-center justify-center flex-shrink-0 shadow-lg group hover:border-[#B600A8]/60 transition-all duration-300 relative",children:[D.jsx("img",{src:c,alt:`Certificate ${u+1}`,className:"w-full h-full object-contain rounded-xl pointer-events-none transition-transform duration-500 group-hover:scale-105",loading:"lazy",decoding:"async"}),D.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl",children:D.jsx("span",{className:"px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs uppercase font-bold tracking-wider border border-white/30",children:"Inspect Certificate"})})]},`row1-cert-${u}`))}),D.jsx("div",{className:"flex gap-3 whitespace-nowrap cursor-pointer",style:{transform:`translateX(${-(t-200)}px)`,willChange:"transform"},children:a.map((c,u)=>D.jsxs("div",{onClick:()=>n==null?void 0:n(c),className:"w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-white/15 p-2 flex items-center justify-center flex-shrink-0 shadow-lg group hover:border-[#B600A8]/60 transition-all duration-300 relative",children:[D.jsx("img",{src:c,alt:`Certificate ${u+1}`,className:"w-full h-full object-contain rounded-xl pointer-events-none transition-transform duration-500 group-hover:scale-105",loading:"lazy",decoding:"async"}),D.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl",children:D.jsx("span",{className:"px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs uppercase font-bold tracking-wider border border-white/30",children:"Inspect Certificate"})})]},`row2-cert-${u}`))})]})})},UL=({onOpenContact:n})=>{const e=[{value:"17",label:"GitHub repos",icon:fC,accent:"text-violet-400"},{value:"4",label:"Deployed apps",icon:nm,accent:"text-cyan-400"},{value:"7",label:"Awards & honors",icon:tm,accent:"text-amber-400"},{value:"10",label:"Class / Grade",icon:Tu,accent:"text-pink-400"}];return D.jsxs("section",{id:"about",className:"relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 overflow-hidden",children:[D.jsx("div",{className:"absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none",children:D.jsx(un,{delay:.1,x:-80,y:0,duration:.9,children:D.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",alt:"Moon 3D Floater",className:"w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-90",loading:"lazy",decoding:"async"})})}),D.jsx("div",{className:"absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none",children:D.jsx(un,{delay:.25,x:-80,y:0,duration:.9,children:D.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",alt:"3D Floating Shape",className:"w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none opacity-90",loading:"lazy",decoding:"async"})})}),D.jsx("div",{className:"absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none",children:D.jsx(un,{delay:.15,x:80,y:0,duration:.9,children:D.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",alt:"Lego 3D Floater",className:"w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-90",loading:"lazy",decoding:"async"})})}),D.jsx("div",{className:"absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none",children:D.jsx(un,{delay:.3,x:80,y:0,duration:.9,children:D.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",alt:"3D Composition",className:"w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none opacity-90",loading:"lazy",decoding:"async"})})}),D.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full",children:[D.jsxs(un,{delay:0,y:40,className:"w-full",children:[D.jsx("span",{className:"text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 block",children:"About Me"}),D.jsx("h2",{style:{fontSize:"clamp(3rem, 12vw, 160px)"},className:"hero-heading font-black uppercase leading-none tracking-tight text-center select-none",children:"About Me"})]}),D.jsx("div",{className:"h-10 sm:h-12"}),D.jsxs("div",{className:"max-w-3xl mx-auto px-4 space-y-6 text-left sm:text-center",children:[D.jsx(un,{delay:.15,y:20,children:D.jsxs("p",{className:"text-lg sm:text-xl md:text-2xl font-normal text-[#D7E2EA] leading-relaxed",children:["Hey — I'm ",D.jsx("span",{className:"font-semibold text-white",children:"Namish"}),", a Class 10 student from Gurugram with a deep interest in robotics, embedded systems, and software development."]})}),D.jsx(un,{delay:.25,y:20,children:D.jsxs("p",{className:"text-base sm:text-lg text-[#D7E2EA]/85 font-light leading-relaxed",children:["I build hands‑on STEM and programming projects — Arduino‑based devices, NodeMCU IoT systems, and modern web interfaces. My flagship build, the ",D.jsx("span",{className:"text-amber-300 font-medium",children:"Parkinson's Self‑Stabilizing Spoon"}),", uses gyroscopic correction to counteract hand tremors and earned ",D.jsx("span",{className:"text-amber-300 font-medium",children:"1st Runner‑Up at KVRSS India"})," in the Physics category."]})}),D.jsx(un,{delay:.35,y:20,children:D.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-[#D7E2EA]/90 text-sm sm:text-base font-light italic leading-relaxed",children:["“I've also shipped web prototypes in time‑bound, collaborative environments — sharpening how I design systems, debug under pressure, and ship fast. My approach is simple: ",D.jsx("span",{className:"text-white font-semibold not-italic",children:"learn by building."}),"”"]})})]}),D.jsx(un,{delay:.4,y:30,className:"w-full max-w-3xl mt-12 sm:mt-16",children:D.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full",children:e.map((t,r)=>D.jsxs("div",{className:"p-5 sm:p-6 rounded-[28px] bg-[#121212] border border-[#D7E2EA]/20 flex flex-col items-center justify-center text-center shadow-lg hover:border-[#B600A8]/50 transition-all duration-300 group",children:[D.jsx(t.icon,{className:`w-5 h-5 ${t.accent} mb-2 group-hover:scale-110 transition-transform`}),D.jsx("span",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none tracking-tight mb-1",children:t.value}),D.jsx("span",{className:"text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium",children:t.label})]},r))})}),D.jsx(un,{delay:.5,y:20,className:"mt-12 sm:mt-16",children:D.jsx(em,{onClick:n})})]})]})},FL=()=>{const n=[{name:"Python"},{name:"JavaScript"},{name:"TypeScript"},{name:"React"},{name:"Flutter"},{name:"Arduino",featured:!0},{name:"Raspberry Pi"}],e=[{name:"AI / ML"},{name:"Electronics"},{name:"C++"},{name:"NodeMCU / ESP8266"},{name:"IoT Systems"},{name:"Control Systems"}],t=[{name:"3D Modeling / CAD"},{name:"Sensor Integration"},{name:"Git"}],r=[{name:"Arduino / Embedded C++",percent:92},{name:"React / JavaScript",percent:88},{name:"IoT / NodeMCU Systems",percent:84},{name:"Python / AI & ML",percent:78},{name:"3D Modeling / CAD",percent:82}];return D.jsxs("section",{id:"skills",className:"relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden",children:[D.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(#D7E2EA 1px, transparent 1px)",backgroundSize:"24px 24px"}}),D.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[D.jsxs(un,{delay:0,y:30,className:"mb-10 sm:mb-14",children:[D.jsxs("p",{className:"font-mono text-xs sm:text-sm text-[#D7E2EA]/60 mb-3 tracking-wide flex items-center gap-2",children:[D.jsx(mC,{className:"w-4 h-4 text-lime-400"}),D.jsx("span",{children:"Toolkit & technologies I reach for —"})]}),D.jsx("h2",{style:{fontSize:"clamp(2.5rem, 8vw, 6rem)"},className:"hero-heading font-black uppercase leading-none tracking-tight select-none",children:"Engineering Toolkit"})]}),D.jsxs(un,{delay:.15,y:30,className:"w-full flex flex-col gap-3 sm:gap-4 mb-16 sm:mb-20",children:[D.jsx("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3.5",children:n.map((o,a)=>D.jsx("span",{className:`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal tracking-wide transition-all duration-300 select-none cursor-default ${o.featured?"border-2 border-white text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.25)] font-medium scale-105":"border border-white/20 text-[#D7E2EA]/90 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.08] hover:text-white"}`,children:o.name},a))}),D.jsx("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3.5",children:e.map((o,a)=>D.jsx("span",{className:"px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal tracking-wide border border-white/20 text-[#D7E2EA]/90 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.08] hover:text-white transition-all duration-300 select-none cursor-default",children:o.name},a))}),D.jsx("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3.5",children:t.map((o,a)=>D.jsx("span",{className:"px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal tracking-wide border border-white/20 text-[#D7E2EA]/90 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.08] hover:text-white transition-all duration-300 select-none cursor-default",children:o.name},a))})]}),D.jsx(un,{delay:.3,y:30,className:"w-full max-w-3xl space-y-5 sm:space-y-6 pt-6 border-t border-white/10",children:r.map((o,a)=>D.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6",children:[D.jsx("span",{className:"font-mono text-xs sm:text-sm text-[#D7E2EA]/80 whitespace-nowrap min-w-[220px]",children:o.name}),D.jsx("div",{className:"flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative",children:D.jsx("div",{className:"h-full bg-[#A3E635] rounded-full shadow-[0_0_8px_#A3E635]",style:{width:`${o.percent}%`,transition:"width 1.2s cubic-bezier(0.25, 1, 0.5, 1)"}})})]},a))})]})]})},OL=({achievement:n,index:e,totalCards:t,progress:r,range:o,targetScale:a,onOpenCertificate:c})=>{const u=Pe.useRef(null),f=Jp(r,o,[1,a]);return D.jsx("div",{ref:u,className:"h-[88vh] min-h-[640px] flex items-center justify-center sticky",style:{top:`calc(4.5rem + ${e*28}px)`},children:D.jsxs(di.div,{style:{scale:f,top:`${e*28}px`},className:"w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden group",children:[D.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"}),D.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-[#7621B0]/10 rounded-full blur-3xl pointer-events-none"}),D.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/20 relative z-10",children:[D.jsxs("div",{className:"flex items-start sm:items-center gap-4 sm:gap-6",children:[D.jsx("span",{style:{fontSize:"clamp(2.5rem, 5.5vw, 4.8rem)"},className:"text-[#D7E2EA] font-black leading-none tracking-tighter select-none opacity-90",children:n.number}),D.jsxs("div",{className:"flex flex-col",children:[D.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[D.jsx("span",{className:"text-xs uppercase tracking-widest text-[#BBCCD7]/80 font-medium",children:n.organization}),D.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] uppercase font-bold tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1 shadow-[0_0_12px_rgba(251,191,36,0.2)]",children:[D.jsx(Tu,{className:"w-3 h-3"}),n.badge]}),D.jsx("span",{className:"text-xs text-[#D7E2EA]/60 uppercase tracking-wider",children:n.year})]}),D.jsx("h3",{style:{fontSize:"clamp(1.2rem, 2.5vw, 2rem)"},className:"text-white font-medium uppercase tracking-tight",children:n.title})]})]}),D.jsxs("div",{className:"flex items-center gap-2 self-start sm:self-center",children:[D.jsxs("button",{onClick:()=>c(n.certificateImg,n.title),className:"px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-amber-400/60 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(251,191,36,0.15)]",children:[D.jsx(Rf,{className:"w-4 h-4"}),D.jsx("span",{children:"Inspect Certificate"})]}),n.link&&D.jsx("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:text-white transition-colors cursor-pointer",title:"View project data",children:D.jsx(Za,{className:"w-4 h-4"})})]})]}),D.jsxs("div",{className:"mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10",children:[D.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center",children:[D.jsx("p",{className:"text-sm sm:text-base text-[#D7E2EA]/85 font-light leading-relaxed mb-3",children:n.description}),D.jsx("div",{className:"space-y-1.5 mb-3",children:n.highlights.slice(0,3).map((h,m)=>D.jsxs("div",{className:"flex items-center gap-2 text-xs sm:text-sm text-[#BBCCD7]",children:[D.jsx(oS,{className:"w-3.5 h-3.5 text-amber-400 flex-shrink-0"}),D.jsx("span",{children:h})]},m))}),D.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tags.map((h,m)=>D.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-[#BBCCD7] border border-white/10",children:h},m))})]}),D.jsxs("div",{className:"lg:col-span-5 flex items-center gap-3",children:[D.jsxs("div",{onClick:()=>c(n.certificateImg,n.title),className:"flex-1 h-[180px] sm:h-[220px] md:h-[240px] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#161616] border border-amber-400/30 p-2 cursor-pointer group/cert relative shadow-lg",children:[D.jsx("img",{src:n.certificateImg,alt:`${n.title} Certificate`,className:"w-full h-full object-contain rounded-[20px] transition-transform duration-500 group-hover/cert:scale-105",loading:"lazy"}),D.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover/cert:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/cert:opacity-100 rounded-[30px]",children:D.jsxs("span",{className:"px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/40 flex items-center gap-1.5",children:[D.jsx(Rf,{className:"w-3.5 h-3.5"})," Full Resolution"]})})]}),n.secondaryImg&&D.jsxs("div",{onClick:()=>c(n.secondaryImg,`${n.title} (Supporting Credential)`),className:"hidden sm:block w-[120px] md:w-[140px] h-[180px] sm:h-[220px] md:h-[240px] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#161616] border border-white/15 p-2 cursor-pointer group/cert2 relative shadow-lg flex-shrink-0",children:[D.jsx("img",{src:n.secondaryImg,alt:`${n.title} Supporting Credential`,className:"w-full h-full object-contain rounded-[20px] transition-transform duration-500 group-hover/cert2:scale-105",loading:"lazy"}),D.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover/cert2:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/cert2:opacity-100 rounded-[30px]",children:D.jsx(Rf,{className:"w-4 h-4 text-white"})})]})]})]})]})})},kL=({onOpenCertificate:n})=>{const e=Pe.useRef(null),{scrollYProgress:t}=rS({target:e,offset:["start start","end end"]}),r=yx.length;return D.jsx("section",{id:"achievements",ref:e,className:"relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-32",children:D.jsxs("div",{className:"max-w-6xl mx-auto w-full",children:[D.jsxs(un,{delay:0,y:40,className:"text-center mb-12 sm:mb-16",children:[D.jsxs("span",{className:"text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center justify-center gap-1.5",children:[D.jsx(tm,{className:"w-4 h-4 text-amber-400"})," Verified Honors & Certifications"]}),D.jsx("h2",{style:{fontSize:"clamp(3rem, 12vw, 160px)"},className:"hero-heading font-black uppercase text-center leading-none tracking-tight select-none mt-2",children:"Achievements"})]}),D.jsx("div",{className:"relative",children:yx.map((o,a)=>{const c=1-(r-1-a)*.03,u=a*(1/r);return D.jsx(OL,{achievement:o,index:a,totalCards:r,progress:t,range:[u,1],targetScale:c,onOpenCertificate:n},o.id)})})]})})},BL=({href:n,onClick:e,className:t="",label:r="Live Project"})=>{const o=D.jsxs(D.Fragment,{children:[D.jsx("span",{children:r}),D.jsx(lC,{className:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),a=`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-300 cursor-pointer select-none group ${t}`;return n?D.jsx(di.a,{whileHover:{scale:1.03},whileTap:{scale:.97},href:n,target:"_blank",rel:"noopener noreferrer",className:a,onClick:e,children:o}):D.jsx(di.button,{whileHover:{scale:1.03},whileTap:{scale:.97},onClick:e,className:a,children:o})},zL=({project:n,onClose:e})=>n?D.jsx(qp,{children:D.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",children:[D.jsx(di.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"absolute inset-0 bg-black/85 backdrop-blur-md"}),D.jsxs(di.div,{initial:{opacity:0,scale:.9,y:30},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:30},transition:{type:"spring",damping:26,stiffness:320},className:"relative w-full max-w-3xl rounded-[36px] border-2 border-[#D7E2EA]/40 bg-[#101010] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto",children:[D.jsx("div",{className:"absolute -top-32 -right-32 w-72 h-72 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none"}),D.jsx("div",{className:"absolute -bottom-32 -left-32 w-72 h-72 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none"}),D.jsxs("div",{className:"flex items-start justify-between gap-4 pb-5 border-b border-[#D7E2EA]/15",children:[D.jsxs("div",{children:[D.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[D.jsx("span",{className:"text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold",children:n.category}),n.badge&&D.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${n.badgeType==="award"?"bg-amber-400/20 text-amber-300 border border-amber-400/40":"bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"}`,children:n.badge})]}),D.jsx("h3",{className:"text-2xl sm:text-3xl font-black uppercase text-white tracking-tight",children:n.title})]}),D.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full bg-white/5 border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] hover:bg-white/15 hover:text-white transition-colors cursor-pointer flex-shrink-0","aria-label":"Close modal",children:D.jsx(sm,{className:"w-5 h-5"})})]}),D.jsxs("div",{className:"mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3",children:[D.jsx("div",{className:"h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]",children:D.jsx("img",{src:n.col1Image1,alt:`${n.title} Preview 1`,className:"w-full h-full object-cover"})}),D.jsx("div",{className:"h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]",children:D.jsx("img",{src:n.col1Image2,alt:`${n.title} Preview 2`,className:"w-full h-full object-cover"})}),D.jsx("div",{className:"h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]",children:D.jsx("img",{src:n.col2Image,alt:`${n.title} Preview 3`,className:"w-full h-full object-cover"})})]}),D.jsxs("div",{className:"mt-6",children:[D.jsx("h4",{className:"text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-2",children:"Overview"}),D.jsx("p",{className:"text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-light",children:n.description})]}),n.highlights&&n.highlights.length>0&&D.jsxs("div",{className:"mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10",children:[D.jsxs("h4",{className:"text-xs uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-1.5",children:[D.jsx(Tu,{className:"w-3.5 h-3.5"})," Key Engineering Highlights"]}),D.jsx("ul",{className:"space-y-2",children:n.highlights.map((t,r)=>D.jsxs("li",{className:"flex items-center gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90",children:[D.jsx(oS,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),D.jsx("span",{children:t})]},r))})]}),D.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:n.tags.map((t,r)=>D.jsx("span",{className:"px-3 py-1 rounded-lg text-xs uppercase tracking-wider bg-black/50 text-[#BBCCD7] border border-white/10",children:t},r))}),D.jsxs("div",{className:"mt-8 pt-5 border-t border-[#D7E2EA]/15 flex flex-wrap items-center justify-between gap-3",children:[n.githubUrl&&D.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 border border-white/20 transition-all",children:[D.jsx(Qa,{className:"w-4 h-4"}),D.jsx("span",{children:"View Source Code"})]}),n.liveUrl&&D.jsxs("a",{href:n.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:from-[#c700b8] hover:to-[#8625c8] text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg ml-auto",children:[D.jsx("span",{children:"Launch Live App"}),D.jsx(Za,{className:"w-4 h-4"})]})]})]})]})}):null,VL=({project:n,index:e,totalCards:t,progress:r,range:o,targetScale:a,onOpenDetails:c})=>{const u=Pe.useRef(null),f=Jp(r,o,[1,a]);return D.jsx("div",{ref:u,className:"h-[88vh] min-h-[640px] flex items-center justify-center sticky",style:{top:`calc(4.5rem + ${e*28}px)`},children:D.jsxs(di.div,{style:{scale:f,top:`${e*28}px`},className:"w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden group",children:[D.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#B600A8]/5 rounded-full blur-3xl pointer-events-none"}),D.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/20 relative z-10",children:[D.jsxs("div",{className:"flex items-start sm:items-center gap-4 sm:gap-6",children:[D.jsx("span",{style:{fontSize:"clamp(2.5rem, 5.5vw, 4.8rem)"},className:"text-[#D7E2EA] font-black leading-none tracking-tighter select-none opacity-90",children:n.number}),D.jsxs("div",{className:"flex flex-col",children:[D.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[D.jsx("span",{className:"text-xs uppercase tracking-widest text-[#BBCCD7]/80 font-medium",children:n.category}),n.badge&&D.jsxs("span",{className:`px-2.5 py-0.5 rounded-full text-[11px] uppercase font-bold tracking-wider flex items-center gap-1 ${n.badgeType==="award"?"bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.2)]":"bg-emerald-400/20 text-emerald-300 border border-emerald-400/30"}`,children:[n.badgeType==="award"&&D.jsx(Tu,{className:"w-3 h-3"}),n.badge]})]}),D.jsx("h3",{style:{fontSize:"clamp(1.2rem, 2.5vw, 2rem)"},className:"text-white font-medium uppercase tracking-tight",children:n.title})]})]}),D.jsxs("div",{className:"flex items-center gap-2.5 self-start sm:self-center",children:[D.jsx("button",{onClick:()=>c(n),className:"p-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:text-white transition-colors cursor-pointer",title:"Project Details","aria-label":"View project details",children:D.jsx(hC,{className:"w-4 h-4"})}),n.githubUrl&&D.jsx("a",{href:n.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:text-white transition-colors cursor-pointer",title:"View Source on GitHub","aria-label":"View GitHub Repository",children:D.jsx(Qa,{className:"w-4 h-4"})}),D.jsx(BL,{href:n.liveUrl,label:n.badgeType==="repo"?"Explore Lab":"Live Project"})]})]}),D.jsxs("div",{className:"mt-3 sm:mt-4 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs sm:text-sm text-[#D7E2EA]/70 relative z-10",children:[D.jsx("p",{className:"line-clamp-2 max-w-3xl font-light text-[#D7E2EA]/85",children:n.description}),D.jsx("div",{className:"flex flex-wrap gap-1.5 flex-shrink-0",children:n.tags.slice(0,4).map((h,m)=>D.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-[#BBCCD7] border border-white/10",children:h},m))})]}),D.jsxs("div",{className:"mt-3 sm:mt-4 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-1 relative z-10",children:[D.jsxs("div",{className:"md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between",children:[D.jsx("div",{style:{height:"clamp(120px, 15vw, 210px)"},className:"w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#141414] border border-white/10 relative group/img",children:D.jsx("img",{src:n.col1Image1,alt:`${n.title} Render 1`,className:"w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-700 group-hover/img:scale-105",loading:"lazy",decoding:"async"})}),D.jsx("div",{style:{height:"clamp(140px, 20vw, 300px)"},className:"w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#141414] border border-white/10 relative group/img",children:D.jsx("img",{src:n.col1Image2,alt:`${n.title} Render 2`,className:"w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-700 group-hover/img:scale-105",loading:"lazy",decoding:"async"})})]}),D.jsx("div",{className:"md:col-span-7 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#141414] border border-white/10 min-h-[220px] md:min-h-full relative group/img",children:D.jsx("img",{src:n.col2Image,alt:`${n.title} Hero Render`,className:"w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-700 group-hover/img:scale-105",loading:"lazy",decoding:"async"})})]})]})})},HL=()=>{const n=Pe.useRef(null),[e,t]=Pe.useState(null),[r,o]=Pe.useState("all"),a=r==="all"?pc:r==="hardware"?pc.filter(f=>f.category.toLowerCase().includes("hardware")||f.category.toLowerCase().includes("stem")):r==="web"?pc.filter(f=>f.category.toLowerCase().includes("web")||f.category.toLowerCase().includes("os")):pc.filter(f=>f.category.toLowerCase().includes("game")),{scrollYProgress:c}=rS({target:n,offset:["start start","end end"]}),u=a.length;return D.jsxs("section",{id:"projects",ref:n,className:"relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-32",children:[D.jsxs("div",{className:"max-w-6xl mx-auto w-full",children:[D.jsxs(un,{delay:0,y:40,className:"text-center mb-6 sm:mb-8",children:[D.jsxs("span",{className:"text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center justify-center gap-1.5",children:[D.jsx(pC,{className:"w-4 h-4 text-[#B600A8]"})," Hand-Crafted Works & STEM Feats"]}),D.jsx("h2",{style:{fontSize:"clamp(3rem, 12vw, 160px)"},className:"hero-heading font-black uppercase text-center leading-none tracking-tight select-none mt-2",children:"Project"})]}),D.jsx(un,{delay:.1,y:20,className:"flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16",children:[{id:"all",label:"All Projects (6)"},{id:"hardware",label:"Robotics & 3D Hardware"},{id:"web",label:"Web Apps & OS"},{id:"games",label:"Interactive Games"}].map(f=>D.jsx("button",{onClick:()=>o(f.id),className:`px-5 py-2 rounded-full text-xs uppercase font-medium tracking-wider transition-all duration-300 cursor-pointer ${r===f.id?"bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg scale-105":"bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 hover:text-white border border-white/10"}`,children:f.label},f.id))}),D.jsx("div",{className:"relative",children:a.map((f,h)=>{const m=1-(u-1-h)*.03,v=u>1?h*(1/u):0;return D.jsx(VL,{project:f,index:h,totalCards:u,progress:c,range:[v,1],targetScale:m,onOpenDetails:t},f.id)})})]}),D.jsx(zL,{project:e,onClose:()=>t(null)})]})},GL=({onOpenContact:n})=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})},t=r=>{const o=document.getElementById(r);o&&o.scrollIntoView({behavior:"smooth"})};return D.jsx("footer",{id:"contact",className:"relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 sm:py-20 z-20",children:D.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col items-center text-center",children:[D.jsxs(un,{delay:0,y:30,className:"w-full",children:[D.jsx("span",{className:"text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7] font-semibold",children:"Have a bold project or collaboration in mind?"}),D.jsx("h2",{style:{fontSize:"clamp(2.5rem, 8vw, 6rem)"},className:"hero-heading font-black uppercase tracking-tight leading-none mt-4 mb-8 select-none",children:"Let's Create Together"}),D.jsx("div",{className:"flex justify-center mb-12",children:D.jsx(em,{onClick:n})})]}),D.jsxs("div",{className:"w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10 text-[#D7E2EA]/70 text-sm",children:[D.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 sm:gap-6",children:[D.jsxs("a",{href:Rn.github,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors flex items-center gap-1.5",children:[D.jsx(Qa,{className:"w-4 h-4"})," GitHub"]}),D.jsxs("a",{href:Rn.instagram,target:"_blank",rel:"noopener noreferrer",className:"hover:text-pink-400 transition-colors flex items-center gap-1.5",children:[D.jsx(im,{className:"w-4 h-4"})," Instagram"]}),D.jsxs("a",{href:`mailto:${Rn.email}`,className:"hover:text-amber-400 transition-colors flex items-center gap-1.5",children:[D.jsx(rm,{className:"w-4 h-4"})," ",Rn.email]}),D.jsxs("a",{href:Rn.discordUrl,target:"_blank",rel:"noopener noreferrer",className:"hover:text-indigo-400 transition-colors flex items-center gap-1.5",children:[D.jsx(aS,{className:"w-4 h-4"})," Discord: ",Rn.discord]}),D.jsx("button",{onClick:()=>t("achievements"),className:"hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-xs font-semibold",children:"Achievements"}),D.jsxs("a",{href:Rn.website,target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs",children:[D.jsx(nm,{className:"w-3.5 h-3.5"})," namishdawar.xyz ",D.jsx(Za,{className:"w-3 h-3"})]})]}),D.jsxs("div",{className:"flex items-center gap-4 flex-shrink-0",children:[D.jsxs("p",{className:"text-xs uppercase tracking-wider text-white/50",children:["© ",new Date().getFullYear()," Namish Dawar · 3D Creator"]}),D.jsx("button",{onClick:e,className:"p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer",title:"Back to top","aria-label":"Back to top",children:D.jsx(cC,{className:"w-4 h-4"})})]})]})]})})},WL=({isOpen:n,onClose:e})=>{const[t,r]=Pe.useState(!1),o=()=>{navigator.clipboard.writeText(Rn.email),r(!0),setTimeout(()=>r(!1),2e3)};return D.jsx(qp,{children:n&&D.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[D.jsx(di.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-md"}),D.jsxs(di.div,{initial:{opacity:0,scale:.92,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.92,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"relative w-full max-w-lg rounded-[36px] border-2 border-[#D7E2EA]/30 bg-[#121212] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl overflow-hidden z-10",children:[D.jsx("div",{className:"absolute -top-24 -right-24 w-60 h-60 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none"}),D.jsx("div",{className:"absolute -bottom-24 -left-24 w-60 h-60 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none"}),D.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-[#D7E2EA]/15",children:[D.jsxs("div",{children:[D.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Get In Touch"}),D.jsx("h3",{className:"text-2xl sm:text-3xl font-black uppercase text-white tracking-tight",children:"Let's Build Together"})]}),D.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full bg-white/5 border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] hover:bg-white/10 hover:text-white transition-colors cursor-pointer","aria-label":"Close modal",children:D.jsx(sm,{className:"w-5 h-5"})})]}),D.jsxs("div",{className:"mt-6 p-4 rounded-2xl bg-black/50 border border-[#D7E2EA]/20 flex items-center justify-between gap-3",children:[D.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[D.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#B600A8]/20 text-[#B600A8] flex items-center justify-center flex-shrink-0",children:D.jsx(rm,{className:"w-5 h-5"})}),D.jsxs("div",{className:"min-w-0",children:[D.jsx("p",{className:"text-xs uppercase tracking-wider text-[#D7E2EA]/60",children:"Email"}),D.jsx("p",{className:"text-sm sm:text-base font-medium truncate text-white",children:Rn.email})]})]}),D.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[D.jsxs("button",{onClick:o,className:"p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#D7E2EA] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold",title:"Copy email",children:[t?D.jsx(uC,{className:"w-4 h-4 text-green-400"}):D.jsx(dC,{className:"w-4 h-4"}),D.jsx("span",{className:"hidden sm:inline",children:t?"Copied":"Copy"})]}),D.jsx("a",{href:`mailto:${Rn.email}`,className:"p-2.5 rounded-xl bg-[#B600A8] text-white hover:bg-[#a00094] transition-colors cursor-pointer flex items-center gap-1 text-xs uppercase tracking-wider font-bold",title:"Open mail client",children:"Send"})]})]}),D.jsxs("div",{className:"mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3",children:[D.jsxs("a",{href:Rn.github,target:"_blank",rel:"noopener noreferrer",className:"p-3.5 rounded-2xl bg-black/40 border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 flex flex-col items-center justify-center gap-2 group transition-all",children:[D.jsx(Qa,{className:"w-6 h-6 text-[#D7E2EA] group-hover:text-white group-hover:scale-110 transition-all"}),D.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 group-hover:text-white",children:"GitHub"})]}),D.jsxs("a",{href:Rn.instagram,target:"_blank",rel:"noopener noreferrer",className:"p-3.5 rounded-2xl bg-black/40 border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 flex flex-col items-center justify-center gap-2 group transition-all",children:[D.jsx(im,{className:"w-6 h-6 text-[#D7E2EA] group-hover:text-pink-400 group-hover:scale-110 transition-all"}),D.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 group-hover:text-white",children:"Instagram"})]}),D.jsxs("div",{className:"p-3.5 rounded-2xl bg-black/40 border border-[#D7E2EA]/15 flex flex-col items-center justify-center gap-2 col-span-2 sm:col-span-1",children:[D.jsx(aS,{className:"w-6 h-6 text-[#D7E2EA]"}),D.jsxs("span",{className:"text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80",children:["Discord: ",Rn.discord]})]})]}),D.jsxs("div",{className:"mt-6 pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs text-[#D7E2EA]/70",children:[D.jsx("span",{children:"Official Website:"}),D.jsxs("a",{href:Rn.website,target:"_blank",rel:"noopener noreferrer",className:"text-[#BBCCD7] hover:text-white flex items-center gap-1 font-semibold underline underline-offset-4",children:["namishdawar.xyz ",D.jsx(Za,{className:"w-3.5 h-3.5"})]})]})]})]})})},XL=({imageSrc:n,title:e,onClose:t})=>n?D.jsx(qp,{children:D.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6",children:[D.jsx(di.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,className:"absolute inset-0 bg-black/90 backdrop-blur-lg cursor-pointer"}),D.jsxs(di.div,{initial:{opacity:0,scale:.92,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.92,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"relative max-w-4xl w-full rounded-3xl border border-white/20 bg-[#121212] p-4 sm:p-6 shadow-2xl z-10 flex flex-col items-center max-h-[92vh] overflow-hidden",children:[D.jsxs("div",{className:"w-full flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10",children:[D.jsxs("div",{className:"flex items-center gap-2.5",children:[D.jsx(tm,{className:"w-5 h-5 text-amber-400"}),D.jsx("span",{className:"text-sm sm:text-base font-bold uppercase tracking-wider text-white",children:e||"Certificate of Merit & Recognition"})]}),D.jsx("button",{onClick:t,className:"p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer","aria-label":"Close certificate preview",children:D.jsx(sm,{className:"w-5 h-5"})})]}),D.jsx("div",{className:"w-full flex-1 flex items-center justify-center my-3 overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-2",children:D.jsx("img",{src:n,alt:e||"Verified Certificate",className:"max-h-[68vh] w-auto object-contain rounded-lg shadow-xl"})}),D.jsxs("div",{className:"w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D7E2EA]/70",children:[D.jsx("span",{children:"Verified STEM Credential · Namish Dawar"}),D.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors",children:[D.jsx("span",{children:"Open High-Res"}),D.jsx(Za,{className:"w-3.5 h-3.5"})]})]})]})]})}):null;function jL(){const[n,e]=Pe.useState(!1),[t,r]=Pe.useState(null);return D.jsxs("div",{className:"relative w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] overflow-x-clip min-h-screen",children:[D.jsx(NL,{onOpenContact:()=>e(!0)}),D.jsx(IL,{onSelectCertificate:o=>r({src:o,title:"Verified Certificate of Merit"})}),D.jsx(UL,{onOpenContact:()=>e(!0)}),D.jsx(FL,{}),D.jsx(kL,{onOpenCertificate:(o,a)=>r({src:o,title:a})}),D.jsx(HL,{}),D.jsx(GL,{onOpenContact:()=>e(!0)}),D.jsx(WL,{isOpen:n,onClose:()=>e(!1)}),D.jsx(XL,{imageSrc:t?t.src:null,title:t==null?void 0:t.title,onClose:()=>r(null)})]})}BE.createRoot(document.getElementById("root")).render(D.jsx(LE.StrictMode,{children:D.jsx(jL,{})}));
