import{r as Ne,a as K,I as ce,j as Pe,b as Zt}from"./index-7b6fa141.js";var Ie={},Qt={get exports(){return Ie},set exports(e){Ie=e}},P={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=Symbol.for("react.element"),ht=Symbol.for("react.portal"),je=Symbol.for("react.fragment"),Me=Symbol.for("react.strict_mode"),De=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),Fe=Symbol.for("react.context"),Jt=Symbol.for("react.server_context"),Le=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),er=Symbol.for("react.offscreen"),Mt;Mt=Symbol.for("react.module.reference");function Z(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case dt:switch(e=e.type,e){case je:case De:case Me:case Be:case qe:return e;default:switch(e=e&&e.$$typeof,e){case Jt:case Fe:case Le:case He:case Ge:case ze:return e;default:return r}}case ht:return r}}}P.ContextConsumer=Fe;P.ContextProvider=ze;P.Element=dt;P.ForwardRef=Le;P.Fragment=je;P.Lazy=He;P.Memo=Ge;P.Portal=ht;P.Profiler=De;P.StrictMode=Me;P.Suspense=Be;P.SuspenseList=qe;P.isAsyncMode=function(){return!1};P.isConcurrentMode=function(){return!1};P.isContextConsumer=function(e){return Z(e)===Fe};P.isContextProvider=function(e){return Z(e)===ze};P.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dt};P.isForwardRef=function(e){return Z(e)===Le};P.isFragment=function(e){return Z(e)===je};P.isLazy=function(e){return Z(e)===He};P.isMemo=function(e){return Z(e)===Ge};P.isPortal=function(e){return Z(e)===ht};P.isProfiler=function(e){return Z(e)===De};P.isStrictMode=function(e){return Z(e)===Me};P.isSuspense=function(e){return Z(e)===Be};P.isSuspenseList=function(e){return Z(e)===qe};P.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===je||e===De||e===Me||e===Be||e===qe||e===er||typeof e=="object"&&e!==null&&(e.$$typeof===He||e.$$typeof===Ge||e.$$typeof===ze||e.$$typeof===Fe||e.$$typeof===Le||e.$$typeof===Mt||e.getModuleId!==void 0)};P.typeOf=Z;(function(e){e.exports=P})(Qt);function tr(e){function r(d,u,f,g,o){for(var C=0,i=0,T=0,x=0,E,y,L=0,Y=0,w,G=w=E=0,$=0,B=0,_e=0,q=0,ke=f.length,ve=ke-1,ee,m="",j="",tt="",rt="",ie;$<ke;){if(y=f.charCodeAt($),$===ve&&i+x+T+C!==0&&(i!==0&&(y=i===47?10:47),x=T=C=0,ke++,ve++),i+x+T+C===0){if($===ve&&(0<B&&(m=m.replace(M,"")),0<m.trim().length)){switch(y){case 32:case 9:case 59:case 13:case 10:break;default:m+=f.charAt($)}y=59}switch(y){case 123:for(m=m.trim(),E=m.charCodeAt(0),w=1,q=++$;$<ke;){switch(y=f.charCodeAt($)){case 123:w++;break;case 125:w--;break;case 47:switch(y=f.charCodeAt($+1)){case 42:case 47:e:{for(G=$+1;G<ve;++G)switch(f.charCodeAt(G)){case 47:if(y===42&&f.charCodeAt(G-1)===42&&$+2!==G){$=G+1;break e}break;case 10:if(y===47){$=G+1;break e}}$=G}}break;case 91:y++;case 40:y++;case 34:case 39:for(;$++<ve&&f.charCodeAt($)!==y;);}if(w===0)break;$++}switch(w=f.substring(q,$),E===0&&(E=(m=m.replace(S,"").trim()).charCodeAt(0)),E){case 64:switch(0<B&&(m=m.replace(M,"")),y=m.charCodeAt(1),y){case 100:case 109:case 115:case 45:B=u;break;default:B=me}if(w=r(u,B,w,y,o+1),q=w.length,0<X&&(B=t(me,m,_e),ie=l(3,w,B,u,Q,U,q,y,o,g),m=B.join(""),ie!==void 0&&(q=(w=ie.trim()).length)===0&&(y=0,w="")),0<q)switch(y){case 115:m=m.replace(oe,c);case 100:case 109:case 45:w=m+"{"+w+"}";break;case 107:m=m.replace(b,"$1 $2"),w=m+"{"+w+"}",w=H===1||H===2&&s("@"+w,3)?"@-webkit-"+w+"@"+w:"@"+w;break;default:w=m+w,g===112&&(w=(j+=w,""))}else w="";break;default:w=r(u,t(u,m,_e),w,g,o+1)}tt+=w,w=_e=B=G=E=0,m="",y=f.charCodeAt(++$);break;case 125:case 59:if(m=(0<B?m.replace(M,""):m).trim(),1<(q=m.length))switch(G===0&&(E=m.charCodeAt(0),E===45||96<E&&123>E)&&(q=(m=m.replace(" ",":")).length),0<X&&(ie=l(1,m,u,d,Q,U,j.length,g,o,g))!==void 0&&(q=(m=ie.trim()).length)===0&&(m="\0\0"),E=m.charCodeAt(0),y=m.charCodeAt(1),E){case 0:break;case 64:if(y===105||y===99){rt+=m+f.charAt($);break}default:m.charCodeAt(q-1)!==58&&(j+=a(m,E,y,m.charCodeAt(2)))}_e=B=G=E=0,m="",y=f.charCodeAt(++$)}}switch(y){case 13:case 10:i===47?i=0:1+E===0&&g!==107&&0<m.length&&(B=1,m+="\0"),0<X*fe&&l(0,m,u,d,Q,U,j.length,g,o,g),U=1,Q++;break;case 59:case 125:if(i+x+T+C===0){U++;break}default:switch(U++,ee=f.charAt($),y){case 9:case 32:if(x+C+i===0)switch(L){case 44:case 58:case 9:case 32:ee="";break;default:y!==32&&(ee=" ")}break;case 0:ee="\\0";break;case 12:ee="\\f";break;case 11:ee="\\v";break;case 38:x+i+C===0&&(B=_e=1,ee="\f"+ee);break;case 108:if(x+i+C+re===0&&0<G)switch($-G){case 2:L===112&&f.charCodeAt($-3)===58&&(re=L);case 8:Y===111&&(re=Y)}break;case 58:x+i+C===0&&(G=$);break;case 44:i+T+x+C===0&&(B=1,ee+="\r");break;case 34:case 39:i===0&&(x=x===y?0:x===0?y:x);break;case 91:x+i+T===0&&C++;break;case 93:x+i+T===0&&C--;break;case 41:x+i+C===0&&T--;break;case 40:if(x+i+C===0){if(E===0)switch(2*L+3*Y){case 533:break;default:E=1}T++}break;case 64:i+T+x+C+G+w===0&&(w=1);break;case 42:case 47:if(!(0<x+C+T))switch(i){case 0:switch(2*y+3*f.charCodeAt($+1)){case 235:i=47;break;case 220:q=$,i=42}break;case 42:y===47&&L===42&&q+2!==$&&(f.charCodeAt(q+2)===33&&(j+=f.substring(q,$+1)),ee="",i=0)}}i===0&&(m+=ee)}Y=L,L=y,$++}if(q=j.length,0<q){if(B=u,0<X&&(ie=l(2,j,B,d,Q,U,q,g,o,g),ie!==void 0&&(j=ie).length===0))return rt+j+tt;if(j=B.join(",")+"{"+j+"}",H*re!==0){switch(H!==2||s(j,2)||(re=0),re){case 111:j=j.replace(O,":-moz-$1")+j;break;case 112:j=j.replace(D,"::-webkit-input-$1")+j.replace(D,"::-moz-$1")+j.replace(D,":-ms-input-$1")+j}re=0}}return rt+j+tt}function t(d,u,f){var g=u.trim().split(v);u=g;var o=g.length,C=d.length;switch(C){case 0:case 1:var i=0;for(d=C===0?"":d[0]+" ";i<o;++i)u[i]=n(d,u[i],f).trim();break;default:var T=i=0;for(u=[];i<o;++i)for(var x=0;x<C;++x)u[T++]=n(d[x]+" ",g[i],f).trim()}return u}function n(d,u,f){var g=u.charCodeAt(0);switch(33>g&&(g=(u=u.trim()).charCodeAt(0)),g){case 38:return u.replace(R,"$1"+d.trim());case 58:return d.trim()+u.replace(R,"$1"+d.trim());default:if(0<1*f&&0<u.indexOf("\f"))return u.replace(R,(d.charCodeAt(0)===58?"":"$1")+d.trim())}return d+u}function a(d,u,f,g){var o=d+";",C=2*u+3*f+4*g;if(C===944){d=o.indexOf(":",9)+1;var i=o.substring(d,o.length-1).trim();return i=o.substring(0,d).trim()+i+";",H===1||H===2&&s(i,1)?"-webkit-"+i+i:i}if(H===0||H===2&&!s(o,1))return o;switch(C){case 1015:return o.charCodeAt(10)===97?"-webkit-"+o+o:o;case 951:return o.charCodeAt(3)===116?"-webkit-"+o+o:o;case 963:return o.charCodeAt(5)===110?"-webkit-"+o+o:o;case 1009:if(o.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(o.charCodeAt(8)===45)return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(ue,"$1-webkit-$2")+o;break;case 932:if(o.charCodeAt(4)===45)switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(o.charCodeAt(8)!==99)break;return i=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+i+"-webkit-"+o+"-ms-flex-pack"+i+o;case 1005:return k.test(o)?o.replace(F,":-webkit-")+o.replace(F,":-moz-")+o:o;case 1e3:switch(i=o.substring(13).trim(),u=i.indexOf("-")+1,i.charCodeAt(0)+i.charCodeAt(u)){case 226:i=o.replace(N,"tb");break;case 232:i=o.replace(N,"tb-rl");break;case 220:i=o.replace(N,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+i+o;case 1017:if(o.indexOf("sticky",9)===-1)break;case 975:switch(u=(o=d).length-10,i=(o.charCodeAt(u)===33?o.substring(0,u):o).substring(d.indexOf(":",7)+1).trim(),C=i.charCodeAt(0)+(i.charCodeAt(7)|0)){case 203:if(111>i.charCodeAt(8))break;case 115:o=o.replace(i,"-webkit-"+i)+";"+o;break;case 207:case 102:o=o.replace(i,"-webkit-"+(102<C?"inline-":"")+"box")+";"+o.replace(i,"-webkit-"+i)+";"+o.replace(i,"-ms-"+i+"box")+";"+o}return o+";";case 938:if(o.charCodeAt(5)===45)switch(o.charCodeAt(6)){case 105:return i=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+i+"-ms-flex-"+i+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(W,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(W,"")+o}break;case 973:case 989:if(o.charCodeAt(3)!==45||o.charCodeAt(4)===122)break;case 931:case 953:if(ae.test(d)===!0)return(i=d.substring(d.indexOf(":")+1)).charCodeAt(0)===115?a(d.replace("stretch","fill-available"),u,f,g).replace(":fill-available",":stretch"):o.replace(i,"-webkit-"+i)+o.replace(i,"-moz-"+i.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(o.charCodeAt(5)===102?"-ms-"+o:"")+o,f+g===211&&o.charCodeAt(13)===105&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(A,"$1-webkit-$2")+o}return o}function s(d,u){var f=d.indexOf(u===1?":":"{"),g=d.substring(0,u!==3?f:10);return f=d.substring(f+1,d.length-1),ge(u!==2?g:g.replace(te,"$1"),f,u)}function c(d,u){var f=a(u,u.charCodeAt(0),u.charCodeAt(1),u.charCodeAt(2));return f!==u+";"?f.replace(le," or ($1)").substring(4):"("+u+")"}function l(d,u,f,g,o,C,i,T,x,E){for(var y=0,L=u,Y;y<X;++y)switch(Y=J[y].call(_,d,L,f,g,o,C,i,T,x,E)){case void 0:case!1:case!0:case null:break;default:L=Y}if(L!==u)return L}function h(d){switch(d){case void 0:case null:X=J.length=0;break;default:if(typeof d=="function")J[X++]=d;else if(typeof d=="object")for(var u=0,f=d.length;u<f;++u)h(d[u]);else fe=!!d|0}return h}function p(d){return d=d.prefix,d!==void 0&&(ge=null,d?typeof d!="function"?H=1:(H=2,ge=d):H=0),p}function _(d,u){var f=d;if(33>f.charCodeAt(0)&&(f=f.trim()),ye=f,f=[ye],0<X){var g=l(-1,u,f,f,Q,U,0,0,0,0);g!==void 0&&typeof g=="string"&&(u=g)}var o=r(me,f,u,0,0);return 0<X&&(g=l(-2,o,f,f,Q,U,o.length,0,0,0),g!==void 0&&(o=g)),ye="",re=0,U=Q=1,o}var S=/^\0+/g,M=/[\0\r\f]/g,F=/: */g,k=/zoo|gra/,A=/([,: ])(transform)/g,v=/,\r+?/g,R=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,O=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,oe=/\(\s*(.*)\s*\)/g,le=/([\s\S]*?);/g,W=/-self|flex-/g,te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ae=/stretch|:\s*\w+\-(?:conte|avail)/,ue=/([^-])(image-set\()/,U=1,Q=1,re=0,H=1,me=[],J=[],X=0,ge=null,fe=0,ye="";return _.use=h,_.set=p,e!==void 0&&p(e),_}var rr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function nr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var or=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,St=nr(function(e){return or.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),it={},ar={get exports(){return it},set exports(e){it=e}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=typeof Symbol=="function"&&Symbol.for,pt=z?Symbol.for("react.element"):60103,mt=z?Symbol.for("react.portal"):60106,Ye=z?Symbol.for("react.fragment"):60107,Ue=z?Symbol.for("react.strict_mode"):60108,Ve=z?Symbol.for("react.profiler"):60114,We=z?Symbol.for("react.provider"):60109,Xe=z?Symbol.for("react.context"):60110,gt=z?Symbol.for("react.async_mode"):60111,Ke=z?Symbol.for("react.concurrent_mode"):60111,Ze=z?Symbol.for("react.forward_ref"):60112,Qe=z?Symbol.for("react.suspense"):60113,ir=z?Symbol.for("react.suspense_list"):60120,Je=z?Symbol.for("react.memo"):60115,et=z?Symbol.for("react.lazy"):60116,sr=z?Symbol.for("react.block"):60121,cr=z?Symbol.for("react.fundamental"):60117,lr=z?Symbol.for("react.responder"):60118,ur=z?Symbol.for("react.scope"):60119;function V(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case pt:switch(e=e.type,e){case gt:case Ke:case Ye:case Ve:case Ue:case Qe:return e;default:switch(e=e&&e.$$typeof,e){case Xe:case Ze:case et:case Je:case We:return e;default:return r}}case mt:return r}}}function Dt(e){return V(e)===Ke}I.AsyncMode=gt;I.ConcurrentMode=Ke;I.ContextConsumer=Xe;I.ContextProvider=We;I.Element=pt;I.ForwardRef=Ze;I.Fragment=Ye;I.Lazy=et;I.Memo=Je;I.Portal=mt;I.Profiler=Ve;I.StrictMode=Ue;I.Suspense=Qe;I.isAsyncMode=function(e){return Dt(e)||V(e)===gt};I.isConcurrentMode=Dt;I.isContextConsumer=function(e){return V(e)===Xe};I.isContextProvider=function(e){return V(e)===We};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pt};I.isForwardRef=function(e){return V(e)===Ze};I.isFragment=function(e){return V(e)===Ye};I.isLazy=function(e){return V(e)===et};I.isMemo=function(e){return V(e)===Je};I.isPortal=function(e){return V(e)===mt};I.isProfiler=function(e){return V(e)===Ve};I.isStrictMode=function(e){return V(e)===Ue};I.isSuspense=function(e){return V(e)===Qe};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ye||e===Ke||e===Ve||e===Ue||e===Qe||e===ir||typeof e=="object"&&e!==null&&(e.$$typeof===et||e.$$typeof===Je||e.$$typeof===We||e.$$typeof===Xe||e.$$typeof===Ze||e.$$typeof===cr||e.$$typeof===lr||e.$$typeof===ur||e.$$typeof===sr)};I.typeOf=V;(function(e){e.exports=I})(ar);var yt=it,fr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_t={};_t[yt.ForwardRef]=hr;_t[yt.Memo]=zt;function wt(e){return yt.isMemo(e)?zt:_t[e.$$typeof]||fr}var pr=Object.defineProperty,mr=Object.getOwnPropertyNames,kt=Object.getOwnPropertySymbols,gr=Object.getOwnPropertyDescriptor,yr=Object.getPrototypeOf,At=Object.prototype;function Ft(e,r,t){if(typeof r!="string"){if(At){var n=yr(r);n&&n!==At&&Ft(e,n,t)}var a=mr(r);kt&&(a=a.concat(kt(r)));for(var s=wt(e),c=wt(r),l=0;l<a.length;++l){var h=a[l];if(!dr[h]&&!(t&&t[h])&&!(c&&c[h])&&!(s&&s[h])){var p=gr(r,h);try{pr(e,h,p)}catch{}}}}return e}var _r=Ft;function ne(){return(ne=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Ct=function(e,r){for(var t=[e[0]],n=0,a=r.length;n<a;n+=1)t.push(r[n],e[n+1]);return t},st=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ie.typeOf(e)},Re=Object.freeze([]),se=Object.freeze({});function Se(e){return typeof e=="function"}function xt(e){return e.displayName||e.name||"Component"}function vt(e){return e&&typeof e.styledComponentId=="string"}var he=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",bt=typeof window<"u"&&"HTMLElement"in window,vr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function we(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var br=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,a=0;a<t;a++)n+=this.groupSizes[a];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,c=s;t>=c;)(c<<=1)<0&&we(16,""+t);this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var l=s;l<c;l++)this.groupSizes[l]=0}for(var h=this.indexOfGroup(t+1),p=0,_=n.length;p<_;p++)this.tag.insertRule(h,n[p])&&(this.groupSizes[t]++,h++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],a=this.indexOfGroup(t),s=a+n;this.groupSizes[t]=0;for(var c=a;c<s;c++)this.tag.deleteRule(a)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var a=this.groupSizes[t],s=this.indexOfGroup(t),c=s+a,l=s;l<c;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Ee=new Map,Oe=new Map,be=1,Ae=function(e){if(Ee.has(e))return Ee.get(e);for(;Oe.has(be);)be++;var r=be++;return Ee.set(e,r),Oe.set(r,e),r},Sr=function(e){return Oe.get(e)},wr=function(e,r){r>=be&&(be=r+1),Ee.set(e,r),Oe.set(r,e)},kr="style["+he+'][data-styled-version="5.3.9"]',Ar=new RegExp("^"+he+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Cr=function(e,r,t){for(var n,a=t.split(","),s=0,c=a.length;s<c;s++)(n=a[s])&&e.registerName(r,n)},xr=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],a=0,s=t.length;a<s;a++){var c=t[a].trim();if(c){var l=c.match(Ar);if(l){var h=0|parseInt(l[1],10),p=l[2];h!==0&&(wr(p,h),Cr(e,p,l[3]),e.getTag().insertRules(h,n)),n.length=0}else n.push(c)}}},$r=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Lt=function(e){var r=document.head,t=e||r,n=document.createElement("style"),a=function(l){for(var h=l.childNodes,p=h.length;p>=0;p--){var _=h[p];if(_&&_.nodeType===1&&_.hasAttribute(he))return _}}(t),s=a!==void 0?a.nextSibling:null;n.setAttribute(he,"active"),n.setAttribute("data-styled-version","5.3.9");var c=$r();return c&&n.setAttribute("nonce",c),t.insertBefore(n,s),n},Er=function(){function e(t){var n=this.element=Lt(t);n.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,c=0,l=s.length;c<l;c++){var h=s[c];if(h.ownerNode===a)return h}we(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Pr=function(){function e(t){var n=this.element=Lt(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var a=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(a,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ir=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$t=bt,Rr={isServer:!bt,useCSSOMInjection:!vr},Bt=function(){function e(t,n,a){t===void 0&&(t=se),n===void 0&&(n={}),this.options=ne({},Rr,{},t),this.gs=n,this.names=new Map(a),this.server=!!t.isServer,!this.server&&bt&&$t&&($t=!1,function(s){for(var c=document.querySelectorAll(kr),l=0,h=c.length;l<h;l++){var p=c[l];p&&p.getAttribute(he)!=="active"&&(xr(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}e.registerId=function(t){return Ae(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ne({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(a=(n=this.options).isServer,s=n.useCSSOMInjection,c=n.target,t=a?new Ir(c):s?new Er(c):new Pr(c),new br(t)));var t,n,a,s,c},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Ae(t),this.names.has(t))this.names.get(t).add(n);else{var a=new Set;a.add(n),this.names.set(t,a)}},r.insertRules=function(t,n,a){this.registerName(t,n),this.getTag().insertRules(Ae(t),a)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Ae(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),a=n.length,s="",c=0;c<a;c++){var l=Sr(c);if(l!==void 0){var h=t.names.get(l),p=n.getGroup(c);if(h&&p&&h.size){var _=he+".g"+c+'[id="'+l+'"]',S="";h!==void 0&&h.forEach(function(M){M.length>0&&(S+=M+",")}),s+=""+p+_+'{content:"'+S+`"}/*!sc*/
`}}}return s}(this)},e}(),Or=/(a)(d)/gi,Et=function(e){return String.fromCharCode(e+(e>25?39:97))};function ct(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Et(r%52)+t;return(Et(r%52)+t).replace(Or,"$1-$2")}var de=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},qt=function(e){return de(5381,e)};function Tr(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(Se(t)&&!vt(t))return!1}return!0}var Nr=qt("5.3.9"),jr=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Tr(r),this.componentId=t,this.baseHash=de(Nr,t),this.baseStyle=n,Bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var a=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(a,this.staticRulesId))s.push(this.staticRulesId);else{var c=pe(this.rules,r,t,n).join(""),l=ct(de(this.baseHash,c)>>>0);if(!t.hasNameForId(a,l)){var h=n(c,"."+l,void 0,a);t.insertRules(a,l,h)}s.push(l),this.staticRulesId=l}else{for(var p=this.rules.length,_=de(this.baseHash,n.hash),S="",M=0;M<p;M++){var F=this.rules[M];if(typeof F=="string")S+=F;else if(F){var k=pe(F,r,t,n),A=Array.isArray(k)?k.join(""):k;_=de(_,A+M),S+=A}}if(S){var v=ct(_>>>0);if(!t.hasNameForId(a,v)){var R=n(S,"."+v,void 0,a);t.insertRules(a,v,R)}s.push(v)}}return s.join(" ")},e}(),Mr=/^\s*\/\/.*$/gm,Dr=[":","[",".","#"];function zr(e){var r,t,n,a,s=e===void 0?se:e,c=s.options,l=c===void 0?se:c,h=s.plugins,p=h===void 0?Re:h,_=new tr(l),S=[],M=function(A){function v(R){if(R)try{A(R+"}")}catch{}}return function(R,b,D,O,N,oe,le,W,te,ae){switch(R){case 1:if(te===0&&b.charCodeAt(0)===64)return A(b+";"),"";break;case 2:if(W===0)return b+"/*|*/";break;case 3:switch(W){case 102:case 112:return A(D[0]+b),"";default:return b+(ae===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(v)}}}(function(A){S.push(A)}),F=function(A,v,R){return v===0&&Dr.indexOf(R[t.length])!==-1||R.match(a)?A:"."+r};function k(A,v,R,b){b===void 0&&(b="&");var D=A.replace(Mr,""),O=v&&R?R+" "+v+" { "+D+" }":D;return r=b,t=v,n=new RegExp("\\"+t+"\\b","g"),a=new RegExp("(\\"+t+"\\b){2,}"),_(R||!v?"":v,O)}return _.use([].concat(p,[function(A,v,R){A===2&&R.length&&R[0].lastIndexOf(t)>0&&(R[0]=R[0].replace(n,F))},M,function(A){if(A===-2){var v=S;return S=[],v}}])),k.hash=p.length?p.reduce(function(A,v){return v.name||we(15),de(A,v.name)},5381).toString():"",k}var Gt=Ne.createContext();Gt.Consumer;var Ht=Ne.createContext(),Fr=(Ht.Consumer,new Bt),lt=zr();function Lr(){return K.useContext(Gt)||Fr}function Br(){return K.useContext(Ht)||lt}var Yt=function(){function e(r,t){var n=this;this.inject=function(a,s){s===void 0&&(s=lt);var c=n.name+s.hash;a.hasNameForId(n.id,c)||a.insertRules(n.id,c,s(n.rules,c,"@keyframes"))},this.toString=function(){return we(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=lt),this.name+r.hash},e}(),qr=/([A-Z])/,Gr=/([A-Z])/g,Hr=/^ms-/,Yr=function(e){return"-"+e.toLowerCase()};function Pt(e){return qr.test(e)?e.replace(Gr,Yr).replace(Hr,"-ms-"):e}var It=function(e){return e==null||e===!1||e===""};function pe(e,r,t,n){if(Array.isArray(e)){for(var a,s=[],c=0,l=e.length;c<l;c+=1)(a=pe(e[c],r,t,n))!==""&&(Array.isArray(a)?s.push.apply(s,a):s.push(a));return s}if(It(e))return"";if(vt(e))return"."+e.styledComponentId;if(Se(e)){if(typeof(p=e)!="function"||p.prototype&&p.prototype.isReactComponent||!r)return e;var h=e(r);return pe(h,r,t,n)}var p;return e instanceof Yt?t?(e.inject(t,n),e.getName(n)):e:st(e)?function _(S,M){var F,k,A=[];for(var v in S)S.hasOwnProperty(v)&&!It(S[v])&&(Array.isArray(S[v])&&S[v].isCss||Se(S[v])?A.push(Pt(v)+":",S[v],";"):st(S[v])?A.push.apply(A,_(S[v],v)):A.push(Pt(v)+": "+(F=v,(k=S[v])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||F in rr?String(k).trim():k+"px")+";"));return M?[M+" {"].concat(A,["}"]):A}(e):e.toString()}var Rt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Te(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return Se(e)||st(e)?Rt(pe(Ct(Re,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Rt(pe(Ct(e,t)))}var Ur=function(e,r,t){return t===void 0&&(t=se),e.theme!==t.theme&&e.theme||r||t.theme},Vr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wr=/(^-|-$)/g;function nt(e){return e.replace(Vr,"-").replace(Wr,"")}var Ut=function(e){return ct(qt(e)>>>0)};function Ce(e){return typeof e=="string"&&!0}var ut=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Xr=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Kr(e,r,t){var n=e[t];ut(r)&&ut(n)?Vt(n,r):e[t]=r}function Vt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var a=0,s=t;a<s.length;a++){var c=s[a];if(ut(c))for(var l in c)Xr(l)&&Kr(e,c[l],l)}return e}var Wt=Ne.createContext();Wt.Consumer;var ot={};function Xt(e,r,t){var n=vt(e),a=!Ce(e),s=r.attrs,c=s===void 0?Re:s,l=r.componentId,h=l===void 0?function(b,D){var O=typeof b!="string"?"sc":nt(b);ot[O]=(ot[O]||0)+1;var N=O+"-"+Ut("5.3.9"+O+ot[O]);return D?D+"-"+N:N}(r.displayName,r.parentComponentId):l,p=r.displayName,_=p===void 0?function(b){return Ce(b)?"styled."+b:"Styled("+xt(b)+")"}(e):p,S=r.displayName&&r.componentId?nt(r.displayName)+"-"+r.componentId:r.componentId||h,M=n&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,F=r.shouldForwardProp;n&&e.shouldForwardProp&&(F=r.shouldForwardProp?function(b,D,O){return e.shouldForwardProp(b,D,O)&&r.shouldForwardProp(b,D,O)}:e.shouldForwardProp);var k,A=new jr(t,S,n?e.componentStyle:void 0),v=A.isStatic&&c.length===0,R=function(b,D){return function(O,N,oe,le){var W=O.attrs,te=O.componentStyle,ae=O.defaultProps,ue=O.foldedComponentIds,U=O.shouldForwardProp,Q=O.styledComponentId,re=O.target,H=function(g,o,C){g===void 0&&(g=se);var i=ne({},o,{theme:g}),T={};return C.forEach(function(x){var E,y,L,Y=x;for(E in Se(Y)&&(Y=Y(i)),Y)i[E]=T[E]=E==="className"?(y=T[E],L=Y[E],y&&L?y+" "+L:y||L):Y[E]}),[i,T]}(Ur(N,K.useContext(Wt),ae)||se,N,W),me=H[0],J=H[1],X=function(g,o,C,i){var T=Lr(),x=Br(),E=o?g.generateAndInjectStyles(se,T,x):g.generateAndInjectStyles(C,T,x);return E}(te,le,me),ge=oe,fe=J.$as||N.$as||J.as||N.as||re,ye=Ce(fe),d=J!==N?ne({},N,{},J):N,u={};for(var f in d)f[0]!=="$"&&f!=="as"&&(f==="forwardedAs"?u.as=d[f]:(U?U(f,St,fe):!ye||St(f))&&(u[f]=d[f]));return N.style&&J.style!==N.style&&(u.style=ne({},N.style,{},J.style)),u.className=Array.prototype.concat(ue,Q,X!==Q?X:null,N.className,J.className).filter(Boolean).join(" "),u.ref=ge,K.createElement(fe,u)}(k,b,D,v)};return R.displayName=_,(k=Ne.forwardRef(R)).attrs=M,k.componentStyle=A,k.displayName=_,k.shouldForwardProp=F,k.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Re,k.styledComponentId=S,k.target=n?e.target:e,k.withComponent=function(b){var D=r.componentId,O=function(oe,le){if(oe==null)return{};var W,te,ae={},ue=Object.keys(oe);for(te=0;te<ue.length;te++)W=ue[te],le.indexOf(W)>=0||(ae[W]=oe[W]);return ae}(r,["componentId"]),N=D&&D+"-"+(Ce(b)?b:nt(xt(b)));return Xt(b,ne({},O,{attrs:M,componentId:N}),t)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=n?Vt({},e.defaultProps,b):b}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),a&&_r(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var ft=function(e){return function r(t,n,a){if(a===void 0&&(a=se),!Ie.isValidElementType(n))return we(1,String(n));var s=function(){return t(n,a,Te.apply(void 0,arguments))};return s.withConfig=function(c){return r(t,n,ne({},a,{},c))},s.attrs=function(c){return r(t,n,ne({},a,{attrs:Array.prototype.concat(a.attrs,c).filter(Boolean)}))},s}(Xt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ft[e]=ft(e)});function Zr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=Te.apply(void 0,[e].concat(t)).join(""),s=Ut(a);return new Yt(s,a)}const Qr=ft,xe=({top:e,left:r})=>Zr`
      0% {
        transform: translate(-50%, -50%);
      }
      100% {
        transform: translate(${r}px, ${e}px);
      }
    `,Ot=e=>[0,e*.1,e*.2,e*.3,e*.4,e*-.1,e*-.2,e*-.3,e*-.4],Jr=e=>{if(!e.current)return[];const{width:r,height:t}=e.current.getBoundingClientRect(),n=[],a=Ot(r),s=Ot(t),c=r*-.45,l=r*.4,h=t*-.45,p=t*.4;return s.forEach(_=>{n.push(xe({top:_,left:c}))}),a.forEach(_=>{n.push(xe({top:h,left:_}))}),s.forEach(_=>{n.push(xe({top:_,left:l}))}),a.forEach(_=>{n.push(xe({top:p,left:_}))}),n};function Tt(e,r){const[t,n]=K.useState(e);return K.useEffect(()=>{const a=setTimeout(()=>{n(e)},r);return()=>{clearTimeout(a)}},[e,r]),t}const en="_shadow_1rqxk_1",tn="_animation_shadow_width_1rqxk_1",rn="_font__normal_1rqxk_26",nn="_font__medium_1rqxk_31",on="_font__semibold_1rqxk_36",an="_font__bold_1rqxk_41",sn="_font__extrabold_1rqxk_46",cn="_font__black_1rqxk_51",ln="_font__rampart_1rqxk_56",un="_light_1rqxk_95",fn="_dark_1rqxk_99",dn="_root_1rqxk_1",hn="_container_1rqxk_107",pn="_scroll_1rqxk_112",mn="_element_1rqxk_143",gn="_elementAnimation_1rqxk_1",yn="_bold_1rqxk_155",_n={shadow:en,animation_shadow_width:tn,font__normal:rn,font__medium:nn,font__semibold:on,font__bold:an,font__extrabold:sn,font__black:cn,font__rampart:ln,light:un,dark:fn,root:dn,container:hn,scroll:pn,element:mn,elementAnimation:gn,bold:yn},Kt=e=>Math.round((e.length-1)*Math.random()),at=Object.keys(ce).filter(e=>e!==ce.phone&&e!==ce.tg&&e!==ce.whatsapp&&e!==ce.email&&e!==ce.vk&&e!==ce.codewars),Nt=["#434343","#848484","#641894","#742DBC","#BC6DFF","#BA3C15","#FBA71C","#F9C909","#F9E501","#185D35","#649009","#9CC50F","#C4E31E","#F0F949","#0C635F","#03B3A1","#15606F","#1D8D8A","#3EE4C2","#17445A","#942941","#C82255","#F6198D"],vn=()=>Nt[Kt(Nt)],bn=()=>{const e=Kt(at),r=vn();return{element:Pe("div",{style:{width:"100%",height:"100%",color:r},children:Pe(Zt,{className:_n.element,iconName:at[e]})}),key:at[e]}},jt=4;let $e=0;const Sn=e=>{const r=e.length/jt;return $e===jt-1?$e=0:$e++,Math.floor(Math.random()*r+r*$e)},wn=e=>e+"__"+Math.random()*100+Math.random()*100,kn=3e3,An=({keyframeList:e,setElementList:r})=>{const{element:t,key:n}=bn(),a=wn(n),s=Sn(e),c=e[s];r(l=>l.concat({node:t,key:a,keyframe:c})),setTimeout(()=>r(l=>l.filter(h=>h.node!==t)),kn)},Cn=700,xn=({containerRef:e})=>{const[r,t]=K.useState([]),[n,a]=K.useState({width:0,height:0}),s=Tt(n.height,300),c=Tt(n.width,300),l=K.useMemo(()=>Jr(e),[e.current,s,c]),h=()=>({callBack:()=>An({keyframeList:l,setElementList:t}),interval:Math.random()*Cn}),p=()=>{if(!e.current||!l.length)return;const{callBack:_,interval:S}=h();new Promise(F=>{setTimeout(()=>{_(),F(null)},S)}).then(()=>p())};return K.useEffect(()=>{var _,S;a({width:((_=e.current)==null?void 0:_.getBoundingClientRect().width)??0,height:((S=e.current)==null?void 0:S.getBoundingClientRect().height)??0})},[e.current]),K.useEffect(()=>{l.length&&p()},[l.length]),r},$n="_shadow_1q781_1",En="_animation_shadow_width_1q781_1",Pn="_font__normal_1q781_26",In="_font__medium_1q781_31",Rn="_font__semibold_1q781_36",On="_font__bold_1q781_41",Tn="_font__extrabold_1q781_46",Nn="_font__black_1q781_51",jn="_font__rampart_1q781_56",Mn="_light_1q781_95",Dn="_dark_1q781_99",zn="_root_1q781_1",Fn="_container_1q781_107",Ln="_scroll_1q781_112",Bn="_space_1q781_143",qn={shadow:$n,animation_shadow_width:En,font__normal:Pn,font__medium:In,font__semibold:Rn,font__bold:On,font__extrabold:Tn,font__black:Nn,font__rampart:jn,light:Mn,dark:Dn,root:zn,container:Fn,scroll:Ln,space:Bn},Gn=Qr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3rem;
  width: auto;
  transition: transform 3s;

  ${e=>e.keyframe?Te`
          animation: ${e.keyframe} 3s linear;
        `:Te`
          display: none;
        `};
`,Yn=()=>{const e=K.useRef(null),r=xn({containerRef:e});return Pe("div",{ref:e,className:qn.space,children:r.map(t=>Pe(Gn,{keyframe:t.keyframe,children:t.node},t.key))})};export{Yn as default};
