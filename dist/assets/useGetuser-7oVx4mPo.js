import{r as s,B as w,V as f}from"./index-Pj7GyAZD.js";const $=()=>{const[h,r]=s.useState(!1),[g,n]=s.useState(null),[m,S]=s.useState(0);return{userData:g,loading:h,count:m,fetchUser:async(a,c=1,i=100)=>{var u,p,l;if(!a){n(null);return}const U=localStorage.getItem("authToken"),o=new URLSearchParams;c&&o.append("page_number",c.toString()),i&&o.append("per_page",i.toString()),r(!0);try{const e=await fetch(`${w}/user/${a}?${o}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${U}`}});if(!e.ok){const d=await e.json();f.error(d.message,{position:"top-center"}),r(!1);return}const t=await e.json();return n(t==null?void 0:t.data),S((u=t==null?void 0:t.data)==null?void 0:u.count),(l=(p=t==null?void 0:t.data)==null?void 0:p.user)==null?void 0:l.orders}catch(e){f.error((e==null?void 0:e.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{r(!1)}}}};export{$ as u};
