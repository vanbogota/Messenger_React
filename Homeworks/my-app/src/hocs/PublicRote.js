import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function PublicRoute({ authenticated, ...rest }) {
    return !authenticated ? (<Route {...rest} />) : (<Navigate to="/chats" />);
}