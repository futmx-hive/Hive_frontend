import LoginForm from "@components/Auth/Components/Forms/LoginForm";
import MainAuthLayout from "@components/Auth/Components/Layout/MainAuthLayout";
import React from "react";

function login() {
  return (
    <MainAuthLayout>
      <LoginForm />
    </MainAuthLayout>
  );
}

export default login;
