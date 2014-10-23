function productFactory (api) {
	var Product = api.getResource({
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
	Product.prototype.getFullName = function () {
		var vendorName = '';
		if(this.vendor) {
			vendorName = this.vendor.name;
		}
		return vendorName+' '+this.name;
	}

	return Product;
}
productFactory.$inject = ['MyPlace.apiService'];

angular.module('ClientData')
.factory('ClientData.Product', productFactory)
;