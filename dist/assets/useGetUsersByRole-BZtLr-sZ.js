import{r as a,V as n}from"./index-DvGf1eO-.js";const U=()=>{const[c,s]=a.useState(!1),[i,l]=a.useState(null);return{users:i,loading:c,fetchUsersByRole:async(p,o="")=>{const u=localStorage.getItem("authToken"),f=`http://3.110.208.70:3000/user/by-role?role_id=${p}`,r=new URLSearchParams;o&&r.append("search",o),s(!0);try{const e=await fetch(`${f}&${r}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}});if(!e.ok){const h=await e.json();n.error(h.message,{position:"top-center"}),s(!1);return}const t=await e.json();return l(t==null?void 0:t.data),t==null?void 0:t.data}catch(e){n.error((e==null?void 0:e.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{s(!1)}}}};export{U as u};
