import{r as a,_ as S}from"./index-CpbQmQIK.js";const $="http://3.110.208.70:3000/branches",A=(o=1,r=10,s="",c,i,p,f)=>{const[B,g]=a.useState([]),[E,y]=a.useState(0),[T,h]=a.useState(!1),u=async()=>{var l,d;const w=localStorage.getItem("authToken"),t=new URLSearchParams;o&&t.append("page_number",o.toString()),r&&t.append("per_page",r.toString()),s&&t.append("search",s),c&&t.append("sortBy",c),i&&t.append("order",i),p&&p.forEach(e=>t.append("company_id",e.toString())),f&&f.forEach(e=>t.append("branch_manager_id",e.toString())),h(!0);try{const e=await fetch(`${$}?${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`}}),n=await e.json();if(!e.ok){S.error(n.message,{position:"top-center"});return}g(((l=n==null?void 0:n.data)==null?void 0:l.result)||[]),y(((d=n==null?void 0:n.data)==null?void 0:d.count)||0)}catch{S.error("An error occurred while fetching data")}finally{h(!1)}};return a.useEffect(()=>{u()},[o,r,s,c,i,p,f]),{branches:B,totalBranches:E,loading:T,fetchBranches:u}};export{A as u};
