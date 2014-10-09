function menuManager (EventListener, api, moduleManager) {
	EventListener.call(this);

	var that = this
	  , actualMenu = {}
	  , actualModule = null
	  ;

	this.getActualMenu = getActualMenu;

	moduleManager.addEventListener('activeModuleChanged', function () {
		actualModule = moduleManager.getActiveModule();
		updateMenu();
	});

	function getActualMenu () {
		console.log('actual menu', actualMenu);
		return actualMenu;
	}

	function updateMenu () {
		if(actualModule) {
			actualMenu = api.Menu.get({module: actualModule.slug});
		} else {
			actualMenu = {};
		}
		that.launchEvent('menuUpdated');
	}
}

menuManager.$inject = ['MyPlace.Utils.EventListener', 'MyPlace.apiService', 'MyPlace.Module.moduleManager'];

angular.module('MyPlace.Menu')
.service('MyPlace.Menu.menuManager', menuManager)
;