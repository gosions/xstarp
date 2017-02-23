/**
 * Created by fizz on 2017/2/13.
 * @constructor Polygon
 */

// var event = require('./event');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
var obc = require('./overlayBaseClass');

/**
 * @constructor
 * @param {Object} opts
 * @return an object, inner is prime google map Polygon instance.
 * */
function Polygon(opts) {
  this._type = 'Polygon';
  obc.addOverlay(opts, this);

  var newOpts = formatOpts.polygon(opts);
  this._inner = new google.maps.Polygon(newOpts);

}

Polygon.prototype = {

  setMap: obc.setMap,

  /**
   * @param {path:Array LngLat | Array lngLat} path
   * */
  setPath: function(path) {
    this._inner.setPath( path );
  },
  getPath: function() {},

  setOptions: function() {
    this._inner.setOptions( formatOpts.polygon(opts) );
  },

  getOptions: function() {},

  getBounds: function() {},

  getArea: function() {},

  hide: obc.hide,

  show: obc.show,



  /**
   * @param {any} ext extData
   * */
  setExtData: function(ext) {
    this._inner.extDate = ext;
  },

  getExtData: function() {
    return this._inner.extDate;
  },

  /**
   * @function judge whether a point in the polygon inner
   * @param {LngLat} point
   * */
  contains: function(point) {

  },

  on: onOff.on,
  off: onOff.off
};

module.exports = Polygon;


