import{D as s,S as e,i as a,s as t,e as l,k as r,E as c,t as o,c as i,a as v,d as h,n,F as f,g as d,G as u,b as p,H as g,f as b,I as w,J as E,K as y,L as m,j as $,m as k,o as A,M as L,N as x,O as I,x as M,u as B,v as D}from"../chunks/vendor-a4e104ac.js";const H={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function K(s){let e,a,t,y,m,$,k,A,L,x,I,M,B,D,H,K,S,_,N,O,T,V,j,C,F,G,R;return{c(){e=l("header"),a=l("div"),t=l("a"),y=l("img"),$=r(),k=l("nav"),A=c("svg"),L=c("path"),x=r(),I=l("ul"),M=l("li"),B=l("a"),D=o("Home"),H=r(),K=l("li"),S=l("a"),_=o("About"),N=r(),O=l("li"),T=l("a"),V=o("Todos"),j=r(),C=c("svg"),F=c("path"),G=r(),R=l("div"),this.h()},l(s){e=i(s,"HEADER",{class:!0});var l=v(e);a=i(l,"DIV",{class:!0});var r=v(a);t=i(r,"A",{href:!0,class:!0});var c=v(t);y=i(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(h),r.forEach(h),$=n(l),k=i(l,"NAV",{class:!0});var o=v(k);A=f(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var u=v(A);L=f(u,"path",{d:!0,class:!0}),v(L).forEach(h),u.forEach(h),x=n(o),I=i(o,"UL",{class:!0});var p=v(I);M=i(p,"LI",{class:!0});var g=v(M);B=i(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=v(B);D=d(b,"Home"),b.forEach(h),g.forEach(h),H=n(p),K=i(p,"LI",{class:!0});var w=v(K);S=i(w,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var E=v(S);_=d(E,"About"),E.forEach(h),w.forEach(h),N=n(p),O=i(p,"LI",{class:!0});var m=v(O);T=i(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Z=v(T);V=d(Z,"Todos"),Z.forEach(h),m.forEach(h),p.forEach(h),j=n(o),C=f(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=v(C);F=f(J,"path",{d:!0,class:!0}),v(F).forEach(h),J.forEach(h),o.forEach(h),G=n(l),R=i(l,"DIV",{class:!0}),v(R).forEach(h),l.forEach(h),this.h()},h(){u(y.src,m="/mysfits-module3-final/files/assets/svelte-logo-87df40b8.svg")||p(y,"src","/mysfits-module3-final/files/assets/svelte-logo-87df40b8.svg"),p(y,"alt","SvelteKit"),p(y,"class","svelte-1w37loy"),p(t,"href","https://kit.svelte.dev"),p(t,"class","svelte-1w37loy"),p(a,"class","corner svelte-1w37loy"),p(L,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),p(L,"class","svelte-1w37loy"),p(A,"viewBox","0 0 2 3"),p(A,"aria-hidden","true"),p(A,"class","svelte-1w37loy"),p(B,"sveltekit:prefetch",""),p(B,"href","/"),p(B,"class","svelte-1w37loy"),p(M,"class","svelte-1w37loy"),g(M,"active","/"===s[0].path),p(S,"sveltekit:prefetch",""),p(S,"href","/about"),p(S,"class","svelte-1w37loy"),p(K,"class","svelte-1w37loy"),g(K,"active","/about"===s[0].path),p(T,"sveltekit:prefetch",""),p(T,"href","/todos"),p(T,"class","svelte-1w37loy"),p(O,"class","svelte-1w37loy"),g(O,"active","/todos"===s[0].path),p(I,"class","svelte-1w37loy"),p(F,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),p(F,"class","svelte-1w37loy"),p(C,"viewBox","0 0 2 3"),p(C,"aria-hidden","true"),p(C,"class","svelte-1w37loy"),p(k,"class","svelte-1w37loy"),p(R,"class","corner svelte-1w37loy"),p(e,"class","svelte-1w37loy")},m(s,l){b(s,e,l),w(e,a),w(a,t),w(t,y),w(e,$),w(e,k),w(k,A),w(A,L),w(k,x),w(k,I),w(I,M),w(M,B),w(B,D),w(I,H),w(I,K),w(K,S),w(S,_),w(I,N),w(I,O),w(O,T),w(T,V),w(k,j),w(k,C),w(C,F),w(e,G),w(e,R)},p(s,[e]){1&e&&g(M,"active","/"===s[0].path),1&e&&g(K,"active","/about"===s[0].path),1&e&&g(O,"active","/todos"===s[0].path)},i:E,o:E,d(s){s&&h(e)}}}function S(s,e,a){let t;return y(s,H,(s=>a(0,t=s))),[t]}class _ extends e{constructor(s){super(),a(this,s,S,K,t,{})}}function N(s){let e,a,t,c,f,u,g,E,y,H,K;e=new _({});const S=s[1].default,N=m(S,s,s[0],null);return{c(){$(e.$$.fragment),a=r(),t=l("main"),N&&N.c(),c=r(),f=l("footer"),u=l("p"),g=o("visit "),E=l("a"),y=o("kit.svelte.dev"),H=o(" to learn SvelteKit"),this.h()},l(s){k(e.$$.fragment,s),a=n(s),t=i(s,"MAIN",{class:!0});var l=v(t);N&&N.l(l),l.forEach(h),c=n(s),f=i(s,"FOOTER",{class:!0});var r=v(f);u=i(r,"P",{});var o=v(u);g=d(o,"visit "),E=i(o,"A",{href:!0,class:!0});var p=v(E);y=d(p,"kit.svelte.dev"),p.forEach(h),H=d(o," to learn SvelteKit"),o.forEach(h),r.forEach(h),this.h()},h(){p(t,"class","svelte-1nw0d5b"),p(E,"href","https://kit.svelte.dev"),p(E,"class","svelte-1nw0d5b"),p(f,"class","svelte-1nw0d5b")},m(s,l){A(e,s,l),b(s,a,l),b(s,t,l),N&&N.m(t,null),b(s,c,l),b(s,f,l),w(f,u),w(u,g),w(u,E),w(E,y),w(u,H),K=!0},p(s,[e]){N&&N.p&&(!K||1&e)&&L(N,S,s,s[0],K?I(S,s[0],e,null):x(s[0]),null)},i(s){K||(M(e.$$.fragment,s),M(N,s),K=!0)},o(s){B(e.$$.fragment,s),B(N,s),K=!1},d(s){D(e,s),s&&h(a),s&&h(t),N&&N.d(s),s&&h(c),s&&h(f)}}}function O(s,e,a){let{$$slots:t={},$$scope:l}=e;return s.$$set=s=>{"$$scope"in s&&a(0,l=s.$$scope)},[l,t]}class T extends e{constructor(s){super(),a(this,s,O,N,t,{})}}export{T as default};
