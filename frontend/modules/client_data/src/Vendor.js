function vendorFactory (api) {
	return api.getResource({
		type: api.BACKEND
	  , module: 'client_data'
	  , resource: 'vendors/:id'
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
vendorFactory.$inject = ['MyPlace.apiService'];

angular.module('ClientData')
.factory('ClientData.Vendor', vendorFactory)
;