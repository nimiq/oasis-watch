var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function o(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function f(){return p("")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let b;function v(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}const C=[],j=[],z=[],$=[],k=Promise.resolve();let w=!1;function S(t){z.push(t)}let U=!1;const N=new Set;function _(){if(!U){U=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];v(e),D(e.$$)}for(v(null),C.length=0;j.length;)j.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];N.has(e)||(N.add(e),e())}z.length=0}while(C.length);for(;$.length;)$.pop()();w=!1,U=!1,N.clear()}}function D(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const O=new Set;let A;function L(t,e){t&&t.i&&(O.delete(t),t.i(e))}function T(t,e){const n=e.token={};function s(t,s,r,c){if(e.token!==n)return;e.resolved=c;let o=e.ctx;void 0!==r&&(o=o.slice(),o[r]=c);const i=t&&(e.current=t)(o);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(A={r:0,c:[],p:A},function(t,e,n,l){if(t&&t.o){if(O.has(t))return;O.add(t),A.c.push((()=>{O.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),A.r||l(A.c),A=A.p)})):e.block.d(1),i.c(),L(i,1),i.m(e.mount(),e.anchor),a=!0),e.block=i,e.blocks&&(e.blocks[s]=i),a&&_()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=x();if(t.then((t=>{v(n),s(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),s(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var r}function E(t,e){-1===t.$$.dirty[0]&&(C.push(t),w||(w=!0,k.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(r,c,o,i,u,d,p=[-1]){const m=b;v(r);const f=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:c.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let h=!1;if(f.ctx=o?o(r,c.props||{},((t,e,...n)=>{const l=n.length?n[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=l)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](l),h&&E(r,t)),e})):[],f.update(),h=!0,l(f.before_update),f.fragment=!!i&&i(f.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();c.intro&&L(r.$$.fragment),function(t,n,r,c){const{fragment:o,on_mount:i,on_destroy:a,after_update:u}=t.$$;o&&o.m(n,r),c||S((()=>{const n=i.map(e).filter(s);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(S)}(r,c.target,c.anchor,c.customElement),_()}v(m)}function F(t,e,n){const l=t.slice();return l[3]=e[n],l}function J(t,e,n){const l=t.slice();return l[3]=e[n],l}function M(t){let e,n,l={ctx:t,current:null,token:null,hasCatch:!0,pending:ht,then:B,catch:I,value:2,error:8};return T(n=t[0],l),{c(){e=d("main"),l.block.c()},m(t,n){i(t,e,n),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null},p(e,s){if(t=e,l.ctx=t,1&s&&n!==(n=t[0])&&T(n,l));else{const e=t.slice();e[2]=e[8]=l.resolved,l.block.p(e,s)}},d(t){t&&a(e),l.block.d(),l.token=null,l=null}}}function P(e){let n;return{c(){n=d("main"),n.innerHTML='<section><form action="/" method="get"><label for="id">Enter your HTLC ID:</label> \n\t\t\t\t<input type="text" size="34" name="id" id="id" required=""/> \n\t\t\t\t<button type="submit" class="svelte-1l2jitz">Search</button></form></section>'},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function I(t){let e,n,l,s,r,c,u,f,b=t[8].message+"";return{c(){e=d("section"),n=d("h1"),l=d("code"),s=p(t[1]),r=m(),c=d("section"),u=d("h2"),f=p(b),h(n,"class","htlc-id svelte-1l2jitz"),y(u,"color","crimson")},m(t,a){i(t,e,a),o(e,n),o(n,l),o(l,s),i(t,r,a),i(t,c,a),o(c,u),o(u,f)},p(t,e){2&e&&g(s,t[1]),1&e&&b!==(b=t[8].message+"")&&g(f,b)},d(t){t&&a(e),t&&a(r),t&&a(c)}}}function B(t){let e,n,l,s,r,c,u,f,y,b,v,x,C,j,z,$,k,w,S,U,N,_,D,O,A,L,T,E,H,F,J,M,P,I,B,K,G,V,W,Q,X,Y,Z,tt,et,lt,st,rt,ct,ot,it,ut,dt,ht,gt,bt,vt,xt,Ct,jt,zt,$t,kt,wt,St,Ut,Nt,_t,Dt,Ot,At,Lt,Tt,Et,Ht,Ft,Jt,Mt,Pt,It,Bt,qt,Kt,Rt,Gt,Vt,Wt,Qt,Xt,Yt,Zt,te,ee,ne,le,se,re,ce=t[2].id+"",oe=t[2].status+"",ie=t[2].asset.toUpperCase()+"",ae=t[2].amount.toFixed(2)+"",ue=t[2].asset.toUpperCase()+"",de=t[2].fee.toFixed(2)+"",pe=t[2].id+"",me=t[2].beneficiary.kty+"",fe=t[2].beneficiary.crv+"",he=yt(t[2].beneficiary.x)+"",ge=t[2].hash.algorithm.toUpperCase()+"",ye=yt(t[2].hash.value)+"",be=t[2].preimage.size+"",ve=JSON.stringify(t[2],null,2)+"",xe="settled"!==t[2].status&&q(t),Ce="pending"===t[2].status&&R(t),je="cleared"===t[2].status&&nt(t),ze="settled"===t[2].status&&at(t),$e=t[2].beneficiary.y&&pt(t);function ke(t,e){return t[2].preimage.value?ft:mt}let we=ke(t),Se=we(t);return{c(){e=d("section"),n=d("header"),l=d("h1"),s=d("code"),r=p(ce),c=m(),u=d("big"),f=d("mark"),y=d("b"),b=p(oe),v=p(" HTLC\n\t\t\t\t\t\tfor "),x=d("mark"),C=d("b"),j=p(ie),z=p(" "),$=p(ae),k=p("\n\t\t\t\t\t\t(+ "),w=p(ue),S=p(" "),U=p(de),N=p(" fee)\n\t\t\t\t\t\t"),xe&&xe.c(),_=m(),Ce&&Ce.c(),D=m(),je&&je.c(),O=m(),ze&&ze.c(),A=m(),L=d("section"),T=d("table"),E=d("thead"),E.innerHTML='<tr><th class="svelte-1l2jitz">Key</th> \n\t\t\t\t\t\t\t<th class="svelte-1l2jitz">Value</th></tr>',H=m(),F=d("tbody"),J=d("tr"),M=d("td"),M.textContent="ID",P=m(),I=d("td"),B=d("b"),K=p(pe),G=m(),V=d("tr"),W=d("td"),W.textContent="Beneficiary",Q=m(),X=d("td"),Y=d("small"),Y.textContent="Keytype:",Z=m(),tt=d("code"),et=p(me),lt=d("br"),st=m(),rt=d("small"),rt.textContent="Curve:",ct=m(),ot=d("code"),it=p(fe),ut=d("br"),dt=m(),ht=d("small"),ht.textContent="x:",gt=m(),bt=d("code"),vt=p(he),xt=d("br"),Ct=m(),$e&&$e.c(),jt=m(),zt=d("tr"),$t=d("td"),$t.textContent="Hash",kt=m(),wt=d("td"),St=d("small"),St.textContent="Algorithm:",Ut=m(),Nt=d("code"),_t=p(ge),Dt=d("br"),Ot=m(),At=d("code"),Lt=p(ye),Tt=m(),Et=d("tr"),Ht=d("td"),Ht.innerHTML="Preimage<br/>(Secret)",Ft=m(),Jt=d("td"),Mt=d("small"),Mt.textContent="Size:",Pt=m(),It=d("code"),Bt=p(be),qt=d("br"),Kt=m(),Se.c(),Rt=m(),Gt=d("br"),Vt=m(),Wt=d("section"),Qt=d("details"),Xt=d("summary"),Xt.textContent="Plain HTLC Object",Yt=m(),Zt=d("pre"),te=d("code"),ee=p(ve),ne=m(),le=d("a"),se=p("Source ↗"),h(l,"class","htlc-id svelte-1l2jitz"),h(f,"class","capitalize svelte-1l2jitz"),h(e,"class","svelte-1l2jitz"),h(M,"class","svelte-1l2jitz"),h(I,"class","svelte-1l2jitz"),h(W,"class","svelte-1l2jitz"),h(X,"class","svelte-1l2jitz"),h($t,"class","svelte-1l2jitz"),h(wt,"class","svelte-1l2jitz"),h(Ht,"class","svelte-1l2jitz"),h(Jt,"class","svelte-1l2jitz"),h(T,"class","svelte-1l2jitz"),h(L,"class","svelte-1l2jitz"),h(te,"class","svelte-1l2jitz"),h(Zt,"class","svelte-1l2jitz"),h(le,"href",re=`https://oasis.ten31.com/v1/htlc/${t[2].id}`)},m(t,a){i(t,e,a),o(e,n),o(n,l),o(l,s),o(s,r),o(n,c),o(n,u),o(u,f),o(f,y),o(y,b),o(u,v),o(u,x),o(x,C),o(C,j),o(C,z),o(C,$),o(u,k),o(u,w),o(u,S),o(u,U),o(u,N),xe&&xe.m(u,null),o(e,_),Ce&&Ce.m(e,null),o(e,D),je&&je.m(e,null),o(e,O),ze&&ze.m(e,null),i(t,A,a),i(t,L,a),o(L,T),o(T,E),o(T,H),o(T,F),o(F,J),o(J,M),o(J,P),o(J,I),o(I,B),o(B,K),o(F,G),o(F,V),o(V,W),o(V,Q),o(V,X),o(X,Y),o(X,Z),o(X,tt),o(tt,et),o(X,lt),o(X,st),o(X,rt),o(X,ct),o(X,ot),o(ot,it),o(X,ut),o(X,dt),o(X,ht),o(X,gt),o(X,bt),o(bt,vt),o(X,xt),o(X,Ct),$e&&$e.m(X,null),o(F,jt),o(F,zt),o(zt,$t),o(zt,kt),o(zt,wt),o(wt,St),o(wt,Ut),o(wt,Nt),o(Nt,_t),o(wt,Dt),o(wt,Ot),o(wt,At),o(At,Lt),o(F,Tt),o(F,Et),o(Et,Ht),o(Et,Ft),o(Et,Jt),o(Jt,Mt),o(Jt,Pt),o(Jt,It),o(It,Bt),o(Jt,qt),o(Jt,Kt),Se.m(Jt,null),i(t,Rt,a),i(t,Gt,a),i(t,Vt,a),i(t,Wt,a),o(Wt,Qt),o(Qt,Xt),o(Qt,Yt),o(Qt,Zt),o(Zt,te),o(te,ee),o(Qt,ne),o(Qt,le),o(le,se)},p(t,n){1&n&&ce!==(ce=t[2].id+"")&&g(r,ce),1&n&&oe!==(oe=t[2].status+"")&&g(b,oe),1&n&&ie!==(ie=t[2].asset.toUpperCase()+"")&&g(j,ie),1&n&&ae!==(ae=t[2].amount.toFixed(2)+"")&&g($,ae),1&n&&ue!==(ue=t[2].asset.toUpperCase()+"")&&g(w,ue),1&n&&de!==(de=t[2].fee.toFixed(2)+"")&&g(U,de),"settled"!==t[2].status?xe?xe.p(t,n):(xe=q(t),xe.c(),xe.m(u,null)):xe&&(xe.d(1),xe=null),"pending"===t[2].status?Ce?Ce.p(t,n):(Ce=R(t),Ce.c(),Ce.m(e,D)):Ce&&(Ce.d(1),Ce=null),"cleared"===t[2].status?je?je.p(t,n):(je=nt(t),je.c(),je.m(e,O)):je&&(je.d(1),je=null),"settled"===t[2].status?ze?ze.p(t,n):(ze=at(t),ze.c(),ze.m(e,null)):ze&&(ze.d(1),ze=null),1&n&&pe!==(pe=t[2].id+"")&&g(K,pe),1&n&&me!==(me=t[2].beneficiary.kty+"")&&g(et,me),1&n&&fe!==(fe=t[2].beneficiary.crv+"")&&g(it,fe),1&n&&he!==(he=yt(t[2].beneficiary.x)+"")&&g(vt,he),t[2].beneficiary.y?$e?$e.p(t,n):($e=pt(t),$e.c(),$e.m(X,null)):$e&&($e.d(1),$e=null),1&n&&ge!==(ge=t[2].hash.algorithm.toUpperCase()+"")&&g(_t,ge),1&n&&ye!==(ye=yt(t[2].hash.value)+"")&&g(Lt,ye),1&n&&be!==(be=t[2].preimage.size+"")&&g(Bt,be),we===(we=ke(t))&&Se?Se.p(t,n):(Se.d(1),Se=we(t),Se&&(Se.c(),Se.m(Jt,null))),1&n&&ve!==(ve=JSON.stringify(t[2],null,2)+"")&&g(ee,ve),1&n&&re!==(re=`https://oasis.ten31.com/v1/htlc/${t[2].id}`)&&h(le,"href",re)},d(t){t&&a(e),xe&&xe.d(),Ce&&Ce.d(),je&&je.d(),ze&&ze.d(),t&&a(A),t&&a(L),$e&&$e.d(),Se.d(),t&&a(Rt),t&&a(Gt),t&&a(Vt),t&&a(Wt)}}}function q(t){let e,n,l,s,r,c,u,f,h,y,b=new Date(t[2].expires)>new Date?"s":"d",v=new Date(t[2].expires).toLocaleString()+"",x=new Date(t[2].expires)>new Date,C=x&&K(t);return{c(){e=d("br"),n=m(),l=d("small"),s=p("expire"),r=p(b),c=m(),u=d("mark"),f=d("b"),h=p(v),y=m(),C&&C.c()},m(t,a){i(t,e,a),i(t,n,a),i(t,l,a),o(l,s),o(l,r),o(l,c),o(l,u),o(u,f),o(f,h),o(l,y),C&&C.m(l,null)},p(t,e){1&e&&b!==(b=new Date(t[2].expires)>new Date?"s":"d")&&g(r,b),1&e&&v!==(v=new Date(t[2].expires).toLocaleString()+"")&&g(h,v),1&e&&(x=new Date(t[2].expires)>new Date),x?C?C.p(t,e):(C=K(t),C.c(),C.m(l,null)):C&&(C.d(1),C=null)},d(t){t&&a(e),t&&a(n),t&&a(l),C&&C.d()}}}function K(t){let e,n,l,s=Math.floor((new Date(t[2].expires)-new Date)/1e3/60)+"";return{c(){e=p("(in "),n=p(s),l=p(" min)")},m(t,s){i(t,e,s),i(t,n,s),i(t,l,s)},p(t,e){1&e&&s!==(s=Math.floor((new Date(t[2].expires)-new Date)/1e3/60)+"")&&g(n,s)},d(t){t&&a(e),t&&a(n),t&&a(l)}}}function R(t){let e,n=t[2].clearing.options,l=[];for(let e=0;e<n.length;e+=1)l[e]=et(J(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=f()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);i(t,e,n)},p(t,s){if(1&s){let r;for(n=t[2].clearing.options,r=0;r<n.length;r+=1){const c=J(t,n,r);l[r]?l[r].p(c,s):(l[r]=et(c),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){u(l,t),t&&a(e)}}}function G(t){let e,n,l,s,r,c,u,y,b=t[3].type.toUpperCase()+"",v=t[2].clearing.status.toUpperCase()+"",x="denied"===t[2].clearing.status&&W(t),C="partial"===t[2].clearing.status&&Q(t);return{c(){e=d("h3"),n=p(b),l=p(" Clearing "),s=d("sup"),r=p(v),c=m(),x&&x.c(),u=m(),C&&C.c(),y=f(),h(e,"class","svelte-1l2jitz")},m(t,a){i(t,e,a),o(e,n),o(e,l),o(e,s),o(s,r),i(t,c,a),x&&x.m(t,a),i(t,u,a),C&&C.m(t,a),i(t,y,a)},p(t,e){1&e&&b!==(b=t[3].type.toUpperCase()+"")&&g(n,b),1&e&&v!==(v=t[2].clearing.status.toUpperCase()+"")&&g(r,v),"denied"===t[2].clearing.status?x?x.p(t,e):(x=W(t),x.c(),x.m(u.parentNode,u)):x&&(x.d(1),x=null),"partial"===t[2].clearing.status?C?C.p(t,e):(C=Q(t),C.c(),C.m(y.parentNode,y)):C&&(C.d(1),C=null)},d(t){t&&a(e),t&&a(c),x&&x.d(t),t&&a(u),C&&C.d(t),t&&a(y)}}}function V(t){let e,n,l,s=t[3].type.toUpperCase()+"";return{c(){e=d("h3"),n=p(s),l=p(" Clearing"),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),o(e,n),o(e,l)},p(t,e){1&e&&s!==(s=t[3].type.toUpperCase()+"")&&g(n,s)},d(t){t&&a(e)}}}function W(t){let e,n,l,s=t[2].clearing.detail.reason+"";return{c(){e=d("p"),n=d("b"),l=p(s),y(e,"color","red")},m(t,s){i(t,e,s),o(e,n),o(n,l)},p(t,e){1&e&&s!==(s=t[2].clearing.detail.reason+"")&&g(l,s)},d(t){t&&a(e)}}}function Q(t){let e,n,l,s,r,c=t[2].asset.toUpperCase()+"",u=t[2].clearing.detail.amount.toFixed(2)+"";return{c(){e=d("p"),n=p("Already cleared: "),l=p(c),s=m(),r=p(u)},m(t,c){i(t,e,c),o(e,n),o(e,l),o(e,s),o(e,r)},p(t,e){1&e&&c!==(c=t[2].asset.toUpperCase()+"")&&g(l,c),1&e&&u!==(u=t[2].clearing.detail.amount.toFixed(2)+"")&&g(r,u)},d(t){t&&a(e)}}}function X(t){let e,n,l,s=JSON.stringify(t[3],null,2)+"";return{c(){e=d("pre"),n=d("code"),l=p(s),h(n,"class","svelte-1l2jitz"),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),o(e,n),o(n,l)},p(t,e){1&e&&s!==(s=JSON.stringify(t[3],null,2)+"")&&g(l,s)},d(t){t&&a(e)}}}function Y(t){let e,n=t[3].description+"";return{c(){e=p(n)},m(t,n){i(t,e,n)},p(t,l){1&l&&n!==(n=t[3].description+"")&&g(e,n)},d(t){t&&a(e)}}}function Z(t){let e,n,l,s,r,c,u,f,y,b,v,x,C,j,z,$,k,w,S,U,N,_,D,O,A,L,T,E,H,F,J,M,P,I,B=t[2].asset.toUpperCase()+"",q=(t[3].amount-("partial"===t[2].clearing.status?t[2].clearing.detail.amount:0)).toFixed(2)+"",K=t[3].recipient.name+"",R=bt(t[3].recipient.iban)+"",G=t[3].recipient.bic+"",V=t[3].purpose+"",W="partial"===t[2].clearing.status&&tt();return{c(){e=d("table"),n=d("tbody"),l=d("tr"),s=d("th"),s.textContent="Amount",r=m(),c=d("td"),u=p(B),f=m(),y=p(q),b=m(),W&&W.c(),v=m(),x=d("tr"),C=d("th"),C.textContent="Name",j=m(),z=d("td"),$=p(K),k=m(),w=d("tr"),S=d("th"),S.textContent="IBAN",U=m(),N=d("td"),_=p(R),D=m(),O=d("tr"),A=d("th"),A.textContent="BIC",L=m(),T=d("td"),E=p(G),H=m(),F=d("tr"),J=d("th"),J.textContent="Purpose",M=m(),P=d("td"),I=p(V),h(s,"class","svelte-1l2jitz"),h(c,"class","svelte-1l2jitz"),h(C,"class","svelte-1l2jitz"),h(z,"class","svelte-1l2jitz"),h(S,"class","svelte-1l2jitz"),h(N,"class","svelte-1l2jitz"),h(A,"class","svelte-1l2jitz"),h(T,"class","svelte-1l2jitz"),h(J,"class","svelte-1l2jitz"),h(P,"class","svelte-1l2jitz")},m(t,a){i(t,e,a),o(e,n),o(n,l),o(l,s),o(l,r),o(l,c),o(c,u),o(c,f),o(c,y),o(c,b),W&&W.m(c,null),o(n,v),o(n,x),o(x,C),o(x,j),o(x,z),o(z,$),o(n,k),o(n,w),o(w,S),o(w,U),o(w,N),o(N,_),o(n,D),o(n,O),o(O,A),o(O,L),o(O,T),o(T,E),o(n,H),o(n,F),o(F,J),o(F,M),o(F,P),o(P,I)},p(t,e){1&e&&B!==(B=t[2].asset.toUpperCase()+"")&&g(u,B),1&e&&q!==(q=(t[3].amount-("partial"===t[2].clearing.status?t[2].clearing.detail.amount:0)).toFixed(2)+"")&&g(y,q),"partial"===t[2].clearing.status?W||(W=tt(),W.c(),W.m(c,null)):W&&(W.d(1),W=null),1&e&&K!==(K=t[3].recipient.name+"")&&g($,K),1&e&&R!==(R=bt(t[3].recipient.iban)+"")&&g(_,R),1&e&&G!==(G=t[3].recipient.bic+"")&&g(E,G),1&e&&V!==(V=t[3].purpose+"")&&g(I,V)},d(t){t&&a(e),W&&W.d()}}}function tt(t){let e;return{c(){e=p("(remaining)")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}function et(t){let e,n,l;function s(t,e){return t[2].clearing.type&&t[2].clearing.type===t[3].type?G:V}let r=s(t),c=r(t);function u(t,e){return"sepa"===t[3].type?Z:"mock"===t[3].type?Y:X}let p=u(t),f=p(t);return{c(){e=d("aside"),c.c(),n=m(),f.c(),l=m(),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),c.m(e,null),o(e,n),f.m(e,null),o(e,l)},p(t,o){r===(r=s(t))&&c?c.p(t,o):(c.d(1),c=r(t),c&&(c.c(),c.m(e,n))),p===(p=u(t))&&f?f.p(t,o):(f.d(1),f=p(t),f&&(f.c(),f.m(e,l)))},d(t){t&&a(e),c.d(),f.d()}}}function nt(t){let e,n=t[2].settlement.options,l=[];for(let e=0;e<n.length;e+=1)l[e]=it(F(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=f()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);i(t,e,n)},p(t,s){if(1&s){let r;for(n=t[2].settlement.options,r=0;r<n.length;r+=1){const c=F(t,n,r);l[r]?l[r].p(c,s):(l[r]=it(c),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){u(l,t),t&&a(e)}}}function lt(t){let e,n,l,s,r,c,u,y=t[3].type.toUpperCase()+"",b=t[2].settlement.status.toUpperCase()+"",v="denied"===t[2].settlement.status&&rt(t);return{c(){e=d("h3"),n=p(y),l=p(" Settlement "),s=d("sup"),r=p(b),c=m(),v&&v.c(),u=f(),h(e,"class","svelte-1l2jitz")},m(t,a){i(t,e,a),o(e,n),o(e,l),o(e,s),o(s,r),i(t,c,a),v&&v.m(t,a),i(t,u,a)},p(t,e){1&e&&y!==(y=t[3].type.toUpperCase()+"")&&g(n,y),1&e&&b!==(b=t[2].settlement.status.toUpperCase()+"")&&g(r,b),"denied"===t[2].settlement.status?v?v.p(t,e):(v=rt(t),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},d(t){t&&a(e),t&&a(c),v&&v.d(t),t&&a(u)}}}function st(t){let e,n,l,s=t[3].type.toUpperCase()+"";return{c(){e=d("h3"),n=p(s),l=p(" Settlement"),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),o(e,n),o(e,l)},p(t,e){1&e&&s!==(s=t[3].type.toUpperCase()+"")&&g(n,s)},d(t){t&&a(e)}}}function rt(t){let e,n,l,s=t[2].settlement.detail.reason+"";return{c(){e=d("p"),n=d("b"),l=p(s),y(e,"color","red")},m(t,s){i(t,e,s),o(e,n),o(n,l)},p(t,e){1&e&&s!==(s=t[2].settlement.detail.reason+"")&&g(l,s)},d(t){t&&a(e)}}}function ct(t){let e,n,l,s=JSON.stringify(t[3],null,2)+"";return{c(){e=d("pre"),n=d("code"),l=p(s),h(n,"class","svelte-1l2jitz"),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),o(e,n),o(n,l)},p(t,e){1&e&&s!==(s=JSON.stringify(t[3],null,2)+"")&&g(l,s)},d(t){t&&a(e)}}}function ot(e){let n,l,s;return{c(){n=d("code"),n.textContent="POST",l=p(" settlement instruction to "),s=d("code"),s.textContent="/htlc/{id}/settle"},m(t,e){i(t,n,e),i(t,l,e),i(t,s,e)},p:t,d(t){t&&a(n),t&&a(l),t&&a(s)}}}function it(t){let e,n,l;function s(t,e){return t[2].settlement.type&&t[2].settlement.type===t[3].type?lt:st}let r=s(t),c=r(t);function u(t,e){return"sepa"===t[3].type||"mock"===t[3].type?ot:ct}let p=u(t),f=p(t);return{c(){e=d("aside"),c.c(),n=m(),f.c(),l=m(),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),c.m(e,null),o(e,n),f.m(e,null),o(e,l)},p(t,o){r===(r=s(t))&&c?c.p(t,o):(c.d(1),c=r(t),c&&(c.c(),c.m(e,n))),p===(p=u(t))&&f?f.p(t,o):(f.d(1),f=p(t),f&&(f.c(),f.m(e,l)))},d(t){t&&a(e),c.d(),f.d()}}}function at(t){let e,n,l,s,r,u,f,y,b=t[2].settlement.type.toUpperCase()+"",v=t[2].settlement.status.toUpperCase()+"";function x(t,e){return"denied"===t[2].settlement.status?dt:t[2].settlement.detail?ut:void 0}let C=x(t),j=C&&C(t);return{c(){e=d("aside"),n=d("h3"),l=p(b),s=p(" Settlement\n\t\t\t\t\t\t"),r=d("sup"),u=p(v),y=m(),j&&j.c(),h(r,"class",f=c(t[2].settlement.status)+" svelte-1l2jitz"),h(n,"class","svelte-1l2jitz"),h(e,"class","svelte-1l2jitz")},m(t,c){i(t,e,c),o(e,n),o(n,l),o(n,s),o(n,r),o(r,u),o(e,y),j&&j.m(e,null)},p(t,n){1&n&&b!==(b=t[2].settlement.type.toUpperCase()+"")&&g(l,b),1&n&&v!==(v=t[2].settlement.status.toUpperCase()+"")&&g(u,v),1&n&&f!==(f=c(t[2].settlement.status)+" svelte-1l2jitz")&&h(r,"class",f),C===(C=x(t))&&j?j.p(t,n):(j&&j.d(1),j=C&&C(t),j&&(j.c(),j.m(e,null)))},d(t){t&&a(e),j&&j.d()}}}function ut(t){let e,n,l,s=JSON.stringify(t[2].settlement.detail,null,2)+"";return{c(){e=d("pre"),n=d("code"),l=p(s),h(n,"class","svelte-1l2jitz"),h(e,"class","svelte-1l2jitz")},m(t,s){i(t,e,s),o(e,n),o(n,l)},p(t,e){1&e&&s!==(s=JSON.stringify(t[2].settlement.detail,null,2)+"")&&g(l,s)},d(t){t&&a(e)}}}function dt(t){let e,n,l,s=t[2].settlement.detail.reason+"";return{c(){e=d("p"),n=d("b"),l=p(s),y(e,"color","red")},m(t,s){i(t,e,s),o(e,n),o(n,l)},p(t,e){1&e&&s!==(s=t[2].settlement.detail.reason+"")&&g(l,s)},d(t){t&&a(e)}}}function pt(t){let e,n,l,s,r=yt(t[2].beneficiary.y)+"";return{c(){e=d("small"),e.textContent="y:",n=m(),l=d("code"),s=p(r)},m(t,r){i(t,e,r),i(t,n,r),i(t,l,r),o(l,s)},p(t,e){1&e&&r!==(r=yt(t[2].beneficiary.y)+"")&&g(s,r)},d(t){t&&a(e),t&&a(n),t&&a(l)}}}function mt(e){let n;return{c(){n=d("code"),n.textContent="N/A"},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function ft(t){let e,n,l=yt(t[2].preimage.value)+"";return{c(){e=d("code"),n=p(l)},m(t,l){i(t,e,l),o(e,n)},p(t,e){1&e&&l!==(l=yt(t[2].preimage.value)+"")&&g(n,l)},d(t){t&&a(e)}}}function ht(e){let n;return{c(){n=d("section"),n.innerHTML='<h2 style="color: gray;">Loading...</h2>'},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function gt(e){let n,l,s,r,c,u,p,f;function h(t,e){return t[1]?M:P}let g=h(e),y=g(e);return{c(){n=d("header"),n.innerHTML='<nav class="svelte-1l2jitz"><a href="/">OASIS.WATCH</a> \n\n\t\t<ul><li><a href="https://nimiq.com/oasis">About OASIS</a></li></ul></nav>',l=m(),y.c(),s=m(),r=d("footer"),c=d("hr"),u=m(),p=d("p"),f=d("small"),f.textContent=`Generated ${(new Date).toISOString()}`},m(t,e){i(t,n,e),i(t,l,e),y.m(t,e),i(t,s,e),i(t,r,e),o(r,c),o(r,u),o(r,p),o(p,f)},p(t,[e]){g===(g=h(t))&&y?y.p(t,e):(y.d(1),y=g(t),y&&(y.c(),y.m(s.parentNode,s)))},i:t,o:t,d(t){t&&a(n),t&&a(l),y.d(t),t&&a(s),t&&a(r)}}}function yt(t){const e=atob(t.replace(/_/g,"/").replace(/-/g,"+"));let n="";for(let t=0;t<e.length;t++){const l=e.charCodeAt(t).toString(16);n+=2===l.length?l:"0"+l}return n.toUpperCase()}function bt(t,e=4,n=" ",l){let s="";return l&&(s=t.substr(0,l),t=t.substr(l)),t=t.replace(new RegExp(`.{${e}}`,"g"),`$&${n}`),s&&(t=`${s}${n}${t}`),t.substring(t.length-n.length)===n&&(t=t.substr(0,t.length-n.length)),t}function vt(t,e,n){let l=new Promise((t=>{})),s=new URLSearchParams(window.location.search).get("id");return s&&(s=s.replace(/\s/g,"")),s&&(l=fetch(`https://oasis.ten31.com/v1/htlc/${s}`).then((async t=>{const e=await t.json();if(!t.ok)throw new Error(`${e.status} - ${e.title}`);return e}))),[l,s]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),H(this,t,vt,gt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map