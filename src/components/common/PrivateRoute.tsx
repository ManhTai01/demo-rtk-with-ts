import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface PrivateRouteProps {}

export function Private(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  console.log(isLoggedIn);

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
}
