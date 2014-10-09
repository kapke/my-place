'use strict';
function apiService ($resource, Config) {
	var backendPrefix = Config.backendPrefix
	  , frontendPrefix = Config.frontendPrefix
	  , Module = $resource(backendPrefix+'modules')
	  , Menu = $resource(frontendPrefix+'modules/:module/resources/menu.json')
	  ;
	this.Module = Module;
	this.Menu = Menu;
}

apiService.$inject = ['$resource', 'MyPlace.configService'];

angular.module('MyPlace.Api', ['ngResource'])
.service('MyPlace.apiService', apiService);