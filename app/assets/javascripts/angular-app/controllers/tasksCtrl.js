function TasksController($scope, $location, $mdDialog, $mdBottomSheet, Task) {
	//Get all the task records from the Task service
	$scope.tasks = Task.query();
	$scope.updatedAt = '-updated_at'

	//Invoke a modal dialog and add a post from the dialog
	$scope.addTask = function(ev) {
		$mdDialog.show({
			controller: 'PostDialogController',
			templateUrl: 'assets/angular-app/templates/post.html.erb',
			targetEvent: ev
		})
		.then(function(answer) {
			var task = new Task(
				{
					title: answer.title,
					description: answer.description,
					total: answer.total,
					user_id: $scope.user.id
				});
			task.$save(function() {
				$scope.tasks.unshift(task);
			});
		});
	};

	//Invoke a modal dialog and edit a post from the dialog
	$scope.editTask = function(task) {
		$scope.currentTask = Task.get({id: task.id});
		$mdDialog.show({
			controller: 'EditDialogController',
			templateUrl: 'assets/angular-app/templates/edit.html.erb',
					locals: {
							currentTask: $scope.currentTask
					}
		}).then(function(answer) {
			answer.$update(function() {
				$location.path('#/browse');
			});
		});
	};

	//Bottom sheet controller
	$scope.showListBottomSheet = function(ev) {
		$mdBottomSheet.show({
			controller: 'UsersController',
			templateUrl: 'assets/angular-app/templates/bottom-sheet.html.erb',
			targetEvent: ev
		});
	};

};