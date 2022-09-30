import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({ authenticated, ...rest }) {
    return authenticated ? (<Route {...rest} />) : (<Navigate replace to={{ pathname: "/login" }} />);
}