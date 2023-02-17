import React from "react";
import Login from "./login";
import { profileProps } from "./Profile";

type PrivateControlProps = {
  isLogin: boolean;
  Component: React.ComponentType<profileProps>;
};

export const PrivateControl = ({ isLogin, Component }: PrivateControlProps) => {
  if (isLogin) {
    return <Component name="revive coding" />;
  } else {
    return <Login />;
  }
};
