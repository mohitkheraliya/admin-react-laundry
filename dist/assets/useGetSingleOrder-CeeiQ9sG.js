import{r as s,_ as n}from"./index-CrW1VcAo.js";const d=e=>{const[c,o]=s.useState(!1),[i,a]=s.useState(null);return s.useEffect(()=>{(async()=>{if(!e){a(null);return}const l=localStorage.getItem("authToken"),f=`http://35.154.167.170:3000/admin/orders/${e}`;o(!0);try{const t=await fetch(f,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`}});if(!t.ok){const u=await t.json();n.error(u.message,{position:"top-center"}),o(!1);return}const r=await t.json();a(r==null?void 0:r.data)}catch(t){n.error((t==null?void 0:t.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{o(!1)}})()},[e]),{order:i,loading:c}};export{d as u};
