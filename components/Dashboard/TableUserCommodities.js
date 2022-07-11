import Card from '@sharedUi/Card';

function TableUserCommodities() {
	return (
		<aside>
			<div className='sp-btw mb-2 flexi'>
				<h4 className='heading_small weit-2 cap'>your commodities</h4>

				<button className='btn_med btn_pri btn_icon tablet'>
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
							<th className='weit-3'>id</th>
							<th className='weit-3'>Area name</th>
							<th className='weit-3'>delivery fee</th>
							<th className='weit-3'>free delivery above</th>
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
			<td>
				<span color='col-gr'>+6.04%</span>
			</td>
			<td>
				<img src='/photos/tiny_chart_g.png' alt='simple_img' />
			</td>
		</tr>
	);
}

export default TableUserCommodities;
