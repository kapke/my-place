'use strict';
angular.module('MyPlace')
.config(function ($stateProvider) {
	$stateProvider
	.state('module', {
		  url: '/:module/:view'
		, templateUrl: 'frontend/template/module/moduleView.tpl'
		// , controller: 'MyPlace.Module.moduleCtrl'
	})
	// .state('module.view', {
	// 	  url: '/:view'
	// 	, templateUrl: 'frontend/template/module/moduleView.tpl'
	// 	, controller: 'MyPlace.Module.moduleCtrl'
	// })
	;
})
;