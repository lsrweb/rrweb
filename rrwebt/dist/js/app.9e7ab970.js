(function(e){function t(t){for(var o,l,s=t[0],i=t[1],c=t[2],p=0,d=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(o=!1)}o&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},a={app:0},n=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2647:function(e,t,r){"use strict";r("3284")},3284:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("index",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("div",{staticClass:"interaction rr-block"},[e.showReplay?e._e():t("el-button",{attrs:{type:"primary"},on:{click:e.record}},[e._v("录制")]),e.showReplay?e._e():t("el-button",{attrs:{type:"success"},on:{click:e.replay}},[e._v("回放")]),e.showReplay?t("el-button",{attrs:{type:"warning"},on:{click:e.reset}},[e._v("返回演示")]):e._e(),t("el-button",{attrs:{type:"info"},on:{click:e.getAXIOSdata}},[e._v("获取接口数据")])],1),e.showReplay?e._e():t("div",[t("div",{staticClass:"form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.woc,expression:"form.woc"}],attrs:{type:"text",placeholder:"woc"},domProps:{value:e.form.woc},on:{input:function(t){t.target.composing||e.$set(e.form,"woc",t.target.value)}}}),t("el-form",{ref:"form",attrs:{rules:e.formRules,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间"}},[t("el-col",{attrs:{span:11,prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11,prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),t("el-form-item",{attrs:{label:"即时配送"}},[t("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("打印表单数据")]),t("el-button",{attrs:{type:"danger"},on:{click:e.logError}},[e._v("手动抛错")])],1)],1)],1)]),t("div",{ref:"replayer"})])},s=[],i=(r("d9e2"),r("14d9"),r("13d5"),r("cee4")),c=r("c1c8");const u=r("db6b");var p={data(){return{eventsMatrix:[[]],showReplay:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formRules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{required:!0,message:"请选择日期",trigger:"change"}],date2:[{required:!0,message:"请选择时间",trigger:"change"}],type:[{required:!0,message:"请选择活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},stopFn:null,requestKey:""}},created(){console.log("created")},methods:{onSubmit(){console.log(JSON.stringify(this.form))},logError(){throw Error("模拟错误")},record(){const e=this;this.stopFn=u.record({checkoutEveryNth:100,emit(t,r){r&&(console.log("重新制作快照",t),e.eventsMatrix.push([])),e.eventsMatrix[e.eventsMatrix.length-1].push(t)},plugins:[u.getRecordConsolePlugin({level:["info","log","warn","error"],lengthThreshold:1e4,stringifyOptions:{stringLengthLimit:1e3,numOfKeysLimit:100,depthOfLimit:1},logger:window.console})]})},async replay(){function e(){return Math.random().toString(36).substring(2)}this.requestKey||(this.requestKey=e());let t=[];for(let r=0;r<this.eventsMatrix.length;r++)for(let e=0;e<this.eventsMatrix[r].length;e++)2==this.eventsMatrix[r][e].type?(await Object(i["a"])({method:"post",url:"http://rrweb.backend.srliforever.ltd/store",data:{event:t.reduce((e,t)=>e.concat(t),[]),key:this.requestKey}}),t=[]):await Object(i["a"])({method:"post",url:"http://rrweb.backend.srliforever.ltd/store",data:{event:this.eventsMatrix[r][e],key:this.requestKey}});if(this.$message.success("录制完成！"),console.log("最近的操作记录: ",JSON.stringify(this.eventsMatrix[this.eventsMatrix.length-1])),this.eventsMatrix[this.eventsMatrix.length-1].length<=0)return this.$message.error("请先点击录制按钮进行录制！");this.stopFn(),this.showReplay=!0,new c["a"]({target:this.$refs.replayer,props:{logConfig:!0,events:this.eventsMatrix.reduce((e,t)=>e.concat(t),[]),plugins:[u.getReplayConsolePlugin({level:["info","log","warn","error"]})]}})},reset(){this.showReplay=!1,location.reload()},async getAXIOSdata(){const e=await Object(i["a"])({method:"post",url:"http://rrweb.backend.srliforever.ltd/retrieve",data:{key:this.requestKey}});let t=e.data.reduce((e,t)=>e.concat(t),[]);console.log(t),this.showReplay=!0,new c["a"]({target:this.$refs.replayer,props:{logConfig:!0,events:t,plugins:[u.getReplayConsolePlugin({level:["info","log","warn","error"]})]}})}}},d=p,f=(r("e356"),r("2877")),m=Object(f["a"])(d,l,s,!1,null,"2756973c",null),g=m.exports,h={name:"App",components:{index:g}},v=h,y=(r("2647"),Object(f["a"])(v,a,n,!1,null,null,null)),b=y.exports,w=r("5c96"),x=r.n(w);r("0fae"),r("5717");o["default"].use(x.a),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(b)}).$mount("#app")},5717:function(e,t,r){},e356:function(e,t,r){"use strict";r("ed69")},ed69:function(e,t,r){}});
//# sourceMappingURL=app.9e7ab970.js.map