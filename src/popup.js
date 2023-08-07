import{_,a as I,r,o as p,c as C,w as n,b as l,d as i,e as L,f,t as k,g as h,h as v,v as b,F,L as U,i as M,p as N,j as R,k as T,l as B,m as z}from"../index.js";const q={name:"Register",data(){return{userInfo:{username:"",usernamePlaceholder:"请输入用户名",email:"",emailPlaceholder:"请输入邮箱",password:"",passwordPlaceholder:"请输入密码",confirmPassword:"",confirmPasswordPlaceholder:"请再次输入密码",phone:"",phonePlaceholder:"请输入手机号",verifyCode:""},btnText:"获取",disabled:!1,validateName:(e,s,u)=>{s.indexOf("@")!=-1?u(new Error('请不要包含"@"符号')):u()}}},mounted(){chrome.storage.local.get("register").then(e=>{Object.keys(e).length!==0&&(this.userInfo.username=e.register.username,this.userInfo.usernamePlaceholder=e.register.username,this.userInfo.email=e.register.email,this.userInfo.emailPlaceholder=e.register.email,this.userInfo.password=e.register.password,this.userInfo.passwordPlaceholder=e.register.password,this.userInfo.confirmPassword=e.register.confirmPassword,this.userInfo.confirmPasswordPlaceholder=e.register.confirmPassword,this.userInfo.phone=e.register.phone,this.userInfo.phonePlaceholder=e.register.phone)})},methods:{doRegister(){console.log({username:this.userInfo.username,email:this.userInfo.email,password:this.userInfo.password,passwordConfirm:this.userInfo.confirmPassword,code:this.userInfo.verifyCode,phone:this.userInfo.phone}),I.post("http://www.note-map.com/user/register",{username:this.userInfo.username,email:this.userInfo.email,password:this.userInfo.password,passwordConfirm:this.userInfo.confirmPassword,code:this.userInfo.verifyCode,phone:this.userInfo.phone}).then(e=>{console.log("输出response.data",e.data),e.data.code===200?(this.$message.success("注册成功！"),chrome.storage.local.remove("register"),this.$emit("registerSuccess","login")):this.$message.error(e.data.message)})},bindforgetSendCode(){I.post("http://www.note-map.com/common/code/email/",{email:this.userInfo.email}).then(e=>{e.data.code===200?(this.$message.success("发送成功！"),chrome.storage.local.set({register:{username:this.userInfo.username,email:this.userInfo.email,password:this.userInfo.password,confirmPassword:this.userInfo.confirmPassword,phone:this.userInfo.phone}}).then(()=>{})):this.$message.error(e.data.message)}),this.disabled=!0,setTimeout(()=>{this.doLoop(60)},500)},doLoop:function(e){e=e||60,this.btnText=e+"s";let s=setInterval(()=>{e>0?(this.btnText=e+"s",--e):(this.btnText="获取",this.disabled=!1,clearInterval(s))},1e3)}}},j={class:"bind_code"};function D(e,s,u,g,o,m){const t=r("el-input"),c=r("el-form-item"),d=r("el-button"),w=r("el-form");return p(),C(w,{class:"demo-ruleForm",model:o.userInfo},{default:n(()=>[l(c,{prop:"username",label:"用 户 名",rules:[{required:!0,message:"用户名不能为空",validator:o.validateName,trigger:"blur"}]},{default:n(()=>[l(t,{size:"small",modelValue:o.userInfo.username,"onUpdate:modelValue":s[0]||(s[0]=a=>o.userInfo.username=a),placeholder:o.userInfo.usernamePlaceholder},null,8,["modelValue","placeholder"])]),_:1},8,["rules"]),l(c,{prop:"email",label:"邮    箱",rules:[{required:!0,type:"email",message:"请输入正确的邮箱",trigger:"blur"}]},{default:n(()=>[l(t,{size:"small",placeholder:o.userInfo.emailPlaceholder,modelValue:o.userInfo.email,"onUpdate:modelValue":s[1]||(s[1]=a=>o.userInfo.email=a)},null,8,["placeholder","modelValue"])]),_:1}),l(c,{prop:"password",label:"密    码",rules:[{required:!0,type:"string",min:6,message:"密码不能小于6位",trigger:"blur"}]},{default:n(()=>[l(t,{size:"small",modelValue:o.userInfo.password,"onUpdate:modelValue":s[2]||(s[2]=a=>o.userInfo.password=a),"show-password":"",placeholder:o.userInfo.passwordPlaceholder},null,8,["modelValue","placeholder"])]),_:1}),l(c,{prop:"confirmPassword",label:"确认密码",rules:[{required:!0,message:"两次输入密码不一致",type:"enum",enum:[this.userInfo.password],trigger:"blur"}]},{default:n(()=>[l(t,{size:"small",modelValue:o.userInfo.confirmPassword,"onUpdate:modelValue":s[3]||(s[3]=a=>o.userInfo.confirmPassword=a),"show-password":"",placeholder:o.userInfo.confirmPasswordPlaceholder},null,8,["modelValue","placeholder"])]),_:1},8,["rules"]),l(c,{label:"  手 机 号"},{default:n(()=>[l(t,{size:"small",modelValue:o.userInfo.phone,"onUpdate:modelValue":s[4]||(s[4]=a=>o.userInfo.phone=a),placeholder:o.userInfo.phonePlaceholder},null,8,["modelValue","placeholder"])]),_:1}),l(c,{prop:"verifyCode",ref:"verifyEmail"},{default:n(()=>[i("div",j,[l(t,{class:"bind_code_input code",modelValue:o.userInfo.verifyCode,"onUpdate:modelValue":s[5]||(s[5]=a=>o.userInfo.verifyCode=a),type:"text",placeholder:"邮箱验证码",size:"small"},null,8,["modelValue"]),l(d,{onClick:L(m.bindforgetSendCode,["prevent"]),class:"codebtn",disabled:o.disabled,size:"small"},{default:n(()=>[f(k(o.btnText),1)]),_:1},8,["onClick","disabled"])])]),_:1},512),l(d,{class:"bottomButton",type:"primary",icon:"",onClick:s[6]||(s[6]=a=>m.doRegister("loginForm"))},{default:n(()=>[f("注册账号")]),_:1})]),_:1},8,["model"])}const O=_(q,[["render",D],["__scopeId","data-v-51a113e9"]]);function A(e,s){return{uuid:function(){return"generate-uuid-4you-seem-professional".replace(/[genratuidyosmpfl]/g,function(u){const g=Math.random()*16|0;return(u==="x"?g:g&3|8).toString(16)})}(),type:e,data:s,timestamp:Date.now()}}const E={data(){return{localConfig:{localStorage:!0,cloudStorage:!1,nodeColor:"#CCFF67",lineColor:"#0099CC"}}},mounted(){chrome.storage.local.get("localConfig").then(e=>{Object.keys(e).length!==0&&(this.localConfig.localStorage=e.localConfig.localStorage,this.localConfig.cloudStorage=e.localConfig.cloudStorage,this.localConfig.nodeColor=e.localConfig.nodeColor,this.localConfig.lineColor=e.localConfig.lineColor)})},watch:{localConfig:{handler(e){chrome.tabs.query({active:!0,currentWindow:!0},s=>{chrome.tabs.sendMessage(s[0].id,A("ChangeLocalConfig",this.localConfig),u=>{console.log(u)})}),chrome.storage.local.set({localConfig:this.localConfig}).then(()=>{})},deep:!0}}},W={class:"grid grid-flow-col grid-rows-5 grid-cols-6 gap-3 place-items-center"},G={class:"row-start-2 col-start-2 col-span-2"},H={class:"row-start-2 col-start-5 col-span-1"},J={class:"row-start-3 col-start-2 col-span-2"},K={class:"row-start-3 col-start-5 col-span-1"},Q={class:"row-start-4 col-start-2 col-span-2"},X={class:"row-start-4 col-start-5 col-span-1"},Y={class:"row-start-5 col-start-2 col-span-2"},Z={class:"row-start-5 col-start-5 col-span-1"};function $(e,s,u,g,o,m){const t=r("el-text"),c=r("el-switch");return p(),h("div",W,[i("div",G,[l(t,null,{default:n(()=>[f("本地存储")]),_:1})]),i("div",H,[l(c,{modelValue:o.localConfig.localStorage,"onUpdate:modelValue":s[0]||(s[0]=d=>o.localConfig.localStorage=d),"active-color":"#93B9F4","inactive-color":"#BDC1C5"},null,8,["modelValue"])]),i("div",J,[l(t,null,{default:n(()=>[f("云 同 步")]),_:1})]),i("div",K,[l(c,{modelValue:o.localConfig.cloudStorage,"onUpdate:modelValue":s[1]||(s[1]=d=>o.localConfig.cloudStorage=d),"active-color":"#93B9F4","inactive-color":"#BDC1C5"},null,8,["modelValue"])]),i("div",Q,[l(t,null,{default:n(()=>[f("节点颜色")]),_:1})]),i("div",X,[v(i("input",{type:"color","onUpdate:modelValue":s[2]||(s[2]=d=>o.localConfig.nodeColor=d),class:"w-10 h-5",id:"kgColor"},null,512),[[b,o.localConfig.nodeColor]])]),i("div",Y,[l(t,null,{default:n(()=>[f("线条颜色")]),_:1})]),i("div",Z,[v(i("input",{type:"color","onUpdate:modelValue":s[3]||(s[3]=d=>o.localConfig.lineColor=d),class:"w-10 h-5",id:"kgColor"},null,512),[[b,o.localConfig.lineColor]])])])}const ee=_(E,[["render",$],["__scopeId","data-v-23a30d43"]]),oe="/icon65.png";const se={name:"Popup",components:{ForgetPassword:F,Login:U,Register:O,UserSetting:ee},data(){return{activeName:"login",LoginMain:"showLogin"}},mounted(){chrome.storage.local.get("userInfo").then(e=>{Object.keys(e).length!==0&&(console.log("已登陆"),this.showLoginSucess())})},methods:{showForgetPassword(){this.LoginMain="showForgetPassword"},registerSuccess(e){this.activeName=e},showLoginSucess(){console.log("showSuccess"),this.LoginMain="showSuccess"},changeShowLogin(){this.LoginMain="showLogin"}}},le=e=>(N("data-v-b3bbb106"),e=e(),R(),e),ne={class:"login-demo"},re=le(()=>i("div",{class:"icon"},[i("img",{src:oe})],-1)),te={key:0};function ae(e,s,u,g,o,m){const t=r("Login"),c=r("el-tab-pane"),d=r("Register"),w=r("el-tabs"),a=r("ForgetPassword"),P=r("el-divider"),S=r("UserSetting"),y=r("el-text"),V=r("el-row");return p(),h("div",ne,[l(V,{type:"flex",justify:"center"},{default:n(()=>[re,o.LoginMain=="showLogin"?(p(),h("div",te,[l(w,{stretch:!0,modelValue:o.activeName,"onUpdate:modelValue":s[0]||(s[0]=x=>o.activeName=x),onTabClick:e.handleClick},{default:n(()=>[l(c,{label:"登录",name:"login"},{default:n(()=>[l(t,{onShowForgetPassword:m.showForgetPassword,onShowLoginSucess:m.showLoginSucess},null,8,["onShowForgetPassword","onShowLoginSucess"])]),_:1}),l(c,{label:"注册",name:"register"},{default:n(()=>[l(d,{onRegisterSuccess:m.registerSuccess},null,8,["onRegisterSuccess"])]),_:1})]),_:1},8,["modelValue","onTabClick"])])):o.LoginMain=="showForgetPassword"?(p(),C(a,{key:1,onChangeShowLogin:m.changeShowLogin,class:"ForgetPassword"},null,8,["onChangeShowLogin"])):o.LoginMain=="showSuccess"?(p(),C(y,{key:2},{default:n(()=>[l(P),l(S,{class:"mt-12"})]),_:1})):M("",!0)]),_:1})])}const ie=_(se,[["render",ae],["__scopeId","data-v-b3bbb106"]]),ce={name:"App",components:{Popup:ie}};function de(e,s,u,g,o,m){const t=r("Popup");return p(),h("div",null,[l(t)])}const ue=_(ce,[["render",de]]);T(ue).use(B).use(z).mount("#app");
