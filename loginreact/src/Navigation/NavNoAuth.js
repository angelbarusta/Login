import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";
import Imgperfil from "../Head/img-home/imagen-home";

import "../App.css";
import { Link } from "react-router-dom";

class NavigationNonAuth extends Component {
  // si el usuario no esta autenticado en az

  render() {
    const { activeItem } = this.props;
    return (
      <nav className='navbar navbar-light navbar fixed-top navbar-light '>
        <div>
          <a className='navbar-brand'>
            <Imgperfil />
          </a>
        </div>
        <nav className='navbar navbar-light'>
          <Link
            style={{ margin: 10 }}
            to='/signup'
            className='btn btn-primary btn-sm buton-in'
            role='button'
            aria-pressed='true'>
            Registrarse
          </Link>
          <Link
            to='/signin'
            className='btn btn-success btn-in btn-sm buton-rn'
            role='button'
            aria-pressed='true'>
            Inicia seción
          </Link>
        </nav>
      </nav>
    );
  }
}
export default connect()(NavigationNonAuth);
