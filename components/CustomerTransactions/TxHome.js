import React from 'react';
import { TabBtn, TabDropDown, TabPanel, Tabs } from '@sharedUi/Tabs';
import Card from '@sharedUi/Card';
import UseTabs from '@hooks/UseTabs';
import TheadTx from './TheadTx';
import TrowTx from './TrowTx';
import _ from './style.module.scss';

function TxHome() {
	const [active, setActive] = UseTabs(0);
	return (
		<section className={`${_.tx_sec}`}>
			<div className='container-lg'>
				<Card>
					<Tabs classes='' value={active} onChange={setActive} max={4}>
						<TabBtn>commodities bought</TabBtn>
						<TabBtn>withdrawals</TabBtn>
						<TabBtn>commodity swaps</TabBtn>
						<TabBtn>sent commodities</TabBtn>
						<TabBtn>Recieved commodities </TabBtn>
					</Tabs>
					<table className='table_t mt-2'>
						<TheadTx />
						<tbody>
							<TrowTx />
							<TrowTx />
							<TrowTx />
							<TrowTx />
							<TrowTx />
							<TrowTx />
							<TrowTx />
							<TrowTx />
						</tbody>
					</table>
				</Card>
			</div>
		</section>
	);
}

export default TxHome;
