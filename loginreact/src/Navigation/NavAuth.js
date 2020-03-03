import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Menu,
  Segment,
  Icon,
  Image,
  Dropdown,
  Popup,
  Label
} from "semantic-ui-react";
import logo from "../imagenes/az-nuevo.png";
import SignOutButton from "../SignOut";
import Imgperfil from "../Head/img-home/imagen-home";
import {
  activeItemNav,
  activeItemNavAcc,
  activeItemNavHome,
  activeItemNavLan,
  activeItemNavNoti
} from "../redux/actions/Nav";
import logo2 from "../imagenes/az-nuevo.png";
import { AuthUserContext } from "../Session/index";

import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Link } from "react-router-dom";
import "./navigation.css";

import _ from "lodash";
import faker from "faker";

class NavigationAuth extends Component {
  // si el usuario esta autenticado en az
  constructor() {
    super();
    this.auth = app.auth();
    const database = firebase.database();
    //var user = this.auth.currentUser.uid;
    var user = this.auth.currentUser;
    var uid = user.uid;
    var nameUser = user.displayName;

    this.state = {
      bg: "bg-trasparent", //bg:'bg-dark',
      colores: "rgb(4, 146, 160)", //colores:'white',
      actnavcolor: false, //actnavcolor:true,
      uid,
      nameUser
    };
  }
  componentDidMount() {
    var user = this.auth.currentUser;
    console.log(`USER ${user}`);
    this.DataProveedorTipo();
  }
  DataProveedorTipo = () => {
    if (this.auth.currentUser != null) {
      this.setState({
        uid: this.auth.currentUser.uid,
        userName: this.auth.currentUser.displayName
      });
    }
  };

  activeItemNavLandi = () => {
    var name1 = 0;
    this.props.activeItemNavLan(name1);
  };
  activeItemNavHome = () => {
    var name2 = 1;
    this.props.activeItemNavHome(name2);
  };
  activeItemNavAccou = () => {
    var name3 = 2;
    this.props.activeItemNavAcc(name3);
  };
  activeItemNavNoti = () => {
    var name4 = 3;
    this.props.activeItemNavNoti(name4);
  };
  handleTrasp = () => {
    if (this.state.actnavcolor) {
      this.setState({
        bg: "bg-trasparent",
        colores: "rgb(4, 146, 160)",
        actnavcolor: false
      });
    } else {
      this.setState({ bg: "bg-dark", colores: "white", actnavcolor: true });
    }
  };

  render() {
    const sourcePh = _.times(1, () => ({
      imagePerfil: faker.image.animals()
    }));

    var { nameUser, uid } = this.state;
    const dataClient = (
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser.providerData.forEach(function(profile) {
            var user = authUser.uid;
          })
        }
      </AuthUserContext.Consumer>
    );

    var user = (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <Link
            style={{ color: "black" }}
            role='button'
            to={`/account/${authUser.uid}/${authUser.displayName}`}
            onClick={() => this.activeItemNavAccou()}>
            Perfil
          </Link>
        )}
      </AuthUserContext.Consumer>
    );

    const trigger = (
      <span style={{ color: `${this.state.colores}` }}>
        <AuthUserContext.Consumer>
          {(authUser) => (
            <h1 style={{ fontSize: 10, color: `${this.state.colores}` }}>
              {authUser.photoURL != null ||
              authUser.photoURL != undefined ||
              authUser.photoURL != "" ? (
                <div>
                  <Image avatar src={authUser.photoURL} />
                  {authUser.displayName}
                </div>
              ) : (
                <div>
                  <Image avatar src={sourcePh.imagePerfil} />
                  {authUser.displayName}
                </div>
              )}
            </h1>
          )}
        </AuthUserContext.Consumer>
      </span>
    );

    const options = [
      { key: "user", text: user, icon: "user circle outline" },
      {
        key: "settings",
        text: (
          <Link
            style={{ color: "black" }}
            role='button'
            to={`/account/settings/${this.state.uid}/${this.state.userName}`}
            onClick={() => this.activeItemNavAccou()}>
            Settings
          </Link>
        ),
        icon: "settings"
      },
      {
        key: "sign-out",
        text: (
          <Link to='/signin'>
            <SignOutButton />
          </Link>
        ),
        icon: "sign-out"
      }
    ];

    /////////////////////////////////////////az////////////////
    const triggerAZ = (
      <span style={{ color: `${this.state.colores}` }}>
        <Icon name='home' style={{ color: `${this.state.colores}` }} />
      </span>
    );

    const optionsAZ = [
      {
        key: "atsurabzaid",
        text: (
          <Link
            style={{ color: "black" }}
            role='button'
            to='/'
            onClick={(e) => this.activeItemNavLandi(e)}>
            atsurabzaid
          </Link>
        ),
        icon: <Image circular src={logo} />
      }
      // { key: "About", text: "About", icon: "users" }
      // { key: "Projects", text: "Projects", icon: "lightbulb outline" },
      // { key: "Contact", text: "Contact", icon: "phone" }
    ];
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    const triggerIot = (
      <span style={{ color: `${this.state.colores}` }}>
        <Icon name='code branch' style={{ color: `${this.state.colores}` }} />
      </span>
    );

    const optionsIot = [
      {
        key: "iotHome",
        text: (
          <Link
            style={{ color: "black" }}
            role='button'
            to='/home'
            onClick={(e) => this.activeItemNavHome(e)}>
            Project Home
          </Link>
        ),
        icon: "area graph"
      },
      {
        key: "Y-kan",
        text: (
          <Link
            style={{ color: "black" }}
            role='button'
            to='/home'
            onClick={(e) => this.activeItemNavHome(e)}>
            Top clientes
          </Link>
        ),
        icon: <Image src={logo2} circular />
      }
    ];
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    const triggerNoti = (
      <span style={{ color: `${this.state.colores}` }}>
        <Icon name='bell' style={{ color: `${this.state.colores}` }} />
      </span>
    );

    const optionsNoti = [
      {
        key: "Noticompras",
        text: (
          <Link
            style={{ color: "black" }}
            role='button'
            to='/'
            onClick={(e) => this.activeItemNavNoti(e)}>
            Notificaciones
          </Link>
        ),
        icon: "payment"
      },
      {
        key: "Y-kan",
        text: (
          <Link
            style={{ color: "black" }}
            role='button'
            to={`/home`}
            onClick={(e) => this.activeItemNavNoti(e)}
          />
        ),
        icon: (
          <Link
            style={{ color: "black" }}
            role='button'
            to='/home'
            onClick={(e) => this.activeItemNavNoti(e)}>
            <div className='Noti_Ykan'>
              <Label
                circular
                circular
                color='red'
                key='red'
                style={{ width: 20 }}>
                1
              </Label>
              <p>Nombre Notificacion</p>
            </div>
          </Link>
        )
      }
    ];
    ////////////////////////////////////////////////////////////////////////////////////////////////

    const { activeItem } = this.props;
    return (
      <nav
        className={`fixed-top ${this.state.bg}`}
        style={{ color: `${this.state.colores}` }}>
        {dataClient}

        <Menu pointing secondary inverted style={{ border: 0 }}>
          <Popup
            content='Puedo cambiar el color del menu :)'
            trigger={
              <a className='navbar-brand' onClick={() => this.handleTrasp()}>
                <Imgperfil />
              </a>
            }
          />

          <Menu.Item style={{ paddingTop: 24 }} active={activeItem === 0}>
            <Dropdown
              trigger={triggerAZ}
              options={optionsAZ}
              pointing='top left'
              icon={null}
              style={{ color: "black" }}
            />
          </Menu.Item>

          <Menu.Item style={{ paddingTop: 24 }} active={activeItem === 1}>
            <Dropdown
              trigger={triggerIot}
              options={optionsIot}
              pointing='top left'
              icon={null}
              style={{ color: "black" }}
            />
          </Menu.Item>

          <Menu.Item style={{ paddingTop: 24 }} active={activeItem === 3}>
            <Dropdown
              trigger={triggerNoti}
              options={optionsNoti}
              pointing='top left'
              icon={null}
              style={{ color: "black" }}
            />
          </Menu.Item>

          <Menu.Item
            position='right'
            style={{ paddingTop: 24 }}
            active={activeItem === 2}>
            <Dropdown
              trigger={trigger}
              options={options}
              pointing='top left'
              icon={null}
              style={{ color: "black" }}
            />
          </Menu.Item>
        </Menu>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    activeItem: state.Nav.activeItem
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    activeItemNavLan(name1) {
      dispatch(activeItemNavLan(name1));
    },
    activeItemNavHome(name2) {
      dispatch(activeItemNavHome(name2));
    },
    activeItemNavAcc(name3) {
      dispatch(activeItemNavAcc(name3));
    },
    activeItemNavNoti(name4) {
      dispatch(activeItemNavNoti(name4));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationAuth);
