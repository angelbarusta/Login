import React from "react";
import { AuthUserContext } from "../Session"; // secion de base de datos de gen

import NavigationAuth from "./NavAuth";
import NavigationNonAuth from "./NavNoAuth";

//import App from '../../App';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

export default Navigation;
