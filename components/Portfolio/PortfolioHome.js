import BalanceShowcase from '@components/Dashboard/BalanceShowcase';
import TableUserCommodities from '@shared/Tables/TableUserCommodities';
import RecentTransactions from '@shared/Transaction/RecentTransactions';
import React from 'react';
import _ from './style.module.scss';

function ProfileHome() {
	return (
		<section className={`mt-4`}>
			<div className='container-lg'>
				<div className={`con_5_2 al-start ${_.portfolio}`}>
					<section className={`${_.portfolio_con}`}>
						<BalanceShowcase />
						<TableUserCommodities />
					</section>
					<section className={`${_.portfolio_con}`}>
						<RecentTransactions />
					</section>
				</div>
			</div>
		</section>
	);
}

export default ProfileHome;
