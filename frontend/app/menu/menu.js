'use strict';
Kapke.MyPlace.Menu = angular.module('MyPlace.Menu', []).
controller('MyPlace.Menu.menuCtrl', ['$scope', function ($scope) {

}]).
directive('myPlaceMenuMenu', function () {
	return {
		restrict: 'E',
		template: '<div>Tu będzie menu</div>'
	};
});