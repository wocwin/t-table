(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{471:function(e,t,i){},479:function(e,t,i){"use strict";i(471)},488:function(e,t,i){"use strict";var s=i(69),l=(i(155),i(251),i(99),i(61),i(513),i(11),i(18),i(23),i(96),i(98),i(467),{name:"TUploadFile",data:function(){return{loading:!1,startTime:"",endTime:"",isImgReg:/.png|.jpg|.jpeg|.PNG|.JPG|.JPEG/,url:"",hideUpload:!1,showAddImg:!0,dialogImageUrl:"",dialogVisible:!1,singleResult:{},showFileList:[],downloadFixedIcons:[{type:0,url:""},{type:1,url:""},{type:2,url:""},{type:3,url:""},{type:4,url:""},{type:5,url:""},{type:6,url:""},{type:7,url:""}]}},props:{group:{type:String,default:"1"},multiple:{type:Boolean,default:!1},limitSize:{type:String,default:"10"},limit:{type:Number,default:100},saveFileType:{type:String,default:"9"},fileType:{type:String,default:".jpg,.jpeg,.bmp,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.txt,.rar,.zip"},savePath:{type:String,default:""},fileUploadAddr:{type:String,default:""},disabled:{type:Boolean,default:!1},fileNameLimit:{type:Number,default:50},editBackFile:{type:Boolean,default:!1},fileIdList:{type:[Array,String],default:function(){return[]}},setKey:{type:String,default:null},isShowTips:{type:Boolean,default:!0},extendTips:{type:String,default:""}},computed:{},mounted:function(){this.editBackFile||this.disabled,this.disabled&&(this.hideUpload=!0)},methods:{uploadCallback:function(e){},uploadRequest:function(e){},beforeUpload:function(e){var t=e.size/1048576>this.limitSize,i=e.name.length>this.fileNameLimit,s=/\s/.test(e.name),l=e.name.slice(e.name.lastIndexOf(".")+1).toLocaleLowerCase(),a=-1===this.fileType.indexOf("."+l);return t&&this.$message.error("上传文件不得大于"+this.limitSize+"MB"),s&&this.$message.error("上传文件名称不得含有空格"),i&&this.$message.error("上传文件名称不得大于"+this.fileNameLimit+"位字符"),a&&this.$message.error("上传文件类型不符合要求"),!(t||i||a||s)},handleSuccess:function(e,t,i){var s={res:this.findIdList(this.showFileList)};this.$emit("uploadSuccess",s,this.setKey)},showDownLoadFile:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var i,s,l,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=[],e.showFileList=[],"string"==typeof e.fileIdList&&""!==e.fileIdList?i.push(e.fileIdList):i=e.fileIdList||[],e.hideUpload=i.length>=e.limit,s=0;case 5:if(!(s<i.length)){t.next=14;break}return t.next=8,e.$ajaxRequest("GETIMAGE","downloadFile",{id:i[s]});case 8:l=t.sent,a=window.URL.createObjectURL(new Blob([l])),e.showFileList.push({id:i[s],url:a,name:l.filename});case 11:s++,t.next=5;break;case 14:case"end":return t.stop()}}),t)})))()},onPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},onPreview4show:function(e){this.dialogImageUrl=e,this.dialogVisible=!0},findIdList:function(e){return e.map((function(e){return e.id}))},onRemove:function(e,t){var i=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var s,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e.id,i.showFileList.forEach((function(e,t){e.id===s&&i.showFileList.splice(t,1)})),l=i.findIdList(i.showFileList),i.$emit("deleteSuccess",{res:l},i.setKey),i.hideUpload=i.showFileList.length>=i.limit;case 6:case"end":return t.stop()}}),t)})))()},downloadFixedIcon:function(e){return/.bmp|.gif/.test(e)?this.downloadFixedIcons[0].url:/.doc|.docx/.test(e)?this.downloadFixedIcons[1].url:/.xls|.xlsx/.test(e)?this.downloadFixedIcons[3].url:/.txt/.test(e)?this.downloadFixedIcons[4].url:/.pdf/.test(e)?this.downloadFixedIcons[5].url:/.zip/.test(e)||/.rar/.test(e)?this.downloadFixedIcons[6].url:void 0},downloadFile:function(e){var t=this;return Object(s.a)(regeneratorRuntime.mark((function i(){var s,l;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$ajaxRequest("DOWNLOAD","downloadFile",{fileId:e});case 2:(s=i.sent).head&&"000000"===s.head.resCode&&((l=document.createElement("a")).style.display="none",l.href=s.data.downloadUrl,l.download=s.data.fileName,document.body.appendChild(l),l.click(),document.body.removeChild(l));case 4:case"end":return i.stop()}}),i)})))()},fileListChange:function(e,t){this.hideUpload=t.length>=this.limit}}}),a=(i(479),i(35)),n=Object(a.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-file-container-outer"},[i("div",{staticClass:"upload-file-container"},[i("el-upload",e._g(e._b({directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],class:{hide:e.hideUpload},attrs:{action:e.savePath,multiple:e.multiple,"list-type":"picture-card","on-change":e.fileListChange,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,"on-preview":e.onPreview,"on-remove":e.onRemove,accept:e.fileType,disabled:e.disabled,limit:e.limit,"http-request":e.uploadRequest,"file-list":e.showFileList},scopedSlots:e._u([{key:"file",fn:function(t){var s=t.file;return i("div",{staticClass:"el-upload-list__item",staticStyle:{position:"relative"}},[e.isImgReg.test(s.name)?i("img",{staticClass:"el-upload-list__item-thumbnail pointer",attrs:{src:s.url,alt:""}}):e._e(),e._v(" "),e.isImgReg.test(s.name)?e._e():i("p",{staticClass:"text-center file-name-style"},[e._v(e._s(s.name))]),e._v(" "),i("span",{staticClass:"el-upload-list__item-actions"},[e.isImgReg.test(s.name)?i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){e.onPreview4show(e.isImgReg.test(s.name)?s.url:e.downloadFixedIcon(s.name))}}},[i("i",{staticClass:"el-icon-zoom-in"})]):e._e(),e._v(" "),i("span",{staticClass:"el-upload-list__item-delete"},[i("i",{staticClass:"el-icon-download"})]),e._v(" "),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.onRemove(s)}}},[i("i",{staticClass:"el-icon-delete"})])])])}}])},"el-upload",e.$attrs,!1),e.$listeners),[i("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),e.isShowTips?i("div",{staticClass:"upload-file-tips"},[i("i",{staticClass:"iconfont jdh-info t-font-size-12 text-primary"}),e._v("\n    仅允许上传类型为"+e._s(e.fileType)+",文件名不超过"+e._s(e.fileNameLimit)+"位，并且不大于"+e._s(e.limitSize)+"MB的文件。\n  ")]):e._e(),e._v(" "),e._t("extendTips")],2)}),[],!1,null,null,null);t.a=n.exports},607:function(e,t,i){"use strict";i.r(t);i(97);var s={components:{TUploadFile:i(488).a},data:function(){return{fmFileList:[],uploadObj:{},checkedList:[{check:!0,type:"001"},{check:!0,type:"002"},{check:!0,type:"003"}]}},methods:{pushUploadItem:function(e,t){console.log(e,t);var i=e.res;this.uploadObj[t]=i,this.uploadObj[t]&&0!==this.uploadObj[t].length||delete this.uploadObj[t];for(var s=[],l=0,a=Object.keys(this.uploadObj);l<a.length;l++){var n=a[l],o={attachmentNo:this.uploadObj[n],attachmentType:n};s.push(o)}this.fmFileList=s}}},l=i(35),a=Object(l.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-file-demo",staticStyle:{"min-height":"100px",width:"100%",padding:"10px"}},e._l(e.checkedList,(function(t){return i("div",{key:t.type},[i("t-upload-file",{attrs:{attachmentType:t.type},on:{uploadSuccess:e.pushUploadItem,deleteSuccess:e.pushUploadItem}})],1)})),0)}),[],!1,null,null,null);t.default=a.exports}}]);