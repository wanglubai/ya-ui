(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4064438c"],{"0c5c":function(t,e,n){"use strict";n("17ee")},"157a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.getClass,attrs:{type:t.type},on:{click:t.clickAction}},[t.vo.icon?n("i",{class:t.vo.icon}):t._e(),t._t("default",(function(){return[t.vo.label?[t._v(t._s(t.vo.label))]:t._e()]}))],2)},i=[],s={name:"ya-button",components:{},props:{type:{type:String,default:"button"},vo:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{getClass:function(){var t=this.vo,e=t.active,n=void 0!==e&&e,o=t.disabled,i=void 0!==o&&o,s=t.inline,r=void 0!==s&&s,l=t.primary,c=void 0!==l&&l,a=t.outline,u=void 0!==a&&a,h=t.light,d=void 0!==h&&h;return{"ya-button":!0,"ya-button-active":n,"ya-button-disabled":i,"ya-button-inline":r,"ya-button-primary":c,"ya-button-outline":u,"ya-button-outline-primary":u&&c,"ya-button-light":d}}},watch:{},methods:{clickAction:function(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.$emit("click",t)}},created:function(){},mounted:function(){}},r=s,l=(n("0c5c"),n("2877")),c=Object(l["a"])(r,o,i,!1,null,"19d741fb",null);e["a"]=c.exports},"17ee":function(t,e,n){},3979:function(t,e,n){},"513f":function(t,e,n){},"67bd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-picker"},[n("ya-button",{on:{click:t.clickAction}},[t._v("选择一种水果")]),n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]),n("ya-picker",{ref:"picker",attrs:{vo:t.list},on:{change:t.changeAction}})],1)},i=[],s=n("157a"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ya-popup",{attrs:{position:"bottom"},model:{value:t.selfVisible,callback:function(e){t.selfVisible=e},expression:"selfVisible"}},[n("div",{staticClass:"ya-picker-c"},[n("div",{staticClass:"mask-top"}),n("div",{staticClass:"mask-bottom"}),n("div",{ref:"scroll",staticClass:"ya-picker"},[t._t("default",(function(){return[n("ul",{staticClass:"ya-picker-list"},t._l(t.vo,(function(e){return n("li",{key:e,staticClass:"ya-picker-item"},[t._v(" "+t._s(e)+" ")])})),0)]}))],2),n("div",{staticClass:"ya-picker-cancel",on:{click:t.cancelAction}},[t._v("取消")]),n("div",{staticClass:"ya-picker-ok",on:{click:t.okAction}},[t._v("确认")])])])},l=[],c=n("229e"),a="undefined"!==typeof window,u=a&&navigator.userAgent.toLowerCase();u&&/wechatdevtools/.test(u),u&&u.indexOf("android"),function(){if("string"===typeof u){var t=/os (\d\d?_\d(_\d)?)/,e=t.exec(u);if(!e)return!1;var n=e[1].split("_").map((function(t){return parseInt(t,10)}));return!!(13===n[0]&&n[1]>=4)}}();if(a){var h="test-passive";try{var d={};Object.defineProperty(d,"passive",{get:function(){!0}}),window.addEventListener(h,(function(){}),d)}catch($){}}var f=function(t,e){for(var n in e)t[n]=e[n];return t},p=a&&document.createElement("div").style,m=function(){if(!a)return!1;for(var t=[{key:"standard",value:"transform"},{key:"webkit",value:"webkitTransform"},{key:"Moz",value:"MozTransform"},{key:"O",value:"OTransform"},{key:"ms",value:"msTransform"}],e=0,n=t;e<n.length;e++){var o=n[e];if(void 0!==p[o.value])return o.key}return!1}();function v(t){return!1===m?t:"standard"===m?"transitionEnd"===t?"transitionend":t:m+t.charAt(0).toUpperCase()+t.substr(1)}m&&"standard"!==m&&m.toLowerCase();var y=v("transform"),k=v("transition");a&&v("perspective");var b={transform:y,transition:k,transitionTimingFunction:v("transitionTimingFunction"),transitionDuration:v("transitionDuration"),transitionDelay:v("transitionDelay"),transformOrigin:v("transformOrigin"),transitionEnd:v("transitionEnd"),transitionProperty:v("transitionProperty")};function g(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)");return n.test(t.className)}function w(t){return Array.prototype.slice.call(t,0)}var T={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}},x="plugins.wheel",I=[{key:"wheelTo",name:"wheelTo"},{key:"getSelectedIndex",name:"getSelectedIndex"},{key:"restorePosition",name:"restorePosition"}],S=I.map((function(t){return{key:t.key,sourceKey:x+"."+t.name}})),C="wheelIndexChanged",_={rate:4},A=function(){function t(t){this.scroll=t,this.init()}return t.prototype.init=function(){this.handleBScroll(),this.handleOptions(),this.handleHooks(),this.refreshBoundary(),this.setSelectedIndex(this.options.selectedIndex)},t.prototype.handleBScroll=function(){this.scroll.proxy(S),this.scroll.registerType([C])},t.prototype.handleOptions=function(){var t=!0===this.scroll.options.wheel?{}:this.scroll.options.wheel,e={wheelWrapperClass:"wheel-scroll",wheelItemClass:"wheel-item",rotate:25,adjustTime:400,selectedIndex:0,wheelDisabledItemClass:"wheel-disabled-item"};this.options=f(e,t)},t.prototype.handleHooks=function(){var t=this,e=this.scroll,n=this.scroll.scroller,o=n.actionsHandler,i=n.scrollBehaviorX,s=n.scrollBehaviorY,r=n.animater,l=n.content;e.on(e.eventTypes.scrollEnd,(function(e){var o=t.findNearestValidWheel(e.y).index;if(n.animater.forceStopped&&!t.isAdjustingPosition)return t.target=t.items[o],!0;t.setSelectedIndex(o),t.isAdjustingPosition&&(t.isAdjustingPosition=!1)})),this.scroll.hooks.on(this.scroll.hooks.eventTypes.refresh,(function(e){e!==l&&(l=e,t.setSelectedIndex(t.options.selectedIndex,!0)),t.rotateX(t.scroll.y),t.wheelTo(t.selectedIndex,0)})),this.scroll.hooks.on(this.scroll.hooks.eventTypes.beforeInitialScrollTo,(function(e){e.x=0,e.y=-t.selectedIndex*t.itemHeight})),n.hooks.on(n.hooks.eventTypes.checkClick,(function(){var e=w(t.items).indexOf(t.target);return-1===e||t.wheelTo(e,t.options.adjustTime,T.swipe),!0})),n.hooks.on(n.hooks.eventTypes.scrollTo,(function(e){e.y=t.findNearestValidWheel(e.y).y})),n.hooks.on(n.hooks.eventTypes.minDistanceScroll,(function(){var t=n.animater;!0===t.forceStopped&&(t.forceStopped=!1)})),n.hooks.on(n.hooks.eventTypes.scrollToElement,(function(e,n){if(!g(e,t.options.wheelItemClass))return!0;n.top=t.findNearestValidWheel(n.top).y})),o.hooks.on(o.hooks.eventTypes.beforeStart,(function(e){t.target=e.target})),i.hooks.on(i.hooks.eventTypes.computeBoundary,(function(t){t.maxScrollPos=0,t.minScrollPos=0})),s.hooks.on(s.hooks.eventTypes.computeBoundary,(function(e){t.items=t.scroll.scroller.content.children,t.checkWheelAllDisabled(),t.itemHeight=t.items.length>0?s.contentSize/t.items.length:0,e.maxScrollPos=-t.itemHeight*(t.items.length-1),e.minScrollPos=0})),s.hooks.on(s.hooks.eventTypes.momentum,(function(e){e.rate=_.rate,e.destination=t.findNearestValidWheel(e.destination).y})),s.hooks.on(s.hooks.eventTypes.end,(function(e){var n=t.findNearestValidWheel(s.currentPos);e.destination=n.y,e.duration=t.options.adjustTime})),r.hooks.on(r.hooks.eventTypes.time,(function(e){t.transitionDuration(e)})),r.hooks.on(r.hooks.eventTypes.timeFunction,(function(e){t.timeFunction(e)})),r.hooks.on(r.hooks.eventTypes.callStop,(function(){var e=t.findNearestValidWheel(t.scroll.y).index;t.isAdjustingPosition=!0,t.wheelTo(e,0)})),r.translater.hooks.on(r.translater.hooks.eventTypes.translate,(function(e){t.rotateX(e.y)}))},t.prototype.refreshBoundary=function(){var t=this.scroll.scroller,e=t.scrollBehaviorX,n=t.scrollBehaviorY,o=t.content;e.refresh(o),n.refresh(o)},t.prototype.setSelectedIndex=function(t,e){void 0===e&&(e=!1);var n=this.selectedIndex;this.selectedIndex=t,n===t||e||this.scroll.trigger(C,t)},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.wheelTo=function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0);var o=-t*this.itemHeight;this.scroll.scrollTo(0,o,e,n)},t.prototype.restorePosition=function(){var t=this.scroll.pending;if(t){var e=this.getSelectedIndex();this.scroll.scroller.animater.clearTimer(),this.wheelTo(e,0)}},t.prototype.transitionDuration=function(t){for(var e=0;e<this.items.length;e++)this.items[e].style[b.transitionDuration]=t+"ms"},t.prototype.timeFunction=function(t){for(var e=0;e<this.items.length;e++)this.items[e].style[b.transitionTimingFunction]=t},t.prototype.rotateX=function(t){for(var e=this.options.rotate,n=void 0===e?25:e,o=0;o<this.items.length;o++){var i=n*(t/this.itemHeight+o),s=i.toFixed(3);this.items[o].style[b.transform]="rotateX("+s+"deg)"}},t.prototype.findNearestValidWheel=function(t){t=t>0?0:t<this.scroll.maxScrollY?this.scroll.maxScrollY:t;var e=Math.abs(Math.round(-t/this.itemHeight)),n=e,o=this.items,i=this.options.wheelDisabledItemClass;while(e>=0){if(!g(o[e],i))break;e--}if(e<0){e=n;while(e<=o.length-1){if(!g(o[e],i))break;e++}}return e===o.length&&(e=n),{index:this.wheelItemsAllDisabled?-1:e,y:-e*this.itemHeight}},t.prototype.checkWheelAllDisabled=function(){var t=this.options.wheelDisabledItemClass,e=this.items;this.wheelItemsAllDisabled=!0;for(var n=0;n<e.length;n++)if(!g(e[n],t)){this.wheelItemsAllDisabled=!1;break}},t.pluginName="wheel",t}(),D=A,P=n("c35c");c["a"].use(D);var j={name:"ya-picker",components:{YaPopup:P["a"]},props:{vo:[],options:{type:Object,default:function(){return{wheel:{selectedIndex:0,wheelWrapperClass:"ya-picker-list",wheelItemClass:"ya-picker-item",wheelDisabledItemClass:"ya-picker-disabled-item",adjustTime:400,rotate:20},click:!1,useTransition:!1,probeType:3}}}},data:function(){return{selfVisible:!1}},computed:{},watch:{},methods:{cancelAction:function(){this.selfVisible=!1},okAction:function(){this.selfVisible=!1,this.$emit("change",this.getSelectedIndex())},show:function(){var t=this;this.selfVisible=!0,this.$nextTick((function(){t.initScroll(),console.log("111")}))},getScroll:function(){return this.scroll},getSelectedIndex:function(){return this.scroll&&this.scroll.getSelectedIndex()},wheelTo:function(t,e){this.scroll&&this.scroll.wheelTo(t,e)},refresh:function(){this.scroll&&(console.log("refresh"),this.scroll.refresh())},initScroll:function(){this.scroll||(this.scroll=new c["a"](this.$refs.scroll,this.options),this.initScrollEvents())},initScrollEvents:function(){}},mounted:function(){},destroyed:function(){this.scroll&&(this.scroll.destroy(),this.scroll=null)}},O=j,V=(n("a023"),n("2877")),E=Object(V["a"])(O,r,l,!1,null,"bb2b8728",null),B=E.exports,W={components:{YaButton:s["a"],YaPicker:B},props:{},data:function(){return{msg:"--",list:["草莓","菠萝","苹果","大鸭梨","车厘子","葡萄"]}},computed:{},watch:{},methods:{changeAction:function(t){this.msg=this.list[t]},clickAction:function(){this.visible=!0,this.$refs.picker.show()}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},H=W,N=(n("bcbb"),Object(V["a"])(H,o,i,!1,null,"2f7b7bcc",null));e["default"]=N.exports},a023:function(t,e,n){"use strict";n("3979")},bcbb:function(t,e,n){"use strict";n("513f")}}]);
//# sourceMappingURL=chunk-4064438c.43c07d94.js.map