import React from 'react';

function TrowTx() {
	return (
		<tr className='pos-r'>
			<td>
				<span className='cap'>may 17th 2022</span>
			</td>
			<td>
				<div className='grid_txt upp'>
					<p>maize</p>
					<span className='col-gra-d'>smz</span>
				</div>
			</td>
			<td>
				<div className='grid_txt upp'>
					<p>Rice</p>
					<span className='col-gra-d'>Rce</span>
				</div>
			</td>
			<td>
				<span>₦ 6,641.20</span>
			</td>
			<td>
				<span>₦ 6,641.20</span>
			</td>

			<td>
				<span className='badge_bg badge_gr upp'> processing</span>
			</td>
			<td>
				<button className='btn_txt col-pri weit-2'> view details</button>
			</td>
		</tr>
	);
}

export default TrowTx;
