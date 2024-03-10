"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3725],{9878:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=s(5893),r=s(1151),a=s(4866),t=s(5162);const c={title:"Keys & accounts",sidebar_position:0,slug:"/31613d97-abfb-4911-b17a-0c83cdba58a7"},d=void 0,o={id:"Backend---SEKAI/Command-Line-Interface/Modules/BaseApp/Keys-&-accounts",title:"Keys & accounts",description:"An account in the Cosmos SDK, consists of a pair of a public key PubKey and a private key PrivKey. The PubKey can be used to generate various Addresses, which identify users and other parties in the application and are associated with messages to identify the sender. The PrivKey is used to generate digital signatures to prove that an Address associated with the PrivKey has approved a specific message.",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/BaseApp/Keys-&-accounts.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/BaseApp",slug:"/31613d97-abfb-4911-b17a-0c83cdba58a7",permalink:"/docs/31613d97-abfb-4911-b17a-0c83cdba58a7",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/31613d97-abfb-4911-b17a-0c83cdba58a7&page-local=backend---sekai/command-line-interface/modules/baseapp/keys-&-accounts.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Keys & accounts",sidebar_position:0,slug:"/31613d97-abfb-4911-b17a-0c83cdba58a7"},sidebar:"defaultSidebar",previous:{title:"Evidence module",permalink:"/docs/bd4cce67-2cee-4d9f-9b81-e5643d130438"},next:{title:"Bank",permalink:"/docs/04e8b755-d259-40f9-b66c-ddf5223c66fa"}},l={},h=[{value:"Keyring",id:"8a741e374186404b85f2d68fc0e2a672",level:3},{value:"CLI Syntax &amp; Examples",id:"44798a61b8f749ae87a9a72c100ad055",level:2},{value:"Transactions",id:"67708b3e7e8f472b95c3ed04ad88e90c",level:2},{value:"Creating an Account",id:"b0376794dcd34d20be7c2fdbce645294",level:4},{value:"Deleting an Account",id:"c5ce2ab22e8442daad9098283b8e8f46",level:4},{value:"Recovering an Account Using Mnemonic",id:"6f2516dff83e4005835ca6da620fbc50",level:4},{value:"Queries",id:"0e3940d917c543f9bb11928e2b016cd5",level:2},{value:"Retrieve Key Information by Name or Address",id:"adb811fab06c477abbaf56c4b3cc21a6",level:4},{value:"Governance",id:"3bee0a67d26f4c2999ed12de1540a07f",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["An account in the Cosmos SDK, consists of a pair of a public key ",(0,i.jsx)(n.code,{children:"PubKey"})," and a private key ",(0,i.jsx)(n.code,{children:"PrivKey"}),". The ",(0,i.jsx)(n.code,{children:"PubKey"})," can be used to generate various ",(0,i.jsx)(n.code,{children:"Addresses"}),", which identify users and other parties in the application and are associated with messages to identify the sender. The ",(0,i.jsx)(n.code,{children:"PrivKey"})," is used to generate digital signatures to prove that an ",(0,i.jsx)(n.code,{children:"Address"})," associated with the ",(0,i.jsx)(n.code,{children:"PrivKey"})," has approved a specific message."]}),"\n",(0,i.jsxs)(n.p,{children:['KIRA accounts only exist on the blockchain if they have a non-zero balance. This is a feature of the Cosmos SDK that helps prevent the creation of "spam" accounts that do not hold any value. All KIRA addresses are 44 characters long and are ',(0,i.jsx)(n.a,{href:"https://en.bitcoin.it/wiki/Bech32",children:"Bech32"})," encoded with a ",(0,i.jsx)(n.code,{children:"kira"})," prefix (e.g. ",(0,i.jsx)(n.code,{children:"kira1d52rts8wf508uy2sdcx4a0qxjzvqr3dsnesm4w"}),"). These accounts are derived from ",(0,i.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",children:"BIP39 mnemonic words"}),", which must be kept safe by the account holder at all times. Losing access to the mnemonic or revealing its contents will result in permanent and irrecoverable loss of funds."]}),"\n",(0,i.jsx)(n.p,{children:"KIRA network defines 3 types of addresses that specify a context where an account is used:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AccAddress"}),"\xa0identifies users (the sender of a\xa0",(0,i.jsx)(n.code,{children:"message"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ValAddress"}),"\xa0identifies consensus node operators (a.k.a validators)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ConsAddress"}),"\xa0identifies consensus nodes that are participating in consensus. Consensus nodes are derived using the\xa0",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ed25519"})}),"\xa0curve."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"8a741e374186404b85f2d68fc0e2a672",children:"Keyring"}),"\n",(0,i.jsxs)(n.p,{children:["Like in every Cosmos-based network, Private/Public keys are stored and managed by using an object called a\xa0",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/basics/accounts#keyring",children:(0,i.jsx)(n.code,{children:"Keyring"})})," which default implementation comes from the third-party\xa0",(0,i.jsx)(n.a,{href:"https://github.com/99designs/keyring",children:"99designs/keyring"}),'\xa0library. The private key can be stored in different "backends", such as a file or the operating system\'s own key storage system. The keyring allows users to manage their keys in a secure and convenient way, and can be integrated with various backend storage options to suit the needs of the user. These backends can be specified in the CLI using the ',(0,i.jsx)(n.code,{children:"--keyring-backend"})," flag (cf. )."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"os"})," backend: This backend relies on operating system-specific defaults to handle key storage securely. It is the default option and is designed to meet users' most common needs and provide a comfortable experience without compromising on security."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"file"})," backend: This backend stores the keyring encrypted within the app's configuration directory. It requires a password each time it is accessed, which may result in multiple prompts."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"pass"})," backend: This backend uses the pass utility to manage on-disk encryption of keys' sensitive data and metadata. Keys are stored inside gpg encrypted files within app-specific directories."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"kwallet"})," backend: This backend uses KDE Wallet Manager, which comes installed by default on the GNU/Linux distributions that ships KDE as default desktop environment."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"test"})," backend: This backend is a password-less variation of the file backend and is provided for testing purposes only. It stores keys unencrypted on disk and is not recommended for use in production environments."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"memory"})," backend: This backend stores keys in memory, which are immediately deleted after the program has exited. It is provided for testing purposes only and is not recommended for use in production environments."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"44798a61b8f749ae87a9a72c100ad055",children:"CLI Syntax & Examples"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,i.jsx)(n.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,i.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,i.jsx)(n.em,{children:"documentation for more details."})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"$SIGNER"})})," ",(0,i.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,i.jsx)(n.em,{children:"and"})," ",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,i.jsx)(n.em,{children:"section"})]})}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(t.Z,{value:"transactions",label:"Transactions",children:[(0,i.jsx)(n.h2,{id:"67708b3e7e8f472b95c3ed04ad88e90c",children:"Transactions"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"keys add"})}),(0,i.jsx)(n.th,{children:"Add or recover an encrypted private key."})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"keys delete"})}),(0,i.jsx)(n.td,{children:"Delete a key from the keyring."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"keys recover"})}),(0,i.jsx)(n.td,{children:"Recover a key using a mnemonic."})]})]})]}),(0,i.jsx)(n.h4,{id:"b0376794dcd34d20be7c2fdbce645294",children:"Creating an Account"}),(0,i.jsxs)(n.p,{children:["To create a new key in the keyring, use the ",(0,i.jsx)(n.code,{children:"add"})," subcommand and provide the desired account key name as an argument. You can also specify the keyring backend to use by setting the ",(0,i.jsx)(n.code,{children:"$FLAGS_TX"})," environment variable or by manually using the ",(0,i.jsx)(n.code,{children:"--keyring-backend"})," flag. This is important as it determines where the private/public keypair will be stored and how it will be managed. A ",(0,i.jsx)(n.code,{children:"--multisig"}),"\xa0flag can also be provided to group multiple keys together to create a multisig key."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flags"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$MULTISIG"}),": List of key names for constructing a legacy multisig key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$MULTISIGTHRESHOLD"}),": K out of N required signatures for multisig."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$NOSORT"}),": Keys are taken in the order supplied if true."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$PUBLICKEY"}),": Saves key info to file from a JSON format public key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$INTERACTIVE"}),": Interactively prompt for BIP39 passphrase and mnemonic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$USELEDGER"}),": Store a reference to a private key on a Ledger device."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$RECOVER"}),": Recover an existing key using a seed phrase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$NOBACKUP"}),": Don't print out the seed phrase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$DRYRUN"}),": Perform action without adding key to local keystore."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$HDPATH"}),": Manual HD Path derivation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$COINTYPE"}),": Coin type number for HD derivation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$ACCOUNT"}),": Account number for HD derivation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$INDEX"}),": Address index number for HD derivation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$KEYALGORITHM"}),": Key signing algorithm for generating keys."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$ACCOUNT_NAME"}),": The account key name."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sekaid keys add $ACCOUNT_NAME $FLAGS_TX\n"})}),(0,i.jsx)(n.h4,{id:"c5ce2ab22e8442daad9098283b8e8f46",children:"Deleting an Account"}),(0,i.jsxs)(n.p,{children:["To delete a key from the keyring, use the ",(0,i.jsx)(n.code,{children:"delete"})," subcommand and provide the desired account key address as an argument and specify the keyring backend to delete from by setting the ",(0,i.jsx)(n.code,{children:"$FLAGS_TX"})," environment variable or by manually using the ",(0,i.jsx)(n.code,{children:"--keyring-backend"})," flag. ",(0,i.jsx)(n.code,{children:"--force"})," flag can be specified to skip passphrase check and force key deletion unconditionally."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Removing offline or ledger keys will remove only the public key references stored locally, i.e. private keys stored in a ledger device cannot be deleted with the CLI."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flags"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$YES"}),": Skip confirmation prompt when deleting keys."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$FORCE"}),": Remove the key unconditionally without asking for the passphrase."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sekaid keys delete $ACCOUNT_NAME $FLAGS_TX --force --yes\n"})}),(0,i.jsx)(n.h4,{id:"6f2516dff83e4005835ca6da620fbc50",children:"Recovering an Account Using Mnemonic"}),(0,i.jsxs)(n.p,{children:["To recover an account using its respective mnemonic, use the ",(0,i.jsx)(n.code,{children:"add"})," subcommand with the ",(0,i.jsx)(n.code,{children:"\u2014recover"})," flag and provide the desired account key name as an argument."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Args"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$ACCOUNT_MNEMONIC"}),": The account\u2019s mnemonic."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'yes "$ACCOUNT_MNEMONIC" | sekaid keys add $ACCOUNT_NAME $FLAGS_TX --recover\n'})})]}),(0,i.jsxs)(t.Z,{value:"queries",label:"Queries",children:[(0,i.jsx)(n.h2,{id:"0e3940d917c543f9bb11928e2b016cd5",children:"Queries"}),(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"keys show"})}),(0,i.jsx)(n.th,{children:"Display key details by name or address."})]})})}),(0,i.jsx)(n.h4,{id:"adb811fab06c477abbaf56c4b3cc21a6",children:"Retrieve Key Information by Name or Address"}),(0,i.jsxs)(n.p,{children:["To display key details, use the ",(0,i.jsx)(n.code,{children:"show"}),' subcommand and provide the account key name or address. This command can handle multiple names or addresses, creating an ephemeral multisig key named "multi" with the keys provided and the specified multisig threshold.']}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flags"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$ACCOUNT_KEY"}),": The account key name or address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$BECHPREFIX"}),": The Bech32 prefix encoding for a key (e.g., acc, val, cons)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$ADDRESS"}),": Output the address only."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$PUBLICKEY"}),": Output the public key only."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$DEVICE"}),": Output the address in a ledger device."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$MULTISIGTHRESHOLD"}),": K out of N required signatures for a multisig key."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bashCopy code\nsekaid keys show $ACCOUNT_KEY $FLAGS_QR | jq\n"})})]}),(0,i.jsxs)(t.Z,{value:"governance",label:"Governance",children:[(0,i.jsx)(n.h2,{id:"3bee0a67d26f4c2999ed12de1540a07f",children:"Governance"}),(0,i.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>t});s(7294);var i=s(6905);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function t(e){let{children:n,hidden:s,className:t}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,t),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>k});var i=s(7294),r=s(6905),a=s(2466),t=s(6550),c=s(469),d=s(1980),o=s(7392),l=s(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,t.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=u(e),[t,d]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[o,h]=m({queryString:s,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,l.Nk)(s);return[r,(0,i.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),x=(()=>{const e=o??b;return p({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{x&&d(x)}),[x]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=s(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(5893);function y(e){let{className:n,block:s,selectedValue:i,selectValue:t,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),l=e=>{const n=e.currentTarget,s=d.indexOf(n),r=c[s].value;r!==i&&(o(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:h,onClick:l,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var i=s(7294);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);