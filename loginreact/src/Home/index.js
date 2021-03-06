import React, { Component } from "react";
// import logo from "../imagenes/az-nuevo.png";
import { withAuthorization } from "../Session";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { vnavNo, activeItemNavHome } from "../redux/actions/Nav";

import {
  Divider,
  Image,
  Segment,
  Item,
  Icon,
  Button,
  Card,
  Menu,
  Popup,
  Loader,
  Message,
  Table
} from "semantic-ui-react";

import { AuthUserContext } from "../Session";
import moment from "moment";

import "./Home.css";

import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import SearchExampleStandard from "../Components/Search";
import TableExampleSingleLine from "../Components/Table";
import TablaEdit from "../Components/Tabla2.js";

class HomePage extends Component {
  constructor() {
    super();
    this.auth = app.auth();
    this.state = {
      uid: "",
      userName: "",
      photoUser: "",
      accProvee: "",
      timeS: "",
      activeItem: "Home"
    };
  }

  componentDidMount() {
    var name2 = 1;
    this.props.activeItemNavHome(name2);
    this.DataProveedorTipo();
  }

  DataProveedorTipo = () => {
    var cambiContras;
    var timeSesion = moment(new Date()).format("DD/MM/YY | HH:mm:ss");

    if (this.auth.currentUser != null) {
      this.auth.currentUser.providerData.forEach(function(profile) {
        if (profile.providerId === "google.com") {
          cambiContras = "google";
        } else if (profile.providerId === "facebook.com") {
          cambiContras = "facebook";
        } else {
          cambiContras = "email";
        }
      });

      this.setState({
        uid: this.auth.currentUser.uid,
        userName: this.auth.currentUser.displayName,
        photoUser: this.auth.currentUser.photoURL,
        accProvee: cambiContras,
        timeS: timeSesion
      });
    }
  };

  // state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };

  navi = () => {
    this.props.vnavNo(false);
  };

  handleVer = () => {
    var p = "ver";
    this.props.dashPets(p);
  };
  handleNoVer = () => {
    var p = "item";
    this.props.dashPets(p);
  };

  render() {
    var fch = moment(new Date()).format("YYYY-MM-DD"); // estas seran la fecha de su ultima lectura
    var hch = moment(new Date()).format("HH:mm"); // estas seran la fecha de su ultima lectura
    var dataf = `Fecha ${fch} ||   ${hch} hrs`; // estas seran la fecha de su ultima lectura

    const { activeItem, userName, photoUser, uid, selM } = this.state;
    const { datostabla, timeS } = this.props;
    return (
      <div>
        <div className='fondoHome' onClick={() => this.navi()}>
          <div
            style={{
              color: "rgb(214, 228, 206)",
              position: "fixed",
              width: "100%",
              background: "white"
            }}>
            <AuthUserContext.Consumer>
              {(authUser) => (
                <div style={{ padding: "100px 20px 20px 10px" }}>
                  <p style={{ fontSize: 30 }}>
                    <Image avatar src={authUser.photoURL} />{" "}
                    {authUser.displayName}
                  </p>
                </div>
              )}
            </AuthUserContext.Consumer>

            <Menu
              text
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#a7ca94"
              }}>
              <AuthUserContext.Consumer>
                {(authUser) =>
                  authUser != null && (
                    <Link
                      style={{
                        color: "rgb(214, 228, 206)"
                      }}
                      to={`/account/settings/${authUser.uid}/${authUser.displayName}`}>
                      <Menu.Item
                        style={{
                          color: "rgb(214, 228, 206)"
                        }}
                        name='cuenta iniciada'
                        active={activeItem === "Home"}
                      />
                    </Link>
                  )
                }
              </AuthUserContext.Consumer>
              <Link
                style={{
                  color: "rgb(214, 228, 206)"
                }}
                to='/'>
                <Menu.Item
                  style={{ color: "rgb(214, 228, 206)" }}
                  name='Salir'
                  active={activeItem === "Salir"}
                />
              </Link>
            </Menu>
          </div>

          <div className='modas'>
            <div>
              <SearchExampleStandard datostabla={datostabla} timeS={timeS} />
              <TablaEdit datostabla={datostabla} timeS={timeS} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

const mapStateToProps = (state) => {
  return {
    nav: state.Nav.nav
    //datostabla: state.User.datostabla
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    },
    activeItemNavHome(name2) {
      dispatch(activeItemNavHome(name2));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(withAuthorization(condition)(HomePage));
