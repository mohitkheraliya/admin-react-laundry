import{G as y,r as s,j as a}from"./index-DEaIwwLN.js";import{g as z}from"./orderStatusClasses-HfHBGnti.js";function N(c){return y({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#43A047",points:"40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"},child:[]}]})(c)}const G=({options:c=[],displayValue:B,placeholder:w,selectedValues:r,onRemove:p,onSelect:k,setSearch:l,search:e="",isSearchInput:v=!0,className:C="",sliceCount:t=1,isCustomLabel:b=!1})=>{const[O,u]=s.useState(!1),[E,x]=s.useState(e),h=s.useRef(null),L=()=>{x(""),l&&l(""),u(n=>!n)},f=n=>{const i=r.includes(n.value)?r.filter(d=>d!==n.value):[...r,n.value],j=c.filter(d=>i.includes(d.value));r.includes(n.value)?p(j):k(j)},S=n=>{const i=n.target.value;x(i),l&&l(i)},m=e||E,o=v?c.filter(n=>n.label.toLowerCase().includes(m.toLowerCase())):c,g=n=>{h.current&&!h.current.contains(n.target)&&u(!1)};s.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]);const R=o.length===0&&c.length>0,$=m&&c.length===0;return a.jsxs("div",{className:`multi-select-container ${C}`,ref:h,children:[a.jsx("div",{className:"multi-select",onClick:L,children:(r==null?void 0:r.length)===0?a.jsx("span",{className:"placeholder",children:w}):a.jsxs("div",{className:"selected-options",children:[(c==null?void 0:c.length)>0?c.filter(n=>r==null?void 0:r.includes(n.value)).slice(0,t).map(n=>a.jsx("span",{className:"selected-option",children:n.label},n.value)):null,(r==null?void 0:r.length)>t&&a.jsxs("span",{className:"selected-option",children:["+",r.length-t]})]})}),O&&a.jsxs("div",{className:"dropdown-menu",children:[v&&a.jsx("input",{type:"text",className:"search-input",placeholder:"Search...",value:m,onChange:S}),a.jsx("ul",{children:o.length>0?o.map(n=>{const i=z(n.label,!0);return b?a.jsxs("li",{className:`dropdown-item ${i} ${r!=null&&r.includes(n.value)?"selected":""}`,onClick:()=>f(n),children:[a.jsx("span",{children:n.label}),(r==null?void 0:r.includes(n.value))&&a.jsx("span",{className:"checkmark",children:a.jsx(N,{size:18})})]},n.value):a.jsxs("li",{className:`dropdown-item ${r!=null&&r.includes(n.value)?"selected":""}`,onClick:()=>f(n),children:[a.jsx("span",{children:n.label}),(r==null?void 0:r.includes(n.value))&&a.jsx("span",{className:"checkmark",children:a.jsx(N,{size:18})})]},n.value)}):$?a.jsx("li",{className:"no-search",children:"No customers found"}):R?a.jsx("li",{className:"no-search",children:"No results match"}):null})]})]})};export{G as M};
