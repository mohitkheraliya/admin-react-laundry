import{r as o,_ as u}from"./index-CREYCSf_.js";const k="http://3.110.208.70:3000/admin/services",j=(a=1,n=10,r="",c,i)=>{const[v,d]=o.useState([]),[h,_]=o.useState(0),[g,p]=o.useState(!1),f=async()=>{var S,l;const m=localStorage.getItem("authToken"),t=new URLSearchParams;a&&t.append("page_number",a.toString()),n&&t.append("per_page",n.toString()),r&&t.append("search",r),c&&t.append("sort_by",c),i&&t.append("order",i);const y=`${k}?${t}`;p(!0);try{const e=await fetch(y,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`}});if(!e.ok){const T=await e.json();u.error(T.message,{position:"top-center"});return}const s=await e.json(),E=((S=s==null?void 0:s.data)==null?void 0:S.services)||[],w=((l=s==null?void 0:s.data)==null?void 0:l.count)||0;d(E),_(w)}catch(e){u.error((e==null?void 0:e.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{p(!1)}};return o.useEffect(()=>{f()},[a,n,r,c,i]),{services:v,totalServices:h,fetchServices:f,loading:g}};export{j as u};
