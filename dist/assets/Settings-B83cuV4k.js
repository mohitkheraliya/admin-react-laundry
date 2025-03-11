import{c as k,h as p,D as C,E as P,r as m,j as e,V as F,_ as B,a as L,H as z,F as A}from"./index-BGpOCz7R.js";import{L as R}from"./Loading-CCkclrlE.js";import{d as D}from"./dayjs.min-sRTcbxS6.js";import{au as G,av as T}from"./AdapterDayjs-CHSOMHiY.js";import{D as U}from"./DatePicker-DmtEu5Xw.js";const Y=k().shape({estimate_pickup_normal_hour:p().typeError("estimate pickup normal hour must be a number").min(0,"estimate pickup normal hour must be a positive number"),estimate_pickup_express_hour:p().typeError("estimate pickup express hour must be a number").min(0,"estimate pickup express hour must be a positive number"),gst_percentage:p().typeError("gst percentage must be a number").min(0,"gst percentage must be a positive number"),estimate_delivery_normal_day:p().typeError("estimate delivery normal day must be a number").min(0,"estimate delivery normal day must be a positive number"),estimate_delivery_express_day:p().typeError("estimate delivery express day must be a number").min(0,"estimate delivery express day must be a positive number"),shipping_charge:p().typeError("shipping charge must be a number").min(0,"shipping charge must be a positive number"),express_delivery_charge:p().typeError("express delivery charge must be a number").min(0,"express delivery charge must be a positive number")}),q=({})=>{const{settingsData:n,fetchSetting:w,loading:O}=C(),{addSetting:S,loading:f}=P(),[d,_]=m.useState({}),[b,v]=m.useState(!1),r=n==null?void 0:n.data,[t,N]=m.useState({estimate_delivery_express_day:"",estimate_delivery_normal_day:"",estimate_pickup_express_hour:"",estimate_pickup_normal_hour:"",gst_percentage:"",shipping_charge:"",express_delivery_charge:""});m.useEffect(()=>{w(),v(!1)},[b]),m.useEffect(()=>{r&&N({estimate_delivery_express_day:r.estimate_delivery_express_day||"",estimate_delivery_normal_day:r.estimate_delivery_normal_day||"",estimate_pickup_express_hour:r.estimate_pickup_express_hour||"",estimate_pickup_normal_hour:r.estimate_pickup_normal_hour||"",gst_percentage:r.gst_percentage||"",shipping_charge:r.shipping_charge||"",express_delivery_charge:r.express_delivery_charge||""})},[r]);const j=async s=>{s.preventDefault();try{if(await Y.validate(t,{abortEarly:!1}),!Object.keys(t).some(x=>t[x]!==r[x]))return;const h=Object.keys(t).map(x=>({setting_key:x,setting_value:t[x]}));await S(h)&&(_({}),v(!0))}catch(o){if(o instanceof F){const h={};o.inner.forEach(y=>{h[y.path||""]=y.message}),_(h)}else B.error("Failed to submit the form. Please try again.")}},a=(s,o)=>{N({...t,[s]:o})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card pb-2.5 min-w-full",children:[e.jsx("div",{className:"card-header",id:"basic_settings",children:e.jsx("h3",{className:"card-title",children:"General Settings"})}),e.jsx("form",{onSubmit:j,children:e.jsxs("div",{className:"card-body grid gap-1",children:[e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Pickup Normal Hour (In Hour)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.estimate_pickup_normal_hour||"",onChange:s=>a("estimate_pickup_normal_hour",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.estimate_pickup_normal_hour||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Pickup Express Hour (In Hour)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.estimate_pickup_express_hour||"",onChange:s=>a("estimate_pickup_express_hour",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.estimate_pickup_express_hour||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"GST Percentage (%)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.gst_percentage,onChange:s=>a("gst_percentage",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.gst_percentage||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Delivery Normal Day (Day)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.estimate_delivery_normal_day,onChange:s=>a("estimate_delivery_normal_day",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.estimate_delivery_normal_day||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Delivery Express Day (Day)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.estimate_delivery_express_day,onChange:s=>a("estimate_delivery_express_day",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.estimate_delivery_express_day||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Shipping Charge (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.shipping_charge,onChange:s=>a("shipping_charge",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.shipping_charge||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Express Delivery Charge (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:t.express_delivery_charge,onChange:s=>a("express_delivery_charge",s.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:d.express_delivery_charge||" "})]})]})}),e.jsx("div",{className:"flex relative justify-end pt-2.5",children:e.jsx("button",{className:"btn btn-primary",type:"submit",disabled:f,children:f?e.jsxs(e.Fragment,{children:["Saving... ",e.jsx(R,{})]}):e.jsx(e.Fragment,{children:"Save Changes "})})})]})})]})})})},V=k().shape({title:L().required("Title is required"),price:p().required("Please enter price").typeError("Price must be a number").min(0,"Price must be a positive number")}),$=()=>{const{settingsData:n,fetchSetting:w,loading:O}=C(),{addSetting:S,loading:f}=P(),{updatePromotionBanner:d,loading:_}=z(),[b,v]=m.useState(null),[r,t]=m.useState({}),[N,j]=m.useState(!1),[a,s]=m.useState({image:null,title:"",price:"",offer_validity:D()}),[o,h]=m.useState({image:null,title:"",price:"",offer_validity:D()});m.useEffect(()=>{w(),j(!1)},[N]),m.useEffect(()=>{var c,i;if(n){const l=JSON.parse((c=n==null?void 0:n.data)==null?void 0:c.home_promotion_banner_website),u=(i=n==null?void 0:n.data)==null?void 0:i.home_banner_image,g={...a,title:l.title||"",price:l.price||"",offer_validity:D(l.offer_validity),image:u};s(g),h(g)}},[n]);const y=c=>{s(i=>({...i,offer_validity:c}))},x=c=>{var l;const i=(l=c.target.files)==null?void 0:l[0];if(i){const u=URL.createObjectURL(i);v(u),s(g=>({...g,image:i}))}},I=async c=>{c.preventDefault();try{await V.validate(a,{abortEarly:!1});let i;const l=new FormData;if(b!==null&&(l.append("home_banner_image",a.image),l.append("setting_key","home_banner_image"),i=await d(l),i&&j(!0),v(null)),!Object.keys(a).some(E=>E==="image"?!1:a[E]!==o[E]))return;const g={title:a.title,price:a.price,offer_validity:a.offer_validity},H=[{setting_key:"home_promotion_banner_website",setting_value:JSON.stringify(g)}];i=await S(H),i&&(t({}),j(!0))}catch(i){if(i instanceof F){const l={};i.inner.forEach(u=>{l[u.path||""]=u.message}),t(l)}else B.error("Failed to submit the form. Please try again.")}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card min-w-full pb-2.5",children:[e.jsx("div",{className:"card-header",id:"basic_settings",children:e.jsx("h3",{className:"card-title",children:"Promotion Banner"})}),e.jsx("form",{onSubmit:I,children:e.jsxs("div",{className:"card-body grid gap-4",children:[e.jsx("div",{className:"flex items-center flex-wrap gap-2.5",children:e.jsx("div",{className:"flex justify-end flex-wrap grow gap-2.5",children:e.jsxs("div",{className:"image-input","data-image-input":"true",children:[e.jsx("label",{htmlFor:"image-upload",className:"btn btn-icon btn-icon-2xl btn-light absolute z-1 size-8 -top-0.5 -right-0.5 rounded-full",children:e.jsx(A,{className:"text-blue-600"})}),e.jsx("input",{id:"image-upload",type:"file",accept:"image/*",style:{display:"none"},onChange:x}),e.jsx("div",{className:"image-input-placeholder rounded-md border-2",children:e.jsx("img",{className:"h-[200px] w-[300px] rounded-sm",src:b||typeof a.image=="string"&&a.image||"",alt:"Promotion Banner"})})]})})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Title"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:a.title,onChange:c=>s({...a,title:c.target.value})}),e.jsx("p",{className:"text-red-500 text-sm",children:r.title||" "})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Price (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:a.price,onChange:c=>s({...a,price:c.target.value})}),e.jsx("p",{className:"text-red-500 text-sm",children:r.price||" "})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Offer Validity"}),e.jsx(G,{dateAdapter:T,children:e.jsx(U,{value:a.offer_validity,onChange:y,format:"DD-MM-YYYY",slotProps:{textField:{fullWidth:!0,InputProps:{style:{height:"35px",width:"155px",fontSize:"14px"}}}}})})]})}),e.jsx("div",{className:"flex relative justify-end pt-2.5",children:e.jsx("button",{className:"btn btn-primary",type:"submit",disabled:f||_,children:f||_?e.jsxs(e.Fragment,{children:["Saving...",e.jsx(R,{})]}):e.jsx(e.Fragment,{children:"Save Changes"})})})]})})]})})})},X=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Settings"})})})}),e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5",children:[e.jsx(q,{}),e.jsx($,{})]})})]});export{X as default};
