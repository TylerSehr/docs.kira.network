"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[814],{7121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(5893),n=a(1151);a(4866),a(5162);const o={title:"Virtual Finality Gadget",sidebar_position:1,slug:"/bba461ae-7c67-4b66-8f1b-c51c887f2671"},r=void 0,s={id:"What-is-KIRA/Layer-2/Virtual-Finality-Gadget",title:"Virtual Finality Gadget",description:"The Virtual Finality Gadget (VFG) is a programmable finality mechanism that grants each application on KIRA the ability to establish its own verification and consensus rules. It divides application logic into execution (operated by Executors) and verification (overseen by Fishermen) components. VFG allows developers to customize their finality logic, such as choosing an optimistic model of execution (rollups - valid by default), pessimistic (rolldowns - invalid until verified), or any bespoke verification logic, even allowing for the creation of recursive appchains and human judgment by a defined set of network actors. VFG\u2019s ability to support non-deterministic verification binaries makes it particularly useful for complex, blockchain-less, Web2-scale applications, such as AI and gaming as well as makes it impossible for an attacker to predict if his attack attempt would be successful as the verification rules can be customized by each Fisherman individually.",source:"@site/tabs/Learn/What-is-KIRA/Layer-2/Virtual-Finality-Gadget.mdx",sourceDirName:"What-is-KIRA/Layer-2",slug:"/bba461ae-7c67-4b66-8f1b-c51c887f2671",permalink:"/learn/bba461ae-7c67-4b66-8f1b-c51c887f2671",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/bba461ae-7c67-4b66-8f1b-c51c887f2671&page-local=what-is-kira/layer-2/virtual-finality-gadget.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Virtual Finality Gadget",sidebar_position:1,slug:"/bba461ae-7c67-4b66-8f1b-c51c887f2671"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/learn/9a5aaea6-1b50-41fe-9c54-cd035a26d0a5"},next:{title:"Building on KIRA",permalink:"/learn/a113064a-eca8-4e1a-8f72-a3ac6fcb4f5f"}},l={},c=[{value:"How It Works",id:"ff43eea4d8e2429780e1edad7145a61b",level:3}];function u(e){const t={h3:"h3",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Virtual Finality Gadget (VFG) is a programmable finality mechanism that grants each application on KIRA the ability to establish its own verification and consensus rules. It divides application logic into execution (operated by Executors) and verification (overseen by Fishermen) components. VFG allows developers to customize their finality logic, such as choosing an optimistic model of execution (rollups - valid by default), pessimistic (rolldowns - invalid until verified), or any bespoke verification logic, even allowing for the creation of recursive appchains and human judgment by a defined set of network actors. VFG\u2019s ability to support non-deterministic verification binaries makes it particularly useful for complex, blockchain-less, Web2-scale applications, such as AI and gaming as well as makes it impossible for an attacker to predict if his attack attempt would be successful as the verification rules can be customized by each Fisherman individually."}),"\n",(0,i.jsx)(t.h3,{id:"ff43eea4d8e2429780e1edad7145a61b",children:"How It Works"}),"\n",(0,i.jsx)(t.p,{children:"In KIRA, RollApp are simply packaged binaries within Docker containers. This ensures security by isolating dApps from the host OS to prevent malware risks and enabling precise management of resources like CPU, GPU, RAM, and disk space per each individual application."}),"\n",(0,i.jsx)(t.p,{children:"Each application is architecturally divided into two distinct components: the execution logic and the verification logic, each encapsulated within its own Docker container. The execution logic container, managed by Executors (who MUST be ACTIVE validators), is responsible for running the application's code such as state machine or zkVM, while the verification logic container, overseen by Fishermen (who are assigned to said role or have a sufficient stake), assesses the integrity of the changes that one of the dApp Executors (the Leader) is proposing to the KIRA base layer."}),"\n",(0,i.jsx)(t.p,{children:"From a high-level perspective, Docker containers are executed and monitored by Consensus nodes within KIRA, facilitated by RYOKAI for operational management and coordination. The containers interact with the network through local INTERX nodes (serving as decentralized APIs or DAPI/DA) and SEKAI nodes (connecting to the KIRA blockchain), ensuring seamless integration and communication within the ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"The role of the execution container is to accept input sequenced by INTERX into one of the ports and execute commands from that input according to the code embedded within the container. Since there might be many executors (Multi-Party Computation) one of them is round-robin elected as leader who can then publish state root - publishing the hash of the new app database state and proposing changes to dApp account balances on the KIRA base layer. The application lifecycle has a form of forever changing states (sessions) from one KIRA base layer block to another proposed by a single leader. The proposed changes must then be approved by the verifiers through a process in which a threshold of approvals must be reached. If even a single Fisherman disagrees with the state transition the app is stopped and KIRA governance steps in to resolve the issues."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Visual representation of the example dApp execution process",src:a(4986).Z+"",width:"1161",height:"592"})}),"\n",(0,i.jsx)(t.p,{children:"The VFG does not enforce any specific way of evaluating the shift from one application state to another. Instead, it empowers developers and all who participate in the verification of the application execution process to customize the method in which a binary verification outcome is produced \u2014 either 'yes' or 'no' \u2014 to affirm or challenge the transition's validity. This approach presents a strong contrast to current rollup systems, where the verification process relies on an execution binary or container that must remain identical and public among all Executors of a specific application. In the case of the verification container, although a single shared and public version must be provided by developers, possible bounties for catching issues provide an additional economic incentive for Fishermen to customize the verification container."}),"\n",(0,i.jsx)(t.p,{children:"We have to assume that in the future there will always be better and more efficient ways to trustlessly verify computations. Today that might be something as simple as re-execution or zkVM and using GPUs to generate ZK proofs. Tomorrow, it might be something completely different. The VFG protocol was created so that application developers can long-term support their applications without being locked into a single framework or protocol. Our intention is also to signal that Fishermen should not blindly trust developer teams, especially in an era of ever-present bugs and stegomalware. These can turn even seemingly deterministic code into unpredictable chaos, against which no one has yet proposed a reliable method to protect users."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Visual representation of the example dApp execution process",src:a(4923).Z+"",width:"1634",height:"822"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var i=a(6905);const n={tabItem:"tabItem_Ymn6"};var o=a(5893);function r(e){let{children:t,hidden:a,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(n.tabItem,r),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var i=a(7294),n=a(6905),o=a(2466),r=a(6550),s=a(469),l=a(1980),c=a(7392),u=a(12);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(5893);function y(e){let{className:t,block:a,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=s[a].value;n!==i&&(c(t),r(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},4986:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/319785771-75f434ada59642501ced598ca43d2996.png"},4923:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/422487827-6652d0807ee6ec2c6e40bc12547d0739.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var i=a(7294);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);