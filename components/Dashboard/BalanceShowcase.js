import Card from '@sharedUi/Card';
import React from 'react';
import _ from './style.module.scss';
let times = [
	{
		text: '1hr',
		value: 0,
	},
	{
		text: '24hr',
		value: 0,
	},
	{
		text: '1w',
		value: 0,
	},
	{
		text: '1m',
		value: 0,
	},
	{
		text: '3m',
		value: 0,
	},
	{
		text: '1y',
		value: 0,
	},
	{
		text: 'all time',
		value: 0,
	},
];

function BalanceShowcase() {
	return (
		<Card xtraClassNames={`p-2 ${_.balance}`}>
			<div className='flexi sp-btw'>
				<p className='col-gra-d cap mb-1'> portfolio balance</p>
				<Times times={times} />
			</div>
			<article className='flexi gap-15'>
				<h6 className='heading_med_1 weit-3'>180,783.33</h6>
				<div className='flexi '>
					<svg className='tiny_svg  mr-m'>
						<use xlinkHref='/svg/sprite/sprite.svg#rise'></use>
					</svg>
					<span className='col-gr'>5.04%</span>
				</div>
			</article>
			<img src='/photos/big_chart.png' alt='simple_img' />
		</Card>
	);
}

export default BalanceShowcase;

function Times({ times }) {
	return (
		<aside className='flexi gap-15'>
			{times.map((t, i) => (
				<span key={i} className={`col-gra-l cap ${i == 4 ? 'btn_small_1 btn_green_l tablet' : ''}`}>
					{t.text}
				</span>
			))}
		</aside>
	);
}
