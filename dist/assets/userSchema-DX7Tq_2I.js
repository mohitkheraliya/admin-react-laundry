import{r as l,_ as t,c as o,a as r,h as i,q as m}from"./index-DEaIwwLN.js";const p="http://3.110.208.70:3000/user",b=()=>{const[a,e]=l.useState(!1);return{addUser:async n=>{const d=localStorage.getItem("authToken");e(!0);try{const s=await fetch(p,{method:"POST",headers:{Authorization:`Bearer ${d}`,"Content-Type":"application/json"},body:JSON.stringify(n)});if(!s.ok){const c=await s.json();return t.error(c.message,{position:"top-center"}),!1}const u=await s.json();return n.role_id===5?t.success("Customer added successfully",{position:"top-center"}):t.success(u.message,{position:"top-center"}),!0}catch(s){return t.error((s==null?void 0:s.message)||"Error adding banner",{position:"top-center"}),!1}finally{e(!1)}},loading:a}},g=a=>o().shape({first_name:r().required("First name is required"),last_name:r().required("Last name is required"),email:r().email("Enter a valid email"),password:a?r().test("password-validation","Password must be at least 6 characters",function(e){return e&&e.length>0?e.length>=6:!0}):r().min(6,"Password must be at least 6 characters").required("Password is required"),mobile_number:r().matches(/^\d{10}$/,"Mobile number must be 10 digits").required("Mobile number is required"),gender:i().required("Please select gender"),role_id:i().required("Please select role"),company_ids:m().when("role_id",{is:e=>e===2,then:e=>e.min(1,"Please select at least one company").required("Please select a company"),otherwise:e=>e})}),f=()=>o().shape({first_name:r().required("First name is required"),last_name:r().required("Last name is required"),email:r().email("Enter a valid email"),password:r().min(6,"Password must be at least 6 characters").required("Password is required"),mobile_number:r().matches(/^\d{10}$/,"Mobile number must be 10 digits").required("Mobile number is required"),gender:i().required("Please select gender")});export{g as a,f as c,b as u};
