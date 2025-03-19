import{r as t,V as q,u as G,e as k,h as A,j as e,T as W,i as H,n as J,F as K,f as Q,P as X,s as Z,b as ee}from"./index-DmrRugRi.js";import{u as se}from"./useGetCompanies-Bl4hBv_Y.js";import{S as g}from"./sweetalert2.esm.all-B0Dix5B2.js";import{a as ae}from"./enums-CdakGUf3.js";const te=()=>{const[l,n]=t.useState(!1);return{deleteCompany:async j=>{n(!0);const u=`http://3.110.208.70:3000/companies/${j}`,m=localStorage.getItem("authToken");try{const a=await fetch(u,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`}}),x=await a.json();return a.ok?{success:!0,message:x.message}:(q.error(x.message,{position:"top-center"}),{success:!1,message:x.message})}catch(a){return{success:!1,message:a.message}}finally{n(!1)}},loading:l}},ne=()=>{const[l,n]=t.useState(1),[r,j]=t.useState(10),[u,m]=G(),[a,x]=t.useState(null),[c,N]=t.useState(null),[p,y]=t.useState(""),[w,E]=t.useState(""),[$,v]=t.useState(""),[S,T]=t.useState(),f=u.get("page"),b=u.get("perPage"),{companies:h,fetchCompanies:D,loading:O,count:_}=se(l,r,p,a,c,S),{hasPermission:i}=k(),C=A(),F=Math.ceil(_/r),{deleteCompany:Y}=te(),B=async s=>{try{const{isConfirmed:o}=await g.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(o){const{success:V,message:P}=await Y(s);V?(h.filter(U=>U.company_id!==s).length===0&&l>1&&(n(l-1),m({page:(l-1).toString(),perPage:r.toString()})),await D(),g.fire(P)):g.fire(P)}}catch(o){g.fire({title:"Error",text:o.message,icon:"error"})}},M=s=>{C(`/company/edit/${s}`)};t.useEffect(()=>{f&&n(Number(f)),b&&j(Number(b))},[f,b]),t.useEffect(()=>{p&&(n(1),m({search:p,page:"1",perPage:r.toString()}))},[p]);const z=async s=>{s.preventDefault();try{await Z.validate({search:p},{abortEarly:!1}),y(w),v("")}catch(o){o instanceof ee&&v(o.errors[0])}},d=s=>{a===s?N(c==="ASC"?"DESC":"ASC"):(x(s),N("ASC"))},I=s=>{s>=1&&s<=F&&(n(s),m({page:s.toString(),perPage:r.toString()}))},L=s=>{const o=Number(s.target.value);j(o),n(1),m({page:"1",perPage:o.toString()})},R=s=>{C(`/company-profile/${s}`)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:r,onChange:L,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.jsxs("select",{className:"select select-lg w-[200px] text-sm",value:S,onChange:s=>{T(Number(s.target.value))},children:[e.jsx("option",{value:"",selected:!0,children:"Select Ownership"}),e.jsx("option",{value:1,children:"Own"}),e.jsx("option",{value:2,children:"Other Company"})]})}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:z,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:w,onChange:s=>{E(s.target.value),s.target.value===""&&y("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:$||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"w-[30px]",children:e.jsxs("span",{className:`sort ${a==="company_id"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("company_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:e.jsxs("span",{className:`sort ${a==="company_name"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("company_name"),children:[e.jsx("span",{className:"sort-label",children:"Company name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:e.jsxs("span",{className:`sort ${a==="company_owner_name"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("company_owner_name"),children:[e.jsx("span",{className:"sort-label",children:"Company owner name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:"Company Ownership"}),e.jsx("th",{className:"min-w-[320px]",children:"Address"}),e.jsx("th",{className:"min-w-[120px]",children:e.jsxs("span",{className:`sort ${a==="email"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[215px]",children:e.jsxs("span",{className:`sort ${a==="mobile_number"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("phone_number"),children:[e.jsx("span",{className:"sort-label",children:"Phone No 1"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[215px]",children:e.jsxs("span",{className:`sort ${a==="mobile_number"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Phone No 2"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[180px]",children:"Company Website"}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${a==="registration_date"?c==="ASC"?"asc":"desc":""}`,onClick:()=>d("registration_date"),children:[e.jsx("span",{className:"sort-label",children:"Registration Date"}),e.jsx("span",{className:"sort-icon"})]})}),(i(12,"update")||i(12,"delete")||i(12,"read"))&&e.jsx("th",{className:"min-w-[180px]",children:"Actions"})]})}),O?e.jsx(W,{}):h.length>0?e.jsx("tbody",{children:h.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.company_id})}),e.jsx("td",{children:e.jsx("span",{className:"cursor-pointer hover:text-primary",onClick:()=>C(`/company-profile/${s.company_id}`),children:s.company_name})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.company_owner_name})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:ae[s.company_ownedby]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.address})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.email})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.phone_number})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.mobile_number})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("a",{className:"text-gray-600 hover:text-primary",href:s.website,target:"_blank",rel:"noopener noreferrer",children:s.website})})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:H(s.registration_date).format("DD-MM-YYYY")})}),(i(12,"update")||i(12,"delete")||i(12,"read"))&&e.jsxs("td",{children:[i(12,"read")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>R(s.company_id),children:e.jsx(J,{size:18,className:"text-gray-600"})}),i(12,"update")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>M(s.company_id),children:e.jsx(K,{className:"text-yellow-600"})}),i(12,"delete")&&e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>B(s.company_id),children:e.jsx(Q,{className:"text-red-500"})})]})]},s.company_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No company available"})})})]})}),e.jsx(X,{count:_,currentPage:l,totalRecords:h==null?void 0:h.length,perPage:r,onPageChange:I,label:"company"})]})})]})},de=()=>{const l=A(),{hasPermission:n}=k(),r=()=>{l("/company/add")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Company"})}),n(12,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:r,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Company"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(ne,{})})})})]})};export{de as default};
