import { combineReducers } from "redux";
import FakeBookReducer from "./FakeBookReducer";
import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";

export const rootReducer = combineReducers({
  FakeBookReducer,
  BaiTapGameBauCuaReducer,
});
