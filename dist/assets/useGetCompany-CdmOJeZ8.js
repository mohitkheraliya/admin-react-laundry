import{r as s,V as c}from"./index-DgqFhqzz.js";const y=()=>{const[i,e]=s.useState(!1),[l,r]=s.useState(null);return{company:l,loading:i,fetchCompany:async a=>{var n;if(!a){r(null);return}const p=localStorage.getItem("authToken"),u=`http://3.110.208.70:3000/companies/${a}`;e(!0);try{const t=await fetch(u,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`}});if(!t.ok){const f=await t.json();c.error(f.message,{position:"top-center"}),e(!1);return}const o=await t.json();r((n=o==null?void 0:o.data)==null?void 0:n.result)}catch{c.error("Network error: Failed to fetch.")}finally{e(!1)}}}};export{y as u};
