import{a as r,i,d as a}from"./index-DGOfZAPn.js";const s=t=>r().shape({name:a().required("Name cannot be empty").test("required","Name cannot be empty",e=>!!e).max(30,"Maximum length of 30 characters exceeded"),image:i().test("required","Image is required",function(e){return t?!0:e instanceof File}).test("fileSize","File too large",e=>e&&e instanceof File?e.size<=2e6:!0).test("fileType","Unsupported file format",e=>e&&e instanceof File?["image/jpeg","image/png","image/jpg"].includes(e.type):!0).nullable()});export{s as p};
