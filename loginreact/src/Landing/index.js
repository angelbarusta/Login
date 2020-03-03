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
import { Link } from "react-router-dom";

const Landing = (props) => {
  let clientes = props.datostabla;

  let topClientes = clientes.splice(0, 5);
  const topmap = topClientes.map((s, i) => {
    return (
      <List>
        <List.Item>
          <Image avatar circular src={s.image} />
          <List.Content>
            <List.Header>{s.title}</List.Header>
            {s.description}
          </List.Content>
        </List.Item>
      </List>
    );
  });
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
                        <Link to='/'>
                          <Icon circular name='home' />
                        </Link>
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

                  <div style={{ paddingTop: 30 }}>
                    <h1 className='Inises-Lan'>Top Clientes</h1>
                    <div style={{ paddingTop: 20 }}>{topmap}</div>
                  </div>

                  {/* <List items={topClientes} /> */}

                  <div
                    style={{ padding: "20px 20px 0px 0px", cursor: "pointer" }}>
                    <Popup
                      content='Mostrar tablas'
                      trigger={
                        <Link to='/home'>
                          <Image src={linechart} className='ImaLanding' />
                        </Link>
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
    nav: state.Nav.nav,
    datostabla: state.User.datostabla
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
