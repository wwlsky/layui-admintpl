/**
 * 后台模板定制
 * 配置信息
 * @authors 梵天 (502832965@qq.com)
 * @date    2017-07-04 00:54:02
 */

layui.config({
	base: './assets/js/modules/'
	,version: new Date().getTime()
}).use('adminMain', function(adminMain) {
	adminMain.init();
    form.render();
    //全选
    form.on('checkbox(allChoose)', function(data){
        var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
        child.each(function(index, item){
        item.checked = data.elem.checked;
    });
        form.render('checkbox');
    });
});