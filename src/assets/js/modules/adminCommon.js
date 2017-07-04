/**
 * 后台模板定制
 * 公共模块
 * @authors 梵天 (502832965@qq.com)
 * @date    2017-07-04 00:53:08
 */

 layui.define(['layer', 'element'], function(exports) {

    var $ = layui.jquery
        ,layer = layui.layer
        ,element = layui.element();

    exports('adminCommon', {
        // 首页默认加载解析
        homePageTpl: function() {
            $('#main')
            .find('.layui-tab-item')
            .eq(0)
            .load('./views/home.html?v=' + new Date().getTime());
        }
        /**
         * 导航加载解析
         * @param  {url}      需要解析的模板Url地址
         * @param  {filter}   监听的Tab-filter属性
         * @param  {title}    tab标签名字
         * @param  {layId}    tab对应的lay-id
         * @return {[type]}
         */
        ,reloadTpl: function(url, filter, title, layId) {
            $('#tpl').load(url, function(tpl){
                element.tabAdd(filter, {
                    title: title,
                    content: tpl,
                    id: layId
                });
                element.tabChange(filter, layId);
            });
        }
        // 刷新浏览器历史，去除hash
        ,reloadHistory: function(callback) {
            history.replaceState(null, '', location.pathname + location.search);
            callback && callback();
        }
        ,initUrlHash: function() {
            var _hash = location.hash;
            var _findLayNavUrlHash = $('[data-hash="' + _hash.replace('#', '') + '"]');

            if (_hash && _findLayNavUrlHash.length > 0) {

                var _url = _findLayNavUrlHash.data('url') + '?v=' + new Date().getTime();
                var _title = _findLayNavUrlHash.find('span').text();
                var _layId = _findLayNavUrlHash.data('id');

                adminCommon.reloadTpl(_url, 'tabMain', _title, _layId);
            }
        }
        /**
         * 初始化设置导航链接Tab的Hash值
         * @param  {_this}      当前导航
         * @param  {elem}       elem
         * @return {[type]}
         */
        ,initNavForTabUrlHash: function(_this, elem) {
            var url = _this.data('url') + '?v=' + new Date().getTime();
            var urlHash = _this.data('hash');
            var title = elem.find('span').text();
            var layId = elem.attr('data-id');
            var isTabShow = $('#tabBody').children('li[lay-id="' + layId + '"]').length;

            layer.msg(title);
            
            if (!isTabShow) {
                adminCommon.reloadTpl(url, 'tabMain', title, layId);
            }

            element.tabChange('tabMain', layId);
            adminCommon.reloadHistory(function(){
                location.hash = urlHash;
            });
        }
        // 根据lay-id找到导航对应的hash
        ,setHashByLayId: function() {
            var _findLayId = $('.layui-tab-title').find('.layui-this').attr('lay-id');
            var _findUrlHash = $('.layui-nav-item').find('dd[data-id="' + _findLayId + '"]').data('hash');
            if (_findUrlHash) {
                location.hash = _findUrlHash
            } else {
                adminCommon.reloadHistory();
            }
        }
        // 全屏显示
        ,toggleFullScreen: function() {  
            if (!document.fullscreenElement && // alternative standard method  
                !document.mozFullScreenElement && !document.webkitFullscreenElement) {// current working methods  
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        }
    });

});