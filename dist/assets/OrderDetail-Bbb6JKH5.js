import{r as l,_ as x,aX as T,aY as Z,c as P,aK as R,j as e,V as O,a as X,aL as Q,aZ as ee,g as se,a_ as te,h as ae}from"./index-Af1uNubq.js";import{b as re,P as ne}from"./enums-DrmPtfwX.js";import{u as ie}from"./useGetOrder-LvzO6Mpb.js";import{S as D}from"./sweetalert2.esm.all-DwEdJQJv.js";import{u as ce}from"./useGetUsersByRole-B3iT9gW5.js";import{u as le}from"./useGetBranches-D_VyifRB.js";import{u as oe}from"./useGetWorkshops-CeCRNPqE.js";const de="http://35.154.167.170:3000/notes",me=()=>{const[c,r]=l.useState(!1);return{addNote:async m=>{const o=localStorage.getItem("authToken");r(!0);try{const a=await fetch(de,{method:"POST",headers:{Authorization:`Bearer ${o}`},body:m}),n=await a.json();return a.ok?(x.success(n.message,{position:"top-center"}),!0):(x.error(n.message,{position:"top-center"}),!1)}catch(a){return x.error((a==null?void 0:a.message)||"Error adding note",{position:"top-center"}),!1}finally{r(!1)}},loading:c}},ue=()=>{const[c,r]=l.useState(!1);return{deleteNote:async m=>{const o=localStorage.getItem("authToken"),a=`http://35.154.167.170:3000/notes/${m}`;r(!0);try{const n=await fetch(a,{method:"DELETE",headers:{Authorization:`Bearer ${o}`}}),d=await n.json();return n.ok?{success:!0,message:d.message}:(x.error(d.message,{position:"top-center"}),{success:!1,message:d.message})}catch(n){return{success:!1,message:n.message}}finally{r(!1)}},loading:c}},xe="http://35.154.167.170:3000/admin/orders/pickup",he=()=>{const[c,r]=l.useState(!1);return{assignPickupBoy:async m=>{const o=localStorage.getItem("authToken");r(!0);try{const a=await fetch(xe,{method:"PATCH",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(m)}),n=await a.json();return a.ok?(x.success(n.message,{position:"top-center"}),!0):(x.error(n.message,{position:"top-center"}),!1)}catch(a){return x.error((a==null?void 0:a.message)||"Error assignning pickupboy",{position:"top-center"}),!1}finally{r(!1)}},loading:c}},pe=()=>{const[c,r]=l.useState(!1);return{updateOrderStatus:async(m,o)=>{const a=localStorage.getItem("authToken");r(!0);try{const n=await fetch(`${T}/admin/orders/${m}/update-status`,{method:"PATCH",headers:{Authorization:a?`Bearer ${a}`:"","Content-Type":"application/json"},body:JSON.stringify({order_status:o})}),d=await n.json();return n.ok?(x.success(d.message,{position:"top-center"}),!0):(x.error(d.message,{position:"top-center"}),!1)}catch{return x.error("Failed to update order status"),!1}finally{r(!1)}},loading:c}},ge=()=>{const[c,r]=l.useState(!1);return{assignWorkshop:async(m,o)=>{const a=localStorage.getItem("authToken");r(!0);try{const n=await fetch(`${T}/admin/orders/assign-workshop`,{method:"PATCH",headers:{Authorization:a?`Bearer ${a}`:"","Content-Type":"application/json"},body:JSON.stringify({order_id:m,workshop_id:o})}),d=await n.json();return n.ok?(x.success(d.message,{position:"top-center"}),!0):(x.error(d.message,{position:"top-center"}),!1)}catch{return x.error("Failed to assign workshop"),!1}finally{r(!1)}},loading:c}},fe=()=>{const[c,r]=l.useState(!1);return{assignBranch:async(m,o)=>{const a=localStorage.getItem("authToken");r(!0);try{const n=await fetch(`${T}/admin/orders/assign-branch`,{method:"PATCH",headers:{Authorization:a?`Bearer ${a}`:"","Content-Type":"application/json"},body:JSON.stringify({order_id:m,branch_id:o})}),d=await n.json();return n.ok?(x.success(d.message,{position:"top-center"}),!0):(x.error(d.message,{position:"top-center"}),!1)}catch{return x.error("Failed to assign branch"),!1}finally{r(!1)}},loading:c}};function be(c){return Z({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(c)}const je="http://35.154.167.170:3000/admin/orders/assign-delivery",ye=()=>{const[c,r]=l.useState(!1);return{assignDeliveryBoy:async m=>{const o=localStorage.getItem("authToken");r(!0);try{const a=await fetch(je,{method:"PATCH",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(m)}),n=await a.json();return a.ok?(x.success(n.message,{position:"top-center"}),!0):(x.error(n.message,{position:"top-center"}),!1)}catch(a){return x.error((a==null?void 0:a.message)||"Error assigning delivery boy",{position:"top-center"}),!1}finally{r(!1)}},loading:c}},Ne=P().shape({pickup_boy_id:R().required("Please enter name to assign")}),ve=({orderId:c,modelOpen:r,onClose:s,setAssigned:m,orderStatus:o})=>{const{assignPickupBoy:a}=he(),{assignDeliveryBoy:n}=ye(),{users:d,fetchUsersByRole:h}=ce(),[f,k]=l.useState(""),[b,v]=l.useState(!0),[g,y]=l.useState({order_id:c,pickup_boy_id:null,comment:""}),[S,p]=l.useState("");l.useEffect(()=>{(async()=>{await h(4,f)})()},[f,b]);const C=u=>{k(u.target.value),v(!0),u.target.value===""&&y({...g,pickup_boy_id:null})},L=u=>{const N=`${u.first_name} ${u.last_name}`;k(N),v(!1),y({...g,pickup_boy_id:u.user_id})};l.useEffect(()=>{r||(k(""),y({order_id:c,pickup_boy_id:null,comment:""}),p(""))},[r,c]);const A=async u=>{u.preventDefault();try{if(await Ne.validate(g,{abortEarly:!1}),o==="Assign Delivery Boy"){const N={order_id:g.order_id,delivery_boy_id:g.pickup_boy_id};await n(N)}else await a(g);m(!0),s()}catch(N){N instanceof O&&p(N.errors[0])}};return r?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:s}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-[400px] z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default",onClick:s,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h2",{className:"text-2xl font-bold mb-6",children:o}),e.jsxs("form",{onSubmit:A,children:[e.jsxs("div",{className:"relative flex flex-col flex-[0_0_40%]",children:[e.jsx("label",{htmlFor:"username",className:"block text-gray-700 text-sm font-bold mb-1",children:"Name"}),e.jsx("input",{type:"text",id:"username",value:f||"",onChange:C,className:"input border border-gray-300 rounded-md p-2 w-full",placeholder:"Search name..."}),d&&f&&b&&e.jsx("ul",{className:"absolute mt-[68px] bg-white z-10 border border-gray-300 rounded-md p-2 w-full text-sm",children:d.length>0?d.map(u=>e.jsxs("li",{className:"p-2 hover:bg-gray-100 cursor-pointer",onClick:()=>L(u),children:[u.first_name," ",u.last_name," (",u.mobile_number,")"]},u.user_id)):e.jsx("li",{className:"p-2 text-gray-500",children:"No users found"})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:S||" "})]}),o==="Assign Pickup Boy"&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-1",htmlFor:"comment",children:"Comment"}),e.jsx("textarea",{id:"comment",name:"comment",className:"h-20 input border border-gray-300 rounded-md p-2",rows:5,value:g.comment,onChange:u=>y({...g,comment:u.target.value})})]}),e.jsxs("div",{className:"flex mt-4",children:[e.jsx("button",{type:"submit",className:"btn btn-primary mr-2",children:"Assign"}),e.jsx("button",{type:"button",onClick:s,className:"btn btn-light",children:"Cancel"})]})]})]})]}):null},_e=P().shape({option:R().required("Please select option")}),we=({orderId:c,workshopModalOpen:r,onClose:s,setAssigned:m,orderStatus:o})=>{const{workshops:d}=oe(1,1e3),{branches:h}=le(1,1e3),{assignWorkshop:f}=ge(),{assignBranch:k}=fe(),[b,v]=l.useState(),[g,y]=l.useState("");l.useEffect(()=>{r||(v(null),y(""))},[r,c]);const S=async p=>{p.preventDefault();try{await _e.validate({option:b},{abortEarly:!1}),o==="Assign Workshop"?await f(c,b):await k(c,b),s(),m(!0)}catch(C){C instanceof O&&y(C.errors[0])}};return r?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:s}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-[400px] z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default",onClick:s,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h2",{className:"text-2xl font-bold mb-6",children:o==="Assign Workshop"?"Assign Workshop":"Assign Branch"}),e.jsxs("form",{onSubmit:S,children:[o==="Assign Workshop"?e.jsxs("div",{className:"relative flex flex-col flex-[0_0_40%]",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"workshop_id",children:"Workshop"}),e.jsxs("select",{id:"workshop_id",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:b??"",onChange:p=>v(Number(p.target.value)),children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Workshop"}),(d==null?void 0:d.length)>0?d.map(p=>e.jsx("option",{value:p.workshop_id,children:p.workshop_name},p.workshop_id)):e.jsx("option",{children:"No Data available"})]}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:g||" "})]}):e.jsxs("div",{className:"relative flex flex-col flex-[0_0_40%]",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_id",children:"Branch"}),e.jsxs("select",{id:"branch_id",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:b??"",onChange:p=>v(Number(p.target.value)),children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Branch"}),(h==null?void 0:h.length)>0?h.map(p=>e.jsx("option",{value:p.branch_id,children:p.branch_name},p.branch_id)):e.jsx("option",{children:"No Data available"})]}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:g||" "})]}),e.jsxs("div",{className:"flex mt-4",children:[e.jsx("button",{type:"submit",className:"btn btn-primary mr-2",children:"Assign"}),e.jsx("button",{type:"button",onClick:s,className:"btn btn-light",children:"Cancel"})]})]})]})]}):!1},ke=P().shape({text_note:X().required("Please enter text to add note")}),Pe=()=>{var I;const{id:c}=Q(),r=Number(c),{order:s,fetchOrder:m}=ie(),{addNote:o,loading:a}=me(),{deleteNote:n}=ue(),{updateOrderStatus:d}=pe(),[h,f]=l.useState({user_id:null,order_id:null,text_note:"",images:[]}),[k,b]=l.useState(!1),[v,g]=l.useState(!1),[y,S]=l.useState(!1),[p,C]=l.useState(""),[L,A]=l.useState(!1),u=ee(),N=se(),$=l.useRef(null);l.useEffect(()=>{m(r),S(!1)},[y]),l.useEffect(()=>{s&&f(t=>({...t,user_id:s.user_id,order_id:s.order_id}))},[s]);const W=t=>{const i=t.target;if(i instanceof HTMLInputElement){const{name:w,value:j,files:B}=i;w==="images"&&B&&B.length>0?f(E=>({...E,images:[...E.images,...Array.from(B)]})):f(E=>({...E,[w]:j}))}},M=async t=>{try{const{isConfirmed:i}=await D.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(i){const{success:w,message:j}=await n(t);w?(await m(r),D.fire(j)):D.fire(j)}}catch(i){D.fire({title:"Error",text:i.message,icon:"error"})}},U=()=>{var t;(t=$.current)==null||t.click()},z=t=>{f(i=>({...i,images:i.images.filter((w,j)=>j!==t)}))},F=async t=>{t.preventDefault();try{await ke.validate(h,{abortEarly:!1});const i=new FormData;i.append("user_id",h.user_id),i.append("order_id",h.order_id),i.append("text_note",h.text_note),h.images&&h.images.length>0&&h.images.forEach(j=>{i.append("images",j)}),await o(i)&&(C(""),await m(h.order_id))}catch(i){i instanceof O?C(i.errors[0]):x.error("Failed to add note")}},Y=async()=>{try{const{isConfirmed:t}=await D.fire({title:"Are you sure?",text:"Want to change order status!",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes",cancelButtonText:"No"});return t}catch(t){return D.fire({title:"Error",text:t.message,icon:"error"}),!1}},H=async t=>{await d(r,t)&&await m(r)},_=async t=>{await Y()&&await H(t)},G=async()=>{switch(s==null?void 0:s.order_status_name){case"Assign Pickup Boy":case"Assign Delivery Boy":b(!0);break;case"Received By Pickup Boy":await _(3);break;case"Work Completed":await _(7);break;case"Items Received At Branch":case"Pickup Complete":await _(4);break;case"Ready For Delivery":await _(10);break;case"Assign Workshop":case"Assign Branch":g(!0);break;case"Branch Received Items":await _(8),A(!1);break}},J=async()=>{switch(s==null?void 0:s.workshop_status_name){case"Order Received":await _(5),A(!1);break;case"In Progress":await _(6),A(!1);break;case"Completed":await _(7),A(!1),N("/workshop-order");break}},q=async()=>{var t;((t=u==null?void 0:u.state)==null?void 0:t.from)==="OrderTable"?await G():await J()},K=()=>{var t;return((t=u.state)==null?void 0:t.from)==="OrderTable"?s==null?void 0:s.order_status_name:s==null?void 0:s.workshop_status_name},V=()=>{N(`/order/edit/${r}`)};return s?e.jsxs("div",{className:"container mx-auto p-6",children:[e.jsxs("div",{className:"flex items-center justify-between bg-gray-100 p-7 rounded-md shadow",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("h1",{className:"mt-2 text-xl font-semibold leading-none text-gray-900",children:["Order Details - #",r]}),e.jsxs("button",{className:"btn btn-primary ml-3 bg-blue-200 rounded-md",onClick:V,children:[e.jsx("i",{className:"ki-filled ki-pencil mr-1"}),"Edit Order"]})]}),e.jsx("button",{className:"px-4 py-2 rounded-full text-white bg-orange-500",onClick:q,children:K()})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-md shadow",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Order Items"}),e.jsxs("span",{className:"text-gray-700 text-sm font-semibold px-3 py-1 rounded-lg ",children:["Total Items: ",s.items.length]})]}),e.jsx("div",{className:"space-y-4",children:s.items.map(t=>e.jsxs("div",{className:"border border-gray-200 rounded-xl gap-2 px-4 py-4 bg-gray-50",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3.5",children:[e.jsx("img",{alt:t.product.name,className:"w-10 shrink-0 object-cover rounded",src:t.product.image}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 mb-px",children:t.product.name}),e.jsxs("span",{className:"text-2sm font-medium text-gray-600",children:["Category: ",t.category.name]})]})]}),e.jsx("div",{className:"flex items-center gap-5",children:e.jsxs("span",{className:"badge badge-lg badge-success badge-outline text-xs font-medium mr-2 px-2.5",children:["Service: ",t.service.name]})})]}),t.description&&e.jsx("div",{className:"mt-2 p-3 bg-gray-100 rounded-md",children:e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Description :"})," ",t.description]})})]},t.item_id))})]}),e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Order Summary"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Sub Total:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",s.sub_total]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Shipping Charges:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",s.shipping_charges]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Express Delivery Charges:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",s.express_delivery_charges]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Kasar Amount:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",s.kasar_amount]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Coupon Code:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:s.coupon_code})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Coupon Discount"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",s.coupon_discount]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Total:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",s.total]})]})]})})})]})}),e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Estimated Delivery & Pickup"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Estimated Pickup Time:"}),e.jsx("td",{className:"text-sm font-medium text-gray-700",children:new Date(s.estimated_pickup_time).toLocaleDateString()})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Estimated Delivery Time:"}),e.jsx("td",{className:"text-sm font-medium text-gray-700",children:new Date(s.estimated_delivery_time).toLocaleDateString()})]})]})})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Customer Information"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Name:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:[s.user.first_name," ",s.user.last_name]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Email:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:s.user.email})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Mobile Number:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:s.user.mobile_number})]})]})})})]})}),s.branch&&e.jsx("div",{className:"card rounded-xl",children:e.jsx("div",{className:"flex items-center justify-between grow gap-5 p-5 bg-[center_right_-8rem] bg-no-repeat bg-[length:700px] upgrade-bg",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("h3",{className:"card-title",children:"Branch Information"})}),e.jsx("div",{className:"text-2sm font-medium text-gray-700",children:s.branch.branch_name})]})})})}),s.pickup_boy&&e.jsx("div",{className:"card rounded-xl",children:e.jsx("div",{className:"flex items-center justify-between grow gap-5 p-5 bg-[center_right_-8rem] bg-no-repeat bg-[length:700px] upgrade-bg",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("h3",{className:"card-title",children:"Pickup Boy Information"})}),e.jsx("div",{className:"text-2sm font-medium text-gray-700",children:s.pickup_boy.pickup_boy_name}),s.pickup_comment&&e.jsx("div",{className:"mt-2 p-3 bg-gray-100 rounded-md",children:e.jsx("p",{className:"text-sm text-gray-600",children:s.pickup_comment})})]})})})}),e.jsx("div",{className:"card rounded-xl",children:e.jsx("div",{className:"flex items-center justify-between grow gap-5 p-5 bg-[center_right_-8rem] bg-no-repeat bg-[length:700px] upgrade-bg",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("h3",{className:"card-title",children:"Shipping Address"})}),e.jsx("div",{className:"text-2sm font-medium text-gray-700",children:s.address_details!=="null"&&s.address_details.trim()!==""?s.address_details:"Address not provided."})]})})})}),e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Payment Information"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Payment Type:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:re[s.payment_type]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Payment Status:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:ne[s.payment_status]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Transaction ID:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:s.transaction_id||"N/A"})]})]})})})]})})]})]}),e.jsxs("div",{className:"mt-6 bg-white p-6 rounded-md shadow",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-700 mb-4",children:"Order Notes"}),e.jsxs("div",{children:[e.jsxs("div",{className:"relative border border-gray-300 rounded-md p-2",children:[e.jsx("textarea",{className:"w-full h-[100px] p-3 border-none focus:outline-none focus:ring-0",placeholder:"Add a new note...",value:h.text_note||"",onChange:t=>f({...h,text_note:t.target.value})}),e.jsxs("div",{className:"flex items-center mt-2",children:[e.jsx("button",{className:"text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded-full p-1 transition-all ease-in-out duration-200",title:"Attach image",onClick:U,children:e.jsx(te,{size:23})}),e.jsx("input",{type:"file",ref:$,style:{display:"none"},multiple:!0,onChange:W,name:"images"})]})]}),e.jsx("p",{className:"text-red-500 text-sm",children:p||" "})]}),e.jsx("div",{children:h.images.map((t,i)=>e.jsxs("div",{className:"relative inline-block mr-2 mb-2 group",children:[e.jsx("img",{src:URL.createObjectURL(t),alt:`Preview ${i}`,className:"w-32 h-32 object-cover rounded-md border"}),e.jsx("button",{className:"absolute top-0 right-0 rounded-full p-1 shadow-md text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200",onClick:()=>z(i),children:e.jsx(be,{size:20})})]},i))}),e.jsx("button",{className:`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
          ${a?"opacity-50 cursor-not-allowed":""}`,onClick:F,disabled:a,children:a?"Adding...":"Add Note"}),e.jsx("ul",{className:"mt-6 space-y-4",children:(I=s.notes)==null?void 0:I.map((t,i)=>{const w=ae(t.created_at).format("HH:mm, DD/MM/YYYY");return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("span",{className:"block text-sm text-gray-600",children:["• ",t.user.first_name," ",t.user.last_name]}),e.jsx("span",{className:"text-xs text-gray-500",children:w})]}),e.jsxs("li",{className:"p-4 border rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200 relative",children:[e.jsx("p",{className:"text-gray-800 mb-2",children:t.text_note}),t.images&&t.images.length>0&&e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3",children:t.images.map((j,B)=>e.jsx("img",{src:j,className:"w-full h-auto rounded-md border shadow-sm",alt:`Note Attachment ${B+1}`},B))}),e.jsx("div",{className:"menu absolute top-1 right-2","data-menu":"true",children:e.jsxs("div",{className:"menu-item","data-menu-item-offset":"0, 10px","data-menu-item-placement":"bottom-end","data-menu-item-toggle":"dropdown","data-menu-item-trigger":"click|lg:click",children:[e.jsx("button",{className:"menu-toggle btn btn-sm btn-icon btn-light btn-clear",children:e.jsx("i",{className:"ki-filled ki-dots-vertical"})}),e.jsx("div",{className:"menu-dropdown menu-default w-full max-w-[175px]","data-menu-dismiss":"true",children:e.jsx("div",{className:"menu-item",children:e.jsxs("button",{className:"menu-link",onClick:()=>M(t.note_id),children:[e.jsx("span",{className:"menu-icon",children:e.jsx("i",{className:"ki-filled ki-trash"})}),e.jsx("span",{className:"menu-title",children:"Remove"})]})})})]})})]})]},i)})})]}),e.jsx(ve,{orderStatus:(s==null?void 0:s.order_status_name)==="Assign Pickup Boy"||(s==null?void 0:s.order_status_name)==="Assign Delivery Boy"?s==null?void 0:s.order_status_name:void 0,modelOpen:k,onClose:()=>b(!1),orderId:r,setAssigned:S}),e.jsx(we,{orderStatus:(s==null?void 0:s.order_status_name)==="Assign Branch"||(s==null?void 0:s.order_status_name)==="Assign Workshop"?s==null?void 0:s.order_status_name:void 0,orderId:r,workshopModalOpen:v,onClose:()=>g(!1),setAssigned:S})]}):null};export{Pe as default};