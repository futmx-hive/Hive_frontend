import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FallBackScreen from './Fallback';

const FallbackBig = ({
	img,
	title,
	body,
	footer,
	children,
	to,
	isOpen = false,
	classes,
	onClick = null,
	topContent,
}) => {
	const resFooter = () => {
		if (!!onClick) {
			return (
				<button onClick={onClick} className='btn_blue btn_wide heading_small p-x-2'>
					{footer}
				</button>
			);
		} else
			return (
				<Link to={to} className='btn_blue btn_wide heading_small p-x-2'>
					{footer}
				</Link>
			);
	};

	return (
		<FallBackScreen
			header={
				<Fragment>
					<div className='grid_txt'>
						<div className='u-center'>
							<svg className='lag_svg'>
								<use xlinkHref={img} />
							</svg>
						</div>
						<h5 className='heading_med  col-bl'>{title}</h5>
					</div>
				</Fragment>
			}
			body={<p className='heading_small_1'>{body}</p>}
			footer={!!to ? resFooter() : footer}
			big
			isOpen={isOpen}
			hClass={classes}
			topContent={topContent}>
			{children}
		</FallBackScreen>
	);
};

export default FallbackBig;
