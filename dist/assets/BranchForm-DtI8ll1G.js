import{r as b,_ as u,c as D,a as p,h as A,i as I,g as P,j as e,V as $}from"./index-DUkfQgXw.js";import{u as k}from"./useGetCompanies-CFuaxAVQ.js";import{u as R}from"./useGetBranch-C8alUMtr.js";import{u as U}from"./useGetUsersByRole-C7CSkywZ.js";const T="http://3.110.208.70:3000",O=`${T}/branches`,L=()=>{const[r,i]=b.useState(!1);return{addBranch:async s=>{const l=localStorage.getItem("authToken");i(!0),s.company_id&&typeof s.company_id!="number"&&(s.company_id=Number(s.company_id));const o={...s,company_id:parseInt(s.company_id),branch_manager_id:parseInt(s.branch_manager_id)};try{const c=await fetch(O,{method:"POST",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},body:JSON.stringify(o)});if(!c.ok){const n=await c.json();return u.error(n.message,{position:"top-center"}),!1}const _=await c.json();return u.success(_.message,{position:"top-center"}),!0}catch(c){return u.error((c==null?void 0:c.message)||"Network error: Failed to fetch.",{position:"top-center"}),!1}finally{i(!1)}},loading:r}},G=()=>{const[r,i]=b.useState(!1);return{updateBranch:async(s,l)=>{const o=localStorage.getItem("authToken"),c=`http://3.110.208.70:3000/branches/${s}`;i(!0);const _={...l,company_id:parseInt(l.company_id),branch_manager_id:parseInt(l.branch_manager_id)};try{const n=await fetch(c,{method:"PUT",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(_)});if(n.ok){const f=await n.json();return u.success(f.message,{position:"top-center"}),!0}const N=await n.json();return u.error(N.message,{position:"top-center"}),!1}catch(n){return u.error((n==null?void 0:n.message)||"Network error: Failed to fetch.",{position:"top-center"}),!1}finally{i(!1)}},loading:r}},z=D().shape({branch_name:p().required("Branch name is required"),branch_address:p().required("Branch address is required"),branch_manager_id:p().required("Please select branch manager").test("required","Please select branch manager",r=>!!r),branch_phone_number:p().nullable().test("format","Phone Number must be a 10-digit number",r=>r===null||r===""?!0:/^[0-9]{10}$/.test(r)).test("required","Phone Number is required",r=>!(r===null||r==="")),branch_email:p().required("Email is required").email("Enter a valid email").test("required","Email is required",r=>!!r),branch_registration_number:p().nullable().test("required","Branch registration number is required",r=>!!r),company_id:A().typeError("Company ID must be a number").required("Company ID is required").positive("Company ID must be a positive number").integer("Company ID must be an integer").test("required","Company id must be a number",r=>!!r)}),K=()=>{const{addBranch:r,loading:i}=L(),{updateBranch:j,loading:s}=G(),{id:l}=I(),o=Number(l),c=1e3,_=1,{branch:n,fetchBranch:N}=R(),{companies:f}=k(_,c),{users:B,fetchUsersByRole:C}=U(),v=P(),[t,y]=b.useState({branch_name:"",branch_address:"",branch_manager_id:null,branch_phone_number:"",branch_email:"",branch_registration_number:"",company_id:null}),[w,q]=b.useState({branch_name:"",branch_address:"",branch_manager_id:null,branch_phone_number:"",branch_email:"",branch_registration_number:"",company_id:null}),[m,E]=b.useState({});b.useEffect(()=>{(async()=>{await N(o),await C(3)})()},[o]),b.useEffect(()=>{if(n){const a={branch_name:n.branch_name,branch_address:n.branch_address,branch_manager_id:n.branch_manager_id,branch_phone_number:n.branch_phone_number,branch_email:n.branch_email,branch_registration_number:n.branch_registration_number,company_id:n.company_id};y(a),q(a)}},[n]);const g=a=>{const{name:x,value:d}=a.target;y(h=>({...h,[x]:d}))},F=async a=>{a.preventDefault();try{if(await z.validate(t,{abortEarly:!1}),!Object.keys(t).some(h=>t[h]!==w[h])){v("/branches");return}let d;o?d=await j(l,t):d=await r(t),d&&v("/branches")}catch(x){if(x instanceof $){const d={};x.inner.forEach(h=>{d[h.path||""]=h.message}),E(d)}else u.error("Failed to submit the form. Please try again.")}},S=()=>{v("/branches")};return e.jsxs("div",{className:"card max-w-4xl mx-auto p-6 bg-white shadow-md",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:o?"Edit Branch":"Add Branch"}),e.jsxs("form",{onSubmit:F,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"company_id",children:"Company"}),e.jsxs("select",{id:"company_id",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:t.company_id||"",onChange:a=>y({...t,company_id:a.target.value?Number(a.target.value):null}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Company"}),f.length>0?f.map(a=>e.jsx("option",{value:a.company_id,children:a.company_name},a.company_id)):e.jsx("option",{children:"No Data available"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:m.company_id||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_manager_id",children:"Branch Manager"}),e.jsxs("select",{id:"branch_manager_id",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:t.branch_manager_id||"",onChange:a=>y({...t,branch_manager_id:a.target.value?Number(a.target.value):null}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Branch Manager"}),B?B.map(a=>e.jsxs("option",{value:a.user_id,children:[a.first_name," ",a.last_name]},a.user_id)):e.jsx("option",{children:"No Data available"})]}),e.jsx("p",{className:"text-red-500 text-sm",children:m.branch_manager_id||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_name",children:"Branch Name"}),e.jsx("input",{type:"text",id:"branch_name",name:"branch_name",value:t.branch_name||"",onChange:g,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:m.branch_name||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_address",children:"Branch Address"}),e.jsx("input",{type:"text",id:"branch_address",name:"branch_address",value:t.branch_address||"",onChange:g,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:m.branch_address||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_phone_number",children:"Branch Phone Number"}),e.jsx("input",{type:"text",id:"branch_phone_number",name:"branch_phone_number",value:t.branch_phone_number||"",onChange:g,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:m.branch_phone_number||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_email",children:"Branch Email"}),e.jsx("input",{type:"text",id:"branch_email",name:"branch_email",value:t.branch_email||"",onChange:g,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:m.branch_email||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"branch_registration_number",children:"Branch Registration Number"}),e.jsx("input",{type:"text",id:"branch_registration_number",name:"branch_registration_number",value:t.branch_registration_number||"",onChange:g,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:m.branch_registration_number||" "})]})]}),e.jsxs("div",{className:"mt-6 flex gap-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary mt-5 ${i||s?"opacity-50 cursor-not-allowed":""}`,disabled:i||s,children:i||s?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),e.jsx("span",{className:"ml-2",children:"Saving..."})]}):o?"Update Branch":"Add Branch"}),e.jsx("button",{type:"button",className:"mx-5 btn btn-light mt-5",onClick:S,disabled:i||s,children:"Cancel"})]})]})]})};export{K as default};
