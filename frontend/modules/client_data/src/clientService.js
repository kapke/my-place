function clientService ($q, EventListener, Client, productService) {
	EventListener.call(this);

	var that = this;

	this.createClient = createClient;
	this.saveClient = saveClient;
	this.deleteClient = deleteClient;
	this.updateClient = updateClient;
	this.getClients = getClients;
	this.getEmptyClientData = getEmptyClientData;

	function createClient (data) {
		var client = new Client();
		client.name = data.name;
		client.surname = data.surname;
		return client;
	}	

	function saveClient (client) {
		return client.$save(function () {
			that.launchEvent('clientSaved', [client]);
		});
	}

	function deleteClient (client) {
		return client.$delete(function () {
			that.launchEvent('clientDeleted', [client]);
		});
	}

	function updateClient (client) {
		return client.$update(function () {
			that.launchEvent('clientUpdated', [client]);
		});
	}

	function getClients () {
		var deferred = $q.defer();
		Client.query(function (clients) {
			clients.forEach(function (client) {
				client.products = client.products.map(function (product) {
					return productService.createProduct(product.vendor, product.name, product.id);
				});
			});
			deferred.resolve(clients);
		});
		return deferred.promise;
	}

	function getEmptyClientData () {
		return {
			name: ''
		  , surname: ''
		};
	}
}
clientService.$inject = ['$q', 'MyPlace.Utils.EventListener', 'ClientData.Client', 'ClientData.productService'];

angular.module('ClientData')
.service('ClientData.clientService', clientService)
;