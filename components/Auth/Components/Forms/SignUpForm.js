import HeadText from '../HeadText';
import AuthFormMain from './AuthFormMain';
import { TabBtn, TabDropDown, TabPanel, Tabs } from '@sharedUi/Tabs';
import UseTabs from '@hooks/UseTabs';
import EmailVerification from './Verification/EmailVerification';
import OTPForm from './OTPForm';
import UseNextPrev from '@hooks/UseNextPrev';
import FormSecureAccount from './FormSecureAccount';

function SignUpForm() {
	const [active, setActive] = UseTabs(0);
	const nav = UseNextPrev(setActive);

	return (
		<>
			<TabPanel index={0} value={active}>
				<AuthFormMain next={nav.go(1)} isLogin={false} />
			</TabPanel>
			<TabPanel index={1} value={active}>
				<EmailVerification next={nav.go(2)} prev={nav.go(0)} />
			</TabPanel>
			<TabPanel index={2} value={active}>
				<FormSecureAccount next={nav.go(3)} prev={nav.go(1)} />
			</TabPanel>
			<TabPanel index={3} value={active}>
				<div className='mt-5'>
					<OTPForm prev={nav.go(2)} />
				</div>
			</TabPanel>
		</>
	);
}

export default SignUpForm;
