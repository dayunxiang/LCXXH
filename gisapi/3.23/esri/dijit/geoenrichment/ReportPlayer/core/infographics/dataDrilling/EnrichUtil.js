// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dataDrilling/EnrichUtil",["../../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../infographicUtils/InfographicJsonUtil"],function(l,m){var e={processChartJson:function(a,b){var d=[];a.seriesItems.forEach(function(a){a.points.forEach(function(a){d.push({fieldName:a.fieldInfo.name,mapTo:b?b(a.fieldInfo.fullName):a.fieldInfo.fullName})})});var c=a.comparisonInfo;return this.createChartInfo(d,c&&c.levels,e.buildCalculatorNameForChart(a))},
createChartInfo:function(a,b,d){a=a||[];var c={isChart:!0,fields:[],levels:b,calculatorName:d,_cache:{}};a.forEach(function(a){e.addField(c,a)});return c},buildCalculatorNameForChart:function(a){if((a=a.comparisonInfo)&&a.calculatorName)return a.calculatorName;var b=a&&a.levels&&a.levels.length?a.levels.join("_"):null;b&&(a.calculatorName=b);return b},processEsriInfographic:function(a){return{isInfographic:!0,variables:a.variables.slice(),levels:m.getLevels(a)}},createGeneralInfo:function(a){a=a||
[];var b={isGeneral:!0,fields:[],_cache:{}};a.forEach(function(a){e.addField(b,a)});return b},addGeneralFieldInfo:function(a,b){b&&b.fullName&&!a._cache[b.name]&&(a._cache[b.name]=!0,a.fields.push({fieldName:b.name,mapTo:b.fullName}))},addField:function(a,b){b&&b.fieldName&&!a._cache[b.fieldName]&&(a._cache[b.fieldName]=!0,a.fields.push(b))},optimizeInfos:function(a){var b=[],d=[],c=[];a.forEach(function(a){a.isGeneral?b.push(a):a.isChart?d.push(a):a.isInfographic&&c.push(a)});var g=e.createGeneralInfo();
b.forEach(function(a){a.fields.forEach(function(a){e.addField(g,a)})});var h={};d.forEach(function(a){if(a.calculatorName){var b=h[a.calculatorName]=h[a.calculatorName]||a;b!==a&&a.fields.forEach(function(a){e.addField(b,a)})}else a.fields.forEach(function(a){e.addField(g,a)})});var f={};c.forEach(function(a){var b=a.variables.join("_")+"_"+a.levels.join("_");f[b]=a});a=[];g.fields.length&&a.push(g);for(var k in h)a.push(h[k]);for(k in f)a.push(f[k]);return a}},f={ddLibrary:null,_getStandardEnrichInfos:function(a,
b,d){var c=[];a=f.ddLibrary.getDrillingOptions(a,b,d);if(!a)return c;a.forEach(function(a){c=c.concat(f._getStandardEnrichInfosForTableInfo(a,!1))});return c},_getStandardEnrichInfosForTableInfo:function(a,b){var d=[],c;for(c in a.stateData){var g=a.stateData[c];g.fieldInfo.isChart?d.push(e.processChartJson(g.fieldInfo.chartJson,function(a){var b="n"===c?"":"_"+c.toUpperCase();return a+b})):!b&&g.fieldInfo.isInfographic&&g.fieldInfo.infographicJson.variables&&d.push(e.processEsriInfographic(g.fieldInfo.infographicJson))}return d},
_getCustomEnrichInfos:function(a){var b=[];l.processSectionFieldInfos(a,function(a){a.isInfographic&&a.infographicJson.variables&&b.push(e.processEsriInfographic(a.infographicJson))});return b},getEnrichInfosForTemplateJson:function(a,b){var d=[];l.processTemplateFieldInfos(b,function(b){b.isInfographic&&b.infographicJson.variableTables&&b.infographicJson.variableTables.forEach(function(c){if(c.variable&&c.variable.fieldInfo){var e=b.infographicJson.dataDrilling&&b.infographicJson.dataDrilling[c.variable.fieldInfo.templateName];
d=e&&e.sectionJson?d.concat(f._getCustomEnrichInfos(e.sectionJson)):d.concat(f._getStandardEnrichInfos(a,c.variable.fieldInfo))}})});return e.optimizeInfos(d)}};f.buildCalculatorNameForChart=e.buildCalculatorNameForChart;f.optimizeInfos=e.optimizeInfos;return f});