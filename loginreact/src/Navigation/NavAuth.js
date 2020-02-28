import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Segment, Icon, Image, Dropdown, Popup } from "semantic-ui-react";
import logo from "../../../Gen/components/Generadores/imagenes/atsurabzaid_circle.png";
import SignOutButton from "../../../Gen/components/SignOut";
import Imgperfil from "../../../Gen/components/Head/img-home/imagen-home";
import {
  activeItemNav,
  activeItemNavAcc,
  activeItemNavHome,
  activeItemNavLan,
  activeItemNavNoti
} from "../../../redux/actions/Nav";
import logo2 from "../../../Gen/components/imagenes2/Y-KAN.png";
import { AuthUserContext } from "../../../Gen/components/Session/index";
import NotiYkanConsumo from "../../../Ykan/components/Notifications/index";

import crops from "../../../Gen/components/imagenes2/crops.png";
import pets from "../../../Gen/components/imagenes2/pets.png";
import gen from "../../../Gen/components/imagenes2/diesel_generator_open.jpg";
import SelectProducto from "../Landing/seleccionProducto";

import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Link } from "react-router-dom";
import "./navigation.css";

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
    var { nameUser, uid } = this.state;
    const dataClient = (
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser.providerData.forEach(function(profile) {
            var user = authUser.uid;
            // console.log("Sign-in provider: " + profile.providerId);
            // console.log("  Provider-specific UID: " + profile.uid);
            // console.log("  Name: " + profile.displayName);
            // console.log("  Email: " + profile.email);
            // console.log("  Photo URL: " + profile.photoURL);
            // console.log("  UID: " + user);
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
              <Image avatar src={authUser.photoURL} /> {authUser.displayName}
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
        key: "shop",
        text: (
          <Link
            to='https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=atsurabzaid%40gmail%2ecom&display=1'
            style={{ color: "black" }}>
            Mi carrito
          </Link>
        ),
        icon: "shop"
      },
      { key: "sign-out", text: <SignOutButton />, icon: "sign-out" }
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
        icon: <Image src={logo} />
      },
      { key: "About", text: "About", icon: "users" },
      { key: "Projects", text: "Projects", icon: "lightbulb outline" },
      { key: "Contact", text: "Contact", icon: "phone" }
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
            Iot Project Home
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
            to='/ykan'
            onClick={(e) => this.activeItemNavHome(e)}>
            Y-kan
          </Link>
        ),
        icon: <Image src={logo2} circular />
      },
      {
        key: "Crops",
        text: "Crops",
        icon: <Image src={crops} circular style={{ width: 30, height: 30 }} />
      },
      {
        key: "AZ-Pets",
        text: "AZ-Pets",
        icon: <Image src={pets} circular style={{ width: 30, height: 30 }} />
      },
      {
        key: "Gen",
        text: "Gen",
        icon: <Image src={gen} circular style={{ width: 30, height: 30 }} />
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
            Notificaciones de compras
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
            to={`/home/Ykan/${uid}/${nameUser}`}
            onClick={(e) => this.activeItemNavNoti(e)}
          />
        ),
        icon: (
          <Link
            style={{ color: "black" }}
            role='button'
            to={`/home/Ykan/${uid}/${nameUser}`}
            onClick={(e) => this.activeItemNavNoti(e)}>
            <div className='Noti_Ykan'>
              <Image src={logo2} circular style={{ width: 30 }} />
              <p>Y-kan</p>
              <NotiYkanConsumo />
            </div>
          </Link>
        )
      },
      {
        key: "Crops",
        text: "Crops",
        icon: <Image src={crops} circular style={{ width: 30, height: 30 }} />
      },
      {
        key: "AZ-Pets",
        text: "AZ-Pets",
        icon: <Image src={pets} circular style={{ width: 30, height: 30 }} />
      },
      {
        key: "Gen",
        text: "Gen",
        icon: <Image src={gen} circular style={{ width: 30, height: 30 }} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationAuth);
