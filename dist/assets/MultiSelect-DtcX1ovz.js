import{G as z,r as m,j as a}from"./index-BGpOCz7R.js";import{g as B}from"./orderStatusClasses-HfHBGnti.js";function p(i){return z({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#43A047",points:"40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"},child:[]}]})(i)}const A=({options:i=[],displayValue:D,placeholder:k,selectedValues:n,onRemove:u,onSelect:C,setSearch:h,search:x="",isSearchInput:f=!0,className:b="",sliceCount:o=1,isCustomLabel:O=!1})=>{const[E,g]=m.useState(!1),[L,j]=m.useState(x),s=m.useRef(null),S=()=>{j(""),h&&h(""),g(r=>!r)},N=r=>{const c=n!=null&&n.includes(r.value)?n==null?void 0:n.filter(v=>v!==r.value):[...n,r.value],w=i.filter(v=>c==null?void 0:c.includes(v.value));n!=null&&n.includes(r.value)?u(w):C(w)},R=r=>{const c=r.target.value;j(c),h&&h(c)},t=x||L,l=f?i.filter(r=>r.label.toLowerCase().includes(t.toLowerCase())):i,d=r=>{s.current&&!s.current.contains(r.target)&&g(!1)};m.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]);const $=l.length===0&&i.length>0,y=t&&i.length===0;return a.jsxs("div",{className:`multi-select-container ${b}`,ref:s,children:[a.jsx("div",{className:"multi-select",onClick:S,children:(n==null?void 0:n.length)===0?a.jsx("span",{className:"placeholder",children:k}):a.jsxs("div",{className:"selected-options",children:[(i==null?void 0:i.length)>0?i.filter(r=>n==null?void 0:n.includes(r.value)).slice(0,o).map(r=>a.jsx("span",{className:"selected-option",children:r.label},r.value)):null,(n==null?void 0:n.length)>o&&a.jsxs("span",{className:"selected-option",children:["+",n.length-o]})]})}),E&&a.jsxs("div",{className:"dropdown-menu",children:[f&&a.jsx("input",{type:"text",className:"search-input",placeholder:"Search...",value:t,onChange:R}),a.jsx("ul",{children:l.length>0?l.map(r=>{const c=B(r.label,!0);return O?a.jsxs("li",{className:`dropdown-item ${c} ${n!=null&&n.includes(r.value)?"selected":""}`,onClick:()=>N(r),children:[a.jsx("span",{children:r.label}),(n==null?void 0:n.includes(r.value))&&a.jsx("span",{className:"checkmark",children:a.jsx(p,{size:18})})]},r.value):a.jsxs("li",{className:`dropdown-item ${n!=null&&n.includes(r.value)?"selected":""}`,onClick:()=>N(r),children:[a.jsx("span",{children:r.label}),(n==null?void 0:n.includes(r.value))&&a.jsx("span",{className:"checkmark",children:a.jsx(p,{size:18})})]},r.value)}):y?a.jsx("li",{className:"no-search",children:"No customers found"}):$?a.jsx("li",{className:"no-search",children:"No results match"}):null})]})]})};export{A as M};
