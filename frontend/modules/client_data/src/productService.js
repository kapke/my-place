function productService ($q, EventListener, Product, Vendor) {
	EventListener.call(this);

	var that = this;

	this.createProduct = createProduct;
	this.getEmptyProductData = getEmptyProductData;
	this.saveProduct = saveProduct;
	this.getProducts = getProducts;
	this.createVendor = createVendor;
	this.getEmptyVendorData = getEmptyVendorData;
	this.saveVendor = saveVendor;
	this.getVendors = getVendors;

	function createProduct (vendor, name, id) {
		var product = new Product();
		product.vendor = vendor;
		product.name = name;
		if(id) {
			product.id = id;
		}
		product.fullName = product.getFullName();
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
			products.forEach(function (product) {
				product.fullName = product.getFullName();
			});
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

	function createVendor (name) {
		var vendor = new Vendor();
		vendor.name = name;
		return vendor;
	}

	function getEmptyVendorData () {
		return '';
	}

	function saveVendor (vendor) {
		return vendor.$save(function () {
			that.launchEvent('vendorSaved', [vendor]);
		});
	}

	function getVendors () {
		var deferred = $q.defer();
		Vendor.query(function (vendors) {
			deferred.resolve(vendors);
		});
		return deferred.promise;
	}
}
productService.$inject = ['$q', 'MyPlace.Utils.EventListener', 'ClientData.Product', 'ClientData.Vendor'];

angular.module('ClientData')
.service('ClientData.productService', productService)
;