import{r as n,c as B,V as F,u as J,e as L,k as M,j as e,F as K,f as Q,g as X,h as Z,b as ee}from"./index-BGk8LBca.js";import{S as P}from"./sweetalert2.esm.all-B0Dix5B2.js";import{d as T}from"./dayjs.min-C57gZipw.js";import{T as se}from"./TableShimmer-DRInDMOW.js";import{D as ae,C as te}from"./enums-CdakGUf3.js";import{s as ne}from"./searchSchema-DFHn0uxn.js";const ce="http://35.154.167.170:3000/admin/coupon",le=(t,l,r="",u,p,m,a)=>{const[j,c]=n.useState([]),[b,y]=n.useState(!1),[$,v]=n.useState(0),w=async()=>{var f,k;const g=localStorage.getItem("authToken"),o=new URLSearchParams;t&&o.append("page_number",t.toString()),l&&o.append("per_page",l.toString()),r&&o.append("search",r),u&&o.append("sort_by",u),p&&o.append("order",p),m&&o.append("discount_types",m.toString()),a&&o.append("coupon_types",a.toString()),y(!0);try{const h=await fetch(`${ce}?${o}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`}});if(!h.ok){const N=await h.json();B.error(N.message,{position:"top-center"});return}const x=await h.json(),S=((f=x==null?void 0:x.data)==null?void 0:f.result)||[],_=((k=x==null?void 0:x.data)==null?void 0:k.count)||0;c(S),v(_)}catch(h){B.error((h==null?void 0:h.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{y(!1)}};return n.useEffect(()=>{w()},[t,l,r,u,p,a,m]),{coupons:j,totalCoupons:$,loading:b,fetchCoupons:w}},re=()=>{const[t,l]=n.useState(!1);return{deleteCoupon:async u=>{const p=localStorage.getItem("authToken");if(!p){const a="No authentication token found.";return F.error(a,{position:"top-center"}),{success:!1,message:a}}const m=`http://35.154.167.170:3000/admin/coupon/${u}`;l(!0);try{const a=await fetch(m,{method:"DELETE",headers:{Authorization:`Bearer ${p}`,"Content-Type":"application/json"}}),j=await a.json();return a.ok?{success:!0,message:j.message}:(F.error(j.message,{position:"top-center"}),{success:!1,message:j.message})}catch(a){return F.error("An unexpected error occurred.",{position:"top-center"}),{success:!1,message:a.message}}finally{l(!1)}},loading:t}},ie=()=>{const[t,l]=n.useState(1),[r,u]=n.useState(10),[p,m]=J(),[a,j]=n.useState(null),[c,b]=n.useState(null),[y,$]=n.useState(),[v,w]=n.useState(),[g,o]=n.useState(""),[f,k]=n.useState(""),[h,x]=n.useState(""),S=p.get("page"),_=p.get("perPage"),{coupons:N,fetchCoupons:U,loading:I,totalCoupons:E}=le(t,r,g,a,c,v,y),{hasPermission:C}=L(),{deleteCoupon:R}=re(),V=M(),A=Math.ceil(E/r),z=async s=>{try{const{isConfirmed:i}=await P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(i){const{success:H,message:Y}=await R(s);H?(N.filter(W=>W.coupon_id!==s).length===0&&t>1&&(l(t-1),m({page:(t-1).toString(),perPage:r.toString()})),await U(),P.fire(Y)):P.fire(Y)}}catch(i){P.fire({title:"Error",text:i.message,icon:"error"})}},O=s=>{V(`/coupon/edit/${s.coupon_id}`,{state:{coupon:s}})};n.useEffect(()=>{S&&l(Number(S)),_&&u(Number(_))},[S,_]),n.useEffect(()=>{g&&(l(1),m({search:g,page:"1",perPage:r.toString()}))},[g]);const q=async s=>{s.preventDefault();try{await ne.validate({search:f},{abortEarly:!1}),o(f),x("")}catch(i){i instanceof ee&&x(i.errors[0])}},d=s=>{a===s?b(c==="ASC"?"DESC":"ASC"):(j(s),b("ASC"))},D=s=>{s>=1&&s<=A&&(l(s),m({page:s.toString(),perPage:r.toString()}))},G=s=>{const i=Number(s.target.value);u(i),l(1),m({page:"1",perPage:i.toString()})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:r,onChange:G,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2.5",children:[e.jsxs("select",{className:"select select-lg w-[170px] text-sm",value:v,onChange:s=>{$(Number(s.target.value))},children:[e.jsx("option",{value:"",selected:!0,children:"Coupon Type"}),e.jsx("option",{value:1,children:"Website"}),e.jsx("option",{value:2,children:"App"}),e.jsx("option",{value:3,children:"Both"})]}),e.jsxs("select",{className:"select select-lg w-[170px] text-sm",value:v,onChange:s=>{w(Number(s.target.value))},children:[e.jsx("option",{value:"",selected:!0,children:"Discount type"}),e.jsx("option",{value:1,children:"Amount"}),e.jsx("option",{value:2,children:"Percentage"})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:q,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:f,onChange:s=>{k(s.target.value),s.target.value===""&&o("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:h||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{"data-datatable":"true","data-datatable-page-size":"10",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[50px]",children:e.jsxs("span",{className:`sort ${a==="coupon_id"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("coupon_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="code"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[180px]",children:e.jsxs("span",{className:`sort ${a==="title"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("title"),children:[e.jsx("span",{className:"sort-label",children:"Title"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${a==="description"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("description"),children:[e.jsx("span",{className:"sort-label",children:"Description"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="discount_value"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("discount_value"),children:[e.jsx("span",{className:"sort-label",children:"Discount value"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[170px]",children:e.jsxs("span",{className:`sort ${a==="discount_type"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("discount_type"),children:[e.jsx("span",{className:"sort-label",children:"Discount type"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="start_time"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("start_time"),children:[e.jsx("span",{className:"sort-label",children:"Valid from"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="end_time"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("end_time"),children:[e.jsx("span",{className:"sort-label",children:"Valid unti"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="maximum_usage_count_per_user"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("maximum_usage_count_per_user"),children:[e.jsx("span",{className:"sort-label",children:"Max Usage/User"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[160px]",children:e.jsxs("span",{className:`sort ${a==="total_usage_count"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("total_usage_count"),children:[e.jsx("span",{className:"sort-label",children:"Total Usage"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[170px]",children:e.jsxs("span",{className:`sort ${a==="branch_id"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("coupon_type"),children:[e.jsx("span",{className:"sort-label",children:"Coupon Type"}),e.jsx("span",{className:"sort-icon"})]})}),(C(9,"update")||C(9,"delete"))&&e.jsx("th",{className:"min-w-[125px]",children:"Actions"})]})}),I?e.jsx(se,{}):N.length>0?e.jsx("tbody",{children:N.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.coupon_id})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.code})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.title})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.description})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.discount_value})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:ae[s.discount_type]})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[T(s.start_time).format("DD-MM-YYYY"),e.jsx("br",{}),T(s.start_time).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[T(s.end_time).format("DD-MM-YYYY"),e.jsx("br",{}),T(s.end_time).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.maximum_usage_count_per_user})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.total_usage_count})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:te[s.coupon_type]})}),(C(9,"update")||C(9,"delete"))&&e.jsxs("td",{children:[C(9,"update")&&e.jsx("button",{onClick:()=>O(s),className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",children:e.jsx(K,{className:"text-yellow-600"})}),C(9,"delete")&&e.jsx("button",{onClick:()=>z(s.coupon_id),className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",children:e.jsx(Q,{className:"text-red-500"})})]})]},s.coupon_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No coupon available"})})})]})})})}),E>r&&e.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",N.length," of ",E," Coupons"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:t===1,onClick:()=>D(t-1),className:`btn ${t===1?"disabled":""}`,children:e.jsx(X,{})}),Array.from({length:A}).map((s,i)=>e.jsx("button",{className:`btn ${t===i+1?"active":""}`,onClick:()=>D(i+1),children:i+1},i)),e.jsx("button",{disabled:t===A,onClick:()=>D(t+1),className:`btn ${t===A?"disabled":""}`,children:e.jsx(Z,{})})]})]})]})},je=()=>{const t=M(),{hasPermission:l}=L(),r=()=>{t("/coupon/add")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Coupon"})}),l(9,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:r,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Coupon"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(ie,{})})})})]})};export{je as default};
