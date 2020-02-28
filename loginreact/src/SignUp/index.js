import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../rutas/constants-routes.js";
import Appint from "../App";
import { connect } from "react-redux";
import { vnavNo } from "../redux/actions/Nav";

import { Button, Icon } from "semantic-ui-react";

const SignUpPage = (props) => (
  <div
    style={{ padding: "20px 20px 20px 20px" }}
    onClick={() => props.vnavNo(false)}>
    <h1>Registrate</h1>
    <SignUpForm />

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

    <Appint />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch((error) => {
            this.setState({ error });
          });
        console.log("ERROR UID EMAIL");
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div>
        <form className='needs-validation' novalidate onSubmit={this.onSubmit}>
          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <label for='validationTooltip03'>User name</label>
              <input
                className='form-control'
                id='validationTooltip03'
                name='username'
                value={username}
                onChange={this.onChange}
                type='text'
                placeholder='Full Name'
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <label for='validationTooltip04'>Email</label>
              <input
                className='form-control'
                id='validationTooltip04'
                name='email'
                value={email}
                onChange={this.onChange}
                type='text'
                placeholder='Email Address'
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <label for='validationTooltip05'>Password</label>
              <input
                className='form-control'
                id='validationTooltip05'
                name='passwordOne'
                value={passwordOne}
                onChange={this.onChange}
                type='password'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <label for='validationTooltip06'>Password</label>
              <input
                className='form-control'
                id='validationTooltip06'
                name='passwordTwo'
                value={passwordTwo}
                onChange={this.onChange}
                type='password'
                placeholder='Confirm Password'
              />
            </div>
          </div>

          <button
            type='button'
            className='btn btn-success'
            disabled={isInvalid}
            type='submit'>
            Sign up
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    ¿Aún no tienes cuenta en atsurabzaid ?{" "}
    <Link to={ROUTES.SIGN_UP}> Registrate </Link>o Inicia con Google
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));

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
export default connect(mapStateToProps, mapDipatchToProps)(SignUpPage);
export { SignUpForm, SignUpLink };
