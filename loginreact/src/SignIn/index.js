import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";

import { Button, Icon, Card, Popup } from "semantic-ui-react";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../rutas/constants-routes.js";
import { connect } from "react-redux";
import { vnavNo } from "../redux/actions/Nav";
// import {Googlelogo} from '../../../imagenes2/google-icon-logo.jpg';
import { Divider, Form, Grid, Segment } from "semantic-ui-react";

import "./Signin.css";

import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const SignInPage = (props) => (
  <div onClick={() => props.vnavNo(false)} className='SiginStyl'>
    {/* <Fondo style={{maxHeight:50,maxWidth:'100%'}}/> */}

    <div className='Formu '>
      <Card stackable style={{ padding: 20 }}>
        <div>
          <div>
            <h2 className='Inises' style={{ paddingTop: 20 }}>
              Chatbot
            </h2>
            <h1 className='Inises'>Inicia sesión</h1>
            <Icon className='Inises' circular name='user' />
          </div>
          <SignInForm />
          <SignInGoogle />
          <SignInFacebook />
          <PasswordForgetLink />
          <SignUpLink />

          <div style={{ padding: "20px 20px 0px 0px" }}>
            <Popup
              content='Regresar a landing principal'
              trigger={
                <Link to='/'>
                  <Icon circular name='home' />
                </Link>
              }
            />
          </div>
        </div>
      </Card>
    </div>

    {/* <Fondo style={{maxHeight:50,maxWidth:'100%'}}/> */}
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  ok: false
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      // .doSignInWithGoogle()
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form className='needs-validation' novalidate onSubmit={this.onSubmit}>
        <div className='form-row'>
          <div style={{ width: "100%", padding: 10 }}>
            <label for='validationTooltip01'>Email</label>
            <input
              className='form-control'
              id='validationTooltip01'
              name='email'
              value={email}
              required
              onChange={this.onChange}
              type='text'
              placeholder='Email Address'
            />
            <div className='valid-tooltip'>Looks good!</div>
          </div>
        </div>

        <div className='form-row'>
          <div style={{ width: "100%", padding: 10 }}>
            <label for='validationTooltip02'>Password</label>
            <input
              className='form-control'
              id='validationTooltip02'
              name='password'
              value={password}
              required
              onChange={this.onChange}
              type='password'
              placeholder='Password'
            />
            <div className='valid-tooltip'>Looks good!</div>
          </div>
        </div>

        <Button
          type='button'
          color='green'
          animated
          type='submit'
          disabled={isInvalid}
          style={{ padding: 10, width: "100%" }}>
          <Button.Content visible>
            {" "}
            <Icon name='mail' />
            Sign with Email
          </Button.Content>
          <Button.Content hidden>
            <Icon name='mail' />
            <Icon name='sign-in' />
          </Button.Content>
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
        console.error("ERROR DE SIGIN", error);
      })
      .then((socialAuthUser) => {
        // Crea un usuario en tu base de datos en tiempo real de Firebase también
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {}
        });
      })
      .catch((error) => {
        this.setState({ error });
        console.error("ERROR DE UID", error);
      });

    event.preventDefault();
  };

  render() {
    console.log("PROPS", this.props.firebase);
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit} style={{ padding: "10px 0px 10px 0px" }}>
        <Button
          basic
          color='red'
          animated
          type='submit'
          style={{ padding: 10, width: "100%" }}>
          <Button.Content visible src='../../../imagenes2/go.png'>
            {" "}
            <Icon name='google' />
            Sign with Google
          </Button.Content>
          <Button.Content hidden>
            <Icon name='google' />
            <Icon name='sign-in' />
          </Button.Content>
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithFacebook()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {}
        });
      })
      .then((socialAuthUser) => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
        this.props.history.push(ROUTES.LANDING);
      });

    event.preventDefault();
  };

  render() {
    console.log("PROPS", this.props.firebase);
    const { error } = this.state;

    return (
      <form
        onSubmit={this.onSubmit}
        style={{ padding: "10px 0px 10px 0px", width: "100%" }}>
        <Button
          basic
          color='blue'
          animated
          type='submit'
          style={{ padding: 10, width: "100%" }}>
          <Button.Content visible src='../../../imagenes2/go.png'>
            {" "}
            <Icon name='facebook' />
            Sign with Facebook
          </Button.Content>
          <Button.Content hidden>
            <Icon name='facebook' />
            <Icon name='sign-in' />
          </Button.Content>
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

const SignInFacebook = compose(withRouter, withFirebase)(SignInFacebookBase);

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
export default connect(mapStateToProps, mapDipatchToProps)(SignInPage);

export { SignInForm, SignInGoogle, SignInFacebook };
