import React from "react";
// import { configureStore } from 'redux';
import { createStore } from 'redux';
import { profileReducer } from "./profile/reducer";

export const store = createStore(profileReducer);
