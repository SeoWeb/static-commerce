"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{7923:function(e,a,t){t.r(a),t.d(a,{default:function(){return LanguageSwitcherModalContent}});var n=t(7437),r=t(9906),l=t(8594),s=t(4033);function LanguageSwitcherButton(e){let{language:a}=e,t=(0,l.H)(e=>e.siteData.languageFlags),g=(0,l.H)(e=>e.setCurrentLanguage),u=(0,l.H)(e=>e.closeModal),c=(0,l.H)(e=>e.activePage),o=(0,r.Z)(),i=(0,s.useRouter)(),handleLanguageSelect=e=>{var a;g(e),u();let t=null===(a=c.slugs)||void 0===a?void 0:a[e],n=(null==t?void 0:t.length)?t.join("/"):"/";i.push(n)};return(0,n.jsx)("button",{className:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",color:"gray",title:o("languages.".concat(a)),onClick:()=>handleLanguageSelect(a),children:(0,n.jsxs)("span",{className:"space-x-4 flex",children:[(0,n.jsx)("span",{className:"fi fi-".concat(t[a]," rounded-full text-xl")}),(0,n.jsx)("span",{className:"leading-5",children:o("languages.".concat(a))})]})},a)}function LanguageSwitcherModalContent(){let e=(0,r.Z)(),a=(0,l.H)(e=>e.siteData.enabledLanguages);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{className:"mb-5 text-lg font-normal text-gray-900 dark:text-white",children:e("language-switcher.title")}),(0,n.jsx)("div",{className:"flex flex-col justify-center items-center gap-4",children:a&&a.map(e=>(0,n.jsx)(LanguageSwitcherButton,{language:e},e))})]})}}}]);