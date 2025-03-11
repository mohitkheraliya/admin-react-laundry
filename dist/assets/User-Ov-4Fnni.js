import{r as d,u as W,i as R,j as e,m as X,F as Z,e as ee,f as se,g as ae,b as le,R as te,q as ne}from"./index-BtmdiTM0.js";import{u as E}from"./useGetCompanies-BxxMUjF8.js";import{u as $}from"./useGetBranches-Dng6tBwq.js";import{u as re,a as ce}from"./useDeleteUser-BPk73peF.js";import{T as ie}from"./TableShimmer-D611b0vW.js";import{R as B,G}from"./enums-CdakGUf3.js";import{S as f}from"./sweetalert2.esm.all-B0Dix5B2.js";import{s as oe}from"./searchSchema-qC772F25.js";import{g as de}from"./roleClasses-8Xjy3Q3A.js";import{M as N}from"./MultiSelect-C40kebfD.js";import"./orderStatusClasses-HfHBGnti.js";const me=({filters:r})=>{const[t,o]=d.useState(1),[i,h]=d.useState(10),[p,a]=W(),[l,c]=d.useState(null),[m,v]=d.useState(null),S=p.get("page"),y=p.get("perPage"),_=1e3,F=1,[u,P]=d.useState(""),[k,O]=d.useState(""),[T,V]=d.useState(""),{users:b,fetchUsers:M,count:C,loading:z}=re(t,i,u,l,m,r.genderFilter,r.roleFilter,r.companyFilter,r.branchFilter),{deleteUser:D}=ce(),{companies:I}=E(F,_),{branches:L}=$(F,_),U=R(),g=Math.ceil(C/i),q=s=>{U(`/user/edit/${s}`)};d.useEffect(()=>{S&&o(Number(S)),y&&h(Number(y))},[S,y]),d.useEffect(()=>{u&&(o(1),a({search:u,page:"1",perPage:i.toString()}))},[u]);const Y=async s=>{s.preventDefault();try{await oe.validate({search:u},{abortEarly:!1}),P(k),V("")}catch(n){n instanceof le&&V(n.errors[0])}},H=async s=>{try{const{isConfirmed:n}=await f.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(n){const{success:x,message:A}=await D(s);x?(b.filter(Q=>Q.user_id!==s).length===0&&t>1&&(o(t-1),a({page:(t-1).toString(),perPage:i.toString()})),await M(),f.fire(A)):f.fire(A)}}catch(n){f.fire({title:"Error",text:n.message,icon:"error"})}},j=s=>{l===s?v(m==="ASC"?"DESC":"ASC"):(c(s),v("ASC"))},w=s=>{s>=1&&s<=g&&(o(s),a({page:s.toString(),perPage:i.toString()}))},J=s=>{const n=Number(s.target.value);h(n),o(1),a({page:"1",perPage:n.toString()})},K=async s=>{U(`/user/${s}`)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:i,onChange:J,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:Y,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:k,onChange:s=>{O(s.target.value),s.target.value===""&&P("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:T||" "})]})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[70px]",children:e.jsxs("span",{className:`sort ${l==="user_id"?m==="ASC"?"asc":"desc":""}`,onClick:()=>j("user_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${l==="first_name"?m==="ASC"?"asc":"desc":""}`,onClick:()=>j("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Full name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:"Role"}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${l==="email"?m==="ASC"?"asc":"desc":""}`,onClick:()=>j("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[190px]",children:e.jsxs("span",{className:`sort ${l==="mobile_number"?m==="ASC"?"asc":"desc":""}`,onClick:()=>j("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[80px]",children:"Gender"}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${l==="total_pending_amount"?m==="ASC"?"asc":"desc":""}`,onClick:()=>j("total_pending_amount"),children:[e.jsx("span",{className:"sort-label",children:"Total Pending Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsx("span",{className:"sort-label",children:"Companies"})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsx("span",{className:"sort-label",children:"Branches"})}),e.jsx("th",{className:"min-w-[150px]",children:"Actions"})]})}),z?e.jsx(ie,{}):b.length>0?e.jsx("tbody",{children:b.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.user_id})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-1.5",children:[s.first_name," ",s.last_name]})}),e.jsx("td",{children:e.jsx("span",{className:`mt-1 p-2 rounded-md text-sm ${de(s.role_id)}`,children:B[s.role_id]})}),e.jsx("td",{children:s.email}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-1.5",children:s.mobile_number})}),e.jsx("td",{children:G[s.gender]}),e.jsx("td",{children:s.role_id===5&&s.total_due_amount}),e.jsx("td",{children:I.filter(n=>{var x;return(x=s.company_ids)==null?void 0:x.includes(n.company_id)}).map(n=>n.company_name).join(", ")}),e.jsxs("td",{children:[L.filter(n=>{var x;return(x=s.branch_ids)==null?void 0:x.includes(n.branch_id)}).map(n=>n.branch_name).join(", ")," "]}),e.jsxs("td",{className:"flex",children:[e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>K(s.user_id),children:e.jsx(X,{size:18,className:"text-gray-600"})}),e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>q(s.user_id),children:e.jsx(Z,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>H(s.user_id),children:e.jsx(ee,{className:"text-red-500"})})]})]},s.user_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No user available"})})})]})}),C>i&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",b.length," of ",C," Users"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:t===1,onClick:()=>w(t-1),className:`btn ${t===1?"disabled":""}`,children:e.jsx(se,{})}),Array.from({length:g}).map((s,n)=>e.jsx("button",{className:`btn ${t===n+1?"active":""}`,onClick:()=>w(n+1),children:n+1},n)),e.jsx("button",{disabled:t===g,onClick:()=>w(t+1),className:`btn ${t===g?"disabled":""}`,children:e.jsx(ae,{})})]})]})})]})})]})},xe=({filters:r,updateFilters:t})=>{const{branches:o}=$(1,1e3),{companies:i}=E(1,1e3),h=Object.entries(G).filter(([a,l])=>typeof l=="number").map(([a,l])=>({label:a,value:l})),p=Object.entries(B).filter(([a,l])=>typeof l=="number").map(([a,l])=>({label:a,value:l}));return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap gap-4 p-4",children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row gap-3",children:[e.jsx(N,{options:h,displayValue:"label",placeholder:"Select Gender",selectedValues:r.genderFilter,onSelect:a=>{const l=a.map(c=>c.value);t({...r,genderFilter:l})},onRemove:a=>{const l=a.map(c=>c.value);t({...r,genderFilter:l})},className:"basis-1/4"}),e.jsx(N,{options:p,displayValue:"label",placeholder:"Select Role",selectedValues:r.roleFilter,onSelect:a=>{const l=a.map(c=>c.value);t({...r,roleFilter:l})},onRemove:a=>{const l=a.map(c=>c.value);t({...r,roleFilter:l})},className:"basis-1/4"}),e.jsx(N,{options:i==null?void 0:i.map(a=>({label:a.company_name,value:a.company_id})),displayValue:"company_name",placeholder:"Select Company",selectedValues:r.companyFilter,onSelect:a=>{const l=a.map(c=>c.value);t({...r,companyFilter:l})},onRemove:a=>{const l=a.map(c=>c.value);t({...r,companyFilter:l})},className:"basis-1/4"}),e.jsx(N,{options:o==null?void 0:o.map(a=>({label:a.branch_name,value:a.branch_id})),displayValue:"branch_name",placeholder:"Select Branch",selectedValues:r.branchFilter,onSelect:a=>{const l=a.map(c=>c.value);t({...r,branchFilter:l})},onRemove:a=>{const l=a.map(c=>c.value);t({...r,branchFilter:l})},className:"basis-1/4",isSearchInput:!0})]})})})},we=()=>{const r=R(),[t,o]=d.useState(!1),[i,h]=d.useState({genderFilter:[],roleFilter:[],companyFilter:[],branchFilter:[]}),p=()=>{r("/user/add")},a=l=>{h(l)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Users"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:p,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add User"]})})]}),e.jsx("div",{className:"flex flex-auto items-center gap-2.5 mb-4 shadow-none",children:e.jsxs("button",{className:"btn btn-sm btn-primary shadow-none",onClick:()=>o(!t),children:["Filters",t?e.jsx(te,{size:23}):e.jsx(ne,{color:"skyblue",size:23})]})})]}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[t&&e.jsx(xe,{filters:i,updateFilters:a})," ",e.jsx(me,{filters:i})]})})})]})};export{we as default};
