import{T as Z,r as l,j as e,u as k,U as ee,W as se,d as ae,e as te,V as le}from"./index-CJwNPNrv.js";import{s as ne}from"./searchSchema-Dr-Pwjj0.js";import{d as B}from"./dayjs.min-Dyw33les.js";import{M as re}from"./MultiSelect-1z881efN.js";import"./orderStatusClasses-DgGpuqsn.js";const ie=()=>{const{customerRatingData:t,fetchCustomerRatingData:p}=Z(),[d,j]=l.useState([{label:"5",count:0},{label:"4",count:0},{label:"3",count:0},{label:"2",count:0},{label:"1",count:0}]),[b,N]=l.useState(0),[r,w]=l.useState(0);l.useEffect(()=>{p()},[]),l.useEffect(()=>{if(t){const n=d.map(c=>{const x=t==null?void 0:t.find(_=>_.rating.toString()===c.label);return x?{...c,count:x.count}:c});j(n);const m=t==null?void 0:t.reduce((c,x)=>c+x.rating*x.count,0),v=t==null?void 0:t.reduce((c,x)=>c+x.count,0),S=m/v;N(S),w(v)}},[t]);const i=Math.max(...d.map(n=>n.count)),f=n=>{switch(Number(n)){case 1:return"bg-red-500";case 2:return"bg-green-500";case 3:return"bg-yellow-500";case 4:return"bg-orange-500";case 5:return"bg-blue-500";default:return"bg-gray-200"}};return e.jsx("div",{className:"col-span-3",children:e.jsxs("div",{className:"card w-full",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"text-lg font-semibold text-gray-700",children:"Customer Rating"})}),e.jsxs("div",{className:"flex flex-wrap mt-3 justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 ml-3",children:[e.jsx("div",{children:e.jsx("img",{className:"default-logo h-[55px] max-w-none",src:"/media/app/review.png"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-2xl text-gray-700 font-bold",children:b.toFixed(2)}),e.jsxs("p",{className:"text-base font-semibold text-gray-700",children:["─ of ",r," reviews"]})]})]}),e.jsx("div",{className:"card-body flex flex-col gap-2 custom-body min-w-[250px]",children:d.map((n,m)=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex justify-between text-sm font-medium text-gray-600",children:e.jsxs("div",{className:"flex gap-2 items-center justify-center",children:[e.jsx("span",{children:n.label}),e.jsx("div",{className:"rating-label custom-rating checked",children:e.jsx("i",{className:"custom-rating-on rating-on ki-solid ki-star text-base leading-none"})},m)]})}),e.jsx("div",{className:"w-full h-[8px] bg-gray-200 rounded overflow-hidden",children:e.jsx("div",{className:`${f(n.label)} rounded-full h-full transition-all duration-500`,style:{width:`${n.count/i*100}%`}})}),e.jsx("span",{className:"font-medium text-sm text-gray-600",children:n.count})]},m))})]})]})})},T=t=>{switch(t){case 1:return"badge badge-danger badge-outline";case 2:return"badge badge-info badge-outline";case 3:return"badge badge-warning badge-outline";default:return""}},ce=()=>{const[t,p]=l.useState(1),[d,j]=l.useState(10),[b,N]=k(),[r,w]=l.useState(null),[i,f]=l.useState(null),n=b.get("page"),m=b.get("perPage"),[v,S]=l.useState(""),[c,x]=l.useState(""),[_,F]=l.useState(""),[y,W]=l.useState(),[R,$]=l.useState([]),[z,G]=l.useState(!1),[L,E]=l.useState([]),{feedbacks:o,count:P,fetchFeedbacks:U}=ee(t,d,v,r,i,R,y),{approveFeedback:q}=se(),C=Math.ceil(P/d);l.useEffect(()=>{U(),G(!1)},[z]),l.useEffect(()=>{if((o==null?void 0:o.length)>0){const s=o==null?void 0:o.map(a=>{var u,g,M,D,I,O,V,Y;return{first_name:(g=(u=a==null?void 0:a.order)==null?void 0:u.user)==null?void 0:g.first_name,last_name:(D=(M=a==null?void 0:a.order)==null?void 0:M.user)==null?void 0:D.last_name,order_id:a.order_id,email:(O=(I=a==null?void 0:a.order)==null?void 0:I.user)==null?void 0:O.email,created_at:a.created_at,mobile_number:(Y=(V=a==null?void 0:a.order)==null?void 0:V.user)==null?void 0:Y.mobile_number,feedback_id:a.feedback_id,is_publish:a.is_publish,comment:a.comment,rating:a.rating}});E(s)}},[o]),l.useEffect(()=>{n&&p(Number(n)),m&&j(Number(m))},[n,m]);const H=async s=>{s.preventDefault();try{await ne.validate({search:c},{abortEarly:!1}),S(c),F("")}catch(a){a instanceof le&&F(a.errors[0])}},h=s=>{r===s?f(i==="ASC"?"DESC":"ASC"):(w(s),f("ASC"))},A=s=>{s>=1&&s<=C&&(p(s),N({page:s.toString(),perPage:d.toString()}))},J=s=>{const a=Number(s.target.value);j(a),p(1),N({page:"1",perPage:a.toString()})},K=s=>Array.from({length:5}).map((a,u)=>e.jsxs("div",{className:`rating-label ${u<s?"checked":""}`,children:[e.jsx("i",{className:"rating-on custom-rating-on ki-solid ki-star text-base leading-none"}),e.jsx("i",{className:"rating-off ki-outline ki-star text-base leading-none"})]},u)),Q=(s,a)=>{E(u=>u.map(g=>g.feedback_id===s?{...g,is_publish:a}:g)),q(s,a)},X=Array.from({length:5},(s,a)=>({label:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mr-1",children:a+1}),e.jsxs("div",{className:"rating-label checked mb-1",children:[e.jsx("i",{className:"rating-on custom-rating-on ki-solid ki-star text-base leading-none"}),e.jsx("i",{className:"rating-off ki-outline ki-star text-base leading-none"})]})]},a),value:a+1}));if(o)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header card-header-space flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"Show"}),e.jsxs("select",{className:"select select-sm w-16","data-datatable-size":"true",name:"perpage",value:d,onChange:J,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx("span",{children:"per page"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 lg:gap-5 mb-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.jsx(re,{options:X,displayValue:"label",placeholder:"Select Rating",selectedValues:R,onSelect:s=>$(s.map(a=>a.value)),onRemove:s=>$(s.map(a=>a.value)),className:"min-w-[270px]",sliceCount:3,isSearchInput:!1})}),e.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.jsxs("select",{className:`select select-lg w-[170px] text-sm ${T(y)}`,value:y,onChange:s=>{W(Number(s.target.value))},children:[e.jsx("option",{value:"",children:"Publish Status"}),e.jsx("option",{value:"1",className:"badge-danger badge-outline",children:"Approve"}),e.jsx("option",{value:"2",className:"badge-info badge-outline",children:"Website"}),e.jsx("option",{value:"3",className:"badge-warning badge-outline",children:"Mobile App"}),e.jsx("option",{value:"4",className:"badge-secondary badge-outline",children:"Both"})]})}),e.jsxs("div",{className:"flex",children:[e.jsx("form",{onSubmit:H,className:"flex items-center gap-2",children:e.jsxs("label",{className:"input input-sm h-10 flex items-center gap-2",children:[e.jsx("input",{type:"search",value:c,onChange:s=>{x(s.target.value),s.target.value===""&&S("")},placeholder:"Search...",className:"min-w-[185px] flex-grow"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-icon",children:e.jsx("i",{className:"ki-filled ki-magnifier"})})]})}),e.jsx("p",{className:"text-red-500 text-sm mt-1",children:_||" "})]})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{"data-datatable":"true","data-datatable-page-size":"10",children:[e.jsx("div",{className:"scrollable-x-auto",children:e.jsxs("table",{className:"table table-auto table-border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"min-w-[70px]",children:[e.jsxs("span",{className:`sort ${r==="order_id"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("order_id"),children:[e.jsx("span",{className:"sort-label",children:"Order Id"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[250px]",children:[e.jsxs("span",{className:`sort ${r==="first_name"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("first_name"),children:[e.jsx("span",{className:"sort-label",children:"Customer name"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsx("th",{className:"min-w-[250px]",children:e.jsxs("span",{className:`sort ${r==="email"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("email"),children:[e.jsx("span",{className:"sort-label",children:"Email"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsx("th",{className:"min-w-[130px]",children:e.jsxs("span",{className:`sort ${r==="mobile_number"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("mobile_number"),children:[e.jsx("span",{className:"sort-label",children:"Mobile no"}),e.jsx("span",{className:"sort-icon"})]})}),e.jsxs("th",{className:"min-w-[100px]",children:[e.jsxs("span",{className:`sort ${r==="rating"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("rating"),children:[e.jsx("span",{className:"sort-label",children:"Rating"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[300px]",children:[e.jsxs("span",{className:`sort ${r==="comment"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("comment"),children:[e.jsx("span",{className:"sort-label",children:"Comment"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[120px]",children:[e.jsxs("span",{className:`sort ${r==="date"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("date"),children:[e.jsx("span",{className:"sort-label",children:"Date"}),e.jsx("span",{className:"sort-icon"})]})," "]}),e.jsxs("th",{className:"min-w-[140px]",children:[e.jsxs("span",{className:`sort ${r==="is_publish"?i==="ASC"?"asc":"desc":""}`,onClick:()=>h("is_publish"),children:[e.jsx("span",{className:"sort-label",children:"Publish"}),e.jsx("span",{className:"sort-icon"})]})," "]})]})}),o.length>0?e.jsx("tbody",{children:L.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.order_id]}),e.jsxs("td",{children:[s.first_name," ",s.last_name]}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.mobile_number}),e.jsx("td",{children:e.jsx("span",{children:e.jsx("div",{className:"rating",children:K(s.rating)})})}),e.jsx("td",{children:s.comment}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[B(s.created_at).format("DD-MM-YYYY"),e.jsx("br",{}),B(s.created_at).format("hh:mm:ss A")]})}),e.jsx("td",{children:e.jsx("span",{className:"menu-badge","data-tooltip":"true","data-tooltip-placement":"top",children:e.jsxs("select",{className:`select select-lg w-[170px] text-sm ${T(s.is_publish)}`,"data-tooltip":"true",value:s.is_publish,onChange:a=>Q(s.feedback_id,a.target.value),children:[e.jsx("option",{value:"1",className:"badge-danger badge-outline",children:"Approve"}),e.jsx("option",{value:"2",className:"badge-info badge-outline",children:"Website"}),e.jsx("option",{value:"3",className:"badge-warning badge-outline",children:"Mobile App"}),e.jsx("option",{value:"4",className:"badge-secondary badge-outline",children:"Both"})]})})})]},s.feedback_id))}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center",children:"No Feedback data available"})})})]})}),P>d&&e.jsx("div",{className:"card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-gray-700",children:["Showing ",o.length," of ",P," Users"]}),e.jsxs("div",{className:"pagination","data-datatable-pagination":"true",children:[e.jsx("button",{disabled:t===1,onClick:()=>A(t-1),className:`btn ${t===1?"disabled":""}`,children:e.jsx(ae,{})}),Array.from({length:C}).map((s,a)=>e.jsx("button",{className:`btn ${t===a+1?"active":""}`,onClick:()=>A(a+1),children:a+1},a)),e.jsx("button",{disabled:t===C,onClick:()=>A(t+1),className:`btn ${t===C?"disabled":""}`,children:e.jsx(te,{})})]})]})})]})})]})},ue=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-fixed",children:e.jsx("div",{className:"flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5",children:e.jsx("h1",{className:"text-xl font-semibold leading-none text-gray-900",children:"Customer Feedback"})})}),e.jsx("div",{className:"container-fixed",children:e.jsx(ie,{})}),e.jsx("div",{className:"container-fixed mt-5",children:e.jsx("div",{className:"grid gap-5 lg:gap-7.5",children:e.jsx("div",{className:"card card-grid min-w-full",children:e.jsx(ce,{})})})})]});export{ue as default};
