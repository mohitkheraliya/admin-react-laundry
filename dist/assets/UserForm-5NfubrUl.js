import{r as w,_ as E,l as J,aY as Z,m as Y,b2 as Q,j as n,V as q}from"./index-BM1D7ySV.js";import{u as X}from"./useGetBranches-Dz8I-_yy.js";import{u as ee,a as te}from"./userSchema-BJgr6GAk.js";const se=()=>{const[C,p]=w.useState(!1);return{updateUser:async(f,a)=>{const t=localStorage.getItem("authToken"),e=`http://35.154.167.170:3000/user/${f}`;p(!0);try{const s=await fetch(e,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok){const i=await s.json();return E.error(i.message,{position:"top-center"}),!1}const o=await s.json();return E.success(o.message,{position:"top-center"}),!0}catch(s){return E.error(s.message,{position:"top-center"}),!1}finally{p(!1)}},loading:C}},ne=()=>{const[C,p]=w.useState(!1),[S,f]=w.useState(null);return{user:S,loading:C,fetchUser:async t=>{var o;if(!t){f(null);return}const e=localStorage.getItem("authToken"),s=`http://35.154.167.170:3000/user/${t}`;p(!0);try{const i=await fetch(s,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});if(!i.ok){const r=await i.json();E.error(r.message,{position:"top-center"}),p(!1);return}const d=await i.json();f((o=d==null?void 0:d.data)==null?void 0:o.user)}catch(i){E.error((i==null?void 0:i.message)||"Network error: Failed to fetch.",{position:"top-center"})}finally{p(!1)}}}};var z={exports:{}},A={};Object.defineProperty(A,"__esModule",{value:!0});var k,P=w,m=(k=P)&&typeof k=="object"&&"default"in k?k.default:k;function G(C,p){return(G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,f){return S.__proto__=f,S})(C,p)}function g(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}(function(C,p){p===void 0&&(p={});var S=p.insertAt;if(typeof document<"u"){var f=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",S==="top"&&f.firstChild?f.insertBefore(a,f.firstChild):f.appendChild(a),a.styleSheet?a.styleSheet.cssText=C:a.appendChild(document.createTextNode(C))}})('.multiSelectContainer,.multiSelectContainer *,.multiSelectContainer :after,.multiSelectContainer :before{box-sizing:border-box}.multiSelectContainer{position:relative;text-align:left;width:100%}.disable_ms{opacity:.5;pointer-events:none}.display-none{display:none}.searchWrapper{border:1px solid #ccc;border-radius:4px;min-height:22px;padding:5px;position:relative}.multiSelectContainer input{background:transparent;border:none;margin-top:3px}.multiSelectContainer input:focus{outline:none}.chip{align-items:center;background:#0096fb;border-radius:11px;color:#fff;display:inline-flex;font-size:13px;line-height:19px;margin-bottom:5px;margin-right:5px;padding:4px 10px}.chip,.singleChip{white-space:nowrap}.singleChip{background:none;border-radius:none;color:inherit}.singleChip i{display:none}.closeIcon{cursor:pointer;float:right;height:13px;margin-left:5px;width:13px}.optionListContainer{background:#fff;border-radius:4px;margin-top:1px;position:absolute;width:100%;z-index:2}.multiSelectContainer ul{border:1px solid #ccc;border-radius:4px;display:block;margin:0;max-height:250px;overflow-y:auto;padding:0}.multiSelectContainer li{padding:10px}.multiSelectContainer li:hover{background:#0096fb;color:#fff;cursor:pointer}.checkbox{margin-right:10px}.disableSelection{opacity:.5;pointer-events:none}.highlightOption{background:#0096fb;color:#fff}.displayBlock{display:block}.displayNone{display:none}.notFound{display:block;padding:10px}.singleSelect{padding-right:20px}li.groupHeading{color:#908e8e;padding:5px 15px;pointer-events:none}li.groupChildEle{padding-left:30px}.icon_down_dir{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:14px}.icon_down_dir:before{content:"\\e803"}.custom-close{display:flex}');var U={circle:"data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M256%2C33C132.3%2C33%2C32%2C133.3%2C32%2C257c0%2C123.7%2C100.3%2C224%2C224%2C224c123.7%2C0%2C224-100.3%2C224-224C480%2C133.3%2C379.7%2C33%2C256%2C33z%20%20%20%20M364.3%2C332.5c1.5%2C1.5%2C2.3%2C3.5%2C2.3%2C5.6c0%2C2.1-0.8%2C4.2-2.3%2C5.6l-21.6%2C21.7c-1.6%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3L256%2C289.8%20%20%20l-75.4%2C75.7c-1.5%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1%2C0.8-4.2%2C2.3-5.6l75.7-76%20%20%20l-75.9-75c-3.1-3.1-3.1-8.2%2C0-11.3l21.6-21.7c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l75.7%2C74.7l75.7-74.7%20%20%20c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l21.6%2C21.7c3.1%2C3.1%2C3.1%2C8.2%2C0%2C11.3l-75.9%2C75L364.3%2C332.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",circle2:"data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2096%2096%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M48%2C0A48%2C48%2C0%2C1%2C0%2C96%2C48%2C48.0512%2C48.0512%2C0%2C0%2C0%2C48%2C0Zm0%2C84A36%2C36%2C0%2C1%2C1%2C84%2C48%2C36.0393%2C36.0393%2C0%2C0%2C1%2C48%2C84Z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M64.2422%2C31.7578a5.9979%2C5.9979%2C0%2C0%2C0-8.4844%2C0L48%2C39.5156l-7.7578-7.7578a5.9994%2C5.9994%2C0%2C0%2C0-8.4844%2C8.4844L39.5156%2C48l-7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C1%2C0%2C8.4844%2C8.4844L48%2C56.4844l7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C0%2C0%2C8.4844-8.4844L56.4844%2C48l7.7578-7.7578A5.9979%2C5.9979%2C0%2C0%2C0%2C64.2422%2C31.7578Z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",close:"data:image/svg+xml,%3Csvg%20height%3D%22135.467mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2013547%2013547%22%20width%3D%22135.467mm%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Ebene_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%220%2C0%2013547%2C0%2013547%2C13547%200%2C13547%20%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil1%22%20d%3D%22M714%2012832l12118%200%200%20-12117%20-12118%200%200%2012117zm4188%20-2990l1871%20-1871%201871%201871%201197%20-1197%20-1871%20-1871%201871%20-1871%20-1197%20-1197%20-1871%201871%20-1871%20-1871%20-1197%201197%201871%201871%20-1871%201871%201197%201197z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",cancel:"data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M443.6%2C387.1L312.4%2C255.4l131.5-130c5.4-5.4%2C5.4-14.2%2C0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4%20%20L256%2C197.8L124.9%2C68.3c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4L68%2C105.9c-5.4%2C5.4-5.4%2C14.2%2C0%2C19.6l131.5%2C130L68.4%2C387.1%20%20c-2.6%2C2.6-4.1%2C6.1-4.1%2C9.8c0%2C3.7%2C1.4%2C7.2%2C4.1%2C9.8l37.4%2C37.6c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1L256%2C313.1l130.7%2C131.1%20%20c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1l37.4-37.6c2.6-2.6%2C4.1-6.1%2C4.1-9.8C447.7%2C393.2%2C446.2%2C389.7%2C443.6%2C387.1z%22%2F%3E%3C%2Fsvg%3E"};function ie(C){var p,S,f=P.useRef(null);return S=C.outsideClick,P.useEffect(function(){function a(t){p.current&&!p.current.contains(t.target)&&S()}return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}},[p=f]),m.createElement("div",{ref:f},C.children)}var I=function(C){var p,S;function f(t){var e;return(e=C.call(this,t)||this).state={inputValue:"",options:t.options,filteredOptions:t.options,unfilteredOptions:t.options,selectedValues:Object.assign([],t.selectedValues),preSelectedValues:Object.assign([],t.selectedValues),toggleOptionsList:!1,highlightOption:t.avoidHighlightFirstOption?-1:0,showCheckbox:t.showCheckbox,keepSearchTerm:t.keepSearchTerm,groupedObject:[],closeIconType:U[t.closeIcon]||U.circle},e.optionTimeout=null,e.searchWrapper=m.createRef(),e.searchBox=m.createRef(),e.onChange=e.onChange.bind(g(e)),e.onKeyPress=e.onKeyPress.bind(g(e)),e.onFocus=e.onFocus.bind(g(e)),e.onBlur=e.onBlur.bind(g(e)),e.renderMultiselectContainer=e.renderMultiselectContainer.bind(g(e)),e.renderSelectedList=e.renderSelectedList.bind(g(e)),e.onRemoveSelectedItem=e.onRemoveSelectedItem.bind(g(e)),e.toggelOptionList=e.toggelOptionList.bind(g(e)),e.onArrowKeyNavigation=e.onArrowKeyNavigation.bind(g(e)),e.onSelectItem=e.onSelectItem.bind(g(e)),e.filterOptionsByInput=e.filterOptionsByInput.bind(g(e)),e.removeSelectedValuesFromOptions=e.removeSelectedValuesFromOptions.bind(g(e)),e.isSelectedValue=e.isSelectedValue.bind(g(e)),e.fadeOutSelection=e.fadeOutSelection.bind(g(e)),e.isDisablePreSelectedValues=e.isDisablePreSelectedValues.bind(g(e)),e.renderGroupByOptions=e.renderGroupByOptions.bind(g(e)),e.renderNormalOption=e.renderNormalOption.bind(g(e)),e.listenerCallback=e.listenerCallback.bind(g(e)),e.resetSelectedValues=e.resetSelectedValues.bind(g(e)),e.getSelectedItems=e.getSelectedItems.bind(g(e)),e.getSelectedItemsCount=e.getSelectedItemsCount.bind(g(e)),e.hideOnClickOutside=e.hideOnClickOutside.bind(g(e)),e.onCloseOptionList=e.onCloseOptionList.bind(g(e)),e.isVisible=e.isVisible.bind(g(e)),e}S=C,(p=f).prototype=Object.create(S.prototype),p.prototype.constructor=p,G(p,S);var a=f.prototype;return a.initialSetValue=function(){var t=this.props,e=t.groupBy,s=this.state.options;t.showCheckbox||t.singleSelect||this.removeSelectedValuesFromOptions(!1),e&&this.groupByOptions(s)},a.resetSelectedValues=function(){var t=this,e=this.state.unfilteredOptions;return new Promise(function(s){t.setState({selectedValues:[],preSelectedValues:[],options:e,filteredOptions:e},function(){s(),t.initialSetValue()})})},a.getSelectedItems=function(){return this.state.selectedValues},a.getSelectedItemsCount=function(){return this.state.selectedValues.length},a.componentDidMount=function(){this.initialSetValue(),this.searchWrapper.current.addEventListener("click",this.listenerCallback)},a.componentDidUpdate=function(t){var e=this.props,s=e.options,o=e.selectedValues,i=t.selectedValues;JSON.stringify(t.options)!==JSON.stringify(s)&&this.setState({options:s,filteredOptions:s,unfilteredOptions:s},this.initialSetValue),JSON.stringify(i)!==JSON.stringify(o)&&this.setState({selectedValues:Object.assign([],o),preSelectedValues:Object.assign([],o)},this.initialSetValue)},a.listenerCallback=function(){this.searchBox.current.focus()},a.componentWillUnmount=function(){this.optionTimeout&&clearTimeout(this.optionTimeout),this.searchWrapper.current.removeEventListener("click",this.listenerCallback)},a.removeSelectedValuesFromOptions=function(t){var e=this.props,s=e.isObject,o=e.displayValue,i=e.groupBy,d=this.state,r=d.selectedValues,h=r===void 0?[]:r,y=d.unfilteredOptions;if(!t&&i&&this.groupByOptions(d.options),h.length||t){if(s){var x=y.filter(function(O){return h.findIndex(function(N){return N[o]===O[o]})===-1});return i&&this.groupByOptions(x),void this.setState({options:x,filteredOptions:x},this.filterOptionsByInput)}var u=y.filter(function(O){return h.indexOf(O)===-1});this.setState({options:u,filteredOptions:u},this.filterOptionsByInput)}},a.groupByOptions=function(t){var e=this.props.groupBy,s=t.reduce(function(o,i){var d=i[e]||"Others";return o[d]=o[d]||[],o[d].push(i),o},Object.create({}));this.setState({groupedObject:s})},a.onChange=function(t){var e=this.props.onSearch;this.setState({inputValue:t.target.value},this.filterOptionsByInput),e&&e(t.target.value)},a.onKeyPress=function(t){var e=this.props.onKeyPressFn;e&&e(t,t.target.value)},a.filterOptionsByInput=function(){var t,e=this,s=this.state,o=s.inputValue,i=this.props,d=i.displayValue;t=s.filteredOptions.filter(i.isObject?function(r){return e.matchValues(r[d],o)}:function(r){return e.matchValues(r,o)}),this.groupByOptions(t),this.setState({options:t})},a.matchValues=function(t,e){return this.props.caseSensitiveSearch?t.indexOf(e)>-1:t.toLowerCase?t.toLowerCase().indexOf(e.toLowerCase())>-1:t.toString().indexOf(e)>-1},a.onArrowKeyNavigation=function(t){var e=this.state,s=e.options,o=e.highlightOption,i=e.toggleOptionsList,d=e.selectedValues;if(t.keyCode!==8||e.inputValue||this.props.disablePreSelectedValues||!d.length||this.onRemoveSelectedItem(d.length-1),s.length){if(t.keyCode===38)this.setState(o>0?function(r){return{highlightOption:r.highlightOption-1}}:{highlightOption:s.length-1});else if(t.keyCode===40)this.setState(o<s.length-1?function(r){return{highlightOption:r.highlightOption+1}}:{highlightOption:0});else if(t.key==="Enter"&&s.length&&i){if(o===-1)return;this.onSelectItem(s[o])}}},a.onRemoveSelectedItem=function(t){var e,s=this,o=this.state.selectedValues,i=this.props,d=i.onRemove,r=i.showCheckbox,h=i.displayValue;e=i.isObject?o.findIndex(function(y){return y[h]===t[h]}):o.indexOf(t),o.splice(e,1),d(o,t),this.setState({selectedValues:o},function(){r||s.removeSelectedValuesFromOptions(!0)}),this.props.closeOnSelect||this.searchBox.current.focus()},a.onSelectItem=function(t){var e=this,s=this.state.selectedValues,o=this.props,i=o.selectionLimit,d=o.onSelect,r=o.singleSelect,h=o.showCheckbox;if(this.state.keepSearchTerm||this.setState({inputValue:""}),r)return this.onSingleSelect(t),void d([t],t);this.isSelectedValue(t)?this.onRemoveSelectedItem(t):i!=s.length&&(s.push(t),d(s,t),this.setState({selectedValues:s},function(){h?e.filterOptionsByInput():e.removeSelectedValuesFromOptions(!0)}),this.props.closeOnSelect||this.searchBox.current.focus())},a.onSingleSelect=function(t){this.setState({selectedValues:[t],toggleOptionsList:!1})},a.isSelectedValue=function(t){var e=this.props,s=e.displayValue,o=this.state.selectedValues;return e.isObject?o.filter(function(i){return i[s]===t[s]}).length>0:o.filter(function(i){return i===t}).length>0},a.renderOptionList=function(){var t=this.props,e=t.groupBy,s=t.style,o=t.emptyRecordMsg,i=t.loadingMessage,d=i===void 0?"loading...":i,r=this.state.options;return t.loading?m.createElement("ul",{className:"optionContainer",style:s.optionContainer},typeof d=="string"&&m.createElement("span",{style:s.loadingMessage,className:"notFound"},d),typeof d!="string"&&d):m.createElement("ul",{className:"optionContainer",style:s.optionContainer},r.length===0&&m.createElement("span",{style:s.notFound,className:"notFound"},o),e?this.renderGroupByOptions():this.renderNormalOption())},a.renderGroupByOptions=function(){var t=this,e=this.props,s=e.isObject,o=s!==void 0&&s,i=e.displayValue,d=e.showCheckbox,r=e.style,h=e.singleSelect,y=this.state.groupedObject;return Object.keys(y).map(function(x){return m.createElement(m.Fragment,{key:x},m.createElement("li",{className:"groupHeading",style:r.groupHeading},x),y[x].map(function(u,O){var N=t.isSelectedValue(u);return m.createElement("li",{key:"option"+O,style:r.option,className:"groupChildEle option "+(N?"selected":"")+" "+(t.fadeOutSelection(u)?"disableSelection":"")+" "+(t.isDisablePreSelectedValues(u)?"disableSelection":""),onClick:function(){return t.onSelectItem(u)}},d&&!h&&m.createElement("input",{type:"checkbox",className:"checkbox",readOnly:!0,checked:N}),t.props.optionValueDecorator(o?u[i]:(u||"").toString(),u))}))})},a.renderNormalOption=function(){var t=this,e=this.props,s=e.isObject,o=s!==void 0&&s,i=e.displayValue,d=e.showCheckbox,r=e.style,h=e.singleSelect,y=this.state.highlightOption;return this.state.options.map(function(x,u){var O=t.isSelectedValue(x);return m.createElement("li",{key:"option"+u,style:r.option,className:"option "+(O?"selected":"")+" "+(y===u?"highlightOption highlight":"")+" "+(t.fadeOutSelection(x)?"disableSelection":"")+" "+(t.isDisablePreSelectedValues(x)?"disableSelection":""),onClick:function(){return t.onSelectItem(x)}},d&&!h&&m.createElement("input",{type:"checkbox",readOnly:!0,className:"checkbox",checked:O}),t.props.optionValueDecorator(o?x[i]:(x||"").toString(),x))})},a.renderSelectedList=function(){var t=this,e=this.props,s=e.isObject,o=s!==void 0&&s,i=e.displayValue,d=e.style,r=e.singleSelect,h=e.customCloseIcon,y=this.state,x=y.closeIconType;return y.selectedValues.map(function(u,O){return m.createElement("span",{className:"chip  "+(r&&"singleChip")+" "+(t.isDisablePreSelectedValues(u)&&"disableSelection"),key:O,style:d.chips},t.props.selectedValueDecorator(o?u[i]:(u||"").toString(),u),!t.isDisablePreSelectedValues(u)&&(h?m.createElement("i",{className:"custom-close",onClick:function(){return t.onRemoveSelectedItem(u)}},h):m.createElement("img",{className:"icon_cancel closeIcon",src:x,onClick:function(){return t.onRemoveSelectedItem(u)}})))})},a.isDisablePreSelectedValues=function(t){var e=this.props,s=e.displayValue,o=this.state.preSelectedValues;return!(!e.disablePreSelectedValues||!o.length)&&(e.isObject?o.filter(function(i){return i[s]===t[s]}).length>0:o.filter(function(i){return i===t}).length>0)},a.fadeOutSelection=function(t){var e=this.props,s=e.selectionLimit;if(!e.singleSelect){var o=this.state.selectedValues;return s!=-1&&s==o.length&&(s==o.length?!e.showCheckbox||!this.isSelectedValue(t):void 0)}},a.toggelOptionList=function(){this.setState({toggleOptionsList:!this.state.toggleOptionsList,highlightOption:this.props.avoidHighlightFirstOption?-1:0})},a.onCloseOptionList=function(){this.setState({toggleOptionsList:!1,highlightOption:this.props.avoidHighlightFirstOption?-1:0,inputValue:""})},a.onFocus=function(){this.state.toggleOptionsList?clearTimeout(this.optionTimeout):this.toggelOptionList()},a.onBlur=function(){this.setState({inputValue:""},this.filterOptionsByInput),this.optionTimeout=setTimeout(this.onCloseOptionList,250)},a.isVisible=function(t){return!!t&&!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},a.hideOnClickOutside=function(){var t=this,e=document.getElementsByClassName("multiselect-container")[0];document.addEventListener("click",function(s){e&&!e.contains(s.target)&&t.isVisible(e)&&t.toggelOptionList()})},a.renderMultiselectContainer=function(){var t=this.state,e=t.inputValue,s=t.toggleOptionsList,o=t.selectedValues,i=this.props,d=i.placeholder,r=i.style,h=i.singleSelect,y=i.id,x=i.name,u=i.hidePlaceholder,O=i.disable,N=i.showArrow,B=i.customArrow;return m.createElement("div",{className:"multiselect-container multiSelectContainer "+(O?"disable_ms":"")+" "+(i.className||""),id:y||"multiselectContainerReact",style:r.multiselectContainer},m.createElement("div",{className:"search-wrapper searchWrapper "+(h?"singleSelect":""),ref:this.searchWrapper,style:r.searchBox,onClick:h?this.toggelOptionList:function(){}},!i.hideSelectedList&&this.renderSelectedList(),m.createElement("input",{type:"text",ref:this.searchBox,className:"searchBox "+(h&&o.length?"display-none":""),id:(y||"search")+"_input",name:(x||"search_name")+"_input",onChange:this.onChange,onKeyPress:this.onKeyPress,value:e,onFocus:this.onFocus,onBlur:this.onBlur,placeholder:h&&o.length||u&&o.length?"":d,onKeyDown:this.onArrowKeyNavigation,style:r.inputField,autoComplete:"off",disabled:h||O}),(h||N)&&m.createElement(m.Fragment,null,B?m.createElement("span",{className:"icon_down_dir"},B):m.createElement("img",{src:"data:image/svg+xml,%3Csvg%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cg%20id%3D%22background%22%3E%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22none%22%20height%3D%2232%22%20width%3D%2232%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%20%3Cg%20id%3D%22arrow_x5F_down%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%222.002%2C10%2016.001%2C24%2030.002%2C10%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",className:"icon_cancel icon_down_dir"}))),m.createElement("div",{className:"optionListContainer "+(s?"displayBlock":"displayNone"),onMouseDown:function(D){D.preventDefault()}},this.renderOptionList()))},a.render=function(){return m.createElement(ie,{outsideClick:this.onCloseOptionList},this.renderMultiselectContainer())},f}(m.Component);I.defaultProps={options:[],disablePreSelectedValues:!1,selectedValues:[],isObject:!0,displayValue:"model",showCheckbox:!1,selectionLimit:-1,placeholder:"Select",groupBy:"",style:{},emptyRecordMsg:"No Options Available",onSelect:function(){},onRemove:function(){},onKeyPressFn:function(){},closeIcon:"circle2",singleSelect:!1,caseSensitiveSearch:!1,id:"",name:"",closeOnSelect:!0,avoidHighlightFirstOption:!1,hidePlaceholder:!1,showArrow:!1,keepSearchTerm:!1,customCloseIcon:"",className:"",customArrow:void 0,selectedValueDecorator:function(C){return C},optionValueDecorator:function(C){return C}},A.Multiselect=I,A.default=I;z.exports=A;var oe=z.exports;const K=J(oe),ce=()=>{const{addUser:C,loading:p}=ee(),{updateUser:S,loading:f}=se(),{id:a}=Z(),t=a?Number(a):null,e=1e3,s=1,o=Y(),{companies:i,fetchCompanies:d}=Q(s,e),{user:r,fetchUser:h}=ne(),[y,x]=w.useState([]),{branches:u,fetchBranches:O}=X(s,e),[N,B]=w.useState([]),D={first_name:"",last_name:"",email:"",password:"",mobile_number:"",gender:null,role_id:null,image:"",company_ids:[],branch_ids:[]},[c,v]=w.useState(D),[R,T]=w.useState(D),[_,M]=w.useState({});w.useEffect(()=>{(async()=>{await h(t),await d(),await O()})()},[t]),w.useEffect(()=>{if(i){const l=i.map(b=>({company_id:b.company_id,company_name:b.company_name}));x(l)}},[i]),w.useEffect(()=>{if(u){const l=u.map(b=>({branch_id:b.branch_id,branch_name:b.branch_name}));B(l)}},[u]),w.useEffect(()=>{if(r){const l={...c,first_name:r.first_name,last_name:r.last_name,email:r.email,password:"",mobile_number:r.mobile_number,gender:r.gender,role_id:r.role_id,branch_ids:r.branch_ids,company_ids:r.company_ids};v(l),T(l)}else v(D),T(D),M({})},[r]);const W=l=>{const{name:b,value:V,files:F}=l.target;b==="image"&&F&&F.length>0?v(j=>({...j,image:F[0].name})):v(j=>({...j,[b]:V}))},H=async l=>{l.preventDefault();try{if(await te(!!t).validate(c,{abortEarly:!1}),!Object.keys(c).some(j=>j==="image"?c.image instanceof File||c.image!==R.image:c[j]!==R[j])){o("/user");return}let F;if(t){const j=new FormData;Object.keys(c).forEach(L=>{L==="image"&&c.image instanceof File?j.append(L,c.image):j.append(L,c[L])}),F=await S(t,c)}else F=await C(c);F&&o("/user")}catch(b){if(b instanceof q){const V={};b.inner.forEach(F=>{V[F.path||""]=F.message}),M(V)}else E.error("Failed to submit the form. Please try again.")}},$=()=>{o("/user")};return n.jsxs("div",{className:"card max-w-4xl mx-auto p-6 bg-white shadow-md",children:[n.jsx("h1",{className:"text-2xl font-bold mb-6",children:t?"Edit user detail":"Add user"}),n.jsxs("form",{onSubmit:H,children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{htmlFor:"first_name",className:"mb-2 font-semibold",children:"First Name"}),n.jsx("input",{type:"text",id:"first_name",name:"first_name",value:c.first_name||"",onChange:l=>v({...c,first_name:l.target.value}),className:"input border border-gray-300 rounded-md p-2"}),n.jsx("p",{className:"text-red-500 text-sm",children:_.first_name||" "})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{htmlFor:"last_name",className:"mb-2 font-semibold",children:"Last Name"}),n.jsx("input",{type:"text",id:"last_name",name:"last_name",value:c.last_name||"",onChange:l=>v({...c,last_name:l.target.value}),className:"input border border-gray-300 rounded-md p-2"}),n.jsx("p",{className:"text-red-500 text-sm",children:_.last_name||" "})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{htmlFor:"email",className:"mb-2 font-semibold",children:"Email"}),n.jsx("input",{type:"text",id:"email",name:"email",value:c.email||"",onChange:l=>v({...c,email:l.target.value}),className:"input border border-gray-300 rounded-md p-2"}),n.jsx("p",{className:"text-red-500 text-sm",children:_.email||" "})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{htmlFor:"mobile_number",className:"mb-2 font-semibold",children:"Mobile Number"}),n.jsx("input",{type:"text",id:"mobile_number",name:"mobile_number",value:c.mobile_number||"",onChange:l=>v({...c,mobile_number:l.target.value}),className:"input border border-gray-300 rounded-md p-2"}),n.jsx("p",{className:"text-red-500 text-sm",children:_.mobile_number||" "})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{htmlFor:"password",className:"mb-2 font-semibold",children:"Password"}),n.jsx("input",{type:"password",id:"password",name:"password",value:c.password||"",onChange:l=>v({...c,password:l.target.value}),className:"input border border-gray-300 rounded-md p-2"}),n.jsx("p",{className:"text-red-500 text-sm",children:_.password||" "})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{className:"mb-2 font-semibold",htmlFor:"role_id",children:"Role"}),n.jsxs("select",{id:"role_id",className:"select border border-gray-300 rounded-md p-2 w-full text-sm",value:c.role_id===null?"":c.role_id,onChange:l=>v({...c,role_id:l.target.value?parseInt(l.target.value):null}),children:[n.jsx("option",{value:"",disabled:!0,children:"Select Role"}),n.jsx("option",{value:2,children:"Sub Admin"}),n.jsx("option",{value:3,children:"Branch Manager"}),n.jsx("option",{value:4,children:"Delivery Boy"}),n.jsx("option",{value:5,children:"Customer"}),n.jsx("option",{value:6,children:"Workshop Manager"}),n.jsx("option",{value:7,children:"Vendor"})]}),n.jsx("p",{className:"text-red-500 text-sm",children:_.role_id||" "})]}),c.role_id===2&&n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{className:"mb-2 font-semibold",htmlFor:"role_id",children:"Company"}),n.jsx(K,{options:y,displayValue:"company_name",selectedValues:y.filter(l=>c.company_ids.includes(l.company_id)),onSelect:l=>{v({...c,company_ids:l.map(b=>b.company_id)})},onRemove:l=>{v({...c,company_ids:l.map(b=>b.company_id)})},isObject:!0}),n.jsx("p",{className:"text-red-500 text-sm",children:_.company_ids||" "})]}),c.role_id===3&&n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{className:"mb-2 font-semibold",htmlFor:"role_id",children:"Branch"}),n.jsx(K,{options:N,displayValue:"branch_name",selectedValues:N.filter(l=>c.branch_ids.includes(l.branch_id)),onSelect:l=>{v({...c,branch_ids:l.map(b=>b.branch_id)})},onRemove:l=>{v({...c,branch_ids:l.map(b=>b.branch_id)})},isObject:!0}),n.jsx("p",{className:"text-red-500 text-sm",children:_.branch_ids||" "})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{className:"mb-2 font-semibold",children:"Gender"}),n.jsxs("div",{className:"flex space-x-4",children:[n.jsxs("label",{className:"flex items-center space-x-2",children:[n.jsx("input",{type:"radio",name:"gender",value:1,checked:c.gender===1,onChange:l=>v({...c,gender:parseInt(l.target.value)}),className:"radio radio-primary"}),n.jsx("span",{className:"text-sm",children:"Male"})]}),n.jsxs("label",{className:"flex items-center space-x-2",children:[n.jsx("input",{type:"radio",name:"gender",value:2,checked:c.gender===2,onChange:l=>v({...c,gender:parseInt(l.target.value)}),className:"radio radio-primary"}),n.jsx("span",{className:"text-sm",children:"Female"})]}),n.jsxs("label",{className:"flex items-center space-x-2",children:[n.jsx("input",{type:"radio",name:"gender",value:3,checked:c.gender===3,onChange:l=>v({...c,gender:parseInt(l.target.value)}),className:"radio radio-primary"}),n.jsx("span",{className:"text-sm",children:"Other"})]})]}),n.jsx("p",{className:"text-red-500 text-sm",children:_.gender||" "})]}),t&&n.jsxs("div",{className:"flex flex-col",children:[n.jsx("label",{htmlFor:"image",className:"mb-2 font-semibold",children:"Profile Photo"}),n.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",onChange:W,className:"input border border-gray-300 rounded-md p-2"}),n.jsx("p",{className:"text-red-500 text-sm",children:_.image||" "})]})]}),n.jsxs("div",{className:"mt-6 flex gap-4",children:[n.jsx("button",{type:"submit",className:`btn btn-primary ${p||f?"opacity-50 cursor-not-allowed":""}`,disabled:p||f,children:p||f?p?"Adding...":"Updating...":t?"Update user":"Add user"}),n.jsx("button",{type:"button",className:"btn btn-light",onClick:$,disabled:p||f,children:"Cancel"})]})]})]})};export{ce as default};
