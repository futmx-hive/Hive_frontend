import TxHome from '@components/CustomerTransactions/TxHome';
import DashboardLayout from '@layout/DashboardLayout';
import SpaceBottom from '@layout/SpaceBottom';
import TopNav from '@sharedUi/TopNav';
import React from 'react';

function Transaction() {
	return (
		<DashboardLayout>
			<SpaceBottom>
				<TopNav title={'transactions'} />
				<TxHome />
			</SpaceBottom>
		</DashboardLayout>
	);
}

export default Transaction;
