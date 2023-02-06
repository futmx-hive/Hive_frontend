import { useEffect, useContext } from "react";
import Link from "next/link";
import SidebarLink from "./sidebarLink";

import { motion, AnimatePresence } from "framer-motion";
import { DbrdCtx } from "@layout/DashboardLayout";
import { slideIn } from "@animations/index";
const Sidebar = ({ data }) => {
	const { width, _ } = useContext(DbrdCtx);
	const breakpoint = 1200;
	const isOpen = _.isOpen.toString();
	useEffect(() => {
		if (width > breakpoint && !_.isOpen) return _.open();
	}, [width, isOpen]);
	useEffect(() => {
		if (breakpoint > width) return _.close();
		if (width > breakpoint) _.open();
	}, []);

	const toog = () => width <= breakpoint && _.close();
	return (
		<AnimatePresence>
			{_.isOpen && width < breakpoint && (
				<motion.div className={"backdrop"} onClick={_.close} animate={{ opacity: 1 }} />
			)}

			<motion.div
				variants={slideIn}
				initial='initial'
				animate='final'
				exit='initial'
				id={`${breakpoint > width && _.isOpen ? "res" : ""}`}
				className={`sidebar bg-w ${_.isOpen ? "" : "sidebar_hide"}`}
			>
				<div className='u-center'>
					<Link href='/dashboard' className={!_.isOpen ? "u-center" : ""}>
						<svg className={`sidebar_logo col-b `}>
							<use xlinkHref={"/svg/sprite/sprite.svg" + (_.isOpen ? "#logo_gr" : "#logo_gr")} />
						</svg>
					</Link>
					{!_.isOpen && (
						<div onClick={_.open} className='sidebar_toog mt-2'>
							<span></span>
						</div>
					)}
				</div>
				<ul className='sidebar_list mb-2'>
					{data.map((details, index) => (
						<SidebarLink isOpen={_.isOpen} {...details} key={index} />
					))}
				</ul>
				{/* {width} */}
				<div className='sidebar_base u-center'>
					<div className=' grid_txt_2 br'>
						{/* <button className='btn_large btn_white col-pri tablet'>buy</button>
						<button className='btn_large btn_bord col-w-1 tablet'>sell</button> */}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Sidebar;
