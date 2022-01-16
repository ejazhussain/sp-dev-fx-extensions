define("f376321d-95fe-4796-bf5d-ca4b8f64529d_0.0.1",["@microsoft/sp-dialog","@microsoft/sp-listview-extensibility","@microsoft/sp-core-library","@microsoft/sp-http","@microsoft/decorators"],function(n,a,i,r,o){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="IUBM")}({"/Cqt":function(e,t){e.exports=n},"7wVe":function(e,t){e.exports=a},IUBM:function(e,t,n){"use strict";n.r(t);var a,i=n("wxtz"),r=n("UWqr"),o=n("7wVe"),s=n("/Cqt"),c=n("vlQI"),d=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.onInit=function(){return r.Log.info("MakeSinglePartAppPageCommandSet","Initialized MakeSinglePartAppPageCommandSet"),Promise.resolve()},t.prototype.onListViewUpdated=function(e){var t=this.tryGetCommand("MAKE_SINGLE_PART_APP_PAGE");t&&(t.visible=1===e.selectedRows.length)},t.prototype.onExecute=function(e){switch(e.itemId){case"MAKE_SINGLE_PART_APP_PAGE":var t=e.selectedRows[0].getValueByName("FileLeafRef");this._updatePageLayoutType(t).then(function(){s.Dialog.alert("Page configured as SingleWebPartAppPage!")}).catch(function(e){console.log(e),s.Dialog.alert("Something went wrong. Review DevTools to get more info.")});break;default:throw new Error("Unknown command")}},t.prototype._updatePageLayoutType=function(e){return t=this,void 0,a=function(){var t,n,a;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(i){switch(i.label){case 0:return t=this.context.pageContext.site.serverRelativeUrl+"/_api/web/getfilebyurl('SitePages/"+e+"')/ListItemAllFields",n={headers:{"Content-Type":"application/json",Accept:"application/json","X-HTTP-Method":"MERGE","IF-MATCH":"*"},body:JSON.stringify({PageLayoutType:"SingleWebPartAppPage"})},[4,this.context.spHttpClient.post(t,c.SPHttpClient.configurations.v1,n)];case 1:if(204!==(a=i.sent()).status)throw new Error("Error updating Layout: "+a.statusText);return console.log("Layout updated successfully"),[2]}})},new((n=void 0)||(n=Promise))(function(e,i){function r(e){try{s(a.next(e))}catch(e){i(e)}}function o(e){try{s(a.throw(e))}catch(e){i(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n(function(e){e(a)})).then(r,o)}s((a=a.apply(t,[])).next())});var t,n,a},l([i.override],t.prototype,"onInit",null),l([i.override],t.prototype,"onListViewUpdated",null),l([i.override],t.prototype,"onExecute",null),t}(o.BaseListViewCommandSet);t.default=u},UWqr:function(e,t){e.exports=i},vlQI:function(e,t){e.exports=r},wxtz:function(e,t){e.exports=o}})});