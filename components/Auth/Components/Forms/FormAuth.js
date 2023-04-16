import Field from "@form-components/Field";
import PasswordField from "@form-components/PasswordField";
import CtaButton from "@sharedUi/CtaButton";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Auth from "services/auth/auth.service";

function FormAuth({ isLogin, handleField, next }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => setEmail(e.payload);

  const sendEmail = async () => {
    const authService = Auth;
    const data = {
      email,
      connection_type: "passwordless",
    };
    try {
      const response = await authService.login(data);
      const sendRequest = response.data;
      if (sendRequest?.status === "success") {
        console.log("OTP sent successfully: ", sendRequest);
        toast.success(`OTP Sent`);
        handleField({ token: sendRequest?.token, email });
        next();
      } else {
        console.log("An error occurred. Please try again: ", sendRequest);
        toast.error(`An error occurred. Please try again`);
      }
    } catch (error) {
      console.log("An error occurred. Please try again. ", error);
      toast.error(`An error occurred. Please try again`);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "") {
      toast.error("Please enter an email to continue");
      setLoading(false);
    } else {
      sendEmail();
      console.log("Email entered: ? ", email);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="hr mt-1">
        <span className="col-gra-d">Or continue passwordless</span>
      </div>
      <form action="" className="form_pkg" onSubmit={handleClick}>
        {/* {!isLogin && (
					<>
						<div className='form_2'>
							<Field label={'first name *'} placeholder='elon' />
							<Field label={'last name *'} placeholder='musk' />
						</div>
					</>
				)} */}
        <Field
          label={"email *"}
          value={email}
          handleChange={handleEmail}
          type="email"
          placeholder={"elon@st.futminna.edu.ng"}
        />
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
        <div className="mt-1 grid">
          <CtaButton
            disabled={loading}
            onClick={handleClick}
            design="btn_pri tablet"
          >
            {/* {isLogin ? "login" : " create account"} */}
            {loading ? "Please wait..." : "Continue"}
          </CtaButton>
        </div>

        {/* <AuthFormBaseContent isLogin={isLogin} /> */}
      </form>
    </>
  );
}

export default FormAuth;
function AuthFormBaseContent({ isLogin }) {
  return (
    <div className="mt-2 center-flex flexi gap-15">
      <span>
        {isLogin ? "Dont have an account?" : "Already have an account?"}{" "}
      </span>
      <Link href={isLogin ? " /auth/signup" : "/auth/login"}>
        <a className="btn_txt col-pri weit-2">
          {isLogin ? " sign up" : "Login"}
        </a>
      </Link>
    </div>
  );
}
