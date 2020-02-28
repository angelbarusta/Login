import React,{Component} from 'react';
import {Header,Icon,Menu,Image,Segment} from 'semantic-ui-react';

import './az.css';
import '../../../App.css';
import Footer from '../Footer';
import Infoaztech from './infoaz';
import Product from './productos';
import cut from '../../../Gen/components/imagenes2/az_purple_pub.jpeg';
import talendaz from '../../../Gen/components/imagenes2/talend_az.jpeg';
import Psciel from '../Psciel';
import SignIn, { SignInForm } from '../../../Gen/components/SignIn';
import { AuthUserContext } from '../../../Gen/components/Session';

class Az extends Component{
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => {
        this.setState({ 
        activeItem: name 
     })
       
    }

    handleItemClickAbout=(e, { name })=>{
        this.setState({ 
            activeItem: name,
            selM: 'About',
         });
        
    }
    handleItemClickHome=(e,{name})=>{
        this.setState({
            activeItem:name,
            selM:'Home',
        });
    }
    
    handleItemClickProduct=(e,{name})=>{
        this.setState({
            activeItem:name,
            selM:'Projects',
        });
        
    }
    handleItemClickContact=(e,{name})=>{
        this.setState({
            activeItem:name,
            selM: 'Contact',
        });
      
    }
    handleItemClickPsciel=(e,{name})=>{
        this.setState({
            activeItem:name,
            selM: 'Psciel',
        });
      
    }
    
    
    render(){
        var {selM}=this.state;
        const { activeItem } = this.state
        return(
            <div className='az-body' >
     
        <header className="masthead">
          
           {/* <p style={{fontSize:'2em',fontFamily: 'Helvetica,Arial,sans-serif',fontWeight:'100',color:'antiquewhite'}}>Iot az</p>   */}
      
          {/* <br/>
          <br/>
          <br/> */}
          
            {
              <AuthUserContext.Consumer>
                 {
                   authUser=>(
                     authUser==null &&
                    <a href='/signin' className="btn btn-primary btn-lg " 
                    style={{borderRadius: '3.3rem',backgroundColor:'#51c8d4'}}
                   role="button" aria-pressed="false">Inscribete</a>
                   )
                 }
              </AuthUserContext.Consumer>       
           } 
            
          
        </header>
        
           
           <Menu text className="meninf">
             
              <Menu.Item 
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClickHome}
        />

        <Menu.Item 
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClickAbout}
        />
        <Menu.Item 
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClickProduct}
        />
        <Menu.Item 
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClickContact}
        />
        {/* <Menu.Item 
          name='Psciel'
          active={activeItem === 'Psciel'}
          onClick={this.handleItemClickPsciel}
        /> */}
             
            </Menu>
            
                
            
      {
          selM ==='About' ?
        <div className="gradient-landing">

        <section >
       <div>
       <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}} >
          <Icon name='users' circular />
        </Header>
       </div>
          
          <Header as='h1' dividing>
            <div style={{color:'rgb(4, 146, 160)'}}>Nuestra historia</div>
          </Header>
          <p  className="space-maker"> 
          Atsurabzaid surge de la innovación, porque de los errores necen triunfos, así mismo nuestra historia es la innovación la cual enfocamos en el desarrollo de nuestra tecnología, porque para nosotros nuestra historia constantemente es el desarrollo y el futuro.</p> 
        </section>

        <section>
        <div>
       
       <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}}>
          <Icon name='tasks' circular/>
        </Header>
       </div>
         <Header as='h1' dividing>
          <div style={{color:'rgb(4, 146, 160)'}}>Nuestros Objetivos</div>
          </Header>            
          <p className="space-maker" >Obtenga datos específicos del comportamiento de sus equipos,evalúe sistemáticamente el desarrollo de tiempo de vida de los mismos para alargar su eficiencia.controle con nuestras tecnologías y monitoria de manera rápida desde su celular.</p>
        </section>

        <section>
        <div>
       <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}}>
          <Icon name='eye'circular />
        </Header>
       </div>
         <Header as='h1' dividing>
          <div style={{color:'rgb(4, 146, 160)'}}>Nuestra visión</div>
          </Header>              
          <p className="space-maker">Nuestra visión está en el perfeccionamiento la inteligencia artificial y la practicidad en la cruel verdad de la ideología futurista de la innovación,porque el hombre hace,crea y desarrolla para dejar de serlo, nuestra visión esta en cumplir ese objetivo práctico.</p>
        </section>
    
      </div>
       
         :
         selM==='Psciel' ?
         <div>
             <Psciel/>
         </div>
         :
         selM ==='Projects' ?   
         <Product style={{color:'rgb(140, 137, 146)'}}/>
         :

         selM === 'Contact' ?

         <div className="gradient-landing">

        <section style={{padding:20}} >
       <div style={{    display: 'flex',marginTop: -60}}>
       <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}} >
          <Icon name='mail' circular />
        </Header>
       </div>
          
          <Header as='h1' dividing>
            <div style={{color:'rgb(4, 146, 160)'}}>Email</div>
          </Header>
          <p  className="space-maker"> 
          <a className='linkcont' href='mailto:atsurabzaid@gmail.com'>atsurabzaid@gmail.com</a>
          </p> 
        </section>

        <section style={{padding:20}}>
        <div>
        
       <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}}>
          <Icon name='at' circular/>
        </Header>
       </div>

         <Header as='h1' dividing>
          <div style={{color:'rgb(4, 146, 160)'}}>Social</div>
          </Header>            
          <p style={{margin:'auto',cursor:'pointer',color:'rgb(73, 71, 78)'}} className="space-maker">
         <a  className='linkcont' href='https://www.facebook.com/AZ-Tech-802216786638118/?ref=bookmarks'> <Icon name='facebook' circular/>AZ-Tech</a>
          </p>
          <p style={{margin:'auto',cursor:'pointer',color:'rgb(73, 71, 78)'}} className="space-maker">
         <a className='linkcont' href='https://www.instagram.com/atsurabzaid11/?hl=es-la' ><Icon name='instagram' circular/>atsurabzaid11</a> 
          </p>
          <p style={{margin:'auto',cursor:'pointer',color:'rgb(73, 71, 78)'}} className="space-maker" >
         <a  className='linkcont' href='https://twitter.com/atsurabzaid' > <Icon name='twitter' circular/>@atsurabzaid</a>
          </p>
    
        </section>

        <section style={{padding:20}}>
        <div>
       <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}}>
          <Icon name='phone'circular />
        </Header>
       </div>
         <Header as='h1' dividing>
          <div style={{color:'rgb(4, 146, 160)'}}>Telefonos</div>
          </Header>              
          <p  style={{margin:'auto',cursor:'pointer',color:'rgb(73, 71, 78)'}} className="space-maker linkcont">
            33-35-02-32-24
          </p>
          <p  style={{margin:'auto',cursor:'pointer',color:'rgb(73, 71, 78)'}} className="space-maker linkcont">
            33-21-58-63-37
          </p>
          <p  style={{margin:'auto',cursor:'pointer',color:'rgb(73, 71, 78)'}} className="space-maker linkcont">
            33-13-58-28-80
          </p>
        </section>
    
      </div>
         :

        <div>
             <div >
        <Header as='h2' icon  style={{ display: 'block',justifyContent: 'inherit',color: 'rgb(4, 146, 160)'}} >
           <Icon name='code' style={{fontSize:'1em'}} />
          Soluciones
    <Header.Subheader>Soluciones integrales y tecnológicas en sistemas de backup y gestión energética.</Header.Subheader>
         </Header>
        </div>

         <div className="gradient-landing">
         
         <section >
        <div>
        <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}} >
           <Icon name='bolt' circular />
         </Header>
        </div>
           
           <Header as='h1' dividing>
             <div style={{color:'rgb(4, 146, 160)'}}>Iot en la energía</div>
           </Header>
           <p  className="space-maker"> 
           Maximizar la disponibilidad del sistema eléctrico, asegurar una buena calidad en la energía, reducir el consumo general y controlar lo que se paga.</p> 
         </section>
 
         <section>
         <div>
        
        <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}}>
           <Icon name='dashboard' circular/>
         </Header>
        </div>
          <Header as='h1' dividing>
           <div style={{color:'rgb(4, 146, 160)'}}>Monitoreo de espacios</div>
           </Header>            
           <p className="space-maker" >Obtenga datos específicos del comportamiento del espacio,evalúe sistemáticamente el desarrollo en tiempo real y manipule variables remotamente.</p>
         </section>
 
         <section>
         <div>
        <Header as='h1' icon  style={{display:'contents',color:'rgb(4, 146, 160)'}}>
           <Icon name='cogs'circular />
         </Header>
        </div>
          <Header as='h1' dividing>
           <div style={{color:'rgb(4, 146, 160)'}}>Automatización</div>
           </Header>              
           <p className="space-maker">Mecanización de procesos mediante inteligencia artificial y/o asistentes inteligentes</p>
         </section>
     
       </div>
        </div>

         
    }
    <div className='az-body'>
    <header className="masthead-2">
          <h1 >Nuestro portafolio</h1>
          <br/>
          <br/>
          <br/>
        

          <div className='comenta-portaf' >
    <Image circular  src={talendaz} className='circ-img-comen'/>
  
    <Segment attached style={{color:'#333',fontSize:20,fontFamily:  'Lato,Helvetica Neue,Arial,Helvetica,sans-serif',textShadow:'none',margin:'auto', borderRadius:10}}>
     <p>Presentación #TalentLand por parte AZ-Tech,dispensador inteligente de comida para mascotas AZ-PETS mejor proyecto ambiental</p>
     <a href='https://www.facebook.com/centrouniversitariodetonala/photos/pcb.1949992681772257/1949991505105708/?type=3&theater'>Presentación en TalendLand 2019</a>
    </Segment> 
  </div>
  
        </header>
    </div>

      </div>

        )
    };
};
export default Az;