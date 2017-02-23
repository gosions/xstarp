/**
 * Created by fizz on 2017/2/14.
 */

var LngLat = require('./LngLat');

module.exports = {

  map: formatOptsUni,

  infoWindow: formatOptsUni,

  marker: formatOptsUni,

  polyline: formatOptsUni,

  polygon: formatOptsUni,

  circle: formatOptsUni,

  markerClusterer: formatMarkerClusterer,

  path: canvertPath
};

function formatOptsUni(opts) {

  if('position' in opts) {
    opts.position = (new LngLat(opts.position))._inner;
  }

  if(opts.path) {
    opts.path = transfromPathToPaths(opts.path);
  }

  if(opts.center) {
    opts.center = (new LngLat(opts.center))._inner;
  }

  if(opts.map) {
    opts.map = opts.map._inner;
  }

  return opts;
}

function transfromPathToPaths(path) {
  var paths = [];
  path.forEach( function(item, index) {
    paths.push(arrCreateLngLat(item));
  });
  return paths;
}

function arrCreateLngLat(arr) {
  return new BMap.Point( parseFloat(arr[0]), parseFloat(arr[1]) );
}


/**************************************************
 * markerClusterer
 * ***********************************************/
function formatMarkerClusterer(map, markers, opts) {
  var newOpts = {};

  if(map._inner) {
    newOpts.map = map._inner;
  } else {
    newOpts.map = map;
  }

  newOpts.markers = markers.map( function(item) {
    return item._inner;
  });

  newOpts.opts = formatMarkerClustererOpts(opts);

  return newOpts;
}

/**
 * @param {Object} opts
 * @diff : minClusterSize : minimumClusterSize
 * */
function formatMarkerClustererOpts(opts) {
  if(opts.minClusterSize) {
    opts.minimumClusterSize = opts.minClusterSize;
  }

  if(opts.styles) {

    if(opts.styles) {
      var styles = opts.styles;
      if(styles.size) {
        styles.width = styles.getWidth();
        styles.height = styles.getHeight();
      }
    }

  }
}

function canvertPath(path) {
  // TODO: 如何处理这个path还未定
  return path;
}


// var flightPlanCoordinates = [
//   {lat: 37.772, lng: -122.214},
//   {lat: 21.291, lng: -157.821},
//   {lat: -18.142, lng: 178.431},
//   {lat: -27.467, lng: 153.027}
// ];

// var lineArr = [
//   [116.368904, 39.913423],
//   [116.382122, 39.901176],
//   [116.387271, 39.912501],
//   [116.398258, 39.904600]
// ];
