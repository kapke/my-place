'use strict';
function moduleCtrl ($scope, $state, $resource, Config, moduleManager) {
	$scope.actualTemplate = '';
	$scope.$on('stateChangeSuccess', function () {
		moduleManager.setActiveModule($state.params.module);
	});
	moduleManager.addEventListener('activeModuleChanged', function () {
		var actualModule = moduleManager.getActiveModule()
		if(actualModule) {
			var slug = actualModule.slug
			  , view = 'main'
			  ;
			$scope.actualTemplate = 'frontend/modules/'+slug+'/template/'+view+'.html'
		}
	});
	moduleManager.setActiveModule($state.params.module);
}

moduleCtrl.$inject = ['$scope', '$state', '$resource', 'MyPlace.configService', 'MyPlace.Module.moduleManager'];

angular.module('MyPlace.Module', ['MyPlace.Utils', 'MyPlace.Api'])
.controller('MyPlace.Module.moduleCtrl', moduleCtrl);