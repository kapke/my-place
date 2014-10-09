'use strict';
function moduleList (moduleManager) {
	return {
		restrict: 'E',
		controller: function ($scope) {
			$scope.modules = [];
			moduleManager.addEventListener('moduleListChanged', function () {
				$scope.modules = moduleManager.getModules();
			});
		},
		templateUrl: 'frontend/template/module/moduleList.tpl'
	};
}
moduleList.$inject = ['MyPlace.Module.moduleManager'];

function moduleListCtrl () {
}


angular.module('MyPlace.Module')
.controller('MyPlace.Module.moduleListCtrl', moduleListCtrl)
.directive('myPlaceModuleList', moduleList);