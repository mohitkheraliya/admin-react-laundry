import{r,c as a}from"./index-YSqZCHb2.js";const f="http://3.110.208.70:3000/prices",l=()=>{const[n,c]=r.useState([]),[i,o]=r.useState(!0),s=async()=>{const p=localStorage.getItem("authToken");o(!0);try{const t=await fetch(f,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`}});if(!t.ok){const u=await t.json();a.error(u.message,{position:"top-center"});return}const e=await t.json();c((e==null?void 0:e.data)||[])}catch{a.error("Network error: Failed to fetch.")}finally{o(!1)}};return r.useEffect(()=>{s()},[]),{prices:n,loading:i,fetchPrices:s}};export{l as u};
