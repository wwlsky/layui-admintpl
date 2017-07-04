/**
 * 后台模板定制
 * 公共分页
 * @authors 梵天 (502832965@qq.com)
 * @date    2017-07-04 00:53:08
 */

layui.define(['laypage'], function(exports) {

    var laypage = layui.laypage;

    exports('adminPage', {
        page: function(contElem, pages) {
            laypage({
                cont: contElem
                ,pages: pages
                //,hash: 'page'
                ,skin: '#5FB878'
                ,skip: true
            });
        }
    });

});