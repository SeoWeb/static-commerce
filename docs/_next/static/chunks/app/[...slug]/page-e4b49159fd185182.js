(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877,931],{4956:function(e,a,t){Promise.resolve().then(t.t.bind(t,4311,23)),Promise.resolve().then(t.bind(t,6398)),Promise.resolve().then(t.bind(t,6220)),Promise.resolve().then(t.t.bind(t,9548,23))},6398:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return StoreProvider}});var n=t(7437),r=t(2265),l=t(4033),o=t(9800),d=t(3979),u=t(4810);let i={pages:[],activePage:{titles:{en:"Home"},slugs:{en:["/"]},type:"home"},siteData:{name:"",defaultLanguage:"en",currentLanguage:"en",enabledLanguages:["en"],languageFlags:{en:"gb",et:"ee",fi:"fi",lv:"lv",lt:"lt",ru:"ru"}},general:{drawer:null,megaMenu:null,modal:null,theme:"light"},navigations:{top:[],main:[],bottom:[],footer:[]}},mergeData=(e,a)=>t=>({...t,[e]:a}),mergeSubData=(e,a,t)=>n=>({...n,[e]:{...n[e],[a]:t}}),findCurrentLanguage=(e,a,t)=>{let n=Object.keys(a.slugs||{}),r=e.defaultLanguage;for(let e=0,d=n.length;e<d;e++){var l,o;t.join(".")===(null===(l=null===(o=a.slugs)||void 0===o?void 0:o[n[e]])||void 0===l?void 0:l.join("."))&&(r=n[e])}return r},addFindByType=(e,a)=>e=>{var t,n;return null===(n=a())||void 0===n?void 0:null===(t=n.pages)||void 0===t?void 0:t.find(a=>a.type===e)},addSetActivePage=(e,a)=>a=>{e(mergeData("activePage",a))},addSetPages=(e,a)=>a=>{e(mergeData("pages",a))},addSetCurrentLanguage=(e,a)=>a=>{e(mergeSubData("siteData","currentLanguage",a))},addOpenDrawer=e=>a=>{e(mergeSubData("general","drawer",a))},addCloseDrawer=(e,a)=>()=>{e(mergeSubData("general","drawer",null))},addChangeTheme=e=>a=>{e(mergeSubData("general","theme",a))},addGetNavigations=(e,a)=>e=>{let t=a().navigations[e],n=a().siteData.currentLanguage;return t.map(e=>{let{titles:a,type:t,slugs:r}=e,l={title:a[n]||"",type:t,slug:r&&r[n]||[]};return l})},addOpenMegaMenu=e=>a=>{e(mergeSubData("general","megaMenu",a))},addCloseMegaMenu=e=>()=>{e(mergeSubData("general","megaMenu",null))},addOpenModal=e=>a=>{e(mergeSubData("general","modal",a))},addCloseModal=e=>()=>{e(mergeSubData("general","modal",null))},createSiteStateActions=(e,a)=>({findPageByType:addFindByType(e,a),setActivePage:addSetActivePage(e,a),setPages:addSetPages(e,a),setCurrentLanguage:addSetCurrentLanguage(e,a),openDrawer:addOpenDrawer(e,a),closeDrawer:addCloseDrawer(e,a),openMegaMenu:addOpenMegaMenu(e,a),closeMegaMenu:addCloseMegaMenu(e,a),openModal:addOpenModal(e,a),closeModal:addCloseModal(e,a),changeTheme:addChangeTheme(e,a),getNavigation:addGetNavigations(e,a)}),loadSubscribers=e=>{e.subscribe(e=>e.siteData.currentLanguage,(e,a)=>{"undefined"!=typeof localStorage&&(localStorage.language=e)}),e.subscribe(e=>e.general.theme,(e,a)=>{"undefined"!=typeof localStorage&&(localStorage.theme=e)})},initializeStore=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,d.M)()((0,u.XR)((a,t)=>({...i,...e,...createSiteStateActions(a,t)})));return loadSubscribers(a),a};var g=t(899);let s=o.L.Provider;function StoreProvider(e){let{pages:a,siteData:t,pageData:o,navigations:d,slug:u,children:i}=e,c=(0,l.useRouter)(),{titles:m,type:b,slugs:p}=o,f={titles:m,type:b,slugs:p},h=findCurrentLanguage(t,f,u);return(0,g.q)("StoreProvider"),(0,r.useEffect)(()=>{let e="language"in localStorage?localStorage.language:null;if(e&&e!==h){let a=null==p?void 0:p[e],t=(null==a?void 0:a.length)?a.join("/"):"/";c.push(t)}},[h,c,p]),(0,n.jsx)(s,{value:initializeStore({pages:a,activePage:f,siteData:{...t,currentLanguage:h},navigations:d}),children:i})}},6220:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return PageContent}});var n=t(7437),r=t(415),l=t.n(r);let o=l()(()=>Promise.all([t.e(582),t.e(108)]).then(t.bind(t,2298)),{loadableGenerated:{webpack:()=>[2298]}}),d=l()(()=>t.e(324).then(t.bind(t,9324)),{loadableGenerated:{webpack:()=>[9324]}}),u=l()(()=>Promise.all([t.e(306),t.e(691),t.e(607)]).then(t.bind(t,4921)),{loadableGenerated:{webpack:()=>[4921]}}),i=l()(()=>Promise.all([t.e(582),t.e(7)]).then(t.bind(t,3776)),{loadableGenerated:{webpack:()=>[3776]}}),g=l()(()=>Promise.all([t.e(582),t.e(118)]).then(t.bind(t,1654)),{loadableGenerated:{webpack:()=>[1654]}}),getComponent=e=>{let a="".concat(e.name,"-").concat(Math.floor(1e9*Math.random())),t=e.props;switch(e.name){case"general.header":return(0,n.jsx)(o,{...t},a);case"page.heading":return(0,n.jsx)(d,{...t},a);case"general.footer":return(0,n.jsx)(u,{...t},a);case"gerneral.bottom-navigation":return(0,n.jsx)(g,{...t},a);case"page.jumbotron":return(0,n.jsx)(i,{...t},a);default:return null}},renderComponents=e=>e.map(e=>getComponent(e));var s=t(899),c=t(2265);let m=l()(()=>Promise.all([t.e(582),t.e(960)]).then(t.bind(t,9358)),{loadableGenerated:{webpack:()=>[9358]}}),b=l()(()=>Promise.all([t.e(582),t.e(279)]).then(t.bind(t,3262)),{loadableGenerated:{webpack:()=>[3262]}});function PageContent(e){let{pageData:a}=e;(0,s.q)("PageContent");let[t,r]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{setTimeout(()=>{r(!0)},100)},[]),(0,n.jsxs)(n.Fragment,{children:[renderComponents(a.components),t&&(0,n.jsx)(m,{}),t&&(0,n.jsx)(b,{})]})}},9800:function(e,a,t){"use strict";t.d(a,{L:function(){return r}});var n=t(2265);let r=(0,n.createContext)(null)},899:function(e,a,t){"use strict";t.d(a,{q:function(){return useDebug}});let useDebug=e=>{console.log("".concat(e," updated"))}},9548:function(e){e.exports={theme1:"theme_theme1__tNwTG"}}},function(e){e.O(0,[715,971,864,744],function(){return e(e.s=4956)}),_N_E=e.O()}]);