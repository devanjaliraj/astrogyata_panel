(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[196],{2034:function(e,a,t){"use strict";t.r(a);var i=t(13),r=t(14),n=t(16),l=t(15),o=t(0),c=t.n(o),s=t(1239),d=t(1242),u=t(796),m=t(800),g=t(797),p=t(795),f=t(804),h=t(187),S=t(809),w=t(179),v=t(321),z=t(318),E=t(447),b=t(277),N=t(42),P=t.n(N),C=(t(810),t(802)),y=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Mobile No.",field:"Mobile",width:175,filter:!1,checkboxSelection:!1,headerCheckboxSelectionFilteredOnly:!1,headerCheckboxSelection:!1},{headerName:"Name",field:"firstname",filter:!1,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Email",field:"email",filter:!1,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Customer Enquiry",field:"Customer",filter:!1,width:250},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(v.a,{className:"mr-50",size:"25px",color:"green"}),c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue"}),c.a.createElement(E.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.a.get("/api/aggrid/data").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,r=a.defaultColDef;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{breadCrumbTitle:"Help Desk"}),c.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},c.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(u.a,{className:"p-1 ag-dropdown"},c.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(b.a,{className:"ml-50",size:15})),c.a.createElement(g.a,{right:!0},c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(f.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(w.a.Consumer,null,(function(a){return c.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(c.a.Component);a.default=y}}]);
//# sourceMappingURL=196.279f773c.chunk.js.map