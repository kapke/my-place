function moduleManager ($state, api, EventListener) {
	EventListener.call(this);

	(function () {
		var modules = api.Module.query(function () {
			modules.forEach(function (module) {
				registerModule(module);
			});
		});
	})();
	var that = this
	  , modules = []
	  , modulesBySlug = {}
	  , activeModule = null
	  ;

	this.registerModule = registerModule;
	this.getModules = getModules;
	this.setActiveModule = setActiveModule;
	this.getActiveModule = getActiveModule;

	function getModules () {
		return modules;
	}

	function registerModule (module) {
		modules.push(module);
		modulesBySlug[module.slug] = module;
		that.launchEvent('moduleListChanged');
	}

	function setActiveModule (moduleSlug) {
		activeModule = moduleSlug;
		that.launchEvent('activeModuleChanged');
	}

	function getActiveModule () {
		return modulesBySlug[activeModule];
	}
}

moduleManager.$inject = ['$state', 'MyPlace.apiService', 'MyPlace.Utils.EventListener'];

angular.module('MyPlace.Module').
service('MyPlace.Module.moduleManager', moduleManager);