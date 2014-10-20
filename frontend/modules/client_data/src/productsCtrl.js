function productsCtrl ($scope, Product, Vendor) {
	$scope.products = Product.query();
	$scope.vendors = Vendor.query();
	$scope.newVendor = '';
	$scope.newProduct = {
		vendor: ''
	  , name: ''
	}

	$scope.addProduct = addProduct;
	$scope.addVendor = addVendor;

	function addProduct () {
		var product = new Product();
		product.vendor = $scope.newProduct.vendor;
		product.name = $scope.newProduct.name;
		product.$save();
		$scope.newProduct = {
			vendor: ''
		  , name: ''
		}
		$scope.products = Product.query();
	}

	function addVendor () {
		var vendor = new Vendor();
		vendor.name = $scope.newVendor;
		vendor.$save();
		$scope.newVendor = '';
	}
}
productsCtrl.$inject = ['$scope', 'ClientData.Product', 'ClientData.Vendor'];

angular.module('ClientData')
.controller('ClientData.productsCtrl', productsCtrl)
;
