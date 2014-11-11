(function () {
'use strict';
function notesRepository (repositoryFactory, Note) {
	repositoryFactory.call(
		this
	  ,	Note
	  , ['note', 'notes']
	  , {
			title: {type: String}
	  	  ,	content: {defaultValue: ''}
		}
	);
}

notesRepository.$inject = ['MyPlace.Crud.repositoryFactory', 'Notes.Note'];

angular.module('Notes')
.service('Notes.notesRepository', notesRepository);
})();