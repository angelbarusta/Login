import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import { connect } from "react-redux";
import { vnavNo } from "../redux/actions/Nav";
import { OpenGraf } from "../redux/actions/Campo";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
  handleVer = () => {
    var ver = 0;
    this.props.OpenGraf(ver);
    this.props.vnavNo(false);
  };
  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div style={{ paddingTop: 20 }} onClick={() => this.handleVer()}>
        <form onSubmit={this.onSubmit}>
          <div className='form-row'>
            <div style={{ width: "100%" }}>
              <label for='validationTooltip08'>Password</label>
              <input
                className='form-control'
                id='validationTooltip08'
                name='passwordOne'
                value={passwordOne}
                onChange={this.onChange}
                type='password'
                placeholder='New Password'
              />
            </div>
          </div>

          <div className='form-row'>
            <div style={{ width: "100%" }}>
              <label for='validationTooltip09'>Password</label>
              <input
                className='form-control'
                id='validationTooltip09'
                name='passwordTwo'
                value={passwordTwo}
                onChange={this.onChange}
                type='password'
                placeholder='Confirm New Password'
              />
            </div>
          </div>

          <button
            type='button'
            className='btn btn-success'
            disabled={isInvalid}
            type='submit'>
            Reset My Password
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nav: state.Nav.nav
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    vnavNo(nav) {
      dispatch(vnavNo(nav));
    },
    OpenGraf(f) {
      dispatch(OpenGraf(f));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(withFirebase(PasswordChangeForm));
