function clientsCtrl ($scope, $rootScope, Client) {
	$scope.clients = [];
	$scope.newClient = {
		name: ''
	  , surname: ''
	};
	$scope.editing = false;
	$scope.addClient = addClient;
	$scope.deleteClient = deleteClient;
	$scope.editClient = editClient;
	$scope.approveChanges = approveChanges;
	$scope.cancelChanges = cancelChanges;

	$scope.$on('ClientData.clientAdded', loadClients);
	$scope.$on('ClientData.clientDeleted', loadClients);

	loadClients();

	function addClient () {
		var client = new Client($scope.newClient);
		client.$save(function () {
			$rootScope.$broadcast('ClientData.clientAdded');
		});
		
	}

	function deleteClient (client) {
		console.log(client)
		client.$delete(function () {
			$rootScope.$broadcast('ClientData.clientDeleted');	
		});
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
		$scope.editing.$target.$update();
		$scope.editing = false;
	}

	function cancelChanges () {
		$scope.editing = false;
	}

	function loadClients () {
		$scope.clients = Client.query();
	}
}
clientsCtrl.$inject = ['$scope', '$rootScope', 'ClientData.Client'];

function clientFactory (api) {
	return api.getResource({
		type: api.BACKEND
	  , module: 'client_data'
	  , resource: 'clients/:id'
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
}
clientFactory.$inject = ['MyPlace.apiService'];

angular.module('ClientData', ['MyPlace.Api'])
.controller('ClientData.clientsCtrl', clientsCtrl)
.factory('ClientData.Client', clientFactory)
;