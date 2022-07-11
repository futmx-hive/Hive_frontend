import React, { useState, useEffect } from 'react';
import OptionsModal from '../../Login/OptionsModal';
import Modal from '../UIelements/Modal';
import UseCountdown from '../../../hooks/UseTimer';
import UseToggle from '../../../hooks/UseToogle';
import { UseVerifyOTP } from '../../../Services/auth/auth.queries';
import Single from './Single';
import { Fragment } from 'react';
import CtaButton from '../UIelements/CtaButton';

const OtpField = ({ onSuccess, merchantId, isSubmitting, showFallbackModal = true, buttonText = 'verify' }) => {
	const optModal = UseToggle(false);
	const [timeElapsed, setTimeElapsed] = useState(false);
	const [value, setvalue] = useState(new Array(4).fill(''));
	const [count, setCount] = useState(-1);
	const [_, time] = UseCountdown(() => setTimeElapsed(true));
	const { mutate, isLoading } = UseVerifyOTP();
	const { isOpen: error, toogle: setError, close: offError } = UseToggle(false);
	const verifyOTP = (e) => {
		e.preventDefault();
		mutate(
			{ otp: value.join(''), merchantId },
			{
				onSuccess(data) {
					if (data.data.errorMessage) setError();
					else onSuccess(data);
				},
				onError(error) {
					// console.log ({error});
				},
			},
		);
	};

	const updateValue = (val, index) => {
		let newValue, del;
		if (val === '') del = true;

		newValue = [...value];
		newValue[index] = val;

		for (let i = 0; i < index; i++) {
			if (newValue[i] === '') {
				newValue[i] = val;
				newValue[index] = '';
				setvalue(newValue);
				return;
			}
		}

		setvalue(newValue);
		if (del) {
			if (count >= 0) setCount(count - 1);
		}
		if (!del && count + 1 < 3) setCount(count + 1);

		if (!newValue.some((e) => e === '' || e === ' ')) {
			offError();
		}
	};
	return (
		<Fragment>
			<div className='confirm_form grid_txt_2'>
				<div className='sp-btw heading_small weit-2 col-bl '>
					<span className='small upp'>OTP</span>
					<span className={`small cap ${timeElapsed ? 'col-r' : ''}`}>{time}</span>
				</div>
				<form onSubmit={verifyOTP}>
					<div>
						<div className='confirm_form_pack'>
							{value.map((v, index) => (
								<Single
									value={v}
									changeHandler={(val) => updateValue(val, index)}
									setCount={setCount}
									index={index}
									key={index}
									count={count}
									id={index}
									error={error}
									disabled={isLoading || isSubmitting}
								/>
							))}
						</div>
						{error && (
							<div className='u-center' style={{ marginTop: '8px' }}>
								<small className='weit-2 u-center col-r smaller'>
									Incorrect OTP or OTP expired !!!
								</small>
							</div>
						)}
					</div>
					{timeElapsed && (
						<div className='flexi cap'>
							<span>didnt get the code? &nbsp;</span>{' '}
							<button className='btn_txt col-b small weit-2' type='button' onClick={optModal.open}>
								see other options
							</button>
						</div>
					)}

					<CtaButton
						text={buttonText}
						loadingText='verifying...'
						classes='btn_blue btn_med u-center heading_small cap '
						buttonType='submit'
						loading={isLoading}
						disabled={isLoading || value.some((v) => v === '' || v === ' ') || isSubmitting}
					/>
				</form>
				{/* <button
          className=""
          style={{width: '100%'}}
          disabled={
           
          }
          onClick={verifyOTP}
        >
          {buttonText}
        </button> */}
			</div>
			<Modal isOpen={optModal.isOpen} close={optModal.close} fill>
				<OptionsModal />
			</Modal>
		</Fragment>
	);
};

export default OtpField;
