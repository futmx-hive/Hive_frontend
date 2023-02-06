import TopNav from "@sharedUi/TopNav";
import React from "react";
import PoolForm from "./PoolForm";

function CrudPool({ title = "create pool" }) {
	return (
		<>
			<TopNav title={title} />
			<PoolForm />
		</>
	);
}

export default CrudPool;
