import{r as t,B as Y,V as M,u as G,j as e,l as R,g as q,h as H,s as J,b as K}from"./index-B3hfs0zu.js";import{M as V}from"./MultiSelect-D7RDZzXU.js";import{u as Q}from"./useGetUsersByRole-Cj2mJlDz.js";import"./orderStatusClasses-HfHBGnti.js";const W=(r=1,m=10,i="",h,x,p,n)=>{const[_,o]=t.useState(),[v,j]=t.useState(0),[f,g]=t.useState(!1),b=async()=>{var y,N;const u=localStorage.getItem("authToken"),c=new URLSearchParams;r&&c.append("page_number",r.toString()),m&&c.append("per_page",m.toString()),i&&c.append("search",i),h&&c.append("sortBy",h),x&&c.append("order",x),p&&p.forEach(l=>c.append("user_id",l.toString())),n&&n.forEach(l=>c.append("status",l)),g(!0);try{const l=await fetch(`${Y}/razorpay/transaction?${c}`,{method:"GET",headers:{Authorization:u?`Bearer ${u}`:""}}),d=await l.json();if(!l.ok){M.error(d.message,{position:"top-center"}),g(!1);return}o((y=d==null?void 0:d.data)==null?void 0:y.result),j((N=d==null?void 0:d.data)==null?void 0:N.count)}catch{M.error("Network Error : Failed to fetch payments")}finally{g(!1)}};return t.useEffect(()=>{b()},[r,m,i,h,x,p,n]),{payments:_,count:v,fetchPayments:b,loading:f}},X=()=>{const[r,m]=t.useState(1),[i,h]=t.useState(10),[x,p]=G(),[n,_]=t.useState(null),[o,v]=t.useState(null),j=x.get("page"),f=x.get("perPage"),[g,b]=t.useState(""),[u,c]=t.useState(""),[y,N]=t.useState(""),[l,d]=t.useState(""),[B,I]=t.useState([]),[k,$]=t.useState([]),[z,F]=t.useState([]),{payments:C,count:A}=W(r,i,g,n,o,z,k),O=[{label:"Created",value:"created"},{label:"Paid",value:"paid"},{label:"Attempted",value:"attempted"}],{fetchUsersByRole:U}=Q(),w=Math.ceil(A/i);t.useEffect(()=>{l&&(async()=>{const a=await U(5,l),T=a==null?void 0:a.map(P=>({label:`${P.first_name} ${P.last_name} (${P.mobile_number})`,value:P.user_id}));I(T)})()},[l]),t.useEffect(()=>{j&&m(Number(j)),f&&h(Number(f))},[j,f]);const D=async s=>{s.preventDefault();try{await J.validate({search:u},{abortEarly:!1}),b(u),N("")}catch(a){a instanceof K&&N(a.errors[0])}},S=s=>{n===s?v(o==="ASC"?"DESC":"ASC"):(_(s),v("ASC"))},E=s=>{s>=1&&s<=w&&(m(s),p({page:s.toString(),perPage:i.toString()}))},L=s=>{const a=Number(s.target.value);h(a),m(1),p({page:"1",perPage:a.toString()})};if(C)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:i,onChange:L,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-2 mb-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2.5",children:[e.jsx(V,{options:O,displayValue:"label",placeholder:"Select Payment Status",selectedValues:k,onSelect:s=>$(s.map(a=>a.value)),onRemove:s=>$(s.map(a=>a.value)),className:"min-w-[180px]",sliceCount:1}),e.jsx(V,{options:B,displayValue:"user_name",placeholder:"Select Customer",selectedValues:z,onSelect:s=>F(s.map(a=>a.value)),onRemove:s=>F(s.map(a=>a.value)),className:"sm:min-w-[320px] smmobile:min-w-[290px] smobile:min-w-[300px] vsmobile:min-w-[240px]",setSearch:d,isSearchInput:!0})]}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:D,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:u,onChange:s=>{c(s.target.value),s.target.value===""&&b("")},placeholder:"Search...",className:"min-w-[150px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:y||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${n==="first_name"?o==="ASC"?"asc":"desc":""}`,onClick:()=>S("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer Name"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${n==="email"?o==="ASC"?"asc":"desc":""}`,onClick:()=>S("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[130px]",children:[e.jsxs("span",{className:`sort ${n==="mobile_number"?o==="ASC"?"asc":"desc":""}`,onClick:()=>S("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile No"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[120px]",children:[e.jsxs("span",{className:`sort ${n==="razorpay_transaction_id"?o==="ASC"?"asc":"desc":""}`,onClick:()=>S("razorpay_transaction_id"),children:[e.jsx("span",{className:"sort-label",children:"Transaction Id"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsx("th",{className:"min-w-[120px]",children:"Created At"}),e.jsx("th",{className:"min-w-[60px]",children:"Status"}),e.jsx("th",{className:"min-w-[120px]",children:"Order Id"}),e.jsx("th",{className:"min-w-[60px]",children:"Currency"}),e.jsxs("th",{className:"min-w-[60px]",children:[e.jsxs("span",{className:`sort ${n==="amount"?o==="ASC"?"asc":"desc":""}`,onClick:()=>S("amount"),children:[e.jsx("span",{className:"sort-label",children:"Amount"}),e.jsx("span",{className:"sort-icon"})]})," "]})]})}),C.length>0?e.jsx("tbody",{children:C.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[s.user.first_name," ",s.user.last_name]}),e.jsx("td",{children:s.user.email}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.razorpay_transaction_id}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[R(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),R(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.razorpay_order_id}),e.jsx("td",{children:s.currency}),e.jsx("td",{children:s.amount})]},s.razorpay_transaction_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Payments data available"})})})]})}),A>i&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",C.length," of ",A," Orders"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:r===1,onClick:()=>E(r-1),className:`btn ${r===1?"disabled":""}`,children:e.jsx(q,{})}),Array.from({length:w}).map((s,a)=>e.jsx("button",{className:`btn ${r===a+1?"active":""}`,onClick:()=>E(a+1),children:a+1},a)),e.jsx("button",{disabled:r===w,onClick:()=>E(r+1),className:`btn ${r===w?"disabled":""}`,children:e.jsx(H,{})})]})]})})]})})]})},te=()=>e.jsxs("div",{className:"mt-5",children:[e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Payments"})})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(X,{})})})})]});export{te as default};
