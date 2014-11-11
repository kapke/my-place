(function () {
'use strict';
function mainCtrl ($scope, notesRepository) {
	$scope.notes = [];
	$scope.newNote = {};

	$scope.addNote = addNote;
	$scope.cancelEdits = cancelEdits;

	// $scope.$on('Notes.noteDeleted', function () {
	// 	loadNotes();
	// });

	$scope.$on('Notes.noteEdit', cancelEdits);

	notesRepository.addEventListener('noteSaved', function (note) {
		$scope.notes.push(note);
		emptyNewNote();
	});

	notesRepository.addEventListener('noteDeleted', function (note) {
		var index = $scope.notes.indexOf(note);
		if(index >= 0) {
			$scope.notes.splice(index, 1);
		}
	});

	loadNotes();
	emptyNewNote();

	function loadNotes () {
		notesRepository.getNotes().then(function (notes) {
			$scope.notes = notes;
		});
	}		

	function addNote () {
		notesRepository.saveNote(notesRepository.createNote($scope.newNote));
	}

	function emptyNewNote () {
		$scope.newNote = notesRepository.getEmptyNoteData();
	}

	function cancelEdits () {
		$scope.$broadcast('Notes.cancelEdit');
	}
}
mainCtrl.$inject = ['$scope', 'Notes.notesRepository'];

angular.module('Notes')
.controller('Notes.mainCtrl', mainCtrl)
;
})();