(()=>{var e={954:(e,r,a)=>{var u=a(977);function shouldSetZeroBasis(e){if(!e){return false}return e==="0"||e.replace(/\s/g,"")==="0px"}function properBasis(e){if(shouldSetZeroBasis(e)){return"0%"}return e}e.exports=function(e){if(e.prop==="flex"){var r=u.list.space(e.value);var a="0";var s="1";var t="0%";if(r[0]){a=r[0]}if(r[1]){if(!isNaN(r[1])){s=r[1]}else{t=r[1]}}if(r[2]){t=r[2]}e.value=a+" "+s+" "+properBasis(t)}}},884:(e,r,a)=>{var u=a(977);e.exports=function(e){if(e.prop==="flex"){var r=u.list.space(e.value);var a=r[0];var s=r[1]||"1";var t=r[2]||"0%";if(t==="0%")t=null;e.value=a+" "+s+(t?" "+t:"")}}},426:(e,r,a)=>{var u=a(977);e.exports=function(e){var r=/(\d{1,}) (\d{1,}) (calc\(.*\))/g;var a=r.exec(e.value);if(e.prop==="flex"&&a){var s=u.decl({prop:"flex-grow",value:a[1],source:e.source});var t=u.decl({prop:"flex-shrink",value:a[2],source:e.source});var i=u.decl({prop:"flex-basis",value:a[3],source:e.source});e.parent.insertBefore(e,s);e.parent.insertBefore(e,t);e.parent.insertBefore(e,i);e.remove()}}},582:(e,r,a)=>{var u=a(954);var s=a(884);var t=a(426);var i=["none","auto","content","inherit","initial","unset"];e.exports=function(e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}};e.exports.postcss=true},977:e=>{"use strict";e.exports=require("postcss")}};var r={};function __nccwpck_require__(a){var u=r[a];if(u!==undefined){return u.exports}var s=r[a]={exports:{}};var t=true;try{e[a](s,s.exports,__nccwpck_require__);t=false}finally{if(t)delete r[a]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var a=__nccwpck_require__(582);module.exports=a})();