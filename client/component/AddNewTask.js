var AddNewTask = ({addNewTask}) => (
	<div>
		<h2>Create New Task</h2>
		<form classname="addNewTask" onSubmit={addNewTask} >
			<label>
				Task Name
				<input type="text" name="name" placeholder="name" />
			</label>
			<label>
				Taks Description
				<input type="text" name="description" placeholder="description" />
			</label>
			<label>
				Due Time
				<input type="text" name="due" placeholder="due date" />
			</label>
			<label>
				Person
			<input type="text" name="person" placeholder="select a person" />
			</label>
			<input type="submit" value="Add" />
		</form>
	</div>
);

window.AddNewTask = AddNewTask;