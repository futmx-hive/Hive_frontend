import React from 'react';
import BackButtonAndText from '../Shared/SmallComponents/BackButtonAndText';
import SpaceBottom from '../Shared/SmallComponents/SpaceBottom';
import Card from '../Shared/SmallComponents/Card';
import sprite from '../../Assets/imagery/svg/sprite.svg';
import TopHeader from '../Shared/UIelements/TopNav';
import {Link} from 'react-router-dom';

const PaymentFormLayout = ({
  icon,
  children,
  title,
  successText,
  showSuccessText,
  container = 'container-c833',
}) => {
  return (
    <SpaceBottom>
      <TopHeader left={<BackButtonAndText text="setup online payment" />} />
      <div className="mt-2">
        {!showSuccessText
          ? <Card classes={`${container} payment_mode_form`}>
              <div className="grid_txt_2">
                <svg className="lag_svg">
                  <use xlinkHref={sprite + `#${icon}`} />
                </svg>
                <h3 className="heading_small col-bl weit-2">{title}</h3>
                <div>
                  {children}
                </div>
              </div>
            </Card>
          : <SuccessBox text={successText} />}
      </div>
    </SpaceBottom>
  );
};

function SuccessBox({text}) {
  return (
    <Card classes=" congrats_box ">
      <div className="u-center grid_txt_1">
        <div className={`small-ci center-flex m-auto bg-gr`}>
          <svg class="med_svg col-w">
            <use xlinkHref={sprite + `#tick`} />
          </svg>
        </div>
        <h6 className="heading_med weit-2 col-bl">congratulations</h6>
        <p className=" heading_small_1 col-bl line-1">
          Your payment profile is succesfully verified and you can now start
          accepting payments online from your customers via bank transfer
          {' ' + text}
        </p>

        <Link
          to="/"
          className={`btn_large heading_small_1 btn_blue self-center`}
        >
          take me to payments
        </Link>
      </div>
    </Card>
  );
}

export default PaymentFormLayout;
