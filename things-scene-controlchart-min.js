(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Control=function(_Chart$Line){_inherits(Control,_Chart$Line);function Control(context,config){_classCallCheck(this,Control);config.type="controlChart";return _possibleConstructorReturn(this,Object.getPrototypeOf(Control).call(this))}return Control}(Chart.Line);exports.default=Control},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Chart=undefined;var _Chart=require("./charts/Chart.Control");var _Chart2=_interopRequireDefault(_Chart);var _controller=require("./controllers/controller.control-chart");var _controller2=_interopRequireDefault(_controller);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Chart.ControlChart=_Chart2.default;Chart.controllers.controlChart=_controller2.default;Chart.defaults.global.maintainAspectRatio=false;var _scene=scene;var Component=_scene.Component;var Rect=_scene.Rect;exports.Chart=Chart},{"./charts/Chart.Control":1,"./controllers/controller.control-chart":3}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if("value"in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}Chart.defaults.controlChart=Chart.defaults.line;Chart.defaults.controlChart.legend={labels:{generateLabels:function generateLabels(chart){var data=chart.data;var helpers=Chart.helpers;return helpers.isArray(data.datasets)?data.datasets.map(function(dataset,i){if(dataset.showInLegend===false)return null;return{text:dataset.label,fillStyle:!helpers.isArray(dataset.backgroundColor)?dataset.backgroundColor:dataset.backgroundColor[0],hidden:!chart.isDatasetVisible(i),lineCap:dataset.borderCapStyle,lineDash:dataset.borderDash,lineDashOffset:dataset.borderDashOffset,lineJoin:dataset.borderJoinStyle,lineWidth:dataset.borderWidth,strokeStyle:dataset.borderColor,datasetIndex:i}},this):[]}}};function initControlChart(chartInstance){chartInstance.chartSeries=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=chartInstance.data.datasets[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var dataset=_step.value;chartInstance.chartSeries.push(dataset)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}chartInstance.controlLimitSeries={ucl:null,cl:null,lcl:null};chartInstance.specLines={usl:null,lsl:null};chartInstance.chart.width=chartInstance.width;chartInstance.chart.height=chartInstance.width}function excludeNullValueLabel(chartInstance){chartInstance.legend.buildLabels=function(){var me=this;var legendItemsArr=me.options.labels.generateLabels.call(me,me.chart);me.legendItems=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=legendItemsArr[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var legendItem=_step2.value;if(legendItem==null)continue;me.legendItems.push(legendItem)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}if(me.options.reverse){me.legendItems.reverse()}}}function generateSpecLines(chartInstance){generateUpperControlLine(chartInstance);generateLowerControlLine(chartInstance);generateCenterLine(chartInstance)}function generateUpperControlLine(chartInstance){var data=[];var dataLength=chartInstance.data.labels.length;var spcData=chartInstance.data.rawData.spcData;if(spcData){data=spcData.ucl}chartInstance.controlLimitSeries.ucl=generateSPCLine(chartInstance,data)}function generateLowerControlLine(chartInstance){var data=[];var dataLength=chartInstance.data.labels.length;var spcData=chartInstance.data.rawData.spcData;if(spcData){data=spcData.lcl}chartInstance.controlLimitSeries.lcl=generateSPCLine(chartInstance,data)}function generateCenterLine(chartInstance){var data=[];var dataLength=chartInstance.data.labels.length;var spcData=chartInstance.data.rawData.spcData;if(spcData){data=spcData.cl}chartInstance.controlLimitSeries.cl=generateSPCLine(chartInstance,data,{borderColor:"rgba(25,220,150,1)",borderWidth:2,borderDash:[0]})}function generateSPCLine(chart,data,options){var obj={showInLegend:false,fill:false,lineTension:0,borderWidth:1,borderDash:[10,10,2,10],backgroundColor:"rgba(220,92,92,0.4)",borderColor:"rgba(220,92,92,1)",borderCapStyle:"butt",borderJoinStyle:"miter",pointBorderColor:"rgba(220,92,92,1)",pointBackgroundColor:"#fff",pointBorderWidth:0,pointHoverRadius:0,pointHoverBackgroundColor:"rgba(220,92,92,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:0,pointRadius:0,pointHitRadius:0,data:data||[]};if(options)Object.assign(obj,options);chart.data.datasets.push(obj);return obj}function updateSPCDatas(chartInstance){var spcData=chartInstance.data.rawData.spcData;var controlLimits=chartInstance.controlLimitSeries;for(var key in spcData){if(spcData[key]){if(spcData[key].length>0&&controlLimits[key]._meta[chartInstance.id].data.length===spcData[key].length){controlLimits[key]._meta[chartInstance.id].data.shift(1)}}controlLimits[key].data=spcData[key]||[]}}function updatePointColor(chartInstance){for(var i in chartInstance.chartSeries){checkOOC(chartInstance,i)}console.log(chartInstance.chartSeries[0]._meta[chartInstance.id].data[0]._model.borderColor);chartInstance.chartSeries[0]._meta[chartInstance.id].data[0]._model.borderColor="rgba(255,0,0,1)"}function checkOOC(dataArr,spcDataObject,currIndex){console.log(dataArr,spcDataObject,currIndex)}function checkOOCs(chartInstance){var spcData=chartInstance.config.data.spcData;var seriesData=chartInstance.config.data.seriesData;for(var i in seriesData[0].data){checkOOC(seriesData[0].data,spcData,i)}}Chart.plugins.register({beforeInit:function beforeInit(chartInstance){if(chartInstance.config.type==="controlChart"){initControlChart(chartInstance);excludeNullValueLabel(chartInstance);generateSpecLines(chartInstance)}},beforeUpdate:function beforeUpdate(chartInstance){if(chartInstance.config.type==="controlChart"){var spcData=chartInstance.data.rawData.spcData;var seriesData=chartInstance.data.rawData.seriesData;var controlLimits=chartInstance.controlLimitSeries;if(!spcData||Object.keys(spcData).length===0){spcData={ucl:null,cl:null,lcl:null}}updateSPCDatas(chartInstance)}},afterUpdate:function afterUpdate(chartInstance){}});var controlChart=function(_Chart$controllers$li){_inherits(controlChart,_Chart$controllers$li);function controlChart(chart,datasetIndex){_classCallCheck(this,controlChart);return _possibleConstructorReturn(this,Object.getPrototypeOf(controlChart).call(this,chart,datasetIndex))}_createClass(controlChart,[{key:"initialize",value:function initialize(chart,datasetIndex){_get(Object.getPrototypeOf(controlChart.prototype),"initialize",this).call(this,chart,datasetIndex)}}],[{key:"datasetElementType",get:function get(){return Chart.elements.Line}},{key:"dataElementType",get:function get(){return Chart.elements.Point}}]);return controlChart}(Chart.controllers.line);exports.default=controlChart},{}],4:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _controlchart=require("./controlchart");Object.defineProperty(exports,"ControlChart",{enumerable:true,get:function get(){return _interopRequireDefault(_controlchart).default}});Object.defineProperty(exports,"Chart",{enumerable:true,get:function get(){return _controlchart.Chart}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}},{"./controlchart":2}]},{},[4]);