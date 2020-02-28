import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  

    <a href='/signin' className="btn nav-item" role="button" aria-pressed="true" onClick={firebase.doSignOut} style={{color:"black"}} >Salir</a>

  
);



export default withFirebase(SignOutButton);