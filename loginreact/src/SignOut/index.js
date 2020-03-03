import React from "react";

import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";

const SignOutButton = ({ firebase }) => (
  <Link
    to='/signin'
    className='btn nav-item'
    role='button'
    aria-pressed='true'
    onClick={(e) => firebase.doSignOut(e)}
    style={{ color: "black" }}>
    Cerrar sesión
  </Link>
);

export default withFirebase(SignOutButton);
