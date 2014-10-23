function clientsCtrl ($scope, $rootScope, clientService, productService) {
	$scope.clients = [];
	$scope.newClient = clientService.getEmptyClientData();
	$scope.editing = false;
	$scope.details = false;
	$scope.products = [];

	$scope.addClient = addClient;
	$scope.deleteClient = deleteClient;
	$scope.editClient = editClient;
	$scope.approveChanges = approveChanges;
	$scope.cancelChanges = cancelChanges;
	$scope.showDetails = showDetails;

	clientService.addEventListener('clientSaved', function () {
		$scope.newClient = clientService.getEmptyClientData();
		loadClients();
	});
	clientService.addEventListener('clientDeleted', function () {
		loadClients();
	});
	productService.getProducts().then(function (products) {
		$scope.products = products;
	});

	loadClients();

	function addClient () {
		clientService.saveClient(
			clientService.createClient($scope.newClient)
		);
	}

	function deleteClient (client) {
		if($scope.editing && $scope.editing.$target == client) {
			cancelChanges();
		}
		clientService.deleteClient(client);
	}

	function editClient (client) {
		$scope.editing = {
			name: client.name
		  , surname: client.surname
		  , addedProduct: {}
		  , $target: client
		};
	}

	function approveChanges () {
		$scope.editing.$target.name = $scope.editing.name;
		$scope.editing.$target.surname = $scope.editing.surname;
		$scope.editing.$target.products.push($scope.editing.addedProduct);
		$scope.editing.$target.addedProduct = $scope.editing.addedProduct;
		clientService.updateClient($scope.editing.$target);
		$scope.editing = false;
	}

	function cancelChanges () {
		$scope.editing = false;
	}

	function loadClients () {
		clientService.getClients().then(function (clients) {
			$scope.clients = clients;
		});
	}

	function showDetails (client) {
		$scope.details = client;
	}
}
clientsCtrl.$inject = ['$scope', '$rootScope', 'ClientData.clientService', 'ClientData.productService'];

angular.module('ClientData')
.controller('ClientData.clientsCtrl', clientsCtrl)
;