(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{205:function(t,e,o){var content=o(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("687432ff",content,!0,{sourceMap:!1})},206:function(t,e,o){var content=o(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("77a858bb",content,!0,{sourceMap:!1})},207:function(t,e,o){"use strict";o(205)},208:function(t,e,o){var n=o(58)(!1);n.push([t.i,'.header[data-v-6af85cd4]{font-family:"Russo One","Noto Sans JP";font-weight:700;width:100%;height:5vh;padding-top:1vh;background-color:#000;text-align:center;color:#fff}.header a[data-v-6af85cd4]{-webkit-text-decoration-line:none;text-decoration-line:none}.header a[data-v-6af85cd4],.header a[data-v-6af85cd4]:visited{color:#cacaca}',""]),t.exports=n},209:function(t,e,o){"use strict";o(206)},210:function(t,e,o){var n=o(58)(!1);n.push([t.i,'.footer[data-v-4cf0dc03]{font-family:"Russo One","Noto Sans JP";font-weight:700;width:100%;height:5vh;padding-top:1vh;background-color:#000;text-align:center;color:#fff}.footer a[data-v-4cf0dc03],.footer a[data-v-4cf0dc03]:visited{color:#cacaca}',""]),t.exports=n},211:function(t,e,o){"use strict";o.r(e);o(207);var n=o(34),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Playground")])],1)}),[],!1,null,"6af85cd4",null);e.default=component.exports},212:function(t,e,o){"use strict";o.r(e);o(209);var n=o(34),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[t._v("\n  ©\n  "),o("a",{attrs:{href:"https://github.com/hirorocky"}},[t._v("hirorocky")])])}],!1,null,"4cf0dc03",null);e.default=component.exports},213:function(t,e,o){var content=o(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("768076e6",content,!0,{sourceMap:!1})},217:function(t,e,o){"use strict";o(213)},218:function(t,e,o){var n=o(58)(!1);n.push([t.i,'#menu[data-v-664da58f]{position:fixed;top:10vh;right:5vw;z-index:3;background-color:rgba(0,0,0,.13725);padding:20px 10px}#menu .menu-item[data-v-664da58f]{font-size:1.5rem;font-family:"Noto Sans JP";text-align:right;font-weight:300}#menu .menu-item a[data-v-664da58f]{color:#fff;-webkit-text-decoration-line:blink;text-decoration-line:blink}#menu .menu-item a[data-v-664da58f]:visited{color:#fff}.hero[data-v-664da58f]{height:100vh;width:100vw;overflow:hidden;position:relative}.hero .hero-image[data-v-664da58f]{z-index:1;width:auto;height:auto;min-width:100%;min-height:100%;max-width:inherit;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero .hero-text[data-v-664da58f]{position:absolute;top:50vh;z-index:2;font-family:"Noto Sans JP";font-weight:700;text-shadow:3px 3px 3px rgba(0,0,0,.45098)}.hero .hero-text .title[data-v-664da58f]{margin-left:3.5vw;color:#fff;font-size:4rem}.hero .hero-text .detail[data-v-664da58f]{margin-left:3vw;color:#fff;font-size:1.5rem}',""]),t.exports=n},225:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{heroes:[{id:1,title:"Dog",detail:"「ワン」と吠えるかわいい生き物",image:"/web-playground/space1/dog.jpg"},{id:2,title:"Cat",detail:"「ニャン」と鳴くかわいい生き物",image:"/web-playground/space1/cat.jpg"},{id:3,title:"Monkey",detail:"「ウキー」と叫ぶかわいい生き物",image:"/web-playground/space1/monkey.jpg"},{id:4,title:"Alligator",detail:"「ゴロロロ」と鳴くかわいい生き物",image:"/web-playground/space1/alligator.jpg"},{id:5,title:"Lion",detail:"「ガオー」と叫ぶかわいい百獣王",image:"/web-playground/space1/lion.jpg"}]}}},r=(o(217),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("Header"),t._v(" "),o("div",{attrs:{id:"menu"}},t._l(t.heroes,(function(e){return o("div",{key:e.id,staticClass:"menu-item"},[o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+e.title,expression:"'#' + hero.title"}],attrs:{to:""}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0),t._v(" "),o("div",{attrs:{id:"heroes"}},t._l(t.heroes,(function(e){return o("div",{key:e.id,staticClass:"hero",attrs:{id:e.title}},[o("div",{staticClass:"hero-text"},[o("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"detail"},[t._v(t._s(e.detail))])]),t._v(" "),o("img",{staticClass:"hero-image",attrs:{src:e.image}})])})),0),t._v(" "),o("Footer")],1)}),[],!1,null,"664da58f",null);e.default=component.exports;installComponents(component,{Header:o(211).default,Footer:o(212).default})}}]);