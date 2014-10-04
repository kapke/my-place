'use strict';
Kapke.MyPlace.Module.ModuleManager = angular.module('MyPlace.Module.ModuleManager', []).
service('MyPlace.Module.moduleManagerService', ['', function() {
	var modules = [];

	this.register = register;
	this.getModuleList = getModuleList;

	function getModuleList () {
		return modules;
	}

	function register (module) {
		modules.push(module);
	}
}]);