import{r as x,_ as p,G as E,c as L,a as S,aR as A,j as e,a_ as T,l as R,V as I}from"./index-jKd1kMjl.js";import{b as O,P}from"./enums-tzNm48ue.js";import{u as $}from"./useGetOrder-rlHyMKv9.js";import{S as j}from"./sweetalert2.esm.all-DwEdJQJv.js";const B="http://35.154.167.170:3000/notes",M=()=>{const[m,l]=x.useState(!1);return{addNote:async o=>{const h=localStorage.getItem("authToken");l(!0);try{const i=await fetch(B,{method:"POST",headers:{Authorization:`Bearer ${h}`},body:o}),d=await i.json();return i.ok?(p.success(d.message,{position:"top-center"}),!0):(p.error(d.message,{position:"top-center"}),!1)}catch(i){return p.error((i==null?void 0:i.message)||"Error adding note",{position:"top-center"}),!1}finally{l(!1)}},loading:m}},Y=()=>{const[m,l]=x.useState(!1);return{deleteNote:async o=>{const h=localStorage.getItem("authToken"),i=`http://35.154.167.170:3000/notes/${o}`;l(!0);try{const d=await fetch(i,{method:"DELETE",headers:{Authorization:`Bearer ${h}`}}),r=await d.json();return d.ok?{success:!0,message:r.message}:(p.error(r.message,{position:"top-center"}),{success:!1,message:r.message})}catch(d){return{success:!1,message:d.message}}finally{l(!1)}},loading:m}};function z(m){return E({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(m)}const U=L().shape({text_note:S().required("Please enter text to add note")}),q=()=>{var b;const{id:m}=A(),l=Number(m),{order:t,fetchOrder:o}=$(),{addNote:h,loading:i}=M(),{deleteNote:d}=Y(),[r,g]=x.useState({user_id:null,order_id:null,text_note:"",images:[]}),[v,N]=x.useState(""),y=x.useRef(null);x.useEffect(()=>{o(l)},[]),x.useEffect(()=>{t&&g(s=>({...s,user_id:t.user_id,order_id:t.order_id}))},[t]);const w=s=>{const a=s.target;if(a instanceof HTMLInputElement){const{name:c,value:n,files:u}=a;c==="images"&&u&&u.length>0?g(f=>({...f,images:[...f.images,...Array.from(u)]})):g(f=>({...f,[c]:n}))}},_=async s=>{try{const{isConfirmed:a}=await j.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(a){const{success:c,message:n}=await d(s);c?(await o(l),j.fire(n)):j.fire(n)}}catch(a){j.fire({title:"Error",text:a.message,icon:"error"})}},C=()=>{var s;(s=y.current)==null||s.click()},k=s=>{g(a=>({...a,images:a.images.filter((c,n)=>n!==s)}))},D=async s=>{s.preventDefault();try{await U.validate(r,{abortEarly:!1});const a=new FormData;a.append("user_id",r.user_id),a.append("order_id",r.order_id),a.append("text_note",r.text_note),r.images&&r.images.length>0&&r.images.forEach(n=>{a.append("images",n)}),await h(a)&&(N(""),await o(r.order_id))}catch(a){a instanceof I?N(a.errors[0]):p.error("Failed to add note")}};return t?e.jsxs("div",{className:"container mx-auto p-6",children:[e.jsxs("div",{className:"flex justify-between items-center bg-gray-100 p-6 rounded-md shadow",children:[e.jsxs("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:["Order Details - #",l]}),e.jsx("span",{className:"px-4 py-2 rounded-full text-white bg-orange-500",children:t.order_status_name})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-md shadow",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-2xl font-semibold",children:"Order Items"})}),e.jsx("div",{className:"space-y-4",children:t.items.map(s=>e.jsxs("div",{className:"flex items-center justify-between border border-gray-200 rounded-xl gap-2 px-4 py-4 bg-secondary-clarity",children:[e.jsxs("div",{className:"flex items-center gap-3.5",children:[e.jsx("img",{alt:s.product.name,className:"w-10 shrink-0 object-cover rounded",src:s.product.image}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{className:"text-sm font-semibold text-gray-900 hover:text-primary-active mb-px",href:"#",children:s.product.name}),e.jsxs("span",{className:"text-2sm font-medium text-gray-600",children:["Category: ",s.category.name]})]})]}),e.jsx("div",{className:"flex items-center gap-5",children:e.jsxs("span",{className:"badge badge-lg badge-success badge-outline",children:["Service: ",s.service.name]})})]},s.item_id))})]}),e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Order Summary"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Sub Total:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",t.sub_total]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Shipping Charges:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",t.shipping_charges]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Express Delivery Charges:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",t.express_delivery_charges]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Kasar Amount:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",t.kasar_amount]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Coupon Code:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:t.coupon_code})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Coupon Discount"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",t.coupon_discount]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Total:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:["₹",t.total]})]})]})})})]})}),e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Estimated Delivery & Pickup"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Estimated Pickup Time:"}),e.jsx("td",{className:"text-sm font-medium text-gray-700",children:new Date(t.estimated_pickup_time).toLocaleDateString()})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Estimated Delivery Time:"}),e.jsx("td",{className:"text-sm font-medium text-gray-700",children:new Date(t.estimated_delivery_time).toLocaleDateString()})]})]})})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Customer Information"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Name:"}),e.jsxs("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:[t.user.first_name," ",t.user.last_name]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Email:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:t.user.email})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Mobile Number:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:t.user.mobile_number})]})]})})})]})}),e.jsx("div",{className:"card rounded-xl",children:e.jsx("div",{className:"flex items-center justify-between grow gap-5 p-5 bg-[center_right_-8rem] bg-no-repeat bg-[length:700px] upgrade-bg",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsx("h3",{className:"card-title",children:"Shipping Address"})}),e.jsx("div",{className:"text-2sm font-medium text-gray-700",children:t.address_details!=="null"&&t.address_details.trim()!==""?t.address_details:"Address not provided."})]})})})}),e.jsx("div",{className:"col-span-2 lg:col-span-1 flex",children:e.jsxs("div",{className:"card grow",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Payment Information"})}),e.jsx("div",{className:"card-body pt-4 pb-3",children:e.jsx("table",{className:"table-auto",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Payment Type::"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:O[t.payment_type]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Payment Status:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:P[t.payment_status]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-medium text-gray-500 min-w-36 pb-5 pe-6",children:"Transaction ID:"}),e.jsx("td",{className:"flex items-center gap-2.5 text-sm font-medium text-gray-700",children:t.transaction_id||"N/A"})]})]})})})]})})]})]}),e.jsxs("div",{className:"mt-6 bg-white p-6 rounded-md shadow",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-700 mb-4",children:"Order Notes"}),e.jsxs("div",{children:[e.jsxs("div",{className:"relative border border-gray-300 rounded-md p-2",children:[e.jsx("textarea",{className:"w-full h-[100px] p-3 border-none focus:outline-none focus:ring-0",placeholder:"Add a new note...",value:r.text_note||"",onChange:s=>g({...r,text_note:s.target.value})}),e.jsxs("div",{className:"flex items-center mt-2",children:[e.jsx("button",{className:"text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded-full p-1 transition-all ease-in-out duration-200",title:"Attach image",onClick:C,children:e.jsx(T,{size:23})}),e.jsx("input",{type:"file",ref:y,style:{display:"none"},multiple:!0,onChange:w,name:"images"})]})]}),e.jsx("p",{className:"text-red-500 text-sm",children:v||" "})]}),e.jsx("div",{children:r.images.map((s,a)=>e.jsxs("div",{className:"relative inline-block mr-2 mb-2 group",children:[e.jsx("img",{src:URL.createObjectURL(s),alt:`Preview ${a}`,className:"w-32 h-32 object-cover rounded-md border"}),e.jsx("button",{className:"absolute top-0 right-0 rounded-full p-1 shadow-md text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200",onClick:()=>k(a),children:e.jsx(z,{size:20})})]},a))}),e.jsx("button",{className:`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
          ${i?"opacity-50 cursor-not-allowed":""}`,onClick:D,disabled:i,children:i?"Adding...":"Add Note"}),e.jsx("ul",{className:"mt-6 space-y-4",children:(b=t.notes)==null?void 0:b.map((s,a)=>{const c=R(s.created_at).format("HH:mm, DD/MM/YYYY");return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("span",{className:"block text-sm text-gray-600",children:["• ",s.user.first_name," ",s.user.last_name]}),e.jsx("span",{className:"text-xs text-gray-500",children:c})]}),e.jsxs("li",{className:"p-4 border rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200 relative",children:[e.jsx("p",{className:"text-gray-800 mb-2",children:s.text_note}),s.images&&s.images.length>0&&e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3",children:s.images.map((n,u)=>e.jsx("img",{src:n,className:"w-full h-auto rounded-md border shadow-sm",alt:`Note Attachment ${u+1}`},u))}),e.jsx("div",{className:"menu absolute top-1 right-2","data-menu":"true",children:e.jsxs("div",{className:"menu-item","data-menu-item-offset":"0, 10px","data-menu-item-placement":"bottom-end","data-menu-item-toggle":"dropdown","data-menu-item-trigger":"click|lg:click",children:[e.jsx("button",{className:"menu-toggle btn btn-sm btn-icon btn-light btn-clear",children:e.jsx("i",{className:"ki-filled ki-dots-vertical"})}),e.jsx("div",{className:"menu-dropdown menu-default w-full max-w-[175px]","data-menu-dismiss":"true",children:e.jsx("div",{className:"menu-item",children:e.jsxs("button",{className:"menu-link",onClick:()=>_(s.note_id),children:[e.jsx("span",{className:"menu-icon",children:e.jsx("i",{className:"ki-filled ki-trash"})}),e.jsx("span",{className:"menu-title",children:"Remove"})]})})})]})})]})]},a)})})]})]}):null};export{q as default};
