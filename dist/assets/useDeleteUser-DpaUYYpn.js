import{r as f,B as w,V as l}from"./index-6FG022z5.js";const A=(r=1,n=10,u="",c,i,p,s,a,g)=>{const[m,y]=f.useState([]),[U,k]=f.useState(0),[L,h]=f.useState(!1),d=async()=>{var S,E;const T=localStorage.getItem("authToken"),t=new URLSearchParams;r&&t.append("page_number",r.toString()),n&&t.append("per_page",n.toString()),u&&t.append("search",u),c&&t.append("sort_by",c),i&&t.append("order",i),p&&p.forEach(e=>t.append("genders",e.toString())),s!==void 0&&(Array.isArray(s)?s.forEach(e=>t.append("roles",e.toString())):t.append("roles",s.toString())),a&&a.forEach(e=>t.append("company_id",e.toString())),g&&g.forEach(e=>t.append("branches_ids",e.toString())),h(!0);try{const e=await fetch(`${w}/user?${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${T}`}}),o=await e.json();if(!e.ok){l.error(o.message,{position:"top-center"});return}y(((S=o==null?void 0:o.data)==null?void 0:S.users)||[]),k(((E=o==null?void 0:o.data)==null?void 0:E.count)||0)}catch(e){l.error((e==null?void 0:e.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{h(!1)}};return f.useEffect(()=>{d()},[r,n,u,c,i,p,s,a,g]),{users:m,count:U,loading:L,fetchUsers:d}},j=()=>{const[r,n]=f.useState(!1);return{deleteUser:async c=>{n(!0);const i=`http://3.110.208.70:3000/user/${c}`,p=localStorage.getItem("authToken");try{const s=await fetch(i,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`}}),a=await s.json();return s.ok?{success:!0,message:a.message}:(l.error(a.message,{position:"top-center"}),{success:!1,message:a.message})}catch(s){return{success:!1,message:s.message}}finally{n(!1)}},loading:r}};export{j as a,A as u};
