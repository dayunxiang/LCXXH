// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/layout/LayoutBuilder",["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-construct"],function(f,g,k,h){return f(null,{_moduleMap:null,_getModulePaths:function(){return{section:"esri/dijit/geoenrichment/ReportPlayer/core/sections/Section",emptySection:"esri/dijit/geoenrichment/ReportPlayer/core/sections/Empty",grid:"esri/dijit/geoenrichment/ReportPlayer/core/grid/AdjustableGrid",reportContainer:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainer",
reportContainerGrid:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainerGrid",reportContainerPagination:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainerPagination",infographicPage:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPage",image:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",shape:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeRenderer",chart:"esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartRenderer",
infographic:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/infographicUtils/InfographicRenderer"}},initialize:function(){var b=this;this._moduleMap={};var a=this._getModulePaths(),c=[],d;for(d in a)c.push({id:d,path:a[d]});var e=new g;require(c.map(function(b){return b.path}),function(){for(var a=0;a<arguments.length;a++)b._moduleMap[c[a].id]=arguments[a];e.resolve()});return e.promise},createElement:function(b,a,c,d){switch(b){case "section":case "emptySection":case "grid":case "reportContainer":case "reportContainerGrid":case "reportContainerPagination":case "infographicPage":return new this._moduleMap[b](a,
c?h.create("div",null,c,d):void 0);case "image":return this._moduleMap[b].createImageContainer(a);case "shape":return this._moduleMap[b].createShapeContainer(a);case "chart":return this._moduleMap[b].createChartPage(a);case "infographic":return this._moduleMap[b].createInfographicPage(a)}return!1},getClass:function(b){return this._moduleMap[b]}})});