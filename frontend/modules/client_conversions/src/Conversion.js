function conversionFactory (api) {
	return api.getResource({
		type: api.BACKEND
	  , module: 'client_conversions'
	  , resource: 'conversions/:clientId/:productId'
	  , config: {
		  	clientId: '@client.id'
		  , productId: '@product.id'
		}
	  , actions: {
	  		update: {
	  			method: 'PUT'
	  		  , params: {}
	  		}
	    }
	});
}

conversionFactory.$inject = ['MyPlace.apiService'];

angular.module('ClientConversions')
.factory('ClientConversions.Conversion', conversionFactory)
;