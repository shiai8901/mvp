class App extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				// myRole: props.role,
				allTasks: [],
				newTasks: []
			}
	}
	
	componentDidMount() {
		this.handleGet.call(this, '/updatedAllTask', function(result) {
			this.setState({
				allTasks: result,
			});
		});

		this.handleGet.call(this, '/updatedNewTask', function(result) {
			this.setState({
				newTasks: result,
			});
		});
	}

	handlePost(url, data, callback) {
		var context = this;
		$.ajax({
			type: 'POST',
			url: url,
			data: JSON.stringify(data),
			contentType: 'application/json',
			error: function(error) {
				console.log('ERROR in handlePost', url);
			},
			success: function(result) {
				callback.call(context, result);
			}
		});
	}

	handleGet(url, callback) {
		var context = this;
		$.ajax({
			type: 'GET',
			url: url,
			contentType: 'application/json',
			error: function(error) {
				console.log('ERROR in handleGet', url);
			},
			success: function(result) {
				callback.call(context, JSON.parse(result));
			}
		});
	}

	assignNewTasks(task, assinedPerson) {
		var index = this.state.newTasks.indexOf(task);
		var newAssignedTask = this.state.newTasks[index];
		newAssignedTask['person'] = assinedPerson;
		newAssignedTask['status'] = 'Assigned';

		this.handlePost.call(this, '/allTask', newAssignedTask, function(result) {
			console.log('result in POST', result);
		});

		// GET updated New Task Table from server
		this.handleGet.call(this, '/updatedNewTask', function(result) {
			this.setState({
				newTasks: result
			});
		});

		// GET updated Task Table from server
		this.handleGet.call(this, '/updatedAllTask', function(result) {
			this.setState({
				allTasks: result,
			});
		});

	}

	addNewTask(event) {
		var person = event.target.person.value;
		var status = person ? 'Assigned' : 'NeedAssign';

		var newTask = {
			name: event.target.name.value,
			description: event.target.description.value,
			due: event.target.due.value,
			person: event.target.person.value,
			status: status
		}

		this.handlePost.call(this, '/allTask', newTask, function() {
			console.log('result in POST');
		});

		// GET updated New Task Table from server
		this.handleGet.call(this, '/updatedNewTask', function(result) {
			this.setState({
				newTasks: result
			});
		});

		// GET updated Task Table from server
		this.handleGet.call(this,'/updatedAllTask', function(result) {
			this.setState({
				allTasks: result,
			});
		});
		// event.preventDefault();
	}

	render() {
		return (
			<div id="content">
				<h1>Task Management</h1>
				<TaskTable tasks={this.state.allTasks} />
				<NewTaskTable assignNewTasks={this.assignNewTasks.bind(this)} tasks={this.state.newTasks} />
				<AddNewTask addNewTask={this.addNewTask.bind(this)} />
			</div>
		)	
	}
};

window.App = App;
