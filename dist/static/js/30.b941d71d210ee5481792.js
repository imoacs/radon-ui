webpackJsonp([30,31],{338:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(8),f=[{value:'china',label:'中国',children:[{value:'sichuan',label:'四川',children:[{value:'chegndu',label:'成都'},{value:'deyang',label:'德阳'}]}]},{value:'America',label:'美国',children:[{value:'California',label:'加利福尼亚',children:[{value:'lake',label:'湖'},{value:'Los Angeles',label:'洛杉矶'}]},{value:'Delaware',label:'特拉华',children:[{value:'Dover',label:'多佛'}]}]},{value:'china',label:'中国',children:[{value:'sichuan',label:'四川',children:[{value:'chegndu',label:'成都'},{value:'deyang',label:'德阳'}]}]},{value:'America',label:'美国',children:[{value:'California',label:'加利福尼亚',children:[{value:'lake',label:'湖'},{value:'Los Angeles',label:'洛杉矶'}]},{value:'Delaware',label:'特拉华',children:[{value:'Dover',label:'多佛'}]}]},{value:'china',label:'中国',children:[{value:'sichuan',label:'四川',children:[{value:'chegndu',label:'成都'},{value:'deyang',label:'德阳'}]}]},{value:'America',label:'美国',children:[{value:'California',label:'加利福尼亚',children:[{value:'lake',label:'湖'},{value:'Los Angeles',label:'洛杉矶'}]},{value:'Delaware',label:'特拉华',children:[{value:'Dover',label:'多佛'}]}]}];b.default={data:function(){var h=this;return{textEditVue:{value:'Vuejs',tip:!0},textEditReact:{value:'React',tip:!1},textArea:{value:'',minHeight:100,autoResize:!0,lineHeight:14,input:function(){console.log('textarea is inputing')},change:function(){console.log('textarea is changed')}},number:{value:0,step:0.1,format:2,min:-5,max:10},audio:{title:'ninelie-Aimer',src:'http://covteam.u.qiniudn.com/test2.mp3',poster:'http://covteam.u.qiniudn.com/ka2.jpg',options:{preload:!1,autoplay:!1,rate:1,loop:!1,volume:0.5}},breadcrumb:{separator:'/',list:[{icon:'ion-home',value:'首页',route:{path:'/'}},{icon:'ion-document',value:'订单',route:{path:'/button'}},{value:'订单查询',route:{path:'/form'}}]},TableData:{options:{select:!0,state:!0,editable:!0},columns:[{index:0,key:'id',value:'ID',sort:{state:!1,func:function(k,l){h.sortBy(l)}}},{index:1,key:'name',value:'姓名'},{index:2,key:'age',value:'年龄',sort:{state:!1,func:function(k,l){h.sortBy(l)}}},{index:3,key:'wechat',value:'微信'}],actions:[{type:'button',text:'删除',func:function(k,l){console.log(l),h.removeTableItem(l)}}],tableData:[{id:{value:1,type:'number',editable:!1},name:{value:'王尼玛',type:'text',editable:!0},age:{value:'26',type:'number',editable:!0},wechat:{value:'wangnima',type:'text',editable:!0},state:{type:'success',value:'批准'},checkbox:{disabled:!1,checked:!1,text:''}},{id:{value:2,type:'number',editable:!1},name:{value:'赵铁柱',type:'text',editable:!0},age:{value:'26',type:'number',editable:!0},wechat:{value:'Iron-column-zhao',type:'text',editable:!0},state:{type:'info',value:'待审'},checkbox:{disabled:!1,checked:!1,text:''}},{id:{value:3,type:'number',editable:!1},name:{value:'张全蛋',type:'text',editable:!0},age:{value:'27',type:'number',editable:!0},wechat:{value:'Michael Jack',type:'text',editable:!0},state:{type:'failed',value:'拒绝'},checkbox:{disabled:!1,checked:!1,text:''}}]},cascader:{options:f,valueArr:[]},timeline:[{icon:'ion-alert-circled',color:'#2db7f5',text:'创建服务现场 2015-09-01'},{color:'#2db7f5',text:'创建服务现场 2015-09-01'},{color:'red',text:'创建服务现场 2015-09-01'}],timePicker:{value:''},datePicker:{value:'',options:{timePicker:!0,format:'YYYY-MM-DD',monthList:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],weekList:['一','二','三','四','五','六','日'],limit:{weekDay:{availables:[1,2,3,4,5,6,0]},customerLimit:function(k){return 1<2*Math.random()}}}},slider:{value:43},switchA:{checked:!1},switchB:{checked:!1,size:'small'},progressCommon:{percent:50,options:{color:'#2db7f5',size:'common',state:'loading'}},progressSmall:{percent:50,options:{color:'#2db7f5',size:'small',state:'loading'}},progressCircle:{percent:50,options:{color:'#2db7f5',size:'small',state:'',format:function(k){return k+'% '}}},radios:[{checked:!1,value:'A'},{checked:!1,value:'B'},{checked:!1,value:'C'},{checked:!1,value:'aa'}],selectCity:{value:{},options:[]},selectProvince:{value:{},options:[{selected:!1,disabled:!1,value:'四川',id:1},{selected:!1,disabled:!1,value:'北京',id:2},{selected:!1,disabled:!1,value:'广东',id:3}]},checkbox:{checked:!1,text:'我已阅读用户协议'},form:{user:{value:'',placeHolder:'input here',title:'用户名:',state:'loading',tip:''},pass:{value:'',placeHolder:'input here',title:'密码:',state:'default',tip:''},bio:{value:'',placeHolder:'input here',title:'验证码:',state:'failed'}}}},computed:{selectCityOptions:function(){return this.selectProvince.value.id?{1:[{selected:!1,disabled:!1,value:'成都',id:1},{selected:!1,disabled:!1,value:'德阳',id:2}],2:[{selected:!1,disabled:!1,value:'海淀',id:2},{selected:!1,disabled:!1,value:'朝阳',id:1}],3:[{selected:!1,disabled:!1,value:'广州',id:2},{selected:!1,disabled:!1,value:'深圳',id:1}]}[this.selectProvince.value.id].slice():[]}},components:{formItem:d.formItem,rdSelect:d.rdSelect,rdButton:d.rdButton,rdButtonGroup:d.rdButtonGroup,rdDropButton:d.rdDropButton,rdUpload:d.rdUpload,rdCheckbox:d.rdCheckbox,rdText:d.rdText,rdTextarea:d.rdTextarea,rdEditText:d.rdEditText,rdTextSelect:d.rdTextSelect,rdRadioGroup:d.rdRadioGroup,rdProgress:d.rdProgress,rdProgressCircle:d.rdProgressCircle,rdCascader:d.rdCascader,rdSwitch:d.rdSwitch,rdSlider:d.rdSlider,rdDatepicker:d.rdDatepicker,rdTooltip:d.rdTooltip,rdTimeline:d.rdTimeline,rdAlert:d.rdAlert,rdTable:d.rdTable,rdTimepicker:d.rdTimepicker,rdSpin:d.rdSpin,rdBreadcrumb:d.rdBreadcrumb,rdAudio:d.rdAudio,rdNumber:d.rdNumber},methods:{editTable:function(h){this.$Notification.success('正在编辑'+h._value[0],'',5000)},removeTableItem:function(h){var j=this;this.TableData.tableData.forEach(function(k){k.id===h.id&&j.TableData.tableData.$remove(k)}),this.$Notification.success('删除'+h._value[0]+'成功','',5000)},notificationAction:function(){this.$Notification.success('2333','233',5000)},userInputing:function(){var h=this;this.form.user.state='loading';var j={0:{state:'loading',tip:'loading?!'},1:{state:'failed',tip:'该用户名已被使用'},2:{state:'success',tip:'该用户名似乎没有被使用'},3:{state:'info',tip:'该用户名已被使用'},4:{state:'warning',tip:'该用户名已被使用'}};setTimeout(function(){var k=Math.floor(4.9*Math.random());h.form.user.state=j[k].state,h.form.user.tip=j[k].tip},2000)},passInputing:function(){6>this.form.pass.value.length?(this.form.pass.state='warning',this.form.pass.tip='请输入数字和字母'):(this.form.pass.state='default',this.form.pass.tip='')},failed:function(h){this.$Modal.create('网络错误','无法连接到服务器',function(){h.state='default',console.log('confirmed')},function(){console.log('canceled')})},startProgress:function(h){h.percent=0,h.options.state='';var j=setInterval(function(){100>h.percent?h.percent++:(h.options.state=1>2*Math.random()?'failed':'success',clearInterval(j))},50)}}}},405:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.form {\n    max-width: 540px;\n}\n.img-min {\n    width: 10rem;\n}\n','',{version:3,sources:['/./docs/views/form.vue'],names:[],mappings:';AACA;IACI,iBAAiB;CACpB;AACD;IACI,aAAa;CAChB',file:'form.vue',sourcesContent:['\n.form {\n    max-width: 540px;\n}\n.img-min {\n    width: 10rem;\n}\n'],sourceRoot:'webpack://'}])},412:function(a,b,c){var d=c(405);'string'==typeof d&&(d=[[a.id,d,'']]);var f=c(10)(d,{});d.locals&&(a.exports=d.locals)},587:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n<div>\n    <rd-button @click="notificationAction"><rd-tooltip>点我触发notification</rd-tooltip>默认按钮</rd-button>\n    <rd-button type="primary">按钮</rd-button>\n    <rd-button type="ghost" size="large">large</rd-button>\n    <rd-button type="ghost">common</rd-button>\n    <rd-button type="ghost" size="small">small</rd-button>\n    <rd-button type="ghost" :loading="true">save</rd-button>\n    <rd-button type="icon"><i class="ion-upload"></i></rd-button>\n    <rd-button-group>\n        <rd-button type="ghost">common</rd-button>\n        <rd-button type="ghost">common</rd-button>\n        <rd-button type="ghost">common</rd-button>\n    </rd-button-group>\n    <rd-drop-button text="2333">\n        <rd-button type="ghost" @click="notificationAction">common</rd-button>\n        <rd-button type="ghost" @click="notificationAction">common</rd-button>\n    </rd-drop-button>\n    <rd-drop-button text="2333">\n        <rd-button type="ghost" @click="notificationAction">common</rd-button>\n        <rd-button type="ghost" @click="notificationAction">common</rd-button>\n    </rd-drop-button>\n    <rd-drop-button text="2333" type="primary">\n        <rd-button type="ghost" @click="notificationAction">common</rd-button>\n        <rd-button type="ghost" @click="notificationAction">common</rd-button>\n    </rd-drop-button>\n    <p>\n        <rd-upload></rd-upload>\n    </p>\n    <p>\n        <!-- <rd-text-select></rd-text-select> -->\n    </p>\n    <p>\n        相信大多数前端开发人员，都使用过Angular、<rd-edit-text :value="textEditReact"></rd-edit-text>或者<rd-edit-text :value="textEditVue"></rd-edit-text>。他们都通过数据绑定的方法，提升了开发效率。\n    </p>\n    <form class="form">\n        <form-item title="2333:">\n            <rd-text :textfield="form.user"></rd-text>\n        </form-item>\n        <form-item title="username:">\n            <rd-text :textfield="form.user" :input="userInputing"></rd-text>\n        </form-item>\n        <form-item title="password:">\n            <rd-text :textfield="form.pass" :input="passInputing" type="password"></rd-text>\n        </form-item>\n        <form-item title="verify:">\n            <rd-text @click="failed(form.bio)" :textfield="form.bio"></rd-text>\n        </form-item>\n        <form-item title="agree:">\n            <rd-checkbox :checkbox="checkbox"></rd-checkbox>\n            <rd-checkbox :checkbox="checkbox"></rd-checkbox>\n        </form-item>\n        <form-item title="sex:">\n            <rd-radio-group :radios="radios"></rd-radio-group>\n        </form-item>\n        <form-item title="load:">\n            <rd-progress @click="startProgress(progressCommon)" :progress="progressCommon"></rd-progress>\n        </form-item>\n        <form-item title="sex:">\n            <rd-progress @click="startProgress(progressSmall)" :progress="progressSmall"></rd-progress>\n        </form-item>\n        <div>\n            <rd-progress-circle @click="startProgress(progressCircle)" :progress="progressCircle"></rd-progress-circle>\n        </div>\n        <div>\n            <rd-select :select="selectProvince"></rd-select>\n            <rd-select :select="selectCity"></rd-select>\n\n        </div>\n        <form-item title="address:">\n            <rd-cascader :cascader="cascader"></rd-cascader>\n        </form-item>\n        <form-item title="address:">\n            <rd-switch :value="switchA"></rd-switch>\n            <rd-switch :value="switchB"></rd-switch>\n        </form-item>\n        <form-item title="price:">\n            <rd-slider :slider="slider"></rd-slider>\n            <rd-timeline :timeline="timeline"></rd-timeline>\n        </form-item>\n        <form-item title="出发时间:">\n            <rd-datepicker :date="datePicker"></rd-datepicker>\n            <rd-timepicker :time-picker="timePicker"></rd-timepicker>\n            <rd-alert></rd-alert>\n        </form-item>\n        <div>\n            <!-- <rd-table :table="TableData"></rd-table> -->\n        </div>\n        <p>\n            <rd-spin></rd-spin>\n            <rd-spin color="red"></rd-spin>\n        </p>\n        <p>\n            <span>233333333<rd-tooltip>这里是tooltip</rd-tooltip></span>\n            <span>啊啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span>\n            <span>按时打算发生的<rd-tooltip>这里是tooltip</td-tooltip></span>\n            <span>啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span>\n        </p>\n        <p>\n            <rd-breadcrumb :breadcrumb="breadcrumb.list" separator="/"></rd-breadcrumb>\n        </p>\n\n    </form>\n    <p>\n        <rd-number :number="number"></rd-number>\n    </p>\n    <p>\n        <rd-audio :audio="audio"></rd-audio>\n    </p>\n    <p>\n        <rd-textarea\n            :textfield="textArea"\n        ></rd-textarea>\n    </p>\n    <p>\n        <img class="img-min" v-preview="\'http:\\/\\/covteam.u.qiniudn.com/ka2.jpg\'" src="http://covteam.u.qiniudn.com/ka2.jpg" alt="">\n    </p>\n    <p>\n        <img class="img-min" v-preview="\'http:\\/\\/covteam.u.qiniudn.com/poster.png\'" src="http://covteam.u.qiniudn.com/poster.png" alt="">\n    </p>\n</div>\n'},621:function(a,b,c){var d,f;c(412),d=c(338),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/form.vue: named exports in *.vue files are ignored.'),f=c(587),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default),f&&(('function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=f)}});