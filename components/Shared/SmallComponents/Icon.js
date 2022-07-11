import React from 'react';

function Icon({ id, classes = 'tiny_svg' }) {
	return (
		<svg className={`${classes ? classes : ''}`}>
			<use xlinkHref={`/svg/sprite/sprite.svg${id}`}></use>
		</svg>
	);
}

export default Icon;
