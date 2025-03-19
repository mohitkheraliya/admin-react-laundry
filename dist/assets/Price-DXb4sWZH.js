import{r as a,V as f,u as J,j as e,b as H}from"./index-DgqFhqzz.js";import{u as K}from"./useGetCategories-D_-z6_tz.js";import{u as Q}from"./useGetProducts-DpstSmgg.js";import{u as W}from"./useGetServices-Cfr1pFA5.js";import{u as X}from"./useGetPrice-DEsUYxM9.js";import{s as Y}from"./searchSchema-CjhF6hVy.js";import{T as Z}from"./TableShimmer-GJb0ArGa.js";import{L as ee}from"./Loading-DAw3Tk4V.js";const se="http://3.110.208.70:3000/prices",re=()=>{const[m,l]=a.useState(!1);return{addPrice:async o=>{const g=localStorage.getItem("authToken");if(o.length===0)return f.error("No changes detected. Please provide a price to save.",{position:"top-center"}),!1;l(!0);try{const d={prices:o},x=await fetch(se,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify(d)});if(!x.ok){const j=(await x.json()).message;return f.error(j,{position:"top-center"}),!1}const y=await x.json();return f.success(y.message,{position:"top-center"}),!0}catch(d){return d.name==="TypeError"&&d.message.includes("Failed to fetch")?f.error("Network error: Failed to fetch.",{position:"top-center"}):f.error("An unexpected error occurred.",{position:"top-center"}),!1}finally{l(!1)}},loading:m}},te=({isSave:m,setIsSave:l,setIsLoading:h})=>{const{categories:o}=K(1,1e3),{products:g}=Q(1,1e3),{services:d}=W(1,1e3),{prices:x,loading:y,fetchPrices:P}=X(),{addPrice:j,loading:E}=re(),[i,R]=a.useState({}),[C,_]=a.useState(new Set),b=a.useRef({}),[ae,$]=J(),[c,G]=a.useState(null),[u,w]=a.useState(null),[N,A]=a.useState(""),[k,O]=a.useState(""),[B,L]=a.useState(""),v=a.useCallback((s,t,r,n)=>{const p=[];return s.forEach(F=>{t.forEach(T=>{r.forEach(I=>{const U=`${F.category_id}_${T.product_id}_${I.service_id}`;p.push({category:F,product:T,service:I,price:n[U]||0})})})}),p},[o,g,d,x])(o,g,d,x),D=v.filter(s=>{const t=N.toLowerCase();return s.category.name.toLowerCase().includes(t)||s.product.name.toLowerCase().includes(t)||s.service.name.toLowerCase().includes(t)}).sort((s,t)=>["category","product","service"].includes(c)?u==="ASC"?s[c].name.localeCompare(t[c].name):t[c].name.localeCompare(s[c].name):c==="price"?u==="ASC"?s.price-t.price:t.price-s.price:0);a.useEffect(()=>{if(m){if(!v.some(r=>{const n=`${r.category.category_id}_${r.product.product_id}_${r.service.service_id}`;return i[n]!==void 0&&i[n]!==r.price})){l(!1);return}const t=v.map(r=>{const n=`${r.category.category_id}_${r.product.product_id}_${r.service.service_id}`;return{category_id:r.category.category_id,product_id:r.product.product_id,service_id:r.service.service_id,price:i[n]!==void 0?i[n]:r.price}}).filter(r=>r.price>0);try{j(t),P(),_(new Set)}catch{f.error("Failed to save prices.")}}l(!1)},[m,j,v,i]),a.useEffect(()=>{var t;const s=Array.from(C);if(s.length>0){const r=s[0];b.current[r]&&((t=b.current[r])==null||t.focus())}},[C]),a.useEffect(()=>{$(N?{search:N}:{})},[N]),a.useEffect(()=>{h(!!E)},[E]);const V=s=>{_(t=>{const r=new Set(t);return r.add(s),r})},q=(s,t)=>{R(r=>({...r,[s]:t}))},z=async s=>{s.preventDefault();try{await Y.validate({search:k},{abortEarly:!1}),A(k),L("")}catch(t){t instanceof H&&L(t.errors[0])}},S=s=>{c===s?w(u==="ASC"?"DESC":"ASC"):(G(s),w("ASC"))},M=s=>{_(t=>{const r=new Set(t);return r.delete(s),r})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-wrap container-fixed",children:e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:z,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:k,onChange:s=>{O(s.target.value),s.target.value===""&&A("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:B||" "})]})})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{"data-datatable":"true","data-datatable-page-size":"10",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[40px]",children:"Id"}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${c==="category"?u==="ASC"?"asc":"desc":""}`,onClick:()=>S("category"),children:[e.jsx("span",{className:"sort-label",children:"Category"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${c==="product"?u==="ASC"?"asc":"desc":""}`,onClick:()=>S("product"),children:[e.jsx("span",{className:"sort-label",children:"Product"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${c==="service"?u==="ASC"?"asc":"desc":""}`,onClick:()=>S("service"),children:[e.jsx("span",{className:"sort-label",children:"Service"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${c==="price"?u==="ASC"?"asc":"desc":""}`,onClick:()=>S("price"),children:[e.jsx("span",{className:"sort-label",children:"Price"}),e.jsx("span",{className:"sort-icon"})]})})]})}),e.jsx("tbody",{children:y?e.jsx(Z,{}):D.length>0?D.map((s,t)=>{const r=`${s.category.category_id}_${s.product.product_id}_${s.service.service_id}`,n=C.has(r);return e.jsxs("tr",{className:`font-semibold ${s.price?"":"text-red-500"}`,children:[e.jsx("td",{children:t+1}),e.jsx("td",{children:s.category.name}),e.jsx("td",{children:s.product.name}),e.jsx("td",{children:s.service.name}),e.jsx("td",{className:"relative",children:n?e.jsx("input",{ref:p=>b.current[r]=p,type:"text",className:"w-full h-full absolute inset-0 input input-bordered",value:i[r]!==void 0?i[r]:s.price||"",onChange:p=>q(r,p.target.value===""?0:Number(p.target.value)),onBlur:()=>M(r)}):e.jsx("span",{className:"cursor-pointer h-full flex",onClick:()=>V(r),children:i[r]!==void 0?i[r]:s.price||"Add Price"})})]},t)}):e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No data available"})})})]})})})})})})})]})},he=()=>{const[m,l]=a.useState(!1),[h,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-3",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Price"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("button",{onClick:()=>l(!0),className:"btn btn-primary",disabled:h,children:h?e.jsxs(e.Fragment,{children:[" ",e.jsx("i",{className:"ki-filled ki-plus-squared"})," Saving ",e.jsx(ee,{})," "]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-plus-squared"})," Save"]})})})]})}),e.jsx(te,{isSave:m,setIsSave:l,setIsLoading:o})]})};export{he as default};
