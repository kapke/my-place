(function () {
'use strict';
function mainCtrl ($scope, Note) {
	$scope.notes = [];
	$scope.newNote = {};

	$scope.addNote = addNote;
	$scope.cancelEdits = cancelEdits;

	$scope.$on('Notes.noteDeleted', function () {
		loadNotes();
	});

	$scope.$on('Notes.noteEdit', cancelEdits);

	loadNotes();
	emptyNewNote();

	function loadNotes () {
		Note.query(function (notes) {
			$scope.notes = notes;
		});
	}		

	function addNote () {
		var note = new Note();
		note.title = $scope.newNote.title;
		note.description = $scope.newNote.description;
		note.content = $scope.newNote.content;
		note.$save(function () {
			loadNotes();
			emptyNewNote();
		});
	}

	function emptyNewNote () {
		$scope.newNote = {
			title: ''
		  , description: ''
		  , content: ''
		};
	}

	function cancelEdits () {
		$scope.$broadcast('Notes.cancelEdit');
	}
}
mainCtrl.$inject = ['$scope', 'Notes.Note'];

angular.module('Notes')
.controller('Notes.mainCtrl', mainCtrl)
;
})();