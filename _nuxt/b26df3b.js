(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{199:function(t,e,n){var content=n(202);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("687432ff",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("77a858bb",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n(199)},202:function(t,e,n){var o=n(79)(!1);o.push([t.i,'.header[data-v-6af85cd4]{font-family:"Russo One","Noto Sans JP";font-weight:700;width:100%;height:5vh;padding-top:1vh;background-color:#000;text-align:center;color:#fff}.header a[data-v-6af85cd4]{-webkit-text-decoration-line:none;text-decoration-line:none}.header a[data-v-6af85cd4],.header a[data-v-6af85cd4]:visited{color:#cacaca}',""]),t.exports=o},203:function(t,e,n){"use strict";n(200)},204:function(t,e,n){var o=n(79)(!1);o.push([t.i,'.footer[data-v-4cf0dc03]{font-family:"Russo One","Noto Sans JP";font-weight:700;width:100%;height:5vh;padding-top:1vh;background-color:#000;text-align:center;color:#fff}.footer a[data-v-4cf0dc03],.footer a[data-v-4cf0dc03]:visited{color:#cacaca}',""]),t.exports=o},205:function(t,e,n){"use strict";n.r(e);n(201);var o=n(34),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Playground")])],1)}),[],!1,null,"6af85cd4",null);e.default=component.exports},206:function(t,e,n){"use strict";n.r(e);n(203);var o=n(34),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v("\n  ©\n  "),n("a",{attrs:{href:"https://github.com/hirorocky"}},[t._v("hirorocky")])])}],!1,null,"4cf0dc03",null);e.default=component.exports},208:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("3d113658",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";n(208)},213:function(t,e,n){var o=n(79)(!1);o.push([t.i,'.container[data-v-23d756af]{z-index:-1;margin:0 auto;min-height:100vh;flex-direction:column;justify-content:center;text-align:center;background-image:url(/images/toppage/bg.svg);background-size:cover;font-family:"Russo One","Noto Sans JP";font-weight:700}.container[data-v-23d756af],.content[data-v-23d756af]{display:flex;align-items:center}.content[data-v-23d756af]{flex-grow:5;flex-direction:row;justify-content:flex-end;width:100vw}.content .menu[data-v-23d756af]{margin-right:5vw}.content .menu .menu-content[data-v-23d756af]{margin-left:5vw;font-size:1.3rem}.content .menu .menu-content a[data-v-23d756af],.content .menu .menu-content a[data-v-23d756af]:visited{color:#377775}.content .informations[data-v-23d756af]{border-left:6px solid;font-size:3rem;margin-right:10vw;padding-left:10vw}.content .informations .menu-info[data-v-23d756af]{font-size:1rem}',""]),t.exports=o},217:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{menuContents:[{index:0,to:"/space1",linkText:"1",title:"動物園",detail:"追従するメニューとジャンプ"}],selectedMenuTitle:"",selectedMenuDetail:""}},methods:{changeInfo:function(t){this.selectedMenuTitle=t.title,this.selectedMenuDetail=t.detail}}},c=(n(212),n(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Header"),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"links"},t._l(t.menuContents,(function(e){return n("span",{key:e.index,staticClass:"menu-content",on:{mouseover:function(n){return t.changeInfo(e)}}},[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.linkText))])],1)})),0)]),t._v(" "),n("div",{staticClass:"informations"},[n("div",{staticClass:"title"},[t._v("Playground")]),t._v(" "),n("div",{staticClass:"menu-info"},[n("div",{staticClass:"menu-title"},[t._v(t._s(t.selectedMenuTitle))]),t._v(" "),n("div",{staticClass:"menu-detail"},[t._v(t._s(t.selectedMenuDetail))])])])]),t._v(" "),n("Footer")],1)}),[],!1,null,"23d756af",null);e.default=component.exports;installComponents(component,{Header:n(205).default,Footer:n(206).default})}}]);