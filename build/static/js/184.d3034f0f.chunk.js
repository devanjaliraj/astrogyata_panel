(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{2016:function(e,a,t){"use strict";t.r(a),t.d(a,"EditPackage",(function(){return _}));var n=t(43),l=t(13),r=t(14),m=t(16),s=t(15),c=t(0),i=t.n(c),o=t(1239),u=t(1237),h=t(1238),d=t(187),p=t(1242),g=t(815),E=t(808),f=t(804),b=t(97),v=(t(827),t(58)),N=t(802),y=t(942),_=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,m=new Array(r),s=0;s<r;s++)m[s]=arguments[s];return(e=a.call.apply(a,[this].concat(m))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=e.props.match.params.id;b.a.post("/view_onecust/".concat(t),y.data).then((function(a){console.log(a),e.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;b.a.get("/getonecustomer/".concat(a)).then((function(a){console.log(a),e.setState({first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:a.data.data.status})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N.a,{breadCrumbTitle:"Edit Package",breadCrumbParent:"Home",breadCrumbActive:"Edit Package "}),i.a.createElement(o.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Package")),i.a.createElement(h.a,null,i.a.createElement(v.b,{render:function(e){var a=e.history;return i.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/customer/customerList")}},"Back")}}))),i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Title"),i.a.createElement(f.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter First Name",value:this.state.first_name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Amount"),i.a.createElement(f.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter First Name",value:this.state.first_name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(E.a,null,"Thumnail image1"),i.a.createElement(f.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(E.a,null,"Thumnail image2"),i.a.createElement(f.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(E.a,null,"Thumnail image3"),i.a.createElement(f.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(E.a,null,"Description"),i.a.createElement("textarea",{className:"form-control",placeholder:"Description..."}))),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(u.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(c.Component);a.default=_}}]);
//# sourceMappingURL=184.d3034f0f.chunk.js.map