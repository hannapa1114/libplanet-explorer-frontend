(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{327:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(499),l=t(184),o=t(370),c=t(491),s=t(406),u=t(375),d=t(372),m=t(373),f=function(e){var n=e.txs,t=[{key:"columnId",name:"Id",fieldName:"id",minWidth:50,maxWidth:300,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.id;return r.a.createElement(i.a,{href:"../transaction/?"+n},n)}},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:50,maxWidth:250,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(e){var n=e.signer;return r.a.createElement(i.a,{href:"../account/?"+n},n)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.timestamp;return r.a.createElement(m.a,{timestamp:n})}},{key:"columnActionNumber",name:"Action #",minWidth:20,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(e){return r.a.createElement(r.a.Fragment,null,e.actions?e.actions.length:"--")}}];return r.a.createElement(c.a,{items:n,columns:t,selectionMode:s.b.none,getKey:function(e){return e.id},setKey:"set",layoutMode:u.e.justified,isHeaderVisible:!0,onItemInvoked:function(e){return Object(l.navigate)("../transaction/?"+e.id)}})};n.default=function(e){var n=e.location,t=Object(o.a)(n)[0];return r.a.createElement(d.a,{variables:{hash:t}},function(e){var n=e.data,a=e.loading,l=e.error;if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Loading…"));if(l)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Failed to load ",t," - ",JSON.stringify(l.message)));var o=n.blockQuery.block;if(!o)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"No such block: ",r.a.createElement("code",null,t)));var c="../account/?"+o.miner;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Index"),r.a.createElement("dd",null,o.index),r.a.createElement("dt",null,"Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,o.hash)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,r.a.createElement("code",null,o.nonce)),r.a.createElement("dt",null,"Miner"),r.a.createElement("dd",null,r.a.createElement(i.a,{href:c},r.a.createElement("code",null,o.miner))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,r.a.createElement(m.a,{timestamp:o.timestamp})),r.a.createElement("dt",null,"State Root Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,o.stateRootHash)),r.a.createElement("dt",null,"Previous hash"),r.a.createElement("dd",null,o.previousBlock?r.a.createElement(i.a,{href:"./?"+o.previousBlock.hash},r.a.createElement("code",null,o.previousBlock.hash)):"N/A"),r.a.createElement("dt",null,"Difficulty"),r.a.createElement("dd",null,o.difficulty),r.a.createElement("dt",null,"Transactions"),o.transactions.length>0?r.a.createElement(f,{txs:o.transactions}):r.a.createElement("dd",null,r.a.createElement("i",null,"There is no transactions in this block."))))})}},370:function(e,n,t){"use strict";t.d(n,"a",function(){return i});t(185);var a=t(1),r=t(184);function i(e){return[Object(a.useMemo)(function(){return e.search.substr(1)},[e]),Object(a.useCallback)(function(n){var t=e.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(n?"?"+n:""))},[e,r.navigate])]}},372:function(e,n,t){"use strict";t.d(n,"b",function(){return b}),t.d(n,"a",function(){return k}),t.d(n,"c",function(){return $}),t.d(n,"d",function(){return S});t(46);var a=t(186),r=t.n(a),i=t(1),l=t(374);t(376);function o(){var e=h(["\n    query TransactionsByAccount($involvedAddress: Address!, $offset: Int, $limit: Int) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress, desc: true, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return o=function(){return e},e}function c(){var e=h(['\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n      actions {\n        raw(encode: "base64")\n      }\n      blockRef {\n        ...BlockCommon\n      }\n    }\n  }\n}\n    ',"\n",""]);return c=function(){return e},e}function s(){var e=h(["\n    query TransactionList($signer: Address, $involvedAddress: Address, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, involvedAddress: $involvedAddress, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return s=function(){return e},e}function u(){var e=h(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      stateRootHash\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return u=function(){return e},e}function d(){var e=h(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!, $miner: Address) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs, miner: $miner) {\n      ...BlockCommon\n      miner\n      previousBlock {\n        timestamp\n      }\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return d=function(){return e},e}function m(){var e=h(["\n    fragment TransactionCommon on Transaction {\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return e},e}function f(){var e=h(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return f=function(){return e},e}function h(e,n){return n||(n=e.slice(0)),e.raw=n,e}var E=r()(f()),g=r()(m()),v=r()(d(),E),b=function(e){return i.createElement(l.b,Object.assign({query:v},e))};var y=r()(u(),E,g),k=function(e){return i.createElement(l.b,Object.assign({query:y},e))};r()(s(),g);var p=r()(c(),g,E),$=function(e){return i.createElement(l.b,Object.assign({query:p},e))};var B=r()(o(),g),S=function(e){return i.createElement(l.b,Object.assign({query:B},e))}},373:function(e,n,t){"use strict";t(9),t(10),t(5),t(18);var a=t(1),r=t.n(a);var i={hour:"2-digit",minute:"2-digit",year:"2-digit",month:"numeric",day:"numeric"};n.a=function(e){var n=e.timestamp,t=new Date(n),a=new Date;if(a.getFullYear()==t.getFullYear()&&a.getMonth()==t.getMonth()&&a.getDate()==t.getDate()){var l=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(i,["year","month","day"]);return r.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},t.toLocaleString(void 0,l))}return r.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},t.toLocaleString(void 0,i))}}}]);
//# sourceMappingURL=component---src-subpages-block-tsx-8cc388544100dd3828c3.js.map