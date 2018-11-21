(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(e,t,n){"use strict";var o=n(1),a=n(441),i=n(445),r=n(438),l=n(281),s=n(440),c=n(427);const p=["#0088FE","#00C49F","#FFBB28","#FF8042","#f44336","#e91e63","#00bcd4","#ff5722","#ff9800","#8bc34a"];t.a=(({data:e,animate:t})=>o.createElement(a.a,{width:"100%",height:250},o.createElement(i.a,null,o.createElement(r.a,null),o.createElement(l.a,null),o.createElement(s.a,{data:e,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:50,fill:"#8884d8",label:e.length>1,isAnimationActive:t},e.map((t,n)=>o.createElement(c.a,{key:n,fill:e.length>1?p[n%p.length]:p[5]}))))))},279:function(e,t,n){"use strict";var o=n(3),a=n(7),i=n(6),r=n(8),l=n.n(r),s=n(1),c=n.n(s),p=n(18),d=n.n(p),u=n(2),m={componentClass:d.a},h=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,i=Object(a.a)(e,["componentClass","className"]),r=Object(u.f)(i),s=r[0],p=r[1],d=Object(u.d)(s);return c.a.createElement(t,Object(o.a)({},p,{className:l()(n,d)}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={componentClass:"div"},t.a=Object(u.a)("row",h)},431:function(e){e.exports={"History-AutoDelete":{description:"An annoyance that I had with Google Maps was that every time I moved the map, it would spawn 3-4 history entries. So, after 5 minutes, I might have over 100 history entries. This extension is supposed to stop that from happening. This project introduced me to HTML, CSS, and JavaScript; it would also jump start me in the world of web development and web apps.",projectLinks:[{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/history-autodelete/bhfakmaiadhflpjloimlagikhodjiefj"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/history-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/History-AutoDelete-for-Chrome.shtml"}],src:"history-autodelete.gif",alt:"A GIF showing how History AutoDelete can prevent multiple history entries from the same domain"},"Cookie-AutoDelete":{description:"After History AutoDelete, I wanted to port Self Destructing Cookies which I think is an amazing cookie policy for web browsers that compromises between privacy and convenience. This extension will delete all unused cookies on tab close. Unused means that if all google.com tabs are closed then google.com cookies are cleared. This helps people set what cookies they want to keep and then forget about it (meaning you do not have to micromanage it).",projectLinks:[{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidfldomjliifgaodjagh"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/cookie-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/Cookie-AutoDelete.shtml"},{linkName:"Ghacks Review",linkType:"MEDIA",linkURL:"https://www.ghacks.net/2017/05/15/cookie-autodelete-for-firefox-webextension/"}],src:"cookie-autodelete.gif",alt:"A GIF showing the cleanup operation of Cookie AutoDelete on github.com"},"mrdokenny.github.io":{description:"Using a boilerplate as a starting point, I turned it into what you see here today. All this was from scratch using React Components and BootStrap, taking into inspiration of my old website which was a template. The result is a personal website with more modern components (React Framework and BootStrap 3 via React-BootStrap) and easier expandability (maybe a blog?).",projectLinks:[{linkName:"Original Boilerplate",linkType:"GITHUB",linkURL:"http://spa-github-pages.rafrex.com/"}],src:"website-pic.jpg",alt:"The home page of this website"},TicTacTuring:{description:"To get me to learn React Native, which is using the framework of React to create mobile apps, I created a simple TicTacToe game that is inspired from TicTacTuring (Lynda.com)= that was written in React-DOM. The main addition is that it also connects to a serverless backend, GraphCool. With that, users can login and see the history of all their games.",projectLinks:[],src:"TicTacTuring.gif",alt:"A GIF showing how the mobile app operates"}}},432:function(e,t,n){var o={"./TicTacTuring.gif":433,"./cookie-autodelete.gif":434,"./history-autodelete.gif":435,"./website-pic.jpg":436};function a(e){var t=i(e);return n(t)}function i(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=432},433:function(e,t,n){e.exports=n.p+"c83ede79d9d96bc63158f582cb4c58a2.gif"},434:function(e,t,n){e.exports=n.p+"30211642be9371eff69b9eb1008a1c27.gif"},435:function(e,t,n){e.exports=n.p+"d8bd11b7ab0224fec265899517b9cecb.gif"},436:function(e,t,n){e.exports=n.p+"3542ffcd9277c0bc66fe44c157312382.jpg"},439:function(e,t,n){"use strict";var o=n(7),a=n(3),i=n(6),r=n(8),l=n.n(r),s=n(0),c=n.n(s),p=n(1),d=n.n(p),u=n(61),m=n.n(u),h=n(2),g=n(30),f=(n(63),c.a.oneOfType([c.a.string,c.a.number]));var b,y={accordion:c.a.bool,activeKey:c.a.any,onSelect:c.a.func,role:c.a.string,generateChildId:c.a.func,id:(b="PanelGroup",function(e){var t=null;if(!e.generateChildId){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];(t=f.apply(void 0,[e].concat(o)))||e.id||(t=new Error("In order to properly initialize the "+b+" in a way that is accessible to assistive technologies (such as screen readers) an `id` or a `generateChildId` prop to "+b+" is required"))}return t})},w={$bs_panelGroup:c.a.shape({getId:c.a.func,headerRole:c.a.string,panelRole:c.a.string,activeKey:c.a.any,onToggle:c.a.func})},k=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).handleSelect=function(e,n,o){n?t.props.onSelect(e,o):t.props.activeKey===e&&t.props.onSelect(null,o)},t}Object(i.a)(t,e);var n=t.prototype;return n.getChildContext=function(){var e=this.props,t=e.activeKey,n=e.accordion,o=e.generateChildId,i=e.id,r=null;return n&&(r=o||function(e,t){return i?i+"-"+t+"-"+e:null}),{$bs_panelGroup:Object(a.a)({getId:r,headerRole:"tab",panelRole:"tabpanel"},n&&{activeKey:t,onToggle:this.handleSelect})}},n.render=function(){var e=this.props,t=e.accordion,n=e.className,i=e.children,r=Object(o.a)(e,["accordion","className","children"]),s=Object(h.g)(r,["onSelect","activeKey"]),c=s[0],u=s[1];t&&(u.role=u.role||"tablist");var m=Object(h.d)(c);return d.a.createElement("div",Object(a.a)({},u,{className:l()(n,m)}),g.a.map(i,function(e){return Object(p.cloneElement)(e,{bsStyle:e.props.bsStyle||c.bsStyle})}))},t}(d.a.Component);k.propTypes=y,k.defaultProps={accordion:!1},k.childContextTypes=w;t.a=m()(Object(h.a)("panel-group",k),{activeKey:"onSelect"})},447:function(e,t,n){"use strict";n.r(t);var o=n(64),a=n(1),i=n.n(a),r=n(62),l=n(279),s=n(100),c=n(431),p=n.t(c,2),d=n(22),u=n(278),m=n(437),h=n(439),g=n(3),f=n(7),b=n(6),y=n(8),w=n.n(y),k=n(0),v=n.n(k),E=n(2),T={responsive:v.a.bool,rounded:v.a.bool,circle:v.a.bool,thumbnail:v.a.bool},j=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.responsive,o=t.rounded,a=t.circle,r=t.thumbnail,l=t.className,s=Object(f.a)(t,["responsive","rounded","circle","thumbnail","className"]),c=Object(E.f)(s),p=c[0],d=c[1],u=((e={})[Object(E.e)(p,"responsive")]=n,e[Object(E.e)(p,"rounded")]=o,e[Object(E.e)(p,"circle")]=a,e[Object(E.e)(p,"thumbnail")]=r,e);return i.a.createElement("img",Object(g.a)({},d,{className:w()(l,u)}))},t}(i.a.Component);j.propTypes=T,j.defaultProps={responsive:!1,rounded:!1,circle:!1,thumbnail:!1};var C=Object(E.a)("img",j),O=n(218);var S=class extends a.Component{constructor(){super(...arguments),this.state={loadImage:!1}}render(){const{node:e,data:t,projectJSON:o,repositoriesLength:i}=this.props,r=`Languages: ${e.languages.edges.map(({node:e})=>e.name).join(", ")}`,l=t.reduce((e,t)=>t.value>0||e,!1);return a.createElement(u.a,{key:e.id,xs:12,md:4},a.createElement(m.a,null,a.createElement(m.a.Heading,null,a.createElement(m.a.Title,{componentClass:"h3"},`${e.name}${null!==e.description?`: ${e.description}`:""}`)),a.createElement(m.a.Body,null,e.licenseInfo&&a.createElement("p",null,e.licenseInfo.name),a.createElement("p",null,r),a.createElement(O.a,{data:l?t:[{name:"None",value:1}],animate:i<10}),a.createElement(h.a,{id:e.id,accordion:!0},void 0!==o&&a.createElement(m.a,{eventKey:"1"},a.createElement(m.a.Heading,null,a.createElement(m.a.Title,{toggle:!0},"Description")),a.createElement(m.a.Body,{collapsible:!0},a.createElement("p",null,o.description))),void 0!==o&&a.createElement(m.a,{eventKey:"2"},a.createElement(m.a.Heading,{onClick:()=>this.setState({loadImage:!0})},a.createElement(m.a.Title,{toggle:!0},"Images")),a.createElement(m.a.Body,{collapsible:!0},this.state.loadImage&&a.createElement(C,{src:n(432)(`./${o.src}`),responsive:!0}))),a.createElement(m.a,{eventKey:"3"},a.createElement(m.a.Heading,null,a.createElement(m.a.Title,{toggle:!0},"External Links")),a.createElement(m.a.Body,{collapsible:!0},a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:e.url},"GitHub Link")),void 0!==o&&o.projectLinks.map(({linkName:e,linkURL:t},n)=>a.createElement("li",{key:n},a.createElement("a",{href:t},e))))))))))}};const I=o.b`
  query Projects($cursor: String) {
    user(username: "mrdokenny") {
      repositories(cursor: $cursor)
    }
  }
`,R=Object(r.graphql)(I,{options:{notifyOnNetworkStatusChange:!1},props(e){const{data:{loading:t,user:n,fetchMore:o}}=e;return{loadMoreEntries:()=>o({updateQuery:(e,{fetchMoreResult:t})=>{const n=[...e.user.repositories,...t.user.repositories];return{user:Object.assign({},e.user,{repositories:n})}},variables:{cursor:n.repositories[n.repositories.length-1].cursor}}),loading:t,repositories:t?[]:n.repositories}}})(class extends a.Component{constructor(e){super(e),this.state={isFinished:!1,loadMore:!1},this.handleScroll=this.handleScroll.bind(this)}handleScroll(){const e=document.documentElement?document.documentElement.offsetHeight:0,t="innerHeight"in window?window.innerHeight:e,n=document.body,o=document.documentElement,a=o?Math.max(o.clientHeight,o.scrollHeight,o.offsetHeight):0,i=Math.max(n.scrollHeight,n.offsetHeight,a),r=t+window.pageYOffset+20,{loading:l,loadMoreEntries:s}=this.props,{isFinished:c}=this.state;r>=i&&!l&&!c&&(this.setState({loadMore:!0}),s().then(({data:e})=>this.setState({isFinished:e.user.repositories.length<9,loadMore:!1})))}componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{loading:e,repositories:t}=this.props,{loadMore:n}=this.state,o=t.map(({node:e},n)=>{const o=[{name:"Watchers",value:e.watchers.totalCount},{name:"Favorites",value:e.stargazers.totalCount},{name:"Forks",value:e.forkCount}];return[a.createElement(S,{key:e.id,projectJSON:p[e.name],node:e,data:o,repositoriesLength:t.length}),a.createElement(l.a,{key:`${e.id}1`,style:{display:(n+1)%3==0?"block":"none",margin:0}})]});return a.createElement(s.a,null,a.createElement(l.a,null,o),a.createElement(l.a,null,(e||n)&&a.createElement(d.a,null)))}});t.default=R}}]);