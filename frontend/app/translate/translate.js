function translateConfig ($translateProvider) {
	// console.log(loaderProvider);
	//
	$translateProvider.useLoader('MyPlace.Translate.translationLoader');
	$translateProvider.use('pl_PL');
	$translateProvider.preferredLanguage('pl_PL');
	$translateProvider.fallbackLanguage('en_GB');
}
translateConfig.$inject = ['$translateProvider'];

function translationServiceConfig (translationServiceProvider) {
	translationServiceProvider.registerModule('MyPlace', function (lang) {
		return 'frontend/translations/'+lang+'.json';
	});
}
translationServiceConfig.$inject = ['MyPlace.Translate.translationServiceProvider'];

function translationLoaderFactory ($q, $http, translationService) {
	return function translationLoader (options) {
		var deferred = $q.defer()
		  , lang = options.key
		  , modules = translationService.getModules()
		  , counter = 0
		  , translations = {}
		  ;
		modules.forEach(function (moduleName) {
			var moduleDef = translationService.getModule(moduleName)
			  ;
			$http
				.get(moduleDef.resolver(lang, moduleName))
				.then(addTranslations)
				.finally(tryResolve)
				;

		});
		return deferred.promise;

		function addTranslations (receivedTranslations) {
			var newTranslations = receivedTranslations.data;
			for(translationKey in newTranslations) {
				translations[translationKey] = newTranslations[translationKey];
			}
		}

		function tryResolve () {
			counter++;
			if(counter == modules.length) {
				deferred.resolve(translations);
			}
		}
	};
}
translationLoaderFactory.$inject = ['$q', '$http', 'MyPlace.Translate.translationService'];

function translationServiceProvider () {
	var moduleMap = {}
	  , actualModule = ''
	  , registeredModules = []
	  ;

	this.registerModule = registerModule;

	this.$get = function ($injector, moduleManager) {
		moduleManager.addEventListener('moduleAdded', function (moduleName) {
			moduleRegisterer(moduleName);
		});

		return {
			registerModule: moduleRegisterer
		  ,	getModules: getModules
		  , getModule: getModule
		}

		function moduleRegisterer (module, resolvingFunction) {
			$translate = $injector.get('$translate');
			registerModule(module, resolvingFunction);
			$translate.refresh();
		}
	}
	this.$get.$inject = ['$injector', 'MyPlace.Module.moduleManager'];

	function registerModule (module, resolvingFunction) {
		moduleMap[module] = {
			resolver: resolvingFunction || standardNameResolver
		};
		registeredModules.push(module);
	}

	function getModules () {
		return registeredModules;
	}

	function getModule (moduleName) {
		return moduleMap[moduleName];
	}

	function standardNameResolver (language, module) {
		return 'frontend/modules/'+module+'/resources/translations/'+language+'.json';
	}
}

angular.module('MyPlace.Translate', ['pascalprecht.translate'])
.provider('MyPlace.Translate.translationService', translationServiceProvider)
.factory('MyPlace.Translate.translationLoader', translationLoaderFactory)
.config(translateConfig)
.config(translationServiceConfig)
;