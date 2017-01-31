var NewTaskTable = ({tasks, assignNewTasks}) => (
	<div>
		<h2>New Tasks</h2>
		<table>
			<tr>
		    <th>Name</th>
		    <th>Due</th> 
		    <th>Description</th>
		    <th>Person</th>
		    <th>Status</th>
		    </tr>
			{tasks.map((task) => 
				<NewTaskEntry 
				task={task} 
				assignNewTasks={assignNewTasks}
				/>
			)}
	  </table>
	</div>
);

window.NewTaskTable = NewTaskTable;