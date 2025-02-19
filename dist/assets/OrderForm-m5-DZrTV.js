import{r as u,_ as f,B as ie,c as K,h as D,a as ce,q as Le,j as e,V as Q,s as Be,t as Ge,i as ze,v as Me,w as Ve,g as Je,k as He,b as Ke,x as Qe}from"./index-B7Y6owFE.js";import{u as Ye}from"./useGetCategories-DEMMu5Bv.js";import{u as We}from"./useGetPrice-C9pnxC49.js";import{u as Xe}from"./useGetBranches-Bq9qTCiY.js";import{u as Ze}from"./useGetOrder-DOQ1FnA_.js";import{u as et}from"./useGetUsersByRole-BmLWP5kL.js";import{u as tt,c as st}from"./userSchema-HCY_Uspj.js";import{u as at}from"./useGetuser-DhEfXKA-.js";const rt="http://35.154.167.170:3000/admin/coupon/apply",nt=()=>{const[d,p]=u.useState(!1);return{applyCoupon:async(y,m,b)=>{const i=localStorage.getItem("authToken");p(!0);try{const c=await fetch(rt,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({user_id:y,order_Total:m,coupon_code:b})}),o=await c.json();return c.ok?o.data:(f.error(o.message,{position:"top-center"}),!1)}catch{f.error("Unable to apply coupon code!")}finally{p(!1)}},loading:d}},lt=()=>{const[d,p]=u.useState([]),[j,y]=u.useState(!1),m=async b=>{const i=localStorage.getItem("authToken");y(!0);try{const c=await fetch(`${ie}/admin/valid-coupons?${b}`,{method:"GET",headers:{Authorization:i?`Bearer ${i}`:""}}),o=await c.json();if(!c.ok){f.error(o.message,{position:"top-center"}),y(!1);return}p(o==null?void 0:o.data)}catch{f.error("Network error: Failed to fetch coupons.")}finally{y(!1)}};return u.useEffect(()=>{m()},[]),{validCoupons:d,fetchValidCoupons:m,loading:j}},ot="http://35.154.167.170:3000",dt=`${ot}/admin/orders`,it=()=>{const[d,p]=u.useState(!1);return{addOrder:async y=>{const m=localStorage.getItem("authToken");p(!0);try{const b=await fetch(dt,{method:"POST",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify(y)});if(!b.ok){const c=await b.json();return f.error(c.message,{position:"top-center"}),!1}const i=await b.json();return f.success(i.message,{position:"top-center"}),!0}catch(b){return f.error((b==null?void 0:b.message)||"Network error: Failed to fetch.",{position:"top-center"}),!1}finally{p(!1)}},loading:d}},ct=()=>{const[d,p]=u.useState(!1);return{updateOrder:async(y,m)=>{const b=localStorage.getItem("authToken"),i=`http://35.154.167.170:3000/admin/orders/${y}`;p(!0);try{const c=await fetch(i,{method:"PUT",headers:{Authorization:`Bearer ${b}`,"Content-Type":"application/json"},body:JSON.stringify(m)});if(c.ok){const x=await c.json();return f.success(x.message,{position:"top-center"}),!0}const o=await c.json();return f.error(o.message,{position:"top-center"}),!1}catch(c){return f.error((c==null?void 0:c.message)||"Network error: Failed to fetch.",{position:"top-center"}),!1}finally{p(!1)}},loading:d}},ut=()=>{const[d,p]=u.useState([]),[j,y]=u.useState(!1);return{address:d,loading:j,fetchAddress:async b=>{var o;const i=localStorage.getItem("authToken"),c=`http://35.154.167.170:3000/address/${b}/user`;try{const x=await fetch(c,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}});if(!x.ok){const C=await x.json();f.error(C.message,{position:"top-center"});return}const S=await x.json(),l=((o=S==null?void 0:S.data)==null?void 0:o.result)||[];p(l)}catch(x){f.error((x==null?void 0:x.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{y(!1)}}}},mt=K().shape({category_id:D().nullable().required("Please select a category").test("required","Please select a category",d=>!!d),product_id:D().nullable().required("Please select a product").test("required","Please select a product",d=>!!d),service_id:D().nullable().required("Please select a service").test("required","Please select a service",d=>!!d),price:D().nullable().when(["category_id","product_id","service_id"],([d,p,j],y)=>d&&p&&j?y.required("Price is not available for the combination, please add a price"):y.nullable())}),pt=K().shape({username:ce().required("Please enter username"),address_id:D().required("Please select address").test("required","Please select address",d=>!!d),express_delivery_charges:D().typeError("Express delivery charges must be a number").min(0,"Express delivery charges must be a positive number"),shipping_charges:D().typeError("Shipping charge must be a number").min(0,"Shipping charge must be a positive number"),payment_type:D().required("Please choose payment type").test("required","Please choose order status",d=>!!d),payment_status:D().required("Please choose payment status").test("required","Please choose payment status",d=>!!d),paid_amount:D().typeError("Paid amount must be a number").min(0,"Paid amount must be a positive number"),branch_id:D().required("Please select branch").test("required","Please select branch",d=>!!d),items:Le().of(mt)}),ht=localStorage.getItem("authToken"),bt=()=>{const[d,p]=u.useState(!1);return{addAddress:async y=>{p(!0);try{const m=await fetch(`${ie}/address/admin`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ht}`},body:JSON.stringify(y)});if(!m.ok){const i=await m.json();return f.error(i.message,{position:"top-center"}),!1}const b=await m.json();return f.success(b.message,{position:"top-center"}),!0}catch(m){return f.error((m==null?void 0:m.message)||"Error adding banner",{position:"top-center"}),!1}finally{p(!1)}},loading:d}},xt=K().shape({pincode:ce().required("Pin Code is required").matches(/^[0-9]{6}$/,"Pincode must be 6 digit"),address_type:D().required("Address type is required")}),gt=({isOpen:d,onClose:p,userId:j,setIsSubmit:y})=>{const{addAddress:m,loading:b}=bt(),[i,c]=u.useState({}),[o,x]=u.useState({building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:"",user_id:null,address_type:null});u.useEffect(()=>{d?j&&x(l=>({...l,user_id:j})):(x({building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:"",user_id:null,address_type:null}),c({}))},[d,j]);const S=async l=>{l.preventDefault();try{await xt.validate(o,{abortEarly:!1}),j&&await m(o),y(!0),p()}catch(C){if(C instanceof Q){const v={};C.inner.forEach($=>{v[$.path||""]=$.message}),c(v)}else f.error("Failed to submit the form. Please try again.")}};if(d)return e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:p}),e.jsxs("div",{className:"bg-white p-5 rounded-lg shadow-lg max-w-lg z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default",onClick:p,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Add New Address"}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"building_number",className:"block text-gray-700 font-semibold",children:"Building Number"}),e.jsx("input",{type:"text",id:"building_number",name:"building_number",value:o.building_number,onChange:l=>x({...o,building_number:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"area",className:"block text-gray-700 font-semibold",children:"Area"}),e.jsx("input",{type:"text",id:"area",name:"area",value:o.area,onChange:l=>x({...o,area:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"landmark",className:"block text-gray-700 font-semibold",children:"Landmark"}),e.jsx("input",{type:"text",id:"landmark",name:"landmark",value:o.landmark,onChange:l=>x({...o,landmark:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pincode",className:"block text-gray-700 font-semibold",children:"Pin code"}),e.jsx("input",{type:"text",id:"pincode",name:"pincode",value:o.pincode,onChange:l=>x({...o,pincode:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:i.pincode||" "})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"city",className:"block text-gray-700 font-semibold",children:"City"}),e.jsx("input",{type:"text",id:"city",name:"city",value:o.city,onChange:l=>x({...o,city:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"state",className:"block text-gray-700 font-semibold",children:"State"}),e.jsx("input",{type:"text",id:"state",name:"state",value:o.state,onChange:l=>x({...o,state:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country",className:"block text-gray-700 font-semibold",children:"Country"}),e.jsx("input",{type:"text",id:"country",name:"country",value:o.country,onChange:l=>x({...o,country:l.target.value}),className:"w-full input border border-gray-300 rounded-md p-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country",className:"block text-gray-700 font-semibold",children:"Address Type"}),e.jsxs("select",{className:"select select-lg text-sm",onChange:l=>x({...o,address_type:Number(l.target.value)}),children:[e.jsx("option",{value:"",selected:!0,disabled:!0,className:"badge-danger badge-outline",children:"Select Address Type"}),e.jsx("option",{value:"1",children:"Home"}),e.jsx("option",{value:"2",children:"Office"}),e.jsx("option",{value:"3",children:"Other"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:i.address_type||" "})]})]}),e.jsxs("div",{className:"flex justify-end mt-6",children:[e.jsx("button",{type:"button",onClick:p,className:"btn btn-light mr-2",disabled:b,children:"Cancel"}),e.jsx("button",{type:"submit",disabled:b,className:`btn btn-primary ${b?"opacity-50 cursor-not-allowed":""}`,children:b?"Submitting...":"Submit"})]})]})]})]})},yt=({isOpen:d,onClose:p,setIsSubmit:j})=>{const{addUser:y,loading:m}=tt(),b={first_name:"",last_name:"",email:"",mobile_number:"",gender:null,role_id:5},[i,c]=u.useState(b),[o,x]=u.useState({});u.useEffect(()=>{d||(c({first_name:"",last_name:"",email:"",password:"",mobile_number:"",gender:null,role_id:5}),x({}))},[d]);const S=async l=>{l.preventDefault();try{await st().validate(i,{abortEarly:!1}),await y(i),j(!0),p()}catch(C){if(C instanceof Q){const v={};C.inner.forEach($=>{v[$.path||""]=$.message}),x(v)}else f.error("Failed to submit the form. Please try again.")}};if(d)return e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:p}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-lg z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default",onClick:p,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Add New Customer"}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"first_name",className:"block text-gray-700 font-semibold",children:"First name"}),e.jsx("input",{type:"text",id:"first_name",name:"first_name",value:i.first_name||"",onChange:l=>c({...i,first_name:l.target.value}),className:"w-full input border border-gray-300 rounded-md"}),e.jsx("p",{className:"text-red-500 text-sm",children:o.first_name||" "})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"last_name",className:"block text-gray-700 font-semibold",children:"Last name"}),e.jsx("input",{type:"text",id:"last_name",name:"last_name",value:i.last_name,onChange:l=>c({...i,last_name:l.target.value}),className:"w-full input border border-gray-300 rounded-md"}),e.jsx("p",{className:"text-red-500 text-sm",children:o.last_name||" "})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700 font-semibold",children:"Email"}),e.jsx("input",{type:"text",id:"email",name:"email",value:i.email,onChange:l=>c({...i,email:l.target.value}),className:"w-full input border border-gray-300 rounded-md"}),e.jsx("p",{className:"text-red-500 text-sm",children:o.email||" "})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"mobile_number",className:"block text-gray-700 font-semibold",children:"Mobile Number"}),e.jsx("input",{type:"text",id:"mobile_number",name:"mobile_number",value:i.mobile_number,onChange:l=>c({...i,mobile_number:l.target.value}),className:"w-full input border border-gray-300 rounded-md"}),e.jsx("p",{className:"text-red-500 text-sm",children:o.mobile_number||" "})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-gray-700 font-semibold",children:"Gender"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"gender",value:1,checked:i.gender===1,onChange:l=>c({...i,gender:parseInt(l.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Male"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"gender",value:2,checked:i.gender===2,onChange:l=>c({...i,gender:parseInt(l.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Female"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"gender",value:3,checked:i.gender===3,onChange:l=>c({...i,gender:parseInt(l.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Other"})]})]}),e.jsx("p",{className:"text-red-500 text-sm",children:o.gender||" "})]})]}),e.jsxs("div",{className:"flex justify-end mt-4",children:[e.jsx("button",{type:"button",onClick:p,className:"btn btn-light mr-2",disabled:m,children:"Cancel"}),e.jsx("button",{type:"submit",disabled:m,className:`btn btn-primary ${m?"opacity-50 cursor-not-allowed":""}`,children:m?"Submitting...":"Submit"})]})]})]})]})},St=()=>{const{prices:d}=We(),{categories:p}=Ye(),{fetchProductsOnId:j}=Be(),{fetchServicesOnId:y}=Ge(),[m,b]=u.useState(""),[i,c]=u.useState(!0),{id:o}=ze(),{updateOrder:x,loading:S}=ct(),{addOrder:l,loading:C}=it(),v=Number(o),$=1e3,ue=1,[me,Y]=u.useState(!1),[pe,W]=u.useState(!1),[X,M]=u.useState(!1),{users:V,fetchUsersByRole:he}=et(),{validCoupons:q,fetchValidCoupons:be}=lt(),{branches:Z}=Xe(ue,$),{order:g,fetchOrder:xe}=Ze(),{address:ee,fetchAddress:te}=ut(),{applyCoupon:ge}=nt(),{userData:J,fetchUser:ye}=at(),{transactionId:U,generatePaymentLink:_e}=Me(),E=J==null?void 0:J.user,A=Ve(),[se,fe]=u.useState({}),[ae,je]=u.useState({}),R=Je(),[s,N]=u.useState({coupon_code:"",coupon_discount:null,express_delivery_charges:null,shipping_charges:null,payment_type:null,payment_status:null,sub_total:0,paid_amount:null,transaction_id:"",address_id:null,username:"",user_id:null,items:[{category_id:null,product_id:null,service_id:null,product_name:"",service_name:"",description:null,price:null,quantity:1,item_Total:null,showDescription:!1}],total:0,branch_id:null,order_status:null}),[ve,Ne]=u.useState({coupon_code:"",coupon_discount:null,express_delivery_charges:null,shipping_charges:null,payment_type:null,payment_status:null,sub_total:0,paid_amount:null,transaction_id:"",address_id:null,username:"",user_id:null,items:[{category_id:null,product_id:null,service_id:null,product_name:"",service_name:"",description:null,price:null,quantity:1,item_Total:null,showDescription:!1}],total:0,branch_id:null,order_status:null}),[k,we]=u.useState({});u.useEffect(()=>{(async()=>{await xe(v)})()},[v]),u.useEffect(()=>{(async()=>{s.user_id&&(await te(s.user_id),await be(s.user_id),await ye(s.user_id)),X&&(await te(s.user_id),M(!1))})()},[s.user_id,X]),u.useEffect(()=>{U&&N({...s,transaction_id:U})},[U]),u.useEffect(()=>{v||N(t=>({...t,payment_status:s.payment_type===1?1:null}))},[s.payment_type]),u.useEffect(()=>{(async()=>{m&&i&&await he(5,m)})()},[m,i]),u.useEffect(()=>{if(g){const t=`${g.user.first_name} ${g.user.last_name}`;b(t),c(!1);const a={coupon_code:g.coupon_code||"",coupon_discount:g.coupon_discount||null,express_delivery_charges:g.express_delivery_charges||null,shipping_charges:g.shipping_charges||null,payment_type:g.payment_type||null,payment_status:g.payment_status||null,sub_total:g.sub_total||0,paid_amount:g.paid_amount||null,transaction_id:g.transaction_id||"",address_id:g.address_id,username:t,user_id:g.user_id||null,items:g.items.map(n=>{var L,I,B,_;const h=n.category.category_id,r=((L=n.product)==null?void 0:L.product_id)||null,P=((I=n.service)==null?void 0:I.service_id)||null,O=((B=n.product)==null?void 0:B.name)||"",w=((_=n.service)==null?void 0:_.name)||"";return{category_id:h,product_id:r,service_id:P,product_name:O,service_name:w,description:n.description||null,price:n.price,quantity:n.quantity,item_Total:n.price*n.quantity,showDescription:!!n.description}}),total:(g.sub_total||0)+(g.express_delivery_charges||0)+(g.shipping_charges||0),branch_id:g.branch_id,order_status:g.order_status};N(a),Ne(a)}},[g]);const ke=async t=>{var a,n;t.preventDefault();try{const h=s.items.map(w=>({category_id:Number(w.category_id),product_id:Number(w.product_id),service_id:Number(w.service_id),description:w.description,price:Number(w.price),quantity:Number(w.quantity)})),r={...s,address_id:Number(s.address_id),coupon_discount:Number(s.coupon_discount),shipping_charges:Number(s.shipping_charges),paid_amount:Number(s.paid_amount),express_delivery_charges:Number(s.express_delivery_charges),payment_type:Number(s.payment_type),payment_status:Number(s.payment_status),items:h};if(await pt.validate(r,{abortEarly:!1}),!Object.keys(s).some(w=>s[w]!==ve[w])){R(`${(a=A==null?void 0:A.state)==null?void 0:a.prevUrl}`);return}let O;g?O=await x(v,r):O=await l(r),O&&R(`${(n=A==null?void 0:A.state)==null?void 0:n.prevUrl}`)}catch(h){if(h instanceof Q){const r={};h.inner.forEach(P=>{r[P.path||""]=P.message}),we(r)}else f.error("Failed to submit the form. Please try again.")}},Ce=t=>{b(t.target.value),c(!0)},Se=t=>{const a=`${t.first_name} ${t.last_name}`;b(a),c(!1),N({...s,username:a,user_id:t.user_id})},De=()=>{var t;R(`${(t=A==null?void 0:A.state)==null?void 0:t.prevUrl}`)},Pe=()=>{N(t=>({...t,items:[...t.items,{category_id:null,product_id:null,product_name:"",service_id:null,service_name:"",description:null,price:null,quantity:1,item_Total:null,showDescription:!1}]}))},Ae=t=>{N(a=>{const n=a.items.filter((O,w)=>w!==t),h={...a,items:n,coupon_code:"",coupon_discount:0},r=H(h),P=r+Number(s.express_delivery_charges||0)+Number(s.shipping_charges||0);return{...h,sub_total:r,total:P}})},F=async(t,a,n)=>{["category_id","product_id","service_id","price","quantity"].includes(a)&&N(h=>({...h,coupon_code:"",coupon_discount:0})),N(h=>{const r=h.items.map((I,B)=>{if(B===t){const _={...I,[a]:n};a==="showDescription"&&(_.showDescription=n);const ne=Number(_.category_id),le=Number(_.product_id),oe=Number(_.service_id),de=Number(_.quantity)||1;if(a==="category_id"){const T=Number(n);se[T]||j(T).then(G=>{fe(z=>({...z,[T]:G}))}),_.product_id=null,_.service_id=null}if(a==="product_id"){const T=Number(I.category_id),G=Number(n),z=`${T}_${G}`;ae[z]||y(T,G).then(Ue=>{je(Re=>({...Re,[z]:Ue}))}),_.service_id=null}if(["category_id","product_id","service_id"].includes(a))if(ne&&le&&oe){const T=Te(ne,le,oe);_.price=T,_.item_Total=T*de}else _.price=null,_.item_Total=null;else a==="price"?_.item_Total=n*de:a==="quantity"&&(_.item_Total=_.price*Number(n));return _}return I}),P={...h,items:r},w=H(P)-h.coupon_discount,L=w+Number(h.express_delivery_charges||0)+Number(h.shipping_charges||0);return{...P,sub_total:w,total:L}})},Te=(t,a,n)=>{const h=`${t}_${a}_${n}`;return d[h]||0},Fe=async t=>{const a=H(s),n=await ge(s.user_id,a,t),h=Number(n.finalTotal||0)+Number(s.express_delivery_charges||0)+Number(s.shipping_charges||0);n&&N(r=>({...r,coupon_code:t,coupon_discount:n.discountAmount,sub_total:n.finalTotal,total:h}))},H=t=>t.items.reduce((a,n)=>a+(n.item_Total||0),0),re=(t,a)=>{N(n=>{const h={...n,[t]:a},r=Number(h.sub_total||0)+Number(h.express_delivery_charges||0)+Number(h.shipping_charges||0);return{...h,total:r}})},$e=t=>{const a=t.target.value;N(n=>({...n,address_id:Number(a)}))},Oe=t=>{t.preventDefault(),s.user_id?Y(!0):f.error("Please select the user to add address")},Ee=t=>{t.preventDefault(),W(!0)},Ie=()=>{R(`/order/${v}`)},qe=async()=>{const t={amount:s.paid_amount,currency:"INR",user_id:s.user_id,customer:{name:s.username,mobile_number:Number(E==null?void 0:E.mobile_number),email:E==null?void 0:E.email}};await _e(t)};return e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"card max-w-5xl mx-auto p-6 bg-white shadow-md",children:[e.jsxs("div",{className:"flex",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:g?"Edit Order":"Add Order"}),!isNaN(v)&&e.jsxs("button",{className:"btn bg-gray-200 ml-4 text-gray-700 text-sm font-bold rounded-md",onClick:Ie,children:[e.jsx(He,{size:20}),"View Order"]})]}),e.jsxs("form",{onSubmit:ke,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-6 mt-4",children:[e.jsxs("div",{className:"relative col-span-1",children:[e.jsxs("span",{className:"flex justify-between items-center",children:[e.jsx("label",{htmlFor:"username",className:"block text-gray-700 text-sm font-bold mb-2",children:"Customer name"}),e.jsx("button",{className:"btn btn-sm btn-primary -mt-6 sm:btn-lg",onClick:Ee,children:"Add Customer"})]}),e.jsx("input",{type:"text",id:"username",autoComplete:"off",value:m||"",onChange:Ce,className:"input border border-gray-300 rounded-md p-2 w-full mb-2",placeholder:"Search customer..."}),V&&m&&i&&e.jsx("ul",{className:"absolute -mt-2 bg-white border z-10 border-gray-300 rounded-md p-2 w-full text-sm",children:V.length>0?V.map(t=>e.jsxs("li",{className:"p-2 hover:bg-gray-100 cursor-pointer",onClick:()=>Se(t),children:[t.first_name," ",t.last_name," (",t.mobile_number,")"]},t.user_id)):e.jsx("li",{className:"p-2 text-gray-500",children:"No users found"})}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.username||" "})]}),e.jsxs("div",{className:"relative col-span-1",children:[e.jsxs("span",{className:"flex justify-between items-center",children:[e.jsx("label",{htmlFor:"address",className:"block text-gray-700 text-sm font-bold mb-2",children:"Customer address"}),e.jsx("button",{className:"btn btn-sm btn-primary -mt-6",onClick:Oe,children:"Add address"})]}),e.jsxs("select",{id:"address",value:s.address_id,onChange:$e,className:"select border border-gray-300 rounded-md w-full text-sm",children:[e.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select Address"}),ee.length>0?ee.map(t=>e.jsxs("option",{value:t.address_id,children:[t.building_number,", ",t.area,", ",t.landmark,","," ",t.city,", ",t.state,",",t.country,", ",t.pincode]},t.address_id)):e.jsx("option",{disabled:!0,children:"No Address Available"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.address_id||" "})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"branch",className:"block text-gray-700 text-sm font-bold mb-2",children:"Branch"}),e.jsxs("select",{id:"branch",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:s.branch_id||"",onChange:t=>N({...s,branch_id:t.target.value?Number(t.target.value):null}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Branch"}),Z.length>0?Z.map(t=>e.jsx("option",{value:t.branch_id,children:t.branch_name},t.branch_id)):e.jsx("option",{children:"No Data Available"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.branch_id||" "})]})]}),e.jsx("div",{className:"flex flex-wrap",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900 mt-6 mb-5 ml-1",children:"Item"})}),s.items.map((t,a)=>{var n,h;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border border-gray-200 rounded-xl mt-4 p-4",children:[e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(150px,4fr))] gap-x-5 gap-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",className:"block text-gray-700 text-sm font-bold mb-2",children:"Category"}),e.jsxs("select",{id:"category",value:t.category_id??"",onChange:r=>F(a,"category_id",r.target.value),className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Category"}),p.map(r=>e.jsx("option",{value:r.category_id,children:r.name},r.category_id))]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k[`items[${a}].category_id`]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"product",className:"block text-gray-700 text-sm font-bold mb-2",children:"Product"}),e.jsxs("select",{id:"product",value:t.product_id??"",onChange:r=>F(a,"product_id",r.target.value),className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Product"}),((n=se[t.category_id])==null?void 0:n.map(r=>e.jsx("option",{value:r.product_product_id,children:r.product_name},r.product_product_id)))||t.product_id&&e.jsx("option",{value:t.product_id,children:t.product_name},t.product_id)]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k[`items[${a}].product_id`]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"service",className:"block text-gray-700 text-sm font-bold mb-2",children:"Service"}),e.jsxs("select",{id:"service",value:t.service_id??"",onChange:r=>F(a,"service_id",r.target.value),className:"select border border-gray-300 rounded-md p-2 w-full text-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Service"}),(h=ae[`${t.category_id}_${t.product_id}`])==null?void 0:h.map(r=>e.jsx("option",{value:r.service_service_id,children:r.service_name},r.service_service_id))]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k[`items[${a}].service_id`]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Price"}),e.jsx("input",{type:"text",value:t.price||"",onChange:r=>F(a,"price",r.target.value),className:`input border rounded-md p-2 w-full ${isNaN(v)?"border-gray-300 bg-gray-100 text-sm text-gray-600 cursor-not-allowed focus:outline-none":"border-gray-300"}`,readOnly:isNaN(v)}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k[`items[${a}].price`]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Quantity"}),e.jsx("input",{type:"text",value:t.quantity??1,onChange:r=>F(a,"quantity",r.target.value),className:"input border border-gray-300 rounded-md p-2 w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Item total"}),e.jsx("input",{type:"text",value:t.item_Total??"",onChange:r=>F(a,"item_Total",r.target.value),min:"0",step:"0.01",readOnly:!0,className:"input w-full border border-gray-300 bg-gray-100 text-sm text-gray-600 rounded-md p-2 cursor-not-allowed focus:outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description_checkbox",className:"block text-gray-700 text-sm font-bold mb-2",children:"Description"}),e.jsx("input",{className:"checkbox checkbox-lg mt-2 ml-5",id:"description_checkbox","data-datatable-check":"true",type:"checkbox",checked:t.showDescription,onChange:r=>F(a,"showDescription",r.target.checked)}),e.jsx("p",{className:" text-red-500 text-sm",children:" "})]})]})},a),e.jsxs("div",{className:"flex justify-between sm:items-center smmobile:flex-col gap-y-2 smmobile:w-full",children:[e.jsx("div",{children:t.showDescription&&e.jsx("div",{children:e.jsxs("div",{className:"flex smmobile:w-[100%] smmobile:justify-self-start flex-col md:w-[350px] lg:w-[420px] sm:w-[300px] h-[80px] mb-2",children:[e.jsx("label",{htmlFor:"description",className:"block text-gray-700 text-sm font-bold mb-2",children:"Description"}),e.jsx("textarea",{id:"description",value:t.description||"",onChange:r=>F(a,"description",r.target.value),className:"h-full input border border-gray-300 rounded-md p-2 w-full"})]})})}),e.jsx("div",{className:"flex block-element flex-end smmobile:justify-self-end justify-end relative",children:e.jsx("div",{children:e.jsx("button",{type:"button",className:`p-2 rounded-full ${s.items.length>1?"bg-red-100 hover:bg-red-200":"bg-gray-200 cursor-not-allowed"}`,onClick:()=>Ae(a),disabled:s.items.length===1,children:e.jsx(Ke,{className:`${s.items.length>1?"text-red-500":"text-gray-400"}`})})})})]})]})})}),e.jsx("button",{type:"button",onClick:Pe,className:"btn btn-secondary mb-6 mt-4",children:"Add Item"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Coupon Code"}),e.jsxs("select",{id:"coupon_code",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:s.coupon_code??"",onChange:t=>{const a=q.find(n=>n.code===t.target.value);Fe(a==null?void 0:a.code)},children:[e.jsx("option",{value:"",disabled:!0,children:"Select Coupon Code"}),q&&q.length>0?q.map(t=>e.jsx("option",{value:t.code,children:t.code},t.coupon_id)):e.jsx("option",{children:"No Coupons available"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:k.coupon_code||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Coupon Discount"}),e.jsx("input",{type:"text",value:s.coupon_discount||"",readOnly:!0,className:"input border border-gray-300 bg-gray-100 text-sm text-gray-600 rounded-md p-2 cursor-not-allowed focus:outline-none"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.coupon_discount||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"express_delivery_charges",className:"block text-gray-700 text-sm font-bold mb-2",children:"Express Delivery Charges"}),e.jsx("input",{type:"text",id:"express_delivery_charges",min:"0",value:s.express_delivery_charges||"",onChange:t=>re("express_delivery_charges",t.target.value),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.express_delivery_charges||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"shipping_charges",className:"block text-gray-700 text-sm font-bold mb-2",children:"Shipping Charges"}),e.jsx("input",{type:"text",id:"shipping_charges",min:"0",value:s.shipping_charges||"",onChange:t=>re("shipping_charges",t.target.value),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.shipping_charges||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Sub Total"}),e.jsx("input",{type:"text",value:s.sub_total||"",readOnly:!0,className:"input border border-gray-300 bg-gray-100 text-sm text-gray-600 rounded-md p-2 cursor-not-allowed focus:outline-none"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.sub_total||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Total"}),e.jsx("input",{type:"text",value:s.total||"",readOnly:!0,className:"input border border-gray-300 bg-gray-100 text-sm text-gray-600 rounded-md p-2 cursor-not-allowed focus:outline-none"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"paid_amount",className:"block text-gray-700 text-sm font-bold mb-2",children:"Paid amount"}),e.jsx("input",{type:"text",id:"paid_amount",value:s.paid_amount||"",onChange:t=>{N({...s,paid_amount:Number(t.target.value)})},className:"input border border-gray-300 rounded-md p-2",min:"0",step:"0.01"}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.paid_amount||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"payment_method",className:"block text-gray-700 text-sm font-bold mb-2",children:"Payment Method"}),e.jsxs("select",{className:"select border border-gray-300 rounded-md p-2 w-full text-sm",id:"payment_method",value:s.payment_type??"",onChange:t=>N({...s,payment_type:Number(t.target.value)}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Payment Type"}),e.jsx("option",{value:1,children:"Cash on Delivery"}),e.jsx("option",{value:2,children:"Online Payment"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.payment_type||" "}),!v&&s.payment_type===2&&e.jsx("div",{children:e.jsxs("button",{className:"-mt-2 badge text-sm badge-info badge-outline",onClick:qe,children:[e.jsx(Qe,{color:"blue"}),"  "," Send Payment Link"]})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"payment_status",className:"block text-gray-700 text-sm font-bold mb-2",children:"Payment Status"}),e.jsxs("select",{className:"select border border-gray-300 rounded-md p-2 w-full text-sm",id:"payment_status",value:s.payment_status??"",onChange:t=>N({...s,payment_status:Number(t.target.value)}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Payment Status"}),e.jsx("option",{value:1,children:"Pending"}),e.jsx("option",{value:2,children:"Received"}),e.jsx("option",{value:3,children:"Partial Received"})]}),e.jsx("p",{className:"w-full text-red-500 text-sm",children:k.payment_status||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"transaction_id",className:"block text-gray-700 text-sm font-bold mb-2",children:"Transaction ID"}),e.jsx("input",{type:"text",id:"transaction_id",value:U||"",className:"input border border-gray-300 bg-gray-100 text-sm text-gray-600 rounded-md p-2 cursor-not-allowed focus:outline-none",readOnly:!0})]}),!v&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"item_status",className:"block text-gray-700 text-sm font-bold mb-2",children:"Item status"}),e.jsxs("select",{className:"select border border-gray-300 rounded-md p-2 w-full text-sm",id:"item_status",value:s.order_status??null,onChange:t=>N({...s,order_status:Number(t.target.value)}),children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select item status"}),e.jsx("option",{value:4,children:"Received at branch"}),e.jsx("option",{value:1,children:"Need to pickup"})]})]})]}),e.jsxs("div",{className:"mt-6 flex gap-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary ${C||S?"opacity-50 cursor-not-allowed":""}`,disabled:C||S,children:C||S?C?"Adding...":"Updating...":v?"Update Order":"Add Order"}),e.jsx("button",{type:"button",onClick:De,className:"btn btn-secondary",disabled:C||S,children:"Cancel"})]})]}),e.jsx(gt,{isOpen:me,setIsSubmit:M,onClose:()=>Y(!1),userId:s.user_id}),e.jsx(yt,{isOpen:pe,setIsSubmit:M,onClose:()=>W(!1)})]})})};export{St as default};
