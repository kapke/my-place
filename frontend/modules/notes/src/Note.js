function noteFactory (api) {
	return api.getResource({
		type: api.BACKEND
	  , module: 'notes'
	  , resource: 'notes/:id'
	  , config: {
	  		id: '@id'
	  	}
	  , actions: {
	  		update: {
	  			method: 'PUT'
	  		  , params: {}
	  		}
	  	}
	})
}
noteFactory.$inject = ['MyPlace.apiService'];

angular.module('Notes')
.factory('Notes.Note', noteFactory)
;