import{r as m,_ as y,f as I,n as C,g as Q,M as je,j as e,V as H,q as Ne,p as ve,m as we,c as ke}from"./index-Dgee7s5W.js";import{u as Se}from"./useGetCoupons-DFJxpmlV.js";import{u as Ce}from"./useGetPrice-DsQjVzX4.js";import{u as De}from"./useGetSingleOrder-Bdm3s5uu.js";import{u as Pe}from"./useGetUsersByRole-7Dr8nfXU.js";const Te=()=>{const[o,p]=m.useState([]),[g,x]=m.useState(!1);return{products:o,loading:g,fetchProductsOnId:async i=>{const u=localStorage.getItem("authToken"),h=`http://35.154.167.170:3000/category/${i}/product`;x(!0);try{const l=await fetch(h,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}});if(!l.ok){const d=await l.json();y.error(d.message,{position:"top-center"});return}const n=await l.json(),f=(n==null?void 0:n.data)||[];p(f)}catch(l){y.error((l==null?void 0:l.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{x(!1)}}}},Ae=()=>{const[o,p]=m.useState([]),[g,x]=m.useState(!1);return{services:o,loading:g,fetchServicesOnId:async(i,u)=>{const h=localStorage.getItem("authToken"),l=`http://35.154.167.170:3000/category/${i}/product/${u}/service`;try{const n=await fetch(l,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`}});if(!n.ok){const k=await n.json();y.error(k.message,{position:"top-center"});return}const f=await n.json(),d=(f==null?void 0:f.data)||[];p(d)}catch(n){y.error((n==null?void 0:n.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{x(!1)}}}},Oe="http://35.154.167.170:3000",Fe=`${Oe}/admin/orders`,$e=()=>{const[o,p]=m.useState(!1);return{addOrder:async x=>{const v=localStorage.getItem("authToken");p(!0);try{const i=await fetch(Fe,{method:"POST",headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"},body:JSON.stringify(x)});if(!i.ok){const h=await i.json();return y.error(h.message,{position:"top-center"}),!1}const u=await i.json();return y.success(u.message,{position:"top-center"}),!0}catch(i){return y.error((i==null?void 0:i.message)||"Network error: Failed to fetch.",{position:"top-center"}),!1}finally{p(!1)}},loading:o}},Ee=()=>{const[o,p]=m.useState(!1);return{updateOrder:async(x,v)=>{const i=localStorage.getItem("authToken"),u=`http://35.154.167.170:3000/admin/orders/${x}`;p(!0);try{const h=await fetch(u,{method:"PUT",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify(v)});if(h.ok){const n=await h.json();return y.success(n.message,{position:"top-center"}),!0}const l=await h.json();return y.error(l.message,{position:"top-center"}),!1}catch(h){return y.error((h==null?void 0:h.message)||"Network error: Failed to fetch.",{position:"top-center"}),!1}finally{p(!1)}},loading:o}},Ie=()=>{const[o,p]=m.useState([]),[g,x]=m.useState(!1);return{address:o,loading:g,fetchAddress:async i=>{var l;const u=localStorage.getItem("authToken"),h=`http://35.154.167.170:3000/address/${i}/user`;try{const n=await fetch(h,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}});if(!n.ok){const k=await n.json();y.error(k.message,{position:"top-center"});return}const f=await n.json(),d=((l=f==null?void 0:f.data)==null?void 0:l.result)||[];p(d)}catch(n){y.error((n==null?void 0:n.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{x(!1)}}}},qe=I().shape({category_id:C().nullable().required("Please select a category").test("required","Please select a category",o=>!!o),product_id:C().nullable().required("Please select a product").test("required","Please select a product",o=>!!o),service_id:C().nullable().required("Please select a service").test("required","Please select a service",o=>!!o),price:C().nullable().when(["category_id","product_id","service_id"],([o,p,g],x)=>o&&p&&g?x.required("Price is not available for the combination, please add a price"):x.nullable())}),Re=I().shape({username:Q().required("Please enter username"),express_delivery_charges:C().typeError("Express delivery charges must be a number").min(0,"Express delivery charges must be a positive number"),shipping_charges:C().typeError("Shipping charge must be a number").min(0,"Shipping charge must be a positive number"),payment_type:C().required("Please choose payment type").test("required","Please choose order status",o=>!!o),payment_status:C().required("Please choose payment status").test("required","Please choose payment status",o=>!!o),paid_amount:C().typeError("Paid amount must be a number").min(0,"Paid amount must be a positive number"),items:je().of(qe)}),Ue=()=>{const[o,p]=m.useState(!1);return{addAddress:async x=>{const v="http://35.154.167.170:3000/address/admin/",i=localStorage.getItem("authToken");p(!0);try{const u=await fetch(v,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify(x)});if(!u.ok){const l=await u.json();return y.error(l.message,{position:"top-center"}),!1}const h=await u.json();return y.success(h.message,{position:"top-center"}),!0}catch(u){return y.error((u==null?void 0:u.message)||"Error adding banner",{position:"top-center"}),!1}finally{p(!1)}},loading:o}},Ge=I().shape({pincode:Q().required("Pin Code is required").matches(/^[0-9]{6}$/,"Pincode must be 6 digit")}),Le=({isOpen:o,onClose:p,userId:g,setIsSubmit:x})=>{const{addAddress:v,loading:i}=Ue(),[u,h]=m.useState(""),[l,n]=m.useState({building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:"",user_id:null});m.useEffect(()=>{o?g&&n(d=>({...d,user_id:g})):(n({building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:"",user_id:null}),h(""))},[o,g]);const f=async d=>{d.preventDefault();try{await Ge.validate(l,{abortEarly:!1}),g&&await v(l),x(!0),p()}catch(k){k instanceof H&&h(k.errors[0])}};if(o)return e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:p}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-lg z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default",onClick:p,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Add New Address"}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"building_number",className:"block text-gray-700 font-semibold",children:"Building Number"}),e.jsx("input",{type:"text",id:"building_number",name:"building_number",value:l.building_number,onChange:d=>n({...l,building_number:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"area",className:"block text-gray-700 font-semibold",children:"Area"}),e.jsx("input",{type:"text",id:"area",name:"area",value:l.area,onChange:d=>n({...l,area:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"landmark",className:"block text-gray-700 font-semibold",children:"Landmark"}),e.jsx("input",{type:"text",id:"landmark",name:"landmark",value:l.landmark,onChange:d=>n({...l,landmark:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"pincode",className:"block text-gray-700 font-semibold",children:"Pin code"}),e.jsx("input",{type:"text",id:"pincode",name:"pincode",value:l.pincode,onChange:d=>n({...l,pincode:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:u||" "})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"city",className:"block text-gray-700 font-semibold",children:"City"}),e.jsx("input",{type:"text",id:"city",name:"city",value:l.city,onChange:d=>n({...l,city:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"state",className:"block text-gray-700 font-semibold",children:"State"}),e.jsx("input",{type:"text",id:"state",name:"state",value:l.state,onChange:d=>n({...l,state:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"country",className:"block text-gray-700 font-semibold",children:"Country"}),e.jsx("input",{type:"text",id:"country",name:"country",value:l.country,onChange:d=>n({...l,country:d.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]})]}),e.jsxs("div",{className:"flex justify-end mt-4",children:[e.jsx("button",{type:"button",onClick:p,className:"btn btn-light mr-2",disabled:i,children:"Cancel"}),e.jsx("button",{type:"submit",disabled:i,className:`btn btn-primary ${i?"opacity-50 cursor-not-allowed":""}`,children:i?"Submitting...":"Submit"})]})]})]})]})},Qe=()=>{const{prices:o,fetchPrices:p}=Ce(),{categories:g,fetchCategories:x}=Ne(),{products:v,fetchProductsOnId:i}=Te(),{services:u,fetchServicesOnId:h}=Ae(),[l,n]=m.useState(!1),[f,d]=m.useState(""),[k,$]=m.useState(!0),{id:K}=ve(),{updateOrder:W,loading:X}=Ee(),{addOrder:Y,loading:Z}=$e(),q=Number(K),ee=1e3,te=1,[se,R]=m.useState(!1),[U,G]=m.useState(!1),{users:L,fetchUsersByRole:ae}=Pe(),{coupons:re,fetchCoupons:z}=Se(te,ee),{order:b}=De(q),{address:le,fetchAddress:B}=Ie(),E=we(),[r,w]=m.useState({coupon_code:"",coupon_discount:null,express_delivery_charges:null,shipping_charges:null,payment_type:null,order_status:null,payment_status:null,sub_total:null,paid_amount:null,transaction_id:"",address_id:null,username:"",user_id:null,items:[{category_id:null,product_id:null,service_id:null,description:null,price:null,quantity:1,item_Total:null,showDescription:!1}]}),[ne,oe]=m.useState(null),[j,ce]=m.useState({});m.useEffect(()=>{const t=async()=>{r.user_id&&await B(r.user_id),U&&(await B(r.user_id),G(!1))};z(),t(),x()},[x,z,r.user_id,U]),m.useEffect(()=>{(async()=>{f&&k&&await ae(5,f)})()},[f,k]),m.useEffect(()=>{if(b){const t=`${b.user.first_name} ${b.user.last_name}`;d(t),$(!1);const a={coupon_code:b.coupon_code||"",coupon_discount:b.coupon_discount||null,express_delivery_charges:b.express_delivery_charges||null,shipping_charges:b.shipping_charges||null,payment_type:b.payment_type||null,order_status:b.order_status||null,payment_status:b.payment_status||null,sub_total:null,paid_amount:b.paid_amount||null,transaction_id:b.transaction_id||"",address_id:b.address_id,username:t,user_id:b.user_id||null,items:b.items.map(c=>({category_id:c.category_id,product_id:c.product_id,service_id:c.service_id,description:c.description||null,price:c.price,quantity:c.quantity,item_Total:c.price*c.quantity,showDescription:!!c.description}))},s=T(a);w({...a,sub_total:s}),oe({...a,sub_total:s})}},[b]);const de=async t=>{t.preventDefault();try{const a=r.items.map(_=>({category_id:Number(_.category_id),product_id:Number(_.product_id),service_id:Number(_.service_id),description:_.description,price:Number(_.price),quantity:Number(_.quantity)})),s={...r,address_id:Number(r.address_id),coupon_discount:Number(r.coupon_discount),shipping_charges:Number(r.shipping_charges),paid_amount:Number(r.paid_amount),express_delivery_charges:Number(r.express_delivery_charges),payment_type:Number(r.payment_type),payment_status:Number(r.payment_status),order_status:Number(r.order_status),items:a};if(await Re.validate(s,{abortEarly:!1}),!Object.keys(r).some(_=>r[_]!==ne[_])){E("/orders");return}let N;b?N=await W(q,s):N=await Y(s),N&&E("/orders")}catch(a){if(a instanceof H){const s={};a.inner.forEach(c=>{s[c.path||""]=c.message}),ce(s)}else y.error("Failed to submit the form. Please try again.")}},ie=t=>{d(t.target.value),$(!0)},ue=t=>{const a=`${t.first_name} ${t.last_name}`;d(a),$(!1),w({...r,username:a,user_id:t.user_id})},me=()=>{E("/orders")},pe=()=>{w(t=>({...t,items:[...t.items,{category_id:null,product_id:null,service_id:null,description:null,price:null,quantity:1,item_Total:null,showDescription:!1}]}))},he=t=>{w(a=>{const s=a.items.filter((_,A)=>A!==t),c={...a,items:s},N=T(c);return{...c,sub_total:N}})},D=(t,a,s)=>{w(c=>{const N=c.items.map((O,ye)=>{if(ye===t){const S={...O,[a]:s};a==="showDescription"&&(S.showDescription=s);const P=Number(S.category_id),F=Number(S.product_id),V=Number(S.service_id),_e=Number(S.quantity)||1;if((a==="category_id"||a==="product_id")&&(P&&i(P),F&&P&&h(P,F)),P&&F&&V){const J=xe(P,F,V);S.price=J,S.item_Total=J*_e}else S.price=null,S.item_Total=null;return S}return O}),_={...c,items:N},A=T(_);return{..._,sub_total:A}})},xe=(t,a,s)=>{const c=`${t}_${a}_${s}`;return o[c]||0},be=(t,a)=>{w(s=>{const c={...s,coupon_code:t,coupon_discount:a},N=T(c);return{...c,sub_total:N}}),n(!1)},M=(t,a)=>{w(s=>{const c={...s,[t]:a},N=T(c);return{...c,sub_total:N}})},T=t=>{const a=t.items.reduce((A,O)=>A+(O.item_Total||0),0),s=parseFloat(t.express_delivery_charges)||0,c=parseFloat(t.shipping_charges)||0,N=parseFloat(t.coupon_discount)||0;return a+s+c-N},ge=t=>{const a=t.target.value;w(s=>({...s,address_id:a}))},fe=t=>{t.preventDefault(),r.user_id?R(!0):y.error("Please select the user to add address")};return e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"card max-w-5xl mx-auto p-6 bg-white shadow-md",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:b?"Edit Order":"Add Order"}),e.jsxs("form",{onSubmit:de,children:[e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"relative flex flex-col flex-[0_0_40%]",children:[e.jsx("label",{htmlFor:"username",className:"block text-gray-700 text-sm font-bold mb-2",children:"User Name"}),e.jsx("input",{type:"text",id:"username",value:f||"",onChange:ie,className:"input border border-gray-300 rounded-md p-2 w-full mb-2",placeholder:"Search User..."}),f&&k&&e.jsx("ul",{className:"absolute mt-20 bg-white z-10 border border-gray-300 rounded-md p-2 w-full text-sm",children:L.length>0?L.map(t=>e.jsxs("li",{className:"p-2 hover:bg-gray-100 cursor-pointer",onClick:()=>ue(t),children:[t.first_name," ",t.last_name," (",t.mobile_number,")"]},t.user_id)):e.jsx("li",{className:"p-2 text-gray-500",children:"No users found"})}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.username||" "})]}),e.jsxs("div",{className:"grow flex",children:[e.jsxs("div",{className:"grow flex flex-col",children:[e.jsx("label",{htmlFor:"address",className:"block text-gray-700 text-sm font-bold mb-2",children:"Address Details"}),e.jsxs("select",{id:"address",value:r.address_id??"",onChange:ge,className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Address"}),le.map(t=>e.jsxs("option",{value:t.address_id,children:[t.building_number,", ",t.area,", ",t.landmark,","," ",t.city,", ",t.state,",",t.country,", ",t.pincode]},t.address_id))]})]}),e.jsx("div",{className:"flex flex-col self-center",children:e.jsx("button",{className:"btn btn-primary w-20 ml-2",onClick:fe,children:"Add address"})})]})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900 mt-10 mb-5",children:"Item"})}),r.items.map((t,a)=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-start md:flex-row md:items-end md:space-x-1",children:[e.jsxs("div",{className:"flex flex-col flex-1 mb-4 md:mb-0",children:[e.jsx("label",{htmlFor:"category",className:"block text-gray-700 text-sm font-bold mb-2",children:"Category"}),e.jsxs("select",{id:"category",value:t.category_id??"",onChange:s=>D(a,"category_id",s.target.value),className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Category"}),g.map(s=>e.jsx("option",{value:s.category_id,children:s.name},s.category_id))]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j[`items[${a}].category_id`]||" "})]}),e.jsxs("div",{className:"flex flex-col flex-1 mb-4 md:mb-0",children:[e.jsx("label",{htmlFor:"product",className:"block text-gray-700 text-sm font-bold mb-2",children:"Product"}),e.jsxs("select",{id:"product",value:t.product_id??"",onChange:s=>D(a,"product_id",s.target.value),className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Product"}),v.map(s=>e.jsx("option",{value:s.product_product_id,children:s.product_name},s.product_product_id))]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j[`items[${a}].product_id`]||" "})]}),e.jsxs("div",{className:"flex flex-col flex-1 mb-4 md:mb-0",children:[e.jsx("label",{htmlFor:"service",className:"block text-gray-700 text-sm font-bold mb-2",children:"Service"}),e.jsxs("select",{id:"service",value:t.service_id??"",onChange:s=>D(a,"service_id",s.target.value),className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Service"}),u==null?void 0:u.map(s=>e.jsx("option",{value:s==null?void 0:s.service_service_id,children:s.service_name},s==null?void 0:s.service_service_id))]}),e.jsxs("p",{className:"w-full text-red-500 text-sm",children:[j[`items[${a}].service_id`]||" ",e.jsx("br",{})]}),e.jsxs("p",{className:"w-full text-red-500 text-sm",children:[" ",e.jsx("br",{})]})]}),e.jsxs("div",{className:"flex flex-col flex-1",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Price"}),e.jsx("input",{type:"text",value:t.price||"",onChange:s=>D(a,"price",s.target.value),className:"input border border-gray-300 rounded-md p-2 w-full",readOnly:!0}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j[`items[${a}].price`]||" "})]}),e.jsxs("div",{className:"flex flex-col flex-1 mb-4 md:mb-0",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Quantity"}),e.jsx("input",{type:"text",value:t.quantity??1,onChange:s=>D(a,"quantity",s.target.value),className:"input border border-gray-300 rounded-md p-2 w-full"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:" "})]}),e.jsxs("div",{className:"flex flex-col flex-1 mb-4 md:mb-0",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Item total"}),e.jsx("input",{type:"text",value:t.item_Total??"",onChange:s=>D(a,"item_Total",s.target.value),className:"input border border-gray-300 rounded-md p-2",min:"0",step:"0.01",readOnly:!0}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:" "})]}),e.jsxs("div",{className:"flex flex-col md:mb-0",children:[e.jsx("label",{htmlFor:"description_checkbox",className:"block text-gray-700 text-sm font-bold mb-2",children:"Description"}),e.jsx("input",{className:"checkbox checkbox-lg m-auto",id:"description_checkbox","data-datatable-check":"true",type:"checkbox",checked:t.showDescription,onChange:s=>D(a,"showDescription",s.target.checked)}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:" "})]}),e.jsx("div",{className:"flex items-end",children:e.jsx("button",{type:"button",className:`p-2 mt-8 rounded-full ${r.items.length>1?"bg-red-100 hover:bg-red-200":"bg-gray-200 cursor-not-allowed"}`,onClick:()=>he(a),disabled:r.items.length===1,children:e.jsx(ke,{className:`${r.items.length>1?"text-red-500":"text-gray-400"}`})})})]},a),t.showDescription&&e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col w-80 mb-8",children:[e.jsx("label",{htmlFor:"description",className:"block text-gray-700 text-sm font-bold mb-2",children:"Description"}),e.jsx("textarea",{id:"description",value:t.description||"",onChange:s=>D(a,"description",s.target.value),className:"input border border-gray-300 rounded-md p-2 w-full"})]})})]})),e.jsx("button",{type:"button",onClick:pe,className:"btn btn-secondary mb-6",children:"Add Item"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex flex-col relative",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Coupon Code"}),e.jsxs("button",{type:"button",onClick:()=>n(!l),className:"bg-gray-200 border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-300 w-full text-left flex justify-between items-center",children:[e.jsx("span",{children:r.coupon_code||"Select Coupon code"}),e.jsx("span",{className:"ml-2",children:"▾"})]}),l&&e.jsx("ul",{className:"dropdown-menu scrollable-menu absolute z-10 mt-[73px] w-full bg-white border border-gray-300 rounded-md shadow-lg",children:re.map(t=>e.jsx("li",{className:"cursor-pointer hover:bg-gray-100",onClick:()=>be(t.code,t.discount_value),children:e.jsx("div",{className:"block px-4 py-2 text-sm",children:t.code})},t.coupon_id))}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.coupon_code||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Coupon Discount"}),e.jsx("input",{type:"text",value:r.coupon_discount||"",readOnly:!0,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.coupon_discount||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"express_delivery_charges",className:"block text-gray-700 text-sm font-bold mb-2",children:"Express Delivery Charges"}),e.jsx("input",{type:"text",id:"express_delivery_charges",min:"0",value:r.express_delivery_charges||"",onChange:t=>M("express_delivery_charges",t.target.value),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.express_delivery_charges||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"shipping_charges",className:"block text-gray-700 text-sm font-bold mb-2",children:"Shipping Charges"}),e.jsx("input",{type:"text",id:"shipping_charges",min:"0",value:r.shipping_charges||"",onChange:t=>M("shipping_charges",t.target.value),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.shipping_charges||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Sub Total"}),e.jsx("input",{type:"text",value:r.sub_total||"",readOnly:!0,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.sub_total||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"paid_amount",className:"block text-gray-700 text-sm font-bold mb-2",children:"Paid amount"}),e.jsx("input",{type:"text",id:"paid_amount",value:r.paid_amount||"",onChange:t=>w({...r,paid_amount:t.target.value}),className:"input border border-gray-300 rounded-md p-2",min:"0",step:"0.01"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.paid_amount||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"payment_method",className:"block text-gray-700 text-sm font-bold mb-2",children:"Payment Method"}),e.jsxs("select",{className:"select border border-gray-300 rounded-md p-2 w-full text-sm",id:"payment_method",value:r.payment_type??"",onChange:t=>w({...r,payment_type:Number(t.target.value)}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Payment Type"}),e.jsx("option",{value:1,children:"Cash on Delivery"}),e.jsx("option",{value:2,children:"Online Payment"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.payment_type||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"payment_status",className:"block text-gray-700 text-sm font-bold mb-2",children:"Payment Status"}),e.jsxs("select",{className:"select border border-gray-300 rounded-md p-2 w-full text-sm",id:"payment_status",value:r.payment_status??"",onChange:t=>w({...r,payment_status:t.target.value}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Payment Status"}),e.jsx("option",{value:1,children:"Pending"}),e.jsx("option",{value:2,children:"Received"}),e.jsx("option",{value:3,children:"Partial Received"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:j.payment_status||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"transaction_id",className:"block text-gray-700 text-sm font-bold mb-2",children:"Transaction ID"}),e.jsx("input",{type:"text",id:"transaction_id",value:r.transaction_id||"",onChange:t=>w({...r,transaction_id:t.target.value}),className:"input border border-gray-300 rounded-md p-2"})]})]}),e.jsxs("div",{className:"flex justify-start mt-6",children:[e.jsx("button",{type:"submit",className:"btn btn-primary mr-4",disabled:Z||X,children:b?"Update Order":"Add Order"}),e.jsx("button",{type:"button",onClick:me,className:"btn btn-secondary",children:"Cancel"})]})]}),e.jsx(Le,{isOpen:se,setIsSubmit:G,onClose:()=>R(!1),userId:r.user_id})]})})};export{Qe as default};