import{r,u as K,i as D,j as e,m as Q,F as W,e as X,f as Z,g as ee,b as se,R as ae,q as te}from"./index-B25Ze_f8.js";import{u as le,a as ne,O as re}from"./OrderTableFilter-COem865q.js";import{u as ie}from"./useGenerateInvoice-D-7jm3oN.js";import{T as ce}from"./TableShimmer-2W1fPkpK.js";import{P as de}from"./enums-CdakGUf3.js";import{S as N}from"./sweetalert2.esm.all-B0Dix5B2.js";import{d as g}from"./dayjs.min-BRE0emgC.js";import{s as oe}from"./searchSchema-Cc4XUcmB.js";import{g as $}from"./orderStatusClasses-HfHBGnti.js";import{L as me}from"./Loading-BNCFoZ82.js";import"./useGetBranches-BSb_LTzV.js";import"./useGetUsersByRole-BafHPbUL.js";import"./MultiSelect-CdGkcxfR.js";const xe=({filters:d})=>{const[t,o]=r.useState(1),[c,h]=r.useState(10),[p,m]=K(),[l,Y]=r.useState(null),[n,f]=r.useState(null),_=p.get("page"),S=p.get("perPage"),[j,k]=r.useState(""),[v,B]=r.useState(""),[T,F]=r.useState(""),[A,E]=r.useState(),{orders:u,loading:I,totalOrders:y,fetchOrders:M}=le(t,c,j,l,n,d.orderStatusFilter,d.customerFilter,d.branchFilter,d.pickupBoyFilter,d.deliveryBoyFilter,d.paymentTypeFilter,d.paymentStatusFilter),{deleteOrder:R}=ne(),{generateInvoice:L,loading:O}=ie(),P=D(),b=Math.ceil(y/c);r.useEffect(()=>{_&&o(Number(_)),S&&h(Number(S))},[_,S]),r.useEffect(()=>{j&&(o(1),m({search:j,page:"1",perPage:c.toString()}))},[j]);const z=s=>{P(`/order/${s}`,{state:{from:"OrderTable"}})},q=async s=>{try{const{isConfirmed:a}=await N.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(a){const{success:w,message:x}=await R(s);w?(u.filter(J=>J.order_id!==s).length===0&&t>1&&(o(t-1),m({page:(t-1).toString(),perPage:c.toString()})),await M(),N.fire(x)):N.fire(x)}}catch(a){N.fire({title:"Error",text:a.message,icon:"error"})}},U=s=>{P(`/order/edit/${s}`,{state:{prevUrl:location.pathname}})},G=async s=>{s.preventDefault();try{await oe.validate({search:v},{abortEarly:!1}),k(v),F("")}catch(a){a instanceof se&&F(a.errors[0])}},i=s=>{l===s?f(n==="ASC"?"DESC":"ASC"):(Y(s),f("ASC"))},C=s=>{s>=1&&s<=b&&(o(s),m({page:s.toString(),perPage:c.toString()}))},V=s=>{const a=Number(s.target.value);h(a),o(1),m({page:"1",perPage:a.toString()})},H=async s=>{E(s),await L(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:c,onChange:V,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:G,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:v,onChange:s=>{B(s.target.value),s.target.value===""&&k("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:T||" "})]})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[90px]",children:e.jsxs("span",{className:`sort ${l==="order_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("order_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${l==="first_name"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${l==="branch_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("branch_id"),children:[e.jsx("span",{className:"sort-label",children:"Assigned Branch"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[280px]",children:"Order Status"}),e.jsx("th",{className:"min-w-[280px]",children:"Next Status"}),e.jsx("th",{className:"min-w-[140px]",children:e.jsxs("span",{className:`sort ${l==="mobile_number"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:"Shipping Address"}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${l==="created_at"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("created_at"),children:[e.jsx("span",{className:"sort-label",children:"Booking Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${l==="estimated_pickup_time"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("estimated_pickup_time"),children:[e.jsx("span",{className:"sort-label",children:"Estimated Pickup Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${l==="estimated_delivery_time"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("estimated_delivery_time"),children:[e.jsx("span",{className:"sort-label",children:"Delivery Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${l==="coupon_code"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("coupon_code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${l==="coupon_discount"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("coupon_discount"),children:[e.jsx("span",{className:"sort-label",children:"Coupon discount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${l==="sub_total"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("sub_total"),children:[e.jsx("span",{className:"sort-label",children:"Bill Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[135px]",children:e.jsxs("span",{className:`sort ${l==="total"?n==="ASC"?"asc":"desc":""}`,onClick:()=>i("total"),children:[e.jsx("span",{className:"sort-label",children:"Total Duo Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[165px]",children:"Payment type"}),e.jsx("th",{className:"min-w-[160px]",children:"Receipt"}),e.jsx("th",{className:"w-[170px]",children:"Actions"})]})}),I?e.jsx(ce,{}):u.length>0?e.jsx("tbody",{children:u.map(s=>{var x;const a=$(s.order_status_details.admin_label),w=$(s.order_status_details.next_step);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.order_id]}),e.jsx("td",{children:s.user.first_name+" "+s.user.last_name}),e.jsx("td",{children:(x=s==null?void 0:s.branch)==null?void 0:x.branch_name}),e.jsx("td",{children:e.jsx("span",{className:`${a} relative badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.admin_label})}),e.jsx("td",{children:s.order_status_details.next_step!=="NULL"&&e.jsxs("div",{className:"tooltip-custom",children:[e.jsx("span",{className:`${w} badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.next_step}),e.jsx("div",{className:"tooltip-text",children:s.order_status_details.description})]})}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.address_details}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[g(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),g(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:g(s.estimated_pickup_time).format("DD-MM-YYYY")})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[g(s.estimated_delivery_time).format("DD-MM-YYYY"),e.jsx("br",{})]})}),e.jsx("td",{children:s.coupon_code}),e.jsx("td",{children:s.coupon_discount}),e.jsx("td",{children:s.sub_total}),e.jsx("td",{children:s.total}),e.jsx("td",{children:de[s.payment_type]}),e.jsx("td",{children:e.jsx("button",{className:"flex items-center mr-2 btn btn-light btn-sm",onClick:()=>H(s.order_id),disabled:O&&A===s.order_id,children:O&&A===s.order_id?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-cheque text-2xl link"}),"Receipt ",e.jsx(me,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-cheque text-2xl link"}),"Receipt"]})})}),e.jsx("td",{children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>z(s.order_id),children:e.jsx(Q,{size:18,className:"text-gray-600"})}),e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>U(s.order_id),children:e.jsx(W,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>q(s.order_id),children:e.jsx(X,{className:"text-red-500"})})]})})]},s.order_id)})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Order available"})})})]})}),y>c&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",u.length," of ",y," Orders"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:t===1,onClick:()=>C(t-1),className:`btn ${t===1?"disabled":""}`,children:e.jsx(Z,{})}),Array.from({length:b}).map((s,a)=>e.jsx("button",{className:`btn ${t===a+1?"active":""}`,onClick:()=>C(a+1),children:a+1},a)),e.jsx("button",{disabled:t===b,onClick:()=>C(t+1),className:`btn ${t===b?"disabled":""}`,children:e.jsx(ee,{})})]})]})})]})})]})},ke=()=>{const d=D(),[t,o]=r.useState(!1),[c,h]=r.useState({paymentStatusFilter:[],orderStatusFilter:[],paymentTypeFilter:void 0,customerFilter:[],pickupBoyFilter:[],deliveryBoyFilter:[],branchFilter:[]}),p=()=>{d("/order/add",{state:{prevUrl:location.pathname}})},m=l=>{h(l)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Orders"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:p,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Order"]})})]}),e.jsx("div",{className:"flex flex-auto items-center gap-2.5 mb-4 shadow-none",children:e.jsxs("button",{className:"btn btn-sm btn-primary shadow-none",onClick:()=>o(!t),children:["Filters",t?e.jsx(ae,{size:23}):e.jsx(te,{color:"skyblue",size:23})]})})]}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[t&&e.jsx(re,{filters:c,updateFilters:m})," ",e.jsx(xe,{filters:c})]})})})]})};export{ke as default};
