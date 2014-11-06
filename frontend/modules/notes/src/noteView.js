(function () {
	'use strict';
	function noteView () {
		return {
			templateUrl: 'frontend/modules/notes/template/noteView.tpl'
		  , restrict: 'E'
		  , scope: {
				note: '='
			}
		}
	}

	angular.module('Notes')
	.directive('noteView', noteView)
	;
})();