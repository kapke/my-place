'use strict';
function menuCtrl ($scope, menuManager) {

}

menuCtrl.$inject = ['$scope', 'MyPlace.Menu.menuManager'];

function menuDirective (menuManager) {
	return {
		restrict: 'E',
		controller: function ($scope) {
			$scope.menu = [];
			menuManager.addEventListener('menuUpdated', function () {
				$scope.menu = menuManager.getActualMenu();
			});
		},
		templateUrl: 'frontend/template/menu/menu.tpl'
	};
}

menuDirective.$inject = ['MyPlace.Menu.menuManager'];

angular.module('MyPlace.Menu', [])
.controller('MyPlace.Menu.menuCtrl', menuCtrl)
.directive('myPlaceMenu', menuDirective)
;