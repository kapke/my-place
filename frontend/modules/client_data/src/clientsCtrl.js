function clientsCtrl ($scope, $rootScope, clientService) {
	$scope.clients = [];
	$scope.newClient = clientService.getEmptyClientData();
	$scope.editing = false;
	$scope.addClient = addClient;
	$scope.deleteClient = deleteClient;
	$scope.editClient = editClient;
	$scope.approveChanges = approveChanges;
	$scope.cancelChanges = cancelChanges;

	clientService.addEventListener('clientSaved', function () {
		$scope.newClient = clientService.getEmptyClientData();
		loadClients();
	});
	clientService.addEventListener('clientDeleted', function () {
		loadClients();
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
		  , $target: client
		};
	}

	function approveChanges () {
		$scope.editing.$target.name = $scope.editing.name;
		$scope.editing.$target.surname = $scope.editing.surname;
		clientService.updateClient($scope.editing.$target);
		$scope.editing = false;
	}

	function cancelChanges () {
		$scope.editing = false;
	}

	function loadClients () {
		$scope.clients = clientService.getClients();
	}
}
clientsCtrl.$inject = ['$scope', '$rootScope', 'ClientData.clientService'];

angular.module('ClientData')
.controller('ClientData.clientsCtrl', clientsCtrl)
;