import{G,r as s,j as a}from"./index-CF8J22nX.js";import{g as M}from"./orderStatusClasses-HfHBGnti.js";function C(c){return G({attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#43A047",points:"40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"},child:[]}]})(c)}const T=({options:c=[],displayValue:W,placeholder:$,selectedValues:r,onRemove:p,onSelect:E,setSearch:m,search:v="",isSearchInput:j=!1,className:O="",sliceCount:t=1,isCustomLabel:e=!1,defaultOption:N,noDataAvailableLabel:g})=>{const[S,d]=s.useState(!1),[L,u]=s.useState(v),o=s.useRef(null),R=()=>{u(""),m&&m(""),d(n=>!n)},b=n=>{const i=r!=null&&r.includes(n.value)?r==null?void 0:r.filter(l=>l!==n.value):[...r,n.value],h=c.filter(l=>i==null?void 0:i.includes(l.value));r!=null&&r.includes(n.value)?p(h):E(h)},y=n=>{const i=n.target.value;u(i),m&&m(i)},x=v||L,f=j?c.filter(n=>n.label.toLowerCase().includes(x.toLowerCase())):c,w=n=>{o.current&&!o.current.contains(n.target)&&d(!1)};s.useEffect(()=>(document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)}),[]);const z=f.length===0&&c.length>0,B=x&&c.length===0;return a.jsxs("div",{className:`multi-select-container ${O}`,ref:o,children:[a.jsx("div",{className:"multi-select",onClick:R,children:(r==null?void 0:r.length)===0?a.jsx("span",{className:"placeholder",children:$}):a.jsxs("div",{className:"selected-options",children:[(c==null?void 0:c.length)>0?c.filter(n=>r==null?void 0:r.includes(n.value)).slice(0,t).map(n=>{const i=/\(\d+\)$/.test(n.label);let h;if(n.label.length>25)if(i){const l=n.label.match(/\(\d+\)$/),k=l?l[0]:"";h=`${n.label.replace(k,"").trim().slice(0,10)}... ${k}`}else h=`${n.label.slice(0,25)}`;else h=n.label;return a.jsx("span",{className:"selected-option",children:h},n.value)}):null,(r==null?void 0:r.length)>t&&a.jsxs("span",{className:"selected-option",children:["+",r.length-t]})]})}),S&&a.jsxs("div",{className:"dropdown-menu",children:[j&&a.jsx("input",{type:"text",className:"search-input",placeholder:"Search...",value:x,onChange:y}),a.jsx("ul",{children:f.length>0?f.map(n=>{const i=M(n.label,!0);return e?a.jsxs("li",{className:`dropdown-item ${i} ${r!=null&&r.includes(n.value)?"selected":""}`,onClick:()=>b(n),children:[a.jsx("span",{children:n.label}),(r==null?void 0:r.includes(n.value))&&a.jsx("span",{className:"checkmark",children:a.jsx(C,{size:18})})]},n.value):a.jsxs("li",{className:`dropdown-item ${r!=null&&r.includes(n.value)?"selected":""}`,onClick:()=>b(n),children:[a.jsx("span",{children:n.label}),(r==null?void 0:r.includes(n.value))&&a.jsx("span",{className:"checkmark",children:a.jsx(C,{size:18})})]},n.value)}):B?a.jsx("li",{className:"no-search",children:"No customers found"}):g?a.jsx("li",{className:"no-search",children:g}):z?a.jsx("li",{className:"no-search",children:"No results match"}):N?a.jsx("li",{className:"no-search",children:N}):null})]})]})};export{T as M};
