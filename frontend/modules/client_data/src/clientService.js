function clientService (EventListener, Client) {
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
		return Client.query();
	}

	function getEmptyClientData () {
		return {
			name: ''
		  , surname: ''
		};
	}
}
clientService.$inject = ['MyPlace.Utils.EventListener', 'ClientData.Client'];

angular.module('ClientData')
.service('ClientData.clientService', clientService)
;