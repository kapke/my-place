<section ng-controller="ClientData.clientsCtrl">
	<section>
		<h2>{{'ClientData.clients'|translate}}</h2>
		<table>
			<thead>
				<tr>
					<th>&nbsp;</th><th>{{'ClientData.name'|translate}}</th><th>{{'ClientData.surname'|translate}}</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="client in clients">
					<td>
						<span ng-click="deleteClient(client)">&ndash;</span>
						<span ng-click="editClient(client)">E</span>
					</td>
					<td>{{client.name}}</td>
					<td>{{client.surname}}</td>
				</tr>
			</tbody>
		</table>
	</section>
	<section>
		<h2>{{'ClientData.addClient'|translate}}</h2>
		<form ng-submit="addClient()">
			<label>{{'ClientData.name'|translate}}: <input type="text" name="name" ng-model="newClient.name" /></label>
			<label>{{'ClientData.surname'|translate}}: <input type="text" name="surname" ng-model="newClient.surname" /></label>
			<input type="submit" value="{{'ClientData.addClient'|translate}}" />
		</form>
	</section>
	<section ng-if="editing">
		<h2>{{'ClientData.editClient'|translate}}</h2>
		<form ng-submit="approveChanges()">
			<label>{{'ClientData.name'|translate}}: <input type="text" name="name" ng-model="editing.name" /></label>
			<label>{{'ClientData.surname'|translate}}: <input type="text" name="surname" ng-model="editing.surname" /></label>
			<button ng-click="cancelChanges()">{{'ClientData.cancel'|translate}}</button>
			<input type="submit" value="{{'ClientData.approveChanges'|translate}}" />
		</form>
	</section>
</section>