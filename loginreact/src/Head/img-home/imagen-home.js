import React, { Component } from "react";
import user from "../../imagenes/dialflow.png";
import "./imagen-home.scss";
import { vnavSi } from "../../../../redux/actions/Nav";
import { connect } from "react-redux";
import { OpenGraf } from "../../../../redux/actions/Campo";
import { AuthUserContext } from "../../Session";
import { Popup } from "semantic-ui-react";

class Imgperfil extends Component {
  handleVer = () => {
    this.props.vnavSi(true);
    var ver = 0;
    this.props.OpenGraf(ver);
  };
  render() {
    if (this.props.nav === false) {
      var ima = (
        <Popup
          content='Hola soy el menu :D'
          trigger={<img src={user} alt='Skytsunami' />}
        />
      );
    } else {
      var ima = (
        <AuthUserContext.Consumer>
          {(authUser) =>
            authUser != null && <img src={authUser.photoURL} alt='Skytsunami' />
          }
        </AuthUserContext.Consumer>
      );
    }
    return (
      <div className='container-per'>
        <div
          className='avatar-per'
          style={{ cursor: "pointer" }}
          onClick={() => this.handleVer()}>
          <a>{ima}</a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nav: state.Nav.nav
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    vnavSi(nav) {
      dispatch(vnavSi(nav));
    },
    OpenGraf(f) {
      dispatch(OpenGraf(f));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Imgperfil);
