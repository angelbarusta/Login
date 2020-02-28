import React,{Component} from 'react';
//import {infoaz} from './info.json';
// import generadores from '../../../imagenes2/diesel_generator_open.jpg';
import generadores from '../../../Gen/components/imagenes2/genera.png';
// import ykan from '../../../imagenes2/ykan1.jpg';
import ykan from '../../../Gen/components/imagenes2/ykan.png';

// import pets from '../../../imagenes2/huellita.jpeg';
import pets from '../../../Gen/components/imagenes2/pets.png';  
import crops from '../../../Gen/components/imagenes2/crops.png';
import fauna from '../../../Gen/components/imagenes2/gps_fauna.png';
import trafic from '../../../Gen/components/imagenes2/trafic.png';
import ykan1 from '../../../Gen/components/imagenes2/Y-KAN.png';

import ykan_circulo from '../../../Gen/components/imagenes2/Y-KAN_circul.png';
import ykan_circulo_sm from '../../../Gen/components/imagenes2/Y-KAN_sala.png';
import ykan_sala_fh from '../../../Gen/components/imagenes2/Y-KAN_smal_circul.png';
import ykan_desk from '../../../Gen/components/imagenes2/Y-KAN_sala2.png';
import ykan_cuadrada from '../../../Gen/components/imagenes2/Y-KAN_cuadra.png';
import ykan_pared from '../../../Gen/components/imagenes2/Y-KAN_pared.png';
import ykan_pared2 from '../../../Gen/components/imagenes2/Y-KAN_pared2.png';
import ykan_sala2 from '../../../Gen/components/imagenes2/Y-KAN_circul_sala.png';


import '../../../App.css';
import {Header,Icon,Image,Segment} from 'semantic-ui-react';
import SelectProducto from './seleccionProducto';


class Product extends Component{
 
    
    render(){
        return(
            <div>
                
            <div style={{display:'flex',justifyContent:'center',padding:10}}>
              <Header as='h2' icon >
               <Icon name='file code outline' />
                Nuestros proyectos
              <Header.Subheader>En atsurabzaid trabajamos constante mente por el bien del medio ambiente. Puedes
                ser parte del cambio y contribuir a una noble causa
              </Header.Subheader>
            </Header>
            </div>

            <div className="card-deck ">  
            
  <div className="card serv">
    <img className="card-img-top" src={crops} alt="Card image cap"/>
    
    <div className="card-footer">
      <small className="text-muted" style={{padding:"10px 10px 10px 10px"}} >Atribuir  <Icon name='paypal'/></small>
      <a href="https://www.paypal.me/atsurabzaid"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Donar $ <Icon name='paypal'/></a>      
    </div>
    
  </div>

  <div className="card serv">
    <img className="card-img-top" src={trafic} alt="Card image cap"/>
   
    <div className="card-footer">
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}>Atribuir <Icon name='paypal'/></small>
      <a href="https://www.paypal.me/atsurabzaid"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Donar $ <Icon name='paypal'/></a>      
    </div>
  </div>

  <div className="card serv">
    <img className="card-img-top" src={fauna} alt="Card image cap"/>
   
    <div className="card-footer">
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}>Atribuir <Icon name='paypal'/></small>
      <a href="https://www.paypal.me/atsurabzaid"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Donar $ <Icon name='paypal'/></a>  
    </div>
  </div>

</div>

<div style={{display:'flex',justifyContent:'center',padding:10}}>
              <Header as='h2' icon >
               <Icon name='file code outline' />
                Nuestros productos 
              <Header.Subheader>En atsurabzaid trabajamos constante mente por el bien del medio ambiente. Puedes
                ser parte del cambio y contribuir a una noble causa
              </Header.Subheader>
            </Header>
            </div>


           
            <div className='az-body'>
    <header className="masthead-3">
          <br/>
          <br/>
          <br/>
        

           <div className='comenta-portaf' >
    <Image circular  src={ykan1} className='circ-img-ykan'/> 
  
    <Segment attached style={{color:'#333',fontSize:20,fontFamily:  'Lato,Helvetica Neue,Arial,Helvetica,sans-serif',textShadow:'none',margin:'auto', borderRadius:10}}>
     <p>Y-KAN es una lampara inteligente con la cual puedes controlar y monitorear mediante voz zonas de tu casa, gracias a su compatibilidad con Google Home puedes hablar directamente con la IA de Y-KAN y automatizar espacios</p>
     <a href=''>Google assitant</a>
    </Segment> 
  </div> 
  
        </header>
    </div>

  

         <div className="card-deck "> 

         <div className="card serv">
        <img className="card-img-top" src={ykan_circulo} alt="Card image cap"/> 
 
    <div className="card-footer" >
      <small className="text-muted"style={{padding:"10px 10px 10px 10px", width:'max-content'}}><SelectProducto/> </small>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCJU3EAWXMJKW"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar $500 <Icon name='paypal'/></a>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Añadir al carrito<Icon name='paypal'/></a>
    </div>
  </div>

  <div className="card serv">
    <img className="card-img-top" src={ykan_cuadrada} alt="Card image cap"/>

    <div className="card-footer">
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}><SelectProducto/> </small>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCJU3EAWXMJKW"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar $500 <Icon name='paypal'/></a>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Añadir al carrito<Icon name='paypal'/></a>
    </div>
  </div>

  <div className="card serv">
    <img className="card-img-top" src={ykan_circulo_sm} alt="Card image cap"/>
    <div className="card-footer">
      
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}><SelectProducto/> </small>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCJU3EAWXMJKW"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar $500 <Icon name='paypal'/></a>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Añadir al carrito<Icon name='paypal'/></a>
    </div>
  </div>

         </div>

         
         <div className="card-deck "> 

         <div className="card serv">
    <img className="card-img-top" src={ykan_desk} alt="Card image cap"/>
    <div className="card-footer">
     
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}><SelectProducto/> </small>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCJU3EAWXMJKW"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar $500 <Icon name='paypal'/></a>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Añadir al carrito<Icon name='paypal'/></a>
    </div>
  </div>

  <div className="card serv">
    <img className="card-img-top" src={ykan_pared2} alt="Card image cap"/>
    <div className="card-footer">
     
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}><SelectProducto/> </small>
       <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCJU3EAWXMJKW"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar $500 <Icon name='paypal'/></a>
       <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Añadir al carrito<Icon name='paypal'/></a>
    </div>
  </div>

  <div className="card serv">
    <img className="card-img-top" src={ykan_sala_fh} alt="Card image cap"/>
    <div className="card-footer">
      
      <small className="text-muted"style={{padding:"10px 10px 10px 10px"}}><SelectProducto/> </small>
       <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCJU3EAWXMJKW"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar $500 <Icon name='paypal'/></a>
       <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Añadir al carrito<Icon name='paypal'/></a>
    </div>
  </div>

         </div>

            </div>
        )
    }
}
export default Product;