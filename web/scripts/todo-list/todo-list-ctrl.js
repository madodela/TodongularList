angular.module('TodoList')
	.controller('todoListCtrl', ['$scope', '$http',//Injecting $scope & $http objects
		function ($scope, $http) {
			//$http is used to fetch data from the backend
			$http.get('data/activities.json').success(function (response) {
			/*$scope is the "glue" between the controller and the view*/
				$scope.activities = response;
			});
		}
	]);