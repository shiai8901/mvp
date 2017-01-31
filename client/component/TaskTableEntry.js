var TaskTableEntry = ({task}) => (
	<tr>
		<td>{task.name}</td>
		<td>{task.due}</td> 
		<td>{task.description}</td>
		<td>{task.person}</td>
		<td>{task.status}</td>
  	</tr>
);

window.TaskTableEntry = TaskTableEntry;