Kapke.MyPlace.Api = angular.module('MyPlace.Api', ['ngResource']).
service('MyPlace.apiService', ['$resource', 'MyPlace.configService', function ($resource, Config) {
	var backendPrefix = Config.backendPrefix,
		Module = $resource(backendPrefix+'modules');
	this.Module = Module;
}]);