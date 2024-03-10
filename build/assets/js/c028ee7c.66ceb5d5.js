"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2510],{3586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(5893),r=n(1151);n(4866),n(5162);const i={title:"Overview",sidebar_position:0,slug:"/70b1b18b-298d-42dc-9562-85de3c8bc42f"},o=void 0,s={id:"Middleware---INTERX/Overview",title:"Overview",description:'INTERX - "Interchain NginX", is a decentralized API and Content Availability Layer that enables access to the state of blockchain applications and L2 without relying on any third-party service providers. Decentralized middleware makes it easier to build frontend applications and eliminates the need for difficult-to-maintain light clients. Its main functions are distributed applications proxy, load balancer, replicated storage, and security gateway service for communication between the backend and front end. INTERX requires access to both the GRPC and the Tendermint RPC endpoint (Tendermint RPC) of SEKAI node.',source:"@site/tabs/Docs/Middleware---INTERX/Overview.mdx",sourceDirName:"Middleware---INTERX",slug:"/70b1b18b-298d-42dc-9562-85de3c8bc42f",permalink:"/docs/70b1b18b-298d-42dc-9562-85de3c8bc42f",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/70b1b18b-298d-42dc-9562-85de3c8bc42f&page-local=middleware---interx/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/70b1b18b-298d-42dc-9562-85de3c8bc42f"},sidebar:"defaultSidebar",previous:{title:"Network Parameter Handling",permalink:"/docs/e9523d9e-40b5-40ed-9773-7fc36af1cdcd"},next:{title:"System Requirements",permalink:"/docs/c65ccc87-599b-4ae3-9e7d-dfb95129fb77"}},l={},c=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(t.p,{children:['INTERX - "Interchain NginX", is a decentralized API and Content Availability Layer that enables access to the state of blockchain applications and L2 without relying on any third-party service providers. Decentralized middleware makes it easier to build frontend applications and eliminates the need for difficult-to-maintain light clients. Its main functions are distributed applications proxy, load balancer, replicated storage, and security gateway service for communication between the backend and front end. INTERX requires access to both the GRPC and the Tendermint RPC endpoint (',(0,a.jsx)(t.a,{href:"https://docs.tendermint.com/master/rpc/",children:(0,a.jsx)(t.code,{children:"Tendermint RPC"})}),") of SEKAI node."]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),r=n(6905),i=n(2466),o=n(6550),s=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=b(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),v=(()=>{const e=c??m;return f({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function w(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function I(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function k(e){const t=(0,h.Z)();return(0,g.jsx)(I,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(7294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);