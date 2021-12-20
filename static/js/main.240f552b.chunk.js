(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(7),r=c.n(n),i=(c(12),c(0));function l(){return Object(i.jsx)("nav",{className:"light-blue accent-3",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function o(){return Object(i.jsx)("footer",{className:"page-footer light-blue accent-5",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=c(2),j=c(3),d=c(5),p=c(4);function b(e){var t=e.Title,c=e.Poster,a=e.Type,s=e.Year,n=e.imdbID;return Object(i.jsxs)("div",{id:n,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===c?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400.png?text=".concat(t)}):Object(i.jsx)("img",{className:"activator",src:c})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"#",children:a}),Object(i.jsx)("span",{className:"right",href:"#",children:s})]})]})]})}function u(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(i.jsx)(b,{Title:e.Title,Poster:e.Poster,Type:e.Type,Year:e.Year},e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing found"})})}function m(){return Object(i.jsx)("div",{className:"preloaderrr-container",children:Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})})}var v=function(e){Object(d.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:"all"},e.handleKeyPress=function(t){"Enter"===t.key&&e.props.searchInputFunc(e.state.search,e.state.type)},e.handleChangeType=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchInputFunc(e.state.search,e.state.type)}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this,t=this.state.type;return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col s12",children:Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKeyPress}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchInputFunc(e.state.search,e.state.type)},type:"submit",children:"Search"}),Object(i.jsx)("br",{}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type",value:"all",onChange:this.handleChangeType,"data-type":"all",checked:"all"===t})," ",Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type",value:"movie",onChange:this.handleChangeType,"data-type":"movie",checked:"movie"===t})," ",Object(i.jsx)("span",{children:"Movies"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type",value:"series",onChange:this.handleChangeType,"data-type":"series",checked:"series"===t})," ",Object(i.jsx)("span",{children:"Series"})]})]})]})})})}}]),c}(s.a.Component),x="4478a5ae",O=function(e){Object(d.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.searchInputFunc=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"matrix",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==c?"&type=".concat(c):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;console.log("mount"),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(i.jsxs)("main",{classNameName:"container content",children:[Object(i.jsx)(v,{searchInputFunc:this.searchInputFunc}),c?Object(i.jsx)(m,{}):Object(i.jsx)(u,{movies:t})]})}}]),c}(a.Component);var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(O,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.240f552b.chunk.js.map