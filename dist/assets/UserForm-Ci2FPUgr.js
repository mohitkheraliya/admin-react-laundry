import{r as l,V as w,o as $,k as z,v as J,j as e,b as q}from"./index-D55dg6K9.js";import{u as H}from"./useGetCompanies-P_hEFaLC.js";import{u as K}from"./useGetBranches-CEOeQw9p.js";import{u as Q,a as X}from"./userSchema-CSIUXOtM.js";import{u as Y}from"./useGetWorkshops-D48_Zibu.js";import{u as Z}from"./useGetuser-CO3Tn1FS.js";import{M as U}from"./index-BHSBqpjS.js";const ee=()=>{const[C,u]=l.useState(!1);return{updateUser:async(x,_)=>{const n=localStorage.getItem("authToken"),f=`http://35.154.167.170:3000/user/${x}`;u(!0);try{const d=await fetch(f,{method:"PUT",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify(_)});if(!d.ok){const b=await d.json();return w.error(b.message,{position:"top-center"}),!1}const h=await d.json();return w.success(h.message,{position:"top-center"}),!0}catch(d){return w.error(d.message,{position:"top-center"}),!1}finally{u(!1)}},loading:C}},ie=()=>{const{addUser:C,loading:u}=Q(),{updateUser:D,loading:x}=ee(),{id:_}=$(),n=_?Number(_):null,f=1e3,d=1,h=z(),{companies:b}=H(d,f),{userData:S,fetchUser:I}=Z(),[j,O]=l.useState([]),{branches:E}=K(d,f),{workshops:F}=Y(d,f),[y,M]=l.useState([]),[N,B]=l.useState([]),o=S==null?void 0:S.user,V=J(),[m,G]=l.useState(!1),v={first_name:"",last_name:"",email:"",mobile_number:"",password:"",gender:null,role_id:null,image:"",company_ids:[],branch_ids:[],workshop_ids:[]},[a,r]=l.useState(v),[A,P]=l.useState(v),[p,R]=l.useState({});l.useEffect(()=>{V.pathname.split("/")[1]==="customer"&&G(!0)},[V]),l.useEffect(()=>{m&&r({...a,role_id:5})},[m]),l.useEffect(()=>{(async()=>{await I(n)})()},[n]),l.useEffect(()=>{if(b){const s=b.map(t=>({company_id:t.company_id,company_name:t.company_name}));O(s)}},[b]),l.useEffect(()=>{if(E){const s=E.map(t=>({branch_id:t.branch_id,branch_name:t.branch_name}));M(s)}},[E]),l.useEffect(()=>{if(F){const s=F.map(t=>({workshop_id:t.workshop_id,workshop_name:t.workshop_name}));B(s)}},[F]),l.useEffect(()=>{if(o){const s={...a,first_name:o.first_name,last_name:o.last_name,email:o.email,mobile_number:o.mobile_number,gender:o.gender,role_id:o.role_id,branch_ids:o.branch_ids,company_ids:o.company_ids,workshop_ids:o.workshop_ids};r(s),P(s)}else r(v),P(v),R({})},[o]);const T=s=>{const{name:t,value:g,files:i}=s.target;t==="image"&&i&&i.length>0?r(c=>({...c,image:i[0].name})):r(c=>({...c,[t]:g}))},L=async s=>{s.preventDefault();try{if(await X(!!n).validate(a,{abortEarly:!1}),!Object.keys(a).some(c=>c==="image"?a.image instanceof File||a.image!==A.image:a[c]!==A[c])){h(m?"/customers":"/users");return}let i;if(n){const c=new FormData;Object.keys(a).forEach(k=>{k==="image"&&a.image instanceof File?c.append(k,a.image):c.append(k,a[k])}),i=await D(n,a)}else i=await C(a);i&&h(m?"/customers":"/users")}catch(t){if(t instanceof q){const g={};t.inner.forEach(i=>{g[i.path||""]=i.message}),R(g)}else w.error("Failed to submit the form. Please try again.")}},W=()=>{h(m?"/customers":"/users")};return e.jsxs("div",{className:"card max-w-4xl mx-auto p-6 bg-white shadow-md",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:m?n?"Edit Customer":"Add Customer":n?"Edit User":"Add User"}),e.jsxs("form",{onSubmit:L,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first_name",className:"block text-gray-700 font-semibold",children:"First name"}),e.jsx("input",{type:"text",id:"first_name",name:"first_name",value:a.first_name||"",onChange:s=>r({...a,first_name:s.target.value}),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:p.first_name||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"last_name",className:"block text-gray-700 font-semibold",children:"Last name"}),e.jsx("input",{type:"text",id:"last_name",name:"last_name",value:a.last_name||"",onChange:s=>r({...a,last_name:s.target.value}),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:p.last_name||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700 font-semibold",children:"Email"}),e.jsx("input",{type:"text",id:"email",name:"email",value:a.email||"",onChange:s=>r({...a,email:s.target.value}),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:p.email||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"mobile_number",className:"block text-gray-700 font-semibold",children:"Mobile number"}),e.jsx("input",{type:"text",id:"mobile_number",name:"mobile_number",value:a.mobile_number||"",onChange:s=>r({...a,mobile_number:s.target.value}),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:p.mobile_number||" "})]}),!m&&n&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"password",className:"block text-gray-700 font-semibold",children:"Password"}),e.jsx("input",{type:"text",id:"password",name:"password",value:a.password||"",onChange:s=>r({...a,password:s.target.value}),className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:p.password||" "})]}),!m&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 font-semibold",htmlFor:"role_id",children:"Role"}),e.jsxs("select",{id:"role_id",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:a.role_id===null?"":a.role_id,onChange:s=>r({...a,role_id:s.target.value?parseInt(s.target.value):null}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Role"}),e.jsx("option",{value:2,children:"Sub Admin"}),e.jsx("option",{value:3,children:"Branch Manager"}),e.jsx("option",{value:4,children:"Delivery and Pickup"}),e.jsx("option",{value:5,children:"Customer"}),e.jsx("option",{value:6,children:"Workshop Manager"}),e.jsx("option",{value:7,children:"Vendor"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:p.role_id||" "})]}),a.role_id===2&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 font-semibold",htmlFor:"role_id",children:"Company"}),e.jsx(U,{options:j,displayValue:"company_name",selectedValues:j==null?void 0:j.filter(s=>{var t;return(t=a.company_ids)==null?void 0:t.includes(s.company_id)}),onSelect:s=>{r({...a,company_ids:s.map(t=>t.company_id)})},onRemove:s=>{r({...a,company_ids:s.map(t=>t.company_id)})},isObject:!0}),e.jsx("p",{className:"text-red-500 text-sm",children:p.company_ids||" "})]}),a.role_id===3&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 font-semibold",htmlFor:"role_id",children:"Branch"}),e.jsx(U,{options:y,displayValue:"branch_name",selectedValues:y==null?void 0:y.filter(s=>{var t;return(t=a.branch_ids)==null?void 0:t.includes(s.branch_id)}),onSelect:s=>{r({...a,branch_ids:s.map(t=>t.branch_id)})},onRemove:s=>{r({...a,branch_ids:s.map(t=>t.branch_id)})},isObject:!0})]}),a.role_id===6&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 font-semibold",htmlFor:"role_id",children:"Workshop"}),e.jsx(U,{options:N,displayValue:"workshop_name",selectedValues:N==null?void 0:N.filter(s=>{var t;return(t=a.workshop_ids)==null?void 0:t.includes(s.workshop_id)}),onSelect:s=>{r({...a,workshop_ids:s.map(t=>t.workshop_id)})},onRemove:s=>{r({...a,workshop_ids:s.map(t=>t.workshop_id)})},isObject:!0})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"block text-gray-700 font-semibold",children:"Gender"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"gender",value:1,checked:a.gender===1,onChange:s=>r({...a,gender:parseInt(s.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Male"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"gender",value:2,checked:a.gender===2,onChange:s=>r({...a,gender:parseInt(s.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Female"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"gender",value:3,checked:a.gender===3,onChange:s=>r({...a,gender:parseInt(s.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Other"})]})]}),e.jsx("p",{className:"text-red-500 text-sm",children:p.gender||" "})]}),n&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"image",className:"block text-gray-700 font-semibold",children:"Profile Photo"}),e.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",onChange:T,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:p.image||" "})]})]}),e.jsxs("div",{className:"mt-6 flex gap-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary ${u||x?"opacity-50 cursor-not-allowed":""}`,disabled:u||x,children:u||x?u?"Adding...":"Updating...":m?n?"Update customer":"Add customer":n?"Update user":"Add User"}),e.jsx("button",{type:"button",className:"btn btn-light",onClick:W,disabled:u||x,children:"Cancel"})]})]})]})};export{ie as default};
