import Field from '@form-components/CommoDityInput';
import PhoneField from '@form-components/PhoneField';
import UseToggle from '@hooks/UseToogle';
import CtaButton from '@sharedUi/CtaButton';
import Modal from '@sharedUi/Modal';
import _ from '../style.module.scss';
import FormUpdatePassword from './FormUpdatePassword';

function FormProfile() {
	const passwordFormToog = UseToggle();
	return (
		<>
			<section className={`${_.settings_box}`}>
				<form className='form_pkg'>
					<div className='form_grid_2'>
						<Field autoFocus label={'first name'} placeholder={'elon'} />
						<Field label={'last name'} placeholder={'musk'} />
					</div>
					<Field type={'email'} label='email' placeholder={'eleon@tesla.com'} />

					<PhoneField label='phone number' autoFocus={false} />
					<div className='grid_txt_1 mb-4 mt-2'>
						<h4 className='heading_avg weit-2 cap'>change password</h4>
						<p className={`${_.p}`}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quae nihil, ratione
						</p>
						<div className='mt-1'>
							<button
								onClick={passwordFormToog.open}
								type='button'
								className='btn_pri_light btn_med br-1 heading_small weit-2'>
								change password
							</button>
						</div>
					</div>
					<aside className={`flexi js-end gap-25 ${_.form_prof_base}`}>
						<button className='btn_txt heading_small'>cancel</button>
						<CtaButton>save changes</CtaButton>
					</aside>
				</form>
			</section>
			<Modal isOpen={passwordFormToog.isOpen} close={passwordFormToog.close}>
				<FormUpdatePassword />
			</Modal>
		</>
	);
}

export default FormProfile;
