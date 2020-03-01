import React from "react";

import { Button, Icon, Card, Popup, List, Image } from "semantic-ui-react";
import { SignInForm, SignInGoogle, SignInFacebook } from "../SignIn";
import { PasswordForgetLink } from "../PasswordForget";
import { SignUpLink } from "../SignUp";
import { vnavNo } from "../redux/actions/Nav";
import { connect } from "react-redux";
import "./index.css";
import Masa from "../Animaciones/masa";
import { AuthUserContext } from "../Session";

import linechart from "../imagenes/linechart.png";
import SignOut from "../SignOut";

const Landing = (props) => {
  return (
    <div onClick={() => props.vnavNo(false)} className='SiginStyl'>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser == null && (
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
              <Masa className='SiginStyl' />
            </div>
          )
        }
      </AuthUserContext.Consumer>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser != null && (
            <div className='Formu-Lan '>
              <div className='LoginLanding' stackable style={{ padding: 20 }}>
                <div>
                  <div>
                    <h1 className='Inises-Lan'>
                      Bienvenido {authUser.displayName}
                    </h1>
                  </div>
                  <List items={["Apples", "Pears", "Oranges"]} />

                  <div
                    style={{ padding: "20px 20px 0px 0px", cursor: "pointer" }}>
                    <Popup
                      content='Mostrar tablas'
                      trigger={
                        <a href='/home'>
                          <Image src={linechart} className='ImaLanding' />
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
              <Masa className='SiginStyl' />
              <div style={{ padding: "20px 20px 0px 0px", cursor: "pointer" }}>
                <SignOut />
              </div>
            </div>
          )
        }
      </AuthUserContext.Consumer>
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
