import React from "react";
import UseToogle from "@hooks/UseToogle";
import RenderIfTrue from "../SmallComponents/RenderIfTrue";
import Icon from "../SmallComponents/Icon";

const Faq = ({
	children,
	title,
	Component,
	classes,
	locked = false,
	initialIsOpen = false,
	containerClasses = "",
	openClasses = "",
}) => {
	const { isOpen, toogle } = UseToogle(initialIsOpen);
	return (
		<div
			className={`faq ${isOpen && !locked ? "open " + openClasses : ""} ${
				containerClasses && containerClasses
			}`}
		>
			<div onClick={toogle} className={`faq_header sp-btw flexi `}>
				{title ? <h4 className='form_heading'>{title}</h4> : Component}
				<div>{!locked && <Icon id={"#rarr"} classes={`small_svg faq_btn  `} />}</div>
			</div>

			<RenderIfTrue condition={isOpen && !locked}>
				<div className={classes ? classes : "form_pkg "}>{children}</div>
			</RenderIfTrue>
		</div>
	);
};

export default Faq;
