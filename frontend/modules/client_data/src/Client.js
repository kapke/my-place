function clientFactory (api) {
	return api.getResource({
		type: api.BACKEND
	  , module: 'client_data'
	  , resource: 'clients/:id'
	  , config: {
		  	id: '@id'
		}
	  , actions: {
	  		update: {
	  			method: 'PUT'
	  		  , params: {}
	  		}
	    }
	});
}
clientFactory.$inject = ['MyPlace.apiService'];

angular.module('ClientData')
.factory('ClientData.Client', clientFactory)
;