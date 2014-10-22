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
		var vendor = new Vendor();
		vendor.name = $scope.newVendor;
		vendor.$save(function () {
			$scope.newVendor = '';
			loadVendors();
		});
	}

	function loadProducts () {
		productService.getProducts(true).then(function (products) {
			$scope.products = products;
		});
	}

	function loadVendors () {
		$scope.vendors = Vendor.query();
	}
}
productsCtrl.$inject = ['$scope', 'ClientData.productService', 'ClientData.Vendor'];

angular.module('ClientData')
.controller('ClientData.productsCtrl', productsCtrl)
;
