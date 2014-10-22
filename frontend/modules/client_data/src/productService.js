function productService ($q, EventListener, Product, Vendor) {
	EventListener.call(this);

	var that = this;

	this.createProduct = createProduct;
	this.getEmptyProductData = getEmptyProductData;
	this.saveProduct = saveProduct;
	this.getProducts = getProducts;

	function createProduct (vendor, name) {
		var product = new Product();
		product.vendor = vendor;
		product.name = name;
		return product;
	}

	function getEmptyProductData () {
		return {
			vendor: ''
		  , name: ''
		}
	}

	function saveProduct (product) {
		return product.$save(function () {
			that.launchEvent('productSaved', [product]);
		});
	}

	function getProducts (grouped) {
		var deferred = $q.defer();
		Product.query(function (products) {
	  		if(!!grouped) {
	  			var output = {};
	  			products.map(function (product) {
					if (product.vendor) {
						if (!output[product.vendor.name]) {
							output[product.vendor.name] = [];
						}
						output[product.vendor.name].push(product);
					}
				});
				deferred.resolve(output);
			} else {
				deferred.resolve(products);
			}
	    });
		return deferred.promise;
	}
}
productService.$inject = ['$q', 'MyPlace.Utils.EventListener', 'ClientData.Product', 'ClientData.Vendor'];

angular.module('ClientData')
.service('ClientData.productService', productService)
;