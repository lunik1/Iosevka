(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/HOU":function(a,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return A}));var n=r("q1tI"),t=r.n(n),c=(r("rHLO"),r("9gBE"),r("8Kt/")),o=r.n(c),i=r("wx14"),s=r("ODXe"),l=r("16fy"),u=r("ara8"),f=r("r4d+"),h=r("qX4b"),m=r("0iN6"),b=r("ob4f"),p=t.a.createElement;function d(a){if("undefined"===typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(a=function(a,e){if(!a)return;if("string"===typeof a)return g(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);"Object"===r&&a.constructor&&(r=a.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(a,e)}(a))){var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(a){throw a},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,t,c=!0,o=!1;return{s:function(){n=a[Symbol.iterator]()},n:function(){var a=n.next();return c=a.done,a},e:function(a){o=!0,t=a},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw t}}}}function g(a,e){(null==e||e>a.length)&&(e=a.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=a[r];return n}var v=Object(n.createContext)({blocks:[]});function y(){var a={blocks:f.b};return p(v.Provider,{value:a},p(u.a,{withToolbar:!0,className:"character-specimen"},p(l.a,{wholeSection:!0,enableSpacing:!0,enableMarkings:!0,content:k,styleGrades:[h.f.Sans,h.f.Slab,h.f.Aile,h.f.Etoile,h.f.Sparkle],defaultFontStyle:{style:h.f.Sans}})))}function k(a){var e=Object(n.useContext)(v);return p(t.a.Fragment,null,e.blocks.map((function(e){return p(S,{key:e.name,block:e,fontStyle:a.fontStyle})})))}function S(a){var e=Object(b.a)(),r=Object(s.a)(e,2),n=r[0],t=r[1];return p("div",{className:"specimen-block"},p("h3",null,a.block.name),p("div",{className:Object(m.a)("specimen-block-body",t?"visible":"virtualized"),style:{height:a.block.characters.length/16*4+"rem"},ref:n},t?a.block.characters.map((function(e){return p(N,{blockName:a.block.name,char:e,fontStyle:a.fontStyle,key:e.lch})})):null))}function N(a){return p("div",{className:Object(m.a)("specimen-character",a.char.inFont?"in-font":"Unassigned"===a.char.gc?"unassigned":"not-in-font")},p(O,a),p(w,a))}function w(a){if(!a.char.inFont)return null;var e=function(a){var e,r,n=Object(h.k)(a.fontStyle.style||h.f.Sans);return a.char.typographicVariants?n&&a.char.charVariants?(e=a.char.typographicVariants,r=a.char.charVariants):(e=[""],r=a.char.typographicVariants):(e=[""],r=n&&a.char.charVariants||[]),{rowFeatures:e,columnFeatures:r}}(a),r=e.rowFeatures,n=e.columnFeatures;if(!n.length)return null;var c,o=[],s=d(r);try{for(s.s();!(c=s.n()).done;){var l,u=c.value,f=[],b=d(n);try{for(b.s();!(l=b.n()).done;){var g=l.value,v=u?"'".concat(u,"' on, '").concat(g,"' on"):"'".concat(g,"' on");f.push(p(O,Object(i.a)({},a,{variantOverride:v,key:g})))}}catch(y){b.e(y)}finally{b.f()}o.push(p("div",{className:"row",key:u},f))}}catch(y){s.e(y)}finally{s.f()}return p(t.a.Fragment,null,p("div",{className:"has-variant-marker"}),p("div",{className:Object(m.a)("character-sample-variants")},o))}function O(a){var e=a.char.inFont&&"Nonspacing_Mark"===a.char.gc,r=a.char.inFont&&("Space_Separator"===a.char.gc||"Format"===a.char.gc),n=a.char.inFont&&("Private Use Area"===a.blockName||"Box Drawing"===a.blockName||"Block Elements"===a.blockName||"Symbols for Legacy Computing"===a.blockName),t=a.char.inFont&&!n&&("Decimal_Number"===a.char.gc||"Uppercase_Letter"===a.char.gc||"Lowercase_Letter"===a.char.gc||"Titlecase_Letter"===a.char.gc||"Other_Letter"===a.char.gc||"Currency Symbols"===a.blockName);return p("div",{className:Object(m.a)("character-sample",Object(h.i)(a.fontStyle),a.fontStyle.markingsVisible||e||r?"markings-visible":"markings-hidden"),style:a.variantOverride?{fontFeatureSettings:a.variantOverride}:e?{fontFeatureSettings:"'hwid' on"}:Object(h.j)(a.fontStyle),title:a.char.inFont?F(a.char,a.variantOverride):void 0},p(j,{char:a.char,isMark:e,isLetter:t,isMosaic:n}),p("span",{className:"character-sample-inner"},p("span",{className:"pre"},(e?"\ue09e":"")+String.fromCodePoint(a.char.lch)),p(M,{char:a.char,isMark:e,isLetter:t,isMosaic:n})),p(L,{char:a.char,isMark:e,isLetter:t,isMosaic:n}))}function F(a,e){var r=a.lch.toString(16).toUpperCase().padStart(4,"0");return"U+".concat(r,"\n").concat(a.charName||"","\n(").concat(a.gc,")")+(e?"\n"+e:"")}function j(a){return a.char.inFont?a.isMark?p("span",{className:"background mark-base"}):a.isLetter?p("span",{className:"background pre-letter"}):a.isMosaic?p("span",{className:"background pre-mosaic"}):p("span",{className:"background pre-symbol"}):null}function M(a){return a.char.inFont&&a.isLetter?p("span",{className:"background under-letter"}):null}function L(a){return!a.char.inFont||a.isMark?null:a.isLetter?p("span",{className:"background post-letter"}):a.isMosaic?p("span",{className:"background post-mosaic"}):p("span",{className:"background post-symbol"})}var _=t.a.createElement;function A(){return _("div",{className:"page"},_(o.a,null,_("title",null,"Iosevka Specimen")),_(y,null))}},"8bMz":function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/specimen",function(){return r("/HOU")}])}},[["8bMz",0,1,3,4]]]);