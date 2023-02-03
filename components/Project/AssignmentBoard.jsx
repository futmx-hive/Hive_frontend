import React from "react";
import SupervisorAndStudents from "./SupervisorAndStudents";
const names = ["Dr Abdulazzez Damilola", "Mrs Bilikisu", "Dr Zubairu", "Mr Calistus", "Dr Cosmos"];

function AssignmentBoard() {
	return (
		<div className='con_1_1_1'>
			{names.map((name, index) => (
				<SupervisorAndStudents supervisor={{ name }} />
			))}
		</div>
	);
}

export default AssignmentBoard;
