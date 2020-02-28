import React, { Component } from "react";
import logo from "../imagenes/az-nuevo.png";
import { AuthUserContext } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization } from "../Session";
import { connect } from "react-redux";
import { vnavNo, activeItemNavAcc } from "../../../redux/actions/Nav";
import { duser } from "../../../redux/actions/User";
import { Dropdown, Image, Segment, Card, Icon, Popup } from "semantic-ui-react";
import "./acc.css";
import SignOutButton from "../../../Gen/components/SignOut";
import { Link } from "react-router-dom";

import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

class AccountPage extends Component {
  constructor() {
    super();
    this.auth = app.auth();
    this.state = {
      changePass: true,
      uid: "",
      userName: ""
    };
  }
  componentDidMount() {
    var name3 = 2;
    this.props.activeItemNavAcc(name3);
    var user = this.auth.currentUser;
    // console.log(`USER ${user}`);
    this.DataProveedorTipo();
  }

  DataProveedorTipo = () => {
    var cambiContras = true;

    if (this.auth.currentUser !== undefined) {
      this.auth.currentUser.providerData.forEach(function(profile) {
        if (profile.providerId === "google.com") {
          cambiContras = "Google";
        } else if (profile.providerId === "facebook.com") {
          cambiContras = "facebook";
        } else {
          cambiContras = "password";
        }
      });
    }
    console.log(`cambio pass ${cambiContras}`);
    this.setState({
      changePass: cambiContras,
      uid: this.auth.currentUser.uid,
      userName: this.auth.currentUser.displayName
    });

    return cambiContras;
  };

  render() {
    var { changePass, userName, uid } = this.state;
    return (
      <div className='fondoHome-acc'>
        <div className='modas-acc'>
          <AuthUserContext.Consumer>
            {(authUser) => (
              <Card
                style={{ padding: 20 }}
                onClick={() => this.props.vnavNo(false)}>
                <h1
                  style={{
                    fontSize: "medium",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto"
                  }}>
                  {authUser != null ? (
                    <p>
                      <Image avatar src={authUser.photoURL} />{" "}
                      {authUser.displayName}
                    </p>
                  ) : (
                    authUser.providerData.forEach(function(profile) {
                      console.log("Sign-in provider: " + profile.providerId);
                      console.log("  Provider-specific UID: " + profile.uid);
                      console.log("  Name: " + profile.displayName);
                      console.log("  Email: " + profile.email);
                      console.log("  Photo URL: " + profile.photoURL);
                    })
                  )}
                </h1>
                <br />
                <Icon
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto"
                  }}
                  circular
                  name='setting'
                />
                <h1
                  style={{
                    paddingBottom: 10,
                    fontSize: "medium",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto"
                  }}>
                  Configuracion de cuenta
                </h1>
                {changePass === "password" ? (
                  <p>
                    Porfavor para un mejor servicio el correo debe ser Gmail
                  </p>
                ) : (
                  <div>
                    <p>
                      Las cuentas iniciadas con Facebook o Google no pueden ser
                      configuradas por aqui
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Popup
                        content='Las modificaciones para cuentas iniciadas en facebook o google son efectuadas en su plataforma'
                        trigger={<Icon name='question circle' circular />}
                      />
                    </div>
                    <p>
                      Usted se encuentra en una cuenta iniciada con:{" "}
                      <h1 style={{ display: "flex", justifyContent: "center" }}>
                        {this.state.changePass}
                      </h1>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 30
                      }}>
                      <Popup
                        content='Salir de la cuenta'
                        trigger={
                          <a role='button'>
                            <SignOutButton />
                          </a>
                        }
                      />
                    </div>
                  </div>
                )}
                <br />

                {changePass === "password" && (
                  <div>
                    <PasswordForgetForm />
                    <PasswordChangeForm />
                    <div className='App container'>
                      <Icon
                        name='setting'
                        size='large'
                        className='App-logo'
                        alt='logo'
                        style={{ padding: 30, maxWidth: 500, maxHeight: 500 }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 10
                      }}>
                      <Popup
                        content='Salir de la cuenta'
                        trigger={
                          <a role='button'>
                            <SignOutButton />
                          </a>
                        }
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Popup
                    content='Regresar a landing principal'
                    trigger={
                      <Link to='/'>
                        <Icon circular name='home' />
                      </Link>
                    }
                  />
                  <Popup
                    content='Ir a mi perfil'
                    trigger={
                      <Link to={`/account/${uid}/${userName}`}>
                        <Icon circular name='user' />
                      </Link>
                    }
                  />
                </div>
              </Card>
            )}
          </AuthUserContext.Consumer>
        </div>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

const mapStateToProps = (state) => {
  console.log("STATE UID", state);
  return {
    nav: state.Nav.nav,
    user: state.User.user
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    },
    duser(u) {
      dispatch(duser(u));
    },
    activeItemNavAcc(name3) {
      dispatch(activeItemNavAcc(name3));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(withAuthorization(authCondition)(AccountPage));
