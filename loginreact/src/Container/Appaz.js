import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home/index";
import AccountPage from "../Account/index"; // importamos el componente container perfil usuario  <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />

import * as ROUTES from "../rutas/constants-routes";
import Navigation from "../Navigation";

import { withAuthentication } from "../Session";

import { connect } from "react-redux";
import { vnavSi, vnavNo } from "../redux/actions/Nav";
import Imgperfil from "../Head/img-home/imagen-home";

import PerfilCliente from "../Account/Uid";

import { AuthUserContext } from "../Session";
import { Transition, Divider, Button, Menu } from "semantic-ui-react";
import Landing from "../Landing";

class Appaz extends Component {
  state = { visible: true };

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  render() {
    const { nav } = this.props;
    const { visible } = this.state;
    return (
      <Router>
        <div style={{ width: "100%" }}>
          {/* o container de boottrap */}

          {nav == true ? (
            <nav className='navbar navbar-light navbar fixed-top navbar-light '>
              <Menu
                pointing
                secondary
                inverted
                style={{ border: 0, background: "transparent" }}>
                <Menu.Item>
                  <Imgperfil
                    content={visible ? "Hide" : "Show"}
                    onClick={this.toggleVisibility}
                  />
                </Menu.Item>
              </Menu>
            </nav>
          ) : (
            <div>
              <Navigation />
            </div>
          )}
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          {
            <AuthUserContext.Consumer>
              {(authUser) =>
                authUser != null && (
                  <Route
                    exact
                    path={`/account/settings/${authUser.uid}/${authUser.displayName}`}
                    component={AccountPage}
                  />
                )
              }
            </AuthUserContext.Consumer>
          }

          {
            <AuthUserContext.Consumer>
              {(authUser) =>
                authUser != null && (
                  <Route
                    exact
                    path={`/account/${authUser.uid}/${authUser.displayName}`}
                    component={PerfilCliente}
                  />
                )
              }
            </AuthUserContext.Consumer>
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    nav: state.Nav.nav
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    vnavSi(nav) {
      dispatch(vnavSi(nav));
    },
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthentication(Appaz));
