(this.webpackJsonpcryptracker=this.webpackJsonpcryptracker||[]).push([[0],{21:function(e,c,a){},40:function(e,c,a){},42:function(e,c,a){"use strict";a.r(c);var t=a(2),s=a.n(t),n=a(15),r=a.n(n),i=a(6),l=(a(21),a(16)),o=a.n(l),j=(a(40),a(0)),m=function(e){var c=e.name,a=e.image,t=e.symbol,s=e.price,n=e.volume,r=e.priceChange,i=e.marketcap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:a,alt:"crypto"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:t})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",s.toLocaleString()]}),Object(j.jsxs)("p",{className:"coin-volume",children:["$",n.toLocaleString()]}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(3),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(3),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["$",i.toLocaleString()]})]})]})})};var p=function(){var e=Object(t.useState)([]),c=Object(i.a)(e,2),a=c[0],s=c[1],n=Object(t.useState)(""),r=Object(i.a)(n,2),l=r[0],p=r[1];Object(t.useEffect)((function(){o.a.get(d).then((function(e){s(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",h=a.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Cryptracker"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search Coins...",className:"coin-input",onChange:function(e){p(e.target.value)}})}),Object(j.jsxs)("div",{className:"coin-labels",children:[Object(j.jsx)("h3",{className:"name-label",children:"coin"}),Object(j.jsx)("h3",{className:"price-label",children:"price"}),Object(j.jsx)("h3",{className:"volume-label",children:"volume"}),Object(j.jsx)("h3",{className:"percent-label",children:"+/- 24h"}),Object(j.jsx)("h3",{className:"mktcap-label",children:"market cap"})]})]}),h.map((function(e){return Object(j.jsx)(m,{name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0a095df2.chunk.js.map