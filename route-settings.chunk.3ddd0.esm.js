(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yzNr:function(e,o,n){"use strict";n.r(o),function(e){var s=n("2y1a");const t={name:"",dob:"",profession:"",designation:""},r=e=>{console.log(e)},a=e=>{let o={};return e.name?/^[a-zA-Z]+$/.test(e.name)?e.name.length>=30&&(o.name="You name should not be greater then 30 char"):o.name="You name should not contains any number or special char":o.name="Required",e.dob?/([12]\d{3}(\/)(0[1-9]|1[0-2])(\/)(0[1-9]|[12]\d|3[01]))/.test(e.dob)||(o.dob="Please enter a valid dob"):o.dob="Required",e.profession?/^[a-zA-Z]+$/.test(e.profession)?e.profession.length>=30&&(o.profession="You profession should not be greater then 30 char"):o.profession="You profession should not contains any number or special char":o.profession="Required",e.designation?/^[a-zA-Z]+$/.test(e.designation)?e.designation.length>=30&&(o.designation="You designation should not be greater then 30 char"):o.designation="You designation should not contains any number or special char":o.designation="Required",o};o.default=()=>{const o=Object(s.a)({initialValues:t,onSubmit:r,validate:a});return e("div",{class:"flex flex-col items-center m-6"},e("h2",{class:" inline-block text-2xl font-bold text-center text-gray-900 rounded-lg p-4"},"Profile Information"),e("form",{class:"grid grid-col gap-6 w-full max-w-lg my-4 border-2 border-gray-900 rounded-lg p-6",onSubmit:o.handleSubmit},e("div",{class:"grid"},e("label",{class:"mb-2",htmlFor:"name"},"Name"),e("input",{id:"name",class:"border-2 border-gray-900 rounded-lg p-2 focus:outline-none  focus:shadow-outline-gray",type:"text",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.name}),o.touched.name&&o.errors.name?e("span",{class:" text-sm text-red-600 mt-2"},o.errors.name):e("span",{class:" text-sm text-gray-600 mt-2"},"Your name must contains only letter")),e("div",{class:"grid"},e("label",{class:" mb-2",htmlFor:"dob"},"DOB"),e("input",{id:"dob",class:"border-2 border-gray-900 rounded-lg p-2  focus:outline-none  focus:shadow-outline-gray",type:"text",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.dob}),o.touched.dob&&o.errors.dob?e("span",{class:" text-sm text-red-600 mt-2"},o.errors.dob):e("span",{class:" text-sm text-gray-600 mt-2"},"Your dob must be in YYYY/MM/DD format")),e("div",{class:"grid"},e("label",{class:" mb-2",htmlFor:"profession"},"Profession"),e("input",{id:"profession",class:"border-2 border-gray-900 rounded-lg p-2  focus:outline-none  focus:shadow-outline-gray",type:"text",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.profession}),o.touched.profession&&o.errors.profession?e("span",{class:" text-sm text-red-600 mt-2"},o.errors.profession):e("span",{class:" text-sm text-gray-600 mt-2"},"Your profession must contains only letter")),e("div",{class:"grid"},e("label",{class:" mb-2",htmlFor:"designation"},"Designation"),e("input",{id:"designation",class:"border-2 border-gray-900 rounded-lg p-2  focus:outline-none  focus:shadow-outline-gray",type:"text",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.designation}),o.touched.designation&&o.errors.designation?e("span",{class:" text-sm text-red-600 mt-2"},o.errors.designation):e("span",{class:" text-sm text-gray-600 mt-2"},"Your designation must contains only letter")),e("div",{class:"grid grid-cols-2 gap-4"},e("button",{type:"reset",class:" bg-red-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-700 transition duration-200 focus:bg-red-700 focus:outline-none focus:shadow-outline-red",onClick:o.resetForm},"Cancel"),e("button",{type:"submit",class:" bg-green-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-green-700 transition duration-200 focus:bg-green-700 focus:outline-none focus:shadow-outline-green"},"Submit"))))}}.call(this,n("hosL").h)}}]);
//# sourceMappingURL=route-settings.chunk.3ddd0.esm.js.map