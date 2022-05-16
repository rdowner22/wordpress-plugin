(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0d9c28"],{"0032":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:["idx-wp-icon","idx-wp-icon-"+t.icon,{"idx-wp-icon-spin":t.spin}],attrs:{role:"image","aria-hidden":"true",focusable:"false"}},[n("use",{attrs:{"xlink:href":"#"+t.icon}})])},i=[],s={name:"SvgIcon",props:{icon:{type:String,required:!0},spin:{type:Boolean,default:!1}}},o=s,c=(n("a4aa"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);e["a"]=r.exports},"20f5":function(t,e,n){"use strict";n("f90a")},"33ff":function(t,e,n){},"561d":function(t,e,n){},6113:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("idx-block",{attrs:{className:"section"}},[t.enabled&&t.isValid?[n("h2",[t._v("Import Agents")]),n("Tabbed",t._b({},"Tabbed",t.$props,!1))]:[n("feedback",{attrs:{title:t.title,link:t.link,content:t.content,missingAPI:!t.isValid}})]],2)},i=[],s=(n("a4d3"),n("e01a"),n("96cf"),n("1da1")),o=n("5530"),c=n("2f62"),r=n("12e8"),u=n("7d16"),l=n("ab97"),d=n("7c0b"),b={name:"import-idx-agents-container",mixins:[u["a"]],inject:[r["a"].importContent.repo],components:{Tabbed:l["a"],Feedback:d["a"]},watch:{enabled:function(){this.loadAgents()}},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])({enabled:function(t){return t.agentSettings.enabled},isValid:function(t){return t.general.isValid}})),{},{title:function(){return this.isValid?"Impress Agents is Disabled":"API Key Required"},link:function(){return"/settings/agents"},content:function(){return{startingStatement:"To import agents, you need to",warningLink:"enable IMPress Agents",closingStatement:"and ensure that your API key is active"}}}),methods:{loadAgents:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.enabled||!t.isValid){e.next=8;break}return t.$store.dispatch("".concat(t.module,"/setItem"),{key:"mainLoading",value:!0}),e.next=4,t.importContentRepository.get("agents");case 4:n=e.sent,a=n.data,t.$store.dispatch("".concat(t.module,"/setItem"),{key:"agents",value:a}),t.$store.dispatch("".concat(t.module,"/setItem"),{key:"mainLoading",value:!1});case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadAgents()},created:function(){this.module="importContent",this.description="Select the agents to import from IDX Broker"}},f=b,p=(n("74cc"),n("2877")),m=Object(p["a"])(f,a,i,!1,null,null,null);e["default"]=m.exports},"74cc":function(t,e,n){"use strict";n("8ee2")},"7c0b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("idx-block",{attrs:{className:"feedback"}},[n("idx-block",{attrs:{className:"feedback__icon"}},[n("svg-icon",{attrs:{icon:"exclamation-triangle"}})],1),n("idx-block",{attrs:{tag:"h3",className:"feedback__title"}},[t._v(t._s(t.title))]),t.missingAPI?n("span",[t._v(" "+t._s(t.content.startingStatement)+" "),n("idx-block",{attrs:{className:"warning__link",tag:"span",tabindex:"0",role:"link"},on:{click:t.showThem}},[t._v(" connect IMPress for IDX Broker ")]),n("br"),t._v(" to your IDX Broker account by adding your API key ")],1):n("span",[t._v(" "+t._s(t.content.startingStatement)+" "),n("idx-block",{attrs:{className:"warning__link",tag:"span",tabindex:"0",role:"link"},on:{click:t.showThem}},[t._v(" "+t._s(t.content.warningLink)+" ")]),n("br"),t._v(" "+t._s(t.content.closingStatement)+" ")],1),n("idx-button",{attrs:{tag:"a",customClass:"feedback__action",outline:""},on:{click:t.showThem}},[t._v("Show Me")])],1)},i=[],s=(n("9911"),n("0032")),o={name:"import-feedback",components:{SvgIcon:s["a"]},props:{title:{type:String,default:""},link:{type:String,default:""},content:{type:Object,default:function(){}},missingAPI:{type:Boolean,default:!1}},methods:{showThem:function(){var t=this.missingAPI?"/settings/general":this.link;this.$router.push({path:t})}}},c=o,r=(n("20f5"),n("2877")),u=Object(r["a"])(c,a,i,!1,null,"34e2e610",null);e["a"]=u.exports},"7d16":function(t,e,n){"use strict";n("99af"),n("4160"),n("d81d"),n("159b");e["a"]={props:{parentRoute:{type:String,required:!0},tabbedRoutes:{type:Array,default:function(){return[]}}},computed:{tabs:function(){return this.tabbedRoutes.map((function(t){return t.label}))},activeTab:function(){var t=this,e=this.$route.fullPath,n=0;return this.tabbedRoutes.forEach((function(a,i){"".concat(t.parentRoute,"/").concat(a.path)===e&&(n=i)})),n}},methods:{switchTab:function(t){if(t!==this.activeTab){var e=this.tabbedRoutes[t].path;this.$router.push("".concat(this.parentRoute,"/").concat(e))}}}}},"8ee2":function(t,e,n){},a4aa:function(t,e,n){"use strict";n("33ff")},ab97:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("idx-tab-container",{attrs:{customClass:"import-header",activeTab:t.activeTab,tabs:t.tabs},on:{activeTab:t.switchTab}},[n("router-view")],1)},i=[],s=n("7d16"),o={name:"tabbed",mixins:[s["a"]]},c=o,r=(n("dd00"),n("2877")),u=Object(r["a"])(c,a,i,!1,null,null,null);e["a"]=u.exports},dd00:function(t,e,n){"use strict";n("561d")},f90a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6e0d9c28.13f744ad.js.map