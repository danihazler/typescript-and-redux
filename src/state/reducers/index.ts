import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer";

export const reducers = combineReducers({
    bank: bankReducer
});

export type RootState = ReturnType<typeof reducers>;
