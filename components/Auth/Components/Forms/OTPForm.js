import OtpField from '@form-components/OtpField';
import BackButtonAndText from '@shared/SmallComponents/BackButtonAndText';

function OTPForm({ whatToVerify, onSuccess, type, merchantId, isSubmitting = false, phoneNo, prev }) {
	return (
		<div className='grid_txt_1 '>
			<BackButtonAndText onClick={prev} />
			<OtpField
				onSuccess={onSuccess}
				merchantId={merchantId}
				isSubmitting={isSubmitting}
				// onCountDownComplete={alert}
				phoneNo={phoneNo}
			/>
		</div>
	);
}

export default OTPForm;
