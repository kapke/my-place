(function () {
'use strict';
function noteView (Note) {
	var notesCount = 0;
	return {
		templateUrl: 'frontend/modules/notes/template/noteView.tpl'
	  ,	restrict: 'E'
	  ,	scope: {
			note: '='
		}
	  ,	controller: function ($scope) {
	  		notesCount++;
	  		$scope.editing = false;
	  		$scope.edited;

	  		$scope.$on('Notes.cancelEdit', cancelEdit);

	  		$scope.cancelEdit = cancelEdit;

	  		$scope.deleteNote = function () {
	  			$scope.note.$delete(function () {
	  				$scope.$emit('Notes.noteDeleted');
	  			});
	  		}
	  		$scope.edit = function () {
	  			$scope.$emit('Notes.noteEdit');
	  			$scope.editing = true;
	  			$scope.edited = {
	  				title: $scope.note.title,
	  				content: $scope.note.content
	  			};
	  		}
	  		$scope.saveEdit = function () {
	  			$scope.editing = false;
	  			$scope.note.title = $scope.edited.title;
	  			$scope.note.content = $scope.edited.content;
	  			$scope.note.$update();
	  		}
	  		$scope.$on('$destroy', function () {
	  			notesCount--;
	  		});

	  		function cancelEdit () {
	  			$scope.editing = false;
	  		}
	  	}
	}
}
noteView.$inject = ['Notes.Note'];

angular.module('Notes')
.directive('noteView', noteView)
;
})();