import{r as a,B as w,c as u}from"./index-D55dg6K9.js";const E=(o=1,s=10,r="",n,i)=>{const[d,h]=a.useState([]),[S,y]=a.useState(0),[m,c]=a.useState(!1),p=async()=>{var f,g;const k=localStorage.getItem("authToken"),t=new URLSearchParams;o&&t.append("page_number",o.toString()),s&&t.append("per_page",s.toString()),r&&t.append("search",r),n&&t.append("sort_by",n),i&&t.append("order",i),c(!0);try{const l=await fetch(`${w}/admin/categories?${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}}),e=await l.json();if(!l.ok){u.error(e.message,{position:"top-center"}),c(!1);return}h(((f=e==null?void 0:e.data)==null?void 0:f.result)||[]),y((g=e==null?void 0:e.data)==null?void 0:g.count)}catch{u.error("Network error: Failed to fetch categories.")}finally{c(!1)}};return a.useEffect(()=>{p()},[o,s,r,n,i]),{categories:d,loading:m,totalCategories:S,fetchCategories:p}};export{E as u};
