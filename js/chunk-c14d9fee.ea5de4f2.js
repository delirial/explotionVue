(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c14d9fee"],{"06da":function(t,e,a){"use strict";var n=a("8053"),s=a.n(n);s.a},2926:function(t,e,a){},3707:function(t,e,a){"use strict";var n=a("af3f"),s=a.n(n);s.a},"4e21":function(t,e,a){"use strict";var n=a("f218"),s=a.n(n);s.a},"6b9b":function(t,e,a){"use strict";var n=a("2926"),s=a.n(n);s.a},8053:function(t,e,a){},"9c95":function(t,e,a){"use strict";var n=a("e8c6"),s=a.n(n);s.a},af3f:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("NavBar"),a("SearchBar"),a("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"flag-api"},[a("div",{staticClass:"status",class:{active:t.apiStatus}},[a("i",[a("font-awesome-icon",{attrs:{icon:"circle"}})],1)]),t._v("\n    "+t._s(t.responseTime)+"ms\n    "),a("i",[a("font-awesome-icon",{attrs:{icon:"server"}}),t._v("API State\n    ")],1)]),t._l(t.users,function(e){return a("div",{key:e.id},[1==e.id?a("i",[t._v("User: "+t._s(e.name))]):t._e()])})],2)},i=[],o=a("c0d6"),c={name:"Footer",props:["users"],computed:{apiStatus:function(){return o["a"].state.apiState},responseTime:function(){return o["a"].state.responseTime}}},u=c,l=(a("06da"),a("2877")),f=Object(l["a"])(u,r,i,!1,null,"19a9e0b5",null),v=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"container"},[t._m(0),a("div",{staticClass:"search-container"},[a("form",{staticClass:"search-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchUser,expression:"searchUser"}],staticClass:"search-input",attrs:{type:"text",placeholder:"ex:Title",name:"search"},domProps:{value:t.searchUser},on:{input:function(e){e.target.composing||(t.searchUser=e.target.value)}}}),a("button",{staticClass:"search-button"},[a("i",[a("font-awesome-icon",{attrs:{icon:"search"}})],1)])])]),a("div",{attrs:{id:"result"}},[a("DataGallery",{attrs:{searchQuery:t.searchUser}})],1)])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-title"},[a("h1",[t._v("Search on Database")])])}],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  "+t._s(t.searchQuery)+"\n  "),a("MovieCard",{attrs:{title:"movies[0].title"}}),t._v("\n  "+t._s(t.movies)+"\n")],1)},h=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"})},g=[],b={name:"MovieCard",props:{title:{type:String,required:!0}}},C=b,y=(a("3707"),Object(l["a"])(C,_,g,!1,null,"925058b8",null)),S=y.exports,x={name:"Gallery",data:function(){return{movies:[]}},props:{searchQuery:{type:String,required:!1}},components:{MovieCard:S},mounted:function(){this.getAllMovies()},methods:{getAllMovies:function(){var t=this;return fetch("https://api-explotion.herokuapp.com/movies/get-movies").then(function(t){return t.json()}).then(function(e){return t.setProperty(e)}).catch(function(e){return t.setProperty(e)})},getProperty:function(){return this.map(function(t){return t.title})},setProperty:function(t){this.movies=t}},computed:{getSearchQuery:function(){return this.searchQuery}}},w=x,j=Object(l["a"])(w,m,h,!1,null,"6a0d2f7a",null),k=j.exports,B={name:"SearchBar",components:{DataGallery:k},data:function(){return{searchUser:""}}},E=B,U=(a("9c95"),Object(l["a"])(E,p,d,!1,null,"2db0efea",null)),$=U.exports,M=a("d000"),O={name:"home",components:{NavBar:M["a"],SearchBar:$,Footer:v},data:function(){return{movie:{}}}},P=O,Q=(a("6b9b"),Object(l["a"])(P,n,s,!1,null,"7d7da021",null));e["default"]=Q.exports},d000:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{},[n("nav",{staticClass:"navbar"},[n("div",{staticClass:"logo-container"},[n("span",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("d090"),height:"24px",width:"24px",alt:"logo"}})])],1),n("span",[t._v("Super Movie DataBase")])]),n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-state"},[n("div",{staticClass:"login-caps"},[n("router-link",{staticClass:"sign-button",attrs:{to:"/login",tag:"button"}},[t._v("Sign In")])],1),t.userState?n("div",{staticClass:"user-logo"},[n("i",[n("font-awesome-icon",{attrs:{icon:"circle"}})],1)]):t._e()])])])])},s=[],r=a("c0d6"),i={name:"NavBar",computed:{userState:function(){return r["a"].state.userLogged}}},o=i,c=(a("4e21"),a("2877")),u=Object(c["a"])(o,n,s,!1,null,"3dc830df",null);e["a"]=u.exports},d090:function(t,e,a){t.exports=a.p+"img/movie.58681752.png"},e8c6:function(t,e,a){},f218:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c14d9fee.ea5de4f2.js.map