angular.module('taskMod', [])
	.config(['$routeProvider', function ($routeProvider){
		$routeProvider
			.when('/task/:id', {
				templateUrl: 'scripts/task/task.html'
			});
	}]);