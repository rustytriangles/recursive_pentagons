(this.webpackJsonprecursive_pentagons=this.webpackJsonprecursive_pentagons||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(4),i=n.n(s),l=(n(12),n(1)),o=n(2),h=n(6),u=n(5),c=(n(13),Math.sqrt((5+Math.sqrt(5))/2)),v=(Math.sqrt((5-Math.sqrt(5))/2),c/Math.sqrt(2-2/Math.sqrt(5))-1),p=1/(1+2*v),d=function(){function e(){Object(l.a)(this,e);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];1==n.length&&n[0]instanceof e?(this.center=[n[0].center[0],n[0].center[1]],this.radius=n[0].radius,this.startAngle=n[0].startAngle,this.level=n[0].level):5==n.length&&(this.center=[n[0],n[1]],this.radius=n[2],this.startAngle=n[3],this.level=n[4])}return Object(o.a)(e,[{key:"subdivide",value:function(){if(this.level>=5)return[];for(var t=this.center[0],n=this.center[1],r=this.level+1,a=[],s=this.radius*p,i=[],l=[],o=0;o<5;o++){var h=this.startAngle+2*o*Math.PI/5;i.push([2*v*s*Math.cos(h),2*v*s*Math.sin(h)]),l.push(h)}return a.push(new e(t,n,s,this.startAngle+Math.PI,r)),a.push(new e(t+i[0][0],n+i[0][1],s,l[0],r)),a.push(new e(t+i[1][0],n+i[1][1],s,l[1],r)),a.push(new e(t+i[2][0],n+i[2][1],s,l[2],r)),a.push(new e(t+i[3][0],n+i[3][1],s,l[3],r)),a.push(new e(t+i[4][0],n+i[4][1],s,l[4],r)),a}},{key:"makeComponent",value:function(e){for(var t="",n=0;n<5;n++){t+=0==n?"M ":"L ";var r=2*n*Math.PI/5+this.startAngle,s=Math.cos(r),i=Math.sin(r);t+=(this.center[0]+this.radius*s).toFixed(2)+" "+(this.center[1]+this.radius*i).toFixed(2)+" "}t+="Z";this.level;return a.a.createElement("g",{transform:"translate(0,0)"},a.a.createElement("path",{fill:e.fillStyle,stroke:e.strokeColor,"stroke-width":e.strokeWidth,d:t}))}}]),e}(),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={level:0},r.keepPrev=!1,r.tileProps={fillStyle:"#0066ff",strokeColor:"#0047b3",strokeWidth:"1"},r}return Object(o.a)(n,[{key:"subdivide_tiles",value:function(e,t,n){var r=[];if(n)for(var a=0;a<e.length;a++)r.push(e[a]);for(var s=t;s<e.length;s++)for(var i=e[s].subdivide(),l=0;l<i.length;l++)r.push(i[l]);return r}},{key:"oninput",value:function(e){var t=e.target.value;this.setState((function(e){return{level:t}}))}},{key:"render",value:function(){for(var e=this,t=[new d(0,25,320,-Math.PI/2,0)],n=0;n<this.state.level;n++)t=this.subdivide_tiles(t,0,this.keepPrev);var r=[-400,-300,800,600];return a.a.createElement("div",{class:"wrapper"},a.a.createElement("h2",null,"Recursive Pentagons"),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:800,height:600,viewBox:r,tabIndex:"1"},a.a.createElement(a.a.Fragment,null,function(t){return t.map((function(t){return t.makeComponent(e.tileProps)}))}(t))),a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("input",{type:"range",class:"slider",min:"0",max:"5",value:this.state.level,onInput:this.oninput.bind(this)}),a.a.createElement("div",null,"Level = ",this.state.level))))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7b78155c.chunk.js.map