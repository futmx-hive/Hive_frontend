import HeadText from "@components/Auth/Components/HeadText";
import UseToggle from "@hooks/UseToogle";
import CtaButton from "@sharedUi/CtaButton";
import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment } from "react";
import Single from "./Single";

const OtpField = ({ onSuccess, merchantId, isSubmitting, showFallbackModal = true, buttonText = "verify" }) => {
	const optModal = UseToggle(false);
	const router = useRouter();

	const [value, setvalue] = useState(new Array(4).fill(""));
	const [count, setCount] = useState(-1);
	const { isOpen: error, toogle: setError, close: offError } = UseToggle(false);

	const updateValue = (val, index) => {
		let newValue, del;
		if (val === "") del = true;

		newValue = [...value];
		newValue[index] = val;

		for (let i = 0; i < index; i++) {
			if (newValue[i] === "") {
				newValue[i] = val;
				newValue[index] = "";
				setvalue(newValue);
				return;
			}
		}

		setvalue(newValue);
		if (del) {
			if (count >= 0) setCount(count - 1);
		}
		if (!del && count + 1 < 3) setCount(count + 1);

		if (!newValue.some((e) => e === "" || e === " ")) {
			offError();
			router.push("/");
		}
	};
	return (
		<Fragment>
			<div className='confirm_form grid_txt_2'>
				<HeadText
					h={"enter your security code"}
					p="We sent your code to *****@st.futminna.edu.ng. Don't show anyone"
				/>
				<form onSubmit={function verifyOTP() {}}>
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
									// disabled={isLoading || isSubmitting}
								/>
							))}
						</div>
					</div>
				</form>
				<p className='u-center flexi heading_small center-flex gap-15'>
					<span> Didn&apos;t receive code?</span>
					<button className='btn_txt'>resend</button>
				</p>
			</div>
		</Fragment>
	);
};

export default OtpField;
