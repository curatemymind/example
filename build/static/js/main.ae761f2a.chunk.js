(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{14:function(e,t,n){e.exports=n(45)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),o=n.n(r),s=(n(19),n(7)),i=n(8),c=n(13),u=n(12),d=(n(20),n(10)),h=n(9),m=n.n(h),f=(n(36),n(37),n(38),[]),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={resources:null,dataFields:null,categories:[],data:null},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=0,n=0,a=[],l=[],r=null;fetch("https://spreadsheets.google.com/feeds/cells/1ncWZJvETrF-Y66BT6vpTupUdROtbyAxfqHEDNIiMG48/1/public/full?alt=json").then((function(e){return e.json()})).then((function(o){n=o.feed.gs$colCount.$t,t=o.feed.gs$rowCount.$t-1,r=o.feed.entry;for(var s=n;s<r.length;s++)l.push(r[s].gs$cell.inputValue);e.setState({resources:t,dataFields:n,categories:a,data:l})}))}},{key:"render",value:function(){var e={dots:!1,infinite:!1,speed:500,fade:!1,slidesToShow:1,slidesToScroll:1,arrows:!0,className:"slides"};if(null!=this.state.data)for(var t=0;t<this.state.data.length;t+=9){for(var n=[],a=0;a<this.state.dataFields;a++)if(7===a){for(var r=String(this.state.data[t+a]).split(", "),o=[],s=0;s<r.length;s++)o.push(r[s]);n.push(o)}else n.push(this.state.data[t+a]);f.push(n)}return l.a.createElement("div",null,l.a.createElement("div",{style:{marginLeft:20,width:550}},l.a.createElement("br",null),f.map((function(t,n){return l.a.createElement("div",null,l.a.createElement("h1",null,t[1]),l.a.createElement("img",{src:t[2],style:{width:200}}),l.a.createElement("h2",null,t[3]),l.a.createElement("h3",null,"by ",t[4]),l.a.createElement("p",null,t[5]),l.a.createElement("a",{href:t[6]},"Download Work File"),l.a.createElement("h3",null,"Videos:"),l.a.createElement(m.a,e,f[n][7].map((function(e,t){return l.a.createElement("div",{style:{width:400}},l.a.createElement("center",null,l.a.createElement(d.a,{video:e})))}))))}))))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ae761f2a.chunk.js.map