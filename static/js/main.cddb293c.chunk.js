(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(47),c=n.n(o),s=(n(55),n(56),n(2)),l=n(3),i=n(5),u=n(4),h=n(14),m=n(6),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",value:this.props.username,onChange:this.props.handleUserOnchange})),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.props.handleSelectClick},"Select"),this.props.error&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.props.error.message)))}}]),t}(r.a.PureComponent),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("p",{className:"card-text"},this.props.body)))}}]),t}(r.a.PureComponent),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("Rendering posts:"),console.log(this.props.posts),this.props.posts.map(function(e,t){return r.a.createElement(p,{title:e.title,body:e.body})})}}]),t}(r.a.PureComponent),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"I'm a component.")}}]),t}(r.a.PureComponent),v=n(48),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.counts,t=[],n=[],a=[];for(var o in e)t.push({word:o,count:e[o]});console.log(t),t.sort(function(e,t){return e.count<t.count?1:-1}).slice(0,10).forEach(function(e){n.push(e.word),a.push(e.count)}),console.log(n);var c={labels:n,datasets:[{label:"Word count",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:a}]},s=30*n.length;return r.a.createElement("div",{style:{height:s+"px",width:"100%"}},r.a.createElement(v.a,{data:c,width:null,height:15*s,options:{maintainAspectRatio:!1}}))}}]),t}(r.a.PureComponent),O=function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.error(e),[]})},E=function(){return O("https://jsonplaceholder.typicode.com/users")},g=function(e){return O("https://jsonplaceholder.typicode.com/posts?userId="+e)};var y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:"",posts:[],counts:{}},n.handleUserNameChange=n.handleUserNameChange.bind(Object(h.a)(n)),n.handleSelectClick=n.handleSelectClick.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSelectClick",value:function(){var e=this;this.setState({errorWhenSelect:null}),E().then(function(t){var n=t.find(function(t){return t.name===e.state.username});if(n)return n;throw new Error("No corresponding user. Did you mean Leanne Graham?")}).then(function(e){return g(e.id)}).then(function(t){var n=function(e){return e.reduce(function(e,t){return t.body.trim().split(/\s+/).forEach(function(t){var n=t.toLowerCase();e[n]?e[n]+=1:e[n]=1}),e},{})}(t);e.setState({posts:t,counts:n})}).catch(function(t){e.setState({errorWhenSelect:t})})}},{key:"handleUserNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(d,{username:this.state.username,handleUserOnchange:this.handleUserNameChange,handleSelectClick:this.handleSelectClick,error:this.state.errorWhenSelect}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(b,{posts:this.state.posts})),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement(f,null)),r.a.createElement("div",{className:"row"},r.a.createElement(j,{counts:this.state.counts})))))}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,n){e.exports=n(151)},55:function(e,t,n){},56:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.cddb293c.chunk.js.map