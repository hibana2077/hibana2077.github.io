"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[278],{64:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(5680),l=a(6540);function r(e){const t=Object.assign({h1:"h1",a:"a",span:"span"},(0,n.RP)(),e.components);return l.createElement(t.h1,{id:"gradcompass"},l.createElement(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gradcompass"},l.createElement(t.span,{className:"icon icon-link"})),"GradCompass")}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},s=a(6462),o=a(2532),m=a(5093),i=a.n(m),d=a(3603),p=a(6157),E=a(5035),u=a(5196),h=a(4388),g=a(5751),y=a(5816),f=a(266),A=a(8947),k=a.n(A),x=a(6386),b=a.n(x),v=a(1583),w=a(2011),S=a(2394),C=a(9073),T=a(2888),N=a(5413),B=a(2957);function O(e){let{data:{mdx:t},children:a}=e;const{fields:{slug:{html:n,nonce:r,htmlEncrypted:c,title:m,excerpt:A,path:x,date:O,commit:P,type:j}},frontmatter:{cover:F},tableOfContents:I}=t,M=i().unix(P).format("MMM Do YYYY"),U=N.A.formatDate(O),Y=F?(0,o.c)(F):null,D=(0,T.Q6)(),G=N.A.generateFullUrl(D,x);console.log(r);const{0:J,1:L}=(0,l.useState)({locked:""!==r,failed:!1,html:n}),[R,$]=l.useState(!1),[_,z]=l.useState(""),H=()=>{$(!R)},Q=e=>{z(e)},W=()=>{if(J.locked)try{const e=b().decodeUTF8(_),t=b().decodeBase64(r),a=k().hash(e).slice(0,k().secretbox.keyLength),n=b().decodeBase64(c),l=k().secretbox.open(n,t,a),s=b().encodeUTF8(l);L({locked:!1,failed:!1,html:s})}catch(e){L({locked:!0,failed:!0,html:""})}},q=[];U&&q.push(`Posted: ${U}`),P>0&&U!==M&&q.push(`Edited: ${M}`);const K=(0,l.useContext)(C.Ay),V=(0,s.useLocation)();(0,l.useEffect)((()=>{K&&K.setState&&Object.getOwnPropertyNames(I).length&&K.setState({tableOfContents:I,pathname:V.pathname})}),[]);const X=()=>J.locked?l.createElement(d.A,{description:""},l.createElement(p.A,{fluid:!0},l.createElement(E.A,{justify:"center",type:"flex"},l.createElement(u.A,{xs:24,sm:24,md:24,lg:16,xl:12},J.failed?l.createElement(h.A,{type:"error"},"Wrong password! Please try again."):l.createElement(h.A,{type:"info"},"This article is encrypted by xsalsa20-poly1305 algorithm."),l.createElement(g.A,{style:{marginTop:"1rem"}},l.createElement(y.A,{type:R?"text":"password",value:_,placeholder:"Enter password to unlock this article.",onPressEnter:W,onChange:Q,size:"lg"}),l.createElement(g.A.Button,{onClick:H},R?l.createElement(B.A,{icon:"eye"}):l.createElement(B.A,{icon:"eye-slash"}))))))):l.createElement("article",{className:"markdown-body"},a),Z=()=>l.createElement("article",{className:"markdown-body"},a);return l.createElement(l.Fragment,null,l.createElement(S.A,{title:m,description:A,path:x,keywords:["FullStack developer","Javascript","ReactJS","NodeJS","Gatsby","technology"]}),l.createElement("div",null,l.createElement("div",{className:"marginTopTitle"},l.createElement("h1",{className:"titleSeparate"},m)),l.createElement("div",{style:{color:"var(--rs-text-tertiary)",marginBottom:"1rem"}},q.join(", ")),l.createElement(f.A,{style:{marginBottom:"1rem"}},l.createElement(f.A.Item,{as:u.A,xs:24,sm:24,md:Y?12:24,lg:Y?16:24},l.createElement(v.A,{title:"Abstract",style:{height:"100%"}},l.createElement("p",{style:{marginBottom:"0"},dangerouslySetInnerHTML:{__html:N.A.parseMarkDown(A,!0)}}))),Y?l.createElement(f.A.Item,{as:u.A,xs:24,sm:24,md:12,lg:8},l.createElement("div",{style:{height:"100%"}},l.createElement(o.G,{image:Y,title:m,alt:m}))):null),""===r?l.createElement(Z):l.createElement(X)),"posts"===j?l.createElement("div",{style:{marginTop:"2rem"}},l.createElement(w.A,{pageCanonicalUrl:G,pageId:m})):null)}function P(e){return l.createElement(O,e,l.createElement(c,e))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-academic-src-templates-post-post-jsx-content-file-path-content-portfolio-grad-compass-index-mdx-270be4d205c9c560ce21.js.map