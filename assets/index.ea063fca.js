import{j as c,r as s,C as d,R as u,a as g}from"./vendor.25f781da.js";const f=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};f();const r=c.exports.jsx,p=c.exports.jsxs,h={sankey:{node:{label:{fontName:"sans-serif",fontSize:16,color:"#222",bold:!0,italic:!1}}}},S=`Brazil,Portugal,5
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
`,m=["From","To","Weight",{type:"string",role:"style"}];function A(t){return[m,...t.trim().split(`
`).map(a=>a.split(/(?:,|\t)/)).map(a=>{var o;return[a[0],a[1],parseFloat(a[2]),((o=a[3])==null?void 0:o.toLowerCase())==="true"?"color: red":""]})]}function M(){const[t,a]=s.exports.useState(S),o=A(t);return p("div",{children:[r("div",{children:r("textarea",{style:{width:640,height:"4em"},value:t,onChange:i=>a(i.currentTarget.value)})}),r(d,{chartType:"Sankey",width:"100%",height:"640px",data:o,options:h})]})}u.render(r(g.StrictMode,{children:r(M,{})}),document.getElementById("root"));
