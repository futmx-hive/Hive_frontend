import ProfileHome from '@components/Portfolio/PortfolioHome';
import DashboardLayout from '@layout/DashboardLayout';
import SpaceBottom from '@layout/SpaceBottom';
import TopNav from '@sharedUi/TopNav';
import React from 'react';

function index() {
	return (
		<DashboardLayout>
			<SpaceBottom>
				<TopNav title={'portfolio'} />
				<ProfileHome />
			</SpaceBottom>
		</DashboardLayout>
	);
}

export default index;
