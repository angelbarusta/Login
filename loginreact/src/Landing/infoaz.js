import React, { Component } from "react";
import { Link } from "react-router-dom";

//import {infoaz} from './info.json';
// import generadores from '../../../imagenes2/diesel_generator_open.jpg';
import generadores from "../../../Gen/components/imagenes2/genera.png";
// import ykan from '../../../imagenes2/ykan1.jpg';
import ykan from "../../../Gen/components/imagenes2/ykan.png";

// import pets from '../../../imagenes2/huellita.jpeg';
import pets from "../../../Gen/components/imagenes2/pets.png";

import "../../../App.css";

class Infoaztech extends Component {
  render() {
    return (
      <div className='card-deck '>
        <div className='card serv'>
          <img
            className='card-img-top'
            src={generadores}
            alt='Card image cap'
          />
          <div className='card-body'>
            <h5 className='card-title'>AZ Industrial</h5>
            <p className='card-text'>
              AZ gen te permite monitorear sistemas y procesos de la industria,
              prueba gratis 30 dias
            </p>
          </div>
          <div className='card-footer'>
            <small
              className='text-muted'
              style={{ padding: "10px 10px 10px 10px" }}>
              atsurabzaid.com
            </small>
            <Link
              to='/'
              className='btn btn-outline-primary btn-sm'
              role='button'
              aria-pressed='true'>
              Ver Tecnologia Ind
            </Link>
          </div>
        </div>

        <div className='card serv'>
          <img className='card-img-top' src={ykan} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>AZ Ykan</h5>
            <p className='card-text'>
              AZ Ykan te permite monitorear y controlar tu casa remotamente y en
              tiempo real, prueba gratis 30 dias
            </p>
          </div>
          <div className='card-footer'>
            <small
              className='text-muted'
              style={{ padding: "10px 10px 10px 10px" }}>
              atsurabzaid.com
            </small>
            <Link
              to='/ykan'
              className='btn btn-outline-primary btn-sm'
              role='button'
              aria-pressed='true'>
              Ver Tecnologia Y-kan
            </Link>
          </div>
        </div>

        <div className='card serv'>
          <img className='card-img-top' src={pets} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>AZ Pets</h5>
            <p className='card-text'>
              AZ Pets te permite suministrar automaticamente los alimentos a tus
              mascotas, monitorearlos y cuidarlos mediante ciel, prueba gratis
              30 dias
            </p>
          </div>
          <div className='card-footer'>
            <small
              className='text-muted'
              style={{ padding: "10px 10px 10px 10px" }}>
              atsurabzaid.com
            </small>
            <Link
              to='/'
              className='btn btn-outline-primary btn-sm'
              role='button'
              aria-pressed='true'>
              Ver Tecnologia Pets
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Infoaztech;
