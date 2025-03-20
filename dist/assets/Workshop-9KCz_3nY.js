import{r as a,V as j,u as Q,e as B,j as e,T as X,F as Z,f as ee,P as se,s as ae,b as I,a as te,d as D}from"./index-DmrRugRi.js";import{u as re}from"./useGetWorkshops-DvmZEe3v.js";import{S as T}from"./sweetalert2.esm.all-B0Dix5B2.js";import{M as oe}from"./MultiSelect-DraWKxBJ.js";import{u as L}from"./useGetUsersByRole-D7_16K4U.js";import{M as ne}from"./index-C3LaH7Cq.js";import"./orderStatusClasses-HfHBGnti.js";const le=()=>{const[c,t]=a.useState(!1),[b,r]=a.useState(null);return{workshop:b,loading:c,fetchWorkshop:async o=>{var p;if(!o){r(null);return}const n=localStorage.getItem("authToken"),h=`http://3.110.208.70:3000/workshops/${o}`;t(!0);try{const f=await fetch(h,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}}),u=await f.json();if(!f.ok){j.error(u.message,{position:"top-center"}),t(!1);return}r((p=u==null?void 0:u.data)==null?void 0:p.result)}catch{j.error("Network error: Failed to fetch workshops.")}finally{t(!1)}}}},ie="http://3.110.208.70:3000/workshops",ce=()=>{const[c,t]=a.useState(!1);return{addWorkshop:async r=>{const d=localStorage.getItem("authToken");t(!0);try{const o=await fetch(ie,{method:"POST",headers:{Authorization:`Bearer ${d}`,"Content-Type":"application/json"},body:JSON.stringify(r)}),n=await o.json();return o.ok?(j.success(n.message,{position:"top-center"}),!0):(j.error(n.message,{position:"top-center"}),!1)}catch{return j.error("Error adding workshop",{position:"top-center"}),!1}finally{t(!1)}},loading:c}},de=()=>{const[c,t]=a.useState(!1);return{deleteWorkshop:async r=>{t(!0);const d=`http://3.110.208.70:3000/workshops/${r}`,o=localStorage.getItem("authToken");try{const n=await fetch(d,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}}),h=await n.json();return n.ok?{success:!0,message:h.message}:(j.error(h.message,{position:"top-center"}),{success:!1,message:h.message})}catch(n){return{success:!1,message:n.message}}finally{t(!1)}},loading:c}},me=()=>{const[c,t]=a.useState(!1);return{updateWorkshop:async(r,d)=>{const o=localStorage.getItem("authToken"),n=`http://3.110.208.70:3000/workshops/${r}`;t(!0);try{const h=await fetch(n,{method:"PUT",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(d)}),p=await h.json();return h.ok?(j.success(p.message,{position:"top-center"}),!0):(j.error(p.message,{position:"top-center"}),!1)}catch(h){return j.error(h.message||"Error Updating workshop",{position:"top-center"}),!1}finally{t(!1)}},loading:c}},he=({isSubmit:c,setIsSubmit:t,setUpdateWorkshop:b})=>{const{deleteWorkshop:r}=de(),[d,o]=a.useState(1),[n,h]=a.useState(10),[p,f]=Q(),[u,k]=a.useState(null),[N,i]=a.useState(null),[x,M]=a.useState(""),[P,A]=a.useState(""),[F,_]=a.useState(""),W=p.get("page"),E=p.get("perPage"),[l,g]=a.useState([]),[w,S]=a.useState([]),{fetchUsersByRole:q}=L(),{workshops:y,count:R,loading:z,fetchWorkshops:O}=re(d,n,x,u,N,w),{hasPermission:C}=B(),V=Math.ceil(R/n);a.useEffect(()=>{(async()=>{c&&(O(),t(!1))})()},[c]),a.useEffect(()=>{(async()=>{const m=await q(6);if(m){const U=m.map(v=>({label:`${v.first_name} ${v.last_name} (${v.mobile_number})`,value:v.user_id}));g(U)}})()},[]),a.useEffect(()=>{W&&o(Number(W)),E&&h(Number(E))},[W,E]),a.useEffect(()=>{x&&(o(1),f({search:x,page:"1",perPage:n.toString()}))},[x]);const G=async s=>{s.preventDefault();try{await ae.validate({search:x},{abortEarly:!1}),M(P),_("")}catch(m){m instanceof I&&_(m.errors[0])}},H=async s=>{try{const{isConfirmed:m}=await T.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(m){const{success:U,message:v}=await r(s);U?(y.filter(Y=>Y.workshop_id!==s).length===0&&d>1&&(o(d-1),f({page:(d-1).toString(),perPage:n.toString()})),await O(),T.fire(v)):T.fire(v)}}catch(m){T.fire({title:"Error",text:m.message,icon:"error"})}},$=s=>{u===s?i(N==="ASC"?"DESC":"ASC"):(k(s),i("ASC"))},K=s=>{s>=1&&s<=V&&(o(s),f({page:s.toString(),perPage:n.toString()}))},J=s=>{const m=Number(s.target.value);h(m),o(1),f({page:"1",perPage:m.toString()})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:n,onChange:J,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.jsx(oe,{options:l,displayValue:"label",placeholder:"Select Workshop Manager",selectedValues:w,onSelect:s=>S(s.map(m=>m.value)),onRemove:s=>S(s.map(m=>m.value)),className:"lgmobile:min-w-[300px] vsmobile:min-w-[235px]",isSearchInput:!0})}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:G,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:P,onChange:s=>{A(s.target.value),s.target.value===""&&M("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:F||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"min-w-[90px]",children:[e.jsxs("span",{className:`sort ${u==="workshop_id"?N==="ASC"?"asc":"desc":""}`,onClick:()=>$("workshop_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsx("th",{className:"min-w-[200px]",children:e.jsxs("span",{className:`sort ${u==="workshop_name"?N==="ASC"?"asc":"desc":""}`,onClick:()=>$("workshop_name"),children:[e.jsx("span",{className:"sort-label",children:"Workshop name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[230px]",children:"Workshop manager"}),e.jsx("th",{className:"min-w-[230px]",children:"Address"}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${u==="email"?N==="ASC"?"asc":"desc":""}`,onClick:()=>$("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[155px]",children:e.jsxs("span",{className:`sort ${u==="mobile_number"?N==="ASC"?"asc":"desc":""}`,onClick:()=>$("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),(C(15,"update")||C(15,"delete"))&&e.jsx("th",{className:"min-w-[125px]",children:"Actions"})]})}),z?e.jsx(X,{}):(y==null?void 0:y.length)>0?e.jsx("tbody",{children:y.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.workshop_id}),e.jsx("td",{children:s.workshop_name}),e.jsx("td",{children:s.workshop_managers.map(m=>m.full_name).join(", ")}),e.jsx("td",{children:s.address}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.mobile_number}),(C(15,"update")||C(15,"delete"))&&e.jsxs("td",{children:[C(15,"update")&&e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>b(s.workshop_id),children:e.jsx(Z,{className:"text-yellow-600"})}),C(15,"delete")&&e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>H(s.workshop_id),children:e.jsx(ee,{className:"text-red-500"})})]})]},s.workshop_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No workshop available"})})})]})})}),e.jsx(se,{count:R,currentPage:d,totalRecords:y==null?void 0:y.length,perPage:n,onPageChange:K,label:"workshops"})]})},pe=te().shape({workshop_name:D().required("Workshop name is required"),address:D().required("Workshop address is required"),email:D().email("Enter a valid email"),mobile_number:D().matches(/^\d{10}$/,"Mobile number must be 10 digits").required("Mobile number is required")}),ue=({isOpen:c,onClose:t,setIsSubmit:b,workshop_id:r})=>{const d={workshop_name:"",email:"",address:"",mobile_number:"",workshop_managers_ids:[]},{users:o,fetchUsersByRole:n}=L(),{addWorkshop:h,loading:p}=ce(),{updateWorkshop:f,loading:u}=me(),{workshop:k,fetchWorkshop:N}=le(),[i,x]=a.useState(d),[M,P]=a.useState(d),[A,F]=a.useState([]),[_,W]=a.useState({});a.useEffect(()=>{if(o){const l=o.map(g=>({workshop_manager_id:g.user_id,workshop_manager_name:`${g.first_name} ${g.last_name}`}));F(l)}},[o]),a.useEffect(()=>{c&&(async()=>n(6))(),c&&r&&N(r)},[c,r]),a.useEffect(()=>{if(c&&k&&r){const l={workshop_name:k.workshop_name,address:k.address,email:k.email,mobile_number:k.mobile_number,workshop_managers_ids:k.workshopManagerMappings.map(g=>g.user_id)};x(l),P(l)}else x(d),P(d),W({})},[c,k,r]);const E=async l=>{l.preventDefault();try{if(await pe.validate(i,{abortEarly:!1}),!Object.keys(i).some(S=>i[S]!==M[S])){t();return}const w={...i,user_ids:i.workshop_managers_ids};r?await f(r,w):await h(w),b(!0),t()}catch(g){if(g instanceof I){const w={};g.inner.forEach(S=>{w[S.path||""]=S.message}),W(w)}else j.error("Failed to submit the form. Please try again.")}};return c?e.jsxs("div",{className:"fixed inset-0 p-6 grid items-center overflow-auto justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:t}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg min-w-[400px] smobile:min-w-[85%] z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default","data-modal-dismiss":"true",onClick:t,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h1",{className:"text-2xl font-bold mb-6",children:r?"Update Workshop":"Add Workshop"}),e.jsx("form",{onSubmit:E,children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"workshop_name",className:"mb-1 block text-gray-700 font-semibold",children:"Workshop name"}),e.jsx("input",{type:"text",id:"workshop_name",name:"workshop_name",value:i.workshop_name||"",onChange:l=>x({...i,workshop_name:l.target.value}),className:"input border border-gray-300 rounded-md p-2 w-full"}),e.jsx("p",{className:"text-red-500 text-sm",children:_.workshop_name||" "})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"address",className:"mb-1 block text-gray-700 font-semibold",children:"Address"}),e.jsx("textarea",{id:"address",name:"address",value:i.address,onChange:l=>x({...i,address:l.target.value}),className:"input border border-gray-300 rounded-md p-2 w-full"}),e.jsx("p",{className:"text-red-500 text-sm",children:_.address||" "})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"mobile_number",className:"mb-1 block text-gray-700 font-semibold",children:"Mobile Number"}),e.jsx("input",{type:"text",id:"mobile_number",name:"mobile_number",value:i.mobile_number,onChange:l=>x({...i,mobile_number:l.target.value}),className:"input border border-gray-300 rounded-md p-2 w-full"}),e.jsx("p",{className:"text-red-500 text-sm",children:_.mobile_number||" "})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"mb-1 block text-gray-700 font-semibold",children:"Email"}),e.jsx("input",{type:"text",id:"email",name:"email",value:i.email||"",onChange:l=>x({...i,email:l.target.value}),className:"input border border-gray-300 rounded-md p-2 w-full"}),e.jsx("p",{className:"text-red-500 text-sm",children:_.email||" "})]})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"mb-1 block text-gray-700 font-semibold",children:"Workshop manager"}),e.jsx(ne,{options:A,displayValue:"workshop_manager_name",selectedValues:i.workshop_managers_ids?A.filter(l=>i.workshop_managers_ids.includes(l.workshop_manager_id)):[],isObject:!0,onSelect:l=>{x({...i,workshop_managers_ids:l.map(g=>g.workshop_manager_id)})},onRemove:l=>{x({...i,workshop_managers_ids:l.map(g=>g.workshop_manager_id)})}})]}),e.jsxs("div",{className:"flex gap-4 mt-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary ${p||u?"opacity-50 cursor-not-allowed":""}`,disabled:p||u,children:p||u?p?"Adding...":"Updating...":r?"Update Workshop":"Add Workshop"}),e.jsx("button",{type:"button",className:"btn btn-light",onClick:t,disabled:p||u,children:"Cancel"})]})]})})]})]}):null},Se=()=>{const[c,t]=a.useState(!1),[b,r]=a.useState(null),[d,o]=a.useState(!1),{hasPermission:n}=B(),h=()=>{t(!0),r(null)},p=f=>{r(f),t(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Workshop"})}),n(15,"create")&&e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:h,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Workshop"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(he,{isSubmit:d,setIsSubmit:o,setUpdateWorkshop:p})})})}),e.jsx(ue,{isOpen:c,onClose:()=>t(!1),setIsSubmit:o,workshop_id:b})]})};export{Se as default};
