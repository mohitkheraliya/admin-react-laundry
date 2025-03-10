import{r as c,u as q,g as M,j as e,k as Z,F as H,b as J,d as K,e as Q,V as X,Y as ee,Z as y,$ as se,a0 as ae}from"./index-2OuGMmVb.js";import{s as te}from"./searchSchema-Btv9Z0cO.js";import{T as re}from"./TableShimmer-sMksu-RW.js";import{G as F}from"./enums-CdakGUf3.js";import{u as le,a as ie}from"./useDeleteUser-wZm2tCUl.js";import{S as g}from"./sweetalert2.esm.all-DwEdJQJv.js";import{M as ne}from"./MultiSelect-CHYv1z2S.js";import"./orderStatusClasses-HfHBGnti.js";const oe=()=>{const[a,l]=c.useState(1),[i,m]=c.useState(10),[r,n]=c.useState(null),[o,h]=c.useState(),[w,u]=q(),[C,S]=c.useState([]),j=w.get("page"),b=w.get("perPage"),[x,k]=c.useState(""),[A,T]=c.useState(""),[$,_]=c.useState(""),P=M();let z=5;const{users:d,loading:G,count:N,fetchUsers:B}=le(a,i,x,r,o,C,z),{deleteUser:I}=ie(),U=Object.entries(F).filter(([s,t])=>typeof t=="number").map(([s,t])=>({label:s,value:t})),f=Math.ceil(N/i);c.useEffect(()=>{j&&l(Number(j)),b&&m(Number(b))},[j,b]),c.useEffect(()=>{x&&(l(1),u({search:x,page:"1",perPage:i.toString()}))},[x]);const R=async s=>{s.preventDefault();try{await te.validate({search:x},{abortEarly:!1}),k(A),_("")}catch(t){t instanceof X&&_(t.errors[0])}},p=s=>{r===s?h(o==="ASC"?"DESC":"ASC"):(n(s),h("ASC"))},v=s=>{s>=1&&s<=f&&(l(s),u({page:s.toString(),perPage:i.toString()}))},L=s=>{const t=Number(s.target.value);m(t),l(1),u({page:"1",perPage:t.toString()})},O=async s=>{P(`/customer/${s}`)},V=s=>{P(`/customer/edit/${s}`)},D=async s=>{try{const{isConfirmed:t}=await g.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(t){const{success:W,message:E}=await I(s);W?(d.filter(Y=>Y.user_id!==s).length===0&&a>1&&(l(a-1),u({page:(a-1).toString(),perPage:i.toString()})),await B(),g.fire(E)):g.fire(E)}}catch(t){g.fire({title:"Error",text:t.message,icon:"error"})}};if(d)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:i,onChange:L,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.jsx(ne,{options:U,displayValue:"label",placeholder:"Select Gender",selectedValues:C,onSelect:s=>S(s.map(t=>t.value)),onRemove:s=>S(s.map(t=>t.value)),className:"min-w-[250px]",isSearchInput:!1})}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:R,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:A,onChange:s=>{T(s.target.value),s.target.value===""&&k("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:$||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[70px]",children:e.jsxs("span",{className:`sort ${r==="id"?o==="ASC"?"asc":"desc":""}`,onClick:()=>p("id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${r==="first_name"?o==="ASC"?"asc":"desc":""}`,onClick:()=>p("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Full name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${r==="email"?o==="ASC"?"asc":"desc":""}`,onClick:()=>p("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[190px]",children:e.jsxs("span",{className:`sort ${r==="mobile_number"?o==="ASC"?"asc":"desc":""}`,onClick:()=>p("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[80px]",children:"Gender"}),e.jsx("th",{className:"min-w-[150px]",children:e.jsxs("span",{className:`sort ${r==="total_pending_amount"?o==="ASC"?"asc":"desc":""}`,onClick:()=>p("total_pending_amount"),children:[e.jsx("span",{className:"sort-label",children:"Total Pending Amount"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[150px]",children:"Actions"})]})}),G?e.jsx(re,{}):d.length>0?e.jsx("tbody",{children:d==null?void 0:d.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.user_id})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-1.5",children:[s.first_name," ",s.last_name]})}),e.jsx("td",{children:s.email}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-1.5",children:s.mobile_number})}),e.jsx("td",{children:F[s.gender]}),e.jsx("td",{children:s.total_due_amount}),e.jsxs("td",{className:"flex",children:[e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-[11px] rounded-full",onClick:()=>O(s.user_id),children:e.jsx(Z,{size:18,className:"text-gray-600"})}),e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>V(s.user_id),children:e.jsx(H,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>D(s.user_id),children:e.jsx(J,{className:"text-red-500"})})]})]},s.user_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No customer available"})})})]})}),N>i&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",d.length," of ",N," Users"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:a===1,onClick:()=>v(a-1),className:`btn ${a===1?"disabled":""}`,children:e.jsx(K,{})}),Array.from({length:f}).map((s,t)=>e.jsx("button",{className:`btn ${a===t+1?"active":""}`,onClick:()=>v(t+1),children:t+1},t)),e.jsx("button",{disabled:a===f,onClick:()=>v(a+1),className:`btn ${a===f?"disabled":""}`,children:e.jsx(Q,{})})]})]})})]})})]})},ce=()=>{const{customerActivityData:a,fetchCustomerActivityData:l}=ee();c.useEffect(()=>{l()},[]);const i=(a==null?void 0:a.map(n=>n.month))||[],r={series:[{name:"Login Count",data:(a==null?void 0:a.map(n=>n.login_count))||[]}],options:{chart:{type:"area",height:240,toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#4154f1"],fill:{gradient:{enabled:!0,opacityFrom:.25,opacityTo:.1}},grid:{borderColor:"rgba(0, 0, 0, 0)",strokeDashArray:5,padding:{top:0,right:0,bottom:31,left:0}},stroke:{curve:"smooth",show:!0,width:3,colors:["#4154f1"]},legend:{show:!1},xaxis:{categories:i,labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1},crosshairs:{show:!1}},markers:{colors:"#4154f1",strokeColors:"#4154f1",strokeWidth:4,hover:{size:5}},yaxis:{show:!1},tooltip:{x:{format:"MMM yyyy"}}}};return e.jsx("div",{className:"card pb-2.5 max-h-[250px] rounded-md",children:e.jsxs("div",{className:"card-body card-fit grid gap-1",children:[e.jsx("div",{className:"flex justify-between ml-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"card-title text-base",children:"Activity"}),e.jsx("span",{className:"text-gray-500 font-medium",children:"Customer Login Count"})]})}),e.jsx("div",{className:"h-[240px] w-full",children:e.jsx("div",{className:"relative h-full w-full",children:e.jsx(y,{options:r.options,series:r.series,type:r.options.chart.type,height:200})})})]})})},de=()=>{const{customerData:a,fetchNewCustomerData:l}=se();c.useEffect(()=>{l()},[]);const i=(a==null?void 0:a.map(o=>o.month))||[],m=(a==null?void 0:a.map(o=>o.customer_count))||[],r=a==null?void 0:a.reduce((o,h)=>o+Number(h.customer_count),0),n={series:[{name:"New Customer",data:m}],options:{chart:{fontFamily:"inherit",type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:"blue"},xaxis:{categories:i,axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{labels:{style:{colors:"var(--tw-gray-500)",fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"}},colors:["#ECE852"],grid:{strokeDashArray:4,yaxis:{lines:{show:!0}}}}};return e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card w-full rounded-md",children:[e.jsxs("div",{className:"card-header border-none",children:[e.jsx("div",{className:"flex flex-col justify-between",children:e.jsx("h3",{className:"card-title",children:"New Customer"})}),e.jsx("div",{className:"mt-2",children:e.jsxs("span",{className:"p-3 bg-red-50 rounded-md relative text-gray-500 semibold",children:["+",r]})})]}),e.jsx("div",{className:"card-body no-padding-left grid gap-1",children:e.jsx("div",{className:"h-[150px]",children:e.jsx(y,{options:n.options,series:n.series,type:n.options.chart.type,height:150})})})]})})},me=()=>{const{customerData:a,fetchInActiveCustomerData:l}=ae();c.useEffect(()=>{l()},[]);const i=(a==null?void 0:a.map(n=>n.month))||[],r={series:[{name:"No Active Customer",data:(a==null?void 0:a.map(n=>n.not_active_count))||[]}],options:{chart:{type:"area",height:200,toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#4154f1"],fill:{gradient:{enabled:!0,opacityFrom:.25,opacityTo:.1}},grid:{borderColor:"rgba(0, 0, 0, 0)",strokeDashArray:5,padding:{top:0,right:0,bottom:20,left:0}},stroke:{curve:"smooth",show:!0,width:3,colors:["#4154f1"]},legend:{show:!1},xaxis:{categories:i,labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1},crosshairs:{show:!1}},markers:{colors:"#4154f1",strokeColors:"#4154f1",strokeWidth:4,hover:{size:5}},yaxis:{show:!1},tooltip:{x:{format:"MMM yyyy"}}}};return e.jsx("div",{className:"card pb-2.5 max-h-[250px] rounded-md",children:e.jsxs("div",{className:"card-body card-fit grid gap-1",children:[e.jsx("div",{className:"flex justify-between ml-5",children:e.jsx("div",{children:e.jsx("h3",{className:"card-title text-lg",children:"In Active Customer"})})}),e.jsx("div",{className:"h-[240px] w-full",children:e.jsx("div",{className:"relative h-full w-full",children:e.jsx(y,{options:r.options,series:r.series,type:r.options.chart.type,height:r.options.chart.height})})})]})})},ve=()=>{const a=M(),l=()=>{a("/customer/add")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 desktop:grid-cols-1 zx:grid-cols-1 pb-8 gap-x-4 gap-y-4",children:[e.jsx(ce,{}),e.jsx(de,{}),e.jsx(me,{})]}),e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-4",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Customers"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{className:"btn btn-primary",onClick:l,children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Customer"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(oe,{})})})})]})};export{ve as default};
