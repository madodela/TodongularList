/***** Todo List module *****/

angular.module('TodoList', ['taskMod'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/todo', {
				controller: 'todoListCtrl',
				templateUrl: 'scripts/todo-list/todo-list.html'
			})
			.otherwise({
				redirectTo: '/todo'
			});
	}]);