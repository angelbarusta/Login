import React from "react";

import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";

const SignOutButton = ({ firebase }) => (
  <Link
    href='/signin'
    className='btn nav-item'
    role='button'
    aria-pressed='true'
    onClick={firebase.doSignOut}
    style={{ color: "black" }}>
    Cerrar sesión
  </Link>
);

export default withFirebase(SignOutButton);
