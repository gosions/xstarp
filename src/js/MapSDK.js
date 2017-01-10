/**
 *  地图api封装
 *  van
 *  15年11月
 *
 *  使用高德地图 命名方式与高德地图api呼应 简化了层次 方便调用
 *  依赖jq
 **/

//;document.write('<script src="http://webapi.amap.com/maps?v=1.3&key=a3b3d16e95cfd8d858300d093f839c5f"></script>');
(function(){
    window.XMapSdk=function (opt,theme){
        return new mapSdk(opt,theme);
    };

    var mapSdk=function(opt,theme){
        var defaultTheme={
            strokeColor: "#2e90df",
            strokeOpacity: 1,
            strokeWeight: 3,
            strokeStyle:'solid',
            fillColor: "#d2e8f5",
            fillOpacity: 0.5
        };

        var latLng = [104.056435,30.671192];//默认
        var defaultOpt={
            zoom:13,
            pulgin:[],
            center:latLng
        };

        this.opt= $.extend(true,{},defaultOpt,opt);
        this.theme= $.extend(true,{},defaultTheme,theme);



        this.mapObj=new AMap.Map(opt['dom'],this.opt);
        var mapObj= this.mapObj;
        for (var x in this.opt.pulgin)
        {
            opt= this.opt.pulgin[x];
            switch(x)
            {
                case 'scale':
                    this.mapObj.plugin(["AMap.Scale"],function(){
                        var scale = new AMap.Scale(opt);
                        mapObj.addControl(scale);
                    });
                    break;
                case 'toolBar':
                    this.mapObj.plugin(["AMap.ToolBar"], function () {
                        var toolBar = new AMap.ToolBar(opt);
                        mapObj.addControl(toolBar);
                    });
                    break;
                default:
                    break;
            }
        }

        return this;
    };
    mapSdk.prototype={
        clearMap:function (){
            this.mapObj.clearMap();
        },
        destroy:function (){

            this.mapObj.destroy();
        },
        setFitView:function (){
            this.mapObj.setFitView();
        },
        setMap:function (el){
            el.setMap(this.mapObj);
        },
        lngLat:function (lng,lat){
            return new AMap.LngLat(lng,lat);
        },
        icon:function (img){
            if(img){
                return new AMap.Icon({
                    image:img
                });
            }else{
                return new AMap.Icon();
            }
        },
        pixel:function (x,y){
            return new AMap.Pixel(x,y);
        },
        size:function (w,h){
            return new AMap.Size(w,h);
        },
        marker:function (lnglatXY,img,x,y,opt){
            var defaultOpt={
                map:this.mapObj,
                position: lnglatXY,
                zIndex:9999
            };
            if(img){
                opt.icon=this.icon(img)
            }
            if(x  &&  y){
                opt.offset=this.pixel(x,y);
            }
            return new AMap.Marker(this._handlerOpt(defaultOpt,opt));
        },
        infoWindow:function (content){
            return new AMap.InfoWindow({
                content:content,
                size:this.size(300, 0),
                autoMove:true,
                offset:this.pixel(0,-30)
            });
        },
        placeSearch:function (keyword,size,cb){
            AMap.service(["AMap.PlaceSearch"], function() {
                var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                    //map: mapObj,
                    pageSize:size,
                    pageIndex:1
                });
                placeSearch.search(keyword,function (status,res){
                    if(status == 'complete'  && res.poiList.pois.length){
                        //todo  处理是信息不全导致的没有结果  res.cityList有结果

                        cb(res.poiList.pois);
                    }
                });

            });
        },
        //地理编码和反地理编码
        unGeoCoder:function(lnglatXY,completeCb) {
            //var that=this;

            this.mapObj.plugin(["AMap.Geocoder"], function() {
                var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "base"
                });
                geocoder.getAddress(lnglatXY,function(e,res){
                    if(e == 'complete'){
                        completeCb(res.regeocode.formattedAddress);
                    }
                });
            });
        },
        geoCoder:function(address,completeCb) {
            //var that=this;

            this.mapObj.plugin(["AMap.Geocoder"], function() {
                var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "base"
                });
                geocoder.getLocation(address,function(e,res){
                    console.log(res);
                    if(e == 'complete' && res.info ==='OK'){

                        completeCb(res.geocodes);
                    }
                });
            });
        },

        //搜索   keyword：关键字  type:类型   cb:回调函数
        districtSearch:function (keyword,type,cb){
            AMap.service(["AMap.DistrictSearch"], function() {
                if(type== 'boundaries'){
                    var districtSearch = new AMap.DistrictSearch({ //构造地点查询类
                        extensions:'all',
                        subdistrict:0
                    });
                    districtSearch.search(keyword,function (status,res){
                        if(status == 'complete'){
                            var area=res.districtList[0];

                            var maxLength=0;
                            var maxboundaries=[];
                            for(var i =0;i< area.boundaries.length;i++){
                                if(area.boundaries[i].length > maxLength){
                                    maxLength=area.boundaries[i].length;
                                    maxboundaries=area.boundaries[i];
                                }
                            }

                            if(maxboundaries.length){
                                cb(true,{'name':area.name,'boundaries':maxboundaries});
                            }else{
                                cb(false,status);
                            }
                        }else{
                            cb(false,status);
                        }
                    });
                }else if(type== 'district'){
                    //todo  搜行政区名称
                    //var districtSearch = new AMap.DistrictSearch({ //构造地点查询类
                    //    subdistrict:3
                    //});
                    //...
                }

            });
        },
        mouseTool:function (type,drawCb,opt){
            var mapObj=this.mapObj;
            var that=this;
            var mouseTool;
            mapObj.plugin(["AMap.MouseTool"], function() {
                mouseTool= new AMap.MouseTool(mapObj);
                //todo  别的类型的绘制

                switch(type){
                    case 'polyLine':
                        mouseTool.polyline(opt);
                        break;
                    case 'polygon':
                        mouseTool.polygon(opt);
                        break;
                    case 'marker':
                        mouseTool.marker(opt);
                        break;
                    case 'circle':
                        mouseTool.circle(opt);
                        break;
                    default :
                        console.log("参数不正确");
                        break;
                }


                that.addListener(mouseTool, "draw", function (e){
                    drawCb(e,mouseTool);
                });
            });
            return mouseTool;

        },
        //编辑多边形    polygon:多边形对象    endCb：编辑结束后的回调
        polygonEdit:function (polygon,endCb){
            var mapObj=this.mapObj;
            var polyEditor;
            var that=this;

            mapObj.plugin(["AMap.PolyEditor"], function() {
                polyEditor = new AMap.PolyEditor(mapObj, polygon);
                polyEditor.open();

                that.addListener(polyEditor, "end", function (e){
                    endCb(e.target);
                });
            });

            return polyEditor;

        },
        //编辑圆   圆对象  endCb：编辑结束后的callBack  adjustCb:鼠标调整圆半径的时候触发   moveCB：移动的时候触发
        circleEditor:function(circle,endCb,adjustCb,moveCb){
            var mapObj=this.mapObj;
            var that=this;
            var circleEditor;
            mapObj.plugin(["AMap.CircleEditor"], function() {
                circleEditor= new AMap.CircleEditor(mapObj, circle);
                circleEditor.open();
                that.addListener(circleEditor,'end',function (e){

                    endCb(e.target);
                });
                if(adjustCb){
                    that.addListener(circleEditor,'adjust',function (e){
                        adjustCb(e.target);
                    });
                }
                if(moveCb){
                    that.addListener(circleEditor,'move',function (e){
                        moveCb(e.target);
                    });
                }


            });
            return  circleEditor;
        },
        polyLine:function(points,opt){
            return new AMap.Polyline(this._handlerOpt({
                map:this.mapObj,
                path:points
            },opt));
        },
        polygon:function (points,opt){
            return new AMap.Polygon(this._handlerOpt({
                map: this.mapObj,
                path: points
            },opt));
        },
        //画圆
        circle:function (lnglatXY,rauids,opt){
            var el=new AMap.Circle(this._handlerOpt({
                center: lnglatXY,// 圆心位置
                radius: rauids
            },opt));
            this.setMap(el);
            return el;
        },
        on:function (){

            this.addListener(arguments);
        },
        off:function (){
            this.removeListener(arguments);
        },
        addListener:function (){
            var param=arguments;
            if(arguments.length==2){
                return AMap.event.addListener(this.mapObj,param[0],param[1]);
            }else{
                return AMap.event.addListener(param[0],param[1],param[2]);
            }
        },
        removeListener:function (listener){
            AMap.event.removeListener(listener);
        },
        _handlerOpt:function (opt,theme){
            if(opt){
                return $.extend(true,{},this.theme,theme,opt);
            }else{
                return $.extend(true,{},this.theme,theme);

            }
        }

    };
})();
