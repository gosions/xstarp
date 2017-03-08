/**
 * Created by jesse on 2017/3/7.
 */


/**
 * @constructor
 * @param {Number} width
 * @param {Number} height
 * */
function Search(width, height, inner) {
    if(inner) {
        this._inner = inner;
    } else {
        this._inner = new google.maps.Size();
    }

    this._type = 'Size';
    this.obj = this._inner;
    return this;
}

Search.prototype = {
    getWidth: function() {
        return this._inner.width;
    },
    getHeight: function() {
        return this._inner.height;
    },
    toString: function() {
        return this._inner.toString();
    },
    getObj : function(){
        return  this._inner;
    }
};




module.exports = Search;
