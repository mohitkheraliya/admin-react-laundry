import{r as n,v as f}from"./index-Dgee7s5W.js";const _="http://35.154.167.170:3000/admin/coupon",j=(a,s,p="",r,c)=>{const[d,h]=n.useState([]),[C,i]=n.useState(!1),[S,g]=n.useState(0),m=n.useCallback(async()=>{var u,l;const y=localStorage.getItem("authToken"),o=new URLSearchParams;a&&o.append("page_number",a.toString()),s&&o.append("per_page",s.toString()),p&&o.append("search",p),r&&o.append("sort_by",r),c&&o.append("order",c),i(!0);try{const t=await fetch(`${_}?${o}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${y}`}});if(!t.ok){const T=await t.json();f.error(T.message,{position:"top-center"});return}const e=await t.json(),k=((u=e==null?void 0:e.data)==null?void 0:u.result)||[],w=((l=e==null?void 0:e.data)==null?void 0:l.count)||0;h(k),g(w)}catch(t){f.error((t==null?void 0:t.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{i(!1)}},[a,s,c,r,p]);return{coupons:d,totalCoupons:S,loading:C,fetchCoupons:m}};export{j as u};
