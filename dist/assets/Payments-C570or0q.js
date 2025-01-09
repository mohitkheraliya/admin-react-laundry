import{r,u as E,b7 as $,j as s,h as C,d as z,e as M,V as D}from"./index-Cl0BJhkB.js";import{s as F}from"./searchSchema-xlni_4BG.js";const I=()=>{const[t,m]=r.useState(1),[c,g]=r.useState(10),[N,b]=E(),[l,P]=r.useState(null),[n,f]=r.useState(null),x=N.get("page"),h=N.get("perPage"),[_,S]=r.useState(""),[j,w]=r.useState(""),[y,v]=r.useState(""),{payments:d,count:p}=$(t,c,_,l,n),o=Math.ceil(p/c);r.useEffect(()=>{x&&m(Number(x)),h&&g(Number(h))},[x,h]);const A=async e=>{e.preventDefault();try{await F.validate({search:j},{abortEarly:!1}),S(j),v("")}catch(a){a instanceof D&&v(a.errors[0])}},i=e=>{l===e?f(n==="ASC"?"DESC":"ASC"):(P(e),f("ASC"))},u=e=>{e>=1&&e<=o&&(m(e),b({page:e.toString(),perPage:c.toString()}))},k=e=>{const a=Number(e.target.value);g(a),m(1),b({page:"1",perPage:a.toString()})};if(d)return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx("span",{children:"Show"}),s.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:c,onChange:k,children:[s.jsx("option",{value:10,children:"10"}),s.jsx("option",{value:20,children:"20"})]}),s.jsx("span",{children:"per page"})]}),s.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:s.jsxs("div",{className:"flex flex-col items-start",children:[s.jsx("form",{onSubmit:A,className:"flex items-center gap-2",children:s.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[s.jsx("input",{type:"search",value:j,onChange:e=>{w(e.target.value),e.target.value===""&&S("")},placeholder:"Search...",className:"w-[275px] flex-grow"}),s.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:s.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),s.jsx("p",{className:"text-red-500 text-sm mt-1",children:y||" "})]})})]}),s.jsx("div",{className:"card-body",children:s.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[s.jsx("div",{className:"scrollable-x-auto",children:s.jsxs("table",{className:"table table-auto table-border",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsxs("th",{className:"min-w-[250px]",children:[s.jsxs("span",{className:`sort ${l==="first_name"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("first_name"),children:[s.jsx("span",{className:"sort-label",children:"Customer Name"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[250px]",children:[s.jsxs("span",{className:`sort ${l==="email"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("email"),children:[s.jsx("span",{className:"sort-label",children:"Email"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[130px]",children:[s.jsxs("span",{className:`sort ${l==="mobile_number"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("mobile_number"),children:[s.jsx("span",{className:"sort-label",children:"Mobile No"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[120px]",children:[s.jsxs("span",{className:`sort ${l==="razorpay_transition_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("razorpay_transition_id"),children:[s.jsx("span",{className:"sort-label",children:"Transaction Id"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsx("th",{className:"min-w-[120px]",children:"Created At"}),s.jsx("th",{className:"min-w-[60px]",children:"Status"}),s.jsx("th",{className:"min-w-[120px]",children:"Order Id"}),s.jsx("th",{className:"min-w-[60px]",children:"Currency"}),s.jsxs("th",{className:"min-w-[60px]",children:[s.jsxs("span",{className:`sort ${l==="amount"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("amount"),children:[s.jsx("span",{className:"sort-label",children:"Amount"}),s.jsx("span",{className:"sort-icon"})]})," "]})]})}),d.length>0?s.jsx("tbody",{children:d.map(e=>s.jsxs("tr",{children:[s.jsxs("td",{children:[e.user.first_name," ",e.user.last_name]}),s.jsx("td",{children:e.user.email}),s.jsx("td",{children:e.user.mobile_number}),s.jsx("td",{children:e.razorpay_transition_id}),s.jsx("td",{children:s.jsxs("div",{className:"flex items-center gap-2.5",children:[C(e.created_at).format("DD-MM-YYYY"),s.jsx("br",{}),C(e.created_at).format("hh:mm:ss A")]})}),s.jsx("td",{children:e.status}),s.jsx("td",{children:e.razorpay_order_id}),s.jsx("td",{children:e.currency}),s.jsx("td",{children:e.amount})]},e.razorpay_transition_id))}):s.jsx("tbody",{children:s.jsx("tr",{children:s.jsx("td",{colSpan:5,className:"text-center",children:"No Payments data available"})})})]})}),p>c&&s.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("span",{className:"text-gray-700",children:["Showing ",d.length," of ",p," Orders"]}),s.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[s.jsx("button",{disabled:t===1,onClick:()=>u(t-1),className:`btn ${t===1?"disabled":""}`,children:s.jsx(z,{})}),Array.from({length:o}).map((e,a)=>s.jsx("button",{className:`btn ${t===a+1?"active":""}`,onClick:()=>u(a+1),children:a+1},a)),s.jsx("button",{disabled:t===o,onClick:()=>u(t+1),className:`btn ${t===o?"disabled":""}`,children:s.jsx(M,{})})]})]})})]})})]})},R=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"container-fixed",children:s.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:s.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Payments"})})}),s.jsx("div",{className:"container-fixed",children:s.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:s.jsx("div",{className:"card card-grid min-w-full",children:s.jsx(I,{})})})})]});export{R as default};
