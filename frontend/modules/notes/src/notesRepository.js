(function () {
'use strict';
function notesRepository (Repository, Note) {
	Repository.call(
		this
	  ,	Note
	  , ['note', 'notes']
	  , {
			title: {type: String}
	  	  ,	content: {defaultValue: ''}
		}
	);
}

notesRepository.$inject = ['MyPlace.Crud.Repository', 'Notes.Note'];

angular.module('Notes')
.service('Notes.notesRepository', notesRepository);
})();