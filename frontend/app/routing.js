'use strict';
Kapke.MyPlace.config(function ($stateProvider) {
	$stateProvider
	.state('module', {
		url: '/:module/:view',
		templateUrl: 'frontend/template/module/moduleView.tpl',
		controller: 'MyPlace.Module.moduleCtrl'
	})
});