/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();


/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Draggable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;if(c.cursorAt){this._adjustOffsetFromHelper(c.cursorAt)}if(c.containment){this._setContainment()}this._trigger("start",b);this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();this._trigger("drag",b,c);this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c);b._clear()})}else{this._trigger("stop",c);this._clear()}return false},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs}}}));a.extend(a.ui.draggable,{version:"1.7.2",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(b,c){var e=a(this).data("draggable").options;var d=a.makeArray(a(e.stack.group)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min)});a(d).each(function(f){this.style.zIndex=e.stack.min+f});this[0].style.zIndex=e.stack.min+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Droppable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */
(function(a){a.widget("ui.droppable",{_init:function(){var c=this.options,b=c.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&a.isFunction(this.options.accept)?this.options.accept:function(e){return e.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[this.options.scope]=a.ui.ddmanager.droppables[this.options.scope]||[];a.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++){if(b[c]==this){b.splice(c,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(b,c){if(b=="accept"){this.options.accept=c&&a.isFunction(c)?c:function(e){return e.is(c)}}else{a.widget.prototype._setData.apply(this,arguments)}},_activate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(b&&this._trigger("activate",c,this.ui(b)))},_deactivate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(b&&this._trigger("deactivate",c,this.ui(b)))},_over:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",c,this.ui(b))}},_out:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",c,this.ui(b))}},_drop:function(c,d){var b=d||a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return false}var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var f=a.data(this,"droppable");if(f.options.greedy&&a.ui.intersect(b,a.extend(f,{offset:f.element.offset()}),f.options.tolerance)){e=true;return false}});if(e){return false}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",c,this.ui(b));return this.element}return false},ui:function(b){return{draggable:(b.currentItem||b.element),helper:b.helper,position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs}}});a.extend(a.ui.droppable,{version:"1.7.2",eventPrefix:"drop",defaults:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"}});a.ui.intersect=function(q,j,o){if(!j.offset){return false}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<e&&d<c&&p<n&&m<k);break;case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);break;case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);return f;break;case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,g){var b=a.ui.ddmanager.droppables[e.options.scope];var f=g?g.type:null;var h=(e.currentItem||e.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<b.length;d++){if(b[d].options.disabled||(e&&!b[d].options.accept.call(b[d].element[0],(e.currentItem||e.element)))){continue}for(var c=0;c<h.length;c++){if(h[c]==b[d].element[0]){b[d].proportions.height=0;continue droppablesLoop}}b[d].visible=b[d].element.css("display")!="none";if(!b[d].visible){continue}b[d].offset=b[d].element.offset();b[d].proportions={width:b[d].element[0].offsetWidth,height:b[d].element[0].offsetHeight};if(f=="mousedown"){b[d]._activate.call(b[d],g)}}},drop:function(b,c){var d=false;a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)){d=this._drop.call(this,c)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element[0],(b.currentItem||b.element))){this.isout=1;this.isover=0;this._deactivate.call(this,c)}});return d},drag:function(b,c){if(b.options.refreshPositions){a.ui.ddmanager.prepareOffsets(b,c)}a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var e=a.ui.intersect(b,this,this.options.tolerance);var g=!e&&this.isover==1?"isout":(e&&this.isover==0?"isover":null);if(!g){return}var f;if(this.options.greedy){var d=this.element.parents(":data(droppable):eq(0)");if(d.length){f=a.data(d[0],"droppable");f.greedyChild=(g=="isover"?1:0)}}if(f&&g=="isover"){f.isover=0;f.isout=1;f._out.call(f,c)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,c);if(f&&g=="isout"){f.isout=0;f.isover=1;f._over.call(f,c)}})}}})(jQuery);;/*
 * jQuery UI Resizable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */
(function(c){c.widget("ui.resizable",c.extend({},c.ui.mouse,{_init:function(){var e=this,j=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&c.browser.opera){this.element.css({position:"relative",top:"auto",left:"auto"})}this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=j.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var k=this.handles.split(",");this.handles={};for(var f=0;f<k.length;f++){var h=c.trim(k[f]),d="ui-resizable-"+h;var g=c('<div class="ui-resizable-handle '+d+'"></div>');if(/sw|se|ne|nw/.test(h)){g.css({zIndex:++j.zIndex})}if("se"==h){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[h]=".ui-resizable-"+h;this.element.append(g)}}this._renderAxis=function(p){p=p||this.element;for(var m in this.handles){if(this.handles[m].constructor==String){this.handles[m]=c(this.handles[m],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var n=c(this.handles[m],this.element),o=0;o=/sw|ne|nw|se|n|s/.test(m)?n.outerHeight():n.outerWidth();var l=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join("");p.css(l,o);this._proportionallyResize()}if(!c(this.handles[m]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!e.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}e.axis=i&&i[1]?i[1]:"se"}});if(j.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").hover(function(){c(this).removeClass("ui-resizable-autohide");e._handles.show()},function(){if(!e.resizing){c(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){d(this.element);var e=this.element;e.parent().append(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).end().remove()}this.originalElement.css("resize",this.originalResizeStyle);d(this.originalElement)},_mouseCapture:function(e){var f=false;for(var d in this.handles){if(c(this.handles[d])[0]==e.target){f=true}}return this.options.disabled||!!f},_mouseStart:function(f){var i=this.options,e=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};if(d.is(".ui-draggable")||(/absolute/).test(d.css("position"))){d.css({position:"absolute",top:e.top,left:e.left})}if(c.browser.opera&&(/relative/).test(d.css("position"))){d.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var j=b(this.helper.css("left")),g=b(this.helper.css("top"));if(i.containment){j+=c(i.containment).scrollLeft()||0;g+=c(i.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:j,top:g};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:j,top:g};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=(typeof i.aspectRatio=="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var h=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",h=="auto"?this.axis+"-resize":h);d.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(d){var g=this.helper,f=this.options,l={},p=this,i=this.originalMousePosition,m=this.axis;var q=(d.pageX-i.left)||0,n=(d.pageY-i.top)||0;var h=this._change[m];if(!h){return false}var k=h.apply(this,[d,q,n]),j=c.browser.msie&&c.browser.version<7,e=this.sizeDiff;if(this._aspectRatio||d.shiftKey){k=this._updateRatio(k,d)}k=this._respectSize(k,d);this._propagate("resize",d);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(k);this._trigger("resize",d,this.ui());return false},_mouseStop:function(g){this.resizing=false;var h=this.options,l=this;if(this._helper){var f=this._proportionallyResizeElements,d=f.length&&(/textarea/i).test(f[0].nodeName),e=d&&c.ui.hasScroll(f[0],"left")?0:l.sizeDiff.height,j=d?0:l.sizeDiff.width;var m={width:(l.size.width-j),height:(l.size.height-e)},i=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,k=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!h.animate){this.element.css(c.extend(m,{top:k,left:i}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!h.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",g);if(this._helper){this.helper.remove()}return false},_updateCache:function(d){var e=this.options;this.offset=this.helper.offset();if(a(d.left)){this.position.left=d.left}if(a(d.top)){this.position.top=d.top}if(a(d.height)){this.size.height=d.height}if(a(d.width)){this.size.width=d.width}},_updateRatio:function(g,f){var h=this.options,i=this.position,e=this.size,d=this.axis;if(g.height){g.width=(e.height*this.aspectRatio)}else{if(g.width){g.height=(e.width/this.aspectRatio)}}if(d=="sw"){g.left=i.left+(e.width-g.width);g.top=null}if(d=="nw"){g.top=i.top+(e.height-g.height);g.left=i.left+(e.width-g.width)}return g},_respectSize:function(k,f){var i=this.helper,h=this.options,q=this._aspectRatio||f.shiftKey,p=this.axis,s=a(k.width)&&h.maxWidth&&(h.maxWidth<k.width),l=a(k.height)&&h.maxHeight&&(h.maxHeight<k.height),g=a(k.width)&&h.minWidth&&(h.minWidth>k.width),r=a(k.height)&&h.minHeight&&(h.minHeight>k.height);if(g){k.width=h.minWidth}if(r){k.height=h.minHeight}if(s){k.width=h.maxWidth}if(l){k.height=h.maxHeight}var e=this.originalPosition.left+this.originalSize.width,n=this.position.top+this.size.height;var j=/sw|nw|w/.test(p),d=/nw|ne|n/.test(p);if(g&&j){k.left=e-h.minWidth}if(s&&j){k.left=e-h.maxWidth}if(r&&d){k.top=n-h.minHeight}if(l&&d){k.top=n-h.maxHeight}var m=!k.width&&!k.height;if(m&&!k.left&&k.top){k.top=null}else{if(m&&!k.top&&k.left){k.left=null}}return k},_proportionallyResize:function(){var j=this.options;if(!this._proportionallyResizeElements.length){return}var f=this.helper||this.element;for(var e=0;e<this._proportionallyResizeElements.length;e++){var g=this._proportionallyResizeElements[e];if(!this.borderDif){var d=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=c.map(d,function(k,m){var l=parseInt(k,10)||0,n=parseInt(h[m],10)||0;return l+n})}if(c.browser.msie&&!(!(c(f).is(":hidden")||c(f).parents(":hidden").length))){continue}g.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,h=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');var d=c.browser.msie&&c.browser.version<7,f=(d?1:0),g=(d?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,e,d){return{width:this.originalSize.width+e}},w:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{left:h.left+e,width:f.width-e}},n:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{top:h.top+d,height:f.height-d}},s:function(f,e,d){return{height:this.originalSize.height+d}},se:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},sw:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,d]))},ne:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},nw:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,d]))}},_propagate:function(e,d){c.ui.plugin.call(this,e,[d,this.ui()]);(e!="resize"&&this._trigger(e,d,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}));c.extend(c.ui.resizable,{version:"1.7.2",eventPrefix:"resize",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input,option",containment:false,delay:0,distance:1,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000}});c.ui.plugin.add("resizable","alsoResize",{start:function(e,f){var d=c(this).data("resizable"),g=d.options;_store=function(h){c(h).each(function(){c(this).data("resizable-alsoresize",{width:parseInt(c(this).width(),10),height:parseInt(c(this).height(),10),left:parseInt(c(this).css("left"),10),top:parseInt(c(this).css("top"),10)})})};if(typeof(g.alsoResize)=="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];_store(g.alsoResize)}else{c.each(g.alsoResize,function(h,i){_store(h)})}}else{_store(g.alsoResize)}},resize:function(f,h){var e=c(this).data("resizable"),i=e.options,g=e.originalSize,k=e.originalPosition;var j={height:(e.size.height-g.height)||0,width:(e.size.width-g.width)||0,top:(e.position.top-k.top)||0,left:(e.position.left-k.left)||0},d=function(l,m){c(l).each(function(){var p=c(this),q=c(this).data("resizable-alsoresize"),o={},n=m&&m.length?m:["width","height","top","left"];c.each(n||["width","height","top","left"],function(r,t){var s=(q[t]||0)+(j[t]||0);if(s&&s>=0){o[t]=s||null}});if(/relative/.test(p.css("position"))&&c.browser.opera){e._revertToRelativePosition=true;p.css({position:"absolute",top:"auto",left:"auto"})}p.css(o)})};if(typeof(i.alsoResize)=="object"&&!i.alsoResize.nodeType){c.each(i.alsoResize,function(l,m){d(l,m)})}else{d(i.alsoResize)}},stop:function(e,f){var d=c(this).data("resizable");if(d._revertToRelativePosition&&c.browser.opera){d._revertToRelativePosition=false;el.css({position:"relative"})}c(this).removeData("resizable-alsoresize-start")}});c.ui.plugin.add("resizable","animate",{stop:function(h,m){var n=c(this).data("resizable"),i=n.options;var g=n._proportionallyResizeElements,d=g.length&&(/textarea/i).test(g[0].nodeName),e=d&&c.ui.hasScroll(g[0],"left")?0:n.sizeDiff.height,k=d?0:n.sizeDiff.width;var f={width:(n.size.width-k),height:(n.size.height-e)},j=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,l=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;n.element.animate(c.extend(f,l&&j?{top:l,left:j}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})}n._updateCache(o);n._propagate("resize",h)}})}});c.ui.plugin.add("resizable","containment",{start:function(e,q){var s=c(this).data("resizable"),i=s.options,k=s.element;var f=i.containment,j=(f instanceof c)?f.get(0):(/parent/.test(f))?k.parent().get(0):f;if(!j){return}s.containerElement=c(j);if(/document/.test(f)||f==document){s.containerOffset={left:0,top:0};s.containerPosition={left:0,top:0};s.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{var m=c(j),h=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){h[p]=b(m.css("padding"+o))});s.containerOffset=m.offset();s.containerPosition=m.position();s.containerSize={height:(m.innerHeight()-h[3]),width:(m.innerWidth()-h[1])};var n=s.containerOffset,d=s.containerSize.height,l=s.containerSize.width,g=(c.ui.hasScroll(j,"left")?j.scrollWidth:l),r=(c.ui.hasScroll(j)?j.scrollHeight:d);s.parentData={element:j,left:n.left,top:n.top,width:g,height:r}}},resize:function(f,p){var s=c(this).data("resizable"),h=s.options,e=s.containerSize,n=s.containerOffset,l=s.size,m=s.position,q=s._aspectRatio||f.shiftKey,d={top:0,left:0},g=s.containerElement;if(g[0]!=document&&(/static/).test(g.css("position"))){d=n}if(m.left<(s._helper?n.left:0)){s.size.width=s.size.width+(s._helper?(s.position.left-n.left):(s.position.left-d.left));if(q){s.size.height=s.size.width/h.aspectRatio}s.position.left=h.helper?n.left:0}if(m.top<(s._helper?n.top:0)){s.size.height=s.size.height+(s._helper?(s.position.top-n.top):s.position.top);if(q){s.size.width=s.size.height*h.aspectRatio}s.position.top=s._helper?n.top:0}s.offset.left=s.parentData.left+s.position.left;s.offset.top=s.parentData.top+s.position.top;var k=Math.abs((s._helper?s.offset.left-d.left:(s.offset.left-d.left))+s.sizeDiff.width),r=Math.abs((s._helper?s.offset.top-d.top:(s.offset.top-n.top))+s.sizeDiff.height);var j=s.containerElement.get(0)==s.element.parent().get(0),i=/relative|absolute/.test(s.containerElement.css("position"));if(j&&i){k-=s.parentData.left}if(k+s.size.width>=s.parentData.width){s.size.width=s.parentData.width-k;if(q){s.size.height=s.size.width/s.aspectRatio}}if(r+s.size.height>=s.parentData.height){s.size.height=s.parentData.height-r;if(q){s.size.width=s.size.height*s.aspectRatio}}},stop:function(e,m){var p=c(this).data("resizable"),f=p.options,k=p.position,l=p.containerOffset,d=p.containerPosition,g=p.containerElement;var i=c(p.helper),q=i.offset(),n=i.outerWidth()-p.sizeDiff.width,j=i.outerHeight()-p.sizeDiff.height;if(p._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}if(p._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}}});c.ui.plugin.add("resizable","ghost",{start:function(f,g){var d=c(this).data("resizable"),h=d.options,e=d.size;d.ghost=d.originalElement.clone();d.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");d.ghost.appendTo(d.helper)},resize:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost){d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})}},stop:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost&&d.helper){d.helper.get(0).removeChild(d.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(d,l){var n=c(this).data("resizable"),g=n.options,j=n.size,h=n.originalSize,i=n.originalPosition,m=n.axis,k=g._aspectRatio||d.shiftKey;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;var f=Math.round((j.width-h.width)/(g.grid[0]||1))*(g.grid[0]||1),e=Math.round((j.height-h.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e}else{if(/^(ne)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e}else{if(/^(sw)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.left=i.left-f}else{n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e;n.position.left=i.left-f}}}}});var b=function(d){return parseInt(d,10)||0};var a=function(d){return !isNaN(parseInt(d,10))}})(jQuery);;/*
 * jQuery UI Selectable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.selectable",a.extend({},a.ui.mouse,{_init:function(){var b=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]);c.each(function(){var d=a(this);var e=d.offset();a.data(this,"selectable-item",{element:this,$element:d,left:e.left,top:e.top,right:e.left+d.outerWidth(),bottom:e.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a(document.createElement("div")).css({border:"1px dotted black"}).addClass("ui-selectable-helper")},destroy:function(){this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy()},_mouseStart:function(d){var b=this;this.opos=[d.pageX,d.pageY];if(this.options.disabled){return}var c=this.options;this.selectees=a(c.filter,this.element[0]);this._trigger("start",d);a(c.appendTo).append(this.helper);this.helper.css({"z-index":100,position:"absolute",left:d.clientX,top:d.clientY,width:0,height:0});if(c.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var e=a.data(this,"selectable-item");e.startselected=true;if(!d.metaKey){e.$element.removeClass("ui-selected");e.selected=false;e.$element.addClass("ui-unselecting");e.unselecting=true;b._trigger("unselecting",d,{unselecting:e.element})}});a(d.target).parents().andSelf().each(function(){var e=a.data(this,"selectable-item");if(e){e.$element.removeClass("ui-unselecting").addClass("ui-selecting");e.unselecting=false;e.selecting=true;e.selected=true;b._trigger("selecting",d,{selecting:e.element});return false}})},_mouseDrag:function(i){var c=this;this.dragged=true;if(this.options.disabled){return}var e=this.options;var d=this.opos[0],h=this.opos[1],b=i.pageX,g=i.pageY;if(d>b){var f=b;b=d;d=f}if(h>g){var f=g;g=h;h=f}this.helper.css({left:d,top:h,width:b-d,height:g-h});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!j||j.element==c.element[0]){return}var k=false;if(e.tolerance=="touch"){k=(!(j.left>b||j.right<d||j.top>g||j.bottom<h))}else{if(e.tolerance=="fit"){k=(j.left>d&&j.right<b&&j.top>h&&j.bottom<g)}}if(k){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",i,{selecting:j.element})}}else{if(j.selecting){if(i.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",i,{unselecting:j.element})}}if(j.selected){if(!i.metaKey&&!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",i,{unselecting:j.element})}}}});return false},_mouseStop:function(d){var b=this;this.dragged=false;var c=this.options;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;b._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;b._trigger("selected",d,{selected:e.element})});this._trigger("stop",d);this.helper.remove();return false}}));a.extend(a.ui.selectable,{version:"1.7.2",defaults:{appendTo:"body",autoRefresh:true,cancel:":input,option",delay:0,distance:0,filter:"*",tolerance:"touch"}})})(jQuery);;/*
 * jQuery UI Sortable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.sortable",a.extend({},a.ui.mouse,{_init:function(){var b=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--){this.items[b].item.removeData("sortable-item")}},_mouseCapture:function(e,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(e);var d=null,c=this,b=a(e.target).parents().each(function(){if(a.data(this,"sortable-item")==c){d=a(this);return false}});if(a.data(e.target,"sortable-item")==c){d=a(e.target)}if(!d){return false}if(this.options.handle&&!f){var g=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==e.target){g=true}});if(!g){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,b){var g=this.options,c=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;if(g.cursorAt){this._adjustOffsetFromHelper(g.cursorAt)}this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!b){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,c._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(f){this.position=this._generatePosition(f);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var g=this.options,b=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed}else{if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed}}}else{if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,f)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);if(!h){continue}if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){this._rearrange(f,e)}else{break}this._trigger("change",f,this._uiHash());break}}this._contactContainers(f);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,f)}this._trigger("sort",f,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(!c){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,c)}if(this.options.revert){var b=this;var e=b.placeholder.offset();b.reverting=true;a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){b._clear(c)})}else{this._clear(c,d)}return false},cancel:function(){var b=this;if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,b._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,b._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}return true},serialize:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};a(b).each(function(){var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(e){c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))}});return c.join("&")},toArray:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};b.each(function(){c.push(a(d.item||this).attr(d.attribute||"id")||"")});return c},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(d){var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!g){return false}return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1))},_intersectsWithSides:function(e){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(this.floating&&f){return((f=="right"&&d)||(f=="left"&&!d))}else{return b&&((b=="down"&&c)||(b=="up"&&!c))}},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;return b!=0&&(b>0?"down":"up")},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;return b!=0&&(b>0?"right":"left")},refresh:function(b){this._refreshItems(b);this.refreshPositions()},_connectWith:function(){var b=this.options;return b.connectWith.constructor==String?[b.connectWith]:b.connectWith},_getItemsAsjQuery:function(b){var l=this;var g=[];var e=[];var h=this._connectWith();if(h&&b){for(var d=h.length-1;d>=0;d--){var k=a(h[d]);for(var c=k.length-1;c>=0;c--){var f=a.data(k[c],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper"),f])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper"),this]);for(var d=e.length-1;d>=0;d--){e[d][0].each(function(){g.push(this)})}return a(g)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var b=0;b<d.length;b++){if(d[b]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(b){this.items=[];this.containers=[this];var h=this.items;var p=this;var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];var l=this._connectWith();if(l){for(var e=l.length-1;e>=0;e--){var m=a(l[e]);for(var d=m.length-1;d>=0;d--){var g=a.data(m[d],"sortable");if(g&&g!=this&&!g.options.disabled){f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);this.containers.push(g)}}}}for(var e=f.length-1;e>=0;e--){var k=f[e][1];var c=f[e][0];for(var d=0,n=c.length;d<n;d++){var o=a(c[d]);o.data("sortable-item",k);h.push({item:o,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];if(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0]){continue}var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!b){e.width=c.outerWidth();e.height=c.outerHeight()}var f=c.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}},_createPlaceholder:function(d){var b=d||this,e=b.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);e.placeholder.update(b,b.placeholder)},_contactContainers:function(d){for(var c=this.containers.length-1;c>=0;c--){if(this._intersectsWith(this.containers[c].containerCache)){if(!this.containers[c].containerCache.over){if(this.currentContainer!=this.containers[c]){var h=10000;var g=null;var e=this.positionAbs[this.containers[c].floating?"left":"top"];for(var b=this.items.length-1;b>=0;b--){if(!a.ui.contains(this.containers[c].element[0],this.items[b].item[0])){continue}var f=this.items[b][this.containers[c].floating?"left":"top"];if(Math.abs(f-e)<h){h=Math.abs(f-e);g=this.items[b]}}if(!g&&!this.options.dropOnEmpty){continue}this.currentContainer=this.containers[c];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[c].element,true);this._trigger("change",d,this._uiHash());this.containers[c]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder)}this.containers[c]._trigger("over",d,this._uiHash(this));this.containers[c].containerCache.over=1}}else{if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",d,this._uiHash(this));this.containers[c].containerCache.over=0}}}},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);if(!b.parents("body").length){a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])}if(b[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(b[0].style.width==""||d.forceHelperSize){b.width(this.currentItem.width())}if(b[0].style.height==""||d.forceHelperSize){b.height(this.currentItem.height())}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_rearrange:function(g,f,c,e){c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,b=this.counter;window.setTimeout(function(){if(b==d.counter){d.refreshPositions(!e)}},0)},_clear:function(d,e){this.reverting=false;var f=[],b=this;if(!this._noFinalSort&&this.currentItem[0].parentNode){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())})}for(var c=this.containers.length-1;c>=0;c--){if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.containers[c]));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.containers[c]))}}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var b=c||this;return{helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null}}}));a.extend(a.ui.sortable,{getter:"serialize toArray",version:"1.7.2",eventPrefix:"sort",defaults:{appendTo:"parent",axis:false,cancel:":input,option",connectWith:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000}})})(jQuery);;/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(d){d.effects={version:"1.7.2",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Explode 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.explode=function(b){return this.queue(function(){var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;var h=a(this).show().css("visibility","hidden");var l=h.offset();l.top-=parseInt(h.css("marginTop"),10)||0;l.left-=parseInt(h.css("marginLeft"),10)||0;var g=h.outerWidth(true);var c=h.outerHeight(true);for(var f=0;f<k;f++){for(var d=0;d<e;d++){h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500)}}setTimeout(function(){b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();if(b.callback){b.callback.apply(h[0])}h.dequeue();a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*
 * jQuery UI Effects Fold 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.fold=function(b){return this.queue(function(){var e=a(this),k=["position","top","left"];var h=a.effects.setMode(e,b.options.mode||"hide");var o=b.options.size||15;var n=!(!b.options.horizFirst);var g=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(e,k);e.show();var d=a.effects.createWrapper(e).css({overflow:"hidden"});var i=((h=="show")!=n);var f=i?["width","height"]:["height","width"];var c=i?[d.width(),d.height()]:[d.height(),d.width()];var j=/([0-9]+)%/.exec(o);if(j){o=parseInt(j[1],10)/100*c[h=="hide"?0:1]}if(h=="show"){d.css(n?{height:0,width:o}:{height:o,width:0})}var m={},l={};m[f[0]]=h=="show"?c[0]:o;l[f[1]]=h=="show"?c[1]:0;d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){if(h=="hide"){e.hide()}a.effects.restore(e,k);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this);var g=a.effects.setMode(d,b.options.mode||"show");var f=b.options.times||5;var e=b.duration?b.duration/2:a.fx.speeds._default/2;if(g=="hide"){f--}if(d.is(":hidden")){d.css("opacity",0);d.show();d.animate({opacity:1},e,b.options.easing);f=f-2}for(var c=0;c<f;c++){d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing)}if(g=="hide"){d.animate({opacity:0},e,b.options.easing,function(){d.hide();if(b.callback){b.callback.apply(this,arguments)}})}else{d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){if(b.callback){b.callback.apply(this,arguments)}})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Scale 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.puff=function(b){return this.queue(function(){var f=a(this);var c=a.extend(true,{},b.options);var h=a.effects.setMode(f,b.options.mode||"hide");var g=parseInt(b.options.percent,10)||150;c.fade=true;var e={height:f.height(),width:f.width()};var d=g/100;f.from=(h=="hide")?e:{height:e.height*d,width:e.width*d};c.from=f.from;c.percent=(h=="hide")?g:100;c.mode=h;f.effect("scale",c,b.duration,b.callback);f.dequeue()})};a.effects.scale=function(b){return this.queue(function(){var g=a(this);var d=a.extend(true,{},b.options);var j=a.effects.setMode(g,b.options.mode||"effect");var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));var i=b.options.direction||"both";var c=b.options.origin;if(j!="effect"){d.origin=c||["middle","center"];d.restore=true}var f={height:g.height(),width:g.width()};g.from=b.options.from||(j=="show"?{height:0,width:0}:f);var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};g.to={height:f.height*e.y,width:f.width*e.x};if(b.options.fade){if(j=="show"){g.from.opacity=0;g.to.opacity=1}if(j=="hide"){g.from.opacity=1;g.to.opacity=0}}d.from=g.from;d.to=g.to;d.mode=j;g.effect("size",d,b.duration,b.callback);g.dequeue()})};a.effects.size=function(b){return this.queue(function(){var c=a(this),n=["position","top","left","width","height","overflow","opacity"];var m=["position","top","left","overflow","opacity"];var j=["width","height","overflow"];var p=["fontSize"];var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var g=a.effects.setMode(c,b.options.mode||"effect");var i=b.options.restore||false;var e=b.options.scale||"both";var o=b.options.origin;var d={height:c.height(),width:c.width()};c.from=b.options.from||d;c.to=b.options.to||d;if(o){var h=a.effects.getBaseline(o,d);c.from.top=(d.height-c.from.height)*h.y;c.from.left=(d.width-c.from.width)*h.x;c.to.top=(d.height-c.to.height)*h.y;c.to.left=(d.width-c.to.width)*h.x}var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};if(e=="box"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(k);c.from=a.effects.setTransition(c,k,l.from.y,c.from);c.to=a.effects.setTransition(c,k,l.to.y,c.to)}if(l.from.x!=l.to.x){n=n.concat(f);c.from=a.effects.setTransition(c,f,l.from.x,c.from);c.to=a.effects.setTransition(c,f,l.to.x,c.to)}}if(e=="content"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(p);c.from=a.effects.setTransition(c,p,l.from.y,c.from);c.to=a.effects.setTransition(c,p,l.to.y,c.to)}}a.effects.save(c,i?n:m);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(e=="content"||e=="both"){k=k.concat(["marginTop","marginBottom"]).concat(p);f=f.concat(["marginLeft","marginRight"]);j=n.concat(k).concat(f);c.find("*[width]").each(function(){child=a(this);if(i){a.effects.save(child,j)}var q={height:child.height(),width:child.width()};child.from={height:q.height*l.from.y,width:q.width*l.from.x};child.to={height:q.height*l.to.y,width:q.width*l.to.x};if(l.from.y!=l.to.y){child.from=a.effects.setTransition(child,k,l.from.y,child.from);child.to=a.effects.setTransition(child,k,l.to.y,child.to)}if(l.from.x!=l.to.x){child.from=a.effects.setTransition(child,f,l.from.x,child.from);child.to=a.effects.setTransition(child,f,l.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){if(i){a.effects.restore(child,j)}})})}c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(g=="hide"){c.hide()}a.effects.restore(c,i?n:m);a.effects.removeWrapper(c);if(b.callback){b.callback.apply(this,arguments)}c.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Transfer 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.transfer=function(b){return this.queue(function(){var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){c.remove();(b.callback&&b.callback.apply(f[0],arguments));f.dequeue()})})}})(jQuery);;

/*
 * jQuery UI Widget 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b){var a=b.fn.remove;b.fn.remove=function(c,d){return this.each(function(){if(!d){if(!c||b.filter(c,[this]).length){b("*",this).add(this).each(function(){b(this).triggerHandler("remove")})}}return a.call(b(this),c,d)})};b.widget=function(d,f,c){var e=d.split(".")[0],h;d=d.split(".")[1];h=e+"-"+d;if(!c){c=f;f=b.Widget}b.expr[":"][h]=function(i){return !!b.data(i,d)};b[e]=b[e]||{};b[e][d]=function(i,j){if(arguments.length){this._createWidget(i,j)}};var g=new f();g.options=b.extend({},g.options);b[e][d].prototype=b.extend(true,g,{namespace:e,widgetName:d,widgetEventPrefix:b[e][d].prototype.widgetEventPrefix||d,widgetBaseClass:h},c);b.widget.bridge(d,b[e][d])};b.widget.bridge=function(d,c){b.fn[d]=function(g){var e=typeof g==="string",f=Array.prototype.slice.call(arguments,1),h=this;g=!e&&f.length?b.extend.apply(null,[true,g].concat(f)):g;if(e&&g.substring(0,1)==="_"){return h}if(e){this.each(function(){var i=b.data(this,d),j=i&&b.isFunction(i[g])?i[g].apply(i,f):i;if(j!==i&&j!==undefined){h=j;return false}})}else{this.each(function(){var i=b.data(this,d);if(i){if(g){i.option(g)}i._init()}else{b.data(this,d,new c(g,this))}})}return h}};b.Widget=function(c,d){if(arguments.length){this._createWidget(c,d)}};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,e){this.element=b(e).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(e)[this.widgetName],d);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled")},widget:function(){return this.element},option:function(e,f){var d=e,c=this;if(arguments.length===0){return b.extend({},c.options)}if(typeof e==="string"){if(f===undefined){return this.options[e]}d={};d[e]=f}b.each(d,function(g,h){c._setOption(g,h)});return c},_setOption:function(c,d){this.options[c]=d;if(c==="disabled"){this.widget()[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,e,f){var h=this.options[d];e=b.Event(e);e.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();f=f||{};if(e.originalEvent){for(var c=b.event.props.length,g;c;){g=b.event.props[--c];e[g]=e.originalEvent[g]}}this.element.trigger(e,f);return !(b.isFunction(h)&&h.call(this.element[0],e,f)===false||e.isDefaultPrevented())}}})(jQuery);;/*!
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
/*
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(c){return b._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(b._preventClickEvent){b._preventClickEvent=false;c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=d.originalEvent||{};if(d.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(d));this._mouseDownEvent=d;var c=this,e=(d.which==1),b=(typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false);if(!e||b||!this._mouseCapture(d)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(d)!==false);if(!this._mouseStarted){d.preventDefault();return true}}this._mouseMoveDelegate=function(f){return c._mouseMove(f)};this._mouseUpDelegate=function(f){return c._mouseUp(f)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(a.browser.safari||d.preventDefault());d.originalEvent.mouseHandled=true;return true},_mouseMove:function(b){if(a.browser.msie&&!b.button){return this._mouseUp(b)}if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,b)!==false);(this._mouseStarted?this._mouseDrag(b):this._mouseUp(b))}return !this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(b.target==this._mouseDownEvent.target);this._mouseStop(b)}return false},_mouseDistanceMet:function(b){return(Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance)},_mouseDelayMet:function(b){return this.mouseDelayMet},_mouseStart:function(b){},_mouseDrag:function(b){},_mouseStop:function(b){},_mouseCapture:function(b){return true}})})(jQuery);;/*
 * jQuery UI Slider 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(b){var a=5;b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var c=this,d=this.options;this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");if(d.disabled){this.element.addClass("ui-slider-disabled ui-disabled")}this.range=b([]);if(d.range){if(d.range===true){this.range=b("<div></div>");if(!d.values){d.values=[this._valueMin(),this._valueMin()]}if(d.values.length&&d.values.length!=2){d.values=[d.values[0],d.values[0]]}}else{this.range=b("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(d.range=="min"||d.range=="max"){this.range.addClass("ui-slider-range-"+d.range)}this.range.addClass("ui-widget-header")}if(b(".ui-slider-handle",this.element).length==0){b('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(d.values&&d.values.length){while(b(".ui-slider-handle",this.element).length<d.values.length){b('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).hover(function(){if(!d.disabled){b(this).addClass("ui-state-hover")}},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(!d.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}else{b(this).blur()}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(e){b(this).data("index.ui-slider-handle",e)});this.handles.keydown(function(j){var g=true;var f=b(this).data("index.ui-slider-handle");if(c.options.disabled){return}switch(j.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:g=false;if(!c._keySliding){c._keySliding=true;b(this).addClass("ui-state-active");c._start(j,f)}break}var h,e,i=c._step();if(c.options.values&&c.options.values.length){h=e=c.values(f)}else{h=e=c.value()}switch(j.keyCode){case b.ui.keyCode.HOME:e=c._valueMin();break;case b.ui.keyCode.END:e=c._valueMax();break;case b.ui.keyCode.PAGE_UP:e=h+((c._valueMax()-c._valueMin())/a);break;case b.ui.keyCode.PAGE_DOWN:e=h-((c._valueMax()-c._valueMin())/a);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(h==c._valueMax()){return}e=h+i;break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(h==c._valueMin()){return}e=h-i;break}c._slide(j,f,e);return g}).keyup(function(f){var e=b(this).data("index.ui-slider-handle");if(c._keySliding){c._keySliding=false;c._stop(f,e);c._change(f,e);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(e){var f=this.options;if(f.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var i={x:e.pageX,y:e.pageY};var k=this._normValueFromMouse(i);var d=this._valueMax()-this._valueMin()+1,g;var l=this,j;this.handles.each(function(m){var n=Math.abs(k-l.values(m));if(d>n){d=n;g=b(this);j=m}});if(f.range==true&&this.values(1)==f.min){g=b(this.handles[++j])}this._start(e,j);this._mouseSliding=true;l._handleIndex=j;g.addClass("ui-state-active").focus();var h=g.offset();var c=!b(e.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=c?{left:0,top:0}:{left:e.pageX-h.left-(g.width()/2),top:e.pageY-h.top-(g.height()/2)-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};k=this._normValueFromMouse(i);this._slide(e,j,k);this._animateOff=true;return true},_mouseStart:function(c){return true},_mouseDrag:function(e){var c={x:e.pageX,y:e.pageY};var d=this._normValueFromMouse(c);this._slide(e,this._handleIndex,d);return false},_mouseStop:function(c){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(c,this._handleIndex);this._change(c,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var d,i;if("horizontal"==this.orientation){d=this.elementSize.width;i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var g=(i/d);if(g>1){g=1}if(g<0){g=0}if("vertical"==this.orientation){g=1-g}var f=this._valueMax()-this._valueMin(),j=g*f,c=j%this.options.step,h=this._valueMin()+j-c;if(c>(this.options.step/2)){h+=this.options.step}return parseFloat(h.toFixed(5))},_start:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("start",e,c)},_slide:function(g,f,e){var h=this.handles[f];if(this.options.values&&this.options.values.length){var c=this.values(f?0:1);if((this.options.values.length==2&&this.options.range===true)&&((f==0&&e>c)||(f==1&&e<c))){e=c}if(e!=this.values(f)){var d=this.values();d[f]=e;var i=this._trigger("slide",g,{handle:this.handles[f],value:e,values:d});var c=this.values(f?0:1);if(i!==false){this.values(f,e,true)}}}else{if(e!=this.value()){var i=this._trigger("slide",g,{handle:this.handles[f],value:e});if(i!==false){this.value(e)}}}},_stop:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("stop",e,c)},_change:function(e,d){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("change",e,c)}},value:function(c){if(arguments.length){this.options.value=this._trimValue(c);this._refreshValue();this._change(null,0)}return this._value()},values:function(e,h){if(arguments.length>1){this.options.values[e]=this._trimValue(h);this._refreshValue();this._change(null,e)}if(arguments.length){if(b.isArray(arguments[0])){var g=this.options.values,d=arguments[0];for(var f=0,c=g.length;f<c;f++){g[f]=this._trimValue(d[f]);this._change(null,f)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)}else{return this.value()}}}else{return this._values()}},_setOption:function(d,e){var c,f=0;if(jQuery.isArray(this.options.values)){f=this.options.values.length}b.Widget.prototype._setOption.apply(this,arguments);switch(d){case"disabled":if(e){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c++){this._change(null,c)}this._animateOff=false;break}},_step:function(){var c=this.options.step;return c},_value:function(){var c=this.options.value;c=this._trimValue(c);return c},_values:function(d){if(arguments.length){var g=this.options.values[d];g=this._trimValue(g);return g}else{var f=this.options.values.slice();for(var e=0,c=f.length;e<c;e++){f[e]=this._trimValue(f[e])}return f}},_trimValue:function(c){if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c},_valueMin:function(){var c=this.options.min;return c},_valueMax:function(){var c=this.options.max;return c},_refreshValue:function(){var g=this.options.range,e=this.options,m=this;var d=(!this._animateOff)?e.animate:false;if(this.options.values&&this.options.values.length){var j,i;this.handles.each(function(q,o){var p=(m.values(q)-m._valueMin())/(m._valueMax()-m._valueMin())*100;var n={};n[m.orientation=="horizontal"?"left":"bottom"]=p+"%";b(this).stop(1,1)[d?"animate":"css"](n,e.animate);if(m.options.range===true){if(m.orientation=="horizontal"){(q==0)&&m.range.stop(1,1)[d?"animate":"css"]({left:p+"%"},e.animate);(q==1)&&m.range[d?"animate":"css"]({width:(p-lastValPercent)+"%"},{queue:false,duration:e.animate})}else{(q==0)&&m.range.stop(1,1)[d?"animate":"css"]({bottom:(p)+"%"},e.animate);(q==1)&&m.range[d?"animate":"css"]({height:(p-lastValPercent)+"%"},{queue:false,duration:e.animate})}}lastValPercent=p})}else{var k=this.value(),h=this._valueMin(),l=this._valueMax(),f=l!=h?(k-h)/(l-h)*100:0;var c={};c[m.orientation=="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[d?"animate":"css"](c,e.animate);(g=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[d?"animate":"css"]({width:f+"%"},e.animate);(g=="max")&&(this.orientation=="horizontal")&&this.range[d?"animate":"css"]({width:(100-f)+"%"},{queue:false,duration:e.animate});(g=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[d?"animate":"css"]({height:f+"%"},e.animate);(g=="max")&&(this.orientation=="vertical")&&this.range[d?"animate":"css"]({height:(100-f)+"%"},{queue:false,duration:e.animate})}}});b.extend(b.ui.slider,{version:"1.8"})})(jQuery);;

/*
 * jQuery Form Plugin
 * version: 2.33 (22-SEP-2009)
 * @requires jQuery v1.2.6 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function() {
			$(this).ajaxSubmit({
				target: '#output'
			});
			return false; // <-- important!
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function')
		options = { success: options };

	var url = $.trim(this.attr('action'));
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
   	}
   	url = url || window.location.href || '';

	options = $.extend({
		url:  url,
		type: this.attr('method') || 'GET'
	}, options || {});

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (var n in options.data) {
		  if(options.data[n] instanceof Array) {
			for (var k in options.data[n])
			  a.push( { name: n, value: options.data[n][k] } );
		  }
		  else
			 a.push( { name: n, value: options.data[n] } );
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else
		options.data = q; // data is the query string for 'post'

	var $form = this, callbacks = [];
	if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
	if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			$(options.target).html(data).each(oldSuccess, arguments);
		});
	}
	else if (options.success)
		callbacks.push(options.success);

	options.success = function(data, status) {
		for (var i=0, max=callbacks.length; i < max; i++)
			callbacks[i].apply(options, [data, status, $form]);
	};

	// are there files to upload?
	var files = $('input:file', this).fieldValue();
	var found = false;
	for (var j=0; j < files.length; j++)
		if (files[j])
			found = true;

	var multipart = false;
//	var mp = 'multipart/form-data';
//	multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
   if (options.iframe || found || multipart) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive)
		   $.get(options.closeKeepAlive, fileUpload);
	   else
		   fileUpload();
	   }
   else
	   $.ajax(options);

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit]', form).length) {
			alert('Error: Form elements must not be named "submit".');
			return;
		}

		var opts = $.extend({}, $.ajaxSettings, options);
		var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

		var id = 'jqFormIO' + (new Date().getTime());
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="about:blank" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src','about:blank'); // abort op in progress
			}
		};

		var g = opts.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) $.event.trigger("ajaxStart");
		if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && $.active--;
			return;
		}
		if (xhr.aborted)
			return;

		var cbInvoked = 0;
		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				options.extraData = options.extraData || {};
				options.extraData[n] = sub.value;
				if (sub.type == "image") {
					options.extraData[name+'.x'] = form.clk_x;
					options.extraData[name+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		setTimeout(function() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);

			// ie borks in some cases when setting encoding
			if (! options.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (opts.timeout)
				setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (options.extraData)
					for (var n in options.extraData)
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
								.appendTo(form)[0]);

				// add iframe to doc and submit the form
				$io.appendTo('body');
				io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				t ? form.setAttribute('target', t) : $form.removeAttr('target');
				$(extraInputs).remove();
			}
		}, 10);

		var domCheckCount = 50;

		function cb() {
			if (cbInvoked++) return;

			io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) throw 'timeout';
				// extract the server response from the iframe
				var data, doc;

				doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
				
				var isXml = opts.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && (doc.body == null || doc.body.innerHTML == '')) {
				 	if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						cbInvoked = 0;
						setTimeout(cb, 100);
						return;
					}
					log('Could not access iframe DOM after 50 tries.');
					return;
				}

				xhr.responseText = doc.body ? doc.body.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': opts.dataType};
					return headers[header];
				};

				if (opts.dataType == 'json' || opts.dataType == 'script') {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta)
						xhr.responseText = ta.value;
					else {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						if (pre)
							xhr.responseText = pre.innerHTML;
					}			  
				}
				else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				data = $.httpData(xhr, opts.dataType);
			}
			catch(e){
				ok = false;
				$.handleError(opts, xhr, 'error', e);
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				opts.success(data, 'success');
				if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
			}
			if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
			if (g && ! --$.active) $.event.trigger("ajaxStop");
			if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		};

		function toXml(s, doc) {
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
		};
	};
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	return this.ajaxFormUnbind().bind('submit.form-plugin', function() {
		$(this).ajaxSubmit(options);
		return false;
	}).bind('click.form-plugin', function(e) {
		var $el = $(e.target);
		if (!($el.is(":submit,input:image"))) {
			return;
		}
		var form = this;
		form.clk = e.target;
		if (e.target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - e.target.offsetLeft;
				form.clk_y = e.pageY - e.target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 10);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length == 0) return a;

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) return a;
	for(var i=0, max=els.length; i < max; i++) {
		var el = els[i];
		var n = el.name;
		if (!n) continue;

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		var v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(var j=0, jmax=v.length; j < jmax; j++)
				a.push({name: n, value: v[j]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: n, value: v});
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0], n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) return;
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++)
				a.push({name: n, value: v[i]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: this.name, value: v});
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
			continue;
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (typeof successful == 'undefined') successful = true;

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1))
			return null;

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) return null;
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				if (one) return v;
				a.push(v);
			}
		}
		return a;
	}
	return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea')
			this.value = '';
		else if (t == 'checkbox' || t == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
			this.reset();
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b == undefined) b = true;
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select == undefined) select = true;
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio')
			this.checked = select;
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
		window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Tested with jQuery 1.2.6. On FF 2/3, IE 6/7, Opera 9.2/5 and Safari 3. on Windows.
 *
 * @author Ariel Flesler
 * @version 1.4
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'y',
		duration:1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window).scrollable();
	};

	// Hack, hack, hack... stay away!
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn.scrollable = function(){
		return this.map(function(){
			// Just store it, we might need it
			var win = this.parentWindow || this.defaultView,
				// If it's a document, get its iframe or the window if it's THE document
				elem = this.nodeName == '#document' ? win.frameElement || win : this,
				// Get the corresponding document
				doc = elem.contentDocument || (elem.contentWindow || elem).document,
				isWin = elem.setInterval;

			return elem.nodeName == 'IFRAME' || isWin && $.browser.safari ? doc.body
				: isWin ? doc.documentElement
				: this;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this.scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(px)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					Dim = axis == 'x' ? 'Width' : 'Height',
					dim = Dim.toLowerCase();

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[dim]() * settings.over[pos];
				}else
					attr[key] = targ[pos];

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max(Dim) );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});			
			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};
			function max( Dim ){
				var attr ='scroll'+Dim,
					doc = elem.ownerDocument;
				
				return win
						? Math.max( doc.documentElement[attr], doc.body[attr]  )
						: elem[attr];
			};
		}).end();
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );