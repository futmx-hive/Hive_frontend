import React from 'react';
import Link from 'next/link';
import sprite from '../../../Assets/imagery/svg/sprite.svg';

const BackButtonAndText = ({ text, to }) => {
	const history = useHistory();
	const svg = (
		<svg className='med_svg mr-1'>
			<use xlinkHref={sprite + '#back'} />
		</svg>
	);
	return (
		<div className='flexi gap-15'>
			{to ? (
				<Link to={to}>{svg}</Link>
			) : (
				<button type='button' onClick={() => history.goBack()}>
					{svg}
				</button>
			)}
			<h3 className='heading_med col-bl cap'> {text}</h3>
		</div>
	);
};

export default BackButtonAndText;
