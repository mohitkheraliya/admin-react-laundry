import{r as s,B as w,c as l}from"./index-vHAOnTyK.js";const _=(n=1,a=10,r="",c,i)=>{const[h,S]=s.useState([]),[g,m]=s.useState(0),[y,p]=s.useState(!1),u=async()=>{var f,d;const k=localStorage.getItem("authToken"),e=new URLSearchParams;n&&e.append("page_number",n.toString()),a&&e.append("per_page",a.toString()),r&&e.append("search",r),c&&e.append("sort_by",c),i&&e.append("order",i),p(!0);try{const o=await fetch(`${w}/admin/products?${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}}),t=await o.json();if(!o.ok){l.error(t.message,{position:"top-center"}),p(!1);return}S(((f=t==null?void 0:t.data)==null?void 0:f.result)||[]),m(((d=t==null?void 0:t.data)==null?void 0:d.count)||0)}catch(o){l.error((o==null?void 0:o.message)||"Network error: Failed to fetch products.",{position:"top-center"})}finally{p(!1)}};return s.useEffect(()=>{u()},[n,a,r,c,i]),{products:h,loading:y,count:g,fetchProducts:u}};export{_ as u};
