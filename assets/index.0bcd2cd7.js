import{E,a as b,b as $,o as m,c as V,w as n,d as t,e,f,r as g,g as w,h as C,i as B,j as M,k as v,l as a,t as p,F as h,m as N,n as O}from"./vendor.6e1cab46.js";const P=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function u(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=u(o);fetch(o.href,r)}};P();var F="/assets/logo.5041849f.png",L=(c,l)=>{for(const[u,i]of l)c[u]=i;return c};const H={},I=e("Element Plus"),S=e("Workspace"),A=e("item one"),D=e("item two"),T=e("item three"),j=e("item four"),U=e("item one"),W=e("item two"),q=e("item three"),z=e("Info"),K=e("Orders");function G(c,l){const u=E,i=b,o=$;return m(),V(o,{class:"el-menu-demo",mode:"horizontal"},{default:n(()=>[t(u,{index:"1"},{default:n(()=>[I]),_:1}),t(i,{index:"2"},{title:n(()=>[S]),default:n(()=>[t(u,{index:"2-1"},{default:n(()=>[A]),_:1}),t(u,{index:"2-2"},{default:n(()=>[D]),_:1}),t(u,{index:"2-3"},{default:n(()=>[T]),_:1}),t(i,{index:"2-4"},{title:n(()=>[j]),default:n(()=>[t(u,{index:"2-4-1"},{default:n(()=>[U]),_:1}),t(u,{index:"2-4-2"},{default:n(()=>[W]),_:1}),t(u,{index:"2-4-3"},{default:n(()=>[q]),_:1})]),_:1})]),_:1}),t(u,{index:"3",disabled:""},{default:n(()=>[z]),_:1}),t(u,{index:"4"},{default:n(()=>[K]),_:1})]),_:1})}var J=L(H,[["render",G]]);const Q=a("p",null,[e(" See "),a("a",{href:"https://element-plus.org",target:"_blank"},"element-plus"),e(" for more information. ")],-1),R=e("El Message"),X=a("br",null,null,-1),Y=e("Tag 1"),Z=a("br",null,null,-1),ee=a("p",null,"For example, we can custom primary color to 'green'.",-1),te=a("p",null,[e(" Edit "),a("code",null,"components/HelloWorld.vue"),e(" to test components. ")],-1),ne=a("p",null,[e(" Edit "),a("code",null,"styles/element/var.scss"),e(" to test scss variables. ")],-1),oe=a("p",null,[e(" Full Example: "),a("a",{href:"https://github.com/element-plus/element-plus-vite-starter",target:"_blank"},"element-plus-vite-starter"),e(" | On demand Example: "),a("a",{href:"https://github.com/element-plus/unplugin-element-plus",target:"_blank"},"unplugin-element-plus/examples/vite")],-1),le=f({props:{msg:null},setup(c){const l=g(0),u=g("element-plus"),i="",o=()=>{N.success("Hello")};return(r,s)=>{const _=w,x=C,y=B,k=M;return m(),v(h,null,[a("h1",null,p(c.msg),1),Q,t(_,{onClick:o},{default:n(()=>[R]),_:1}),t(_,{type:"primary",onClick:s[0]||(s[0]=d=>l.value++)},{default:n(()=>[e("count is: "+p(l.value),1)]),_:1}),t(_,{type:"success",onClick:s[1]||(s[1]=d=>l.value++)},{default:n(()=>[e("count is: "+p(l.value),1)]),_:1}),t(_,{type:"warning",onClick:s[2]||(s[2]=d=>l.value++)},{default:n(()=>[e("count is: "+p(l.value),1)]),_:1}),t(_,{type:"danger",onClick:s[3]||(s[3]=d=>l.value++)},{default:n(()=>[e("count is: "+p(l.value),1)]),_:1}),t(_,{type:"info",onClick:s[4]||(s[4]=d=>l.value++)},{default:n(()=>[e("count is: "+p(l.value),1)]),_:1}),X,t(x,{modelValue:u.value,"onUpdate:modelValue":s[5]||(s[5]=d=>u.value=d),style:{width:"200px",margin:"20px"}},null,8,["modelValue"]),t(y,null,{default:n(()=>[Y]),_:1}),Z,t(k,{modelValue:i,"onUpdate:modelValue":s[6]||(s[6]=d=>i=d),type:"date",placeholder:"Pick a day"}),ee,te,ne,oe],64)}}});const se=a("img",{alt:"Vue logo",class:"element-plus-logo",src:F},null,-1),ue=f({setup(c){return(l,u)=>(m(),v(h,null,[t(J),se,t(le,{msg:"Hello Vue 3.0 + Element Plus + Vite"})],64))}});const ae=O(ue);ae.mount("#app");