(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-226d4270"],{"155d":function(e,t,n){"use strict";n("3963")},3963:function(e,t,n){},c23a:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o=Object(c["hb"])("data-v-2e5ee5c7");Object(c["I"])("data-v-2e5ee5c7");const a={class:"permission"},s={class:"switch"},u=Object(c["n"])(" 切换权限： "),l=Object(c["n"])("管理员"),d=Object(c["n"])("普通");Object(c["G"])();const r=o((e,t,n,r,b,i)=>{const j=Object(c["O"])("el-radio-button"),O=Object(c["O"])("el-radio-group");return Object(c["F"])(),Object(c["k"])("div",a,[Object(c["o"])("p",null,"您的角色是："+Object(c["S"])(r.userInfo.role),1),Object(c["o"])("div",s,[u,Object(c["o"])(O,{modelValue:r.role,"onUpdate:modelValue":t[1]||(t[1]=e=>r.role=e),onChange:r.handleChange},{default:o(()=>[Object(c["o"])(j,{label:"admin"},{default:o(()=>[l]),_:1}),Object(c["o"])(j,{label:"visitor"},{default:o(()=>[d]),_:1})]),_:1},8,["modelValue","onChange"])])])});var b=n("5502"),i=n("6c02"),j={setup:function(){var e=Object(b["b"])(),t=Object(i["d"])(),n=Object(c["V"])(e.state.user).userInfo,o=Object(c["K"])(n.value.role),a={admin:"abcdefghijklmnopqrstuvwxyz0",visitor:"abcdefghijklmnopqrstuvwxyz1"},s=function(n){e.dispatch("user/login",{token:a[n]}).then((function(){t.push({path:"/"})}))};return{handleChange:s,userInfo:n,role:o}}};n("155d");j.render=r,j.__scopeId="data-v-2e5ee5c7";t["default"]=j}}]);
//# sourceMappingURL=chunk-226d4270.7446a148.js.map