import { combineReducers } from "redux";
import MoviesReducer from "./Reducer";

export const RootReducers = combineReducers({ MoviesReducer });