"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8179],{3348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(5893),s=t(1151);t(4866),t(5162);const o={title:"Consensus",sidebar_position:1,slug:"/cf661a9f-09e0-4bc3-8248-bf0e545f0418"},i=void 0,r={id:"What-is-KIRA/Backend---SEKAI/Consensus",title:"Consensus",description:"Tendermint",source:"@site/tabs/Learn/What-is-KIRA/Backend---SEKAI/Consensus.mdx",sourceDirName:"What-is-KIRA/Backend---SEKAI",slug:"/cf661a9f-09e0-4bc3-8248-bf0e545f0418",permalink:"/learn/cf661a9f-09e0-4bc3-8248-bf0e545f0418",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/cf661a9f-09e0-4bc3-8248-bf0e545f0418&page-local=what-is-kira/backend---sekai/consensus.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Consensus",sidebar_position:1,slug:"/cf661a9f-09e0-4bc3-8248-bf0e545f0418"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/learn/bd45c7be-937d-4648-a162-5574b6a1c23e"},next:{title:"Governance",permalink:"/learn/aa3b3aee-8e8d-4c5d-bb2c-3f4bf2462afa"}},l={},c=[{value:"Tendermint",id:"f82263dd7b3a455bb49cf5292b3f30df",level:2},{value:"Governance-curated Consensus Node Set",id:"1e2b19cfb65f434ba3c2d2b848c9f549",level:2},{value:"Multi-bonded Proof of Stake",id:"38c624fbdc324bd093974d2abb46c689",level:2}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"f82263dd7b3a455bb49cf5292b3f30df",children:"Tendermint"}),"\n",(0,a.jsxs)(n.p,{children:["SEKAI is a \u201cserver application\u201d deriving from Tendermint a consistent PoS\xa0",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Byzantine_fault_tolerance",children:"BFT"}),"\xa0(Proof of Stake Byzantine Fault Tolerant) consensus algorithm, meaning that it can tolerate up to 1/3 faulty nodes. It provides instant finality which minimizes the likelihood of forks at the consensus layer, making it suitable for high-speed RollApps."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["For more information regarding Tendermint, visit the following link. ",(0,a.jsx)(n.a,{href:"https://docs.tendermint.com/v0.34/",children:"https://docs.tendermint.com/v0.34/"})]})}),"\n",(0,a.jsx)(n.h2,{id:"1e2b19cfb65f434ba3c2d2b848c9f549",children:"Governance-curated Consensus Node Set"}),"\n",(0,a.jsx)(n.p,{children:"KIRA has customized Tendermint to establish a strong and simple governance-curated system for managing its Consensus node set. Through this mechanism, network governance exercises direct control over Consensus node inclusion and removal. Only candidates meeting specific criteria\u2014such as proof of individuality, community engagement, and adherence to the network's Code of Conduct\u2014are qualified to participate in consensus and governance roles. Unlike permissionless models with a fixed number of committee members, SEKAI's validator set composition is dynamically adjustable, enabling the eviction of malicious nodes or the regulation of block speed to maintain network integrity and performance."}),"\n",(0,a.jsx)(n.p,{children:"SEKAI's Consensus node set expands through the actions of its active members, governed by a principle of inclusivity with no upper limit on the number of nodes. This ensures that the network can scale dynamically while adjusting block production speeds to accommodate Consensus nodes worldwide, regardless of their geographical locations or the quality of their hardware and networking capabilities. Candidates seeking to join must have their KIRA addresses officially recognized as \u2018validators\u2019, a distinction awarded through governance proposals that are submitted and voted on exclusively by existing Consensus nodes. These proposals evaluate the candidate\u2019s commitment to and compliance with the network's standards such as the Code of Conduct. This process guarantees that the growth of the Consensus node set is not only self-sustained but also strictly adheres to SEKAI\u2019s ethos, ensuring optimal security and performance across its expanding infrastructure."}),"\n",(0,a.jsx)(n.p,{children:"By prioritizing adherence to community values over wealth status, KIRA aims to be the first inclusive PoS network that combines human alignment alongside assets at stake to secure the consensus. By subsidizing governance members and Consensus nodes through the Universal Basic Income (UBI), KIRA makes it possible to guarantee the sustainability of hardware operations and their continuous alignment with the long-term network goals without depending on exponentially inflating the KEX token supply and wealth redistribution only to the hands of a small set of privileged nodes and stakeholders."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["For a comprehensive overview of SEKAI's governance mechanism, including its structure, roles, and permissions, visit the ",(0,a.jsx)(n.a,{href:"/learn/aa3b3aee-8e8d-4c5d-bb2c-3f4bf2462afa",children:"Governance"})," page."]})}),"\n",(0,a.jsx)(n.h2,{id:"38c624fbdc324bd093974d2abb46c689",children:"Multi-bonded Proof of Stake"}),"\n",(0,a.jsx)(n.p,{children:"Proof-of-stake is a Sybil resistance mechanism that complements blockchain consensus protocols. In a proof-of-stake system, Consensus nodes are required to stake the chain's native asset as slashable collateral. PoS bolsters the security of the chain by aligning the Consensus nodes' economic interests with those of the network. Since not all Consensus nodes can afford a large number of assets at stake, \u201cdelegated staking\u201d is often used to increase the \u201ctrust\u201d in the network Consensus node set by allowing anyone to put the tokens at the risk of slashing in the hands of nodes they trust."}),"\n",(0,a.jsx)(n.p,{children:"KIRA iterates upon this mechanism with its Multi-Bonded Proof-of-Stake. Any assets whitelisted by governance, including those not issued on SEKAI, may be staked to Consensus nodes, in addition to the native asset. There are no limitations on the types of assets that can be staked, such as NFTs, RWA, LP tokens, and stablecoins. However, SEKAI maintains the relevancy of its native asset by ensuring a minimum allocation of 50% of block and fee rewards, a figure that governance can adjust."}),"\n",(0,a.jsx)(n.p,{children:"In SEKAI, block production operates on an equal round-robin mechanism. This is distinct from conventional PoS systems, where the chance to produce a block is proportional to stake size; thus, SEKAI effectively treats all nodes as if they had the same stake amount. This approach extends to on-chain governance, which operates on a per-capita basis as well, ensuring equitable influence on network decisions among all participants."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Unlike traditional PoS systems, block production in KIRA is separate from onchain governance. For more details on governance, visit the ",(0,a.jsx)(n.a,{href:"/learn/aa3b3aee-8e8d-4c5d-bb2c-3f4bf2462afa",children:"Governance"})," page."]})}),"\n",(0,a.jsx)(n.p,{children:"To form a secure, scalable foundation for complex economic activity, the base layer should natively support the liquidity of all staked assets. Multi-asset staking is necessary to scale both security and liquidity available within the network in an increasingly multichain world. By allowing chain governance to whitelist any asset that it recognizes to hold fundamental value, KIRA attracts liquidity from all spheres of crypto to assume a productive role in its network, thereby presenting a strong value proposition to retain and grow on-chain liquidity through natively supported Liquid Staking Derivatives (LSD). This unlocks the potential for frictionless integration of multichain LSDs and restaking-powered DeFi while decreasing the systematic risk of any single external (non-native) LSD protocol failure."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/learn/5b32eede-3889-4f8e-baf5-0f0dc9179a6b",children:"Rewards and Incentives Structure"})," page discusses economic incentives for consensus nodes and their delegators."]})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(6905);const s={tabItem:"tabItem_Ymn6"};var o=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7294),s=t(6905),o=t(2466),i=t(6550),r=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:s}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=c??p;return f({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=r[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(k,{...e,...n})]})}function x(e){const n=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(7294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);