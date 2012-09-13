'use strict';

function TodoCtrl($scope) {
	$scope.search = "";

	$scope.todos = [
		{
			text: "L & L",
			done: true
		},

		{
			text: "Build Angular App",
			done: false
		}
	];

	$scope.AddTodo = function () {
		$scope.todos.push({
			text: $scope.newTodoText,
			done: false
		});

		$scope.newTodoText = "";
	};

	$scope.clear = function () {
		var todos = [];

		angular.forEach($scope.todos, function(todo, index) {
			if (!todo.done) {
				this.push(todo);
			} 
		}, todos);

		$scope.todos = todos;
	}
}