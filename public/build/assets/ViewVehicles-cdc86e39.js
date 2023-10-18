import{o as v,c as _,b as e,r as L,g as G,f as P,h as re,l as E,i as g,a as c,u as l,j,F as R,k as Z,n as w,t as f,e as W,T as Q,y as B,O as ie,P as oe,d as de,v as ce,K as ue,Z as me}from"./app-d65bb1cc.js";import{$ as fe,_ as ve,U as he,r as ge,q as pe,J as _e,a as xe,K as ye}from"./combobox-8fc5ff9d.js";import{h as U,G as Y,U as ee,S as te,V as be}from"./index-43d6a316.js";import{_ as we}from"./MainLayout-27dfaf0b.js";import"./LOGO-cea72a23.js";function ke(t,a){return v(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})])}function $e(t,a){return v(),_("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])}const je=e("span",{class:"text-gray-500 italic"},"(Search Below)",-1),Te={class:"relative mt-2"},Se={class:"flex items-center"},Ve={class:"sr-only"},Oe={__name:"AttachDriver",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:a}){const i=t,d=L(""),h=L([]);G(d,(s,n)=>{a("update:modelValue",s.driver_id)}),G(()=>i.modelValue,(s,n)=>{s==""&&(d.value=h.value.find(r=>r.id==s))}),P({get(){return i.modelValue},set(s){a("update:modelValue",s)}});const p=s=>{fetch(route("driver.search-json",{term:s})).then(n=>n.json()).then(n=>{h.value=n.data})};return re(()=>{p("")}),(s,n)=>(v(),E(l(ye),{as:"div",modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=r=>d.value=r)},{default:g(()=>[c(l(fe),{class:"block text-sm font-medium leading-6 text-gray-900"},{default:g(()=>[j(" Assigned to "),je]),_:1}),e("div",Te,[c(l(ve),{class:"w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 \\ text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 \\ focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",onChange:n[0]||(n[0]=r=>p(r.target.value)),"display-value":r=>r==null?void 0:r.name},null,8,["display-value"]),c(l(he),{class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},{default:g(()=>[c(l(ge),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})]),_:1}),c(l(pe),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto \\ rounded-md bg-white py-1 text-base shadow-lg ring-1 \\ ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:g(()=>[(v(!0),_(R,null,Z(h.value,r=>(v(),E(l(_e),{key:r.driver_id,value:r,as:"template"},{default:g(({active:x,selected:T})=>[e("li",{class:w(["relative cursor-default select-none py-2 pl-3 pr-9",x?"bg-indigo-600 text-white":"text-gray-900"])},[e("div",Se,[e("span",{class:w(["inline-block h-2 w-2 flex-shrink-0 rounded-full",r.valid?"bg-green-400":"bg-gray-200"]),"aria-hidden":"true"},null,2),e("span",{class:w(["ml-3 truncate",T&&"font-semibold"])},[j(f(r.name)+" ",1),e("span",Ve," is "+f(r.valid?"online":"offline"),1)],2)]),T?(v(),_("span",{key:0,class:w(["absolute inset-y-0 right-0 flex items-center pr-4",x?"text-white":"text-indigo-600"])},[c(l(xe),{class:"h-5 w-5","aria-hidden":"true"})],2)):W("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"]))}},Ce=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Le={class:"fixed inset-0 z-10 overflow-y-auto"},De={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Me={class:"flex justify-between"},Ne={class:"font-bold"},Ie={class:"mt-1 flex items-center gap-x-1.5"},Ae={class:"text-xs leading-5 text-gray-500"},Be={class:"text-xs"},Ee=e("hr",{class:"my-4"},null,-1),Ue={__name:"LinkDriverToVehicle",props:["selectedVehicle","show","closeLinkModal"],setup(t){const a=t,i=Q({driver_id:""}),d=()=>{a.closeLinkModal()},h=()=>{i.post(route("vehicle.attach-driver",[a.selectedVehicle.id]),{preserveScroll:!0,onSuccess:()=>{a.closeLinkModal()}})};return(p,s)=>(v(),E(l(te),{as:"template",show:t.show},{default:g(()=>[c(l(ee),{as:"div",class:"relative z-10",onClose:d},{default:g(()=>[c(l(U),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:g(()=>[Ce]),_:1}),e("div",Le,[e("div",De,[c(l(U),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:g(()=>[c(l(Y),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 \\ pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full \\ sm:max-w-sm sm:p-6"},{default:g(()=>[e("div",null,[e("div",Me,[e("h2",Ne,f(t.selectedVehicle.number_plate),1),e("div",Ie,[e("div",{class:w(["flex-none rounded-full p-1",t.selectedVehicle.device?"bg-emerald-500/20":"bg-orange-500/20"])},[e("div",{class:w(["h-1.5 w-1.5 rounded-full",t.selectedVehicle.device?"bg-emerald-500":"bg-orange-500"])},null,2)],2),e("p",Ae,f(t.selectedVehicle.device?"Attached":"Not Attached")+" to driver",1)])]),e("p",null,f(t.selectedVehicle.model),1),e("p",Be,f(t.selectedVehicle.make),1),Ee,c(Oe,{modelValue:l(i).driver_id,"onUpdate:modelValue":s[0]||(s[0]=n=>l(i).driver_id=n)},null,8,["modelValue"])]),e("div",{class:"mt-5 sm:mt-6"},[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-0",onClick:h},"Link Driver")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}};function ze(t){var a=typeof t;return t!=null&&(a=="object"||a=="function")}var se=ze,Ge=typeof B=="object"&&B&&B.Object===Object&&B,Pe=Ge,Re=Pe,We=typeof self=="object"&&self&&self.Object===Object&&self,Fe=Re||We||Function("return this")(),ae=Fe,He=ae,Ke=function(){return He.Date.now()},qe=Ke,Je=/\s/;function Xe(t){for(var a=t.length;a--&&Je.test(t.charAt(a)););return a}var Ze=Xe,Qe=Ze,Ye=/^\s+/;function et(t){return t&&t.slice(0,Qe(t)+1).replace(Ye,"")}var tt=et,st=ae,at=st.Symbol,ne=at,F=ne,le=Object.prototype,nt=le.hasOwnProperty,lt=le.toString,N=F?F.toStringTag:void 0;function rt(t){var a=nt.call(t,N),i=t[N];try{t[N]=void 0;var d=!0}catch{}var h=lt.call(t);return d&&(a?t[N]=i:delete t[N]),h}var it=rt,ot=Object.prototype,dt=ot.toString;function ct(t){return dt.call(t)}var ut=ct,H=ne,mt=it,ft=ut,vt="[object Null]",ht="[object Undefined]",K=H?H.toStringTag:void 0;function gt(t){return t==null?t===void 0?ht:vt:K&&K in Object(t)?mt(t):ft(t)}var pt=gt;function _t(t){return t!=null&&typeof t=="object"}var xt=_t,yt=pt,bt=xt,wt="[object Symbol]";function kt(t){return typeof t=="symbol"||bt(t)&&yt(t)==wt}var $t=kt,jt=tt,q=se,Tt=$t,J=0/0,St=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,Ct=parseInt;function Lt(t){if(typeof t=="number")return t;if(Tt(t))return J;if(q(t)){var a=typeof t.valueOf=="function"?t.valueOf():t;t=q(a)?a+"":a}if(typeof t!="string")return t===0?t:+t;t=jt(t);var i=Vt.test(t);return i||Ot.test(t)?Ct(t.slice(2),i?2:8):St.test(t)?J:+t}var Dt=Lt,Mt=se,z=qe,X=Dt,Nt="Expected a function",It=Math.max,At=Math.min;function Bt(t,a,i){var d,h,p,s,n,r,x=0,T=!1,k=!1,V=!0;if(typeof t!="function")throw new TypeError(Nt);a=X(a)||0,Mt(i)&&(T=!!i.leading,k="maxWait"in i,p=k?It(X(i.maxWait)||0,a):p,V="trailing"in i?!!i.trailing:V);function O(o){var b=d,$=h;return d=h=void 0,x=o,s=t.apply($,b),s}function y(o){return x=o,n=setTimeout(S,a),T?O(o):s}function u(o){var b=o-r,$=o-x,m=a-b;return k?At(m,p-$):m}function D(o){var b=o-r,$=o-x;return r===void 0||b>=a||b<0||k&&$>=p}function S(){var o=z();if(D(o))return M(o);n=setTimeout(S,u(o))}function M(o){return n=void 0,V&&d?O(o):(d=h=void 0,s)}function I(){n!==void 0&&clearTimeout(n),x=0,d=r=h=n=void 0}function A(){return n===void 0?s:M(z())}function C(){var o=z(),b=D(o);if(d=arguments,h=this,r=o,b){if(n===void 0)return y(r);if(k)return clearTimeout(n),n=setTimeout(S,a),O(r)}return n===void 0&&(n=setTimeout(S,a)),s}return C.cancel=I,C.flush=A,C}var Et=Bt;const Ut=ie(Et),zt={class:"px-4 py-10 sm:px-6 lg:px-8 lg:py-6"},Gt=e("h1",{class:"text-xl mb-8"},"Vehicles",-1),Pt={class:"grid lg:grid-cols-3 gap-8"},Rt={class:"col-span-1 row-end-2"},Wt={class:"mb-5"},Ft=e("label",{for:"email",class:"sr-only"},"Search",-1),Ht={role:"list",class:"row-auto divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 \\ ring-gray-900/5 sm:rounded-xl overflow-y-scroll"},Kt=["onClick"],qt={class:"flex gap-x-4"},Jt={class:"h-12 w-12 flex-none rounded-full bg-gray-200 flex items-center"},Xt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902  17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5   18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026  0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"},null,-1),Zt=[Xt],Qt={class:"min-w-0 flex-auto"},Yt={class:"text-sm font-semibold leading-6 text-gray-900"},es=e("span",{class:"absolute inset-x-0 -top-px bottom-0"},null,-1),ts={class:"mt-1 flex text-xs leading-5 text-gray-500"},ss={class:"relative truncate hover:underline"},as={class:"flex items-center gap-x-4"},ns={class:"hidden sm:flex sm:flex-col sm:items-end"},ls={key:0,class:"mt-1 text-xs leading-5 text-gray-500"},rs={key:1,class:"mt-1 flex items-center gap-x-1.5"},is=e("div",{class:"flex-none rounded-full bg-emerald-500/20 p-1"},[e("div",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"})],-1),os=e("p",{class:"text-xs leading-5 text-gray-500"},"Attached",-1),ds=[is,os],cs={key:0,class:"col-span-1 border-l pl-8"},us={class:"lg:fixed w-full max-w-[440px]"},ms={class:"bg-white p-6 rounded-md"},fs={class:"flex justify-between"},vs={class:"font-bold"},hs={class:"mt-1 flex items-center gap-x-1.5"},gs={class:"text-xs leading-5 text-gray-500"},ps={class:"text-xs"},_s=e("hr",{class:"my-4"},null,-1),xs={key:0,id:"driverDetails"},ys={href:"#",class:"text-blue-500"},bs={class:"mt-2"},ws=e("span",null,"Unlink Driver from vehicle: ",-1),ks={key:1},$s={class:"mt-2"},js=e("span",null,"Link a Driver to this vehicle: ",-1),Ts=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Ss={class:"fixed inset-0 z-10 overflow-y-auto"},Vs={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Os={class:"sm:flex sm:items-start"},Cs={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},Ls={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},Ds=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"},"Are you sure you want to unlink this driver from the vehicle? This will leave the vehicle un assigned to any driver. Be sure to link another driver if you proceed with this action.")],-1),Ms={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},zs=Object.assign({layout:we},{__name:"ViewVehicles",setup(t){var k,V,O;const a=P(()=>ue().props.vehicles),i=L(!1),d=L(!1),h=L(!1),p=L(""),s=P(()=>{var y;return(y=a.value)==null?void 0:y.data.find(u=>u.id==h.value)}),n=Ut(()=>{oe.reload({data:{term:p.value},only:["vehicles"]})},500),r=()=>{i.value=!1},x=Q({vehicle_id:(k=s.value)==null?void 0:k.id,driver_id:(O=(V=s.value)==null?void 0:V.driver)==null?void 0:O.id});G(s,async y=>{var u;x.vehicle_id=y==null?void 0:y.id,x.driver_id=(u=y==null?void 0:y.driver)==null?void 0:u.id});const T=()=>{x.delete(route("vehicle.detach-driver"),{onSuccess:()=>{d.value=!1}})};return(y,u)=>{var D,S,M,I,A,C,o,b,$;return v(),_(R,null,[c(l(me),{title:"Vehicles"}),e("div",zt,[Gt,e("div",Pt,[e("div",Rt,[e("div",Wt,[Ft,de(e("input",{type:"text",name:"search",id:"search",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 \\ shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset \\ focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Search vehicles","onUpdate:modelValue":u[0]||(u[0]=m=>p.value=m),onKeyup:u[1]||(u[1]=(...m)=>l(n)&&l(n)(...m))},null,544),[[ce,p.value]])]),e("ul",Ht,[(v(!0),_(R,null,Z(a.value.data,m=>(v(),_("li",{key:m.id,onClick:Ns=>h.value=m.id,class:"relative \\ flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 cursor-pointer"},[e("div",qt,[e("div",Jt,[(v(),_("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:w([m.driver?"text-green-500":"text-red-500","w-6 h-6 mx-auto"])},Zt,2))]),e("div",Qt,[e("p",Yt,[e("a",null,[es,j(" "+f(m.number_plate),1)])]),e("p",ts,[e("a",ss,f(m.make),1)])])]),e("div",as,[e("div",ns,[m.driver?(v(),_("div",rs,ds)):(v(),_("p",ls," Not Attached "))]),c(l(ke),{class:"h-5 w-5 flex-none text-gray-400","aria-hidden":"true"})])],8,Kt))),128))])]),s.value?(v(),_("div",cs,[e("div",us,[e("div",ms,[e("div",fs,[e("h2",vs,f(s.value.number_plate),1),e("div",hs,[e("div",{class:w(["flex-none rounded-full p-1",s.value.driver?"bg-emerald-500/20":"bg-orange-500/20"])},[e("div",{class:w(["h-1.5 w-1.5 rounded-full",s.value.driver?"bg-emerald-500":"bg-orange-500"])},null,2)],2),e("p",gs,f(s.value.driver?"Attached":"Not Attached")+" to driver",1)])]),e("p",null,f(s.value.make),1),e("p",ps,f(s.value.model),1),_s,s.value.driver?(v(),_("div",xs,[e("p",null,[j("Driver Name: "),e("strong",null,f((S=(D=s.value.driver)==null?void 0:D.bio_data)==null?void 0:S.name),1)]),e("p",null,[j("Phone / Email: "),e("strong",null,f((I=(M=s.value.driver)==null?void 0:M.bio_data)==null?void 0:I.phone_number)+" / "+f((C=(A=s.value.driver)==null?void 0:A.bio_data)==null?void 0:C.email),1)]),e("p",null,[j("Merch Code: "),e("strong",null,[e("a",ys,f((b=(o=s.value.driver)==null?void 0:o.bio_data)==null?void 0:b.patasente_id),1)])]),e("p",null,[j("Licence No: "),e("strong",null,f(($=s.value.driver)==null?void 0:$.license),1)]),e("div",bs,[ws,e("button",{type:"button",onClick:u[2]||(u[2]=m=>d.value=!0),class:"ml-4 rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"},"Unlink Driver")])])):(v(),_("div",ks,[e("div",$s,[js,e("button",{type:"button",onClick:u[3]||(u[3]=m=>i.value=!0),class:"ml-4 rounded-full bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"},"Link Driver")])]))])])])):W("",!0)])]),i.value?(v(),E(Ue,{key:0,selectedVehicle:s.value,show:i.value,closeLinkModal:r},null,8,["selectedVehicle","show"])):W("",!0),c(l(te),{as:"template",show:d.value},{default:g(()=>[c(l(ee),{as:"div",class:"relative z-10",onClose:u[5]||(u[5]=m=>d.value=!1)},{default:g(()=>[c(l(U),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:g(()=>[Ts]),_:1}),e("div",Ss,[e("div",Vs,[c(l(U),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:g(()=>[c(l(Y),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:g(()=>[e("div",Os,[e("div",Cs,[c(l($e),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),e("div",Ls,[c(l(be),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:g(()=>[j("Unlink Driver")]),_:1}),Ds])]),e("div",Ms,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-0 border-0 hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:T},"Unlink"),e("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:u[4]||(u[4]=m=>d.value=!1),ref:"cancelButtonRef"},"Cancel",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}});export{zs as default};
