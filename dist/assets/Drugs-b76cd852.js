import{_ as S,T,C,A as y,D,E as f,r as V,o as a,c as o,a as l,B as i,w as r,i as d,F as h,g as c,t as u,G as A,H as n,I as g,J as p,K as k,L as M}from"./index-2123eb2d.js";import{_ as N}from"./edit-6400a45e.js";const q={data:()=>({addModal:!1,deleteModal:!1,editModal:!1,newDrug:{name:"",weight:"",type:"",vendor:"",price:"",quantity:""},selectedDrug:{},deleting:!1,editing:!1,adding:!1,drugs:[],gettingDrugs:!1}),components:{TheButton:T,TheModal:C},mounted(){setTimeout(this.getAlldrugs,100),setTimeout(this.getAllVendors,100)},methods:{resetForm(){this.newDrug={name:"",weight:"",type:"",vendor:"",price:"",quantity:""}},getAlldrugs(){this.gettingDrugs=!0,y.getDrugs().then(e=>{this.drugs=e.data}).catch(e=>{D(e)}).finally(()=>{this.gettingDrugs=!1})},getAllVendors(){y.getVendors().then(e=>{this.vendors=e.data}).catch(e=>{D(e)}).finally(()=>{})},addNew(){this.adding=!0,y.addDrug(this.newDrug).then(e=>{f(e),this.addModal=!1,this.resetForm(),this.getAlldrugs()}).catch(e=>{D(e)}).finally(()=>{this.adding=!1})},deleteDrug(){this.deleting=!0,y.deleteDrug(this.selectedDrug._id).then(e=>{f(e),this.deleteModal=!1,this.getAlldrugs()}).catch(e=>{D(e)}).finally(()=>{this.deleting=!1})},editDrug(){this.editing=!0,y.editDrug(this.selectedDrug).then(e=>{f(e),this.editModal=!1}).catch(e=>{D(e)}).finally(()=>{this.editing=!1})}}},B={class:"d-flex jc-between ai-center"},P=l("h2",null,"All Drugs",-1),E={key:0,class:"text-center"},Q={key:1,class:"mt-4"},F=l("thead",null,[l("tr",null,[l("th",null,"Name"),l("th",null,"Weight"),l("th",null,"Type"),l("th",null,"Vendor"),l("th",null,"Price"),l("th",null,"Quantity"),l("th",null,"Action")])],-1),L=["onClick"],W=["onClick"],$=l("label",{class:"block"},"Select Drug Type",-1),O={class:"mt-2"},j={class:"ml-2"},G={class:"ml-2"},H={class:"ml-2"},I=l("label",{class:"block mt-3"},"Drug Name",-1),J=l("label",{class:"block mt-3"},"Weight",-1),K=l("label",{class:"block mt-3"},"Vendor",-1),R=l("option",{value:""},"Select One",-1),Y=["value"],z=l("label",{class:"block mt-3"},"Price",-1),X=l("label",{class:"block mt-3"},"Quantity",-1),Z=l("label",{class:"block"},"Select Drug Type",-1),_={class:"mt-2"},x={class:"ml-2"},ee={class:"ml-2"},le={class:"ml-2"},te=l("label",{class:"block mt-3"},"Drug Name",-1),se=l("label",{class:"block mt-3"},"Weight",-1),ne=l("label",{class:"block mt-3"},"Vendor",-1),de=l("option",{value:""},"Select One",-1),ae=["value"],oe=l("label",{class:"block mt-3"},"Price",-1),ue=l("label",{class:"block mt-3"},"Quantity",-1);function ie(e,s,re,ge,pe,m){const w=V("TheButton"),v=V("the-button"),b=V("TheModal");return a(),o(h,null,[l("div",B,[P,i(w,{onClick:s[0]||(s[0]=t=>e.addModal=!0)},{default:r(()=>[d("Add New")]),_:1})]),e.gettingDrugs?(a(),o("div",E,"Loading...")):(a(),o("table",Q,[F,l("tbody",null,[(a(!0),o(h,null,c(e.drugs,t=>(a(),o("tr",{key:t.name},[l("td",null,u(t.name),1),l("td",null,u(t.weight),1),l("td",null,u(t.type),1),l("td",null,u(t.vendor),1),l("td",null,u(t.price),1),l("td",null,u(t.quantity),1),l("td",null,[l("img",{src:N,alt:"",class:"action-icon",onClick:U=>{e.selectedDrug=t,e.editModal=!0}},null,8,L),l("img",{src:A,alt:"",class:"action-icon action-icon--delete ml-3",onClick:U=>{e.selectedDrug=t,e.deleteModal=!0}},null,8,W)])]))),128))])])),i(b,{modelValue:e.addModal,"onUpdate:modelValue":s[11]||(s[11]=t=>e.addModal=t),heading:"Add new vendor"},{default:r(()=>[l("form",{onSubmit:s[10]||(s[10]=M((...t)=>m.addNew&&m.addNew(...t),["prevent"]))},[$,l("div",O,[l("label",null,[n(l("input",{type:"radio",name:"drugtype",value:"Tab","onUpdate:modelValue":s[1]||(s[1]=t=>e.newDrug.type=t)},null,512),[[g,e.newDrug.type]]),d(" Tab ")]),l("label",j,[n(l("input",{type:"radio",name:"drugtype",value:"Capsule","onUpdate:modelValue":s[2]||(s[2]=t=>e.newDrug.type=t)},null,512),[[g,e.newDrug.type]]),d(" Capsule ")]),l("label",G,[n(l("input",{type:"radio",name:"drugtype",value:"Syrup","onUpdate:modelValue":s[3]||(s[3]=t=>e.newDrug.type=t)},null,512),[[g,e.newDrug.type]]),d(" Syrup ")]),l("label",H,[n(l("input",{type:"radio",name:"drugtype",value:"Suppository","onUpdate:modelValue":s[4]||(s[4]=t=>e.newDrug.type=t)},null,512),[[g,e.newDrug.type]]),d(" Suppository ")])]),I,n(l("input",{type:"text",placeholder:"Drug Name",class:"mt-1 w-100","onUpdate:modelValue":s[5]||(s[5]=t=>e.newDrug.name=t)},null,512),[[p,e.newDrug.name]]),J,n(l("input",{type:"text",placeholder:"weight in mg",class:"mt-1 w-100","onUpdate:modelValue":s[6]||(s[6]=t=>e.newDrug.weight=t)},null,512),[[p,e.newDrug.weight]]),K,n(l("select",{"onUpdate:modelValue":s[7]||(s[7]=t=>e.newDrug.vendor=t)},[R,(a(!0),o(h,null,c(e.vendors,t=>(a(),o("option",{key:t.name,value:t.name},u(t.name),9,Y))),128))],512),[[k,e.newDrug.vendor]]),z,n(l("input",{type:"text",placeholder:"Pack Price",class:"mt-1 w-100","onUpdate:modelValue":s[8]||(s[8]=t=>e.newDrug.price=t)},null,512),[[p,e.newDrug.price]]),X,n(l("input",{type:"number",placeholder:"Enter Quantity",class:"mt-1 w-100","onUpdate:modelValue":s[9]||(s[9]=t=>e.newDrug.quantity=t)},null,512),[[p,e.newDrug.quantity]]),i(v,{loading:e.adding,class:"w-100 mt-4"},{default:r(()=>[d(" Add ")]),_:1},8,["loading"])],32)]),_:1},8,["modelValue"]),i(b,{modelValue:e.editModal,"onUpdate:modelValue":s[22]||(s[22]=t=>e.editModal=t),heading:"Edit vendor"},{default:r(()=>[l("form",{onSubmit:s[21]||(s[21]=M((...t)=>m.editDrug&&m.editDrug(...t),["prevent"]))},[Z,l("div",_,[l("label",null,[n(l("input",{type:"radio",name:"drugtype",value:"Tab","onUpdate:modelValue":s[12]||(s[12]=t=>e.selectedDrug.type=t)},null,512),[[g,e.selectedDrug.type]]),d(" Tab ")]),l("label",x,[n(l("input",{type:"radio",name:"drugtype",value:"Capsule","onUpdate:modelValue":s[13]||(s[13]=t=>e.selectedDrug.type=t)},null,512),[[g,e.selectedDrug.type]]),d(" Capsule ")]),l("label",ee,[n(l("input",{type:"radio",name:"drugtype",value:"Syrup","onUpdate:modelValue":s[14]||(s[14]=t=>e.selectedDrug.type=t)},null,512),[[g,e.selectedDrug.type]]),d(" Syrup ")]),l("label",le,[n(l("input",{type:"radio",name:"drugtype",value:"Suppository","onUpdate:modelValue":s[15]||(s[15]=t=>e.selectedDrug.type=t)},null,512),[[g,e.selectedDrug.type]]),d(" Suppository ")])]),te,n(l("input",{type:"text",placeholder:"Drug Name",class:"mt-1 w-100","onUpdate:modelValue":s[16]||(s[16]=t=>e.selectedDrug.name=t)},null,512),[[p,e.selectedDrug.name]]),se,n(l("input",{type:"text",placeholder:"weight in mg",class:"mt-1 w-100","onUpdate:modelValue":s[17]||(s[17]=t=>e.selectedDrug.weight=t)},null,512),[[p,e.selectedDrug.weight]]),ne,n(l("select",{"onUpdate:modelValue":s[18]||(s[18]=t=>e.selectedDrug.vendor=t)},[de,(a(!0),o(h,null,c(e.vendors,t=>(a(),o("option",{key:t.name,value:t.name},u(t.name),9,ae))),128))],512),[[k,e.selectedDrug.vendor]]),oe,n(l("input",{type:"text",placeholder:"Pack Price",class:"mt-1 w-100","onUpdate:modelValue":s[19]||(s[19]=t=>e.selectedDrug.price=t)},null,512),[[p,e.selectedDrug.price]]),ue,n(l("input",{type:"number",placeholder:"Enter Quantity",class:"mt-1 w-100","onUpdate:modelValue":s[20]||(s[20]=t=>e.selectedDrug.quantity=t)},null,512),[[p,e.selectedDrug.quantity]]),i(v,{loading:e.editing,class:"w-100 mt-4"},{default:r(()=>[d(" Save Changes ")]),_:1},8,["loading"])],32)]),_:1},8,["modelValue"]),i(b,{modelValue:e.deleteModal,"onUpdate:modelValue":s[24]||(s[24]=t=>e.deleteModal=t),heading:"Are you sure?"},{default:r(()=>[l("p",null,[d(" Do you really want to delete? "),l("strong",null,u(e.selectedDrug.name),1)]),i(w,{class:"mt-4",onClick:m.deleteDrug,loading:e.deleting},{default:r(()=>[d("Yes")]),_:1},8,["onClick","loading"]),i(w,{class:"ml-3",color:"gray",onClick:s[23]||(s[23]=t=>e.deleteModal=!1)},{default:r(()=>[d("No")]),_:1})]),_:1},8,["modelValue"])],64)}const De=S(q,[["render",ie]]);export{De as default};
