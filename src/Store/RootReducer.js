import { combineReducers } from "redux";
import * as AllReducer from "../Store/_redux/AllReducer";
import { all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  card: AllReducer.carddReducer,
});