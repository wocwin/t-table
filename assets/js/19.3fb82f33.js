(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{463:function(t,e,o){},464:function(t,e,o){"use strict";o(463)},465:function(t,e,o){"use strict";o(251),o(36),o(61),o(96),o(151),o(152),o(97);var l={name:"TTable",props:{table:{type:Object,default:function(){return{}},required:!0},isCopy:{type:Boolean,default:!1},height:{type:Boolean,default:!0},fixHeight:{type:String||Number,default:""},size:{type:Boolean,default:!1},isShowPagination:{type:Boolean,default:!0}},data:function(){return{otherHeight:0,rowData:""}},computed:{columnList:function(){return this.table.column.filter((function(t){return!t.noShowColumn}))},getToolbarBtn:function(){return this.table.toolbar?this.table.toolbar.slice(0,3):[]},getToolbarDown:function(){return 3===this.getToolbarBtn.length?this.table.toolbar.slice(3,this.table.toolbar.length):[]}},mounted:function(){var t=this,e=this.isShow("toolbar")?60:0;this.$nextTick((function(){t.otherHeight=e+60}))},methods:{cellDblclick:function(t,e){var o=this;if(!this.isCopy)return!1;this.$copyText(t[e.property]).then((function(){o.$message.success("已复制")}),(function(){o.$message.error("复制失败")}))},checkIsShow:function(t,e){var o=!1;return e.noshow?(e.noshow.map((function(e){e.isShow="string"==typeof e.val?"isHadVal"===e.val?t.row[e.key]?"true":"false":"true":e.val.includes(t.row[e.key])?"false":"true"})),o=e.noshow.every((function(t){return"true"===t.isShow}))):o=!0,(!e.show||e.show.val.includes(t.row[e.show.key]))&&o},txtChangeColor:function(t){return this.table.changeColor&&t.row[this.table.changeColor.key]===this.table.changeColor.val?this.table.changeColor.txtStyle:""},handlesCurrentChange:function(t){this.$emit("page-change",t)},rowClick:function(t){this.rowData=t,t.selectFlag=!t.selectFlag,t.selectFlag?this.$refs["el-table"].setCurrentRow(t):this.$refs["el-table"].setCurrentRow()},toolbarFun:function(t){this.rowData&&this.rowData.selectFlag?t.fun(this.rowData):this.$message({type:"warning",message:"请选中行"})},isShow:function(t){return Object.keys(this.$slots).includes(t)}}},a=(o(464),o(35)),n=Object(a.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"t-table"},[t.isShow("toolbar")?o("div",{staticClass:"toolbar_top"},[t._t("toolbar"),t._v(" "),o("div",{staticClass:"toolbar"},[t._l(t.getToolbarBtn,(function(e,l){return o("el-button",{key:l,attrs:{icon:e.icon?e.icon:"el-icon-search",type:e.type||"primary",size:"small"},on:{click:function(o){return t.toolbarFun(e)}}},[t._v(t._s(e.text))])})),t._v(" "),t.getToolbarDown.length?o("el-popover",{ref:"popoverClose",staticClass:"operator_popover operator_pop",attrs:{"popper-class":"operator_popover operator_pop",placement:"bottom-start",trigger:"hover"}},[o("ul",{staticClass:"ulClose"},t._l(t.getToolbarDown,(function(e,l){return o("li",{key:l,on:{click:function(o){return t.toolbarFun(e)}}},[t._v(t._s(e.text))])})),0),t._v(" "),o("el-button",{attrs:{slot:"reference",size:"small",type:"primary",icon:"el-icon-setting"},slot:"reference"},[t._v("\n          操作\n          "),o("i",{staticClass:"el-icon-arrow-down"})])],1):t._e()],2)],2):t._e(),t._v(" "),o("el-table",t._g(t._b({ref:"el-table",attrs:{data:t.table.data,height:t.height?t.fixHeight?t.fixHeight:void 0:t.$store.getters.tableHeight-t.otherHeight,border:""},on:{"row-click":t.rowClick,"cell-dblclick":t.cellDblclick}},"el-table",t.$attrs,!1),t.$listeners),[t.table.firstColumn?o("div",["index"!==t.table.firstColumn.type?o("el-table-column",{attrs:{type:t.table.firstColumn.type,width:"50",label:t.table.firstColumn.label,align:"center"}}):t._e(),t._v(" "),"index"===t.table.firstColumn.type?o("el-table-column",{attrs:{type:t.table.firstColumn.type,width:"50","reserve-selection":t.table.firstColumn.isPaging||!1,label:t.table.firstColumn.label,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(t.isShowPagination?(t.table.currentPage-1)*t.table.pageSize+e.$index+1:e.$index+1))])]}}],null,!1,2432994983)}):t._e()],1):t._e(),t._v(" "),t._t("begin"),t._v(" "),t._l(t.columnList,(function(e,l){return o("el-table-column",t._g(t._b({key:l,attrs:{type:e.type,label:e.label,prop:e.prop,"min-width":e["min-width"]||e.minWidth||e.width,sortable:e.sort,align:e.align||"center","show-overflow-tooltip":e.noShowTip},scopedSlots:t._u([{key:"default",fn:function(l){return[e.slotName?[t._t(e.slotName,null,{param:l})]:t._e(),t._v(" "),e.filters||e.slotName?t._e():o("div",{style:{color:t.txtChangeColor(l)}},[t._v(t._s(l.row[e.prop]))]),t._v(" "),e.filters?o("div",{style:{color:t.txtChangeColor(l)}},[e.filters.param?o("span",[t._v(t._s(t._f("constantKey2Value")(l.row[e.prop],e.filters.param)))]):t._e(),t._v(" "),e.filters.param||"￥"!==e.filters.method?t._e():o("span",[t._v(t._s(t._f("currencyFilter")(l.row[e.prop])))]),t._v(" "),e.filters.param||"%"!==e.filters.method?t._e():o("span",[t._v(t._s(t._f("percentFilter")(l.row[e.prop])))])]):t._e()]}}],null,!0)},"el-table-column",t.$attrs,!1),t.$listeners))})),t._v(" "),t._t("default"),t._v(" "),t.table.operator?o("el-table-column",{attrs:{fixed:t.table.operatorConfig&&t.table.operatorConfig.fixed,label:t.table.operatorConfig&&t.table.operatorConfig.label||"操作","min-width":t.table.operatorConfig&&t.table.operatorConfig.width||t.table.operatorConfig.minWidth||100,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.table.operator,(function(l,a){return o("el-button",{directives:[{name:"show",rawName:"v-show",value:t.checkIsShow(e,l),expression:"checkIsShow(scope,item)"}],key:a,attrs:{type:l.type,size:"small"},on:{click:function(t){return l.fun(e.row)}}},[t._v(t._s(l.text))])}))}}],null,!1,820590057)}):t._e(),t._v(" "),t._t("end")],2),t._v(" "),o("el-pagination",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.table.data&&t.table.data.length&&t.isShowPagination,expression:"table.data && table.data.length && isShowPagination"}],attrs:{"current-page":t.table.currentPage,"page-sizes":[10,20,50,100],"page-size":t.table.pageSize,layout:t.size?"total, prev, pager, next":"total, sizes, prev, pager, next, jumper",total:t.table.total,background:""},on:{"current-change":t.handlesCurrentChange}},"el-pagination",t.$attrs,!1),t.$listeners))],1)}),[],!1,null,null,null);e.a=n.exports},602:function(t,e,o){"use strict";o.r(e);var l={components:{TTable:o(465).a},data:function(){return{table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}],column:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"}],toolbar:[{text:"返回上一个页面1",icon:"el-icon-circle-plus-outline",type:"danger",fun:this.getBack},{text:"返回上一个页面2",icon:"el-icon-circle-plus-outline",type:"danger",fun:this.getBack},{text:"返回上一个页面3",icon:"el-icon-circle-plus-outline",type:"danger",fun:this.getBack},{text:"返回上一个页面4",icon:"el-icon-circle-plus-outline",type:"danger",fun:this.getBack}]}}},methods:{getBack:function(t){console.log("选中行返回的数据",t)}}},a=o(35),n=Object(a.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[e("t-table",{attrs:{table:this.table,"highlight-current-row":""},scopedSlots:this._u([{key:"toolbar",fn:function(){},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=n.exports}}]);