import Card from '../Shared/SmallComponents/Card';
import SpaceBottom from '../Shared/SmallComponents/SpaceBottom';
import TopHeader from '../Shared/UIelements/TopNav';
import BackButtonAndText from '../Shared/SmallComponents/BackButtonAndText';
import LinkToWhatsAppNumber from '../Shared/Form/LinkToWhatsAppNumber';

const ComingSoon = () => {
	return (
		<SpaceBottom>
			<TopHeader left={<BackButtonAndText text='coming soon' />} />
			<div
				className='fill bg-w center-flex'
				style={{
					height: '110%',
				}}>
				<div className='form_half grid_txt js-center u-center'>
					<h5 className='heading_med_lag col-bl weit-2 cap'>feature not yet available</h5>
					<p className='heading_small cap'>get notified when this feature is ready</p>
					<div className='u-center mt-1'>
						<LinkToWhatsAppNumber>notify me</LinkToWhatsAppNumber>
					</div>
				</div>
			</div>
		</SpaceBottom>
	);
};

export default ComingSoon;
