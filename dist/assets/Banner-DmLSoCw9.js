import{r,_ as S,u as Y,j as e,F as K,b as W,d as J,e as Q,V as M,c as X,a as R,f as Z,aK as ee}from"./index-CKAoUFvP.js";import{S as A}from"./sweetalert2.esm.all-DwEdJQJv.js";import{s as te}from"./searchSchema-Cl2Hh8uJ.js";import{T as ae}from"./TableShimmer-B4SHUB-g.js";import{B as q}from"./enums-DNvcfCH5.js";import{M as se}from"./index-BRbq-Pau.js";const ne="http://35.154.167.170:3000/admin/banners",re=(o=1,t=10,d="",u,l,s)=>{const[c,i]=r.useState([]),[h,g]=r.useState(0),[n,b]=r.useState(!1),B=async()=>{var C,w;const k=localStorage.getItem("authToken"),x=new URLSearchParams;o&&x.append("page_number",o.toString()),t&&x.append("per_page",t.toString()),d&&x.append("search",d),u&&x.append("sort_by",u),l&&x.append("order",l),s&&s.forEach(j=>x.append("banner_type",j.toString())),b(!0);try{const j=await fetch(`${ne}?${x}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}}),m=await j.json();if(!j.ok){S.error(m.message,{position:"top-center"});return}i(((C=m==null?void 0:m.data)==null?void 0:C.banner)||[]),g(((w=m==null?void 0:m.data)==null?void 0:w.count)||0)}catch(j){S.error((j==null?void 0:j.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{b(!1)}};return r.useEffect(()=>{B()},[o,t,d,u,l,s]),{banners:c,totalBanners:h,loading:n,fetchBanners:B}},ie=()=>{const[o,t]=r.useState(!1),[d,u]=r.useState(null);return{banner:d,loading:o,fetchBanner:async s=>{var h;if(!s){u(null);return}const c=localStorage.getItem("authToken"),i=`http://35.154.167.170:3000/admin/banners/${s}`;t(!0);try{const g=await fetch(i,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`}});if(!g.ok){const b=await g.json();S.error(b.message,{position:"top-center"}),t(!1);return}const n=await g.json();u((h=n==null?void 0:n.data)==null?void 0:h.banner)}catch{S.error("Network error: Failed to fetch.")}finally{t(!1)}}}},le="http://35.154.167.170:3000/admin/banners",ce=()=>{const[o,t]=r.useState(!1);return{addBanner:async u=>{const l=localStorage.getItem("authToken");t(!0);try{const s=await fetch(le,{method:"POST",headers:{Authorization:`Bearer ${l}`},body:u});if(!s.ok){const i=await s.json();return S.error(i.message,{position:"top-center"}),!1}const c=await s.json();return S.success(c.message,{position:"top-center"}),!0}catch(s){return S.error((s==null?void 0:s.message)||"Error adding banner",{position:"top-center"}),!1}finally{t(!1)}},loading:o}},oe=()=>{const[o,t]=r.useState(!1);return{deleteBanner:async u=>{t(!0);const l=`http://35.154.167.170:3000/admin/banners/${u}`,s=localStorage.getItem("authToken");try{const c=await fetch(l,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}}),i=await c.json();return c.ok?{success:!0,message:i.message}:(S.error(i.message,{position:"top-center"}),{success:!1,message:i.message})}catch(c){return{success:!1,message:c.message}}finally{t(!1)}},loading:o}},de=()=>{const[o,t]=r.useState(!1);return{updateBanner:async(u,l)=>{const s=localStorage.getItem("authToken"),c=`http://35.154.167.170:3000/admin/banners/${u}`;t(!0);try{const i=await fetch(c,{method:"PUT",headers:{Authorization:`Bearer ${s}`},body:l});if(i.ok){const h=await i.json();return S.success(h.message,{position:"top-center"}),!0}else{const h=await i.json();return S.error(h.message,{position:"top-center"}),!1}}catch(i){return S.error(i.message,{position:"top-center"}),!1}finally{t(!1)}},loading:o}},me=({setEditBanner:o,isSubmit:t,setIsSubmit:d})=>{const{deleteBanner:u}=oe(),[l,s]=r.useState(1),[c,i]=r.useState(10),[h,g]=Y(),[n,b]=r.useState(null),[B,k]=r.useState(null),[x,C]=r.useState(""),[w,j]=r.useState(""),[m,v]=r.useState(""),N=h.get("page"),f=h.get("perPage"),[y,E]=r.useState([]),{banners:T,fetchBanners:P,totalBanners:D,loading:z}=re(l,c,x,n,B,y),_=Math.ceil(D/c);r.useEffect(()=>{(async()=>{t&&(P(),d(!1))})()},[t]),r.useEffect(()=>{N&&s(Number(N)),f&&i(Number(f))},[N,f]),r.useEffect(()=>{x&&(s(1),g({search:x,page:"1",perPage:c.toString()}))},[x]);const U=async a=>{try{const{isConfirmed:p}=await A.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(p){const{success:V,message:L}=await u(a);V?(T.filter(H=>H.banner_id!==a).length===0&&l>1&&(s(l-1),g({page:(l-1).toString(),perPage:c.toString()})),await P(),A.fire(L)):A.fire(L)}}catch(p){A.fire({title:"Error",text:p.message,icon:"error"})}},G=async a=>{a.preventDefault();try{await te.validate({search:x},{abortEarly:!1}),C(w),v("")}catch(p){p instanceof M&&v(p.errors[0])}},F=a=>{n===a?k(B==="ASC"?"DESC":"ASC"):(b(a),k("ASC"))},$=a=>{a>=1&&a<=_&&(s(a),g({page:a.toString(),perPage:c.toString()}))},O=a=>{const p=Number(a.target.value);i(p),s(1),g({page:"1",perPage:p.toString()})},I=Object.entries(q).filter(([a,p])=>typeof p=="number").map(([a,p])=>({label:a,value:p}));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:c,onChange:O,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex items-center gap-4 flex-1 justify-end",children:[e.jsx("div",{className:"flex items-center mb-6",children:e.jsxs("button",{className:"btn btn-lg btn-outline btn-primary flex-shrink-0",children:[e.jsx("i",{className:"ki-filled ki-setting-4"}),"Filter"]})}),e.jsx("div",{className:"flex items-center mb-6",children:e.jsx(se,{options:I,displayValue:"label",selectedValues:I.filter(a=>y.includes(a.value)),placeholder:"Banner Type",onSelect:a=>{E(a.map(p=>p.value))},onRemove:a=>{E(a.map(p=>p.value))},className:"multiselect-container multiselect min-w-[200px] max-w-[300px]"})}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("form",{onSubmit:G,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:w,onChange:a=>{j(a.target.value),a.target.value===""&&C("")},placeholder:"Search...",className:"w-[275px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:m||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{"data-datatable":"true","data-datatable-page-size":"10",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"w-[30px]",children:e.jsxs("span",{className:`sort ${n==="banner_id"?B==="ASC"?"asc":"desc":""}`,onClick:()=>F("banner_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[115px]",children:"Image"}),e.jsx("th",{className:"min-w-[160px]",children:e.jsxs("span",{className:`sort ${n==="title"?B==="ASC"?"asc":"desc":""}`,onClick:()=>F("title"),children:[e.jsx("span",{className:"sort-label",children:"Title"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[205px]",children:e.jsxs("span",{className:`sort ${n==="description"?B==="ASC"?"asc":"desc":""}`,onClick:()=>F("description"),children:[e.jsx("span",{className:"sort-label",children:"Description"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"w-[125px]",children:"Banner type"}),e.jsx("th",{className:"w-[125px]",children:"Actions"})]})}),z?e.jsx(ae,{}):T.length>0?e.jsx("tbody",{children:T.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:a.banner_id})}),e.jsx("td",{children:e.jsx("img",{alt:a.image,className:"rounded-lg size-20 shrink-0",src:a.image})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-1.5",children:a.title})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-1.5",children:a.description})}),e.jsx("td",{children:q[a.banner_type]}),e.jsxs("td",{children:[e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>o(a.banner_id),children:e.jsx(K,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>U(a.banner_id),children:e.jsx(W,{className:"text-red-500"})})]})]},a.banner_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No users available"})})})]})})})}),D>c&&e.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",T.length," of ",D," Branches"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:l===1,onClick:()=>$(l-1),className:`btn ${l===1?"disabled":""}`,children:e.jsx(J,{})}),Array.from({length:_}).map((a,p)=>e.jsx("button",{className:`btn ${l===p+1?"active":""}`,onClick:()=>$(p+1),children:p+1},p)),e.jsx("button",{disabled:l===_,onClick:()=>$(l+1),className:`btn ${l===_?"disabled":""}`,children:e.jsx(Q,{})})]})]})]})},pe=o=>X().shape({title:R().required("Title is required").test("required","Title is required",t=>!!t).max(50,"Max title length exceeded by 50 characters"),description:R().required("Description is required").test("required","Description is required",t=>!!t).max(255,"Max description length exceeded by 255 characters"),image:Z().test("required","Image is required",function(t){return o?!0:t instanceof File}).test("fileSize","File is too large",t=>t&&t instanceof File?t.size<=2*1024*1024:!0).test("fileType","Unsupported file format",t=>t&&t instanceof File?["image/jpeg","image/png","image/jpg"].includes(t.type):!0).nullable(),banner_type:ee().required("Please select banner type")}),ue=({isOpen:o,onClose:t,banner_id:d,setIsSubmit:u})=>{const{addBanner:l,loading:s}=ce(),{updateBanner:c,loading:i}=de(),{banner:h,fetchBanner:g}=ie(),[n,b]=r.useState({title:"",description:"",image:"",banner_type:null}),[B,k]=r.useState({title:"",description:"",image:"",banner_type:null}),[x,C]=r.useState({});r.useEffect(()=>{o&&d&&g(d)},[o,d]),r.useEffect(()=>{if(o&&h&&d){const m={title:h.title,description:h.description,image:h.image,banner_type:h.banner_type};b(m),k(m)}else b({title:"",description:"",image:"",banner_type:null}),k({title:"",description:"",image:"",banner_type:null}),C({})},[o,h,d]);const w=m=>{const v=m.target;if(v instanceof HTMLInputElement){const{name:N,value:f,files:y}=v;N==="image"&&y&&y.length>0?b(E=>({...E,image:y[0]})):b(E=>({...E,[N]:f}))}else if(v instanceof HTMLTextAreaElement){const{name:N,value:f}=v;b(y=>({...y,[N]:f}))}},j=async m=>{m.preventDefault();try{if(await pe(!!d).validate(n,{abortEarly:!1}),!Object.keys(n).some(y=>y==="image"?n.image instanceof File||n.image!==B.image:n[y]!==B[y])){t();return}const f=new FormData;f.append("title",n.title),f.append("description",n.description),n.image instanceof File&&f.append("image",n.image),f.append("banner_type",n.banner_type),d?(await c(d,f),u(!0)):(await l(f),u(!0)),t()}catch(v){if(v instanceof M){const N={};v.inner.forEach(f=>{N[f.path||""]=f.message}),C(N)}else S.error("Failed to submit the form. Please try again.")}};return o?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:t}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96 z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0  mr-5 mt-5 lg:mr-5 shadow-default","data-modal-dismiss":"true",onClick:t,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h1",{className:"text-2xl font-bold mb-6",children:d?"Edit Banner":"Add Banner"}),e.jsxs("form",{onSubmit:j,children:[e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",id:"title",name:"title",value:n.title,onChange:w,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:x.title||" "})]}),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:w,className:"h-20 input border border-gray-300 rounded-md p-2",rows:5}),e.jsx("p",{className:"text-red-500 text-sm",children:x.description||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"image",children:"Image"}),e.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",onChange:w,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:x.image?x.image:" "})]}),e.jsx("div",{className:"grid grid-cols-2 gap-4 mb-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",children:"Banner type"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"banner_type",value:1,checked:n.banner_type===1,onChange:m=>b({...n,banner_type:parseInt(m.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Website"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"banner_type",value:2,checked:n.banner_type===2,onChange:m=>b({...n,banner_type:parseInt(m.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"App"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"banner_type",value:3,checked:n.banner_type===3,onChange:m=>b({...n,banner_type:parseInt(m.target.value)}),className:"radio radio-primary"}),e.jsx("span",{className:"text-sm",children:"Both"})]})]}),e.jsx("p",{className:"text-red-500 text-sm",children:x.banner_type||" "})]})}),e.jsxs("div",{className:"flex gap-4 mt-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary ${s||i?"opacity-50 cursor-not-allowed":""}`,disabled:s||i,children:s||i?s?"Adding...":"Updating...":d?"Update Banner":"Add Banner"}),e.jsx("button",{type:"button",className:"btn btn-light",onClick:t,disabled:s||i,children:"Cancel"})]})]})]})]}):null},ye=()=>{const[o,t]=r.useState(!1),[d,u]=r.useState(null),[l,s]=r.useState(!1),[c,i]=r.useState(!1),h=()=>{s(!1),t(!0),u(null)},g=n=>{s(!0),u(n),t(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Banner"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:h,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Banner"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(me,{isSubmit:c,setIsSubmit:i,setEditBanner:g})})})}),e.jsx(ue,{setIsSubmit:i,isOpen:o,onClose:()=>t(!1),banner_id:d})]})};export{ye as default};
