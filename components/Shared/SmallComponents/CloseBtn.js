import React from 'react';
import sprite from '../../../Assets/imagery/svg/sprite.svg';

const CloseBtn = ({close}) => {
  return (
    <button
      type="button"
      className="small_svg_1 center-flex close_button"
      onClick={close}
    >
      <svg className="small_svg_1" style={{fill: '#676767'}}>
        <use xlinkHref={sprite + '#close'} />
      </svg>
    </button>
  );
};

export default CloseBtn;
