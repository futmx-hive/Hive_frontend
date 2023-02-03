import Field from "@form-components/Field";
import PasswordField from "@form-components/PasswordField";
import CtaButton from "@sharedUi/CtaButton";
import Link from "next/link";
import React from "react";

function FormAuth({ isLogin, next }) {
	return (
		<>
			<div className='hr mt-1'>
				<span className='col-gra-d'>Or continue passwordless</span>
			</div>
			<form action='' className='form_pkg'>
				{/* {!isLogin && (
					<>
						<div className='form_2'>
							<Field label={'first name *'} placeholder='elon' />
							<Field label={'last name *'} placeholder='musk' />
						</div>
					</>
				)} */}
				<Field label={"email *"} type='email' placeholder={"elon@st.futminna.edu.ng"} />
				{/* <PasswordField
					type={"password"}
					label={
						<div className='flexi sp-btw'>
							<span> password *</span>
							<Link href={"/auth/password/reset"}>
								<a className='btn_txt col-pri weit-2 heading_small cap'> forgot password</a>
							</Link>
						</div>
					}
					placeholder={"enter your password"}
				/> */}
				<div className='mt-1 grid'>
					<CtaButton onClick={next} design='btn_pri tablet'>
						{isLogin ? "login" : " create account"}
					</CtaButton>
				</div>

				<AuthFormBaseContent isLogin={isLogin} />
			</form>
		</>
	);
}

export default FormAuth;
function AuthFormBaseContent({ isLogin }) {
	return (
		<div className='mt-2 center-flex flexi gap-15'>
			<span>{isLogin ? "Dont have an account?" : "Already have an account?"} </span>
			<Link href={isLogin ? " /auth/signup" : "/auth/login"}>
				<a className='btn_txt col-pri weit-2'>{isLogin ? " sign up" : "Login"}</a>
			</Link>
		</div>
	);
}
