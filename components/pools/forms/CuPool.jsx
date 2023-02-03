import TopNav from "@sharedUi/TopNav";
import React from "react";
import PoolForm from "./PoolForm";

function CrudPool() {
	return (
		<>
			<TopNav title={"create pool"} />
			<PoolForm />
		</>
	);
}

export default CrudPool;
