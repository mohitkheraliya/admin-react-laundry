import{r as c,u as Z,e as B,k as T,j as e,T as ee,l as g,o as se,F as ae,f as te,g as le,h as ne,s as re,b as ce,R as ie,w as de}from"./index-fK_RYAgp.js";import{u as oe,a as me,O as xe}from"./OrderTableFilter-23ml-yGL.js";import{u as he}from"./useGenerateInvoice-B2Ggshby.js";import{L as pe}from"./Loading-C_zOGovt.js";import{g as Y}from"./orderStatusClasses-HfHBGnti.js";import{P as je}from"./enums-CdakGUf3.js";import{S as f}from"./sweetalert2.esm.all-B0Dix5B2.js";import"./useGetBranches-DU9BThO5.js";import"./useGetUsersByRole-ZD8Mt0K1.js";import"./MultiSelect-BLYGz0sY.js";const ue=({filters:i})=>{const[l,m]=c.useState(1),[d,h]=c.useState(10),[j,x]=Z(),[a,_]=c.useState(null),[n,S]=c.useState(null),v=j.get("page"),y=j.get("perPage"),[u,P]=c.useState(""),[C,E]=c.useState(""),[I,A]=c.useState(""),[O,M]=c.useState();let R="order_list",L="pickup_order";const{orders:N,loading:z,totalOrders:k,fetchOrders:U}=oe(l,d,u,a,n,i.orderStatusFilter,i.customerFilter,i.branchFilter,i.pickupBoyFilter,i.deliveryBoyFilter,i.paymentTypeFilter,i.paymentStatusFilter,R,L),{hasPermission:o}=B(),{deleteOrder:q}=me(),{generateInvoice:G,loading:$}=he(),D=T(),b=Math.ceil(k/d);c.useEffect(()=>{v&&m(Number(v)),y&&h(Number(y))},[v,y]),c.useEffect(()=>{u&&(m(1),x({search:u,page:"1",perPage:d.toString()}))},[u]);const V=s=>{D(`/order/${s}`,{state:{from:"OrderTable"}})},H=async s=>{try{const{isConfirmed:t}=await f.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(t){const{success:F,message:p}=await q(s);F?(N.filter(X=>X.order_id!==s).length===0&&l>1&&(m(l-1),x({page:(l-1).toString(),perPage:d.toString()})),await U(),f.fire(p)):f.fire(p)}}catch(t){f.fire({title:"Error",text:t.message,icon:"error"})}},J=s=>{D(`/order/edit/${s}`,{state:{prevUrl:location.pathname}})},r=s=>{a===s?S(n==="ASC"?"DESC":"ASC"):(_(s),S("ASC"))},w=s=>{s>=1&&s<=b&&(m(s),x({page:s.toString(),perPage:d.toString()}))},K=s=>{const t=Number(s.target.value);h(t),m(1),x({page:"1",perPage:t.toString()})},Q=async s=>{s.preventDefault();try{await re.validate({search:C},{abortEarly:!1}),P(C),A("")}catch(t){t instanceof ce&&A(t.errors[0])}},W=async s=>{M(s),await G(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:d,onChange:K,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:Q,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:C,onChange:s=>{E(s.target.value),s.target.value===""&&P("")},placeholder:"Search...",className:"min-w-[185px]"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("span",{children:e.jsx("i",{className:"ki-filled ki-magnifier"})})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:I||" "})]})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[90px]",children:e.jsxs("span",{className:`sort ${a==="order_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("order_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[240px]",children:e.jsxs("span",{className:`sort ${a==="first_name"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${a==="branch_id"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("branch_id"),children:[e.jsx("span",{className:"sort-label",children:"Assigned Branch"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[280px]",children:"Order Status"}),e.jsx("th",{className:"min-w-[280px]",children:"Next Status"}),e.jsx("th",{className:"min-w-[140px]",children:e.jsxs("span",{className:`sort ${a==="mobile_number"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:e.jsxs("span",{className:`sort ${a==="address_details"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("address_details"),children:[e.jsx("span",{className:"sort-label",children:"Shipping Address"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="created_at"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("created_at"),children:[e.jsx("span",{className:"sort-label",children:"Booking Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_pickup_time"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("estimated_pickup_time"),children:[e.jsx("span",{className:"sort-label",children:"Estimated Pickup Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${a==="estimated_delivery_time"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("estimated_delivery_time"),children:[e.jsx("span",{className:"sort-label",children:"Delivery Date"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_code"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("coupon_code"),children:[e.jsx("span",{className:"sort-label",children:"Coupon code"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="coupon_discount"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("coupon_discount"),children:[e.jsx("span",{className:"sort-label",children:"Coupon discount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${a==="sub_total"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("sub_total"),children:[e.jsx("span",{className:"sort-label",children:"Bill Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[135px]",children:e.jsxs("span",{className:`sort ${a==="total"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("total"),children:[e.jsx("span",{className:"sort-label",children:"Total Duo Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[165px]",children:e.jsxs("span",{className:`sort ${a==="payment_type"?n==="ASC"?"asc":"desc":""}`,onClick:()=>r("payment_type"),children:[e.jsx("span",{className:"sort-label",children:"Payment type"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[160px]",children:"Receipt"}),(o(3,"read")||o(3,"update")||o(3,"delete"))&&e.jsx("th",{className:"w-[170px]",children:"Actions"})]})}),z?e.jsx(ee,{}):N.length>0?e.jsx("tbody",{children:N.map(s=>{var p;const t=Y(s.order_status_details.admin_label),F=Y(s.order_status_details.next_step);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.order_id]}),e.jsx("td",{children:s.user.first_name+" "+s.user.last_name}),e.jsx("td",{children:(p=s==null?void 0:s.branch)==null?void 0:p.branch_name}),e.jsx("td",{children:e.jsx("span",{className:`${t} relative badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.admin_label})}),e.jsx("td",{children:s.order_status_details.next_step!=="NULL"&&e.jsxs("div",{className:"tooltip-custom",children:[e.jsx("span",{className:`${F} badge-outline badge-xl rounded-[30px]`,children:s.order_status_details.next_step}),e.jsx("div",{className:"tooltip-text",children:s.order_status_details.description})]})}),e.jsx("td",{children:s.user.mobile_number}),e.jsx("td",{children:s.address_details}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[g(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),g(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:g(s.estimated_pickup_time).format("DD-MM-YYYY")})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[g(s.estimated_delivery_time).format("DD-MM-YYYY"),e.jsx("br",{})]})}),e.jsx("td",{children:s.coupon_code}),e.jsx("td",{children:s.coupon_discount}),e.jsx("td",{children:s.sub_total}),e.jsx("td",{children:s.total}),e.jsx("td",{children:je[s.payment_type]}),e.jsx("td",{children:e.jsx("button",{className:"flex items-center mr-2 btn btn-light btn-sm",onClick:()=>W(s.order_id),disabled:$&&O===s.order_id,children:$&&O===s.order_id?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-cheque text-2xl link"}),"Receipt ",e.jsx(pe,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ki-filled ki-cheque text-2xl link"}),"Receipt"]})})}),(o(3,"read")||o(3,"update")||o(3,"delete"))&&e.jsx("td",{children:e.jsxs("div",{className:"flex",children:[o(3,"read")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>V(s.order_id),children:e.jsx(se,{size:18,className:"text-gray-600"})}),o(3,"update")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>J(s.order_id),children:e.jsx(ae,{className:"text-yellow-600"})}),o(3,"delete")&&e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>H(s.order_id),children:e.jsx(te,{className:"text-red-500"})})]})})]},s.order_id)})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Order available"})})})]})}),k>d&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",N.length," of ",k," Orders"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:l===1,onClick:()=>w(l-1),className:`btn ${l===1?"disabled":""}`,children:e.jsx(le,{})}),Array.from({length:b}).map((s,t)=>e.jsx("button",{className:`btn ${l===t+1?"active":""}`,onClick:()=>w(t+1),children:t+1},t)),e.jsx("button",{disabled:l===b,onClick:()=>w(l+1),className:`btn ${l===b?"disabled":""}`,children:e.jsx(ne,{})})]})]})})]})})]})},Fe=()=>{const i=T(),[l,m]=c.useState(!1),{hasPermission:d}=B(),[h,j]=c.useState({paymentStatusFilter:[],orderStatusFilter:[],paymentTypeFilter:void 0,customerFilter:[],pickupBoyFilter:[],deliveryBoyFilter:[],branchFilter:[]}),x=()=>{i("/order/add",{state:{prevUrl:location.pathname}})},a=_=>{j(_)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Pickup Orders"})}),d(3,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:x,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Order"]})})]}),e.jsx("div",{className:"flex flex-auto items-center gap-2.5 mb-4 shadow-none",children:e.jsxs("button",{className:"btn btn-sm btn-primary shadow-none",onClick:()=>m(!l),children:["Filters",l?e.jsx(ie,{size:23}):e.jsx(de,{color:"skyblue",size:23})]})})]}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[l&&e.jsx(xe,{filters:h,updateFilters:a})," ",e.jsx(ue,{filters:h})]})})})]})};export{Fe as default};
