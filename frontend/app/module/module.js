Kapke.MyPlace.Module = angular.module('MyPlace.Module', ['MyPlace.Module.ModuleManager', 'MyPlace.Module.ModuleList']).
controller('MyPlace.ModuleCtrl', ['$scope', '$state', '$resource', 'MyPlace.configService', function ($scope, $state, $resource, Config) {
	var actualModuleName = $state.params.module;
	$scope.moduleTemplate = 'frontend/modules/'+actualModuleName+'/template/main.html';
	$scope.$on('stateChangeSuccess', function () {
		actualModuleName = $state.params.module;
		$scope.moduleTemplate = 'frontend/modules/'+actualModuleName+'/template/main.html';
	});
	$scope.showParams = function () {
		console.log($state.current);
		console.log($state.params);
	}
	$scope.showParams();
}]);