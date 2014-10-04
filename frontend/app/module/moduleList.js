Kapke.MyPlace.Module.ModuleList = angular.module('MyPlace.Module.ModuleList', ['MyPlace.Api']).
controller('MyPlace.Module.moduleListCtrl', ['$scope', 'MyPlace.apiService', function ($scope, api) {
	$scope.ala = 'Ala ma kota';
}]).
directive('myPlaceModuleList', ['MyPlace.apiService', function (api) {
	var modules = api.Module.query();
	console.log(modules);
	return {
		restrict: 'E',
		controller: function ($scope) {
			$scope.modules = modules;
		},
		templateUrl: 'frontend/template/module/moduleList.tpl'
	};
}]);