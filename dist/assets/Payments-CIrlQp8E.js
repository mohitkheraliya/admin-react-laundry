import{r as t,B as L,V as z,u as q,j as e,T as H,i as M,P as J,s as K,b as Q}from"./index-4Ya-CA-9.js";import{M as R}from"./MultiSelect-Dv2sTCZ4.js";import{u as W}from"./useGetUsersByRole-C447O7tq.js";import"./orderStatusClasses-HfHBGnti.js";const X=(h=1,d=10,c="",x,p,u,r)=>{const[y,i]=t.useState(),[C,f]=t.useState(0),[g,S]=t.useState(!1),b=async()=>{var P,N;const j=localStorage.getItem("authToken"),l=new URLSearchParams;h&&l.append("page_number",h.toString()),d&&l.append("per_page",d.toString()),c&&l.append("search",c),x&&l.append("sortBy",x),p&&l.append("order",p),u&&u.forEach(n=>l.append("user_id",n.toString())),r&&r.forEach(n=>l.append("status",n)),S(!0);try{const n=await fetch(`${L}/razorpay/transaction?${l}`,{method:"GET",headers:{Authorization:j?`Bearer ${j}`:""}}),o=await n.json();if(!n.ok){z.error(o.message,{position:"top-center"}),S(!1);return}i((P=o==null?void 0:o.data)==null?void 0:P.result),f((N=o==null?void 0:o.data)==null?void 0:N.count)}catch{z.error("Network Error : Failed to fetch payments")}finally{S(!1)}};return t.useEffect(()=>{b()},[h,d,c,x,p,u,r]),{payments:y,count:C,fetchPayments:b,loading:g}},Z=()=>{const[h,d]=t.useState(1),[c,x]=t.useState(10),[p,u]=q(),[r,y]=t.useState(null),[i,C]=t.useState(null),f=p.get("page"),g=p.get("perPage"),[S,b]=t.useState(""),[j,l]=t.useState(""),[P,N]=t.useState(""),[n,o]=t.useState(""),[V,B]=t.useState([]),[_,E]=t.useState([]),[A,k]=t.useState([]),{payments:m,count:$,loading:F}=X(h,c,S,r,i,A,_),I=[{label:"Created",value:"created"},{label:"Paid",value:"paid"},{label:"Attempted",value:"attempted"}],{fetchUsersByRole:T}=W(),O=Math.ceil($/c);t.useEffect(()=>{n&&(async()=>{const a=await T(5,n),G=a==null?void 0:a.map(w=>({label:`${w.first_name} ${w.last_name} (${w.mobile_number})`,value:w.user_id}));B(G)})()},[n]),t.useEffect(()=>{f&&d(Number(f)),g&&x(Number(g))},[f,g]);const U=async s=>{s.preventDefault();try{await K.validate({search:j},{abortEarly:!1}),b(j),N("")}catch(a){a instanceof Q&&N(a.errors[0])}},v=s=>{r===s?C(i==="ASC"?"DESC":"ASC"):(y(s),C("ASC"))},D=s=>{s>=1&&s<=O&&(d(s),u({page:s.toString(),perPage:c.toString()}))},Y=s=>{const a=Number(s.target.value);x(a),d(1),u({page:"1",perPage:a.toString()})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:c,onChange:Y,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-2 mb-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2.5",children:[e.jsx(R,{options:I,displayValue:"label",placeholder:"Select Payment Status",selectedValues:_,onSelect:s=>E(s.map(a=>a.value)),onRemove:s=>E(s.map(a=>a.value)),className:"min-w-[180px]",sliceCount:1}),e.jsx(R,{options:V,displayValue:"user_name",placeholder:"Select Customer",selectedValues:A,onSelect:s=>k(s.map(a=>a.value)),onRemove:s=>k(s.map(a=>a.value)),className:"sm:min-w-[320px] smmobile:min-w-[290px] smobile:min-w-[300px] vsmobile:min-w-[240px]",setSearch:o,isSearchInput:!0})]}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:U,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:j,onChange:s=>{l(s.target.value),s.target.value===""&&b("")},placeholder:"Search...",className:"min-w-[150px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:P||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${r==="first_name"?i==="ASC"?"asc":"desc":""}`,onClick:()=>v("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer Name"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${r==="email"?i==="ASC"?"asc":"desc":""}`,onClick:()=>v("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[130px]",children:[e.jsxs("span",{className:`sort ${r==="mobile_number"?i==="ASC"?"asc":"desc":""}`,onClick:()=>v("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile No"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[120px]",children:[e.jsxs("span",{className:`sort ${r==="razorpay_transaction_id"?i==="ASC"?"asc":"desc":""}`,onClick:()=>v("razorpay_transaction_id"),children:[e.jsx("span",{className:"sort-label",children:"Transaction Id"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsx("th",{className:"min-w-[120px]",children:"Created At"}),e.jsx("th",{className:"min-w-[60px]",children:"Status"}),e.jsx("th",{className:"min-w-[120px]",children:"Order Id"}),e.jsx("th",{className:"min-w-[60px]",children:"Currency"}),e.jsxs("th",{className:"min-w-[60px]",children:[e.jsxs("span",{className:`sort ${r==="amount"?i==="ASC"?"asc":"desc":""}`,onClick:()=>v("amount"),children:[e.jsx("span",{className:"sort-label",children:"Amount"}),e.jsx("span",{className:"sort-icon"})]})," "]})]})}),F?e.jsx(H,{}):(m==null?void 0:m.length)>0?e.jsx("tbody",{children:m.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[s.user.first_name," ",s.user.last_name]}),e.jsx("td",{children:s.user.email}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.razorpay_transaction_id}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[M(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),M(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.razorpay_order_id}),e.jsx("td",{children:s.currency}),e.jsx("td",{children:s.amount})]},s.razorpay_transaction_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Payments data available"})})})]})}),e.jsx(J,{count:$,currentPage:h,totalRecords:m==null?void 0:m.length,perPage:c,onPageChange:D,label:"records"})]})})]})},re=()=>e.jsxs("div",{className:"mt-5",children:[e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Payments"})})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(Z,{})})})})]});export{re as default};
