(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{510:function(e,t,n){},511:function(e,t,n){},554:function(e,t,n){"use strict";n(510)},555:function(e,t,n){"use strict";n(511)},581:function(e,t,n){"use strict";n.r(t);var o=n(69),i=(n(155),n(251),{name:"TTimerBtn",props:{second:{type:Number,default:60}},data:function(){return{time:0,disabled:!1}},computed:{text:function(){return this.time>0?"".concat(this.time,"s 后重获取"):"获取验证码"}},methods:{run:function(){this.$emit("click")},start:function(){this.time=this.second,this.disabled=!0,this.timer()},timer:function(){this.time>0?(this.time--,setTimeout(this.timer,1e3)):this.disabled=!1}}}),s=(n(554),n(35)),l={name:"TPhone",components:{TTimerBtn:Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"timer-btn"},[t("button",{staticClass:"sendSmsBtn",class:this.disabled?"dissendSmsBtn":"",attrs:{type:"button",disabled:this.disabled||this.time>0},on:{click:this.run}},[this._v(this._s(this.text))])])}),[],!1,null,"21db3b6b",null).exports},data:function(){return{remark:"",second:60,phoneDialog:this.phoneVisible,phoneForm:{phone:this.legalPhone,code:""},phoneFormRules:{code:[{required:!0,message:"请输入短信验证码",trigger:"blur"}]}}},props:{isApplicationShow:{type:Boolean,default:!0},phoneVisible:{type:Boolean,default:!1},personTxt:{type:String},legalPhone:{type:[String,Number]},phoneTitle:{type:String,default:"手机验证"},phoneWidth:{type:String,default:"50%"}},watch:{phoneVisible:function(e){this.phoneDialog=e}},methods:{cancel:function(){this.$emit("update:visible",!1)},handleClose:function(){this.$emit("update:visible",!1)},phoneConfirm:function(){var e=this;this.$refs.phoneForm.validate((function(t){if(!t)return!1;e.phoneDialog=!1,e.$emit("phoneConfirm",e.phoneForm.code)}))},reset:function(){this.$refs.phoneForm.resetFields()},sendCode:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$ajaxRequest("get","sendPhoneVerify",{phone:e.phoneForm.phone});case 2:case"end":return t.stop()}}),t)})))()}}},r=(n(555),{components:{TPhone:Object(s.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-phone"},[n("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{width:e.phoneWidth,title:e.phoneTitle,visible:e.phoneVisible,"before-close":e.handleClose,"append-to-body":"","close-on-click-modal":!1}},[n("el-form",{ref:"phoneForm",attrs:{model:e.phoneForm,rules:e.phoneFormRules,"label-width":"100px"}},[n("div",{staticClass:"el-row form-horizontal"},[e.isApplicationShow?e._e():n("el-form-item",{staticClass:"el-col-lg-12 el-col-md-14 el-col-sm-18 el-col-xs-20",attrs:{label:"手机号"}},[e._v(e._s(e.phoneForm.phone))]),e._v(" "),e.isApplicationShow?n("div",{staticClass:"t-margin-left-15 t-margin-bottom-15",staticStyle:{"white-space":"nowrap"}},[e._v("短信验证码将发送到贵司"+e._s(e.personTxt)+"手机号："+e._s(e.phoneForm.phone))]):e._e()],1),e._v(" "),n("div",{staticClass:"el-row form-horizontal"},[n("el-form-item",{staticClass:"el-col-lg-16 el-col-md-18 el-col-sm-22 el-col-xs-24 sms-code",attrs:{label:"短信验证码",prop:"code"}},[n("el-input",{directives:[{name:"number",rawName:"v-number"}],attrs:{type:"text",maxlength:"6",clearable:""},model:{value:e.phoneForm.code,callback:function(t){e.$set(e.phoneForm,"code",t)},expression:"phoneForm.code"}}),e._v(" "),n("t-timer-btn",{staticClass:"timer",attrs:{second:e.second},on:{click:e.sendCode}})],1)],1)]),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"danger"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.phoneConfirm}},[e._v("确定")])],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{phoneVisible:!1,personTxt:"法人",legalPhone:"13888888888"}},methods:{openDialog:function(){this.phoneVisible=!0},phoneConfirm:function(e){console.log("点击确定按钮",e),this.phoneVisible=!1},phoneHide:function(){this.phoneVisible=!1}}}),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-dialog-demo",staticStyle:{width:"100%","min-height":"100px",padding:"15px"}},[n("el-button",{attrs:{type:"danger"},on:{click:e.openDialog}},[e._v("短信验证弹窗")]),e._v(" "),n("t-phone",{attrs:{phoneVisible:e.phoneVisible,legalPhone:e.legalPhone,personTxt:e.personTxt},on:{"update:visible":e.phoneHide,phoneConfirm:e.phoneConfirm}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);