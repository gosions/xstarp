window.xFormat={str2time:function(e){var i=e.replace(/-/g,"/");if(i.indexOf("/")==-1)if(i.indexOf(":")==-1)if(8==i.length)i=i.substr(0,4)+"/"+i.substr(4,2)+"/"+i.substr(6,2);else{var t=i.substr(0,2);t<100&&t>30&&(t="19"+t),t<30&&t>0&&(t="20"+t),i=t+"/"+i.substr(2,2)+"/"+i.substr(4,2)}else i="2016/06/06 "+i;else{var t=i.split("/");t[0]<100&&t[0]>30&&(t[0]="19"+t[0]),t[0]<30&&t[0]>0&&(t[0]="20"+t[0]),i=t[0]+"/"+t[1]+"/"+t[2]}return i=new Date(Date.parse(i)),!!i.getTime()&&i.getTime()/1e3},time2str:function(e){var i=new Date(1e3*e),t=i.getFullYear(),n=i.getMonth()+1,o=i.getDate(),a=i.getHours(),s=i.getMinutes(),c=i.getSeconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),t+"-"+n+"-"+o+" "+a+":"+s+":"+c},number2money:function(e,t){t=t>0&&t<=20?t:2,e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(t)+"";var n=e.split(".")[0].split("").reverse(),o=e.split(".")[1],a="";for(i=0;i<n.length;i++)a+=n[i]+((i+1)%3==0&&i+1!=n.length?",":"");return a.split("").reverse().join("")+"."+o},number2word:function(e){}},$(document).ready(function(){$(".x-tab-nav li").click(function(){var e=$(this).index();$(this).addClass("x-active").siblings().removeClass("x-active"),$(".x-tab-content").eq(e).addClass("x-active").siblings().removeClass("x-active")})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function i(){var e=u.height()-M.height();return e/2}function t(){A=M.height(),I=M.width()}function n(e){var i=S-e.pageY,t=O-e.pageX;M.css("margin-top",-i),M.css("margin-left",-t)}function o(){N.onload=function(){M.show(),y.hide(),M.prop("src",N.src),M.css({"margin-top":i()}),C=N.width/M.width()*1.5,t()},p.click(function(i){F&&this===i.target&&(e(this).hide(),N.src="")}),v.click(function(e){F&&this===e.target&&(p.hide(),N.src="")}),M.bind("mousedown",function(i){i.preventDefault(),O=i.pageX-parseInt(M.css("margin-left")),S=i.pageY-parseInt(M.css("margin-top")),e(document).bind("mousemove",function(i){i.preventDefault(),e("body").css("cursor","move"),F=!1,n(i)}),e(document).bind("mouseup",function(i){e(document).unbind("mousemove"),e("body").css("cursor","initial"),clearTimeout(L),L=setTimeout(function(){F=!0},100)})}),M.click(function(e){F&&(d(++$)||$--)}),m.click(function(e){d(++$)||$--,e.stopPropagation()}),g.click(function(e){d(--$)||$++,e.stopPropagation()}),M.bind("mousewheel",function(e){e.preventDefault();var i=e.originalEvent.wheelDelta;120==i?z<C&&(z+=.1):i==-120&&z>.5&&(z-=.1),a()}),k.click(function(){c()}),x.click(function(){z<C&&(z+=.1),a()}),w.click(function(){z>.5&&(z-=.1),a()}),_.click(function(){l(M[0],D+=90)})}function a(){M.css("width",I*z),M.css("height",A*z),M.css("max-width","none"),M.css("max-height","none"),M.css("margin-top",i())}function s(){p=e("<div>").appendTo("body"),p.css({background:"rgba(0,0,0,0.5)",position:"fixed",top:"0",bottom:"0",left:"0",right:"0","z-index":"9999",display:"none"}),h=e("<div>").appendTo(p),h.css({width:"70%",position:"relative","min-width":"500px",margin:"0% auto",padding:"10px 0",height:"100%"}),b=e("<div>").appendTo(h),b.css({width:"30%",background:"#ddd",display:"none",height:"100%",float:"left","box-sizing":"border-box",padding:"1%"}),u=e("<div>").appendTo(h),u.css({background:"#000",width:"100%",padding:"1% 1% 50px 1%","box-sizing":"border-box",overflow:"hidden",height:"100%","user-select":"none","text-align":"center",position:"relative","line-height":"100%"}),M=e("<img>").appendTo(u),M.css({transition:"transform 0.5s",cursor:"pointer"}),f=e("<div>").appendTo(u),f.css({position:"absolute",bottom:"5px",background:"#000",width:"98%"}),k=e('<span class="x-imgView-recover">').appendTo(f),k.css({display:"inline-block",width:"22px",height:"19px",margin:"10px",cursor:"pointer"}),x=e('<span class="x-imgView-magnify">').appendTo(f),x.css({display:"inline-block",width:"22px",height:"20px",margin:"10px",cursor:"pointer"}),w=e('<span class="x-imgView-shrink">').appendTo(f),w.css({display:"inline-block",width:"21px",height:"20px",margin:"10px",cursor:"pointer"}),_=e('<span class="x-imgView-rotate">').appendTo(f),_.css({display:"inline-block",width:"20px",height:"20px",margin:"10px",cursor:"pointer"}),g=e('<span class="x-imgView-left">').appendTo(u),g.css({display:"inline-block",position:"absolute",width:"25px",height:"43px",left:"1%",top:"48%",cursor:"pointer"}),m=e('<span class="x-imgView-right">').appendTo(u),m.css({display:"inline-block",position:"absolute",width:"25px",height:"43px",cursor:"pointer",right:"1%",top:"48%"}),v=e('<span class="x-imgView-close">').appendTo(h),v.css({display:"inline-block",position:"absolute",width:"30px",height:"30px",cursor:"pointer",right:"-14px",top:"0"}),y=e('<span class="x-imgView-loading">').appendTo(u),y.css({position:"absolute",top:"48%",left:"50%",width:"40px",height:"40px","margin-left":"-30px",display:"none"})}function c(){M.css({"max-height":"100%","max-width":"100%","margin-left":"0",width:"initial",height:"initial"}),M.css({"margin-top":i()}),z=1,l(M[0],D=0)}function r(){B||(s(),o(),B=!0)}function d(e){return!!P[e]&&(c(),0==P.length?(m.hide(),g.hide()):1==P.length?(m.hide(),g.hide()):0==e?(g.hide(),m.show()):e==P.length-1?(m.hide(),g.show()):(g.show(),m.show()),p.show(),P.length&&y.show(),M.hide(),U(e),N.src=P[e],!0)}function l(e,i,t){if(e&&1===e.nodeType&&(i=parseFloat(i)||0,t=parseFloat(t)||1,"number"==typeof i)){var n=i*(Math.PI/180),o=Math.cos(n)*t,a=-1*Math.sin(n)*t,s=Math.sin(n)*t;e.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+o+",M12="+a+",M21="+s+",M22="+o+",SizingMethod='auto expand')",e.style.MozTransform="rotate("+i+"deg) scale("+t+")",e.style.WebkitTransform="rotate("+i+"deg) scale("+t+")",e.style.OTransform="rotate("+i+"deg) scale("+t+")",e.style.Transform="rotate("+i+"deg) scale("+t+")"}}var p,h,u,f,m,g,v,b,x,w,_,k,y,M,I,A,T,C,L,O,S,j,P=[],N=new Image,$=1,z=1,D=0,F=!0,U=function(){},B=!1;window.xImgView=function(i){r(),P=i.imgs,j=i.zIndex||2e3,T=i.infoDom,T&&(b.show(),b.html(T),e(T).show(),u.css("width","70%")),U=i.onSwitch||function(){},d($=0)},e(document).ready(function(){e("body").on("click",".x-imgView .x-imgView-item",function(){r(),P=[],e.each(e(this).parent().children(),function(i){P[i]=e(this).attr("x-imgView-src")}),d($=e(this).index())})})}),function(){window.XMapSdk=function(i,t){return new e(i,t)};var e=function(e,i){var t={strokeColor:"#2e90df",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid",fillColor:"#d2e8f5",fillOpacity:.5},n=[104.056435,30.671192],o={zoom:13,pulgin:[],center:n};this.opt=$.extend(!0,{},o,e),this.theme=$.extend(!0,{},t,i),this.mapObj=new AMap.Map(e.dom,this.opt);var a=this.mapObj;for(var s in this.opt.pulgin)switch(e=this.opt.pulgin[s],s){case"scale":this.mapObj.plugin(["AMap.Scale"],function(){var i=new AMap.Scale(e);a.addControl(i)});break;case"toolBar":this.mapObj.plugin(["AMap.ToolBar"],function(){var i=new AMap.ToolBar(e);a.addControl(i)})}return this.init(),this};e.prototype={init:function(){var e=$("body");e.on("click",".x-mapPopButton",function(){$(".x-popMap").fadeIn("slow")})},clearMap:function(){this.mapObj.clearMap()},destroy:function(){this.mapObj.destroy()},setFitView:function(){this.mapObj.setFitView()},setMap:function(e){e.setMap(this.mapObj)},lngLat:function(e,i){return new AMap.LngLat(e,i)},icon:function(e){return e?new AMap.Icon({image:e}):new AMap.Icon},pixel:function(e,i){return new AMap.Pixel(e,i)},size:function(e,i){return new AMap.Size(e,i)},marker:function(e,i,t,n,o){var a={map:this.mapObj,position:e,zIndex:9999};return i&&(o.icon=this.icon(i)),t&&n&&(o.offset=this.pixel(t,n)),new AMap.Marker(this._handlerOpt(a,o))},infoWindow:function(e){return new AMap.InfoWindow({content:e,size:this.size(300,0),autoMove:!0,offset:this.pixel(0,-30)})},placeSearch:function(e,i,t){AMap.service(["AMap.PlaceSearch"],function(){var n=new AMap.PlaceSearch({pageSize:i,pageIndex:1});n.search(e,function(e,i){"complete"==e&&i.poiList.pois.length&&t(i.poiList.pois)})})},unGeoCoder:function(e,i){this.mapObj.plugin(["AMap.Geocoder"],function(){var t=new AMap.Geocoder({radius:1e3,extensions:"base"});t.getAddress(e,function(e,t){"complete"==e&&i(t.regeocode.formattedAddress)})})},geoCoder:function(e,i){this.mapObj.plugin(["AMap.Geocoder"],function(){var t=new AMap.Geocoder({radius:1e3,extensions:"base"});t.getLocation(e,function(e,t){console.log(t),"complete"==e&&"OK"===t.info&&i(t.geocodes)})})},popMap:function(e,i,t){var n=this,o=Array(),a=(Array(),Array());$(".x-popMap").fadeIn("slow"),$("body").on("click",".x-popMap-cancel",function(){n.closePopMap()}),$("body").on("click",".x-popMap-ok",function(){n.closePopMap(),i(o)});for(var s=0;s<e.length;s++){var c=e[s],r=this.marker([c.lng,c.lat],"img/marker_icon1.png",-20,-40,{content:'<div class="marker"><img src="img/marker_icon1.png"></div>'});r.extData=c.extData,a.push(r),console.log(r.getIcon()),r.on("click",function(e){$.each(a,function(e,i){i.setContent('<div class="marker"><img src="img/marker_icon1.png"></div>')}),this.setContent('<div class="marker"><img src="img/marker_select.png"></div>'),o=e.target.extData})}this.mapObj.on("click",function(e){console.log("222"),n.unGeoCoder(e.lnglat,function(i){t({lngLat:e.lnglat,address:i}),n.closePopMap()})}),console.log(a)},closePopMap:function(){$(".x-popMap").fadeOut("slow")},districtSearch:function(e,i,t){AMap.service(["AMap.DistrictSearch"],function(){if("boundaries"==i){var n=new AMap.DistrictSearch({extensions:"all",subdistrict:0});n.search(e,function(e,i){if("complete"==e){for(var n=i.districtList[0],o=0,a=[],s=0;s<n.boundaries.length;s++)n.boundaries[s].length>o&&(o=n.boundaries[s].length,a=n.boundaries[s]);a.length?t(!0,{name:n.name,boundaries:a}):t(!1,e)}else t(!1,e)})}})},mouseTool:function(e,i,t){var n,o=this.mapObj,a=this;return o.plugin(["AMap.MouseTool"],function(){switch(n=new AMap.MouseTool(o),e){case"polyLine":n.polyline(t);break;case"polygon":n.polygon(t);break;case"marker":n.marker(t);break;case"circle":n.circle(t);break;default:console.log("参数不正确")}a.addListener(n,"draw",function(e){i(e,n)})}),n},polygonEdit:function(e,i){var t,n=this.mapObj,o=this;return n.plugin(["AMap.PolyEditor"],function(){t=new AMap.PolyEditor(n,e),t.open(),o.addListener(t,"end",function(e){i(e.target)})}),t},circleEditor:function(e,i,t,n){var o,a=this.mapObj,s=this;return a.plugin(["AMap.CircleEditor"],function(){o=new AMap.CircleEditor(a,e),o.open(),s.addListener(o,"end",function(e){i(e.target)}),t&&s.addListener(o,"adjust",function(e){t(e.target)}),n&&s.addListener(o,"move",function(e){n(e.target)})}),o},polyLine:function(e,i){return new AMap.Polyline(this._handlerOpt({map:this.mapObj,path:e},i))},polygon:function(e,i){return new AMap.Polygon(this._handlerOpt({map:this.mapObj,path:e},i))},circle:function(e,i,t){var n=new AMap.Circle(this._handlerOpt({center:e,radius:i},t));return this.setMap(n),n},on:function(){this.addListener(arguments)},off:function(){this.removeListener(arguments)},addListener:function(){var e=arguments;return 2==arguments.length?AMap.event.addListener(this.mapObj,e[0],e[1]):AMap.event.addListener(e[0],e[1],e[2])},removeListener:function(e){AMap.event.removeListener(e)},_handlerOpt:function(e,i){return e?$.extend(!0,{},this.theme,i,e):$.extend(!0,{},this.theme,i)}}}(),window.xPopUp=function(e,i,t){function n(){l.remove(),d.remove(),$("body").css({overflow:"auto"})}function o(){return i={p_width:600,p_height:150,title:"提示",content:"",btn:"",isClose:!0,confirmfn:function(){},closefn:function(){}},$("body").css({overflow:"hidden"}),d=$('<div class="x-pop-layer"></div>'),d.appendTo("body"),l=$('<div class="x-pop-main"></div>'),l.appendTo("body"),p=$('<div class="x-pop-close"><i class="iconfont icon-cuowu"></i></div>'),p.appendTo(l),d.click(function(){n()}),p.click(function(){n()}),l}function a(e){var i=$(window).width(),t=$(window).height(),n=e.width()+30,o=e.height()+30,s=(i-n)/2,c=$(document).scrollTop()-o/2+t/2;e.css({left:s,top:c}),window.onresize=function(){a(e)}}function s(e,i){if(l=o(),l.css({width:e.p_width,height:e.p_height}),e.btn){var t="";$.each(e.btn,function(e,i){t+='<button class="x-button '+i.classStr+'">'+i.name+"</button>"})}h=$('<div><div class="x-pop-title">提示</div><div class="x-pop-content"></div><div class="x-pop-button"></div></div>'),h.appendTo(l);var s=h.find(".x-pop-content"),c=h.find(".x-pop-button");s.html(e.content),c.html(t),a(l),c.find("button").click(function(){n()}),i&&setTimeout(n,i)}function c(e){l=o(),l.css({width:e.p_width,height:e.p_height}),h=$('<div><div class="x-pop-title">提示</div><div class="x-pop-content"></div><div class="x-pop-button"><button class="x-button confirm">确定</button><button class="x-button cancel">取消</button></div></div>'),h.appendTo(l);var i=h.find(".x-pop-content"),t=h.find(".x-pop-button");i.html(e.content),a(l),t.find(".confirm").click(function(){e.isClose?n():"function"==typeof e.confirmfn?(e.confirmfn(),n()):n()}),t.find(".cancel").click(function(){e.isClose?n():"function"==typeof e.closefn?(e.closefn(),n()):n()})}function r(e){if(l=o(),l.css({width:e.p_width,height:e.p_height}),e.btn){var i="";$.each(e.btn,function(e,t){i+='<button class="x-button '+t.classStr+'">'+t.name+"</button>"})}h=$('<div><div class="x-pop-title"></div><div class="x-pop-content"></div><div class="x-pop-button" style="text-align:right;"></div></div>'),h.appendTo(l);var t=h.find(".x-pop-title"),s=h.find(".x-pop-content"),c=h.find(".x-pop-button");t.html(e.title),s.html(e.content),c.html(i);var r=h.find(".x-pop-button button");a(l),$.each(e.btn,function(e,i){r.eq(e).click(function(){i.isClose?i.opra?(i.opra(),n()):n():i.opra&&i.opra()})})}var d,l,p,h;"prompt"===e?s(i,t):"confirm"===e?c(i):r(i)},function(e){function i(){var i="<div></div>";return e(i).css({"margin-left":"13px"})}function t(){var i='<i class="iconfont icon-jia1"></i>';return e(i).css({"font-size":"14px","font-weight":"bold","vertical-align":"base-line","padding-right":"0px",cursor:"pointer"})[0].outerHTML}function n(e){e.removeClass("icon-jia1"),e.addClass("icon-jian1")}function o(e){e.removeClass("icon-jian1"),e.addClass("icon-jia1")}function a(e){for(var i in e)return"object"==typeof e[i];return!1}function s(i){for(var t=[],n=e.extend(!0,[],i),o=0,a=i.length;o<a;o++)for(var s=o;s<a;s++)i[o].id===i[s].nodeId&&(n[s]=null),i[o].nodeId===i[s].id&&(n[o]=null);return e.each(n,function(e,i){i&&t.push(i.nodeId)}),t[0]}window.xTree=function(e){return new r(e)};var c={dom:"",is_trigger:!1,has_search:!1,only_child:!0,node_merge:!0,zIndex:1,choose:!1,is_multi:!0,expand:!1,width:null,maxHeight:null,data:[],onInit:function(){},onOpen:function(){},onBeforeOpen:function(){},onClose:function(e){},onCheck:function(e,i,t){},onCancel:function(e,i,t){}},r=function(e){return this._init(e),this};r.prototype={_is_open:!1,_originId:{nodeId:[],id:[]},_searchTimer:"",_is_first:!0,_init:function(i){this.opt=e.extend(!0,{},c,i),this.dom=this.opt.dom,this.data=this.opt.data,this.html=this._makePanel(),this.rootId=1314;var t=a(this.data);if(!t)return!1;this.opt.onInit();var n=this;if(this.rootId=s(n.data),this.opt.choose){var o=this.opt.choose;e.each(o.nodeId,function(i,t){var o={};e.each(n.data,function(e,i){i.id==t&&1==i.is_node&&(o=i,o.is_check=!0)}),n._chgAllChildren(o.id,o.is_check)}),e.each(o.id,function(i,t){e.each(n.data,function(e,i){i.id==t&&0==i.is_node&&(i.is_check=!0)})})}this._originId=this.getId(),this.opt.is_trigger?(this.dom.off("click.xTree"),this.dom.on("click.xTree",function(e){n.start(),e.stopPropagation()}),e(document).on("click.xTree",function(){n.end()})):this.start()},start:function(){return this.opt.onBeforeOpen(),this._showPanel(),this._showData(),this._expand(),this._is_open=!0,this.html.find(".x-tree-search").focus(),this.opt.onOpen(),this},end:function(){if(this._is_open){this.html.hide(),this.dom.val(this.getName());var e=this.getId();this._is_open=!1,this.opt.onClose(JSON.stringify(e)!==JSON.stringify(this._originId)),this._originId=e}},getName:function(){var i=[],t=this.data;if(this.opt.only_child)e.each(t,function(e,t){t.is_check&&!t.is_node&&i.push(t.name)});else if(this.opt.node_merge){var n=[];e.each(t,function(e,i){i.is_check&&i.is_node&&n.push(i.id)});var o=e.extend(!0,[],t);e.each(o,function(i,t){(t.is_check&&e.inArray(t.nodeId,n)!=-1||!t.is_check)&&(o[i]=null)}),e.each(o,function(e,t){t&&i.push(t.name)})}else e.each(t,function(e,t){t.is_check&&i.push(t.name)});return i.join()},getId:function(){var i=[],t=[],n=this.data;if(this.opt.only_child)e.each(n,function(e,t){t.is_check&&!t.is_node&&i.push(n[e].id)});else{if(this.opt.node_merge){var o=[];e.each(n,function(e,i){i.is_check&&i.is_node&&o.push(i.id)});var a=e.extend(!0,[],n);e.each(a,function(i,t){(t.is_check&&e.inArray(t.nodeId,o)!=-1||!t.is_check)&&(a[i]=null)}),e.each(a,function(e,o){o&&(o.is_node?t.push(n[e].id):i.push(n[e].id))})}else e.each(n,function(e,o){o.is_check&&(o.is_node?t.push(n[e].id):i.push(n[e].id))});i={id:i,nodeId:t}}return i},cancelItem:function(i,t){var n={},o=this.html.find('input[data-isNode="'+parseInt(t)+'"][data-id="'+i+'"]').prop("checked",!1);e.each(this.data,function(e,o){o.id==i&&o.is_node==t&&(n=o,n.is_check=!1)}),this._chgItem(n,o)},cancelAll:function(){e.each(this.data,function(e,i){i.is_check=!1}),this.html.find("input").prop("checked",!1),this.opt.onCancel()},checkItem:function(i,t){var n={},o=this.html.find('input[data-isNode="'+parseInt(t)+'"][data-i="'+i+'"]').prop("checked",!0);e.each(this.data,function(e,o){o.id==i&&o.is_node==t&&(n=o,n.is_check=!0)}),this._chgItem(n,o)},checkAll:function(){this.opt.is_multi&&(e.each(this.data,function(e,i){i.is_check=!0}),this.html.find("input").prop("checked",!0),this.opt.onCheck())},getItem:function(){var i=[],t=this.data;if(this.opt.only_child)e.each(t,function(e,t){t.is_check&&!t.is_node&&i.push(t)});else if(this.opt.node_merge){var n=[];e.each(t,function(e,i){i.is_check&&i.is_node&&n.push(i.id)});var o=e.extend(!0,[],t);e.each(o,function(i,t){(t.is_check&&e.inArray(t.nodeId,n)!=-1||!t.is_check)&&(o[i]=null)}),e.each(o,function(e,t){t&&i.push(t)})}else e.each(t,function(e,t){t.is_check&&i.push(t)});return i},search:function(e){if(this._removeLayer(this.rootId),""===e)this.html.find('div[node-id="'+this.rootId+'"]').remove(),this._showLayer(this.rootId);else for(var i in this.data)this.data[i].is_node||this.data[i].name.indexOf(e)==-1||this.html.find('div[node-id="'+this.rootId+'"]').append(this._makeItem(this.data[i]))},_showPanel:function(){this.opt.is_trigger?(this.html.css({top:this.dom.position().top+this.dom.outerHeight(),left:this.dom.position().left,minWidth:this.opt.width?this.opt.width:this.dom.outerWidth()}),this.html.on("click",function(e){e.stopPropagation()}),this.dom.after(this.html)):this.dom.append(this.html)},_showData:function(){this._is_first?(this._showLayer(this.rootId),this._is_first=!1):this.html.show()},_expand:function(){var i=this;if(i.opt.expand===!0)e.each(i.data,function(e,t){t.is_node&&i.html.find("i").filter(".icon-jia1").click()});else if(i.opt.expand){var t=[];t.push(i.rootId);for(var n=0;n<i.opt.expand;n++)t=i._expandLevel(t)}},_expandLevel:function(i){var t=this,n=[];return e.each(i,function(i,o){e.each(t.data,function(e,i){i.nodeId===o&&(n.push(i.id),t.html.find('div[node-id="'+i.nodeId+'"] > i').filter(".icon-jia1").click())})}),n},_showLayer:function(t){var o=this._getLayerData(t),a=i();t===this.rootId?(a=e(a).attr("node-id",this.rootId),this.html.append(a)):(n(this.html.find('div[node-id="'+t+'"] i')),this.html.find('div[node-id="'+t+'"]').append(a));for(var s in o)a.append(this._makeItem(o[s]))},_removeLayer:function(e){this.html.find('div[node-id="'+e+'"]>div').remove(),o(this.html.find('div[node-id="'+e+'"] i'))},_getLayerData:function(e){var i=[];for(var t in this.data)this.data[t].nodeId==e&&i.push(this.data[t]);return i},_chgItem:function(e,i){this.opt.is_multi&&(e.is_node&&(i.parent().parent().find("label > input").prop("checked",e.is_check),this._chgAllChildren(e.id,e.is_check)),e.is_check?this._checkParentNode(e.nodeId):this._cancelParentNode(e.nodeId));var t=[];this._getChild(e,t),e.is_check?this.opt.onCheck(e,i,t):this.opt.onCancel(e,i,t)},_getChild:function(i,t){if(i.is_node){var n=this;e.each(n.data,function(e,o){o.nodeId==i.id&&(t.push(o),o.is_node&&n._getChild(o,t))})}},_cancelParentNode:function(i){var t=this;e.each(t.data,function(e,n){n.id==i&&n.is_node&&n.is_check&&(n.is_check=!1,t.html.find('input[data-isNode="1"][data-id="'+i+'"]').prop("checked",!1),t._cancelParentNode(n.nodeId))})},_checkParentNode:function(i){var t=this,n=!0;e.each(t.data,function(e,t){t.nodeId!=i||t.is_check||(n=!1)}),e.each(t.data,function(e,o){o.id==i&&o.is_node&&!o.is_check&&n&&(o.is_check=!0,t.html.find('input[data-isNode="1"][data-id="'+i+'"]').prop("checked",!0),t._checkParentNode(o.nodeId))})},_chgAllChildren:function(i,t){var n=this;e.each(e.extend(!0,[],this.data),function(e,o){o.nodeId==i&&(n.data[e].is_check=t,o.is_node&&n._chgAllChildren(o.id,t))})},_makePanel:function(){var i="<div></div>";this.opt.has_search&&(i=this._makeSearch(i));var t;return t=this.opt.is_trigger?{"font-family":"Microsoft YaHei","z-index":this.opt.zIndex,border:"1px solid #5d5d5d",background:"#fff",position:"absolute",maxHeight:this.opt.maxHeight,"white-space":"nowrap",overflow:"auto"}:{"font-family":"Microsoft YaHei",background:"#fff",maxHeight:this.opt.maxHeight,"white-space":"nowrap",overflow:"auto"},e(i).css(t)},_makeSearch:function(i){var t='<input class="x-tree-search" type="text" placeholder="搜索"/></div>';t=e(t).css({border:"none",padding:"4px 0",margin:"5px auto 0 auto",display:"block"});var n=this;return e(t).on("keyup paste",function(){var e=this;clearTimeout(n._searchTimer),n._searchTimer=setTimeout(function(){n.search(e.value)},100)}),e(i).append(t)},_makeNode:function(i){var n;n=e(this.opt.is_multi?'<div node-id="'+i.id+'">'+t()+'<label><input type="checkbox" data-isNode="1" data-id="'+i.id+'" '+(i.is_check?"checked":"")+' data-name="'+i.name+'"/><span>'+i.name+"</span></label></div>":this.opt.only_child?'<div node-id="'+i.id+'">'+t()+"<span>"+i.name+"</span></div>":'<div node-id="'+i.id+'">'+t()+'<label><input type="radio" name="'+this.dom.selector+'" data-isNode="1" data-id="'+i.id+'" '+(i.is_check?"checked":"")+' data-name="'+i.name+'"/><span>'+i.name+"</span></label></div>"),n.find("span").css({cursor:"pointer","user-select":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none"}),n.find("input").css({"vertical-align":"middle"});var o=this;return n.find("i").on("click",function(t){e(this).hasClass("icon-jia1")?o._showLayer(i.id):o._removeLayer(i.id)}),n},_makeChild:function(i){var t;return t=e(this.opt.is_multi?'<div><span></span><label><input type="checkbox" data-id="'+i.id+'" data-isNode="0" data-name="'+i.name+'" '+(i.is_check?"checked":"")+"/>"+i.name+"</label></div>":"<div>"+(this.opt.only_child?"":"<span></span>")+'<label><input type="radio" name="'+this.dom.selector+'" data-id="'+i.id+'" data-isNode="0" data-name="'+i.name+'" />'+i.name+"</label></div>"),t.find("span").css({width:"16px","user-select":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none",display:"inline-block"}),t.find("input").css({"vertical-align":"middle"}),t},_makeItem:function(i){var t;t=i.is_node?this._makeNode(i):this._makeChild(i);var n=this;return t.find("input").on("click",function(){n.opt.is_multi?i.is_check=!i.is_check:(e.each(n.data,function(e,i){i.is_check=!1}),i.is_check=!0),n._chgItem(i,e(this))}),t}}}($),function(e){var i,t=e("#x-uploader"),n=e('<ul class="x-filelist"></ul>').appendTo(t.find(".x-queueList")),o=t.find(".x-statusBar"),a=o.find(".x-info"),s=t.find(".x-uploadBtn"),c=t.find(".x-placeholder"),r=o.find(".progress").hide(),d=0,l=0,p=window.devicePixelRatio||1,h=110*p,u=110*p,f="pedding",m={},g=function(){var e=new Image,i=!0;return e.onload=e.onerror=function(){1==this.width&&1==this.height||(i=!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i}(),v=function(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(i){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1],10)}(),b=function(){var e=document.createElement("p").style,i="transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e;return e=null,i}();if(!WebUploader.Uploader.support("flash")&&WebUploader.browser.ie)return void(v?!function(e){window.expressinstallcallback=function(e){switch(e){case"Download.Cancelled":alert("您取消了更新！");break;case"Download.Failed":alert("安装失败");break;default:alert("安装已成功，请刷新！")}delete window.expressinstallcallback};var i="./expressInstall.swf",t='<object type="application/x-shockwave-flash" data="'+i+'" ';WebUploader.browser.ie&&(t+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),t+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+i+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',e.html(t)}(t):t.html('<a href="http://www.adobe.com/go/getflashplayer" target="_blank" border="0"><img alt="get flash player" src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" /></a>'));if(!WebUploader.Uploader.support())return void alert("Web Uploader 不支持您的浏览器！");var x={dom:"",fileButton:{id:"#x-filePicker",label:"批量上传"},addButton:{id:"#x-filePicker-add",label:"继续添加"},dnd:"#x-dndArea",paste:"#x-uploader",swf:"../../dist/Uploader.swf",chunked:!1,chunkSize:524288,server:"?m=Admin&c=Upload&a=upload",compress:!1,disableGlobalDnd:!0,fileNumLimit:300,fileSizeLimit:209715200,fileSingleSizeLimit:52428800};window.xUpload=function(e){return new _(e)};var w=x,_=function(i,t){return this.opt=e.extend(!0,{},w,i),this.init(this.opt),this};_.prototype={init:function(p){function v(t){var o=e('<li id="'+t.id+'"><p class="title">'+t.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),a=e('<div class="file-panel"><span class="cancel">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div>').appendTo(o),s=o.find("p.progress span"),c=o.find("p.imgWrap"),r=e('<p class="error"></p>'),d="",l=function(e){switch(e){case"exceed_size":d="文件大小超出";break;case"interrupt":d="上传暂停";break;default:d="上传失败，请重试"}console.log(d),r.text(d).appendTo(o)};"invalid"===t.getStatus()?(l(t.statusText),console.log(t.getStatus())):(c.text("预览中"),i.makeThumb(t,function(i,t){var n;return i?void c.text("不能预览"):void(g?(n=e('<img src="'+t+'">'),c.empty().append(n)):console.log("预览出错"))},h,u),m[t.id]=[t.size,0],t.rotation=0),t.on("statuschange",function(e,i){"progress"===i?s.hide().width(0):"queued"===i&&(o.off("mouseenter mouseleave"),a.remove()),"error"===e||"invalid"===e?(console.log(t.statusText),l(t.statusText),m[t.id][1]=1):"interrupt"===e?l("interrupt"):"queued"===e?(r.remove(),s.css("display","block"),m[t.id][1]=0):"progress"===e?(r.remove(),s.css("display","block")):"complete"===e&&(s.hide().width(0),o.append('<span class="success"></span>')),o.removeClass("state-"+i).addClass("state-"+e)}),o.on("mouseenter",function(){a.stop().animate({height:30})}),o.on("mouseleave",function(){a.stop().animate({height:0})}),a.on("click","span",function(){var n,o=e(this).index();switch(o){case 0:return void i.removeFile(t);case 1:t.rotation+=90;break;case 2:t.rotation-=90}b?(n="rotate("+t.rotation+"deg)",c.css({"-webkit-transform":n,"-mos-transform":n,"-o-transform":n,transform:n})):c.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(t.rotation/90%4+4)%4+")")}),o.appendTo(n)}function x(i){var t=e("#"+i.id);delete m[i.id],w(),t.off().find(".file-panel").off().end().remove()}function w(){var i,t=0,n=0,o=r.children();e.each(m,function(e,i){n+=i[0],t+=i[0]*i[1]}),i=n?t/n:0,p.progress(Math.round(100*i)+"%"),o.eq(0).text(Math.round(100*i)+"%"),o.eq(1).css("width",Math.round(100*i)+"%"),2==I&&_()}function _(){var e,t="";"ready"===f?t="选中"+d+"个文件，共"+WebUploader.formatSize(l)+"。":"confirm"===f?(e=i.getStats(),e.uploadFailNum&&(t="已成功上传"+e.successNum+"个文件，"+e.uploadFailNum+'个文件上传失败，<a class="retry" href="#">重新上传</a>失败文件')):(e=i.getStats(),t="共"+d+"张（"+WebUploader.formatSize(l)+"），已上传"+e.successNum+"张",e.uploadFailNum&&(t+="，失败"+e.uploadFailNum+"张")),a.html(t)}function k(t){var a;if(t!==f){switch(s.removeClass("state-"+f),s.addClass("state-"+t),f=t){case"pedding":c.removeClass("element-invisible"),n.hide(),o.addClass("element-invisible"),i.refresh();break;case"ready":c.addClass("element-invisible"),e(A.id).removeClass("element-invisible"),n.show(),o.removeClass("element-invisible"),i.refresh();break;case"uploading":e(A.id).addClass("element-invisible"),r.show(),s.text("暂停上传");break;case"paused":r.show(),s.text("继续上传");break;case"confirm":if(r.hide(),e(A.id).removeClass("element-invisible"),s.text("开始上传"),a=i.getStats(),a.successNum&&!a.uploadFailNum)return void k("finish");break;case"finish":a=i.getStats(),a.successNum?console.log("上传成功"):(f="done",location.reload())}2==I&&_()}}function y(e){var i;return e/1024>1&&(e/=1024,i="KB"),e/1024>1&&(e/=1024,i="MB"),e/1024>1&&(e/=1024,i="GB"),e=e.toFixed(2),i=e+i}function M(n){var o,a=e('<p class="error"></p>'),s="",c=function(e){switch(e){case"exceed_size":s="文件大小超出";break;case"interrupt":s="上传暂停";break;default:s='上传失败，请重试 <a class="retry" href="#">重新上传</a>'}a.html(s).appendTo(t)};"invalid"===n.getStatus()?c(n.statusText):i.makeThumb(n,function(i,a){g?(o=e('<img src="'+a+'"><span class="x-fileName">'+n.name+"</span>"),t.find(".x-imgFile").append(o)):console.log("预览出错")},h,u),n.on("statuschange",function(e,i){"error"===e||"invalid"===e?(console.log(n.statusText),c(n.statusText)):"interrupt"===e?c("interrupt"):"queued"===e?a.remove():"progress"===e&&a.remove()}),k("ready"),e(".x-statusBar .x-upload-btns").remove()}var I=p.fileType,A=p.addButton;p.pick=p.fileButton,1==I&&(p.accept={title:"Images",extensions:"gif,jpg,jpeg,bmp,png",mimeTypes:"image/*"}),i=WebUploader.create(p),i.addButton(A),i.on("ready",function(){window.uploader=i}),i.onUploadProgress=function(i,t){if(2==I){var n=e("#"+i.id),a=n.find(".progress span");a.css("width",100*t+"%"),m[i.id][1]=t,w()}else if(1==I){a=e(".progress span"),o.show(),e(".progress").show(),a.css("width",100*t+"%");var s=r.children();s.eq(0).text(Math.round(100*t)+"%"),s.eq(1).css("width",Math.round(100*t)+"%"),this.options.progress(Math.round(100*t)+"%")}},i.onUploadSuccess=function(e){1==I&&t.find(".x-info").text("头像上传成功，总大小："+y(e.size))},i.onUploadAccept=function(e,i){this.options.success(e,i)},i.onFileQueued=function(e){2==I?(d++,l+=e.size,1===d&&(c.addClass("element-invisible"),o.show()),v(e),k("ready"),w()):1==I&&(M(e),"ready"===f?i.upload(e):"paused"===f?i.upload(e):"uploading"===f&&i.stop(e))},i.onUploadError=function(e,i){"http"==i&&console.log("服务器错误")},i.onFileDequeued=function(e){2==I&&(d--,l-=e.size,d||k("pedding"),x(e),w())},i.onUploadFinished=function(){2==I&&k("confirm")},i.onStartUpload=function(e){k("uploading")},i.onStopUpload=function(){console.log("暂停"),k("paused")},i.onError=function(e){switch(e){case"Q_TYPE_DENIED":alert("不符合的文件类型");break;case"Q_EXCEED_SIZE_LIMIT":alert("文件总大小超出，请重新设置");break;case"Q_EXCEED_NUM_LIMIT":alert("文件数量过多，请分批上传")}},s.on("click",function(){return console.log("开始上传"),!e(this).hasClass("disabled")&&void("ready"===f?i.upload():"paused"===f?i.upload():"uploading"===f&&i.stop())}),t.on("click",".retry",function(){i.retry()}),s.addClass("state-"+f),w()}}}($);