import { combineReducers } from "redux";
import { galeryReducer } from "./galeryReducer";
import { profileReducer } from "./profileReducer";
export const rootReucers = combineReducers({
    galeryReducer,
    profileReducer
  });
  