!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=93)}({4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"i",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"b",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return m}));var r={images:["bmp","jpeg","jpg","ttf","pict","svg","webp","eps","svgz","gif","png","ico","tif","tiff","bpg","avif","jxl"],video:["mp4","3gp","webm","mkv","flv","f4v","f4p","f4bogv","drc","avi","mov","qt","wmv","amv","mpg","mp2","mpeg","mpe","m2v","m4v","3g2","gifv","mpv","av1","ts","tsv","tsa","m2t","m3u8"],audio:["mid","midi","aac","aiff","flac","m4a","m4p","mp3","ogg","oga","mogg","opus","ra","rm","wav","webm","f4a","pat"],interchange:["json","yaml","xml","csv","toml","ini","bson","asn1","ubj"],archives:["jar","iso","tar","tgz","tbz2","tlz","gz","bz2","xz","lz","z","7z","apk","dmg","rar","lzma","txz","zip","zipx"],documents:["pdf","ps","doc","docx","ppt","pptx","xls","otf","xlsx"],other:["srt","swf"]},o="arc:",c={COMLINK_INIT:"".concat(o,"comlink:init"),NODE_ID:"".concat(o,":nodeId"),CLIENT_TEARDOWN:"".concat(o,"client:teardown"),CLIENT_TAB_ID:"".concat(o,"client:tabId"),CDN_CONFIG:"".concat(o,"cdn:config"),P2P_CLIENT_READY:"".concat(o,"cdn:ready"),STORED_FIDS:"".concat(o,"cdn:storedFids"),SW_HEALTH_CHECK:"".concat(o,"cdn:healthCheck"),WIDGET_CONFIG:"".concat(o,"widget:config"),WIDGET_INIT:"".concat(o,"widget:init"),WIDGET_UI_LOAD:"".concat(o,"widget:load"),BROKER_LOAD:"".concat(o,"broker:load"),RENDER_FILE:"".concat(o,"inlay:renderFile"),FILE_RENDERED:"".concat(o,"inlay:fileRendered")},a="serviceWorker",i="/".concat("shared-worker",".js"),d="/".concat("dedicated-worker",".js"),f="/".concat("arc-sw-core",".js"),u="".concat("arc-sw",".js"),p=("/".concat(u),"/".concat("arc-sw"),"arc-db"),s="key-val-store",l=2**17,m="".concat("https://warden.arc-dev.net","/mailbox/propertySession");"".concat("https://warden.arc-dev.net","/mailbox/transfers")},93:function(t,e,n){"use strict";n.r(e);var r=n(4),o="https://arc-dev.net";if("undefined"!=typeof ServiceWorkerGlobalScope){var c=o+r.j;importScripts(c)}else if("undefined"!=typeof SharedWorkerGlobalScope){var a=o+r.h;importScripts(a)}else if("undefined"!=typeof DedicatedWorkerGlobalScope){var i=o+r.b;importScripts(i)}}});