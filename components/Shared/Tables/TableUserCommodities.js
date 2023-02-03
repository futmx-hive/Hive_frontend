import HideOnMobile from '@layout/HideOnMobile';
import Card from '@sharedUi/Card';

function TableUserCommodities() {
	return (
		<aside>
			<div className='sp-btw mb-2 flexi'>
				<h4 className='heading_small weit-2 cap'>your commodities</h4>

				<button className='btn_med btn_ btn_pri btn_icon tablet'>
					<svg>
						<use xlinkHref='/svg/sprite/sprite.svg#plus'></use>
					</svg>
					<span className='cap'> add new</span>
				</button>
			</div>

			<Card xtraClassNames={'py-2'}>
				<table className='table_t'>
					<thead className='thead'>
						<tr>
							<th className='weit-3'>commodity</th>
							<th className='weit-3'>Balance</th>
							<HideOnMobile>
								<th className='weit-3'>7d%</th>
								<th className='weit-3'>chart</th>
							</HideOnMobile>
						</tr>
					</thead>
					<tbody>
						<UserCommodityItem />
						<UserCommodityItem />
						<UserCommodityItem />
						<UserCommodityItem />
					</tbody>
				</table>
			</Card>
		</aside>
	);
}

function UserCommodityItem() {
	return (
		<tr className='pos-r'>
			<td>
				<div className='grid_txt upp'>
					<p>maize</p>
					<span className='col-gra-d'>smz</span>
				</div>
			</td>
			<td>
				<span>₦ 6,641.20</span>
			</td>
			<HideOnMobile>
				<td>
					<span color='col-gr'>+6.04%</span>
				</td>
				<td>
					<img src='/photos/tiny_chart_g.png' alt='simple_img' />
				</td>
			</HideOnMobile>
		</tr>
	);
}

export default TableUserCommodities;
