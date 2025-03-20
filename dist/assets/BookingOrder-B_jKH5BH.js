import{r,u as q,e as A,h as $,j as e,T as H,i as S,n as J,F as K,f as Q,P as X,s as Z,b as ee}from"./index-BEffa3rN.js";import{u as se,a as ae,O as te}from"./OrderTableFilter-CljOnURS.js";import{u as le}from"./useGenerateInvoice-CMQLiggp.js";import{g as F}from"./orderStatusClasses-HfHBGnti.js";import{P as re,O as ne}from"./enums-CdakGUf3.js";import{S as _}from"./sweetalert2.esm.all-B0Dix5B2.js";import{R as ce,a as ie}from"./index-BBnEuXdC.js";import"./useGetBranches-BMHp--Ns.js";import"./useGetUsersByRole-BZivqaYI.js";import"./MultiSelect-CU_68brn.js";const de=({filters:c})=>{const[i,m]=r.useState(1),[d,j]=r.useState(10),[g,h]=q(),[a,C]=r.useState(null),[t,x]=r.useState(null),p=g.get("page"),N=g.get("perPage"),[f,k]=r.useState(""),[v,B]=r.useState(""),[D,w]=r.useState(""),[oe,me]=r.useState();let Y="booking_list";const{orders:u,loading:T,count:O,fetchOrders:E}=se(i,d,f,a,t,c.orderStatusFilter,c.customerFilter,c.branchFilter,c.pickupBoyFilter,c.deliveryBoyFilter,c.paymentTypeFilter,c.paymentStatusFilter,Y),{deleteOrder:I}=ae();le();const{hasPermission:o}=A(),P=$(),M=Math.ceil(O/d);r.useEffect(()=>{p&&m(Number(p)),N&&j(Number(N))},[p,N]),r.useEffect(()=>{f&&(m(1),h({search:f,page:"1",perPage:d.toString()}))},[f]);const R=s=>{P(`/order/${s}`,{state:{from:"OrderTable"}})},z=async s=>{try{const{isConfirmed:n}=await _.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(n){const{success:y,message:b}=await I(s);y?(u.filter(V=>V.order_id!==s).length===0&&i>1&&(m(i-1),h({page:(i-1).toString(),perPage:d.toString()})),await E(),_.fire(b)):_.fire(b)}}catch(n){_.fire({title:"Error",text:n.message,icon:"error"})}},U=s=>{P(`/order/edit/${s}`,{state:{prevUrl:location.pathname}})},l=s=>{a===s?x(t==="ASC"?"DESC":"ASC"):(C(s),x("ASC"))},L=s=>{s>=1&&s<=M&&(m(s),h({page:s.toString(),perPage:d.toString()}))},W=s=>{const n=Number(s.target.value);j(n),m(1),h({page:"1",perPage:n.toString()})},G=async s=>{s.preventDefault();try{await Z.validate({search:v},{abortEarly:!1}),k(v),w("")}catch(n){n instanceof ee&&w(n.errors[0])}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:d,onChange:W,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:G,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:v,onChange:s=>{B(s.target.value),s.target.value===""&&k("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("span",{children:e.jsx("i",{className:"ki-filled ki-magnifier"})})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:D||" "})]})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[90px]",children:e.jsxs("span",{className:`sort ${a==="order_id"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("order_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${a==="first_name"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${a==="branch_name"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("branch_name"),children:[e.jsx("span",{className:"sort-label",children:"Assigned Branch"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[280px]",children:"Order Status"}),e.jsx("th",{className:"min-w-[280px]",children:"Next Status"}),e.jsx("th",{className:"min-w-[140px]",children:e.jsxs("span",{className:`sort ${a==="mobile_number"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:e.jsxs("span",{className:`sort ${a==="address_details"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("address_details"),children:[e.jsx("span",{className:"sort-label",children:"Shipping Address"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="created_at"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("created_at"),children:[e.jsx("span",{className:"sort-label",children:"Booking Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_pickup_time"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("estimated_pickup_time"),children:[e.jsx("span",{className:"sort-label",children:"Estimated Pickup Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_delivery_time"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("estimated_delivery_time"),children:[e.jsx("span",{className:"sort-label",children:"Delivery Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_code"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("coupon_code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_discount"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("coupon_discount"),children:[e.jsx("span",{className:"sort-label",children:"Coupon discount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="sub_total"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("sub_total"),children:[e.jsx("span",{className:"sort-label",children:"Bill Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[135px]",children:e.jsxs("span",{className:`sort ${a==="total"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("total"),children:[e.jsx("span",{className:"sort-label",children:"Total Duo Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[165px]",children:e.jsxs("span",{className:`sort ${a==="payment_type"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("payment_type"),children:[e.jsx("span",{className:"sort-label",children:"Payment type"}),e.jsx("span",{className:"sort-icon"})]})}),(o(3,"read")||o(3,"update")||o(3,"delete"))&&e.jsx("th",{className:"w-[170px]",children:"Actions"})]})}),T?e.jsx(H,{}):u.length>0?e.jsx("tbody",{children:u.map(s=>{var b;const n=F(s.order_status_details.admin_label),y=F(s.order_status_details.next_step);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.order_id]}),e.jsx("td",{children:s.user.first_name+" "+s.user.last_name}),e.jsx("td",{children:(b=s==null?void 0:s.branch)==null?void 0:b.branch_name}),e.jsx("td",{children:e.jsx("span",{className:`${n} relative badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.admin_label})}),e.jsx("td",{children:s.order_status_details.next_step!=="NULL"&&e.jsxs("div",{className:"tooltip-custom",children:[e.jsx("span",{className:`${y} badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.next_step}),e.jsx("div",{className:"tooltip-text",children:s.order_status_details.description})]})}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.address_details}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[S(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),S(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:S(s.estimated_pickup_time).format("DD-MM-YYYY")})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[S(s.estimated_delivery_time).format("DD-MM-YYYY"),e.jsx("br",{})]})}),e.jsx("td",{children:s.coupon_code}),e.jsx("td",{children:s.coupon_discount}),e.jsx("td",{children:s.sub_total}),e.jsx("td",{children:s.total}),e.jsx("td",{children:re[s.payment_type]}),(o(3,"read")||o(3,"update")||o(3,"delete"))&&e.jsx("td",{children:e.jsxs("div",{className:"flex",children:[o(3,"read")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>R(s.order_id),children:e.jsx(J,{size:18,className:"text-gray-600"})}),o(3,"update")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>U(s.order_id),children:e.jsx(K,{className:"text-yellow-600"})}),o(3,"delete")&&e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>z(s.order_id),children:e.jsx(Q,{className:"text-red-500"})})]})})]},s.order_id)})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Order available"})})})]})}),e.jsx(X,{count:O,currentPage:i,totalRecords:u==null?void 0:u.length,perPage:d,onPageChange:L,label:"orders"})]})})]})},ve=()=>{const c=$(),[i,m]=r.useState(!1),{hasPermission:d}=A(),[j,g]=r.useState({paymentStatusFilter:[],orderStatusFilter:[],paymentTypeFilter:void 0,customerFilter:[],pickupBoyFilter:[],deliveryBoyFilter:[],branchFilter:[]}),h=()=>{c("/order/add",{state:{prevUrl:location.pathname}})},a=x=>{g(x)},t=(x=>Object.entries(ne).filter(([p])=>x.includes(p)).map(([p,N])=>({label:p,value:N})))(["Items Received at Branch","Workshop Assigned","Order Received at Workshop","Order Work In Progress","Order Completed","Ready for delivery"]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Booking Orders"})}),d(3,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:h,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Order"]})})]}),e.jsx("div",{className:"flex flex-auto items-center gap-2.5 mb-4 shadow-none",children:e.jsxs("button",{className:"btn btn-sm btn-primary shadow-none",onClick:()=>m(!i),children:["Filters",i?e.jsx(ce,{size:23}):e.jsx(ie,{color:"skyblue",size:23})]})})]}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[i&&e.jsx(te,{filters:j,updateFilters:a,orderStatusOptions:t,showSearchInput:!1})," ",e.jsx(de,{filters:j})]})})})]})};export{ve as default};
