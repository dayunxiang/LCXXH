// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","dojo/when ./supportClasses/imageUtils/ImageReplacer ./supportClasses/imageUtils/ImageOptimizer ./supportClasses/NodeProcessor ./supportClasses/SVGBuilder ./supportClasses/_Logger".split(" "),function(b,f,g,h,k,e){return{htmlToSvg:function(c,a){var l=(new Date).getTime();e.setLogFunction(a.log);a=a||{};a.definitions=a.definitions||[];a.fitParams=a.fitParams||{};return b(f.replaceImagesWithDataURL(c),function(){return b(h.processNode(c,
a),function(d){d=k.buildSVG(d,c,a);return b(g.optimizeSize([d],a.sizeLimit),function(a){e.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-l)/1E3).toFixed(3)+" s.");return a[0]})})})}}});