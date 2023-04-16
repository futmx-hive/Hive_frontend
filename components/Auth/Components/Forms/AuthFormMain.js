import HeadText from "../HeadText";
import FormAuth from "./FormAuth";
import FormOAuth from "./FormOAuth";

function AuthFormMain({
  heading = <HeadText h={"create your account"} />,
  isLogin,
  next = () => null,
  handleField,
}) {
  return (
    <div className="grid_txt_1">
      {heading}
      <FormAuth isLogin={isLogin} handleField={handleField} next={next} />
    </div>
  );
}

export default AuthFormMain;
