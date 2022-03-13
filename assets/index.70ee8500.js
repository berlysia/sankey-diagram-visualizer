import{r as c,j as d,a as n,_ as s,R as u,b as g}from"./vendor.cd1d746d.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}};f();const p=`Brazil,Portugal,5
Brazil,France,1
Brazil,Spain,1
Brazil,England,1
Canada,Portugal,1
Canada,France,5
Canada,England,1
Mexico,Portugal,1
Mexico,France,1
Mexico,Spain,5
Mexico,England,1
USA,Portugal,1
USA,France,1
USA,Spain,1
USA,England,5
Portugal,Angola,2
Portugal,Senegal,1
Portugal,Morocco,1
Portugal,South Africa,3
France,Angola,1
France,Senegal,3
France,Mali,3
France,Morocco,3
France,South Africa,1
Spain,Senegal,1
Spain,Morocco,3
Spain,South Africa,1
England,Angola,1
England,Senegal,1
England,Morocco,2
England,South Africa,7
South Africa,China,5
South Africa,India,1
South Africa,Japan,3
Angola,China,5
Angola,India,1
Angola,Japan,3
Senegal,China,5
Senegal,India,1
Senegal,Japan,3
Mali,China,5
Mali,India,1
Mali,Japan,3
Morocco,China,5
Morocco,India,1
Morocco,Japan,3
`;function h(i){const r=i.trim().split(`
`).map(e=>e.split(/(?:,|\t)/));return{nodes:r.flatMap(e=>[e[0],e[1]]).reduce((e,t)=>e.includes(t)?e:e.concat(t),[]).map(e=>({id:e})),links:r.map(e=>{var t,o;return{source:e[0],target:e[1],value:parseFloat(e[2]),startColor:((t=e[3])==null?void 0:t.toLowerCase())==="true"?"#f00":void 0,endColor:((o=e[3])==null?void 0:o.toLowerCase())==="true"?"#f00":void 0}})}}function m(){const[i,r]=c.exports.useState(p),e=h(i);return d("div",{children:[n("div",{children:n("textarea",{style:{width:640,height:"4em"},value:i,onChange:t=>r(t.currentTarget.value)})}),n("div",{style:{width:"100%",height:"640px"},children:n(s,{data:e,margin:{top:40,right:160,bottom:40,left:50},align:"justify",colors:{scheme:"category10"},nodeOpacity:1,nodeHoverOthersOpacity:.35,nodeThickness:18,nodeSpacing:24,nodeBorderWidth:0,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},nodeBorderRadius:3,linkOpacity:.5,linkHoverOthersOpacity:.1,linkContract:3,enableLinkGradient:!0,labelPosition:"outside",labelOrientation:"vertical",labelPadding:16,labelTextColor:{from:"color",modifiers:[["darker",1]]},legends:[{anchor:"bottom-right",direction:"column",translateX:130,itemWidth:100,itemHeight:14,itemDirection:"right-to-left",itemsSpacing:2,itemTextColor:"#999",symbolSize:14,effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})})]})}u.render(n(g.StrictMode,{children:n(m,{})}),document.getElementById("root"));
