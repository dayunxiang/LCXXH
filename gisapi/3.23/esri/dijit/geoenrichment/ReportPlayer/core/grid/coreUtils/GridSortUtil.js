// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridSortUtil","dojo/on dojo/dom-class dojo/dom-construct dojo/dom-style ./GridDataUtil ./GridQueryUtil ./GridLayoutCalculator ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(u,g,v,r,w,t,x,y,q){var h={},k={_getCellStyle:function(a,b){a.style=a.style||{};var e=a.style.fields=a.style.fields||{};return e[b.field]=e[b.field]||{}},_getCellStyleState:function(a){return{backgroundColor:a.backgroundColor,
overrideStyle:a.overrideStyle,key:a.backgroundColor+"."+a.overrideStyle}},getStyleInfo:function(a,b){function e(a){var c;return b.some(function(d){d=k._getCellStyle(a,d);d=k._getCellStyleState(d);if(c&&c.key!==d.key)return!0;c=d})?!1:c}k.resetStyling(a,b);var c=[];return a.some(function(a){var b=e(a);if(!b)return!0;if(!c.length)c.push(b);else if(1===c.length){if(c[0].key===b.key)return!0;c.push(b)}else if(!c.some(function(a){return a.key===b.key}))return!0})?null:{states:c}},setAlternatingColors:function(a,
b,e){k.resetStyling(a,b);a.forEach(function(a,g){var c=g%2?e.states[1]:e.states[0];b.forEach(function(b){b=k._getCellStyle(a,b);b.__isStyled=!0;b.__originalBackgroundColor=b.backgroundColor;b.backgroundColor=c.backgroundColor;b.__originalOverrideStyle=b.overrideStyle;b.overrideStyle=c.overrideStyle})})},resetStyling:function(a,b){a.forEach(function(a){b.forEach(function(b){b=k._getCellStyle(a,b);b.__isStyled&&(delete b.__isStyled,b.backgroundColor=b.__originalBackgroundColor,delete b.__originalBackgroundColor,
b.overrideStyle=b.__originalOverrideStyle,delete b.__originalOverrideStyle)})})}};h.updateSorting=function(a,b){function e(b){var c=b._sortArrow;g.remove(c,"sortArrowUp");g.remove(c,"sortArrowDown");q.hide(c);a._sortInfo&&a._sortInfo.columnId===b.columnId&&("up"===a._sortInfo.state?(g.add(c,"sortArrowUp"),q.show(c)):"down"===a._sortInfo.state&&(g.add(c,"sortArrowDown"),q.show(c)))}function c(){if(a._sortInfo){if(a._sortInfo.state){for(var b=[],c=a._sortInfo.originalData.slice(),e=0;e<d+1;e++)b.push(c.shift());
var e=k.getStyleInfo(c,a.columns),f,g;if(a.getNumDynamicColumns()){f={};for(var h=x.calcFeatureCount(a.columns.length,a.getNumFixedColumns(),a.getNumDynamicColumns()),l=a.getNumFixedColumns();a.columns[l];)for(var m=0;m<h;m++)f[a.columns[l++].field]=m}else a.getNumDynamicRows()&&(g={},a._sortInfo.originalData.forEach(function(b,c){g[b.id]=Math.max(0,c-a.getNumFixedRows())}));var p=a._sortInfo.column.field;c.sort(function(b,c){function e(b){var c=w.getNumericDataValue(b,p);if(void 0!==c)return c;if(c=
b.fieldInfos&&b.fieldInfos[p]){var e;a.previewFeatureIndex?e=a.previewFeatureIndex:f?e=f[p]:g&&(e=g[b.id]);c.isImage&&c.triggerJson&&c.triggerJson.fieldInfo&&(c=c.triggerJson.fieldInfo);return y.getFieldDataValue(c,a.viewModel.dynamicReportInfo.fieldData,e)||""}return b[p]}var d=e(b),n=e(c),h="down"===a._sortInfo.state;"number"===typeof d||"number"===typeof n?(d=Number(d),n=Number(n),result=d>n?1:d<n?-1:0):(d=String(d),n=String(n),result=d.localeCompare(n));return h?-result:result});e&&k.setAlternatingColors(c,
a.columns,e);a.store.data=b.concat(c)}else a.store.data=a._sortInfo.originalData,k.resetStyling(a._sortInfo.originalData,a.columns);a.refresh({applyCurrentSorting:!1})}}if(!(!a.allowSorting||a.isEmptyTable()||3>a.store.data.length)&&a.viewModel.dynamicReportInfo){for(var h=a.store.data.length-2,m,d,f=0;f<h;f++){var l=t.queryCells(a,{rowIndex:f});if(l&&l.length===a.columns.length){m=l;d=f;break}}if(m){for(f=d+1;f<a.store.data.length;f++)if(l=t.queryCells(a,{rowIndex:f}),!l||l.length!==a.columns.length)return;
m.forEach(function(b){u(b.domNode,"click",function(){var d=a._sortInfo&&a._sortInfo.columnId===b.columnId?a._sortInfo.state:null;a._sortInfo={columnId:b.columnId,column:b.column,state:null,originalData:a._sortInfo?a._sortInfo.originalData:a.store.data.slice()};d?"down"===d?a._sortInfo.state="up":"up"===d&&(a._sortInfo.state=null):a._sortInfo.state="down";m.forEach(e);c()});g.add(b.domNode,"esriGEAdjustableGridValueField");var d=v.create("div",{"class":"sortArrow"},b.domNode);r.set(d,"top",(b.getHeight()-
9)/2+"px");var f=b.getFullStyle();r.set(d,f&&"left"===f.horizontalAlign?"right":"left","5px");b._sortArrow=d;e(b)});b&&c()}}};h.getSorting=function(a){return a._sortInfo};h.setSorting=function(a,b){a._sortInfo=b;h.updateSorting(a,!0)};return h});