import{r as n,n as d}from"./index-jKd1kMjl.js";const k="http://35.154.167.170:3000/admin/coupon",$=(s,a,p="",r,c)=>{const[h,C]=n.useState([]),[S,i]=n.useState(!1),[g,m]=n.useState(0),u=async()=>{var f,l;const y=localStorage.getItem("authToken"),o=new URLSearchParams;s&&o.append("page_number",s.toString()),a&&o.append("per_page",a.toString()),p&&o.append("search",p),r&&o.append("sort_by",r),c&&o.append("order",c),i(!0);try{const t=await fetch(`${k}?${o}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${y}`}});if(!t.ok){const _=await t.json();d.error(_.message,{position:"top-center"});return}const e=await t.json(),w=((f=e==null?void 0:e.data)==null?void 0:f.result)||[],T=((l=e==null?void 0:e.data)==null?void 0:l.count)||0;C(w),m(T)}catch(t){d.error((t==null?void 0:t.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{i(!1)}};return n.useEffect(()=>{u()},[s,a,p,r,c]),{coupons:h,totalCoupons:g,loading:S,fetchCoupons:u}};export{$ as u};