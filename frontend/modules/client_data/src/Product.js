function productFactory (api) {
	return api.getResource({
		type: api.BACKEND
	  , module: 'client_data'
	  , resource: 'products/:id'
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
productFactory.$inject = ['MyPlace.apiService'];

angular.module('ClientData')
.factory('ClientData.Product', productFactory)
;