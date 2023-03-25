(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[85],{2092:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),c=t(16),l=t(15),s=t(0),o=t.n(s),i=t(1237),m=t(1238),u=t(802),p=t(1239),g=t(1240),v=t(1241),b=t(814),d=t(792),E=t(793),f=t(1242),h=t(816),T=t(817),N=t(4),j=t.n(N),A=t(321),y=t(293),x=t(339),C=t(791),O=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:j()("avatar ".concat(this.props.color?"bg-".concat(this.props.color):null,"  ").concat(this.props.className),{"avatar-sm":this.props.size&&"sm"===this.props.size,"avatar-lg":this.props.size&&"lg"===this.props.size,"avatar-xl":this.props.size&&"xl"===this.props.size})},!1===this.props.img||void 0===this.props.img?o.a.createElement("span",{className:j()("avatar-content",{"position-relative":this.props.badgeUp})},this.props.content?this.props.content:null,this.props.icon?o.a.createElement("div",{className:"avatar-icon"},this.props.icon):null,this.props.badgeUp?o.a.createElement(C.a,{color:this.props.badgeColor?this.props.badgeColor:"primary",className:"badge-sm badge-up",pill:!0},this.props.badgeText?this.props.badgeText:"0"):null):o.a.createElement("img",{src:this.props.img,alt:"avatarImg",height:this.props.imgHeight&&!this.props.size?this.props.imgHeight:32,width:this.props.imgWidth&&!this.props.size?this.props.imgWidth:32}),this.props.status?o.a.createElement("span",{className:"avatar-status-".concat(this.props.status)}):null)}}]),t}(o.a.Component),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarDefault extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} />\n      <Avatar className="mr-1" content="LD" />\n      <Avatar className="mr-1" content="Luisd" />\n      <Avatar img={avatarImg} />\n    )}}\n\nexport default AvatarDefault\n')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarSizes extends React.Component {\n\n  render() {\n    return(\n        <Avatar className="mr-1" icon={<GitHub />} size="sm" />\n        <Avatar className="mr-1" content="LD" />\n        <Avatar className="mr-1" img={avatarImg} size="lg" />\n        <Avatar img={avatarImg} size="xl" />\n    )}\n}\nexport default AvatarSizes\n')),z=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nclass AvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" content="R" />\n      <Avatar color="success" className="mr-1" content="E" />\n      <Avatar color="danger" className="mr-1" content="A" />\n      <Avatar color="info" className="mr-1" content="C" />\n      <Avatar color="warning" className="mr-1" content="T" />\n      <Avatar color="dark" content="X" />\n    )}\n}\nexport default AvatarColors\n')),I=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { Badge } from "reactstrap"\nimport { Facebook, Instagram, Twitter } from "react-feather"\n\nclass AvatarBadge extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" color="primary" icon={<Facebook />} badgeText="7" badgeColor="danger" badgeUp />\n      <Avatar className="mr-1" icon={<Twitter />} color="info" badgeText="6" badgeColor="danger" badgeUp />\n      <Avatar icon={<Instagram />} color="success" badgeText="6" badgeColor="danger" badgeUp />\n    )}\n}\nexport default AvatarBadge\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport {\n  Eye,\n  Code,\n  GitHub,\n  Calendar,\n  Inbox,\n  Camera,\n  Award\n} from "react-feather"\n\nclass AvatarIcons extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" icon={<GitHub />} />\n      <Avatar color="success" className="mr-1" icon={<Calendar />} />\n      <Avatar color="danger" className="mr-1" icon={<Inbox />} />\n      <Avatar color="info" className="mr-1" icon={<Camera />} />\n      <Avatar color="warning" icon={<Award />} />\n    )}\n}\nexport default AvatarIcons\n')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarStatus extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} status="online" />\n      <Avatar className="mr-1" content="LD" status="offline" />\n      <Avatar className="mr-1" content="Luisd" status="away" />\n      <Avatar className="mr-1" img={avatarImg} status="busy" />\n    )\n  }\n}\nexport default AvatarStatus\n')),B=t(102),D=t.n(B),U=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(A.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use Vuexy's Avatar component and pass ",o.a.createElement("code",null,"icon")," or"," ",o.a.createElement("code",null,"content")," or ",o.a.createElement("code",null,"img")," to create an avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",icon:o.a.createElement(x.a,null)}),o.a.createElement(O,{className:"mr-1",content:"LD"}),o.a.createElement(O,{className:"mr-1",content:"Luisd"}),o.a.createElement(O,{img:D.a})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),P=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Sizes"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(A.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"size=[sm | lg | xl]")," prop to change avatar's size."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",icon:o.a.createElement(x.a,null),size:"sm"}),o.a.createElement(O,{className:"mr-1",content:"LD"}),o.a.createElement(O,{className:"mr-1",img:D.a,size:"lg"}),o.a.createElement(O,{img:D.a,size:"xl"})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),M=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(A.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning | dark]")," ","to change background color of your avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{color:"primary",className:"mr-1",content:"V"}),o.a.createElement(O,{color:"success",className:"mr-1",content:"U"}),o.a.createElement(O,{color:"danger",className:"mr-1",content:"E"}),o.a.createElement(O,{color:"info",className:"mr-1",content:"X"}),o.a.createElement(O,{color:"warning",className:"mr-1",content:"Y"}),o.a.createElement(O,{color:"dark",content:"X"})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(o.a.Component),F=t(322),H=t(454),L=t(350),G=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Badge"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(A.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"You can add notification label to avatar by passing"," ",o.a.createElement("code",null,"badgeUp"),"prop as true and ",o.a.createElement("code",null,"badgeText"),","," ",o.a.createElement("code",null,"badgeColor=[primary | success | danger | info | warning | dark]"),"."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",color:"primary",icon:o.a.createElement(F.a,null),badgeText:"7",badgeColor:"danger",badgeUp:!0}),o.a.createElement(O,{className:"mr-1",color:"info",icon:o.a.createElement(H.a,null),badgeText:"6",badgeColor:"danger",badgeUp:!0}),o.a.createElement(O,{icon:o.a.createElement(L.a,null),color:"success",badgeText:"6",badgeColor:"danger",badgeUp:!0})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(o.a.Component),X=t(270),J=t(348),V=t(272),W=t(257),Y=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(A.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"icon")," to create avatar with icon."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{color:"primary",className:"mr-1",icon:o.a.createElement(x.a,null)}),o.a.createElement(O,{color:"success",className:"mr-1",icon:o.a.createElement(X.a,null)}),o.a.createElement(O,{color:"danger",className:"mr-1",icon:o.a.createElement(J.a,null)}),o.a.createElement(O,{color:"info",className:"mr-1",icon:o.a.createElement(V.a,null)}),o.a.createElement(O,{color:"warning",icon:o.a.createElement(W.a,null)})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),Z=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Status"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(A.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"use prop",o.a.createElement("code",null,"status=[online | offline | away | busy]")," to create avatar with status."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",icon:o.a.createElement(x.a,null),status:"online"}),o.a.createElement(O,{className:"mr-1",content:"LD",status:"offline"}),o.a.createElement(O,{className:"mr-1",content:"Luisd",status:"away"}),o.a.createElement(O,{className:"mr-1",img:D.a,status:"busy"})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},R)))))}}]),t}(o.a.Component),$=t(805),q=t.n($),K=(t(806),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){q.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Avatar",breadCrumbParent:"Extra Components",breadCrumbActive:"Avatar"}),o.a.createElement(i.a,{className:"match-height"},o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(U,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(P,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(M,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(G,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(Y,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(Z,null))))}}]),t}(o.a.Component));a.default=K},803:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},806:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var r=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},c=function a(t){for(var n=[],c=0;c<t.length;c++){var l=t[c],s=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===r(l.content[0].content[1])&&n.pop():"/>"===l.content[l.content.length-1].content||n.push({tagName:r(l.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===l.type&&"{"===l.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof l)&&n.length>0&&0===n[n.length-1].openedBraces){var o=r(l);c<t.length-1&&("string"==typeof t[c+1]||"plain-text"===t[c+1].type)&&(o+=r(t[c+1]),t.splice(c+1,1)),c>0&&("string"==typeof t[c-1]||"plain-text"===t[c-1].type)&&(o=r(t[c-1])+o,t.splice(c-1,1),c--),t[c]=new e.Token("plain-text",o,null,o)}l.content&&"string"!=typeof l.content&&a(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||c(e.tokens)}))}(Prism)},814:function(e,a,t){"use strict";var n=t(5),r=t(7),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(3),p=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],g={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},v=function(e){var a=e.className,t=e.cssModule,c=e.tabs,s=e.pills,o=e.vertical,i=e.horizontal,g=e.justified,v=e.fill,b=e.navbar,d=e.card,E=e.tag,f=Object(r.a)(e,p),h=Object(u.mapToCssModules)(m()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":c,"card-header-tabs":d&&c,"nav-pills":s,"card-header-pills":d&&s,"nav-justified":g,"nav-fill":v}),t);return l.a.createElement(E,Object(n.a)({},f,{className:h}))};v.propTypes=g,v.defaultProps={tag:"ul",vertical:!1},a.a=v},816:function(e,a,t){"use strict";var n=t(5),r=t(12),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(803),p=t(3),g={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,c=Object(p.omit)(this.props,Object.keys(g)),s=Object(p.mapToCssModules)(m()("tab-content",a),t);return l.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},c,{className:s})))},a}(c.Component);a.a=v,v.propTypes=g,v.defaultProps={tag:"div"}},817:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(5),r=t(7),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(803),p=t(3),g=["className","cssModule","tabId","tag"],v={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(e){var a=e.className,t=e.cssModule,c=e.tabId,s=e.tag,o=Object(r.a)(e,g),i=function(e){return Object(p.mapToCssModules)(m()("tab-pane",a,{active:c===e}),t)};return l.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(s,Object(n.a)({},o,{className:i(a)}))}))}b.propTypes=v,b.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=85.29120b5a.chunk.js.map