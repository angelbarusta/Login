import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../../Session";
import {
  Menu,
  Segment,
  Icon,
  Image,
  Dropdown,
  Grid,
  Card,
  Popup
} from "semantic-ui-react";
import "./uidperfil.css";
import { vnavNo } from "../../redux/actions/Nav";

import SignOutButton from "../../SignOut";
import moment from "moment";
import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

class PerfilCliente extends Component {
  constructor() {
    super();
    this.auth = app.auth();
    this.state = {
      uid: "",
      userName: "",
      accProvee: "",
      timeS: moment(new Date()).format("HH:mm:ss")
    };
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  }
  componentDidMount() {
    var user = this.auth.currentUser;

    this.DataProveedorTipo();
  }
  componentWillUpdate() {
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  }
  muestraReloj = () => {
    var timeR = moment(new Date()).format("DD/MM/YYYY | HH:mm:ss");
    this.setState({ timeS: timeR });
  };
  DataProveedorTipo = () => {
    var cambiContras;
    var timeSesion = moment(new Date()).format("DD/MM/YYYY | HH:mm:ss");

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
        accProvee: cambiContras,
        timeS: timeSesion
      });
    }
  };
  navi = () => {
    this.props.vnavNo(false); //
  };

  render() {
    var { userName, uid, accProvee, timeS } = this.state;

    const dataPerfil = (
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser != null && (
            <div className='carta-datos-uid'>
              <Card fluid color='green'>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    circular
                    src={authUser.photoURL}
                    style={{ width: 40, height: 40 }}
                  />
                </div>
                <div className='card-body' style={{ background: "#f7f7f7" }}>
                  <h5 className='card-title'>
                    {" "}
                    Nombre: {authUser.displayName}
                  </h5>
                  <p className='card-text'>Email: {authUser.email}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                    <h6 className='card-text'>Cuenta: {accProvee} </h6>{" "}
                    <Icon name={accProvee} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                    <p>Tiempo: {timeS} </p>
                    <Icon name='time' />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                    <p># Proyectos: {1}</p> <Icon name='server' />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                    <p># Llamadas: {1} </p>
                    <Icon name='code branch' />
                  </div>
                </div>

                <div className='card-footer'>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                    <Popup
                      content='Regresar a landing principal'
                      trigger={
                        <Link to='/'>
                          <Icon circular name='home' />
                        </Link>
                      }
                    />
                    <Popup
                      content='Configuraciones de perfil'
                      trigger={
                        <Link to={`/account/settings/${uid}/${userName}`}>
                          <Icon circular name='settings' />
                        </Link>
                      }
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
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
                </div>
              </Card>
            </div>
          )
        }
      </AuthUserContext.Consumer>
    );

    return (
      <div onClick={() => this.navi()} className='fondoHome-uid'>
        <div className='modas-uid'>
          <AuthUserContext.Consumer>
            {(authUser) =>
              authUser != null && (
                <div onClick={() => this.navi()} style={{ width: "75%" }}>
                  <div>
                    <header>
                      <div className='titulo-uid'>
                        <h1>
                          <Image src={authUser.photoURL} circular />{" "}
                        </h1>
                      </div>
                      <div className='titulo-uid'>
                        <h4>{authUser.displayName}</h4>
                      </div>

                      <br />
                      <br />
                      <br />
                    </header>
                  </div>

                  <br />
                  <br />
                  <br />

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {dataPerfil}
                  </div>
                </div>
              )
            }
          </AuthUserContext.Consumer>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    }
  };
};

export default connect(null, mapDispatchToProps)(PerfilCliente);
