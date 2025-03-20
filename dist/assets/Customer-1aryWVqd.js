import{r as c,B as C,V as g,u as Z,h as T,e as E,j as e,T as ee,n as te,F as se,f as ae,P as re,s as oe,b as ie,X as S,Y as D,i as j}from"./index-BEffa3rN.js";import{G as F}from"./enums-CdakGUf3.js";import{u as ne,a as le}from"./useDeleteUser-B4Lzc7qY.js";import{S as w}from"./sweetalert2.esm.all-B0Dix5B2.js";import{M as ce}from"./MultiSelect-CU_68brn.js";import"./orderStatusClasses-HfHBGnti.js";const de=()=>{const[r,l]=c.useState(),[a,n]=c.useState(!1);return{customerActivityData:r,loading:a,fetchCustomerActivityData:async(h,i)=>{const d=localStorage.getItem("authToken"),t=new URLSearchParams;h&&t.append("startDate",h),i&&t.append("endDate",i),n(!0);try{const o=await fetch(`${C}/report/customer-activity?${t}`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),x=await o.json();if(!o.ok){g.error(x.message,{position:"top-center"}),n(!1);return}l(x)}catch{g.error("Network error: Failed to fetch customer activity data.")}finally{n(!1)}}}},me=()=>{const[r,l]=c.useState(),[a,n]=c.useState(!1);return{customerData:r,loading:a,fetchNewCustomerData:async(h,i)=>{const d=localStorage.getItem("authToken"),t=new URLSearchParams;h&&t.append("startDate",h),i&&t.append("endDate",i),n(!0);try{const o=await fetch(`${C}/report/new-customer-acquisition-report?${t}`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),x=await o.json();if(!o.ok){g.error(x.message,{position:"top-center"}),n(!1);return}l(x)}catch{g.error("Network error: Failed to fetch customer data.")}finally{n(!1)}}}},he=()=>{const[r,l]=c.useState(),[a,n]=c.useState(!1);return{customerData:r,loading:a,fetchInActiveCustomerData:async(h,i)=>{const d=localStorage.getItem("authToken"),t=new URLSearchParams;h&&t.append("startDate",h),i&&t.append("endDate",i),n(!0);try{const o=await fetch(`${C}/report/inactive-customer-report?${t}`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),x=await o.json();if(!o.ok){g.error(x.message,{position:"top-center"}),n(!1);return}l(x)}catch{g.error("Failed to fetch in active customer data.")}finally{n(!1)}}}},pe=()=>{const[r,l]=c.useState(1),[a,n]=c.useState(10),[p,h]=c.useState(null),[i,d]=c.useState(),[t,o]=Z(),[x,k]=c.useState([]),N=t.get("page"),v=t.get("perPage"),[y,_]=c.useState(""),[P,$]=c.useState(""),[z,A]=c.useState(""),Y=T();let R=5;const{users:u,loading:G,count:M,fetchUsers:I}=ne(r,a,y,p,i,x,R),{deleteUser:L}=le(),{hasPermission:f}=E(),U=Object.entries(F).filter(([s,m])=>typeof m=="number").map(([s,m])=>({label:s,value:m})),V=Math.ceil(M/a);c.useEffect(()=>{N&&l(Number(N)),v&&n(Number(v))},[N,v]),c.useEffect(()=>{y&&(l(1),o({search:y,page:"1",perPage:a.toString()}))},[y]);const W=async s=>{s.preventDefault();try{await oe.validate({search:y},{abortEarly:!1}),_(P),A("")}catch(m){m instanceof ie&&A(m.errors[0])}},b=s=>{p===s?d(i==="ASC"?"DESC":"ASC"):(h(s),d("ASC"))},q=s=>{s>=1&&s<=V&&(l(s),o({page:s.toString(),perPage:a.toString()}))},O=s=>{const m=Number(s.target.value);n(m),l(1),o({page:"1",perPage:m.toString()})},K=async s=>{Y(`/customer/${s}`)},X=s=>{Y(`/customer/edit/${s}`)},H=async s=>{try{const{isConfirmed:m}=await w.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(m){const{success:J,message:B}=await L(s);J?(u.filter(Q=>Q.user_id!==s).length===0&&r>1&&(l(r-1),o({page:(r-1).toString(),perPage:a.toString()})),await I(),w.fire(B)):w.fire(B)}}catch(m){w.fire({title:"Error",text:m.message,icon:"error"})}};if(u)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:a,onChange:O,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.jsx(ce,{options:U,displayValue:"label",placeholder:"Select Gender",selectedValues:x,onSelect:s=>k(s.map(m=>m.value)),onRemove:s=>k(s.map(m=>m.value)),className:"lgscreen:min-w-[230px] mini:min-w-[250px]",sliceCount:2})}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:W,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:P,onChange:s=>{$(s.target.value),s.target.value===""&&_("")},placeholder:"Search...",className:"mini:min-w-[185px] lgscreen:min-w-[150px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:z||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[70px]",children:e.jsxs("span",{className:`sort ${p==="user_id"?i==="ASC"?"asc":"desc":""}`,onClick:()=>b("user_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${p==="first_name"?i==="ASC"?"asc":"desc":""}`,onClick:()=>b("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Full name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${p==="email"?i==="ASC"?"asc":"desc":""}`,onClick:()=>b("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[190px]",children:e.jsxs("span",{className:`sort ${p==="mobile_number"?i==="ASC"?"asc":"desc":""}`,onClick:()=>b("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[80px]",children:"Gender"}),e.jsx("th",{className:"min-w-[150px]",children:"Total Pending Amount"}),(f(8,"read")||f(8,"update")||f(8,"delete"))&&e.jsx("th",{className:"min-w-[180px]",children:"Actions"})]})}),G?e.jsx(ee,{}):u.length>0?e.jsx("tbody",{children:u==null?void 0:u.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:s.user_id})}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-1.5",children:[s.first_name," ",s.last_name]})}),e.jsx("td",{children:s.email}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-1.5",children:s.mobile_number})}),e.jsx("td",{children:F[s.gender]}),e.jsx("td",{children:s.total_due_amount}),(f(8,"read")||f(8,"update")||f(8,"delete"))&&e.jsxs("td",{className:"space-x-3",children:[f(8,"read")&&e.jsx("button",{className:"bg-yellow-100 hover:bg-yellow-200 p-[9px] rounded-full",style:{marginBottom:"-30px"},onClick:()=>K(s.user_id),children:e.jsx(te,{size:18,className:"text-gray-600"})}),f(8,"update")&&e.jsx("button",{className:"bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>X(s.user_id),children:e.jsx(se,{className:"text-yellow-600"})}),f(8,"delete")&&e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>H(s.user_id),children:e.jsx(ae,{className:"text-red-500"})})]})]},s.user_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No customer available"})})})]})}),e.jsx(re,{count:M,currentPage:r,totalRecords:u==null?void 0:u.length,perPage:a,onPageChange:q,label:"customers"})]})})]})},{RangePicker:xe}=S,ue=()=>{const[r,l]=c.useState({start_time:"",end_time:""}),{customerActivityData:a,fetchCustomerActivityData:n}=de();c.useEffect(()=>{r.start_time&&r.end_time?n(r.start_time,r.end_time):n()},[r]);const p=(t,o)=>{l(t?{start_time:j(t[0]).format("DD-MM-YYYY"),end_time:j(t[1]).format("DD-MM-YYYY")}:{start_time:"",end_time:""})},h=(a==null?void 0:a.map(t=>t.month.split("-")[0]))||[],i=(a==null?void 0:a.map(t=>t.login_count))||[],d={series:[{name:"Login Count",data:i}],options:{chart:{type:"area",height:240,toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#4154f1"],fill:{gradient:{enabled:!0,opacityFrom:.25,opacityTo:.1}},grid:{borderColor:"rgba(0, 0, 0, 0)",strokeDashArray:5,padding:{top:0,right:0,bottom:20,left:8}},stroke:{curve:"smooth",show:!0,width:3,colors:["#4154f1"]},legend:{show:!1},xaxis:{type:"category",categories:h,labels:{show:!0,style:{colors:"#6B7280",fontSize:"12px",fontWeight:500}},axisTicks:{show:!0,color:"#D1D5DB",height:6},axisBorder:{show:!0,color:"#D1D5DB"},crosshairs:{position:"front",stroke:{color:"#3B82F6",width:1,dashArray:3}}},markers:{size:(i==null?void 0:i.length)===1?3:0,colors:"#4154f1",strokeColors:"#4154f1",strokeWidth:4,hover:{size:5}},yaxis:{min:0,tickAmount:1,axisTicks:{show:!1},labels:{style:{colors:"var(--tw-gray-500)",fontSize:"12px"},formatter:t=>t>=1e3?`₹${(t/1e3).toFixed(0)}K`:t.toString()}},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}],tooltip:{x:{format:"MMM yyyy"}}}};return e.jsxs("div",{className:"card w-full pb-2.5 max-h-[300px] rounded-md",children:[e.jsx("div",{className:"self-end p-3 sm:mt-0",children:e.jsx(xe,{className:"min-w-[80px] sm:w-[250px]",dropdownClassName:"custom-rangepicker-dropdown",onChange:p,format:"DD-MM-YYYY"})}),e.jsx("div",{className:"flex justify-between ml-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"card-title text-lg",children:"Activity"}),e.jsx("span",{className:"text-gray-500 font-medium",children:"Customer Login Count"})]})}),e.jsx("div",{className:"card-body flex flex-col justify-end items-stretch grow px-0 py-1",children:e.jsx(D,{options:d.options,series:d.series,type:d.options.chart.type,height:200})})]})},{RangePicker:fe}=S,ge=()=>{const[r,l]=c.useState({start_time:"",end_time:""}),{customerData:a,fetchNewCustomerData:n}=me();c.useEffect(()=>{r.start_time&&r.end_time?n(r.start_time,r.end_time):n()},[r]);const p=(o,x)=>{l(o?{start_time:j(o[0]).format("DD-MM-YYYY"),end_time:j(o[1]).format("DD-MM-YYYY")}:{start_time:"",end_time:""})},h=(a==null?void 0:a.map(o=>o.month.split("-")[0]))||[],i=(a==null?void 0:a.map(o=>o.customer_count))||[],d=a==null?void 0:a.reduce((o,x)=>o+Number(x.customer_count),0),t={series:[{name:"New Customer",data:i}],options:{chart:{fontFamily:"inherit",type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:"blue"},xaxis:{type:"category",categories:h,labels:{show:!0,style:{colors:"#6B7280",fontSize:"12px",fontWeight:500}},axisTicks:{show:!0,color:"#D1D5DB",height:6},axisBorder:{show:!0,color:"#D1D5DB"},crosshairs:{position:"front",stroke:{color:"#3B82F6",width:1,dashArray:3}}},yaxis:{min:0,tickAmount:5,axisTicks:{show:!1},labels:{style:{colors:"var(--tw-gray-500)",fontSize:"12px"},formatter:o=>o>=1e3?`₹${(o/1e3).toFixed(0)}K`:o.toString()}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"}},colors:["#ECE852"],grid:{strokeDashArray:4,yaxis:{lines:{show:!0}}}}};return e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card w-full rounded-md",children:[e.jsx("div",{className:"self-end p-3 sm:mt-0",children:e.jsx(fe,{className:"min-w-[80px] sm:w-[250px]",dropdownClassName:"custom-rangepicker-dropdown",onChange:p,format:"DD-MM-YYYY"})}),e.jsxs("div",{className:"card-header pt-0  border-none",children:[e.jsx("div",{className:"flex flex-col justify-between",children:e.jsx("h3",{className:"card-title",children:"New Customer"})}),e.jsx("div",{className:"mt-2",children:e.jsxs("span",{className:"p-3 bg-red-50 rounded-md relative text-gray-500 semibold",children:["+",d]})})]}),e.jsx("div",{className:"card-body flex flex-col justify-end items-stretch grow px-0 py-1",children:e.jsx(D,{options:t.options,series:t.series,type:t.options.chart.type,height:163})})]})})},{RangePicker:je}=S,ye=()=>{const[r,l]=c.useState({start_time:"",end_time:""}),{customerData:a,fetchInActiveCustomerData:n}=he();c.useEffect(()=>{r.start_time&&r.end_time?n(r.start_time,r.end_time):n()},[r]);const p=(t,o)=>{l(t?{start_time:j(t[0]).format("DD-MM-YYYY"),end_time:j(t[1]).format("DD-MM-YYYY")}:{start_time:"",end_time:""})},h=(a==null?void 0:a.map(t=>t.month.split("-")[0]))||[],i=(a==null?void 0:a.map(t=>t.not_active_count))||[],d={series:[{name:"No Active Customer",data:i}],options:{chart:{type:"area",height:200,toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#4154f1"],fill:{gradient:{enabled:!0,opacityFrom:.25,opacityTo:.1}},grid:{borderColor:"rgba(0, 0, 0, 0)",strokeDashArray:5,padding:{top:0,right:0,bottom:2,left:8}},stroke:{curve:"smooth",show:!0,width:3,colors:["#4154f1"]},legend:{show:!1},xaxis:{type:"category",categories:h,labels:{show:!0,style:{colors:"#6B7280",fontSize:"12px",fontWeight:500}},axisTicks:{show:!0,color:"#D1D5DB",height:6},axisBorder:{show:!0,color:"#D1D5DB"},crosshairs:{position:"front",stroke:{color:"#3B82F6",width:1,dashArray:3}}},markers:{size:(i==null?void 0:i.length)===1?3:0,colors:"#4154f1",strokeColors:"#4154f1",strokeWidth:4,hover:{size:5}},yaxis:{min:0,tickAmount:1,axisTicks:{show:!1},labels:{style:{colors:"var(--tw-gray-500)",fontSize:"12px"},formatter:t=>t>=1e3?`₹${(t/1e3).toFixed(0)}K`:t.toString()}},tooltip:{x:{format:"MMM yyyy"}}}};return e.jsxs("div",{className:"card w-full pb-2.5 max-h-[300px] rounded-md",children:[e.jsx("div",{className:"self-end p-3 sm:mt-0",children:e.jsx(je,{className:"min-w-[80px] sm:w-[250px]",dropdownClassName:"custom-rangepicker-dropdown",onChange:p,format:"DD-MM-YYYY"})}),e.jsx("div",{className:"flex justify-between ml-5",children:e.jsx("div",{children:e.jsx("h3",{className:"card-title text-lg",children:"In Active Customer"})})}),e.jsx("div",{className:"card-body flex flex-col justify-end items-stretch grow px-0 py-3",children:e.jsx(D,{options:d.options,series:d.series,type:d.options.chart.type,height:d.options.chart.height})})]})},ke=()=>{const r=T(),{hasPermission:l}=E(),a=()=>{r("/customer/add")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fixed grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 desktop:grid-cols-1 zx:grid-cols-1 pb-8 gap-x-4 gap-y-4",children:[e.jsx(ue,{}),e.jsx(ge,{}),e.jsx(ye,{})]}),e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-4",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Customers"})}),l(8,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{className:"btn btn-primary",onClick:a,children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Customer"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(pe,{})})})})]})};export{ke as default};
