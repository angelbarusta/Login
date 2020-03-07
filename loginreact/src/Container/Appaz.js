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
import {
  Transition,
  Divider,
  Button,
  Menu,
  List,
  Image
} from "semantic-ui-react";
import Landing from "../Landing";

import moment from "moment";

class Appaz extends Component {
  state = {
    visible: true,
    timeS: moment(new Date()).format("YYYY-MM-DD"),
    topClientes: []
  };

  componentWillMount() {
    let topCli = this.props.datostabla.splice(0, 5);
    this.setState({
      topClientes: topCli
    });
  }

  componentWillUpdate() {
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  muestraReloj = () => {
    var fch = moment(new Date()).format("YYYY-MM-DD"); // estas seran la fecha de su ultima lectura
    var hch = moment(new Date()).format("HH:mm:ss"); // estas seran la fecha de su ultima lectura
    var dataf = `Fecha ${fch} ,   ${hch} hrs`; // estas seran la fecha de su ultima lectura

    var timeR = moment(new Date()).format("DD/MM/YYYY | HH:mm:ss");
    this.setState({ timeS: dataf });
  };
  handleClik = () => {
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  };

  render() {
    const { nav, datostabla } = this.props;
    const { visible, timeS, topClientes } = this.state;

    // for (let i = 0; i < 5; i++) {
    //   const topClientes = datostabla[i];

    //   console.log("TOP5", topClientes);
    //   return topClientes;
    // }

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
          <Route exact path={ROUTES.LANDING}>
            <Landing datostabla={datostabla} topmap={topmap} timeS={timeS} />
          </Route>

          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route exact path={ROUTES.HOME}>
            <HomePage datostabla={datostabla} timeS={timeS} />
          </Route>
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
    nav: state.Nav.nav,
    datostabla: state.User.datostabla
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
