import{r as a,B as A,V as l}from"./index-DmrRugRi.js";const T=(o=1,r=10,s="",c,i,p,f)=>{const[g,B]=a.useState([]),[E,y]=a.useState(0),[w,h]=a.useState(!1),u=async()=>{var S,d;const k=localStorage.getItem("authToken"),t=new URLSearchParams;o&&t.append("page_number",o.toString()),r&&t.append("per_page",r.toString()),s&&t.append("search",s),c&&t.append("sort_by",c),i&&t.append("order",i),p&&p.forEach(e=>t.append("company_id",e.toString())),f&&f.forEach(e=>t.append("branch_manager_ids",e.toString())),h(!0);try{const e=await fetch(`${A}/branches?${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}}),n=await e.json();if(!e.ok){l.error(n.message,{position:"top-center"});return}B(((S=n==null?void 0:n.data)==null?void 0:S.result)||[]),y(((d=n==null?void 0:n.data)==null?void 0:d.count)||0)}catch{l.error("An error occurred while fetching data")}finally{h(!1)}};return a.useEffect(()=>{u()},[o,r,s,c,i,p,f]),{branches:g,count:E,loading:w,fetchBranches:u}};export{T as u};
