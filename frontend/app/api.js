'use strict';
function apiService ($resource, Config) {
	var backendPrefix = Config.backendPrefix
	  , frontendPrefix = Config.frontendPrefix
	  , BACKEND = backendPrefix
	  , FRONTEND = frontendPrefix
	  , Module = $resource(backendPrefix+'modules')
	  , Menu = $resource(frontendPrefix+'modules/:module/resources/menu.json')
	  ;

	this.BACKEND = BACKEND;
	this.FRONTEND = FRONTEND;
	this.getResource = getResource;
	this.Module = Module;
	this.Menu = Menu;

	function getResource (config) {
		var prefix = config.type || BACKEND
		  , sufix = ''
		  , module = config.module || ''
		  , resource = config.resource
		  , rConfig = config.config || undefined
		  , actions = config.actions || undefined
		  ;
		if(config.type == FRONTEND) {
			prefix += 'modules/'
		}
		return $resource(prefix+module+'/'+resource+sufix, rConfig, actions);
	}
}

apiService.$inject = ['$resource', 'MyPlace.configService'];

angular.module('MyPlace.Api', ['ngResource'])
.service('MyPlace.apiService', apiService);