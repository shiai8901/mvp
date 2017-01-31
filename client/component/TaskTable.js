var TaskTable = ({tasks}) => (
	<div>
		<h2>All Tasks</h2>
		<table>
			<tr>
		    <th>Name</th>
		    <th>Due</th> 
		    <th>Description</th>
		    <th>Person</th>
		    <th>Status</th>
		    </tr>
			{tasks.map((task) => <TaskTableEntry task={task} />)}
	    </table>
	</div>
);

window.TaskTable = TaskTable;