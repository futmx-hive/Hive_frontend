import HeadText from "../HeadText";
import AuthFormMain from "./AuthFormMain";
import { TabPanel } from "@sharedUi/Tabs";
import UseTabs from "@hooks/UseTabs";
import OTPForm from "./OTPForm";
import HowToVerifyForm from "./Verification/HowToVerifyForm";
import UseNextPrev from "@hooks/UseNextPrev";
import { useState } from "react";

function LoginForm() {
  const [active, setActive] = UseTabs(0);
  const [field, setField] = useState({});
  const nav = UseNextPrev(setActive);

  const handleField = (value) => setField({ ...field, ...value });

  return (
    <>
      <TabPanel index={0} value={active}>
        <AuthFormMain
          handleField={handleField}
          next={nav.go(1)}
          heading={<HeadText h="welcome back !" />}
          isLogin
        />
      </TabPanel>
      <TabPanel index={1} value={active}>
        <div className="mt-5">
          <OTPForm field={field} prev={nav.go(0)} />
        </div>
      </TabPanel>
    </>
  );
}

export default LoginForm;
