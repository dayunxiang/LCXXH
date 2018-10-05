// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/renderers/ClassBreaksRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../symbols/jsonUtils ./Renderer ../support/expressionUtils".split(" "),function(k,g,f,p,q,n,m,r,t){k=k(r,{declaredClass:"esri.renderer.ClassBreaksRenderer",constructor:function(a,c){this.breaks=[];this._symbols={};this.infos=[];this.isMaxInclusive=!0;if(a&&!a.declaredClass){var b=a;this.attributeField=b.field;this.setValueExpression(b.valueExpression);this.valueExpressionTitle=
b.valueExpressionTitle;this.legendOptions=b.legendOptions;this.defaultSymbol=(a=b.defaultSymbol)&&(a.declaredClass?a:m.fromJson(a));this.backgroundFillSymbol=(a=b.backgroundFillSymbol)&&(a.declaredClass?a:m.fromJson(a));this._copy(["defaultLabel","classificationMethod:rest","normalizationType:rest","normalizationField","normalizationTotal"],b,this);var d=b.minValue;(b=b.classBreakInfos)&&b[0]&&n.isDefined(b[0].classMaxValue)&&g.forEach(b,function(a){var b=a.classMaxValue;a.minValue=d;d=a.maxValue=
b},this);g.forEach(b,this._addBreakInfo,this)}else this.defaultSymbol=a,this.attributeField=c},addBreak:function(a,c,b){a=f.isObject(a)?a:{minValue:a,maxValue:c,symbol:b};this._addBreakInfo(a)},removeBreak:function(a,c){var b,d=this.breaks,e,l=d.length,h=this._symbols;for(e=0;e<l;e++)if(b=d[e],b[0]==a&&b[1]==c){d.splice(e,1);delete h[a+"-"+c];this.infos.splice(e,1);break}},clearBreaks:function(){this.breaks=[];this._symbols={};this.infos=[]},getBreakIndex:function(a){var c=this.attributeField,b=a.attributes,
d=this.breaks,e=d.length,l=this.isMaxInclusive;if(this.valueExpression)a=this._getDataValue(a,this._cbInfo,null,this._cache.cbInfo);else if(f.isFunction(c))a=c(a);else{a=parseFloat(b[c]);var c=this.normalizationType,h;if(c)if(h=parseFloat(this.normalizationTotal),b=parseFloat(b[this.normalizationField]),"log"===c)a=Math.log(a)*Math.LOG10E;else if("percent-of-total"===c&&!isNaN(h))a=a/h*100;else if("field"===c){if(isNaN(a)||isNaN(b))return-1;a/=b}}if(null!=a&&!isNaN(a)&&"number"===typeof a)for(b=0;b<
e;b++)if(c=d[b],c[0]<=a&&(l?a<=c[1]:a<c[1]))return b;return-1},getBreakInfo:function(a){a=this.getBreakIndex(a);return-1!==a?this.infos[a]:null},getSymbol:function(a){return(a=this.breaks[this.getBreakIndex(a)])?this._symbols[a[0]+"-"+a[1]]:this.defaultSymbol},setMaxInclusive:function(a){this.isMaxInclusive=a},setValueExpression:function(a){this.valueExpression=a;this._cbInfo={valueExpression:a};this._cache.cbInfo=this._createCache(this._cbInfo)},getFieldsUsedInExpressions:function(){var a=this.inherited(arguments);
this.valueExpression&&(a=a.concat(t.extractFieldNames(this.valueExpression)));a.sort();return g.filter(a,function(c,b){return 0===b||a[b-1]!==c})},isContinuousRenderer:function(){var a=!1;if(this.infos&&1===this.infos.length)var c=this.attributeField,b=this.normalizationField,d=this.valueExpression,a=this.getVisualVariablesForType("colorInfo",!1)||[],e=this.getVisualVariablesForType("sizeInfo",!1)||[],l=this.getVisualVariablesForType("opacityInfo",!1)||[],a=a.concat(e).concat(l),a=g.some(a,function(a){return(a.field===
c||a.valueExpression===d)&&a.normalizationField==b});return a},_normalizationTypeEnums:[["field","esriNormalizeByField"],["log","esriNormalizeByLog"],["percent-of-total","esriNormalizeByPercentOfTotal"]],_classificationMethodEnums:[["natural-breaks","esriClassifyNaturalBreaks"],["equal-interval","esriClassifyEqualInterval"],["quantile","esriClassifyQuantile"],["standard-deviation","esriClassifyStandardDeviation"],["geometrical-interval","esriClassifyGeometricalInterval"],["defined-interval","esriClassifyDefinedInterval"]],
_copy:function(a,c,b){g.forEach(a,function(a){var e=a.split(":"),d,h,g;1<e.length&&(a=e[0],d=this["_"+a+"Enums"],"rest"===e[1]?(h="1",g="0"):"sdk"===e[1]&&(h="0",g="1"));e=c[a];if(void 0!==e&&(b[a]=e,d&&h)){var f,k=d.length;for(f=0;f<k;f++)if(d[f][h]===e){b[a]=d[f][g];break}}},this)},_addBreakInfo:function(a){var c=a.minValue,b=a.maxValue;this.breaks.push([c,b]);this.infos.push(a);var d=a.symbol;d&&!d.declaredClass&&(a.symbol=m.fromJson(d));this._symbols[c+"-"+b]=a.symbol},toJson:function(){var a=
this.infos||[],c=n.fixJson,b=a[0]&&a[0].minValue,d=this.backgroundFillSymbol,a=f.mixin(this.inherited(arguments),{type:"classBreaks",field:this.attributeField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:f.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),backgroundFillSymbol:d&&d.toJson(),minValue:-Infinity===b?-Number.MAX_VALUE:b,classBreakInfos:g.map(a,function(a){a=f.mixin({},a);a.symbol=a.symbol&&a.symbol.toJson();
a.classMaxValue=Infinity===a.maxValue?Number.MAX_VALUE:a.maxValue;delete a.minValue;delete a.maxValue;return c(a)})});this._copy(["defaultLabel","classificationMethod:sdk","normalizationType:sdk","normalizationField","normalizationTotal"],this,a);a.hasOwnProperty("normalizationType")&&!a.normalizationType&&delete a.normalizationType;a.hasOwnProperty("classificationMethod")&&!a.classificationMethod&&delete a.classificationMethod;return c(a)}});p("extend-esri")&&f.setObject("renderer.ClassBreaksRenderer",
k,q);return k});