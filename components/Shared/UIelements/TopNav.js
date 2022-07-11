import { useContext } from 'react';
import { DbrdCtx } from '@layout/DashboardLayout';
import UserCard from '@sharedUi/UserCard';

const TopNav = ({ title, right, classes = 'container-lg' }) => {
	const { _ } = useContext(DbrdCtx);
	return (
		<header className='top_nav bg-w '>
			<div className={` m-auto sp-btw flexi  ${classes}`}>
				<div>
					<hi className='heading_lg col-bl cap'>{title}</hi>
				</div>
				<div>{right ? right : <UserCard />}</div>
			</div>
		</header>
	);
};

export default TopNav;
