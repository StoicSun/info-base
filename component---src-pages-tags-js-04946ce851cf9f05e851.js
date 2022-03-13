(self.webpackChunkinfo_base=self.webpackChunkinfo_base||[]).push([[159],{9713:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},6132:function(e,t,a){"use strict";var s=a(5318);t.__esModule=!0,t.default=void 0;var n=s(a(1506)),i=s(a(5354)),d=s(a(9713)),r=s(a(7294)),c=s(a(5697)),l=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,(0,d.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return r.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(r.default.Component);l.propTypes={children:c.default.func.isRequired};var o=l;t.default=o},3071:function(e,t,a){"use strict";var s=a(5318)(a(6132));t.L=s.default},507:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7294),n=a(1597),i=a(396),d=a(3071);function r(){var e=document.querySelector("body").className,t=(0,s.useState)("dark"===e),n=t[0],r=t[1];return s.createElement(d.L,null,(function(e){var t=e.theme,d=e.toggleTheme;return s.createElement("button",{className:"w-7 h-5 md:w-10 md:h-10",onClick:function(e){"dark"===t?(d("light"),r(!1)):(d("dark"),r(!0))}},s.createElement("div",{className:n?"invert p-[2px] md:p-2 bg-pink-600 rounded-full drop-shadow":"p-[2px] md:p-2 bg-gray-100 rounded-full drop-shadow"},s.createElement(i.S,{src:"../images/sun-set.svg",alt:"theme toggle",__imageData:a(5944)})))}))}var c=function(e){var t=e.isIndex;return s.createElement("nav",{className:"mt-6 md:mt-8 -ml-8 md:-ml-[15px] mb-8"},s.createElement("ul",{className:"relative flex justify-evenly md:justify-start"},s.createElement("li",{className:"md:pr-8 list-none"},s.createElement(n.rU,{to:"/",className:"text-sm md:text-base text-slate-700 dark:text-slate-500"},"Home")),s.createElement("li",{className:"md:pr-8 list-none"},s.createElement(n.rU,{to:"/dummy",className:"text-sm md:text-base text-slate-700 dark:text-slate-500"},"About Me")),s.createElement("li",{className:"md:pr-8 list-none"},s.createElement(n.rU,{to:"/all-pages",className:"text-sm md:text-base text-slate-700 dark:text-slate-500"},"All Pages")),s.createElement("li",{className:"md:pr-8 list-none"},s.createElement(n.rU,{to:"/tags",className:"text-sm md:text-base text-slate-700 dark:text-slate-500"},"Tags")),s.createElement("li",{className:t?"list-none fixed right-2 top-12 md:right-24 md:top-6":"list-none absolute top-[3.5rem] right-1 md:absolute md:top-[-1px] md:right-0"},s.createElement(r,null)),t?s.createElement("li",{className:"list-none fixed right-2 top-2 md:right-10 md:top-6 w-7 h-5 md:w-10 md:h-10"},s.createElement("a",{href:"https://github.com/StoicSun/info-base",target:"_blank",rel:"noreferrer"},s.createElement(i.S,{src:"../images/github.svg",alt:"github logo",__imageData:a(7329)}))):""))},l=function(e){var t=e.showBanner,d=e.fixFooter,r=e.pageTitle,l=e.children,o=(0,n.K2)("3159585216");return s.createElement("div",{className:"mx-4 md:m-auto max-w-[550px] text-text-main"},s.createElement("title",null,o.site.siteMetadata.title," - ",r),t?s.createElement("header",{className:"w-72 mt-4"},s.createElement(i.S,{alt:"Info Base",src:"../images/heading.svg",__imageData:a(6892)}),s.createElement("p",{className:"mt-2 text-center text-slate-600 dark:text-slate-400"},"A site to collect my information and sometimes share it")):"",s.createElement(c,{isIndex:t}),s.createElement("main",null,r?s.createElement("h1",{className:"text-teal-700 dark:text-teal-600 text-2xl mb-3 font-light"},">",r):"",l),s.createElement("footer",{className:d?"w-[17rem] py-6 fixed bottom-0":"pt-24 pb-4 bottom-0"},s.createElement("p",{className:"block text-center text-gray-600 dark:text-gray-500 text-sm"},"©",(new Date).getFullYear()," Suraj Das")))}},1325:function(e,t,a){"use strict";a.r(t);var s=a(7294),n=a(1597),i=a(507);t.default=function(e){var t=e.data.allMdx.group;return s.createElement(i.Z,{pageTitle:"Tags",showBanner:!1,fixFooter:!0},s.createElement("ul",{className:"m-3"},t.map((function(e){return s.createElement("li",{key:e.fieldValue,className:"pt-[2px] dark:list-none"},s.createElement(n.rU,{to:"../pages/tags/"+e.fieldValue},e.fieldValue," (",e.totalCount,")"))}))))}},6892:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/50a63/heading.svg","srcSet":"/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/145c5/heading.svg 155w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/17e4d/heading.svg 310w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/50a63/heading.svg 619w","sizes":"(min-width: 619px) 619px, 100vw"},"sources":[{"srcSet":"/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/46a8a/heading.webp 155w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/11515/heading.webp 310w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/abe99/heading.webp 619w","type":"image/webp","sizes":"(min-width: 619px) 619px, 100vw"}]},"width":619,"height":257}')},5944:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/info-base/static/60b21078d177e1be07e5ea9014b1dc27/fa2e6/sun-set.svg","srcSet":"/info-base/static/60b21078d177e1be07e5ea9014b1dc27/d5dda/sun-set.svg 114w,\\n/info-base/static/60b21078d177e1be07e5ea9014b1dc27/6f31e/sun-set.svg 228w,\\n/info-base/static/60b21078d177e1be07e5ea9014b1dc27/fa2e6/sun-set.svg 455w","sizes":"(min-width: 455px) 455px, 100vw"},"sources":[{"srcSet":"/info-base/static/60b21078d177e1be07e5ea9014b1dc27/1b6a5/sun-set.webp 114w,\\n/info-base/static/60b21078d177e1be07e5ea9014b1dc27/37da9/sun-set.webp 228w,\\n/info-base/static/60b21078d177e1be07e5ea9014b1dc27/d34bf/sun-set.webp 455w","type":"image/webp","sizes":"(min-width: 455px) 455px, 100vw"}]},"width":455,"height":455}')},7329:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#08b8f8","images":{"fallback":{"src":"/info-base/static/bf25293e728d4c30843e39fdedd512da/43dd2/github.svg","srcSet":"/info-base/static/bf25293e728d4c30843e39fdedd512da/a2464/github.svg 18w,\\n/info-base/static/bf25293e728d4c30843e39fdedd512da/9385c/github.svg 35w,\\n/info-base/static/bf25293e728d4c30843e39fdedd512da/43dd2/github.svg 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/info-base/static/bf25293e728d4c30843e39fdedd512da/4f7ad/github.webp 18w,\\n/info-base/static/bf25293e728d4c30843e39fdedd512da/dbb7e/github.webp 35w,\\n/info-base/static/bf25293e728d4c30843e39fdedd512da/299bc/github.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')}}]);
//# sourceMappingURL=component---src-pages-tags-js-04946ce851cf9f05e851.js.map