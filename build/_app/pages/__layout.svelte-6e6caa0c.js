import{D as s,S as e,i as a,s as t,e as l,k as r,E as c,t as o,c as v,a as i,d as h,n,F as f,g as d,G as u,b as p,H as g,f as b,I as w,J as E,K as y,L as m,j as $,m as k,o as A,M as L,N as x,O as I,x as _,u as M,v as B}from"../chunks/vendor-a4e104ac.js";const D={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function H(s){let e,a,t,y,m,$,k,A,L,x,I,_,M,B,D,H,K,S,N,O,T,V,j,C,F,G,R;return{c(){e=l("header"),a=l("div"),t=l("a"),y=l("img"),$=r(),k=l("nav"),A=c("svg"),L=c("path"),x=r(),I=l("ul"),_=l("li"),M=l("a"),B=o("Home"),D=r(),H=l("li"),K=l("a"),S=o("About"),N=r(),O=l("li"),T=l("a"),V=o("Todos"),j=r(),C=c("svg"),F=c("path"),G=r(),R=l("div"),this.h()},l(s){e=v(s,"HEADER",{class:!0});var l=i(e);a=v(l,"DIV",{class:!0});var r=i(a);t=v(r,"A",{href:!0,class:!0});var c=i(t);y=v(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(h),r.forEach(h),$=n(l),k=v(l,"NAV",{class:!0});var o=i(k);A=f(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var u=i(A);L=f(u,"path",{d:!0,class:!0}),i(L).forEach(h),u.forEach(h),x=n(o),I=v(o,"UL",{class:!0});var p=i(I);_=v(p,"LI",{class:!0});var g=i(_);M=v(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=i(M);B=d(b,"Home"),b.forEach(h),g.forEach(h),D=n(p),H=v(p,"LI",{class:!0});var w=i(H);K=v(w,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var E=i(K);S=d(E,"About"),E.forEach(h),w.forEach(h),N=n(p),O=v(p,"LI",{class:!0});var m=i(O);T=v(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Z=i(T);V=d(Z,"Todos"),Z.forEach(h),m.forEach(h),p.forEach(h),j=n(o),C=f(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=i(C);F=f(J,"path",{d:!0,class:!0}),i(F).forEach(h),J.forEach(h),o.forEach(h),G=n(l),R=v(l,"DIV",{class:!0}),i(R).forEach(h),l.forEach(h),this.h()},h(){u(y.src,m="/mysfits-module3-final/_app/assets/svelte-logo-87df40b8.svg")||p(y,"src","/mysfits-module3-final/_app/assets/svelte-logo-87df40b8.svg"),p(y,"alt","SvelteKit"),p(y,"class","svelte-1w37loy"),p(t,"href","https://kit.svelte.dev"),p(t,"class","svelte-1w37loy"),p(a,"class","corner svelte-1w37loy"),p(L,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),p(L,"class","svelte-1w37loy"),p(A,"viewBox","0 0 2 3"),p(A,"aria-hidden","true"),p(A,"class","svelte-1w37loy"),p(M,"sveltekit:prefetch",""),p(M,"href","/"),p(M,"class","svelte-1w37loy"),p(_,"class","svelte-1w37loy"),g(_,"active","/"===s[0].path),p(K,"sveltekit:prefetch",""),p(K,"href","/about"),p(K,"class","svelte-1w37loy"),p(H,"class","svelte-1w37loy"),g(H,"active","/about"===s[0].path),p(T,"sveltekit:prefetch",""),p(T,"href","/todos"),p(T,"class","svelte-1w37loy"),p(O,"class","svelte-1w37loy"),g(O,"active","/todos"===s[0].path),p(I,"class","svelte-1w37loy"),p(F,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),p(F,"class","svelte-1w37loy"),p(C,"viewBox","0 0 2 3"),p(C,"aria-hidden","true"),p(C,"class","svelte-1w37loy"),p(k,"class","svelte-1w37loy"),p(R,"class","corner svelte-1w37loy"),p(e,"class","svelte-1w37loy")},m(s,l){b(s,e,l),w(e,a),w(a,t),w(t,y),w(e,$),w(e,k),w(k,A),w(A,L),w(k,x),w(k,I),w(I,_),w(_,M),w(M,B),w(I,D),w(I,H),w(H,K),w(K,S),w(I,N),w(I,O),w(O,T),w(T,V),w(k,j),w(k,C),w(C,F),w(e,G),w(e,R)},p(s,[e]){1&e&&g(_,"active","/"===s[0].path),1&e&&g(H,"active","/about"===s[0].path),1&e&&g(O,"active","/todos"===s[0].path)},i:E,o:E,d(s){s&&h(e)}}}function K(s,e,a){let t;return y(s,D,(s=>a(0,t=s))),[t]}class S extends e{constructor(s){super(),a(this,s,K,H,t,{})}}function N(s){let e,a,t,c,f,u,g,E,y,D,H;e=new S({});const K=s[1].default,N=m(K,s,s[0],null);return{c(){$(e.$$.fragment),a=r(),t=l("main"),N&&N.c(),c=r(),f=l("footer"),u=l("p"),g=o("visit "),E=l("a"),y=o("kit.svelte.dev"),D=o(" to learn SvelteKit"),this.h()},l(s){k(e.$$.fragment,s),a=n(s),t=v(s,"MAIN",{class:!0});var l=i(t);N&&N.l(l),l.forEach(h),c=n(s),f=v(s,"FOOTER",{class:!0});var r=i(f);u=v(r,"P",{});var o=i(u);g=d(o,"visit "),E=v(o,"A",{href:!0,class:!0});var p=i(E);y=d(p,"kit.svelte.dev"),p.forEach(h),D=d(o," to learn SvelteKit"),o.forEach(h),r.forEach(h),this.h()},h(){p(t,"class","svelte-1nw0d5b"),p(E,"href","https://kit.svelte.dev"),p(E,"class","svelte-1nw0d5b"),p(f,"class","svelte-1nw0d5b")},m(s,l){A(e,s,l),b(s,a,l),b(s,t,l),N&&N.m(t,null),b(s,c,l),b(s,f,l),w(f,u),w(u,g),w(u,E),w(E,y),w(u,D),H=!0},p(s,[e]){N&&N.p&&(!H||1&e)&&L(N,K,s,s[0],H?I(K,s[0],e,null):x(s[0]),null)},i(s){H||(_(e.$$.fragment,s),_(N,s),H=!0)},o(s){M(e.$$.fragment,s),M(N,s),H=!1},d(s){B(e,s),s&&h(a),s&&h(t),N&&N.d(s),s&&h(c),s&&h(f)}}}function O(s,e,a){let{$$slots:t={},$$scope:l}=e;return s.$$set=s=>{"$$scope"in s&&a(0,l=s.$$scope)},[l,t]}class T extends e{constructor(s){super(),a(this,s,O,N,t,{})}}export{T as default};