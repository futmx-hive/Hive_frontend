import React from 'react';

function Icon({ id, classes = 'tiny_svg', ...rest }) {
	return (
		<svg className={`${classes ? classes : ''}`} {...rest}>
			<use xlinkHref={`/svg/sprite/sprite.svg${id}`}></use>
		</svg>
	);
}

export default Icon;
