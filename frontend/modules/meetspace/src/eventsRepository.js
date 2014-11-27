(function () {
'use strict';
function eventsRepository (Repository, Event) {
	var parent = {};
	Repository.call(parent, Event);

	for(var prop in parent) {
		this[prop] = parent[prop];
	}

	this.getEvents = getEvents;

	function getEvents () {
		return parent.getEvents().then(function (events) {
			events.forEach(function (ev) {
				ev.time = new Date(ev.time*1000);
			});
			return events;
		});
	}
}
eventsRepository.$inject = ['MyPlace.Crud.Repository', 'Meetspace.Event'];

angular.module('Meetspace')
.service('Meetspace.eventsRepository', eventsRepository)
;
})();