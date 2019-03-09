(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,a){"use strict";var n=a(0),l=a(217);const r=["#0088FE","#00C49F","#FFBB28","#FF8042","#f44336","#e91e63","#00bcd4","#ff5722","#ff9800","#8bc34a"];t.a=(({data:e,animate:t})=>n.createElement(l.e,{width:"100%",height:250},n.createElement(l.d,null,n.createElement(l.f,null),n.createElement(l.b,null),n.createElement(l.c,{data:e,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:50,fill:"#8884d8",label:e.length>1,isAnimationActive:t},e.map((t,a)=>n.createElement(l.a,{key:a,fill:e.length>1?r[a%r.length]:r[5]}))))))},247:function(e,t,a){e.exports=a.p+"3eae201ef69330ff6cc5958334c5357c.png"},443:function(e,t,a){"use strict";a.r(t);var n=a(48),l=a(0),r=a(47),s=a(438),o=a(439),c=a(440),i=a(441),m=a(447),u=a(44),d=a(241),p=a(247),h=a(139),E=a(446),y=a(102);const g=n.b`
  mutation AddFeedBack ($text: String!){
    createFeedBack(text: $text)
  }
`;var f=class extends l.Component{constructor(){super(...arguments),this.state={email:"",honeyPot:"",isAnon:!1,submitted:!1,text:{value:"",validation:null}}}render(){return this.state.submitted?l.createElement("p",null,l.createElement("b",null,"Thank you for the submission.")):l.createElement("div",null,l.createElement("p",null,l.createElement("b",null,"Or Send an Anonymous Comment")),l.createElement(r.Mutation,{mutation:g},e=>l.createElement("form",{target:"frame",action:"/redirect",onSubmit:t=>{t.preventDefault(),e({variables:{text:this.state.text.value}}),this.setState({submitted:!0})}},l.createElement(E.a,{controlId:"text"},l.createElement("textarea",{value:this.state.text.value,onChange:e=>this.setState({text:{validation:""===e.target.value?"error":"success",value:e.target.value}}),className:"form-control"})),l.createElement("div",{style:{display:"none"}},l.createElement("label",null,"Keep this field blank"),l.createElement("input",{value:this.state.honeyPot,onChange:e=>this.setState({honeyPot:e.target.value}),type:"text"})),l.createElement(y.a,{style:{marginTop:"7px",float:"right"},type:"submit"},"Submit"))),l.createElement("iframe",{style:{display:"none"},name:"frame"}))}},b=a(46),v=a(445);var x=class extends l.Component{render(){const{loading:e,title:t,error:a,style:n}=this.props;return l.createElement(v.a,{style:n},l.createElement(v.a.Header,null,t),l.createElement(v.a.Body,null,e?a?l.createElement("p",null,"Woops! There was an problem loading this card :("):l.createElement(b.a,{height:50}):this.props.children))}};const k={center:{textAlign:"center"},icons:{marginRight:"5px"},socialIcons:{marginTop:"5px"},spaceTop:{marginTop:"15px"},white:{background:"white",border:"1px solid #ddd",marginBottom:"20px",padding:"1em"}},w=["success","info","warning","danger"];const C=n.b`
  query getProfile {
    queryUser(username: "mrdokenny") {
      recentCommit {
        name
        pushedAt
        url
      }
      topContributedRepos
      currentLanguageScores {
        language
        score
      }
    }
  }
`;class S extends r.Query{}t.default=(()=>l.createElement(s.a,null,l.createElement(o.a,null,l.createElement(c.a,{xs:12,sm:4},l.createElement("div",{style:k.white},l.createElement(i.a,{src:p,fluid:!0,alt:"Cartoon Picture of Kenny Do"}),l.createElement("h3",{style:k.center},"Kenny Do"),l.createElement("p",null,"Why hello there and welcome to my website. All this data was pulled from my express server using the GitHub API. The express server crunches the raw data to get these stats for me.",l.createElement("i",null," As I am using free servers at this moment, the cards might take a while to load if the server has slept. Please be patient."))),l.createElement("div",{style:k.white},l.createElement("dl",null,l.createElement("dt",null,"Impressed? Get in touch"),l.createElement("dd",null,l.createElement("a",{href:"mailto:contact@kennydo.com",title:"Click to send me an email"},"contact@kennydo.com"),l.createElement("br",null))),l.createElement(f,null),l.createElement("div",{style:k.socialIcons},l.createElement(d.SocialIcon,{style:k.icons,url:"mailto:contact@kennydo.com",network:"email",title:"Click to send me an email"}),l.createElement(d.SocialIcon,{style:k.icons,url:"https://github.com/mrdokenny",title:"Come see my projects"})))),l.createElement(c.a,{xs:12,sm:8},l.createElement(S,{query:C},({loading:e,error:t,data:a})=>{if(e||!a)return l.createElement(b.a,null);const{queryUser:{recentCommit:n,topContributedRepos:r,currentLanguageScores:s}}=a;return l.createElement(o.a,null,l.createElement(c.a,{xs:12,sm:12},l.createElement(x,{loading:e,error:t,title:"Skills Progress"},s.map(({language:e,score:t},a)=>l.createElement("div",{key:a+e},l.createElement(m.a,{striped:!0,variant:w[a%w.length],now:t/4500*100}),l.createElement("p",null,e))),l.createElement("i",null,"Please don't take this as an accurate representation of my skills but rather take away my 'skill' to data analyse my GitHub Profile :)"),l.createElement("i",null," Also note that it doesn't take advantage of private repositories."))),l.createElement(c.a,{style:k.spaceTop,xs:12,sm:6},l.createElement(x,{loading:e,style:{height:"100%"},error:t,title:"Skills Distribution Chart"},l.createElement(h.a,{data:s.map(({language:e,score:t})=>({name:e,value:t}))}))),l.createElement(c.a,{style:k.spaceTop,xs:12,sm:6},l.createElement(x,{loading:e,error:t,title:"My Top 5 Repositories By Commits"},r.map(({node:e},t)=>{if(t<5)return l.createElement("p",{key:`${e.name}${t}`},l.createElement("a",{href:e.url},e.name),` has ${e.defaultBranchRef.target.history.totalCount} commits by me.`)}),l.createElement(u.LinkContainer,{to:"/projects"},l.createElement("a",null,l.createElement("i",null,"See all my Projects"))))),l.createElement(c.a,{style:k.spaceTop,xs:12,sm:6},l.createElement(x,{loading:e,error:t,title:"Latest Commit"},l.createElement("p",null,"I made a recent commit on Repository ",l.createElement("a",{href:n.url},n.name),` on ${new Date(n.pushedAt).toDateString()}`))))})))))}}]);