import{a as Te,b as Ie,c as Ve,d as Ee}from"./chunk-7JNE2XGS.js";import{b as ke,d as Me,e as be}from"./chunk-NJOATG7Y.js";import{c as ce,e as me,f as pe}from"./chunk-ANMK2OPF.js";import{a as F,b as Q,c as q,d as U,f as Y,g as G}from"./chunk-XHSQ4H5S.js";import{f as ze,i as ve}from"./chunk-TR3Q4VYD.js";import"./chunk-AHW6LOOR.js";import{a as he,b as Se}from"./chunk-WEPSWEHP.js";import{Ob as _e,Pb as ue,Rb as de,Sb as ge,Wb as fe,Zb as ye,aa as H,ac as Ce,ca as J,kc as xe,la as ae,na as le,oa as O,pc as we,ra as se}from"./chunk-OT7PLIOT.js";import{$d as ie,Ca as m,Cb as M,Da as p,Dc as x,Ec as z,Fc as v,Fd as S,Ib as f,Ka as R,Ld as X,Md as N,Ob as a,Qb as E,Ud as Z,Xd as ee,Yd as te,_d as ne,ac as s,ae as oe,bc as c,be as L,cc as C,dc as B,de as w,ec as $,g as D,gc as y,ge as re,jc as _,lc as r,nb as W,qb as n,qc as A,qd as T,rc as K,sc as j,te as h,vb as k,xc as u,yc as b,yd as I,zc as d}from"./chunk-XQRLIXXM.js";var Pe=["input"];function De(i,l){if(i&1){let e=y();s(0,"div",6)(1,"input",7),v("ngModelChange",function(t){m(e);let g=r(2);return z(g.imageToken,t)||(g.imageToken=t),p(t)}),_("keyup",function(t){m(e);let g=r(2);return p(g.onKey(t))}),c()()}if(i&2){let e=r(2);n(),x("ngModel",e.imageToken)}}function Re(i,l){if(i&1&&(s(0,"p",8),u(1),s(2,"a",9),u(3),c()()),i&2){let e=r(2);n(),d(" ",e.$t("_getToken"),""),n(2),d(" ",e.$t("_readDoc"),"")}}function We(i,l){if(i&1){let e=y();B(0),s(1,"p"),u(2),c(),s(3,"input",3,0),v("ngModelChange",function(t){m(e);let g=r();return z(g.token,t)||(g.token=t),p(t)}),_("keyup",function(t){m(e);let g=r();return p(g.onKey(t))}),c(),f(5,De,2,1,"div",4)(6,Re,4,2,"p",5),$()}if(i&2){let e=r();n(2),b(e.$t("_inputTokenMsg")),n(),x("ngModel",e.token),a("placeholder",e.isSelfDevelop?"Password":"Token"),n(2),a("ngIf",!e.isSelfDevelop&&e.showImgToken),n(),a("ngIf",!e.isSelfDevelop)}}var V=class i{constructor(l){this.message=l;this.showImgToken=le()}visible=!1;onCancel=new R;input;$t=h;isSelfDevelop=w;token="";imageToken="";submitting=!1;showImgToken=!1;ngAfterViewInit(){this.inputFocus()}handleCancel(){this.onCancel.emit()}inputFocus(){setTimeout(()=>{this.input?.nativeElement?.focus()},300)}onKey(l){l.code==="Enter"&&this.login()}login(){return D(this,null,function*(){let l=this.token.trim();if(!l){this.message.error(h("_pleaseInputToken"));return}if(this.showImgToken){let e=this.imageToken.trim();if(!e){this.message.error("Please enter the image TOKEN");return}try{this.submitting=!0;let o=S.imageRepoUrl.split("/").at(-2),t=yield O(e,S.imageRepoUrl);if((t?.data?.login??t?.data?.username)!==o){this.message.error("Image Bad credentials");return}ne(e)}catch{}finally{this.submitting=!1}}this.submitting=!0;try{let e=yield O(l);if(!w&&(e?.data?.login??e?.data?.username)!==ae)throw this.message.error("Bad credentials"),new Error("Bad credentials");ee(l);try{se("image").finally(()=>{this.message.success(h("_tokenVerSuc")),ie().finally(()=>{window.location.reload()})})}catch{te(),this.submitting=!1}}catch{this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)(k(we))};static \u0275cmp=M({type:i,selectors:[["app-login"]],viewQuery:function(e,o){if(e&1&&A(Pe,5),e&2){let t;K(t=j())&&(o.input=t.first)}},inputs:{visible:"visible"},outputs:{onCancel:"onCancel"},decls:2,vars:3,consts:[["input",""],[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzOkLoading"],[4,"nzModalContent"],["autofocus","","nz-input","","autofocus","",3,"ngModelChange","keyup","ngModel","placeholder"],["class","mt-4",4,"ngIf"],["class","!mt-2",4,"ngIf"],[1,"mt-4"],["nz-input","","autofocus","","placeholder","Image token",3,"ngModelChange","keyup","ngModel"],[1,"!mt-2"],["href","https://github.com/xjh22222228/nav#%E9%83%A8%E7%BD%B2","target","_blank"]],template:function(e,o){e&1&&(s(0,"nz-modal",1),v("nzVisibleChange",function(g){return z(o.visible,g)||(o.visible=g),g}),_("nzOnCancel",function(){return o.handleCancel()})("nzOnOk",function(){return o.login()}),f(1,We,7,5,"ng-container",2),c()),e&2&&(x("nzVisible",o.visible),a("nzTitle",o.$t("_authLogin"))("nzOkLoading",o.submitting))},dependencies:[I,T,xe,fe,ye,Ce,be,Me,ke,ve,ze],styles:[".prefix-icon[_ngcontent-%COMP%]{width:20px;height:20px;pointer-events:none}"]})};function Be(i,l){if(i&1){let e=y();s(0,"li",5),_("click",function(){m(e);let t=r(2);return p(t.goRoute("/system/component"))}),u(1),c()}if(i&2){let e=r(2);a("nzSelected",e.currentMenu==="component"),n(),d(" ",e.$t("_components")," ")}}function $e(i,l){if(i&1){let e=y();s(0,"li",5),_("click",function(){m(e);let t=r(2);return p(t.goRoute("/system/bookmarkExport"))}),u(1),c()}if(i&2){let e=r(2);a("nzSelected",e.currentMenu==="bookmarkExport"),n(),d(" ",e.$t("_bookmarkExport")," ")}}function Ae(i,l){if(i&1){let e=y();s(0,"li",5),_("click",function(){m(e);let t=r(2);return p(t.goRoute("/system/collect"))}),u(1),c()}if(i&2){let e=r(2);a("nzSelected",e.currentMenu==="collect"),n(),d(" ",e.$t("_userCollect")," ")}}function Ke(i,l){if(i&1){let e=y();s(0,"li",5),_("click",function(){m(e);let t=r(2);return p(t.goRoute("/system/config"))}),u(1),c()}if(i&2){let e=r(2);a("nzSelected",e.currentMenu==="config"),n(),d(" ",e.$t("_confInfo")," ")}}function je(i,l){if(i&1&&(s(0,"span",19),u(1),c()),i&2){let e=r(2);n(),b(e.date)}}function Fe(i,l){i&1&&C(0,"nz-spin",20),i&2&&a("nzSize","large")}function Qe(i,l){if(i&1){let e=y();s(0,"nz-layout",2)(1,"nz-layout")(2,"nz-sider",3),v("nzCollapsedChange",function(t){m(e);let g=r();return z(g.isCollapsed,t)||(g.isCollapsed=t),p(t)}),s(3,"ul",4)(4,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/web"))}),u(5),c(),s(6,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/setting"))}),u(7),c(),s(8,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/tag"))}),u(9),c(),s(10,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/search"))}),u(11),c(),f(12,Be,2,2,"li",6),s(13,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/bookmark"))}),u(14),c(),f(15,$e,2,2,"li",6)(16,Ae,2,2,"li",6),s(17,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/auth"))}),u(18),c(),f(19,Ke,2,2,"li",6),s(20,"li",5),_("click",function(){m(e);let t=r();return p(t.goRoute("/system/info"))}),u(21),c()()(),s(22,"nz-layout",7)(23,"nz-content",8)(24,"div",9)(25,"button",10),_("click",function(){m(e);let t=r();return p(t.toggleCollapsed())}),C(26,"nz-icon",11),c(),s(27,"button",12),_("click",function(){m(e);let t=r();return p(t.goBack())}),u(28),c(),s(29,"button",13),_("click",function(){m(e);let t=r();return p(t.logout())}),u(30),c(),C(31,"img",14),s(32,"a",15),C(33,"img",16),c(),f(34,je,2,1,"span",17),c(),f(35,Fe,1,1,"nz-spin",18),C(36,"router-outlet"),c()()()()}if(i&2){let e=r();n(2),E("hide",e.isCollapsed),x("nzCollapsed",e.isCollapsed),a("nzTrigger",null),n(2),a("nzSelected",e.currentMenu==="web"),n(),d(" ",e.$t("_websiteMang")," "),n(),a("nzSelected",e.currentMenu==="setting"),n(),d(" ",e.$t("_systemSet")," "),n(),a("nzSelected",e.currentMenu==="tag"),n(),d(" ",e.$t("_tagSettings")," "),n(),a("nzSelected",e.currentMenu==="search"),n(),d(" ",e.$t("_searchEngines")," "),n(),a("ngIf",e.isAuthz||e.isSelfDevelop),n(),a("nzSelected",e.currentMenu==="bookmark"),n(),d(" ",e.$t("_bookmarkImport")," "),n(),a("ngIf",e.isAuthz),n(),a("ngIf",e.isAuthz||e.isSelfDevelop),n(),a("nzSelected",e.currentMenu==="auth"),n(),d(" ",e.$t("_vipAuth")," "),n(),a("ngIf",e.isSelfDevelop),n(),a("nzSelected",e.currentMenu==="info"),n(),d(" ",e.$t("_webInfo")," "),n(),E("!ml-0",e.isCollapsed),n(4),a("nzType",e.isCollapsed?"menu-unfold":"menu-fold"),n(2),d(" ",e.$t("_backHome")," "),n(2),d(" ",e.$t("_logout")," "),n(),a("src",e.currentVersionSrc,W),n(3),a("ngIf",!e.isSelfDevelop),n(),a("ngIf",e.pageLoading)}}var P=class i{constructor(l){this.router=l;re(),this.router.events.subscribe(e=>{e instanceof F?this.pageLoading=!0:(e instanceof Q||e instanceof q||e instanceof U)&&(this.pageLoading=!1)})}isSelfDevelop=w;$t=h;isLogin=L;currentVersionSrc=`https://img.shields.io/badge/current-v${X}-red.svg?longCache=true&style=flat-square`;date=S.datetime;showLoginModal=!L;currentMenu="";isAuthz=!!Z();pageLoading=!1;isCollapsed=!!Number(localStorage.getItem(N.SYSTEM_COLLAPSED));ngOnInit(){let l=window.location.href.split("/");this.currentMenu=l.at(-1)||""}toggleCollapsed(){this.isCollapsed=!this.isCollapsed,localStorage.setItem(N.SYSTEM_COLLAPSED,String(Number(this.isCollapsed)))}goBack(){this.router.navigate(["/"],{queryParams:{_:Date.now()}})}goRoute(l,e=!1){e||this.router.navigate([l])}logout(){oe(),this.router.navigate(["/"]),setTimeout(()=>{location.reload()},26)}static \u0275fac=function(e){return new(e||i)(k(G))};static \u0275cmp=M({type:i,selectors:[["app-system"]],decls:2,vars:2,consts:[["class","system-layout",4,"ngIf"],[3,"visible"],[1,"system-layout"],["nzWidth","150px","nzTheme","light","nzCollapsible","",1,"sidebar","select-none",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],["nz-menu","","nzMode","inline",1,"sider-menu"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],[1,"inner-layout"],[1,"content"],[1,"whitespace-nowrap","overflow-x-auto","topbar"],["nz-button","","nzType","primary",3,"click"],[3,"nzType"],["nz-button","",2,"margin","0 15px 15px",3,"click"],["nz-button","","nzDanger","","nzType","primary",3,"click"],[1,"ml-2.5",3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav",1,"ml-2.5"],["class","ml-2.5",4,"ngIf"],["nzSimple","","class","fixed-center",3,"nzSize",4,"ngIf"],[1,"ml-2.5"],["nzSimple","",1,"fixed-center",3,"nzSize"]],template:function(e,o){e&1&&(f(0,Qe,37,30,"nz-layout",0),C(1,"app-login",1)),e&2&&(a("ngIf",o.isLogin),n(),a("visible",o.showLoginModal))},dependencies:[I,T,Ee,Ve,Te,Ie,pe,me,ce,ge,de,_e,ue,V,Y,Se,he,J,H],styles:[".system-layout[_ngcontent-%COMP%]{min-height:100vh}.system-layout[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]{z-index:3;position:sticky;background-color:#fff;top:0;margin-bottom:10px;padding:15px 15px 0;box-shadow:0 5px 5px #0000000d}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:0 15px 15px;background-color:#fff;height:100vh;overflow:hidden;overflow-y:auto}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     .ant-table-content{overflow:auto}.system-layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#fff}.system-layout[_ngcontent-%COMP%]   .sidebar.hide[_ngcontent-%COMP%]{width:0!important;min-width:0!important;flex:0!important}.system-layout[_ngcontent-%COMP%]   .inner-layout[_ngcontent-%COMP%]{margin-left:15px}.system-layout[_ngcontent-%COMP%]   .fixed-center[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10}"]})};export{P as default};
