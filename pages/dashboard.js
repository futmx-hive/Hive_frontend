import BalanceShowcase from '@components/Dashboard/BalanceShowcase';
import TableUserCommodities from '@components/Dashboard/TableUserCommodities';
import WrapperTopCommodity from '@components/Dashboard/WrapperTopCommodity';
import RecentTransactions from '@components/Shared/Transaction/RecentTransactions';
import TxQuickActions from '@components/Shared/Transaction/TxQuickActions';
import TopNav from '@components/Shared/UIelements/TopNav';
import DashboardLayout from '@layout/DashboardLayout';
import SpaceBottom from '@layout/SpaceBottom';
import React from 'react';

function Dashboard() {
	return (
		<DashboardLayout>
			<SpaceBottom>
				<TopNav title={'dashboard'} />
				<section>
					<div className='container-lg con_5_2'>
						<BalanceShowcase />
						<TxQuickActions />
					</div>
					<WrapperTopCommodity />
					<div className='container-lg con_5_2'>
						<TableUserCommodities />
						<RecentTransactions />
					</div>
				</section>
			</SpaceBottom>
		</DashboardLayout>
	);
}

export default Dashboard;
