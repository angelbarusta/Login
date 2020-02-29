import React from "react";

import { Button, Icon, Card, Popup } from "semantic-ui-react";
import { SignInForm, SignInGoogle, SignInFacebook } from "../SignIn";
import { PasswordForgetLink } from "../PasswordForget";
import { SignUpLink } from "../SignUp";
import { vnavNo } from "../redux/actions/Nav";
import { connect } from "react-redux";
import "./index.css";
import Masa from "../Animaciones/masa";

const Landing = (props) => {
  return (
    <div onClick={() => props.vnavNo(false)} className='SiginStyl'>
      {/* <Fondo style={{maxHeight:50,maxWidth:'100%'}}/> */}

      <div className='Formu-Lan '>
        <div className='LoginLanding' stackable style={{ padding: 20 }}>
          <div>
            <div>
              <h1 className='Inises-Lan'>Inicia sesión</h1>
              <Icon className='Inises-Lan' circular name='user' />
            </div>
            <SignInForm />
            <SignInGoogle />
            <SignInFacebook />
            <PasswordForgetLink />
            <SignUpLink />

            <div style={{ padding: "20px 20px 0px 0px" }}>
              <Popup
                content='Regresar a landing principal'
                trigger={
                  <a href='/'>
                    <Icon circular name='home' />
                  </a>
                }
              />
            </div>
          </div>
        </div>
        <Masa />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    nav: state.Nav.nav
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    }
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Landing);
