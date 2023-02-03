import Faq from "@sharedUi/FaQ";
import React from "react";

function SupervisorAndStudents({ supervisor = {} }) {
	const heading = <h5 className='heading_med weit-1 col-g cap'> {supervisor.name}</h5>;
	return <Faq Component={heading} openClasses={"bord-g-1 br"}></Faq>;
}

export default SupervisorAndStudents;
