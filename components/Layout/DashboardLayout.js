import Sidebar from "../Shared/UIelements/Sidebar";
import { createContext } from "react";
import UseToogle from "@hooks/UseToogle";
import useResize from "@hooks/UseResize";

const DbrdCtx = createContext();
const DashboardLayout = ({ children }) => {
	const _ = UseToogle(true);
	const width = useResize();
	const sidebarData = [
		{
			title: "dashboard",
			icon: "dashboard",
		},
		{
			title: "pools",
			icon: "pools",
		},
		{
			title: "assignees",
			icon: "commodity",
		},
		{
			title: "projects",
			icon: "portfolio",
		},
		{
			title: "settings",
			icon: "settings",
			link: "settings/profile",
		},
	];
	return (
		<DbrdCtx.Provider value={{ _, width }}>
			<main className={`dashboard_layout ${_.isOpen && width < 1200 ? "auto" : ""}`}>
				<Sidebar data={sidebarData} />
				{children}
			</main>
		</DbrdCtx.Provider>
	);
};

export default DashboardLayout;
export { DbrdCtx };
