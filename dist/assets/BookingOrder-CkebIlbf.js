import{r as i,u as Q,i as B,j as e,m as W,F as X,e as Z,f as ee,g as se,b as ae,R as te,q as le}from"./index-CT6VIfFa.js";import{s as ne}from"./searchSchema--rbCQdOr.js";import{u as re,a as ie,O as ce}from"./OrderTableFilter-fqKCh58M.js";import{u as de}from"./useGenerateInvoice-Bq1iBdHk.js";import{L as oe}from"./Loading-OykDN2BW.js";import{T as me}from"./TableShimmer-B3Q61u69.js";import{g as $}from"./orderStatusClasses-HfHBGnti.js";import{d as b}from"./dayjs.min-C6v0hkmy.js";import{P as xe}from"./enums-CdakGUf3.js";import{S as g}from"./sweetalert2.esm.all-B0Dix5B2.js";import"./useGetBranches-B42c5J02.js";import"./useGetUsersByRole-CTA7yQMs.js";import"./MultiSelect-Wym16f3M.js";const he=({filters:d})=>{const[l,o]=i.useState(1),[c,h]=i.useState(10),[p,m]=Q(),[a,D]=i.useState(null),[n,f]=i.useState(null),_=p.get("page"),S=p.get("perPage"),[j,w]=i.useState(""),[v,Y]=i.useState(""),[T,F]=i.useState(""),[A,E]=i.useState();let I="booking_list";const{orders:u,loading:M,totalOrders:y,fetchOrders:R}=re(l,c,j,a,n,d.orderStatusFilter,d.customerFilter,d.branchFilter,d.pickupBoyFilter,d.deliveryBoyFilter,d.paymentTypeFilter,d.paymentStatusFilter,I),{deleteOrder:L}=ie(),{generateInvoice:z,loading:O}=de(),P=B(),N=Math.ceil(y/c);i.useEffect(()=>{_&&o(Number(_)),S&&h(Number(S))},[_,S]),i.useEffect(()=>{j&&(o(1),m({search:j,page:"1",perPage:c.toString()}))},[j]);const q=s=>{P(`/order/${s}`,{state:{from:"OrderTable"}})},U=async s=>{try{const{isConfirmed:t}=await g.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(t){const{success:k,message:x}=await L(s);k?(u.filter(K=>K.order_id!==s).length===0&&l>1&&(o(l-1),m({page:(l-1).toString(),perPage:c.toString()})),await R(),g.fire(x)):g.fire(x)}}catch(t){g.fire({title:"Error",text:t.message,icon:"error"})}},G=s=>{P(`/order/edit/${s}`,{state:{prevUrl:location.pathname}})},r=s=>{a===s?f(n==="ASC"?"DESC":"ASC"):(D(s),f("ASC"))},C=s=>{s>=1&&s<=N&&(o(s),m({page:s.toString(),perPage:c.toString()}))},V=s=>{const t=Number(s.target.value);h(t),o(1),m({page:"1",perPage:t.toString()})},H=async s=>{s.preventDefault();try{await ne.validate({search:v},{abortEarly:!1}),w(v),F("")}catch(t){t instanceof ae&&F(t.errors[0])}},J=async s=>{E(s),await z(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:c,onChange:V,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:H,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:v,onChange:s=>{Y(s.target.value),s.target.value===""&&w("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("span",{children:e.jsx("i",{className:"ki-filled ki-magnifier"})})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:T||" "})]})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[90px]",children:e.jsxs("span",{className:`sort ${a==="order_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("order_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${a==="first_name"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${a==="branch_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("branch_id"),children:[e.jsx("span",{className:"sort-label",children:"Assigned Branch"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[280px]",children:"Order Status"}),e.jsx("th",{className:"min-w-[280px]",children:"Next Status"}),e.jsx("th",{className:"min-w-[140px]",children:e.jsxs("span",{className:`sort ${a==="mobile_number"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:e.jsxs("span",{className:`sort ${a==="address_details"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("address_details"),children:[e.jsx("span",{className:"sort-label",children:"Shipping Address"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="created_at"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("created_at"),children:[e.jsx("span",{className:"sort-label",children:"Booking Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_pickup_time"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("estimated_pickup_time"),children:[e.jsx("span",{className:"sort-label",children:"Estimated Pickup Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_delivery_time"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("estimated_delivery_time"),children:[e.jsx("span",{className:"sort-label",children:"Delivery Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_code"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("coupon_code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_discount"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("coupon_discount"),children:[e.jsx("span",{className:"sort-label",children:"Coupon discount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="sub_total"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("sub_total"),children:[e.jsx("span",{className:"sort-label",children:"Bill Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[135px]",children:e.jsxs("span",{className:`sort ${a==="total"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("total"),children:[e.jsx("span",{className:"sort-label",children:"Total Duo Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[165px]",children:e.jsxs("span",{className:`sort ${a==="payment_type"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("payment_type"),children:[e.jsx("span",{className:"sort-label",children:"Payment type"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[160px]",children:"Receipt"}),e.jsx("th",{className:"w-[170px]",children:"Actions"})]})}),M?e.jsx(me,{}):u.length>0?e.jsx("tbody",{children:u.map(s=>{var x;const t=$(s.order_status_details.admin_label),k=$(s.order_status_details.next_step);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.order_id]}),e.jsx("td",{children:s.user.first_name+" "+s.user.last_name}),e.jsx("td",{children:(x=s==null?void 0:s.branch)==null?void 0:x.branch_name}),e.jsx("td",{children:e.jsx("span",{className:`${t} relative badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.admin_label})}),e.jsx("td",{children:s.order_status_details.next_step!=="NULL"&&e.jsxs("div",{className:"tooltip-custom",children:[e.jsx("span",{className:`${k} badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.next_step}),e.jsx("div",{className:"tooltip-text",children:s.order_status_details.description})]})}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.address_details}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[b(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),b(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:b(s.estimated_pickup_time).format("DD-MM-YYYY")})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[b(s.estimated_delivery_time).format("DD-MM-YYYY"),e.jsx("br",{})]})}),e.jsx("td",{children:s.coupon_code}),e.jsx("td",{children:s.coupon_discount}),e.jsx("td",{children:s.sub_total}),e.jsx("td",{children:s.total}),e.jsx("td",{children:xe[s.payment_type]}),e.jsx("td",{children:e.jsx("button",{className:"flex items-center mr-2 btn btn-light btn-sm",onClick:()=>J(s.order_id),disabled:O&&A===s.order_id,children:O&&A===s.order_id?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-cheque text-2xl link"}),"Receipt ",e.jsx(oe,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-cheque text-2xl link"}),"Receipt"]})})}),e.jsx("td",{children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>q(s.order_id),children:e.jsx(W,{size:18,className:"text-gray-600"})}),e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>G(s.order_id),children:e.jsx(X,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>U(s.order_id),children:e.jsx(Z,{className:"text-red-500"})})]})})]},s.order_id)})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Order available"})})})]})}),y>c&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",u.length," of ",y," Orders"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:l===1,onClick:()=>C(l-1),className:`btn ${l===1?"disabled":""}`,children:e.jsx(ee,{})}),Array.from({length:N}).map((s,t)=>e.jsx("button",{className:`btn ${l===t+1?"active":""}`,onClick:()=>C(t+1),children:t+1},t)),e.jsx("button",{disabled:l===N,onClick:()=>C(l+1),className:`btn ${l===N?"disabled":""}`,children:e.jsx(se,{})})]})]})})]})})]})},Fe=()=>{const d=B(),[l,o]=i.useState(!1),[c,h]=i.useState({paymentStatusFilter:[],orderStatusFilter:[],paymentTypeFilter:void 0,customerFilter:[],pickupBoyFilter:[],deliveryBoyFilter:[],branchFilter:[]}),p=()=>{d("/order/add",{state:{prevUrl:location.pathname}})},m=a=>{h(a)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Booking Orders"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:p,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Order"]})})]}),e.jsx("div",{className:"flex flex-auto items-center gap-2.5 mb-4 shadow-none",children:e.jsxs("button",{className:"btn btn-sm btn-primary shadow-none",onClick:()=>o(!l),children:["Filters",l?e.jsx(te,{size:23}):e.jsx(le,{color:"skyblue",size:23})]})})]}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[l&&e.jsx(ce,{filters:c,updateFilters:m})," ",e.jsx(he,{filters:c})]})})})]})};export{Fe as default};
