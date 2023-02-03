import HideOnMobile from "@layout/HideOnMobile";
import React from "react";

function TrowTx() {
	return (
		<tr className='pos-r'>
			<td>
				<span className='cap'>may 17th 2022</span>
			</td>
			<td>
				<div className='grid_txt '>
					<p>190</p>
					<span className='col-gra-d small'>Masters</span>
				</div>
			</td>
			<HideOnMobile>
				<td>
					<div className='grid_txt upp'>
						<p>40</p>
					</div>
				</td>
				<td>
					<span>1345</span>
				</td>
				<td>
					<span>78</span>
				</td>
			</HideOnMobile>

			<td>
				<span className='badge_bg badge_gr upp'> active</span>
			</td>
			<td className='col-pri'>
				<button className='btn_small btn_bord col-pri  weit-1 br'> inspect</button>
			</td>
		</tr>
	);
}

export default TrowTx;
