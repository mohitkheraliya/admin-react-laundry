import{r as d,B as U,V as D,a as P,d as f,K as $,e as F,j as e,b as R,i as A,n as I,N as T,l as C,F as z}from"./index-D55dg6K9.js";import{L as O}from"./Loading-CjM1mdmb.js";import{au as G,av as H}from"./AdapterDayjs-DzJ96Zpx.js";import{D as V}from"./DatePicker-BH9Rzm7H.js";const B=()=>{const[a,u]=d.useState(),[m,y]=d.useState();return{settingsData:m,fetchSetting:async()=>{const h=localStorage.getItem("authToken");u(!0);try{const g=await fetch(`${U}/admin/settings`,{method:"GET",headers:{Authorization:h?`Bearer ${h}`:""}}),_=await g.json();if(!g.ok){D.error(_.message,{position:"top-center"}),u(!1);return}y(_)}catch(g){D.error(g||"Network Error: Fail to fetch data")}finally{u(!1)}},loading:a}},Y=P().shape({estimate_pickup_normal_hour:f().notRequired().test("is-numeric","Estimate pickup normal hour must be a positive number",a=>a?/^\d+$/.test(a):!0),estimate_pickup_express_hour:f().notRequired().test("is-numeric","Estimate pickup express hour must be a positive number",a=>a?/^\d+$/.test(a):!0),gst_percentage:f().notRequired().test("is-numeric","GST percentage must be a positive number",a=>a?/^\d+$/.test(a):!0),estimate_delivery_normal_day:f().notRequired().test("is-numeric","Estimate delivery normal day must be a positive number",a=>a?/^\d+$/.test(a):!0),estimate_delivery_express_day:f().notRequired().test("is-numeric","Estimate delivery express day must be a positive number",a=>a?/^\d+$/.test(a):!0),normal_delivery_charges:f().notRequired().test("is-numeric","Normal delivery charge must be a positive number",a=>a?/^\d+$/.test(a):!0),express_delivery_charge:f().notRequired().test("is-numeric","Express delivery charge must be a positive number",a=>a?/^\d+$/.test(a):!0)}),J=({})=>{const{settingsData:a,fetchSetting:u}=B(),{addSetting:m,loading:y}=$(),[x,h]=d.useState({}),[g,_]=d.useState(!1),{hasPermission:r}=F(),n=a==null?void 0:a.data,[i,N]=d.useState({estimate_delivery_express_day:"",estimate_delivery_normal_day:"",estimate_pickup_express_hour:"",estimate_pickup_normal_hour:"",gst_percentage:"",normal_delivery_charges:"",express_delivery_charge:""});d.useEffect(()=>{u(),_(!1)},[g]),d.useEffect(()=>{n&&N({estimate_delivery_express_day:n.estimate_delivery_express_day||"",estimate_delivery_normal_day:n.estimate_delivery_normal_day||"",estimate_pickup_express_hour:n.estimate_pickup_express_hour||"",estimate_pickup_normal_hour:n.estimate_pickup_normal_hour||"",gst_percentage:n.gst_percentage||"",normal_delivery_charges:n.normal_delivery_charges||"",express_delivery_charge:n.express_delivery_charge||""})},[n]);const p=async s=>{s.preventDefault();try{if(await Y.validate(i,{abortEarly:!1}),!Object.keys(i).some(j=>i[j]!==n[j]))return;const w=Object.keys(i).map(j=>({setting_key:j,setting_value:i[j]}));await m(w)&&(h({}),_(!0))}catch(v){if(v instanceof R){const w={};v.inner.forEach(E=>{w[E.path||""]=E.message}),h(w)}else D.error("Failed to submit the form. Please try again.")}},t=(s,v)=>{N({...i,[s]:v})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card pb-2.5 min-w-full",children:[e.jsx("div",{className:"card-header",id:"basic_settings",children:e.jsx("h3",{className:"card-title",children:"General Settings"})}),e.jsx("form",{onSubmit:p,children:e.jsxs("div",{className:"card-body grid gap-1",children:[e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Pickup Normal Hour (In Hour)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.estimate_pickup_normal_hour||"",onChange:s=>t("estimate_pickup_normal_hour",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.estimate_pickup_normal_hour||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Pickup Express Hour (In Hour)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.estimate_pickup_express_hour||"",onChange:s=>t("estimate_pickup_express_hour",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.estimate_pickup_express_hour||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"GST Percentage (%)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.gst_percentage,onChange:s=>t("gst_percentage",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.gst_percentage||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Delivery Normal Day (Day)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.estimate_delivery_normal_day,onChange:s=>t("estimate_delivery_normal_day",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.estimate_delivery_normal_day||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Estimate Delivery Express Day (Day)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.estimate_delivery_express_day,onChange:s=>t("estimate_delivery_express_day",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.estimate_delivery_express_day||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Normal Delivery Charge (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.normal_delivery_charges,onChange:s=>t("normal_delivery_charges",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.normal_delivery_charges||" "})]})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Express Delivery Charge (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${r(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:i.express_delivery_charge,onChange:s=>t("express_delivery_charge",s.target.value),readOnly:!r(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:x.express_delivery_charge||" "})]})]})}),r(2,"update")&&e.jsx("div",{className:"flex relative justify-end pt-2.5",children:e.jsx("button",{className:"btn btn-primary",type:"submit",disabled:y,children:y?e.jsxs(e.Fragment,{children:["Saving... ",e.jsx(O,{})]}):e.jsx(e.Fragment,{children:"Save Changes "})})})]})})]})})})},M=P().shape({title:f().required("Title is required"),price:I().required("Please enter price").typeError("Price must be a number").min(0,"Price must be a positive number"),promotion_code:f().notRequired().matches(/^[a-zA-Z0-9]*$/,"Coupon code can only contain letters and numbers").test("length","Coupon code must be between 3 and 30 characters long",a=>!a||a.length>=3&&a.length<=30).nullable(),image:A().test("fileType","Allowed Format : jpg, jpeg, png, ",a=>a&&a instanceof File?["image/jpeg","image/png","image/jpg"].includes(a.type):!0).test("dimensions","image dimention 632×445 pixels allowed",a=>!a||!(a instanceof File)?!0:new Promise(u=>{const m=new Image;m.src=URL.createObjectURL(a),m.onload=()=>{URL.revokeObjectURL(m.src),u(m.width===632&&m.height===445)},m.onerror=()=>{u(!1)}})).nullable()}),K=()=>{const{settingsData:a,fetchSetting:u}=B(),{addSetting:m,loading:y}=$(),{updatePromotionBanner:x,loading:h}=T(),[g,_]=d.useState(null),[r,n]=d.useState({}),[i,N]=d.useState(!1),{hasPermission:p}=F(),[t,s]=d.useState({image:null,title:"",price:"",promotion_code:"",offer_validity:C()}),[v,w]=d.useState({image:null,title:"",price:"",promotion_code:"",offer_validity:C()});d.useEffect(()=>{u(),N(!1)},[i]),d.useEffect(()=>{var o,l;if(a){const c=JSON.parse((o=a==null?void 0:a.data)==null?void 0:o.home_promotion_banner_website),b=(l=a==null?void 0:a.data)==null?void 0:l.home_banner_image,S={...t,title:c.title||"",price:c.price||"",promotion_code:c.promotion_code||"",offer_validity:C(c.offer_validity),image:b};s(S),w(S)}},[a]);const E=o=>{s(l=>({...l,offer_validity:o}))},j=o=>{var c;const l=(c=o.target.files)==null?void 0:c[0];if(l){const b=URL.createObjectURL(l);_(b),s(S=>({...S,image:l}))}},q=async o=>{o.preventDefault();try{await M.validate(t,{abortEarly:!1});let l;const c=new FormData;if(g!==null&&(c.append("home_banner_image",t.image),c.append("setting_key","home_banner_image"),l=await x(c),l&&(n({}),N(!0)),_(null)),!Object.keys(t).some(k=>k==="image"?!1:t[k]!==v[k]))return;const S={title:t.title,price:t.price,promotion_code:t.promotion_code,offer_validity:t.offer_validity},L=[{setting_key:"home_promotion_banner_website",setting_value:JSON.stringify(S)}];l=await m(L),l&&(n({}),N(!0))}catch(l){if(l instanceof R){const c={};l.inner.forEach(b=>{c[b.path||""]=b.message}),n(c)}else D.error("Failed to submit the form. Please try again.")}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"card min-w-full pb-2.5",children:[e.jsx("div",{className:"card-header",id:"basic_settings",children:e.jsx("h3",{className:"card-title",children:"Promotion Banner"})}),e.jsx("form",{onSubmit:q,children:e.jsxs("div",{className:"card-body grid gap-4",children:[e.jsx("div",{className:"flex items-center flex-wrap gap-2.5",children:e.jsx("div",{className:"flex justify-end flex-wrap grow gap-2.5",children:e.jsxs("div",{className:"image-input relative","data-image-input":"true",children:[e.jsx("label",{htmlFor:"image-upload",className:`btn btn-icon btn-icon-2xl btn-light absolute z-1 size-8 -top-0.5 -right-0.5 rounded-full ${p(2,"update")?"":"hidden"}`,children:p(2,"update")&&e.jsx(z,{className:"text-blue-600"})}),e.jsx("input",{id:"image-upload",type:"file",accept:"image/*",style:{display:"none"},onChange:j}),e.jsxs("div",{className:"flex flex-col items-center w-[300px]",children:[e.jsx("div",{className:"image-input-placeholder rounded-md border-2",children:e.jsx("img",{className:"h-[200px] w-[300px] rounded-sm",src:g||typeof t.image=="string"&&t.image||"",alt:"Promotion Banner"})}),e.jsx("p",{className:"text-red-500 text-sm min-h-[20px] block w-full text-center",children:r.image||" "})]})]})})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Title"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${p(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:t.title,onChange:o=>s({...t,title:o.target.value}),readOnly:!p(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:r.title||" "})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Price (Rs)"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${p(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:t.price,onChange:o=>s({...t,price:o.target.value}),readOnly:!p(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:r.price||" "})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Promotion code"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("input",{className:`input ${p(2,"update")?"":"border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none"}`,type:"text",value:t.promotion_code,onChange:o=>s({...t,promotion_code:o.target.value}),readOnly:!p(2,"update")}),e.jsx("p",{className:"text-red-500 text-sm",children:r.promotion_code||" "})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mt-3",children:[e.jsx("label",{className:"form-label flex items-center gap-1 max-w-56",children:"Offer Validity"}),e.jsx(G,{dateAdapter:H,children:e.jsx(V,{value:t.offer_validity,onChange:E,disabled:!p(2,"update"),format:"DD-MM-YYYY",slotProps:{textField:{fullWidth:!0,InputProps:{style:{height:"35px",width:"155px",fontSize:"14px"}}}}})})]})}),p(2,"update")&&e.jsx("div",{className:"flex relative justify-end pt-2.5",children:e.jsx("button",{className:"btn btn-primary",type:"submit",disabled:y||h,children:y||h?e.jsxs(e.Fragment,{children:["Saving...",e.jsx(O,{})]}):e.jsx(e.Fragment,{children:"Save Changes"})})})]})})]})})})},ee=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Settings"})})})}),e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5",children:[e.jsx(J,{}),e.jsx(K,{})]})})]});export{ee as default};
