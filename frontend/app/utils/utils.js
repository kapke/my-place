'use strict';
angular.module('MyPlace.Utils', [])
.factory('capitalizeFirst', function () {
	return function capitalizeFirst (str) {
		return str.slice(0, 1).toUpperCase()+str.substr(1);
	};
})
;