(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{aaa1:function(t,n,e){"use strict";e.r(n);var r=e("7a23"),u=Object(r["e"])("hr",null,null,-1),c=Object(r["e"])("br",null,null,-1),o=Object(r["e"])("hr",null,null,-1),i=Object(r["e"])("br",null,null,-1),s=Object(r["e"])("br",null,null,-1),b=Object(r["e"])("br",null,null,-1);function l(t,n,e,l,a,p){return Object(r["q"])(),Object(r["d"])(r["a"],null,[u,Object(r["e"])("p",null,"Count : "+Object(r["y"])(p.count),1),Object(r["e"])("p",null,"cartCount : "+Object(r["y"])(p.cartCount),1),Object(r["e"])("button",{type:"button",onClick:n[0]||(n[0]=function(){return p.increment&&p.increment.apply(p,arguments)})},"Increment"),c,Object(r["e"])("button",{type:"button",onClick:n[1]||(n[1]=function(){return p.increment2&&p.increment2.apply(p,arguments)})},"Increment2"),Object(r["e"])("button",{type:"button",onClick:n[2]||(n[2]=function(){return p.getFromS&&p.getFromS.apply(p,arguments)})},"서버로부터"),o,Object(r["g"])(" 사용자정보 : "+Object(r["y"])(p.userInfo)+" ",1),i,Object(r["g"])(" ID : "+Object(r["y"])(p.userInfo.id)+" ",1),s,Object(r["g"])(" PWD : "+Object(r["y"])(p.userInfo.pwd)+" ",1),b,Object(r["e"])("button",{type:"button",onClick:n[3]||(n[3]=function(){return p.userInfoInsert&&p.userInfoInsert.apply(p,arguments)})},"사용자정보주입")],64)}var a={computed:{count:function(){return this.$store.state.count},cartCount:function(){return this.$store.getters.cartCount},userInfo:function(){return this.$store.state.user}},methods:{increment:function(){this.$store.commit("increment",0)},increment2:function(){this.$store.dispatch("increment",5)},userInfoInsert:function(){this.$store.commit("user",{id:"park",pwd:"1234"})},getFromS:function(){this.$store.dispatch("getFromServe","test")}}},p=e("6b0d"),f=e.n(p);const j=f()(a,[["render",l]]);n["default"]=j},f820:function(t,n,e){"use strict";e.r(n);var r=e("7a23"),u={class:"about"},c=Object(r["e"])("h1",null,"This is an about page",-1),o=[c];function i(t,n){return Object(r["q"])(),Object(r["d"])("div",u,o)}var s=e("6b0d"),b=e.n(s);const l={},a=b()(l,[["render",i]]);n["default"]=a}}]);
//# sourceMappingURL=about.ca27d50e.js.map