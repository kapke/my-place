'use strict';
Kapke.MyPlace.config(function ($stateProvider) {
	$stateProvider.state('module', {
		url: '/module/:slug',
		template: function (params) {
			return '<ng-include src="\'frontend/modules/'+params.slug+'/template/main.html\'" />';
		},
		controller: 'MyPlace.ModuleCtrl'
	});
});