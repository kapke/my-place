'use strict';
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
	  , activeView = 'main'
	  ;

	this.registerModule = registerModule;
	this.getModules = getModules;
	this.setActiveModuleAndView = setActiveModuleAndView;
	this.setActiveModule = setActiveModule;
	this.setActiveView = setActiveView;
	this.getActiveModule = getActiveModule;

	function getModules () {
		return modules;
	}

	function registerModule (module) {
		modules.push(module);
		modulesBySlug[module.slug] = module;
		that.launchEvent('moduleListChanged');
		that.launchEvent('moduleAdded', [module.slug]);
	}

	function setActiveModuleAndView (module, view) {
		setActiveModule(module);
		setActiveView(view);
		that.launchEvent('activeModuleAndViewChanged', [activeModule, activeView]);
	}

	function setActiveModule (moduleSlug) {
		if(activeModule != moduleSlug) {
			activeModule = moduleSlug;
			that.launchEvent('activeModuleChanged', [activeModule]);	
		}
	}

	function getActiveModule () {
		return modulesBySlug[activeModule];
	}

	function setActiveView (view) {
		view = view || 'main';
		if(activeView != view) {
			activeView = view;
			that.launchEvent('activeViewChanged', [activeView])	
		}
	}

	function getActiveView () {
		return activeView;
	}
}

moduleManager.$inject = ['$state', 'MyPlace.apiService', 'MyPlace.Utils.EventListener'];

angular.module('MyPlace.Module')
.service('MyPlace.Module.moduleManager', moduleManager)
;