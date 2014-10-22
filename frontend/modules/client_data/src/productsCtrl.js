function productsCtrl ($scope, Product, Vendor) {
	$scope.products = {};
	$scope.vendors = [];
	$scope.newVendor = '';
	$scope.newProduct = {
		vendor: ''
	  , name: ''
	}

	$scope.addProduct = addProduct;
	$scope.addVendor = addVendor;

	loadVendors();
	loadProducts();

	function addProduct () {
		var product = new Product();
		product.vendor = $scope.newProduct.vendor;
		product.name = $scope.newProduct.name;
		product.$save(function () {
			$scope.newProduct = {
				vendor: ''
			  , name: ''
			}
			loadProducts();
		});
	}

	function addVendor () {
		var vendor = new Vendor();
		vendor.name = $scope.newVendor;
		vendor.$save(function () {
			$scope.newVendor = '';
			loadVendors();
		});
	}

	function loadProducts () {
		var products = {};
		Product.query(function (receivedProducts) {
			receivedProducts.map(function (product) {
				if (product.vendor) {
					if (!products[product.vendor.name]) {
						products[product.vendor.name] = [];
					}
					products[product.vendor.name].push(product);
				}
			});
			$scope.products = products;
		});
	}

	function loadVendors () {
		$scope.vendors = Vendor.query();
	}
}
productsCtrl.$inject = ['$scope', 'ClientData.Product', 'ClientData.Vendor'];

angular.module('ClientData')
.controller('ClientData.productsCtrl', productsCtrl)
;
