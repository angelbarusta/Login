import { createStore, combineReducers } from "redux";

import Nav from "../redux/reducer/Nav";
import User from "../redux/reducer/User";
import Campo from "../redux/reducer/Campo";
import Crops from "../redux/reducer/Crops";
import Ykan from "../redux/reducer/Ykan";

const reducer = combineReducers({
  Nav,
  User,
  Campo,
  Crops,
  Ykan
});

export default createStore(reducer);
