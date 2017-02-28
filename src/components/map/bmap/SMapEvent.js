/**
 * Created by fizz on 2017/2/20.
 * @constructor for google map event Object.
 * 包装百度事件对象
 */

var LngLat = require('./LngLat');

/**
 * 包装Google的事件触发时的event对象
 *
 * @constructor
 * @param {Object} e event object
 * */
function SMapEvent(e) {
  this._inner = e;
  this._type = 'Event';

  this.lnglat = new LngLat(e.latLng.lng(), e.latLng.lat());
  this.lnglat.I = e.latLng.lng();
  this.lnglat.L = e.latLng.lat();

  this.pixel = {
    x: e.pixel.x,
    y: e.pixel.y
  };
}

module.exports = SMapEvent;
