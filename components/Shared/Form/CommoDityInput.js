import React, { Fragment, useMemo } from 'react';
import UseToggle from '../../../hooks/UseToogle';

const Field = ({
	autoFocus = false,
	type,
	placeholder,
	supportingText,
	label,
	disabled,
	error,
	name,
	typeOfField,
	rows,
	handleChange,
	badge,
	supportingContent,
	classes = 'grid_1_max',
	showError = true,
	value,
	index = null,
	dataAddon = '',
	tempVal = '',
}) => {
	const { isOpen: isTouched, open: setIsTouched } = UseToggle(false);

	const firstCap = (txt) => (txt ? txt.replace(/^\w/, (e) => e.toUpperCase()) : null);
	const errorText = () =>
		isTouched && error && showError ? (
			<small style={{ marginTop: '7px', fontWeight: 500 }} className={`error small weit-1 col-r `}>
				{firstCap(error)}
			</small>
		) : null;

	const handleUpdate = (e) => {
		const { value } = e.target;
		if (disabled) return;
		if (index === null) return handleChange({ name, index: undefined, payload: value });
		handleChange({ name, index, payload: value });
	};
	const element = !typeOfField ? (
		<Fragment>
			<div
				className={`pos-r ${!dataAddon ? 'no_addon' : ''}  ${
					!!badge || !!supportingContent ? 'form_input_pack br grid_1_max' : classes
				}`}
				data-addon={dataAddon}>
				<input
					className={`form_input br ${type === 'tel' ? 'tel' : ''} `}
					type={type}
					placeholder={firstCap(placeholder)}
					label={label}
					value={value}
					readOnly={disabled}
					onBlur={() => setIsTouched()}
					onChange={handleUpdate}
					autoFocus={autoFocus}
					disabled={disabled}
					name={name}
				/>

				{!!supportingContent &&
					React.cloneElement(sc, {
						...sc.props,
						isTouched,
						error,
					})}
			</div>
			{errorText()}
		</Fragment>
	) : null;

	return (
		<React.Fragment>
			<div className={`form_group ${error && isTouched ? ' error' : ''}`}>
				{label && (
					<label htmlFor={name} className='form_label open  cap weit-2 col-bl'>
						{label}
					</label>
				)}
				{!!supportingText && (
					<small className='small col-gra-l' style={{ display: 'inline-block', marginBottom: '.5rem' }}>
						{supportingText}
					</small>
				)}
				{element}
			</div>
		</React.Fragment>
	);
};

export default Field;
