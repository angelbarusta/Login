import React,{Component} from 'react';
import Carru from '../../../Gen/components/carruscel-img';
import Infoaztech from './infoaz.js';
import Appint from '../../../App';
import {vnavNo, activeItemNavLan} from '../../../redux/actions/Nav'
import { connect } from 'react-redux';
import Fondo from '../../../Gen/components/Home/Fondo';
import panal from '../../../Gen/components/Generadores/imagenes/fondo_az_vgs.jpg';
import Footer from '../Footer';
import SignIn, { SignInForm } from '../../../Gen/components/SignIn';
import fondsing from '../../../Gen/components/Generadores/imagenes/azul.jpg'; //menu_background
import imasigin from '../../../Gen/components/Generadores/imagenes/landing-in.png'; //menu_background
import { AuthUserContext } from '../../../Gen/components/Session';// secion de base de datos de gen
import post from '../../../Gen/components/Generadores/imagenes/monitoreo_post.png';
import Az from './az';
//import mundos from '../../../Gen/components/imagenes2/fond8.gif';
import {Header,Icon} from 'semantic-ui-react';


class Landing extends Component{
  // vnavNo(){
  //   var nav = false;
  //   vnavNo(nav)
  // } 
  componentDidMount(){
    var name1=0;
       this.props.activeItemNavLan(name1);  
  }
  render(){
    return(
     <div onClick={()=>this.props.vnavNo(false)}>
        {/* <Fondo style={{height:30,maxWidth:'100%'}}/>  */}
        <Az/>
      <div style={{padding: "0px 20px 0px 20px", width:'100%', backgroundImage: "url(" +  panal + ")" }}  >      
      
      <Appint/>  
      
       <br/>
       <br/>
       <div>
        <Header as='h2' icon  style={{ display: 'block',justifyContent: 'inherit',color: 'rgb(4, 146, 160)'}} >
           <Icon name='microchip'  />
          Soluciones
    <Header.Subheader>Descubre la gama de aplicación de tu interes.</Header.Subheader>
         </Header>
        </div>
       

       <div>
         <Infoaztech/>
       </div>
        <Carru />
       
      </div>
      <Footer style={{maxHeight:50,maxWidth:'100%'}}/>
     </div>
    )
  };
};
  
const mapStateToProps=(state)=>{
  return{
    nav:state.Nav.nav,
    activeItem:state.Nav.activeItem,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    vnavNo(nav){
      dispatch(vnavNo(nav))
    },
    activeItemNavLan(name1){
      dispatch(activeItemNavLan(name1))
  },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Landing);