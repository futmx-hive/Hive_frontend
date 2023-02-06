import React from "react";
import UseToggle from "../../../hooks/UseToogle";
import Select, { components } from "react-select";
import SmallLoader from "../SmallComponents/SmallLoader";

const style = {
	multiValue: (styles, { data }) => {
		return {
			...styles,
			backgroundColor: "#f0f0f0",
			border: "1px solid #e5e5e5",
			padding: ".4rem .4rem .4rem .9rem",
			borderRadius: "100px",
			fontSize: "1.4rem",
		};
	},
	multiValueLabel: (styles, { data }) => ({
		...styles,
		color: data.color,
	}),
	multiValueRemove: (styles, { data }) => ({
		...styles,
		borderRadius: "50%",
		marginLeft: 5,
		backgroundColor: "hsl(0, 0%, 47%)",
		color: "white",
		cursor: "pointer",
		":hover": {},
	}),
	option: (base, { data }) => ({
		...base,
		color: "#001e3d",
	}),
};

const MyOption = (props) => {
	const { innerProps, innerRef } = props;
	console.log({ SelectProps: props });
	return (
		<article ref={innerRef} {...innerProps} className='custom-option'>
			<h4>{props.data.artist}</h4>
			<div className='sub'>{props.data.title} </div>
		</article>
	);
};
const Select2 = ({
	label,
	name,
	value,
	error,
	index,
	handleChange,
	customChange,
	placeholder,
	options,
	showError = true,
	isLoading = false,
	isMulti = false,
	components = {},
	supportingText = "",
}) => {
	const { isOpen: isTouched, open: setIsTouched } = UseToggle(false);
	const errorText = () =>
		isTouched && !!error && showError ? (
			<small style={{ marginTop: "7px", fontWeight: 500 }} className={`error small weit-1 col-r `}>
				{error}
			</small>
		) : null;

	if (isLoading)
		return (
			<div className='form_group fexi js-center'>
				<SmallLoader scale={0.4} />
			</div>
		);

	return (
		<div className='form_group'>
			{label && (
				<label htmlFor={name} className='form_label open  cap  col-bl'>
					{label}
				</label>
			)}
			{!!supportingText && (
				<small className='small col-gra-l' style={{ display: "inline-block", marginBottom: ".5rem" }}>
					{supportingText}
				</small>
			)}
			<Select
				value={value}
				onBlur={setIsTouched}
				options={options}
				onChange={(chunk) => {
					if (customChange) return customChange(chunk);
					if (isMulti)
						return handleChange({
							payload: {
								[name]: chunk,
							},
						});

					handleChange({ index, name, payload: chunk.value });
				}}
				isMulti={isMulti}
				placeholder={placeholder}
				classNamePrefix={"form_input"}
				theme={(theme) => ({
					...theme,
					borderRadius: 8,
					borderWidth: 1,
				})}
				styles={{
					...style,
					control(base, chunk) {
						return {
							...base,
							boxShadow: "0",
							border: isTouched && !!error ? "2px solid #ffc7c7" : "1px solid #dbdbdb",
							":hover": {
								border: "1px solid #8ABCFF;",
							},
							":focus": {
								...base[":focus"],
								border: isTouched && !!error ? "1px solid #ffc7c7" : "1px solid #0069cc",
								boxShadow: 0,
							},
						};
					},

					// menuList (base, config) {
					//   return {
					//     ...base,
					//     border: '9px solid red',
					//     paddingBottom: isMulti ? '4rem' : '',
					//   };
					// },
				}}
				components={components}
			/>
			{errorText()}
		</div>
	);
};

export default Select2;
