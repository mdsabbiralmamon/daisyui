import{S as W,i as q,s as A,Q as w,r as p,v as d,w as m,R as B,T as k,A as f,B as _,C as $,o as Q,U as y,a as C,g as H,k as u,f as c,e as h,c as v,h as T,j as b,n as E,t as L,b as P,d as R,l as D,X as I,Y as S}from"../chunks/vendor.140da208.js";import{M as U,p as X,C as Y,a as j,r as V}from"../chunks/ClassTable.7ae24326.js";function z(i){let e,n='<div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-d9jmkr"&&(e.innerHTML=n),this.h()},h(){b(e,"class","border mockup-window border-base-300 w-full")},m(s,l){u(s,e,l)},p:E,d(s){s&&c(e)}}}function F(i){let e,n=`<div class="$$mockup-window border border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`,s,l,a,r;return{c(){e=h("pre"),s=L(n),this.h()},l(t){e=v(t,"PRE",{slot:!0});var o=P(e);s=R(o,n),o.forEach(c),this.h()},h(){b(e,"slot","html")},m(t,o){u(t,e,o),D(e,s),a||(r=I(l=V.call(null,e,{to:i[0]})),a=!0)},p(t,o){l&&S(l.update)&&o&1&&l.update.call(null,{to:t[0]})},d(t){t&&c(e),a=!1,r()}}}function G(i){let e,n='<div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-41p9od"&&(e.innerHTML=n),this.h()},h(){b(e,"class","border mockup-window bg-base-300 w-full")},m(s,l){u(s,e,l)},p:E,d(s){s&&c(e)}}}function J(i){let e,n=`<div class="$$mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`,s,l,a,r;return{c(){e=h("pre"),s=L(n),this.h()},l(t){e=v(t,"PRE",{slot:!0});var o=P(e);s=R(o,n),o.forEach(c),this.h()},h(){b(e,"slot","html")},m(t,o){u(t,e,o),D(e,s),a||(r=I(l=V.call(null,e,{to:i[0]})),a=!0)},p(t,o){l&&S(l.update)&&o&1&&l.update.call(null,{to:t[0]})},d(t){t&&c(e),a=!1,r()}}}function K(i){let e,n,s,l,a,r;return e=new Y({props:{data:[{type:"component",class:"mockup-window",desc:"Container element"}]}}),s=new j({props:{title:"window mockup with border",$$slots:{html:[F],default:[z]},$$scope:{ctx:i}}}),a=new j({props:{title:"window mockup with background color",$$slots:{html:[J],default:[G]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment),n=C(),p(s.$$.fragment),l=C(),p(a.$$.fragment)},l(t){d(e.$$.fragment,t),n=H(t),d(s.$$.fragment,t),l=H(t),d(a.$$.fragment,t)},m(t,o){m(e,t,o),u(t,n,o),m(s,t,o),u(t,l,o),m(a,t,o),r=!0},p(t,o){const g={};o&5&&(g.$$scope={dirty:o,ctx:t}),s.$set(g);const x={};o&5&&(x.$$scope={dirty:o,ctx:t}),a.$set(x)},i(t){r||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(a.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(a.$$.fragment,t),r=!1},d(t){t&&(c(n),c(l)),$(e,t),$(s,t),$(a,t)}}}function N(i){let e,n;const s=[i[1],M];let l={$$slots:{default:[K]},$$scope:{ctx:i}};for(let a=0;a<s.length;a+=1)l=w(l,s[a]);return e=new U({props:l}),{c(){p(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,r){m(e,a,r),n=!0},p(a,[r]){const t=r&2?B(s,[r&2&&k(a[1]),r&0&&k(M)]):{};r&5&&(t.$$scope={dirty:r,ctx:a}),e.$set(t)},i(a){n||(f(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){$(e,a)}}}const M={title:"Window mockup",desc:"Window mockup shows a box that looks like an operating system window.",published:!0,layout:"components"};function O(i,e,n){let s;return Q(i,X,l=>n(0,s=l)),i.$$set=l=>{n(1,e=w(w({},e),y(l)))},e=y(e),[s,e]}class te extends W{constructor(e){super(),q(this,e,O,N,A,{})}}export{te as component};
