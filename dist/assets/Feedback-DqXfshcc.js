import{r as c,u as z,b6 as L,j as s,h as F,d as V,e as G,V as T}from"./index-C2mEiCt6.js";import{s as U}from"./searchSchema-bo8qmsGV.js";import{I as q}from"./enums-9JeJuu7U.js";const B=t=>{switch(t){case 1:return"";case 2:return"badge-website";case 3:return"badge-app";default:return"badge-web-app"}},H=()=>{const[t,h]=c.useState(1),[i,N]=c.useState(10),[b,S]=z(),[r,E]=c.useState(null),[l,C]=c.useState(null),x=b.get("page"),j=b.get("perPage"),[M,f]=c.useState(""),[p,D]=c.useState(""),[I,v]=c.useState(""),{feedbacks:o,count:u}=L(t,i,M,r,l),m=Math.ceil(u/i);c.useEffect(()=>{x&&h(Number(x)),j&&N(Number(j))},[x,j]);const R=async e=>{e.preventDefault();try{await U.validate({search:p},{abortEarly:!1}),f(p),v("")}catch(a){a instanceof T&&v(a.errors[0])}},n=e=>{r===e?C(l==="ASC"?"DESC":"ASC"):(E(e),C("ASC"))},g=e=>{e>=1&&e<=m&&(h(e),S({page:e.toString(),perPage:i.toString()}))},Y=e=>{const a=Number(e.target.value);N(a),h(1),S({page:"1",perPage:a.toString()})},O=e=>Array.from({length:5}).map((a,d)=>s.jsxs("div",{className:`rating-label ${d<e?"checked":""}`,children:[s.jsx("i",{className:"rating-on ki-solid ki-star text-base leading-none"}),s.jsx("i",{className:"rating-off ki-outline ki-star text-base leading-none"})]},d));if(o)return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx("span",{children:"Show"}),s.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:i,onChange:Y,children:[s.jsx("option",{value:10,children:"10"}),s.jsx("option",{value:20,children:"20"})]}),s.jsx("span",{children:"per page"})]}),s.jsx("div",{className:"flex items-center gap-4 flex-1 justify-end",children:s.jsxs("div",{className:"flex flex-col items-start",children:[s.jsx("form",{onSubmit:R,className:"flex items-center gap-2",children:s.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[s.jsx("input",{type:"search",value:p,onChange:e=>{D(e.target.value),e.target.value===""&&f("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),s.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:s.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),s.jsx("p",{className:"text-red-500 text-sm mt-1",children:I||" "})]})})]}),s.jsx("div",{className:"card-body",children:s.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[s.jsx("div",{className:"scrollable-x-auto",children:s.jsxs("table",{className:"table table-auto table-border",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsxs("th",{className:"min-w-[70px]",children:[s.jsxs("span",{className:`sort ${r==="order_id"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("order_id"),children:[s.jsx("span",{className:"sort-label",children:"Order Id"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[250px]",children:[s.jsxs("span",{className:`sort ${r==="first_name"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("first_name"),children:[s.jsx("span",{className:"sort-label",children:"Customer name"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsx("th",{className:"min-w-[250px]",children:s.jsxs("span",{className:`sort ${r==="email"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("email"),children:[s.jsx("span",{className:"sort-label",children:"Email"}),s.jsx("span",{className:"sort-icon"})]})}),s.jsx("th",{className:"min-w-[130px]",children:s.jsxs("span",{className:`sort ${r==="mobile_number"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("mobile_number"),children:[s.jsx("span",{className:"sort-label",children:"Mobile no"}),s.jsx("span",{className:"sort-icon"})]})}),s.jsxs("th",{className:"min-w-[100px]",children:[s.jsxs("span",{className:`sort ${r==="rating"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("rating"),children:[s.jsx("span",{className:"sort-label",children:"Rating"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[300px]",children:[s.jsxs("span",{className:`sort ${r==="comment"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("comment"),children:[s.jsx("span",{className:"sort-label",children:"Comment"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[120px]",children:[s.jsxs("span",{className:`sort ${r==="date"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("date"),children:[s.jsx("span",{className:"sort-label",children:"Date"}),s.jsx("span",{className:"sort-icon"})]})," "]}),s.jsxs("th",{className:"min-w-[140px]",children:[s.jsxs("span",{className:`sort ${r==="is_publish"?l==="ASC"?"asc":"desc":""}`,onClick:()=>n("is_publish"),children:[s.jsx("span",{className:"sort-label",children:"Publish"}),s.jsx("span",{className:"sort-icon"})]})," "]})]})}),o.length>0?s.jsx("tbody",{children:o.map(e=>{var a,d,w,P,_,y,A,$;return s.jsxs("tr",{children:[s.jsxs("td",{children:["#",e.order_id]}),s.jsxs("td",{children:[(d=(a=e==null?void 0:e.order)==null?void 0:a.user)==null?void 0:d.first_name," ",(P=(w=e==null?void 0:e.order)==null?void 0:w.user)==null?void 0:P.last_name]}),s.jsx("td",{children:(y=(_=e==null?void 0:e.order)==null?void 0:_.user)==null?void 0:y.email}),s.jsx("td",{children:($=(A=e==null?void 0:e.order)==null?void 0:A.user)==null?void 0:$.mobile_number}),s.jsx("td",{children:s.jsx("span",{children:s.jsx("div",{className:"rating",children:O(e.rating)})})}),s.jsx("td",{children:e.comment}),s.jsx("td",{children:s.jsxs("div",{className:"flex items-center gap-2.5",children:[F(e.created_at).format("DD-MM-YYYY"),s.jsx("br",{}),F(e.created_at).format("hh:mm:ss A")]})}),s.jsx("td",{children:s.jsx("span",{className:`mt-1 rounded-md text-sm ${B(e.is_publish)}`,children:q[e.is_publish]})})]},e.feedback_id)})}):s.jsx("tbody",{children:s.jsx("tr",{children:s.jsx("td",{colSpan:5,className:"text-center",children:"No Feedback data available"})})})]})}),u>i&&s.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("span",{className:"text-gray-700",children:["Showing ",o.length," of ",u," Users"]}),s.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[s.jsx("button",{disabled:t===1,onClick:()=>g(t-1),className:`btn ${t===1?"disabled":""}`,children:s.jsx(V,{})}),Array.from({length:m}).map((e,a)=>s.jsx("button",{className:`btn ${t===a+1?"active":""}`,onClick:()=>g(a+1),children:a+1},a)),s.jsx("button",{disabled:t===m,onClick:()=>g(t+1),className:`btn ${t===m?"disabled":""}`,children:s.jsx(G,{})})]})]})})]})})]})},W=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"container-fixed",children:s.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:s.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Customer Feedback"})})}),s.jsx("div",{className:"container-fixed",children:s.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:s.jsx("div",{className:"card card-grid min-w-full",children:s.jsx(H,{})})})})]});export{W as default};
