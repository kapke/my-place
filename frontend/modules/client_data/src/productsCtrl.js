function productsCtrl ($scope, productService, Vendor) {
	$scope.products = {};
	$scope.vendors = [];
	$scope.newVendor = '';
	$scope.newProduct = {
		vendor: ''
	  , name: ''
	};

	$scope.addProduct = addProduct;
	$scope.addVendor = addVendor;

	productService.addEventListener('productSaved', function () {
		$scope.newProduct= productService.getEmptyProductData();
		loadProducts();
	});
	productService.addEventListener('vendorSaved', function () {
		$scope.newVendor = productService.getEmptyVendorData();
		loadVendors();
	})

	loadVendors();
	loadProducts();

	function addProduct () {
		productService.saveProduct(
			productService.createProduct(
				$scope.newProduct.vendor,
				$scope.newProduct.name
			)
		);
	}

	function addVendor () {
		productService.saveVendor(
			productService.createVendor($scope.newVendor)
		);
	}

	function loadProducts () {
		productService.getProducts(true)
			.then(function (products) {
				$scope.products = products;
			});
	}

	function loadVendors () {
		productService.getVendors()
			.then(function (vendors) {
				$scope.vendors = vendors;
			});
	}
}
productsCtrl.$inject = ['$scope', 'ClientData.productService'];

angular.module('ClientData')
.controller('ClientData.productsCtrl', productsCtrl)
;
