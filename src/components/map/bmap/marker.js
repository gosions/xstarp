/**
 * @author fizzstack@gmail.com on 2017/2/13.
 * @Class Marker
 * @options
 * @高德： http://lbs.amap.com/api/javascript-api/reference/overlay#MarkerOptions
 * @百度： http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b3
 *
 * @Marker的Options.label 高德有，百度没有。
 *
 */

var obc = require('./overlayBaseClass');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
var LngLat = require('./lnglat');

/**
 * Represents a Marker
 * @constructor
 * @param {Object} opts
 * @param {Object} inner
 * @return an object, inner is prime google map Marker instance.
 * */
function Marker(opts, inner) {

  this._type = 'Marker';
  this._isInMapOverlay = false;

  if(inner) {
    this._inner = inner;
  } else {
    // 在opts转换之前就要判断添加overlay
    obc.addOverlay(opts, this);

    var newOpts = formatOpts.marker(opts);

    this._inner = new BMap.Marker(newOpts.position, newOpts);

    // this._init(newOpts);
  }

  // console.log(this);
}

Marker.prototype = {
  _init: obc._init,
  setMap: obc.setMap,
  getMap: obc.getMap,
  hide: obc.hide,
  show: obc.show,

  getPosition: function() {
    return new LngLat('', '', this._inner.getPosition());
  },

  on: onOff.on,
  off: onOff.off
};

module.exports = Marker;



