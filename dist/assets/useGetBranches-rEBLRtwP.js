import{r as n,_ as f}from"./index-Cg29fZmV.js";const m="http://35.154.167.170:3000/branches",j=(o=1,s=10,r="",c,i)=>{const[u,d]=n.useState([]),[B,S]=n.useState(0),[g,p]=n.useState(!1),y=n.useCallback(async()=>{var h,l;const _=localStorage.getItem("authToken"),t=new URLSearchParams;o&&t.append("page_number",o.toString()),s&&t.append("per_page",s.toString()),r&&t.append("search",r),c&&t.append("sortBy",c),i&&t.append("order",i),p(!0);try{const a=await fetch(`${m}?${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${_}`}});if(!a.ok){const k=await a.json();f.error(k.message,{position:"top-center"});return}const e=await a.json(),w=((h=e==null?void 0:e.data)==null?void 0:h.result)||[],T=((l=e==null?void 0:e.data)==null?void 0:l.count)||0;d(w),S(T)}catch{f.error("An error occurred while fetching data")}finally{p(!1)}},[o,s,i,c,r]);return{branches:u,totalBranches:B,loading:g,fetchBranches:y}};export{j as u};
