(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{21:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r,n=a(0),s=a.n(n),o=a(6),c=a.n(o),u=a(4),i=a(16),l=a.n(i),p=a(1),d=a.n(p),f=a(2),h=a(17),L=a(3),b={inputValue:"",filterValue:"",isLoading:!1,posts:[],isLoadSuccess:!1,isLoadError:!1};!function(e){e[e.SetInputValue=0]="SetInputValue",e[e.SetFilterValue=1]="SetFilterValue",e[e.SetIsLoading=2]="SetIsLoading",e[e.LoadData=3]="LoadData",e[e.SetIsLoadSuccess=4]="SetIsLoadSuccess",e[e.SetIsLoadError=5]="SetIsLoadError"}(r||(r={}));var v=a(20),S=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://jsonplaceholder.typicode.com","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("posts"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("comments"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(d.a.mark((function e(){var t,a,r,n,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([m(),y(),I()]);case 2:return t=e.sent,a=Object(v.a)(t,3),r=a[0],n=a[1],s=a[2],o=r.map((function(e){return Object(L.a)({},e,{user:n.find((function(t){return t.id===e.userId})),comments:s.filter((function(t){return t.postId===e.id}))})})),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function e(t){var a=this;Object(h.a)(this,e),this.dispatch=void 0,this.setInputValue=function(e){a.dispatch({type:r.SetInputValue,payload:{inputValue:e}})},this.setFilterValue=function(e){a.dispatch({type:r.SetFilterValue,payload:{filterValue:e}})},this.setIsLoading=function(e){return a.dispatch({type:r.SetIsLoading,payload:{isLoading:e}})},this.setIsLoadSuccess=function(e){return a.dispatch({type:r.SetIsLoadSuccess,payload:{isLoadSuccess:e}})},this.setIsLoadError=function(e){return a.dispatch({type:r.SetIsLoadError,payload:{isLoadError:e}})},this.loadData=function(){return console.log("Works here"),function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Not working here"),t(a.setIsLoading(!0)),e.prev=2,e.next=5,E();case 5:n=e.sent,t({type:r.LoadData,payload:{posts:n}}),t(a.setIsLoadSuccess(!0)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(a.setIsLoadError(!0));case 13:return e.prev=13,a.setIsLoading(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()},this.dispatch=t},j=function(){var e=Object(u.c)((function(e){return{inputValue:e.inputValue}})).inputValue,t=Object(u.b)(),a=new g(t),r=Object(n.useCallback)(l()(a.setFilterValue,1e3),[]);return s.a.createElement("div",null,s.a.createElement("input",{type:"text",placeholder:"Filter posts",value:e,onChange:function(e){a.setInputValue(e.target.value),r(e.target.value)}}))},O=function(e){var t=e.disabled,a=e.onClick,r=e.children;return s.a.createElement("button",{type:"button",disabled:t,onClick:a},r)},V=(a(40),a(5)),w=a(18),k=a(19),x=Object(V.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SetInputValue:return Object(L.a)({},e,{inputValue:t.payload.inputValue||""});case r.SetFilterValue:return Object(L.a)({},e,{filterValue:t.payload.filterValue||""});case r.SetIsLoading:return Object(L.a)({},e,{isLoading:t.payload.isLoading||!1});case r.LoadData:return Object(L.a)({},e,{posts:t.payload.posts||[]});case r.SetIsLoadSuccess:return Object(L.a)({},e,{isLoadSuccess:t.payload.isLoadSuccess||!1});case r.SetIsLoadError:return Object(L.a)({},e,{isLoadError:t.payload.isLoadError||!1});default:return e}}),Object(k.composeWithDevTools)(Object(V.applyMiddleware)(w.a)));c.a.render(s.a.createElement(u.a,{store:x},s.a.createElement((function(){var e=Object(u.c)((function(e){return{isLoading:e.isLoading,isLoadSuccess:e.isLoadSuccess,isLoadError:e.isLoadError,posts:e.posts}})),t=e.isLoading,a=e.isLoadSuccess,r=e.isLoadError,n=e.posts,o=Object(u.b)(),c=new g(o),i=function(){c.loadData()};return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Redux list of posts"),s.a.createElement("hr",null),s.a.createElement(j,null),a?null:t?s.a.createElement(O,{disabled:!0},"Loading..."):r?s.a.createElement(O,{onClick:i},"Try again"):s.a.createElement(O,{onClick:i},"Load Posts"),a?n.map((function(e){return s.a.createElement("li",null,e.id)})):"")}),null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2c63b59e.chunk.js.map