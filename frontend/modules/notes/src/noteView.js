(function () {
	'use strict';
	function noteView (Note) {
		return {
			templateUrl: 'frontend/modules/notes/template/noteView.tpl'
		  ,	restrict: 'E'
		  ,	scope: {
				note: '='
			}
		  ,	controller: function ($scope) {
		  		$scope.deleteNote = function () {
		  			$scope.note.$delete(function () {
		  				$scope.$emit('Notes.noteDeleted');
		  			});
		  		}
		  	}
		}
	}
	noteView.$inject = ['Notes.Note'];

	angular.module('Notes')
	.directive('noteView', noteView)
	;
})();