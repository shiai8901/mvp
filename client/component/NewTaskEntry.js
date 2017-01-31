var NewTaskEntry = ({task, assignNewTasks}) => (

	<tr>
		<td>{task.name}</td>
		<td>{task.due}</td> 
		<td>{task.description}</td>
		<td>
			<p>
				<span id="A" onClick={() => assignNewTasks(task, 'Ai Shi')}>  Ai Shi  </span>
				<span id="B" onClick={() => assignNewTasks(task, 'Ming Mou')}>  Ming Mou  </span>
				<span id="C" onClick={() => assignNewTasks(task, 'Mona')}>  Mona  </span>
			</p>
		</td>
		<td className="needAssign">Need Assign</td>
  </tr>
);
window.NewTaskEntry = NewTaskEntry;
