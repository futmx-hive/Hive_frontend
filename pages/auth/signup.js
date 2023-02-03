import AuthFormMain from '@components/Auth/Components/Forms/AuthFormMain';
import SignUpForm from '@components/Auth/Components/Forms/SignUpForm';
import HeadText from '@components/Auth/Components/HeadText';
import MainAuthLayout from '@components/Auth/Components/Layout/MainAuthLayout';

function signup() {
	return (
		<MainAuthLayout>
			<SignUpForm />
		</MainAuthLayout>
	);
}

export default signup;
