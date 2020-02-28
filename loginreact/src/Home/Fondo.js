import React, { Component } from "react";
import { Particles } from "@blackbox-vision/react-particles";

class Fondo extends Component {
  render() {
    return (
      <Particles
        id='simple'
        width='100%'
        height='8vh'
        style={{
          backgroundColor: "#1b1c1d" //#00356B //#5de6de//darkturquoise //#1b1c1d
        }}
        params={{
          particles: {
            number: {
              value: 20
            },
            size: {
              value: 2
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}>
        <h1>Home Page AZ</h1>

        <p>cuenta iniciada</p>
      </Particles>
    );
  }
}
export default Fondo;
