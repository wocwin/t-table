(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{472:function(t,e,i){},473:function(t,e,i){},481:function(t,e,i){"use strict";i(472)},482:function(t,e,i){"use strict";i(473)},486:function(t,e,i){"use strict";i(151),i(152),i(97);var n=i(477),r=(i(36),i(99),i(253),i(476),i(98),i(252),i(37),i(467),i(516)),a=i.n(r),s=i(517),o={name:"TBreadcrumb",computed:Object(n.a)({},Object(s.a)(["permissionRoutes"])),data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{findPathByLeafId:function(t,e,i){void 0===i&&(i={}),void 0===e&&(e=[]);for(var n=0;n<e.length;n++){var r=i;if(t===e[n].path)return r=e[n];if(e[n].children){var a=this.findPathByLeafId(t,e[n].children,r);if(a)return a}}},getBreadcrumb:function(){var t=this,e=this.$route.matched.filter((function(t){return t&&t.name})),i=e?e[0]:{};this.isDashboard(i)||(e=[{path:"/home",name:"首页",meta:{title:"首页"}}].concat(e));var n=e.find((function(t){return t.meta&&t.meta.parent}));if(n&&n.meta.parent)if(-1!==n.meta.parent.indexOf("/"))n.meta.parent.split("/").forEach((function(i){var n=t.findPathByLeafId(i,t.permissionRoutes);n&&e.splice(e.length-1,0,n)}));else{var r=this.findPathByLeafId(n.meta.parent,this.permissionRoutes);r&&e.splice(e.length-1,0,r)}this.levelList=e.filter((function(t){return t&&t.name&&!1!==t.meta.breadcrumb}))},isDashboard:function(t){var e=t&&t.name;return!!e&&"首页"===e},pathCompile:function(t){var e=this.$route.params;return a.a.compile(t)(e)},handleLink:function(t){var e=t.redirect,i=t.path;if(this.$route.path!==e){if(e)return void this.$router.push(e);this.$router.push(this.pathCompile(i))}}}},l=(i(481),i(35)),c={name:"TLayout",components:{TBreadcrumb:Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[i("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.levelList,(function(e,n){return i("el-breadcrumb-item",{key:e.path},["noRedirect"===e.redirect||n==t.levelList.length-1?i("span",{staticClass:"no-redirect"},[t._v(t._s(e.name))]):i("a",{on:{click:function(i){return i.preventDefault(),t.handleLink(e)}}},[t._v(t._s(e.name))])])})),1)],1)}),[],!1,null,"d7ad4998",null).exports},props:{isShowTitle:{type:Boolean,default:!1},returnBtn:{type:Boolean,default:!1},isShowFooter:{type:Boolean,default:!0}},computed:{sectionTitleHeight:function(){return this.isShowTitle?50:0}},watch:{},mounted:function(){var t=this.isShow("fixBtn")?40:0;this.$refs.section.style.height=window.innerHeight-113+"px",this.$refs.layoutContent.style.height=window.innerHeight-166+"px",this.$refs.layoutContent.children[0].style.minHeight=window.innerHeight-185-t-this.sectionTitleHeight+"px";var e=this;window.onresize=function(){e.$refs.section.style.height=window.innerHeight-113+"px",e.$refs.layoutContent.style.height=window.innerHeight-166+"px",e.$refs.layoutContent.children[0].style.minHeight=window.innerHeight-185-t-e.sectionTitleHeight+"px"},e.$on("hook:beforeDestroy",(function(){window.onresize=null}))},methods:{isShow:function(t){return Object.keys(this.$slots).includes(t)}}},u=(i(482),Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"i_layout"},[i("div",{ref:"section",staticClass:"section"},[t.isShowTitle?i("header",{staticClass:"sectionTitle"},[i("t-breadcrumb"),t._v(" "),i("div",{on:{click:function(e){return t.$emit("click")}}},[t.returnBtn?i("el-button",{attrs:{plain:"",size:"small"}},[t._v("返回")]):t._e(),t._v(" "),t._t("head-right")],2)],1):t._e(),t._v(" "),i("div",{ref:"layoutContent",staticClass:"layout-content"},[t._t("default"),t._v(" "),i("div",{staticClass:"flex-box flex-ver fix-btn"},[t._t("fixBtn")],2),t._v(" "),t.isShowFooter?i("div",{staticClass:"footer"},[i("div",[t._v("**************有限公司版权所有 粤ICP备**********号-2")]),t._v(" "),i("div",{staticClass:"t-margin-top-5"},[t._v("©2017-2023 JIANDANH INFORMATION TECH (GUANGZHOU) CO., LTD All Rights Reserved.")])]):t._e()],2)])])}),[],!1,null,"35957258",null));e.a=u.exports},595:function(t,e,i){"use strict";i.r(e);var n={components:{TLayout:i(486).a}},r=i(35),a=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-layout-demo",staticStyle:{width:"100%"}},[e("t-layout",{attrs:{sectionTitle:"我的用款/用款详情",returnBtn:""}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);