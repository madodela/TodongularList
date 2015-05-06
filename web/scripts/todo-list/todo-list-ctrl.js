angular.module('TodoList')
	.controller('todoListCtrl', ['$scope', //Injecting $scope object
		function ($scope) {
			/*$scope is the "glue" between the controller and the view*/
			$scope.activities = [
				'Read more books',
				'Go to run',
				'Sweep the house',
				'Pack my bags'
			];
		}
	]);