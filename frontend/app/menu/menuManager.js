function menuManager (EventListener, api, moduleManager) {
	EventListener.call(this);

	var that = this
	  , actualMenu = {}
	  , actualModule = null
	  , downloadTries = 0
	  , downloadInterval = 100;
	  ;

	this.getActualMenu = getActualMenu;

	moduleManager.addEventListener('activeModuleChanged', function () {
		actualModule = moduleManager.getActiveModule();
		updateMenu();
	});

	function getActualMenu () {
		return actualMenu;
	}

	function updateMenu () {
		if(downloadTries > 5) {
			if(downloadInterval > 10000) {
				return;
			}
			downloadInterval *= 5;
			downloadTries = 0;
		}
		if(actualModule) {
			actualMenu = api.Menu.get({module: actualModule.slug});
			that.launchEvent('menuUpdated');
			downloadInterval = 100;
			downloadTries = 0;
		} else {
			actualModule = moduleManager.getActiveModule();
			downloadTries += 1;
			actualMenu = {};
			setTimeout(updateMenu, downloadInterval);
		}
	}
}

menuManager.$inject = ['MyPlace.Utils.EventListener', 'MyPlace.apiService', 'MyPlace.Module.moduleManager'];

angular.module('MyPlace.Menu')
.service('MyPlace.Menu.menuManager', menuManager)
;