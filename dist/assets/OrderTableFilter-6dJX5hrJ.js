import{r as i,B as _,_ as B,j as c}from"./index-C8hYjMte.js";import{u as F}from"./useGetBranches-De1cwVnz.js";import{O as T,b as C}from"./enums-CdakGUf3.js";import{u as N}from"./useGetUsersByRole-u-8zqk2_.js";import{M as b}from"./MultiSelect-CNbRyPjP.js";const G=(o=1,s=10,g="",d,h,O,u,m,y,V,S,f,x,j)=>{const[e,t]=i.useState([]),[a,p]=i.useState(0),[r,E]=i.useState(!1),w=async()=>{var $,k;const R=localStorage.getItem("authToken"),l=new URLSearchParams;o&&l.append("page_number",o.toString()),s&&l.append("per_page",s.toString()),g&&l.append("search",g),d&&l.append("sort_by",d),h&&l.append("order",h),m&&m.forEach(n=>l.append("order_statuses",n.toString())),y&&y.forEach(n=>l.append("customer_ids",n.toString())),V&&V.forEach(n=>l.append("branches_ids",n.toString())),S&&S.forEach(n=>l.append("pickup_boy_ids",n.toString())),f&&f.forEach(n=>l.append("delivery_boy_ids",n.toString())),O&&l.append("list",O),u&&l.append("orderList",u),j&&j.forEach(n=>l.append("payment_statuses",n.toString())),x&&l.append("payment_types",x.toString()),E(!0);try{const n=await fetch(`${_}/admin/orders?${l}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${R}`}}),v=await n.json();if(!n.ok){B.error(v.message,{position:"top-center"});return}t((($=v==null?void 0:v.data)==null?void 0:$.orders)||[]),p(((k=v==null?void 0:v.data)==null?void 0:k.count)||0)}catch(n){B.error(n||"Network error: Failed to fetch.",{position:"top-center"})}finally{E(!1)}};return i.useEffect(()=>{w()},[o,s,g,d,h,m,y,V,S,f,x,j]),{orders:e,totalOrders:a,loading:r,fetchOrders:w}},I=()=>{const[o,s]=i.useState(!1);return{deleteOrder:async d=>{const h=localStorage.getItem("authToken"),O=`http://3.110.208.70:3000/admin/order/${d}`;s(!0);try{const u=await fetch(O,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`}}),m=await u.json();return u.ok?{success:!0,message:m.message}:(B.error(m.message,{position:"top-center"}),{success:!1,message:m.message})}catch(u){return B.error("An unexpected error occurred.",{position:"top-center"}),{success:!1,message:u.message}}finally{s(!1)}},loading:o}},z=({filters:o,updateFilters:s})=>{const[g,d]=i.useState([]),[h,O]=i.useState([]),[u,m]=i.useState([]),[y,V]=i.useState(""),{branches:S}=F(),{fetchUsersByRole:f}=N(),x=Object.entries(T).filter(([e,t])=>typeof t=="number").map(([e,t])=>({label:e,value:t})),j=Object.entries(C).filter(([e,t])=>typeof t=="number").map(([e,t])=>({label:e,value:t}));return i.useEffect(()=>{y&&(async()=>{const t=await f(5,y),a=t==null?void 0:t.map(p=>({label:`${p.first_name} ${p.last_name} (${p.mobile_number})`,value:p.user_id}));d(a)})()},[y]),i.useEffect(()=>{const e=async()=>{const a=await f(4),p=a==null?void 0:a.map(r=>({label:`${r.first_name} ${r.last_name} (${r.mobile_number})`,value:r.user_id}));O(p)},t=async()=>{const a=await f(4),p=a==null?void 0:a.map(r=>({label:`${r.first_name} ${r.last_name} (${r.mobile_number})`,value:r.user_id}));m(p)};e(),t()},[]),c.jsx(c.Fragment,{children:c.jsx("div",{className:"p-4",children:c.jsxs("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4",children:[c.jsx(b,{options:g,displayValue:"label",placeholder:"Search Customer",selectedValues:o.customerFilter,onSelect:e=>{const t=e.map(a=>a.value);s({...o,customerFilter:t})},onRemove:e=>{const t=e.map(a=>a.value);s({...o,customerFilter:t})},setSearch:V,className:"w-full"}),c.jsx(b,{options:x,displayValue:"label",placeholder:"Select Order Status",selectedValues:o.orderStatusFilter,onSelect:e=>{const t=e.map(a=>a.value);s({...o,orderStatusFilter:t})},onRemove:e=>{const t=e.map(a=>a.value);s({...o,orderStatusFilter:t})},isCustomLabel:!0,className:"w-full"}),c.jsx(b,{options:S==null?void 0:S.map(e=>({label:e.branch_name,value:e.branch_id})),displayValue:"branch_name",placeholder:"Select Branch",selectedValues:o==null?void 0:o.branchFilter,onSelect:e=>{const t=e.map(a=>a.value);s({...o,branchFilter:t})},onRemove:e=>{const t=e.map(a=>a.value);s({...o,branchFilter:t})},className:"w-full"}),c.jsx(b,{options:u,displayValue:"label",placeholder:"Search DeliveryBoy",selectedValues:o.deliveryBoyFilter,onSelect:e=>{const t=e.map(a=>a.value);s({...o,deliveryBoyFilter:t})},onRemove:e=>{const t=e.map(a=>a.value);s({...o,deliveryBoyFilter:t})},className:"w-full"}),c.jsx(b,{options:h,displayValue:"label",placeholder:"Search PickupBoy",selectedValues:o.pickupBoyFilter,onSelect:e=>{const t=e.map(a=>a.value);s({...o,pickupBoyFilter:t})},onRemove:e=>{const t=e.map(a=>a.value);s({...o,pickupBoyFilter:t})},className:"w-full"}),c.jsx(b,{options:j,displayValue:"label",placeholder:"Select Payment Status",selectedValues:o.paymentStatusFilter,onSelect:e=>{const t=e.map(a=>a.value);s({...o,paymentStatusFilter:t})},onRemove:e=>{const t=e.map(a=>a.value);s({...o,paymentStatusFilter:t})},isSearchInput:!1,className:"w-full"}),c.jsxs("select",{className:"select select-lg w-[200px] text-sm",value:o.paymentTypeFilter,onChange:e=>{s({...o,paymentTypeFilter:Number(e.target.value)})},children:[c.jsx("option",{value:"",selected:!0,children:"Payment type"}),c.jsx("option",{value:1,children:"Cash on Delivery"}),c.jsx("option",{value:2,children:"Online Payment"})]})]})})})};export{z as O,I as a,G as u};
