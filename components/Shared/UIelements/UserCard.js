import _ from '@sharedUi/UserCard.module.scss';
export default function UserCard() {
	return (
		<div className='flexi gap-25'>
			<span className={`pos-r ${_.icon}`}>
				<svg className='small_svg'>
					<use xlinkHref='/svg/sprite/sprite.svg#noti'></use>
				</svg>
				<span className='dot bg-pri-light'></span>
			</span>
			<article className='user_card flexi gap-15'>
				<div className='tiny-ci center-grid upp heading_small bg-pri col-w'>jw</div>

				<h5 className='heading_small cap'> john winsnow</h5>

				<button>
					<svg className='tiny_svg'>
						<use xlinkHref='/svg/sprite/sprite.svg#down'></use>
					</svg>
				</button>
			</article>
		</div>
	);
}
