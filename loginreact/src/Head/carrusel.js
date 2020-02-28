import React from 'react';
import az1 from '../../../imagenes2/ojo_az.jpeg';
import az2 from '../../../imagenes2/az_white_pub.jpeg';
import az3 from '../../../imagenes2/az_purple_pub.jpeg';
import az4 from '../../../imagenes2/az_4.jpeg';

const Portada =()=>(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" /> 
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner container"> 
          <div className="carousel-item active" style={{width:400,height:400}} >
            <img className="d-block w-100 container" src={az1} alt="First slide" style={{padding:10,borderRadius:20,width:"100%",height:"100%"}} />
          </div>
          <div className="carousel-item" style={{width:400,height:400}}> 
            <img className="d-block w-100 container" src={az2} alt="Second slide"style={{padding:10,borderRadius:20,width:"100%",height:"100%"}} />
          </div>
          <div className="carousel-item" style={{width:400,height:400}}>
            <img className="d-block w-100 container" src={az3} alt="Third slide" style={{padding:10,borderRadius:20 ,width:"100%",height:"100%",alignContent:"center"}} />
          </div>
          <div className="carousel-item" style={{width:"100%",height:"100%"}}>
            <img className="d-block w-100 container" src={az4} alt="Third slide"style={{padding:10,borderRadius:20,width:"100%",height:"100%"}} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
)
export default Portada;
