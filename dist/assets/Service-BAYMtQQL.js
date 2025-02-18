import{r as n,_ as x,j as e,V as $,u as V,F as G,b as O,d as Y,e as q}from"./index-CREYCSf_.js";import{p as H}from"./productSchema-kaCvVaT_.js";import{u as J}from"./useGetServices-DxD1bg-W.js";import{S as P}from"./sweetalert2.esm.all-DwEdJQJv.js";import{T as K}from"./TableShimmer-CK4943Ji.js";import{s as Q}from"./searchSchema-DOkd150L.js";const W=()=>{const[l,s]=n.useState(!1),[i,r]=n.useState(null);return{service:i,loading:l,fetchService:async t=>{var o;if(!t){r(null);return}const d=localStorage.getItem("authToken"),c=`http://3.110.208.70:3000/admin/services/${t}`;s(!1);try{const f=await fetch(c,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`}});if(!f.ok){const p=await f.json();x.error(p.message,{position:"top-center"}),s(!1);return}const m=await f.json();r((o=m==null?void 0:m.data)==null?void 0:o.service)}catch{x.error("Network error: Failed to fetch.")}finally{s(!1)}}}},X="http://3.110.208.70:3000/admin/services",Z=()=>{const[l,s]=n.useState(!1);return{addService:async r=>{const u=localStorage.getItem("authToken");s(!0);try{const t=await fetch(X,{method:"POST",headers:{Authorization:u?`Bearer ${u}`:""},body:r});if(!t.ok){const o=(await t.json()).message;return x.error(o,{position:"top-center"}),!1}const d=await t.json();return x.success(d.message,{position:"top-center"}),!0}catch(t){return t.name==="TypeError"&&t.message.includes("Failed to fetch")?x.error("Network error: Failed to fetch.",{position:"top-center"}):x.error("An unexpected error occurred.",{position:"top-center"}),!1}finally{s(!1)}},loading:l}},ee=()=>{const[l,s]=n.useState(!1),i=localStorage.getItem("authToken");return{deleteService:async u=>{s(!0);const t=`http://3.110.208.70:3000/admin/services/${u}`;try{if(!i)return x.error("No authentication token found",{position:"top-center"}),s(!1),{success:!1,message:"No authentication token found"};const d=await fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}}),c=await d.json();return d.ok?{success:!0,message:c.message}:(x.error(c.message,{position:"top-center"}),{success:!1,message:c.message})}catch(d){return{success:!1,message:d.message}}finally{s(!1)}},loading:l}},te=()=>{const[l,s]=n.useState(!1);return{updateService:async(r,u)=>{s(!0);const t=`http://3.110.208.70:3000/admin/services/${r}`;try{const d=localStorage.getItem("authToken");if(!d)return x.error("No authentication token found",{position:"top-center"}),s(!1),!1;const c=await fetch(t,{method:"PUT",headers:{Authorization:`Bearer ${d}`},body:u});if(c.ok){const o=await c.json();return x.success(o.message,{position:"top-center"}),!0}else{const f=(await c.json()).message;return x.error(f,{position:"top-center"}),!1}}finally{s(!1)}},loading:l}},ae=({isOpen:l,onClose:s,service_id:i,setIsSubmit:r})=>{const{addService:u,loading:t}=Z(),{updateService:d,loading:c}=te(),{service:o,fetchService:f}=W(),[m,p]=n.useState({name:"",image:""}),[y,w]=n.useState({name:"",image:""}),[C,b]=n.useState({});n.useEffect(()=>{l&&i&&f(i)},[l,i]),n.useEffect(()=>{if(l&&o&&i){const S={name:o.name,image:o.image};p(S),w(S)}else p({name:"",image:""}),w({name:"",image:""}),b({})},[l,o]);const E=S=>{const{name:v,value:N,files:h}=S.target;v==="image"&&h&&h.length>0?p(j=>({...j,image:h[0]})):p(j=>({...j,[v]:N}))},k=async S=>{S.preventDefault();try{if(await H(!!i).validate(m,{abortEarly:!1}),!Object.keys(m).some(j=>j==="image"?m.image instanceof File||m.image!==y.image:m[j]!==y[j])){s();return}const h=new FormData;h.append("name",m.name),m.image instanceof File&&h.append("image",m.image),i?await d(i,h):await u(h),r(!0),s()}catch(v){if(v instanceof $){const N={};v.inner.forEach(h=>{N[h.path||""]=h.message}),b(N)}else x.error("Failed to submit the form. Please try again.")}};return l?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50",onClick:s}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96 z-10 relative",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default","data-modal-dismiss":"true",onClick:s,children:e.jsx("i",{className:"ki-filled ki-cross"})}),e.jsx("h1",{className:"text-2xl font-bold mb-6",children:i?"Edit Service":"Add Service"}),e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:E,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:C.name||" "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-2 font-semibold",htmlFor:"image",children:"Image"}),e.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",onChange:E,className:"input border border-gray-300 rounded-md p-2"}),e.jsx("p",{className:"text-red-500 text-sm",children:C.image||" "})]}),e.jsxs("div",{className:"flex gap-4 mt-4",children:[e.jsx("button",{type:"submit",className:`btn btn-primary ${t||c?"opacity-50 cursor-not-allowed":""}`,disabled:t||c,children:t||c?t?"Adding...":"Updating...":i?"Update Service":"Add Service"}),e.jsx("button",{type:"button",className:"btn btn-light",onClick:s,disabled:t||c,children:"Cancel"})]})]})]})]}):null},se=({isSubmit:l,setIsSubmit:s,setEditService:i})=>{const[r,u]=n.useState(1),[t,d]=n.useState(10),[c,o]=V(),[f,m]=n.useState(null),[p,y]=n.useState(null),w=c.get("page"),C=c.get("perPage"),[b,E]=n.useState(""),[k,S]=n.useState(""),[v,N]=n.useState(""),{services:h,totalServices:j,fetchServices:T,loading:L}=J(r,t,b,f,p),D=Math.ceil(j/t),{deleteService:R}=ee();n.useEffect(()=>{(async()=>{l&&(T(),s(!1))})()},[l]);const U=async a=>{try{const{isConfirmed:g}=await P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#6c757d",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel"});if(g){const{success:_,message:I}=await R(a);_?(h.filter(M=>M.service_id!==a).length===0&&r>1&&(u(r-1),o({page:(r-1).toString(),perPage:t.toString()})),await T(),P.fire(I)):P.fire(I)}}catch(g){P.fire({title:"Error",text:g.message,icon:"error"})}};n.useEffect(()=>{w&&u(Number(w)),C&&d(Number(C))},[w,C]),n.useEffect(()=>{b&&(u(1),o({search:b,page:"1",perPage:t.toString()}))},[b]);const z=async a=>{a.preventDefault();try{await Q.validate({search:b},{abortEarly:!1}),E(k),N("")}catch(g){g instanceof $&&N(g.errors[0])}},F=a=>{f===a?y(p==="ASC"?"DESC":"ASC"):(m(a),y("ASC"))},A=a=>{a>=1&&a<=D&&(u(a),o({page:a.toString(),perPage:t.toString()}))},B=a=>{const g=Number(a.target.value);d(g),u(1),o({page:"1",perPage:g.toString()})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsx("div",{className:"justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm mb-2 font-medium",children:e.jsxs("div",{className:"flex items-center gap-2 order-2 md:order-1",children:["Show",e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:t,onChange:B,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),"per page"]})}),e.jsx("div",{className:"flex flex-wrap gap-2 lg:gap-5",children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("form",{onSubmit:z,className:"flex flex-col",children:[e.jsxs("label",{className:"input input-sm h-10 flex items-center",children:[e.jsx("input",{type:"search",value:k,onChange:a=>{S(a.target.value),a.target.value===""&&E("")},placeholder:"Search service",className:"w-[275px]"}),e.jsx("button",{type:"submit",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]}),e.jsx("p",{className:"text-red-500 text-sm",children:v||" "})]})})})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border","data-datatable-table":"true",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"w-[30px]",children:e.jsxs("span",{className:`sort ${f==="service_id"?p==="ASC"?"asc":"desc":""}`,onClick:()=>F("service_id"),children:[e.jsx("span",{className:"sort-label",children:"Id"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${f==="name"?p==="ASC"?"asc":"desc":""}`,onClick:()=>F("name"),children:[e.jsx("span",{className:"sort-label",children:"Product name"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"w-[125px]",children:"Image"}),e.jsx("th",{className:"w-[125px]",children:"Actions"})]})}),L?e.jsx(K,{}):h.length>0?e.jsx("tbody",{children:h.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-2.5",children:a.service_id})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center gap-1.5",children:a.name})}),e.jsx("td",{children:e.jsx("img",{alt:a.name,className:"rounded-lg size-20 shrink-0",src:a.image})}),e.jsxs("td",{children:[e.jsx("button",{className:"mr-3 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full",onClick:()=>i(a.service_id),children:e.jsx(G,{className:"text-yellow-600"})}),e.jsx("button",{className:"bg-red-100 hover:bg-red-200 p-3 rounded-full",onClick:()=>U(a.service_id),children:e.jsx(O,{className:"text-red-500"})})]})]},a.service_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No users available"})})})]})}),j>t&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",h.length," of ",j," Users"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:r===1,onClick:()=>A(r-1),className:`btn ${r===1?"disabled":""}`,children:e.jsx(Y,{})}),Array.from({length:D}).map((a,g)=>e.jsx("button",{className:`btn ${r===g+1?"active":""}`,onClick:()=>A(g+1),children:g+1},g)),e.jsx("button",{disabled:r===D,onClick:()=>A(r+1),className:`btn ${r===D?"disabled":""}`,children:e.jsx(q,{})})]})]})})]})})]})},me=()=>{const[l,s]=n.useState(!1),[i,r]=n.useState(null),[u,t]=n.useState(!1),[d,c]=n.useState(!1),o=()=>{t(!1),s(!0),r(null)},f=m=>{t(!0),r(m),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5 pb-7.5",children:[e.jsx("div",{className:"flex flex-col justify-center gap-2",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Service"})}),e.jsx("div",{className:"flex items-center gap-2.5",children:e.jsxs("button",{onClick:o,className:"btn btn-primary",children:[e.jsx("i",{className:"ki-filled ki-plus-squared"}),"Add Service"]})})]})}),e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(se,{isSubmit:d,setIsSubmit:c,setEditService:f})})})}),e.jsx(ae,{setIsSubmit:c,isOpen:l,onClose:()=>s(!1),service_id:i})]})};export{me as default};
