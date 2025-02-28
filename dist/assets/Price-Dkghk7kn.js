import{r as a,V as g,u as K,e as O,j as e,b as Q}from"./index-CRg_oNuF.js";import{u as W}from"./useGetCategories-D1231fbW.js";import{u as X}from"./useGetProducts-DR3soD2u.js";import{u as Y}from"./useGetServices-BrLg4Rp5.js";import{u as Z}from"./useGetPrice-CoEA-_iz.js";import{s as ee}from"./searchSchema-CAamnETc.js";import{T as se}from"./TableShimmer-hY34-pkS.js";import{L as re}from"./Loading-BZ_qui0z.js";const te="http://3.110.208.70:3000/prices",ae=()=>{const[h,l]=a.useState(!1);return{addPrice:async o=>{const d=localStorage.getItem("authToken");if(o.length===0)return g.error("No changes detected. Please provide a price to save.",{position:"top-center"}),!1;l(!0);try{const u={prices:o},f=await fetch(te,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify(u)});if(!f.ok){const j=(await f.json()).message;return g.error(j,{position:"top-center"}),!1}const y=await f.json();return g.success(y.message,{position:"top-center"}),!0}catch(u){return u.name==="TypeError"&&u.message.includes("Failed to fetch")?g.error("Network error: Failed to fetch.",{position:"top-center"}):g.error("An unexpected error occurred.",{position:"top-center"}),!1}finally{l(!1)}},loading:h}},ce=({isSave:h,setIsSave:l,setIsLoading:x})=>{const{categories:o}=W(1,1e3),{products:d}=X(1,1e3),{services:u}=Y(1,1e3),{prices:f,loading:y,fetchPrices:k}=Z(),{addPrice:j,loading:E}=ae(),[i,$]=a.useState({}),[C,_]=a.useState(new Set),b=a.useRef({}),[ie,A]=K(),[c,B]=a.useState(null),[p,w]=a.useState(null),[v,L]=a.useState(""),[P,V]=a.useState(""),[q,D]=a.useState(""),{hasPermission:F}=O(),N=a.useCallback((s,t,r,n)=>{const m=[];return s.forEach(I=>{t.forEach(R=>{r.forEach(G=>{const H=`${I.category_id}_${R.product_id}_${G.service_id}`;m.push({category:I,product:R,service:G,price:n[H]||0})})})}),m},[o,d,u,f])(o,d,u,f),T=N.filter(s=>{const t=v.toLowerCase();return s.category.name.toLowerCase().includes(t)||s.product.name.toLowerCase().includes(t)||s.service.name.toLowerCase().includes(t)}).sort((s,t)=>["category","product","service"].includes(c)?p==="ASC"?s[c].name.localeCompare(t[c].name):t[c].name.localeCompare(s[c].name):c==="price"?p==="ASC"?s.price-t.price:t.price-s.price:0);a.useEffect(()=>{if(h){if(!N.some(r=>{const n=`${r.category.category_id}_${r.product.product_id}_${r.service.service_id}`;return i[n]!==void 0&&i[n]!==r.price})){l(!1);return}const t=N.map(r=>{const n=`${r.category.category_id}_${r.product.product_id}_${r.service.service_id}`;return{category_id:r.category.category_id,product_id:r.product.product_id,service_id:r.service.service_id,price:i[n]!==void 0?i[n]:r.price}}).filter(r=>r.price>0);try{j(t).then(()=>{k().then(()=>{$({}),_(new Set)})})}catch{g.error("Failed to save prices.")}}l(!1)},[h,j,N,i]),a.useEffect(()=>{var t;const s=Array.from(C);if(s.length>0){const r=s[0];b.current[r]&&((t=b.current[r])==null||t.focus())}},[C]),a.useEffect(()=>{A(v?{search:v}:{})},[v]),a.useEffect(()=>{x(!!E)},[E]);const z=s=>{_(t=>{const r=new Set(t);return r.add(s),r})},M=(s,t)=>{$(r=>({...r,[s]:t}))},U=async s=>{s.preventDefault();try{await ee.validate({search:P},{abortEarly:!1}),L(P),D("")}catch(t){t instanceof Q&&D(t.errors[0])}},S=s=>{c===s?w(p==="ASC"?"DESC":"ASC"):(B(s),w("ASC"))},J=s=>{_(t=>{const r=new Set(t);return r.delete(s),r})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-wrap container-fixed",children:e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:U,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:P,onChange:s=>{V(s.target.value),s.target.value===""&&L("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:q||" "})]})})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{"data-datatable":"true","data-datatable-page-size":"10",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[40px]",children:"Id"}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${c==="category"?p==="ASC"?"asc":"desc":""}`,onClick:()=>S("category"),children:[e.jsx("span",{className:"sort-label",children:"Category"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${c==="product"?p==="ASC"?"asc":"desc":""}`,onClick:()=>S("product"),children:[e.jsx("span",{className:"sort-label",children:"Product"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${c==="service"?p==="ASC"?"asc":"desc":""}`,onClick:()=>S("service"),children:[e.jsx("span",{className:"sort-label",children:"Service"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${c==="price"?p==="ASC"?"asc":"desc":""}`,onClick:()=>S("price"),children:[e.jsx("span",{className:"sort-label",children:"Price"}),e.jsx("span",{className:"sort-icon"})]})})]})}),e.jsx("tbody",{children:y?e.jsx(se,{}):T.length>0?T.map((s,t)=>{const r=`${s.category.category_id}_${s.product.product_id}_${s.service.service_id}`,n=C.has(r);return e.jsxs("tr",{className:`font-semibold ${s.price?"":"text-red-500"}`,children:[e.jsx("td",{children:t+1}),e.jsx("td",{children:s.category.name}),e.jsx("td",{children:s.product.name}),e.jsx("td",{children:s.service.name}),e.jsx("td",{className:"relative",children:n?e.jsx("input",{ref:m=>b.current[r]=m,type:"text",className:"w-full h-full absolute inset-0 input input-bordered",value:i[r]!==void 0?i[r]:s.price||"",onChange:m=>M(r,m.target.value===""?0:Number(m.target.value)),onBlur:()=>J(r)}):e.jsx("span",{className:"cursor-pointer h-full flex",onClick:F(10,"update")||F(10,"create")?()=>z(r):void 0,children:i[r]!==void 0?i[r]:s.price||"Add Price"})})]},t)}):e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No data available"})})})]})})})})})})})]})},fe=()=>{const[h,l]=a.useState(!1),[x,o]=a.useState(!1),{hasPermission:d}=O();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-3",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Price"})}),(d(10,"create")||d(10,"update"))&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("button",{onClick:()=>l(!0),className:"btn btn-primary",disabled:x,children:x?e.jsxs(e.Fragment,{children:[" ",e.jsx("i",{className:"ki-filled ki-plus-squared"})," Saving"," ",e.jsx(re,{})," "]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-plus-squared"})," Save"]})})})]})}),e.jsx(ce,{isSave:h,setIsSave:l,setIsLoading:o})]})};export{fe as default};
