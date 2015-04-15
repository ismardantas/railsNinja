function Task($resource, User) {

	var tasks = $resource('/api/tasks/:taskId', 
		{
			taskId: '@id'
		},
		{
			get:    {method: 'GET'},
			update: {method: 'PATCH'}
		});


	var currentUser = User.currentUser;

	var Task = {
		all: tasks.query(),

		getTask: function(taskId) {
			return tasks.get({taskId: taskId});
		},

		createTask: function(task) {
			var t = new tasks (
			{
				title: task.title,
				status: 'open',
				poster: currentUser.email,
				description: task.description,
				total: task.total,
				user_id: currentUser.id
			});
			return t.$save();
		},

//		editTask: function(task) {
//			var t = tasks.get({},{'taskId': 1});
//			return t.$update({title: task.title, description: task.description, total: task.total});
//		},

		cancelTask: function(taskId) {
			var t = tasks.get({'taskId': taskId}, function(task) {
				task.status = 'closed';
				task.$update();
			});
			return t;
		},

		isCreator: function(task) {
			return (currentUser.email === task.poster);
		},

		isOpen: function(task) {
			return task.status === "open";
		}

	};
	return Task;

};