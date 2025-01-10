import{r as c,n as M,_ as D,u as K,g as L,j as e,h as T,F as Q,b as W,d as X,e as Z,V as ee}from"./index-DAviq0Z-.js";import{S as P}from"./sweetalert2.esm.all-DwEdJQJv.js";import{T as se}from"./TableShimmer-Cc7LEGya.js";import{C as Y,D as ae}from"./enums-9JeJuu7U.js";import{s as te}from"./searchSchema-CoiFbK48.js";import{M as ne}from"./MultiSelect-Cy747yLf.js";import"./orderStatusClasses-DgGpuqsn.js";const ce="http://35.154.167.170:3000/admin/coupon",le=(n,r,i="",u,x,p,a)=>{const[j,l]=c.useState([]),[C,b]=c.useState(!1),[_,y]=c.useState(0),w=async()=>{var f,k;const g=localStorage.getItem("authToken"),o=new URLSearchParams;n&&o.append("page_number",n.toString()),r&&o.append("per_page",r.toString()),i&&o.append("search",i),u&&o.append("sort_by",u),x&&o.append("order",x),p&&o.append("discount_types",p.toString()),a&&a.forEach(d=>o.append("coupon_types",d.toString())),b(!0);try{const d=await fetch(`${ce}?${o}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`}});if(!d.ok){const N=await d.json();M.error(N.message,{position:"top-center"});return}const h=await d.json(),S=((f=h==null?void 0:h.data)==null?void 0:f.result)||[],v=((k=h==null?void 0:h.data)==null?void 0:k.count)||0;l(S),y(v)}catch(d){M.error((d==null?void 0:d.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{b(!1)}};return c.useEffect(()=>{w()},[n,r,i,u,x,a,p]),{coupons:j,totalCoupons:_,loading:C,fetchCoupons:w}},re=()=>{const[n,r]=c.useState(!1);return{deleteCoupon:async u=>{const x=localStorage.getItem("authToken");if(!x){const a="No authentication token found.";return D.error(a,{position:"top-center"}),{success:!1,message:a}}const p=`http://35.154.167.170:3000/admin/coupon/${u}`;r(!0);try{const a=await fetch(p,{method:"DELETE",headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"}}),j=await a.json();return a.ok?{success:!0,message:j.message}:(D.error(j.message,{position:"top-center"}),{success:!1,message:j.message})}catch(a){return D.error("An unexpected error occurred.",{position:"top-center"}),{success:!1,message:a.message}}finally{r(!1)}},loading:n}},ie=()=>{const[n,r]=c.useState(1),[i,u]=c.useState(10),[x,p]=K(),[a,j]=c.useState(null),[l,C]=c.useState(null),[b,_]=c.useState([]),[y,w]=c.useState(),[g,o]=c.useState(""),[f,k]=c.useState(""),[d,h]=c.useState(""),S=x.get("page"),v=x.get("perPage"),{coupons:N,fetchCoupons:U,loading:B,totalCoupons:$}=le(n,i,g,a,l,y,b),{deleteCoupon:I}=re(),O=L(),A=Math.ceil($/i),R=Object.entries(Y).filter(([s,t])=>typeof t=="number").map(([s,t])=>({label:s,value:t})),V=async s=>{try{const{isConfirmed:t}=await P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(t){const{success:H,message:F}=await I(s);H?(N.filter(J=>J.coupon_id!==s).length===0&&n>1&&(r(n-1),p({page:(n-1).toString(),perPage:i.toString()})),await U(),P.fire(F)):P.fire(F)}}catch(t){P.fire({title:"Error",text:t.message,icon:"error"})}},z=s=>{O(`/coupon/edit/${s.coupon_id}`,{state:{coupon:s}})};c.useEffect(()=>{S&&r(Number(S)),v&&u(Number(v))},[S,v]),c.useEffect(()=>{g&&(r(1),p({search:g,page:"1",perPage:i.toString()}))},[g]);const q=async s=>{s.preventDefault();try{await te.validate({search:f},{abortEarly:!1}),o(f),h("")}catch(t){t instanceof ee&&h(t.errors[0])}},m=s=>{a===s?C(l==="ASC"?"DESC":"ASC"):(j(s),C("ASC"))},E=s=>{s>=1&&s<=A&&(r(s),p({page:s.toString(),perPage:i.toString()}))},G=s=>{const t=Number(s.target.value);u(t),r(1),p({page:"1",perPage:t.toString()})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:i,onChange:G,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2.5",children:[e.jsx(ne,{options:R,displayValue:"label",placeholder:"Select Coupon Type",selectedValues:b,onSelect:s=>_(s.map(t=>t.value)),onRemove:s=>_(s.map(t=>t.value)),className:"min-w-[250px]",sliceCount:3,isSearchInput:!1}),e.jsxs("select",{className:"select select-lg w-[170px] text-sm",value:y,onChange:s=>{w(Number(s.target.value))},children:[e.jsx("option",{value:"",selected:!0,children:"Discount type"}),e.jsx("option",{value:1,children:"Amount"}),e.jsx("option",{value:2,children:"Percentage"})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:q,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:f,onChange:s=>{k(s.target.value),s.target.value===""&&o("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:d||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{"data-datatable":"true","data-datatable-page-size":"10",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[50px]",children:e.jsxs("span",{className:`sort ${a==="coupon_id"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("coupon_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="code"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[180px]",children:e.jsxs("span",{className:`sort ${a==="title"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("title"),children:[e.jsx("span",{className:"sort-label",children:"Title"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${a==="description"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("description"),children:[e.jsx("span",{className:"sort-label",children:"Description"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="discount_value"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("discount_value"),children:[e.jsx("span",{className:"sort-label",children:"Discount value"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[170px]",children:e.jsxs("span",{className:`sort ${a==="discount_type"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("discount_type"),children:[e.jsx("span",{className:"sort-label",children:"Discount type"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="start_time"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("start_time"),children:[e.jsx("span",{className:"sort-label",children:"Valid from"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="end_time"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("end_time"),children:[e.jsx("span",{className:"sort-label",children:"Valid unti"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="maximum_usage_count_per_user"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("maximum_usage_count_per_user"),children:[e.jsx("span",{className:"sort-label",children:"Max Usage/User"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[160px]",children:e.jsxs("span",{className:`sort ${a==="total_usage_count"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("total_usage_count"),children:[e.jsx("span",{className:"sort-label",children:"Total Usage"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[170px]",children:e.jsxs("span",{className:`sort ${a==="branch_id"?l==="ASC"?"asc":"desc":""}`,onClick:()=>m("coupon_type"),children:[e.jsx("span",{className:"sort-label",children:"Coupon Type"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[125px]",children:"Actions"})]})}),B?e.jsx(se,{}):N.length>0?e.jsx("tbody",{children:N.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.coupon_id})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.code})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.title})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.description})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.discount_value})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:ae[s.discount_type]})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[T(s.start_time).format("DD-MM-YYYY"),e.jsx("br",{}),T(s.start_time).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[T(s.end_time).format("DD-MM-YYYY"),e.jsx("br",{}),T(s.end_time).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.maximum_usage_count_per_user})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.total_usage_count})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:Y[s.coupon_type]})}),e.jsxs("td",{children:[e.jsx("button",{onClick:()=>z(s),className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",children:e.jsx(Q,{className:"text-yellow-600"})}),e.jsx("button",{onClick:()=>V(s.coupon_id),className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",children:e.jsx(W,{className:"text-red-500"})})]})]},s.coupon_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No coupon available"})})})]})})})}),$>i&&e.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",N.length," of ",$," Coupons"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:n===1,onClick:()=>E(n-1),className:`btn ${n===1?"disabled":""}`,children:e.jsx(X,{})}),Array.from({length:A}).map((s,t)=>e.jsx("button",{className:`btn ${n===t+1?"active":""}`,onClick:()=>E(t+1),children:t+1},t)),e.jsx("button",{disabled:n===A,onClick:()=>E(n+1),className:`btn ${n===A?"disabled":""}`,children:e.jsx(Z,{})})]})]})]})},ge=()=>{const n=L(),r=()=>{n("/coupon/add")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Coupon"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:r,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Coupon"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(ie,{})})})})]})};export{ge as default};
