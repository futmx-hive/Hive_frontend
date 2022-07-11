import React from 'react';

const OnAndOffBtn = ({ onChange, onTxt, offTxt, big, on, name, disabled, loading, readOnly = false }) => {
	return (
		<div className={`toggle_btn  ${big ? 'big' : ''}`}>
			<input type='checkbox' name={name} id={name} checked={on} onChange={onChange} readOnly={readOnly} />
			<label
				htmlFor={name}
				className={`onoff tablet ${disabled ? 'disabled' : ''} ${
					loading ? (!on ? 'loading left' : 'loading right') : ''
				} `}
				data-txt={on ? onTxt || null : offTxt || null}
				style={{
					cursor: loading || disabled ? 'not-allowed' : 'pointer',
				}}
			/>
		</div>
	);
};

export default OnAndOffBtn;
