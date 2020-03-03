import { createStore, combineReducers } from "redux";

import Nav from "../redux/reducer/Nav";
import User from "../redux/reducer/User";

const reducer = combineReducers({
  Nav,
  User
});

export default createStore(reducer);
