import { createStore, combineReducers } from "redux";

import Nav from "../redux/reducer/Nav";
import User from "../redux/reducer/User";
import Campo from "../redux/reducer/Campo";

const reducer = combineReducers({
  Nav,
  User,
  Campo
});

export default createStore(reducer);
