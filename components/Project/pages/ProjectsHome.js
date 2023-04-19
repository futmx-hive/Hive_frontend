import BalanceShowcase from "@components/Dashboard/BalanceShowcase";
import StudentSubmission from "@components/students/components/StudentSubmission";
import BasicFilter from "@form-components/BasicFilter";
import UseTabs from "@hooks/UseTabs";
import TableUserCommodities from "@shared/Tables/TableUserCommodities";
import RecentTransactions from "@shared/Transaction/RecentTransactions";
import Card from "@sharedUi/Card";
import Faq from "@sharedUi/FaQ";
import { TabBtn, TabPanel, Tabs } from "@sharedUi/Tabs";
import { useRouter } from "next/router";
import React from "react";
import ExploreProjects from "../components/ExploreProjects";
import _ from "../style.module.scss";
const tabNames = ["profile", "Bank and cards", "preferences"];

function ProjectsHome() {
	const [active, setActive] = UseTabs(0);
	const r = useRouter();
	return (
		<section className={`mt-4`}>
			<div className='container-lg'>
				<div className='con_5_2'>
					<BasicFilter btnText='view project' />
					<div></div>
				</div>
			</div>
			<div className='container-lg pos-r'>
				<div className={` ${_.portfolio}`}>
					<section className={`${_.portfolio_con}`}>
						<ExploreProjects />
						<div>
							<Tabs
								classes='flex-1 sp-btw flexi'
								value={active}
								onChange={setActive}
								max={4}
								design={"LINE"}
								right={
									<button
										className='btn_med btn_ btn_pri btn_icon tablet'
										onClick={() => r.push("/projects/submission/create")}
									>
										<svg>
											<use xlinkHref='/svg/sprite/sprite.svg#plus'></use>
										</svg>
										<span className='cap'> make sumbission</span>
									</button>
								}
							>
								<TabBtn>submissions</TabBtn>
								<TabBtn>supervisor</TabBtn>
								<TabBtn>activity</TabBtn>
							</Tabs>

							<div className={`${_.settings_con}`}>
								<TabPanel index={0} value={active}>
									<div className='grid_txt_2 mt-2'>
										{[...Array(6).keys()].map((e, i) => (
											<StudentSubmission submissionIndex={i} mode={1} />
										))}
									</div>
								</TabPanel>
								<TabPanel index={1} value={active}></TabPanel>
								<TabPanel index={2} value={active}></TabPanel>
							</div>
						</div>
					</section>
				
				</div>
			</div>
		</section>
	);
}

export default ProjectsHome;
