import{a as n,i as a,d as m}from"./index-D55dg6K9.js";const s=i=>n().shape({name:m().required("Name cannot be empty").test("required","Name cannot be empty",e=>!!e).max(30,"Maximum length of 30 characters exceeded"),image:a().test("required","Image is required",function(e){return i?!0:e instanceof File}).test("fileType","Allowed Format : jpg, jpeg, png, ",e=>e&&e instanceof File?["image/jpeg","image/png","image/jpg"].includes(e.type):!0).test("dimensions","image dimention 85×85 pixels allowed",e=>!e||!(e instanceof File)?!0:new Promise(r=>{const t=new Image;t.src=URL.createObjectURL(e),t.onload=()=>{URL.revokeObjectURL(t.src),r(t.width===85&&t.height===85)},t.onerror=()=>{r(!1)}})).nullable()});export{s as p};
