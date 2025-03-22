import{r,u as J,e as A,h as $,j as e,T as K,i as _,n as Q,F as W,f as X,P as Z,s as ee,b as se}from"./index-vHAOnTyK.js";import{u as ae,a as te,O as le}from"./OrderTableFilter-Dhumtf20.js";import{u as re}from"./useGenerateInvoice-CihIqCm9.js";import{g as F}from"./orderStatusClasses-HfHBGnti.js";import{P as ne,O as ce}from"./enums-CdakGUf3.js";import{S}from"./sweetalert2.esm.all-B0Dix5B2.js";import{R as ie,a as de}from"./index-Cjm_hXkM.js";import"./useGetBranches-ig9UqfVQ.js";import"./MultiSelect-Cv06liAY.js";const oe=({filters:c})=>{const[i,m]=r.useState(1),[d,j]=r.useState(10),[g,h]=J(),[a,k]=r.useState(null),[t,p]=r.useState(null),x=g.get("page"),N=g.get("perPage"),[f,w]=r.useState(""),[C,D]=r.useState(""),[B,P]=r.useState(""),[me,pe]=r.useState();let Y="order_list",T="pickup_order";const{orders:u,loading:E,count:O,fetchOrders:M}=ae(i,d,f,a,t,c.orderStatusFilter,c.customerFilter,c.branchFilter,c.pickupBoyFilter,c.deliveryBoyFilter,c.paymentTypeFilter,c.paymentStatusFilter,Y,T),{hasPermission:o}=A(),{deleteOrder:I}=te();re();const y=$(),z=Math.ceil(O/d);r.useEffect(()=>{x&&m(Number(x)),N&&j(Number(N))},[x,N]),r.useEffect(()=>{f&&(m(1),h({search:f,page:"1",perPage:d.toString()}))},[f]);const R=s=>{y(`/order/${s}`,{state:{from:"OrderTable"}})},L=async s=>{try{const{isConfirmed:n}=await S.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(n){const{success:v,message:b}=await I(s);v?(u.filter(H=>H.order_id!==s).length===0&&i>1&&(m(i-1),h({page:(i-1).toString(),perPage:d.toString()})),await M(),S.fire(b)):S.fire(b)}}catch(n){S.fire({title:"Error",text:n.message,icon:"error"})}},U=s=>{y(`/order/edit/${s}`,{state:{prevUrl:location.pathname}})},l=s=>{a===s?p(t==="ASC"?"DESC":"ASC"):(k(s),p("ASC"))},G=s=>{s>=1&&s<=z&&(m(s),h({page:s.toString(),perPage:d.toString()}))},V=s=>{const n=Number(s.target.value);j(n),m(1),h({page:"1",perPage:n.toString()})},q=async s=>{s.preventDefault();try{await ee.validate({search:C},{abortEarly:!1}),w(C),P("")}catch(n){n instanceof se&&P(n.errors[0])}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:d,onChange:V,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:q,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:C,onChange:s=>{D(s.target.value),s.target.value===""&&w("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("span",{children:e.jsx("i",{className:"ki-filled ki-magnifier"})})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:B||" "})]})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[90px]",children:e.jsxs("span",{className:`sort ${a==="order_id"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("order_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${a==="first_name"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${a==="branch_name"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("branch_name"),children:[e.jsx("span",{className:"sort-label",children:"Assigned Branch"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[280px]",children:"Order Status"}),e.jsx("th",{className:"min-w-[280px]",children:"Next Status"}),e.jsx("th",{className:"min-w-[140px]",children:e.jsxs("span",{className:`sort ${a==="mobile_number"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:e.jsxs("span",{className:`sort ${a==="address_details"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("address_details"),children:[e.jsx("span",{className:"sort-label",children:"Shipping Address"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="created_at"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("created_at"),children:[e.jsx("span",{className:"sort-label",children:"Booking Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_pickup_time"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("estimated_pickup_time"),children:[e.jsx("span",{className:"sort-label",children:"Estimated Pickup Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_delivery_time"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("estimated_delivery_time"),children:[e.jsx("span",{className:"sort-label",children:"Delivery Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_code"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("coupon_code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_discount"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("coupon_discount"),children:[e.jsx("span",{className:"sort-label",children:"Coupon discount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="sub_total"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("sub_total"),children:[e.jsx("span",{className:"sort-label",children:"Bill Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[135px]",children:e.jsxs("span",{className:`sort ${a==="total"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("total"),children:[e.jsx("span",{className:"sort-label",children:"Total Duo Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[165px]",children:e.jsxs("span",{className:`sort ${a==="payment_type"?t==="ASC"?"asc":"desc":""}`,onClick:()=>l("payment_type"),children:[e.jsx("span",{className:"sort-label",children:"Payment type"}),e.jsx("span",{className:"sort-icon"})]})}),(o(3,"read")||o(3,"update")||o(3,"delete"))&&e.jsx("th",{className:"w-[170px]",children:"Actions"})]})}),E?e.jsx(K,{}):u.length>0?e.jsx("tbody",{children:u.map(s=>{var b;const n=F(s.order_status_details.admin_label),v=F(s.order_status_details.next_step);return e.jsxs("tr",{children:[e.jsxs("td",{className:"cursor-pointer",onClick:()=>y(`/order/${s.order_id}`),children:["#",s.order_id]}),e.jsx("td",{children:s.user.first_name+" "+s.user.last_name}),e.jsx("td",{children:(b=s==null?void 0:s.branch)==null?void 0:b.branch_name}),e.jsx("td",{children:e.jsx("span",{className:`${n} relative badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.admin_label})}),e.jsx("td",{children:s.order_status_details.next_step!=="NULL"&&e.jsxs("div",{className:"tooltip-custom",children:[e.jsx("span",{className:`${v} badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.next_step}),e.jsx("div",{className:"tooltip-text",children:s.order_status_details.description})]})}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.address_details}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[_(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),_(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:_(s.estimated_pickup_time).format("DD-MM-YYYY")})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[_(s.estimated_delivery_time).format("DD-MM-YYYY"),e.jsx("br",{})]})}),e.jsx("td",{children:s.coupon_code}),e.jsx("td",{children:s.coupon_discount}),e.jsx("td",{children:s.sub_total}),e.jsx("td",{children:s.total}),e.jsx("td",{children:ne[s.payment_type]}),(o(3,"read")||o(3,"update")||o(3,"delete"))&&e.jsx("td",{children:e.jsxs("div",{className:"flex",children:[o(3,"read")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>R(s.order_id),children:e.jsx(Q,{size:18,className:"text-gray-600"})}),o(3,"update")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>U(s.order_id),children:e.jsx(W,{className:"text-yellow-600"})}),o(3,"delete")&&e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>L(s.order_id),children:e.jsx(X,{className:"text-red-500"})})]})})]},s.order_id)})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Order available"})})})]})}),e.jsx(Z,{count:O,currentPage:i,totalRecords:u==null?void 0:u.length,perPage:d,onPageChange:G,label:"orders"})]})})]})},Ce=()=>{const c=$(),[i,m]=r.useState(!1),{hasPermission:d}=A(),[j,g]=r.useState({paymentStatusFilter:[],orderStatusFilter:[],paymentTypeFilter:void 0,customerFilter:[],pickupBoyFilter:[],deliveryBoyFilter:[],branchFilter:[]}),h=()=>{c("/order/add",{state:{prevUrl:location.pathname}})},a=p=>{g(p)},t=(p=>Object.entries(ce).filter(([x])=>p.includes(x)).map(([x,N])=>({label:x,value:N})))(["Order Placed","Branch Assigned","Pickup Boy Assigned","Pickup Complete"]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Pickup Orders"})}),d(3,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:h,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Order"]})})]}),e.jsx("div",{className:"flex flex-auto items-center gap-2.5 mb-4 shadow-none",children:e.jsxs("button",{className:"btn btn-sm btn-primary shadow-none",onClick:()=>m(!i),children:["Filters",i?e.jsx(ie,{size:23}):e.jsx(de,{color:"skyblue",size:23})]})})]}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[i&&e.jsx(le,{filters:j,updateFilters:a,orderStatusOptions:t,showSearchInput:!1})," ",e.jsx(oe,{filters:j})]})})})]})};export{Ce as default};
