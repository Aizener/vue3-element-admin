(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff4144d4"],{"62e3":function(e,t,n){"use strict";n("d6e9")},c23a:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=Object(o["hb"])("data-v-1d2f456d");Object(o["I"])("data-v-1d2f456d");const a={class:"permission"},d={class:"switch"},l=Object(o["n"])(" 切换权限： "),r=Object(o["n"])("管理员"),i=Object(o["n"])("普通");Object(o["G"])();const s=c((e,t,n,s,u,b)=>{const j=Object(o["O"])("el-radio-button"),O=Object(o["O"])("el-radio-group");return Object(o["F"])(),Object(o["k"])("div",a,[Object(o["o"])("p",null,"您的角色是："+Object(o["S"])(s.userInfo.role),1),Object(o["o"])("div",d,[l,Object(o["o"])(O,{modelValue:s.role,"onUpdate:modelValue":t[1]||(t[1]=e=>s.role=e),onChange:s.handleChange},{default:c(()=>[Object(o["o"])(j,{label:"admin"},{default:c(()=>[r]),_:1}),Object(o["o"])(j,{label:"visitor"},{default:c(()=>[i]),_:1})]),_:1},8,["modelValue","onChange"])])])});var u=n("5502"),b=n("6c02"),j={setup:function(){var e=Object(u["b"])(),t=(Object(b["d"])(),Object(o["V"])(e.state.user).userInfo),n=Object(o["K"])(t.value.role),c={admin:"abcdefghijklmnopqrstuvwxyz0",visitor:"abcdefghijklmnopqrstuvwxyz1"},a=function(t){e.dispatch("user/login",{token:c[t]}).then((function(){location.href=location.origin}))};return{handleChange:a,userInfo:t,role:n}}};n("62e3");j.render=s,j.__scopeId="data-v-1d2f456d";t["default"]=j},d6e9:function(e,t,n){}}]);
//# sourceMappingURL=chunk-ff4144d4.0eca34ea.js.map