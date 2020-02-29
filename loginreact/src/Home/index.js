import React, { Component } from "react";
// import logo from "../imagenes/az-nuevo.png";
import { withAuthorization } from "../Session";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { vnavNo, activeItemNavHome, dashPets } from "../redux/actions/Nav";

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
  Message
} from "semantic-ui-react";

import { AuthUserContext } from "../Session";
import moment from "moment";

import "./Home.css";

import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

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

  handleVerCrops = () => {
    var p = "vercrops";
    this.props.dashPets(p);
    //alert('En desarrollo Crops proximamente!!');
  };
  handleVerInd = () => {
    var p = "verind";
    this.props.dashPets(p);
    alert("En desarrollo Ind proximamente!!");
  };
  handleVerNuevo = () => {
    var p = "vernuevo";
    this.props.dashPets(p);
    alert("En desarrollo proximamente!!");
  };
  render() {
    var fch = moment(new Date()).format("YYYY-MM-DD"); // estas seran la fecha de su ultima lectura
    var hch = moment(new Date()).format("HH:mm"); // estas seran la fecha de su ultima lectura
    var dataf = `Fecha ${fch} ||   ${hch} hrs`; // estas seran la fecha de su ultima lectura

    var { DashPets } = this.props;
    const { activeItem, userName, photoUser, uid, selM } = this.state;

    return (
      <div>
        <div className='fondoHome' onClick={() => this.navi()}>
          <div style={{ color: "rgb(214, 228, 206)", position: "fixed" }}>
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
              <Menu.Item
                style={{ color: "rgb(214, 228, 206)" }}
                name='cuenta iniciada'
                active={activeItem === "Home"}
              />
              <Menu.Item
                style={{ color: "rgb(214, 228, 206)" }}
                name='Salir'
                active={activeItem === "Salir"}
                onClick={(e) => this.handleNoVer(e)}
              />
            </Menu>
          </div>

          <div className='modas'>
            {DashPets == "item" ? (
              <div className='gradient-2'>
                <Card.Group
                  itemsPerRow={4}
                  style={{ width: "100%", padding: 10 }}>
                  <Card onClick={() => this.handleVer()} className='gradient-3'>
                    <Card.Content className='center_' header='AZ-Pets ' />
                    <Card.Content className='center_'>
                      <Card.Description>{userName}</Card.Description>
                    </Card.Content>

                    <Card.Content
                      className='center_'
                      description={
                        <Link
                          style={{ borderRadius: "2em" }}
                          role='button'
                          className='btn btn-outline-primary btn-sm'
                          to={`/home/Pets/${uid}/${userName}`}>
                          Abrir Iot pets{" "}
                        </Link>
                      }
                    />
                    <Card.Content className='center_' extra>
                      <Icon name='time' />
                      {dataf}
                    </Card.Content>
                  </Card>

                  <Card
                    onClick={() => this.handleVerCrops()}
                    className='gradient-3'>
                    <Card.Content className='center_' header='AZ-Crops ' />
                    <AuthUserContext.Consumer>
                      {(authUser) =>
                        authUser != null && (
                          <Card.Content className='center_'>
                            <Card.Description>{userName}</Card.Description>
                          </Card.Content>
                        )
                      }
                    </AuthUserContext.Consumer>
                    <Card.Content
                      className='center_'
                      description={
                        <Link
                          style={{ borderRadius: "2em" }}
                          role='button'
                          className='btn btn-outline-primary btn-sm'
                          to={`/home/Crops/${uid}/${userName}`}>
                          Abrir Iot crops{" "}
                        </Link>
                      }
                    />
                    <Card.Content className='center_' extra>
                      <Icon name='time' />
                      {dataf}
                    </Card.Content>
                  </Card>

                  <Card onClick={() => this.handleVer()} className='gradient-3'>
                    <Card.Content className='center_' header='AZ-Ykan ' />
                    <Card.Content className='center_'>
                      <Card.Description>{userName}</Card.Description>
                    </Card.Content>

                    <Card.Content
                      className='center_'
                      description={
                        <Link
                          style={{ borderRadius: "2em" }}
                          role='button'
                          className='btn btn-outline-primary btn-sm'
                          to={`/home/Ykan/${uid}/${userName}`}>
                          Abrir Iot Ykan{" "}
                        </Link>
                      }
                    />
                    <Card.Content className='center_' extra>
                      <Icon name='time' />
                      {dataf}
                    </Card.Content>
                  </Card>

                  <Card
                    onClick={() => this.handleVerInd()}
                    className='gradient-3'>
                    <Card.Content className='center_' header='AZ-Ind' />
                    <Card.Content className='center_' description={"dash-3"} />
                    <Card.Content className='center_' extra>
                      <Icon name='time' />
                      {dataf}
                    </Card.Content>
                  </Card>
                </Card.Group>
              </div>
            ) : (
              <div className='gradient-2' onClick={() => this.handleNoVer()}>
                <Card className='gradient-3'>
                  <Card.Content header={`Proyectos de ${userName}`} />
                  <Card.Content
                    description={
                      <Icon
                        name='sitemap'
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "auto"
                        }}
                      />
                    }
                  />
                  <Card.Content extra>
                    <Loader active inline='centered' />
                    <Icon name='time' />
                    {dataf}
                  </Card.Content>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

const mapStateToProps = (state) => {
  return {
    nav: state.Nav.nav,
    DashPets: state.Nav.dashPets
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    },
    activeItemNavHome(name2) {
      dispatch(activeItemNavHome(name2));
    },
    dashPets(p) {
      dispatch(dashPets(p));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(withAuthorization(condition)(HomePage));