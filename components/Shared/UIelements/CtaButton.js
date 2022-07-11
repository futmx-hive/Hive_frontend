import React from 'react';
import SmallLoader from '../SmallComponents/SmallLoader';

const CtaButton = ({
	disabled = false,
	loading = false,
	loadingText,
	scale = 0.4,
	onClick,
	text,
	type = 'btn_pri tablet',
	classes = 'btn_large heading_small_1',
	buttonType = 'button',
	showLoader = true,
}) => {
	return (
		<button
			onClick={onClick}
			className={`${classes}  ${loading ? 'flexi js-center' : ''} ${type} gap-15`}
			disabled={loading || disabled}
			type={buttonType}>
			{loading && showLoader && <SmallLoader scale={scale} classes={'small'} />}
			<span style={{ whiteSpace: 'nowrap' }}>{loading ? loadingText : text}</span>
		</button>
	);
};

export default CtaButton;
