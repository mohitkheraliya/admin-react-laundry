import{r as n,B as k,V as d}from"./index-gEaxyYvd.js";const L=(r=1,o=10,s="",c,i,p,f)=>{const[B,g]=n.useState([]),[E,y]=n.useState(0),[w,h]=n.useState(!1),u=async()=>{var l,S;const T=localStorage.getItem("authToken"),t=new URLSearchParams;r&&t.append("page_number",r.toString()),o&&t.append("per_page",o.toString()),s&&t.append("search",s),c&&t.append("sort_by",c),i&&t.append("order",i),p&&p.forEach(e=>t.append("company_id",e.toString())),f&&f.forEach(e=>t.append("branch_manager_ids",e.toString())),h(!0);try{const e=await fetch(`${k}/branches?${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${T}`}}),a=await e.json();if(!e.ok){d.error(a.message,{position:"top-center"});return}g(((l=a==null?void 0:a.data)==null?void 0:l.result)||[]),y(((S=a==null?void 0:a.data)==null?void 0:S.count)||0)}catch{d.error("An error occurred while fetching data")}finally{h(!1)}};return n.useEffect(()=>{u()},[r,o,s,c,i,p,f]),{branches:B,totalBranches:E,loading:w,fetchBranches:u}};export{L as u};
