import{r as l,aX as j,_ as p,c as E,a as _,aW as T,aK as $,j as e,V as A,F,b as I}from"./index-Af1uNubq.js";import{M as D}from"./index-COuSFw53.js";import{u as B}from"./useGetServices-CUT0JLPl.js";import{T as U}from"./TableShimmer-DTlLAaAA.js";import{S as y}from"./sweetalert2.esm.all-DwEdJQJv.js";const z=()=>{const[c,s]=l.useState([]),[o,n]=l.useState(!1),d=async()=>{const t=localStorage.getItem("authToken");n(!0);try{const r=await fetch(`${j}/price-content`,{method:"GET",headers:{Authorization:t?`Bearer ${t}`:""}}),i=await r.json();if(!r.ok){p.error(i.message,{position:"top-center"}),n(!1);return}s(i==null?void 0:i.data)}catch{p.error("Network Error : Failed to fetch prices")}finally{n(!1)}};return l.useEffect(()=>{d()},[]),{priceContents:c,loading:o,fetchPriceContents:d}},L=()=>{const[c,s]=l.useState(),[o,n]=l.useState(!1);return{priceContent:c,loading:o,fetchPriceContent:async t=>{const r=localStorage.getItem("authToken");n(!0);try{const i=await fetch(`${j}/price-content/${t}`,{method:"GET",headers:{Authorization:r?`Bearer ${r}`:""}}),a=await i.json();if(!i.ok){p.error(a.message,{position:"top-center"}),n(!1);return}s(a==null?void 0:a.data)}catch{p.error("Network Error : Failed to fetch data")}finally{n(!1)}}}},q=()=>{const[c,s]=l.useState(!1);return{addPriceContent:async n=>{const d=localStorage.getItem("authToken");s(!0);try{const t=await fetch(`${j}/price-content`,{method:"POST",headers:{Authorization:`Bearer ${d}`,"Content-Type":"application/json"},body:JSON.stringify(n)}),r=await t.json();return t.ok?(p.success(r.message,{position:"top-center"}),!0):(p.error(r.message,{position:"top-center"}),!1)}catch{p.error("Error adding Price content",{position:"top-center"})}finally{s(!1)}},loading:c}},G=()=>{const[c,s]=l.useState(!1);return{updatePriceContent:async(n,d)=>{const t=localStorage.getItem("authToken");s(!0);try{const r=await fetch(`${j}/price-content/${n}`,{method:"PATCH",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(d)}),i=await r.json();return r.ok?(p.success(i.message,{position:"top-center"}),!0):(p.error(i.message,{position:"top-center"}),!1)}catch{return p.error("Error Updating price content",{position:"top-center"}),!1}finally{s(!1)}},loading:c}},M=()=>{const[c,s]=l.useState(!1);return{deletePriceContent:async n=>{const d=localStorage.getItem("authToken");s(!0);try{const t=await fetch(`${j}/price-content/${n}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`}}),r=await t.json();return t.ok?{success:!0,message:r.message}:(p.error(r.message,{position:"top-center"}),{success:!1,message:r.message})}catch(t){return p.error(t.message,{position:"top-center"}),{success:!1,message:t.message}}finally{s(!1)}},loading:c}},O=E().shape({category_name:_().required("Category is required"),service_names:T().min(1,"Please select service name").required("Please select servuce name"),price:$().typeError("Maximum usage per user must be a number").required("Please enter price")}),V=({isOpen:c,onClose:s,price_content_id:o,setIsSubmit:n})=>{const{services:d}=B(1,1e3),{priceContent:t,fetchPriceContent:r}=L(),{addPriceContent:i,loading:a}=q(),{updatePriceContent:x,loading:f}=G(),[u,g]=l.useState({category_name:"",service_names:[],price:null}),[S,N]=l.useState({category_name:"",service_names:[],price:null}),[C,v]=l.useState({}),P=d.map(m=>({name:m.name}));l.useEffect(()=>{c&&o&&r(o)},[c,o]),l.useEffect(()=>{if(c&&t&&o){const m={category_name:t.category_name,service_names:t.service_names,price:t.price};g(m),N(m)}else g({category_name:"",service_names:[],price:null}),N({category_name:"",service_names:[],price:null}),v({})},[c,t,o]);const k=async m=>{m.preventDefault();try{if(await O.validate(u,{abortEarly:!1}),!Object.keys(u).some(b=>u[b]!==S[b])){s();return}o?await x(o,u):await i(u),n(!0),s()}catch(h){if(h instanceof A){const b={};h.inner.forEach(w=>{b[w.path||""]=w.message}),v(b)}else p.error("Failed to submit the form. Please try again.")}};return c?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:s}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-[480px] z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default","data-modal-dismiss":"true",onClick:s,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h1",{className:"text-2xl font-bold mb-6",children:o?"Update Price Content":"Add Price Content"}),e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"col-span-1 mb-2",children:[e.jsx("label",{htmlFor:"category",className:"mb-1 block text-gray-700 font-semibold",children:"Category name"}),e.jsx("input",{type:"text",id:"category",name:"category",className:"input border border-gray-300 rounded-md p-2 w-full",value:u.category_name??"",onChange:m=>g({...u,category_name:m.target.value})}),e.jsx("p",{className:"text-red-500 text-sm",children:C.category_name||" "})]}),e.jsxs("div",{className:"flex flex-col mb-2",children:[e.jsx("label",{htmlFor:"service",className:"mb-1 block text-gray-700 font-semibold",children:"Service name"}),e.jsx(D,{options:P,displayValue:"name",selectedValues:P.filter(m=>u.service_names.includes(m.name)),onSelect:m=>{g({...u,service_names:m.map(h=>h.name)})},onRemove:m=>{g({...u,service_names:m.map(h=>h.name)})},isObject:!0}),e.jsx("p",{className:"text-red-500 text-sm",children:C.service_names||" "})]}),e.jsxs("div",{className:"col-span-1 mb-2",children:[e.jsx("label",{htmlFor:"price",className:"mb-1 block text-gray-700 font-semibold",children:"Price"}),e.jsx("input",{type:"text",id:"price",name:"price",className:"input border border-gray-300 rounded-md p-2 w-full",value:u.price??"",onChange:m=>g({...u,price:Number(m.target.value)})}),e.jsx("p",{className:"text-red-500 text-sm",children:C.price||" "})]}),e.jsxs("div",{className:"flex gap-4 mt-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary ${a||f?"opacity-50 cursor-not-allowed":""}`,disabled:a||f,children:a||f?a?"Adding...":"Updating...":o?"Update Price":"Add Price"}),e.jsx("button",{type:"button",className:"btn btn-light",onClick:s,disabled:a||f,children:"Cancel"})]})]})]})]}):null},R=({isSubmit:c,setIsSubmit:s,setUpdateItem:o})=>{const{priceContents:n,fetchPriceContents:d,loading:t}=z(),{deletePriceContent:r}=M();l.useEffect(()=>{(async()=>{c&&(d(),s(!1))})()},[c]);const i=async a=>{try{const{isConfirmed:x}=await y.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(x){const{success:f,message:u}=await r(a);f?(d(),y.fire(u)):y.fire(u)}}catch(x){y.fire({title:"Error",text:x.message,icon:"error"})}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"grid gap-5 lg:gap-5.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"min-w-[30px]",children:"Id"}),e.jsx("th",{className:"min-w-[120px]",children:"Category"}),e.jsx("th",{className:"min-w-[120px]",children:"Service"}),e.jsx("th",{className:"min-w-[60px]",children:"Price"}),e.jsx("th",{className:"w-[50px]",children:"Actions"})]})}),t?e.jsx(U,{}):n?e.jsx("tbody",{children:n.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.price_content_id}),e.jsx("td",{children:a.category_name}),e.jsx("td",{children:a.service_names.join(", ")}),e.jsx("td",{children:a.price}),e.jsx("td",{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"bg-yellow-100 hover:bg-yellow-200 p-2 rounded-full",onClick:()=>o(a.price_content_id),children:e.jsx(F,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-2 rounded-full",onClick:()=>i(a.price_content_id),children:e.jsx(I,{className:"text-red-500"})})]})})]},a.price_content_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No price data available"})})})]})})})})})})},X=()=>{const[c,s]=l.useState(!1),[o,n]=l.useState(null),[d,t]=l.useState(!1),r=()=>{s(!0),n(null)},i=a=>{n(a),s(!0)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container-fixed",children:[e.jsxs("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:[e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Price Content"}),e.jsxs("button",{className:"btn btn-primary",onClick:r,children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Price"]})]}),e.jsx(R,{isSubmit:d,setIsSubmit:t,setUpdateItem:i}),e.jsx(V,{isOpen:c,onClose:()=>s(!1),price_content_id:o,setIsSubmit:t})]})})};export{X as default};