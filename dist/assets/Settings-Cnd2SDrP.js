import{c as C,aL as p,b5 as P,b6 as F,r as l,j as e,V as R,_ as Y,a as I,h as E,F as O,aN as V,aO as B,aT as M}from"./index-0KKf84UL.js";const z=C().shape({estimate_pickup_normal_hour:p().typeError("estimate pickup normal hour must be a number").min(0,"estimate pickup normal hour must be a positive number"),estimate_pickup_express_hour:p().typeError("estimate pickup express hour must be a number").min(0,"estimate pickup express hour must be a positive number"),gst_percentage:p().typeError("gst percentage must be a number").min(0,"gst percentage must be a positive number"),estimate_delivery_normal_day:p().typeError("estimate delivery normal day must be a number").min(0,"estimate delivery normal day must be a positive number"),estimate_delivery_express_day:p().typeError("estimate delivery express day must be a number").min(0,"estimate delivery express day must be a positive number"),shipping_charge:p().typeError("shipping charge must be a number").min(0,"shipping charge must be a positive number"),express_delivery_charge:p().typeError("express delivery charge must be a number").min(0,"express delivery charge must be a positive number")}),A=()=>{const{settingsData:d,fetchSetting:b}=P(),{addSetting:k}=F(),[n,_]=l.useState({}),[j,u]=l.useState(!1),[v,N]=l.useState(""),[y,h]=l.useState(""),s=d==null?void 0:d.data,[i,g]=l.useState({estimate_delivery_express_day:"",estimate_delivery_normal_day:"",estimate_pickup_express_hour:"",estimate_pickup_normal_hour:"",gst_percentage:"",shipping_charge:"",express_delivery_charge:""});l.useEffect(()=>{b(),u(!1)},[j]),l.useEffect(()=>{if(s){const a={estimate_delivery_express_day:s.estimate_delivery_express_day,estimate_delivery_normal_day:s.estimate_delivery_normal_day,estimate_pickup_express_hour:s.estimate_pickup_express_hour,estimate_pickup_normal_hour:s.estimate_pickup_normal_hour,gst_percentage:s.gst_percentage,shipping_charge:s.shipping_charge,express_delivery_charge:s.express_delivery_charge};g(a)}},[s]);const w=async a=>{a.preventDefault();try{await z.validate(i,{abortEarly:!1}),await k({setting_key:v,setting_value:y})&&(_({}),u(!0))}catch(m){if(m instanceof R){const f={};m.inner.forEach(t=>{f[t.path||""]=t.message}),_(f)}else Y.error("Failed to submit the form. Please try again.")}},c=(a,m)=>{N(a),h(m),g({...i,[a]:m})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card pb-2.5 w-[450px]",children:[e.jsx("div",{className:"card-header",id:"basic_settings",children:e.jsx("h3",{className:"card-title",children:"General Settings"})}),e.jsxs("div",{className:"card-body grid gap-1",children:[e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Pickup Normal Hour (In Hour)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.estimate_pickup_normal_hour||"",onChange:a=>c("estimate_pickup_normal_hour",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.estimate_pickup_normal_hour||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Pickup Express Hour (In Hour)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.estimate_pickup_express_hour||"",onChange:a=>c("estimate_pickup_express_hour",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.estimate_pickup_express_hour||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"GST Percentage (%)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.gst_percentage,onChange:a=>c("gst_percentage",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.gst_percentage||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Delivery Normal Day (Day)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.estimate_delivery_normal_day,onChange:a=>c("estimate_delivery_normal_day",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.estimate_delivery_normal_day||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Delivery Express Day (Day)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.estimate_delivery_express_day,onChange:a=>c("estimate_delivery_express_day",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.estimate_delivery_express_day||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Shipping Charge (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.shipping_charge,onChange:a=>c("shipping_charge",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.shipping_charge||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Express Delivery Charge (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:i.express_delivery_charge,onChange:a=>c("express_delivery_charge",a.target.value)}),e.jsx("p",{className:"text-red-500 text-sm",children:n.express_delivery_charge||" "})]})]})}),e.jsx("div",{className:"flex justify-end pt-2.5",children:e.jsx("button",{className:"btn btn-primary",onClick:w,children:"Save Changes"})})]})]})})},G=C().shape({title:I().required("Title is required"),price:p().required("Please enter price").typeError("Price must be a number").min(0,"Price must be a positive number")}),H=()=>{var f;const{settingsData:d,fetchSetting:b,loading:k}=P(),{addSetting:n}=F(),[_,j]=l.useState(null),[u,v]=l.useState({}),[N,y]=l.useState(!1),h=(f=d==null?void 0:d.data)==null?void 0:f.home_promotion_banner_website,[s,i]=l.useState({image:null,title:"",price:"",offer_validity:E()}),[g,w]=l.useState({image:null,title:"",price:"",offer_validity:E()});l.useEffect(()=>{b(),y(!1)},[N]),l.useEffect(()=>{if(h){const t=JSON.parse(h);if(t){const r={image:t.image_url||"",title:t.title||"",price:t.price||"",offer_validity:E(t.offer_validity)};i(r),w(r)}}},[h]);const c=t=>{i(r=>({...r,offer_validity:t}))},a=t=>{var o;const r=(o=t.target.files)==null?void 0:o[0];if(r){const x=URL.createObjectURL(r);j(x),i(D=>({...D,image:r}))}},m=async t=>{t.preventDefault();try{if(await G.validate(s,{abortEarly:!1}),!Object.keys(s).some(S=>S==="image"?s.image instanceof File||s.image!==g.image:s[S]!==g[S]))return;const o="home_promotion_banner_website",x={title:s.title,price:s.price,offer_validity:s.offer_validity.format("DD-MMM-YYYY"),image_url:s.image};await n({setting_key:o,setting_value:JSON.stringify(x)})&&(v({}),y(!0))}catch(r){if(r instanceof R){const o={};r.inner.forEach(x=>{o[x.path||""]=x.message}),v(o)}else Y.error("Failed to submit the form. Please try again.")}};return e.jsx("div",{children:e.jsxs("div",{className:"card w-[500px] pb-2.5",children:[e.jsx("div",{className:"card-header",id:"basic_settings",children:e.jsx("h3",{className:"card-title",children:"Promotion Banner"})}),e.jsxs("div",{className:"card-body grid gap-4",children:[e.jsx("div",{className:"flex items-center flex-wrap gap-2.5",children:e.jsx("div",{className:"flex justify-end flex-wrap grow gap-2.5",children:e.jsxs("div",{className:"image-input","data-image-input":"true",children:[e.jsx("label",{htmlFor:"image-upload",className:"btn btn-icon btn-icon-2xl btn-light absolute z-1 size-8 -top-0.5 -right-0.5 rounded-full",children:e.jsx(O,{className:"text-blue-600"})}),e.jsx("input",{id:"image-upload",type:"file",accept:"image/*",style:{display:"none"},onChange:a}),e.jsx("div",{className:"image-input-placeholder rounded-md border-2",children:e.jsx("img",{className:"h-[200px] w-[300px] rounded-sm",src:_||typeof s.image=="string"&&s.image||"",alt:"Promotion Banner"})})]})})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Title"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:s.title,onChange:t=>i({...s,title:t.target.value})}),e.jsx("p",{className:"text-red-500 text-sm",children:u.title||" "})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Price (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:"input",type:"text",value:s.price,onChange:t=>i({...s,price:t.target.value})}),e.jsx("p",{className:"text-red-500 text-sm",children:u.price||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Offer Validity"}),e.jsx(V,{dateAdapter:B,children:e.jsx(M,{value:s.offer_validity,onChange:c,format:"DD-MM-YYYY",slotProps:{textField:{fullWidth:!0,InputProps:{style:{height:"35px",width:"155px",fontSize:"14px"}}}}})})]})}),e.jsx("div",{className:"flex justify-end pt-2.5",children:e.jsx("button",{className:"btn btn-primary",onClick:m,children:"Save Changes"})})]})]})})},T=()=>e.jsxs("div",{className:"container-fixed",children:[e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Settings"}),e.jsxs("div",{className:"flex flex-row w-full gap-8 mt-5",children:[e.jsx(A,{}),e.jsx(H,{})]})]});export{T as default};
