import{r as c,B as $,V as k,j as e,o as E,N as O}from"./index-DvGf1eO-.js";import{u as T}from"./useGetuser-CR61M877.js";import{g as R}from"./paymentStatusClasses-BddHAg9R.js";import{R as C,P as L,b as z}from"./enums-CdakGUf3.js";import{g as U}from"./orderStatusClasses-HfHBGnti.js";import{g as A}from"./roleClasses-8Xjy3Q3A.js";const I=()=>{const[x,r]=c.useState(!1);return{clearDueAmount:async(j,h)=>{const g=localStorage.getItem("authToken");r(!0);try{const n=await fetch(`${$}/orders/payments/clear-due`,{method:"POST",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"},body:JSON.stringify({user_id:j,orders:h})}),u=await n.json();return n.ok?(k.success(u.message,{position:"top-center"}),!0):(k.error(u.message,{position:"top-center"}),!1)}catch{k.error("Error clearing due amount",{position:"top-center"})}finally{r(!1)}},loading:x}},B=({modalOpen:x,onClose:r,userId:p,setRefetch:j})=>{const{userData:h,fetchUser:g}=T(),{clearDueAmount:n,loading:u}=I(),[s,_]=c.useState([]),[v,w]=c.useState([]),[b,N]=c.useState(),m=h==null?void 0:h.user;c.useEffect(()=>{x&&g(p)},[x,p]),c.useEffect(()=>{if(m!=null&&m.orders){const t=m.orders.filter(a=>![2].includes(a.payment_status)&&![12,13].includes(a.order_status));t.map(a=>({...a,kasar_amount:a.kasar_amount||null,payment_status:a.payment_status||null,current_total:0})),_(t)}},[m]);const f=(t,a,o)=>{const i=s.map(l=>{if(l.order_id===t){const d={...l,[a]:o};return d.current_total=(d.current_paid||0)+(d.kasar_amount||0)||0,d.current_total===l.total||d.current_total===l.total-l.paid_amount?(N(!0),d.payment_status=2):(N(!1),d.payment_status=3),d}return l});_(i);const y=i.find(l=>l.order_id===t);y&&w(l=>{const d=l.findIndex(P=>P.order_id===t);if(d>-1){const P=[...l];return P[d]=y,P}return[...l,y]})},S=async()=>{if(v.length===0){r();return}const t={filteredOrders:v.map(({order_id:o,payment_status:i,kasar_amount:y,current_paid:l})=>({order_id:o,paid_amount:l||0,payment_status:i,kasar_amount:y}))};await n(p,t.filteredOrders)&&(r(),w([])),j(!0)};return x?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:r}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-[1000px] z-10 relative max-h-[80vh] overflow-auto",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default","data-modal-dismiss":"true",onClick:r,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Orders"}),e.jsx("button",{className:"btn btn-primary btn-lg flex flex-end mt-10",onClick:S,disabled:u,children:u?"Saving...":"Save"})]}),e.jsx("div",{className:"grid gap-5 lg:gap-5.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[30px]",children:"Id"}),e.jsx("th",{className:"min-w-[120px]",children:"Total"}),e.jsx("th",{className:"min-w-[120px]",children:"Paid Amount"}),e.jsx("th",{className:"min-w-[120px]",children:"Kasar Amount"}),e.jsx("th",{className:"min-w-[120px]",children:"Current Paid"}),e.jsx("th",{className:"min-w-[190px]",children:"Current Total"}),e.jsx("th",{className:"min-w-[120px]",children:"Payment Status"})]})}),e.jsx("tbody",{children:s.map(t=>{const a=(t.paid_amount||0)+(t.kasar_amount||0)+(t.current_paid||0),o=R(t.payment_status,!0);return e.jsxs("tr",{className:"custom-row",children:[e.jsxs("td",{children:["#",t.order_id]}),e.jsxs("td",{children:["₹",t.total||0]}),e.jsxs("td",{children:["₹",t.paid_amount||0]}),e.jsx("td",{children:e.jsx("input",{type:"text",className:"input input-bordered",value:t.kasar_amount||0,onChange:i=>f(t.order_id,"kasar_amount",Number(i.target.value))})}),e.jsx("td",{children:e.jsx("input",{type:"text",className:"input input-bordered",value:t.current_paid||0,onChange:i=>f(t.order_id,"current_paid",Number(i.target.value))})}),e.jsxs("td",{className:a>(t.total||0)?"text-red-500":"",children:[e.jsxs("span",{children:["₹",t.current_total||0]}),a>(t.total||0)?e.jsx("span",{className:"flex mt-1 font-serif",children:"greater then pending amount"}):""]}),e.jsx("td",{children:e.jsxs("div",{children:[e.jsxs("select",{className:`select select-lg w-[170px] text-sm ${o}`,"data-datatable-size":"true","data-tooltip":"#custom_tooltip",value:t.payment_status,onChange:i=>f(t.order_id,"payment_status",Number(i.target.value)),children:[e.jsx("option",{value:"1",className:`${o}`,children:"Pending"}),e.jsx("option",{value:"2",disabled:!b,children:"Received"}),e.jsx("option",{value:"3",disabled:b,children:"Partial Received"})]}),e.jsx("div",{className:"hidden rounded-xl shadow-default p-3 bg-light border border-gray-200 text-gray-700 text-xs font-normal",id:"custom_tooltip",children:"Change Payment Status"})]})})]},t.order_id)})})]})})})})})]})]}):null},J=()=>{var N,m,f,S;const{id:x}=E(),r=Number(x),[p,j]=c.useState(),[h,g]=c.useState(!1),{userData:n,fetchUser:u}=T(),s=n==null?void 0:n.user;c.useEffect(()=>{u(r),g(!1)},[r,h]);const _=t=>{window.open(`/order/${t}`,"_blank")};if(!s)return;const v=s.orders.reduce((t,a)=>t+a.kasar_amount,0),w=s.orders.reduce((t,a)=>t+a.total,0),b=()=>{j(!0)};return e.jsxs("div",{className:"container mx-auto p-6",children:[e.jsx("div",{className:"flex flex-col bg-gray-50 p-5 rounded-md shadow-md",children:e.jsxs("div",{className:"flex justify-between gap-4 items-center",children:[e.jsxs("h1",{className:"text-xl font-semibold text-gray-900",children:[s.first_name," ",s.last_name]}),(n==null?void 0:n.total_pending_amount)!==0&&e.jsxs("div",{className:"flex flex-end items-center gap-2",children:[e.jsxs("span",{className:"text-sm font-medium text-red-700",children:["Total Pending Amount: ₹",n.total_pending_amount]}),e.jsxs("button",{className:"font-extralight btn btn-lg btn-light",onClick:b,children:["Pay ",e.jsx(O,{size:20})]})]}),(s==null?void 0:s.role_id)!==5&&e.jsx("span",{className:`mt-1 p-2 rounded-md text-sm ${A(s.role_id)}`,children:C[s.role_id]})]})}),e.jsx("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5 mt-5",children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card pb-2.5",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Personal Information"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Name:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:[s.first_name," ",s.last_name]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Email:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:"email"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Mobile Number:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:s.mobile_number})]}),(s==null?void 0:s.image)!==""&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Profile Photo :"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:e.jsx("span",{className:"",children:e.jsx("img",{className:"h-14 w-14 rounded-full",src:s.image})})})]}),s.role_id!==5&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Role:"}),e.jsx("span",{className:`mt-1 p-2 rounded-md text-sm ${A(s.role_id)}`,children:C[s.role_id]})]}),((N=s==null?void 0:s.companies)==null?void 0:N.length)>0&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Company:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:[s.companies.map(t=>t).join(",")," "]})]}),((m=s==null?void 0:s.branches)==null?void 0:m.length)>0&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Branch:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:[s.branches.map(t=>t).join(", ")," "]})]}),((f=s==null?void 0:s.workshops)==null?void 0:f.length)>0&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Workshop:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:[s.workshops.map(t=>t).join(", ")," "]})]})]})})})]})})}),s.role_id===5&&e.jsx("div",{className:"grid gap-5 lg:gap-7.5 mt-5",children:e.jsxs("div",{className:"card card-grid min-w-full",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Orders"}),e.jsxs("span",{className:"text-gray-700 text-lg font-semibold px-3 py-1 rounded-lg",children:["Total Orders: ",(S=s==null?void 0:s.orders)==null?void 0:S.length]})]}),e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Id"}),e.jsx("th",{className:"min-w-[220px]",children:"Status"}),e.jsx("th",{className:"min-w-[60px]",children:"Item Count"}),e.jsx("th",{children:"Total"}),e.jsx("th",{className:"min-w-[80px]",children:"Paid Amount"}),e.jsx("th",{className:"",children:"Kasar Amount"}),e.jsx("th",{className:"min-w-[140px]",children:"Payment Type"}),e.jsx("th",{className:"min-w-[135px]",children:"Payment Status"}),e.jsx("th",{className:"min-w-[130px]",children:"Actions"})]})}),s.orders.length>0?e.jsx("tbody",{children:s.orders.map(t=>{const a=R(t.payment_status),o=U(t.admin_order_status.admin_label),i=t.items.length;return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",t.order_id]}),e.jsx("td",{children:e.jsx("span",{className:`${o} badge-outline badge-xl rounded-[30px]`,children:t.admin_order_status.admin_label})}),e.jsx("td",{children:i}),e.jsxs("td",{children:["₹",t.total]}),e.jsxs("td",{children:["₹",t.paid_amount===""?0:t.paid_amount]}),e.jsxs("td",{children:["₹",t.kasar_amount===""?0:t.kasar_amount]}),e.jsx("td",{children:e.jsx("span",{className:"badge badge-outline",children:L[t.payment_type]})}),e.jsx("td",{children:e.jsx("span",{className:`${a} badge-outline`,children:z[t.payment_status]})}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>_(t.order_id),children:"View Order"})})]},t.order_id)})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"text-center",children:"No Orders available"})})})]})})]})}),(s==null?void 0:s.orders.length)>0&&e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6",children:e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Orders Summary"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Total Kasar Amount:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",v]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Total Order Amount:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",w]})]}),n.total_pending_amount>0&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Total Pending Amount:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",n.total_pending_amount]}),e.jsx("td",{children:e.jsx("span",{className:"relative bottom-2 left-4",children:e.jsxs("button",{className:"flex items-center gap-2.5 font-extralight btn btn-light ",onClick:b,children:["Pay ",e.jsx(O,{size:20})]})})})]})]})})})})]})})})}),e.jsx(B,{modalOpen:p,onClose:()=>j(!1),userId:r,setRefetch:g})]})};export{J as default};
