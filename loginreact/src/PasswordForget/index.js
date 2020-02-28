import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../imagenes/az-nuevo.png";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../../rutas/constants-routes";
import { connect } from "react-redux";
import { vnavNo } from "../../../redux/actions/Nav";

import { Button, Icon } from "semantic-ui-react";

const PasswordForgetPage = (props) => (
  <div
    style={{ padding: "0px 20px 0px 20px" }}
    onClick={() => props.vnavNo(false)}>
    <h1>Restablecer contraseña</h1>
    <p>Ingrese la cuenta para recuperar su contraseña</p>
    <PasswordForgetForm />
    <div style={{ padding: "20px 20px 0px 0px" }}>
      <Button
        type='button'
        color='blue'
        animated
        type='submit'
        href={ROUTES.LANDING}>
        <Button.Content visible>
          {" "}
          <Icon name='home' />
          Return Home
        </Button.Content>
        <Button.Content hidden>
          <Icon name='home' />
          <Icon name='sign-in' />
        </Button.Content>
      </Button>
    </div>
    <div className='App container'>
      <img
        src={logo}
        className='App-logo'
        alt='logo'
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-row'>
          <div style={{ width: "100%" }}>
            <label for='validationTooltip07'>Email</label>
            <input
              className='form-control'
              id='validationTooltip07'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
              type='text'
              placeholder='Email Address'
            />
          </div>
        </div>

        <button
          type='button'
          className='btn btn-success'
          disabled={isInvalid}
          type='submit'>
          Reset My Email
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Olvido su contraseña?</Link>
  </p>
);
const mapStateToProps = (state) => {
  return {
    nav: state.Nav.nav
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    }
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(PasswordForgetPage);

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
