import{a as U}from"./chunk-J7R6RLGR.js";import{d as J,m as R}from"./chunk-B5FPS3WI.js";import{m as H}from"./chunk-NHASWBP3.js";import{aa as V,ca as P}from"./chunk-BHTLUV7Z.js";import{$d as F,Ca as m,Cb as v,Da as g,Ib as _,Ka as C,Lc as E,Mc as h,Ob as r,Qb as k,Qc as S,Rb as L,ac as s,ae as N,bc as l,dc as M,ec as I,gc as d,ie as W,jc as f,lc as a,me as j,nb as T,pd as D,qb as c,qd as y,re as $,ud as O,vb as b,wc as w,xc as u,yd as z,zc as x}from"./chunk-T7DNR3P7.js";var A=(t,i,e,n,o,p)=>({width:t,height:i,minWidth:e,minHeight:n,borderRadius:o,background:p}),Y=(t,i,e,n,o)=>({width:t,height:i,minWidth:e,minHeight:n,borderRadius:o});function Z(t,i){if(t&1&&(s(0,"div",2),u(1),l()),t&2){let e=a();r("ngStyle",h(2,A,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px",e.backgroundColor)),c(),x(" ",e.firstLetter,`
`)}}function ee(t,i){if(t&1){let e=d();s(0,"img",5),f("error",function(){m(e);let o=a(2);return g(o.onError())}),l()}if(t&2){let e=a(2);r("src",e.src,T)("ngStyle",E(3,Y,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px"))("alt",e.firstLetter)}}function te(t,i){if(t&1&&(s(0,"div",2),u(1),l()),t&2){let e=a(2);r("ngStyle",h(2,A,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px",e.backgroundColor)),c(),x(" ",e.firstLetter," ")}}function ie(t,i){if(t&1&&_(0,ee,1,9,"img",3)(1,te,2,9,"div",4),t&2){let e=a();r("ngIf",!e.isError),c(),r("ngIf",e.isError)}}var q=class t{src="";name="";size=35;radius=3;backgroundColor="#1890ff";firstLetter="";isError=!1;constructor(){}ngOnInit(){this.src||(this.generateColor(),this.getFirstLetter())}generateColor(){this.backgroundColor=`linear-gradient(45deg, #fff, ${J()} 41%)`}getFirstLetter(){this.name&&(this.firstLetter=R(this.name)[0].toUpperCase())}onError(){this.isError=!0,this.generateColor(),this.getFirstLetter()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-logo"]],inputs:{src:"src",name:"name",size:"size",radius:"radius"},decls:3,vars:2,consts:[["img",""],["class","circle common-icon",3,"ngStyle",4,"ngIf","ngIfElse"],[1,"circle","common-icon",3,"ngStyle"],["class","icon common-icon","draggable","false","loading","lazy",3,"src","ngStyle","alt","error",4,"ngIf"],["class","circle common-icon",3,"ngStyle",4,"ngIf"],["draggable","false","loading","lazy",1,"icon","common-icon",3,"error","src","ngStyle","alt"]],template:function(e,n){if(e&1&&_(0,Z,2,9,"div",1)(1,ie,2,2,"ng-template",null,0,S),e&2){let o=w(2);r("ngIf",!n.src)("ngIfElse",o)}},dependencies:[z,y,O],styles:['.icon[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;pointer-events:none;background-color:#eee;border-radius:3px;object-fit:cover;transition:all .12s linear}.icon[_ngcontent-%COMP%]:after{content:"" attr(alt);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1890ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}.circle[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;font-size:18px}.common-icon[_ngcontent-%COMP%]{transition:all .1s linear}'],changeDetection:0})};function ne(t,i){if(t&1){let e=d();s(0,"div",3),f("click",function(o){let p=m(e).$implicit,G=a();return g(G.jumpService.goUrl(o,p.url))}),u(1),l()}if(t&2){let e=i.$implicit,n=a();L("background-color: "+(n.tagMap[e.id]&&n.tagMap[e.id].color)),k("cursor-pointer",e.url),c(),x(" ",n.tagMap[e.id]&&n.tagMap[e.id].name," ")}}function oe(t,i){if(t&1){let e=d();s(0,"div",7),f("click",function(o){m(e);let p=a(2);return g(p.openEditWebMoal(o))}),l()}}function re(t,i){if(t&1){let e=d();s(0,"div",8),f("click",function(o){m(e);let p=a(2);return g(p.openMoveWebModal(o))}),l()}}function ae(t,i){if(t&1){let e=d();s(0,"div",9),f("click",function(o){m(e);let p=a(2);return g(p.confirmDel(o))}),l()}}function ce(t,i){if(t&1&&(M(0),_(1,oe,1,0,"div",4)(2,re,1,0,"div",5)(3,ae,1,0,"div",6),I()),t&2){let e=a();c(),r("ngIf",e.isLogin||e.permissions.edit),c(),r("ngIf",e.isLogin),c(),r("ngIf",e.isLogin||e.permissions.del)}}var B=class t{constructor(i){this.jumpService=i}data=[];action=!1;onDelete=new C;onMove=new C;onEdit=new C;$t=$;isLogin=F;tagMap=j;permissions=N(W);handleClick(i){i.stopPropagation(),i.preventDefault()}openEditWebMoal(i){this.handleClick(i),this.onEdit.emit()}confirmDel(i){this.handleClick(i),this.onDelete.emit()}openMoveWebModal(i){this.handleClick(i),this.onMove.emit()}static \u0275fac=function(e){return new(e||t)(b(U))};static \u0275cmp=v({type:t,selectors:[["tag-list"]],inputs:{data:"data",action:"action"},outputs:{onDelete:"onDelete",onMove:"onMove",onEdit:"onEdit"},decls:3,vars:2,consts:[[1,"tagbox"],["class","tag-item",3,"cursor-pointer","style","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"tag-item",3,"click"],["class","tag-item cursor-pointer tag-action","style","background-color: #1f883d","nz-icon","","nzType","edit","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action","style","background-color: #108ee9","nz-icon","","nzType","swap","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action bg-red-500","nz-icon","","nzType","delete","nzTheme","outline","nzOkType","danger",3,"click",4,"ngIf"],["nz-icon","","nzType","edit","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#1f883d",3,"click"],["nz-icon","","nzType","swap","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#108ee9",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline","nzOkType","danger",1,"tag-item","cursor-pointer","tag-action","bg-red-500",3,"click"]],template:function(e,n){e&1&&(s(0,"div",0),_(1,ne,2,5,"div",1)(2,ce,4,3,"ng-container",2),l()),e&2&&(c(),r("ngForOf",n.data),c(),r("ngIf",n.action))},dependencies:[z,D,y,P,V,H],styles:[".tagbox[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.tag-item[_ngcontent-%COMP%]{padding:0 6px;border-radius:2px;font-size:12px;display:flex;align-items:center;transition:all .1s linear;color:#fff;min-height:15px}.tag-item[_ngcontent-%COMP%]:hover{opacity:.8}.tag-action[_ngcontent-%COMP%]{display:none}"]})};export{q as a,B as b};
