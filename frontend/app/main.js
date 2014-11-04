'use strict';
angular.module('MyPlace', ['ui.router', 'ngAnimate', 'MyPlace.Translate', 'MyPlace.Menu', 'MyPlace.Module', 'ClientData', 'ClientConversions', 'Notes']);

(function () {
function mainCtrl ($scope, $timeout, menuManager) {
	$scope.menuVisible = false;
	$scope.menuHidden = true;
	menuManager.addEventListener('menuUpdated', function () {
		var menu = menuManager.getActualMenu();
		$scope.menuVisible = menu.visible;
		$scope.menuHidden = !menu.visible;
	});
}

mainCtrl.$inject = ['$scope', '$timeout', 'MyPlace.Menu.menuManager'];

angular.module('MyPlace')
.controller('MyPlace.mainCtrl', mainCtrl)
;
})();