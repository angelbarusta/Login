import React, { Component } from "react";
import "./login.css";
import DialogflowLogo from "../../imagenes/dialflow.png";

export default class Login extends Component {
  render() {
    return (
      <div style={{ paddingTop: 200, height: "100vh" }}>
        <div className='ui middle aligned center aligned grid'>
          <div className='column'>
            <h2 className='ui teal image header'>
              <img src={DialogflowLogo} className='image' />
              <div className='content'>Rasshølinnlogging</div>
            </h2>
            <form className='ui large form'>
              <div className='ui stacked segment'>
                <div className='field'>
                  <div className='ui left icon input'>
                    <i className='user icon' />
                    <input
                      type='text'
                      name='email'
                      placeholder='E-postadresse'
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='ui left icon input'>
                    <i className='lock icon' />
                    <input
                      type='password'
                      name='password'
                      placeholder='Passord'
                    />
                  </div>
                </div>
                <div className='ui fluid large teal submit button'>
                  Logg inn
                </div>
              </div>
              <div className='ui error message' />
            </form>
            <div className='ui message'>
              Er du ny her? <a href='#'>Registrer deg</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
