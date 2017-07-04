/**
 * 后台模板定制
 * 入口模块
 * @authors 梵天 (502832965@qq.com)
 * @date    2017-07-04 00:54:02
 */

// 全局定义
var toggleFullScreen, 
	$, element, form, laydate,
	adminCommon, adminLayer, adminPage;

layui.define(['element', 'form', 'laydate', 'adminCommon', 'adminLayer', 'adminPage'], function(exports) {
	
	// 全局变量赋值
	$ = layui.jquery
	,element = layui.element()
	,form = layui.form()
	,laydate = layui.laydate
	// admin模块
	,adminCommon = layui.adminCommon
	,adminPage = layui.adminPage
	,adminLayer = layui.adminLayer;

	// 初始化UrlHash
	adminCommon.initUrlHash();
	
	// 监听导航变动
	element.on('nav(navBar)', function(elem) {
		adminCommon.initNavForTabUrlHash($(this), elem);
	});

	// 监听tab变动
	element.on('tab(tabMain)', function(data) {
		adminCommon.setHashByLayId();
	});
	
	exports('adminMain', {
		// 初始化
		init: function() {
			adminCommon.homePageTpl();
			adminLayer.newOrderTips();
			toggleFullScreen = adminCommon.toggleFullScreen;
		}
	});
	
});
