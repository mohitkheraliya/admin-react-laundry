import{r as t,u as G,S as T,j as e,d as L,e as q,V as H}from"./index-JqtrFc43.js";import{s as J}from"./searchSchema-B6PhX2jp.js";import{d as $}from"./dayjs.min-DtjhIJn-.js";import{M as k}from"./MultiSelect-D02MRDs9.js";import{u as K}from"./useGetUsersByRole-DuzrX8gH.js";import"./orderStatusClasses-HfHBGnti.js";const Q=()=>{const[r,x]=t.useState(1),[c,N]=t.useState(10),[g,S]=G(),[l,E]=t.useState(null),[n,v]=t.useState(null),h=g.get("page"),p=g.get("perPage"),[M,C]=t.useState(""),[u,O]=t.useState(""),[z,w]=t.useState(""),[j,F]=t.useState(""),[R,V]=t.useState([]),[y,P]=t.useState([]),[_,A]=t.useState([]),{payments:o,count:b}=T(r,c,M,l,n,_,y),I=[{label:"Created",value:"created"},{label:"Paid",value:"paid"},{label:"Attempted",value:"attempted"}],{fetchUsersByRole:D}=K(),d=Math.ceil(b/c);t.useEffect(()=>{j&&(async()=>{const a=await D(5,j),B=a==null?void 0:a.map(m=>({label:`${m.first_name} ${m.last_name} (${m.mobile_number})`,value:m.user_id}));V(B)})()},[j]),t.useEffect(()=>{h&&x(Number(h)),p&&N(Number(p))},[h,p]);const Y=async s=>{s.preventDefault();try{await J.validate({search:u},{abortEarly:!1}),C(u),w("")}catch(a){a instanceof H&&w(a.errors[0])}},i=s=>{l===s?v(n==="ASC"?"DESC":"ASC"):(E(s),v("ASC"))},f=s=>{s>=1&&s<=d&&(x(s),S({page:s.toString(),perPage:c.toString()}))},U=s=>{const a=Number(s.target.value);N(a),x(1),S({page:"1",perPage:a.toString()})};if(o)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:c,onChange:U,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-2 mb-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2.5",children:[e.jsx(k,{options:I,displayValue:"label",placeholder:"Select Payment Status",selectedValues:y,onSelect:s=>P(s.map(a=>a.value)),onRemove:s=>P(s.map(a=>a.value)),className:"min-w-[180px]",sliceCount:1,isSearchInput:!1}),e.jsx(k,{options:R,displayValue:"user_name",placeholder:"Select Customer",selectedValues:_,onSelect:s=>A(s.map(a=>a.value)),onRemove:s=>A(s.map(a=>a.value)),className:"sm:min-w-[320px] smmobile:min-w-[290px] smobile:min-w-[300px] vsmobile:min-w-[240px]",setSearch:F})]}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:Y,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:u,onChange:s=>{O(s.target.value),s.target.value===""&&C("")},placeholder:"Search...",className:"min-w-[150px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:z||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${l==="first_name"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer Name"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${l==="email"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[130px]",children:[e.jsxs("span",{className:`sort ${l==="mobile_number"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile No"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[120px]",children:[e.jsxs("span",{className:`sort ${l==="razorpay_transaction_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("razorpay_transaction_id"),children:[e.jsx("span",{className:"sort-label",children:"Transaction Id"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsx("th",{className:"min-w-[120px]",children:"Created At"}),e.jsx("th",{className:"min-w-[60px]",children:"Status"}),e.jsx("th",{className:"min-w-[120px]",children:"Order Id"}),e.jsx("th",{className:"min-w-[60px]",children:"Currency"}),e.jsxs("th",{className:"min-w-[60px]",children:[e.jsxs("span",{className:`sort ${l==="amount"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("amount"),children:[e.jsx("span",{className:"sort-label",children:"Amount"}),e.jsx("span",{className:"sort-icon"})]})," "]})]})}),o.length>0?e.jsx("tbody",{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[s.user.first_name," ",s.user.last_name]}),e.jsx("td",{children:s.user.email}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.razorpay_transaction_id}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[$(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),$(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.razorpay_order_id}),e.jsx("td",{children:s.currency}),e.jsx("td",{children:s.amount})]},s.razorpay_transaction_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Payments data available"})})})]})}),b>c&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",o.length," of ",b," Orders"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:r===1,onClick:()=>f(r-1),className:`btn ${r===1?"disabled":""}`,children:e.jsx(L,{})}),Array.from({length:d}).map((s,a)=>e.jsx("button",{className:`btn ${r===a+1?"active":""}`,onClick:()=>f(a+1),children:a+1},a)),e.jsx("button",{disabled:r===d,onClick:()=>f(r+1),className:`btn ${r===d?"disabled":""}`,children:e.jsx(q,{})})]})]})})]})})]})},te=()=>e.jsxs("div",{className:"mt-5",children:[e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Payments"})})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(Q,{})})})})]});export{te as default};
