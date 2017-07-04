/**
 * 后台模板定制
 * 公共弹窗封装
 * @authors 梵天 (502832965@qq.com)
 * @date    2017-07-04 00:53:08
 */

 layui.define(['layer'], function(exports) {

    var $ = layui.jquery
        ,layer = layui.layer;

    exports('adminLayer', {
        /**
         * @param  {url}      需要解析的模板Url地址
         * @param  {title}    窗口标题
         * @param  {width}    窗口宽度
         * @param  {height}   窗口高度
         * @return {[type]}
         */
        openClickLayerPage: function(url, title, width, height) {
            var _width = width ? width + 'px' : 'auto';
            var _height = height ? height + 'px' : 'auto';
            $('#tpl').load(url, function(tplContent){
                layer.open({
                    type: 1
                    ,anim: 4
                    ,maxmin: true
                    ,area: [_width, _height]
                    ,title: title
                    ,content: tplContent
                });
            });
        }
        ,confirmInfoLayer: function(title, content) {
            layer.confirm(content, {
                title: title
                ,btn: ['确认','取消']
                ,btn1: function() {
                    layer.msg('点击了确定');
                }
                ,btn2: function() {
                    //layer.close();
                    layer.msg('取消选择');
                }
            });
        }
        /**
         * @param  {width}      窗口宽度
         * @param  {heigth}     窗口高度
         * @param  {optArr}     数组对象
         * [{
                title: 'TAB1', 
                content: '内容1'
            }, {
                title: 'TAB2', 
                content: '内容2'
            }, {
                title: 'TAB3', 
                content: '内容3'
            }]
         * @return {[type]}
         */
        ,openClickLayerTabs: function(width, height, optArr) {
            var _width = width ? width + 'px' : 'auto';
            var _height = height ? height + 'px' : 'auto';
            layer.tab({
                area: [_width, _height],
                tab: optArr
            });
        }
        // 新订单信息提示
        ,newOrderTips: function() {
            layer.open({
                type: 1
                ,anim: 2
                ,skin: 'layui-layer-rim'    //加上边框
                ,area: ['300px', '200px']
                ,offset: 'rb'
                ,content: '<div style="text-align:center; margin-top: 60px;"><i class="layui-icon">&#xe60b;</i> 您有新的订单</div>'
                ,shade: 0
            });
        }
    });

 });