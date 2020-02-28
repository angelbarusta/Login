import React,{Component} from 'react';
import { Button, Header, Icon, Image, Modal,Select,Item,List,Form,Message,Popup,Grid } from 'semantic-ui-react';
import _ from 'lodash';
import '../../../App.css';

import firebase from'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { AuthUserContext } from '../../../Gen/components/Session';// secion de base de datos de gen

import {
    Pared_1,Pared_2,Sala_1,Sala_2,Desk,Cuadrada,Circular,Circular_sm,
    Lamparas,desSe,Temperatura,Iluminacion,GasLP,Presencia,Humedad,Humo,Sonido,CO2,Oxigeno,Lluvia,PlanesYkan} from './info.json';

import ykan_circulo from '../../../Gen/components/imagenes2/Y-KAN_circul.png';
import ykan_circulo_sm from '../../../Gen/components/imagenes2/Y-KAN_sala.png';
import ykan_sala_fh from '../../../Gen/components/imagenes2/Y-KAN_smal_circul.png';
import ykan_desk from '../../../Gen/components/imagenes2/Y-KAN_sala2.png';
import ykan_cuadrada from '../../../Gen/components/imagenes2/Y-KAN_cuadra.png';
import ykan_pared from '../../../Gen/components/imagenes2/Y-KAN_pared.png';
import ykan_pared2 from '../../../Gen/components/imagenes2/Y-KAN_pared2.png';
import ykan_sala2 from '../../../Gen/components/imagenes2/Y-KAN_circul_sala.png';
import ykan_logo from '../../../Gen/components/imagenes2/Y-KAN_cut.png';
import SignIn from '../../../Gen/components/SignIn';



const countryOptions = [
  'Temperatura',
   'Humedad' ,
    'Precencia' ,
    'Iluminacion' ,
    'GasLP' ,
     'Humo' ,
     'CO2' ,
    'Oxigeno' ,
     'Lluvia' ,
     'Sonido' ,
  ]
  const lampOpt = [
    'Circular',
     'Circular pequeña' ,
      'Cuadrada' ,
      'Sala basica' ,
      'Sala sofisticada' ,
       'De escritorio' ,
       'De pared exteriores' ,
      'De pared interiores'  
    ]
    

class SelectProducto extends Component{
    constructor(){
        super();

        this.auth = app.auth();

        this.state={
            senso:[
                   {
                    id:1,
                    nombre:"Temperatura",
                    desc:"Este sensor mide y lee las variantes de calor en un espacio establecido",
                    tipo:"Ext o int",
                    zona:"universal",
                    precio:"$33",
                    imagen:"thermometer half"
                   }
            ],
            lampara:[
                {
                   id:1,
                   nombre:"Circular",
                   desc:"Es una lampara de tamaño promedio para residencias",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_circulo
                }
            ],
          
            numSenso:1,
            plan:'$316.99',
            descripPlan:'3 sensores gratis',
            namHeadsen:'Temperatura',
            descSC:['Este sensor mide y lee las variantes de calor en un espacio establecido'],
            valueAcep:'0',
            error:{
              content: 'You must agree to the terms and conditions',
              pointing: 'left',
            },
                xnombre:'',
                xapellido:'',
                xdireccion:'',
                xtelefono:'',
                xCP:'',
                xcondiciones:'si',
                validacionCompra:'',
                usuarioCli:<AuthUserContext.Consumer>
                {
                  authUser=>(
                    authUser!=null &&
                    <h1 style={{fontSize:10,color:`${this.state.colores}`}}>
                      <Image avatar src={authUser.photoURL} /> {authUser.displayName}
                    </h1>
                  )
                }
             </AuthUserContext.Consumer> 
            
        }
    }
  

    handleAddSensor=(countryOptions)=>{
        const a = countryOptions.target;
      const x = (a.value);
      console.log("PASO 1 SELECT ",x)
     
      //desSe
      var itemSen=this.state.numSenso+1;
    var sensores=this.state.senso;

    
    console.log("PASO 2 SELECT ",itemSen);
    
    if (itemSen>3) {
       var planMes='$524.99'; 
       var descPlan='Atsurabzaid te regala los primeros 5 sensores de tu lampara y en la compra de tu segunda lampara adquiere 5 sensores por $165 mas al mes';
    }
    if(itemSen<=3){
        var planMes='$316.99';
        var descPlan='Atsurabzaid te regala los primeros 3 sensores de tu lampara y en la compra de tu segunda lampara adquiere 3 sensores por $100 mas al mes';
    }
    
     

    
 
if (itemSen<=5) {
    if (x==='Temperatura') {
        sensores.push(Temperatura[0]);       
    }
    else if (x==='Iluminacion') {
        sensores.push(Iluminacion[0]);
    }
    else if (x==='Presencia') {
        sensores.push(Presencia[0]);
    }
    else if (x==='Lluvia') {
        sensores.push(Lluvia[0]);
    }
    else if (x==='Sonido') {
        sensores.push(Sonido[0]);
    }
    else if (x==='GasLP') {
        sensores.push(GasLP[0]);
    }
    else if (x==='Humedad') {
        sensores.push(Humedad[0]);
    }
    else if (x==='Humo') {
        sensores.push(Humo[0]);
    }
    else if (x==='CO2') {
        sensores.push(CO2[0]);
    }
    else if (x==='Oxigeno') {
        sensores.push(Oxigeno[0]);
    }

    this.setState({
        senso:sensores,
        numSenso:itemSen,
        namHeadsen:x,
        plan:planMes,
        descripPlan:descPlan,
      });
}
      
       console.log('SENSOE',this.state.senso);
     
    }

    handleAddLamp=(lampOpt)=>{

        const a = lampOpt.target;
        const x = (a.value);

        
       if (x==='Circular') {
        this.setState({
            lampara:[
                {
                   id:1,
                   nombre:x,
                   desc:"Es una lampara de tamaño promedio para residencias",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_circulo
                }
            ]
          });
       }
       else if (x==='Circular_sm') {
        this.setState({
            lampara:[
                {
                   id:2,
                   nombre:x,
                   desc:"Es una lampara de tamaño pequeño para residencias",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_circulo_sm
                }
            ]
          });
       }
       else if (x==='Cuadrada') {
        this.setState({
            lampara:[
                {
                   id:3,
                   nombre:x,
                   desc:"Es una lampara de tamaño promedio de forma cuadrada para residencias",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_cuadrada
                }
            ]
          });
       }
       else if (x==='Pared_2') {
        this.setState({
            lampara:[
                {
                   id:4,
                   nombre:x,
                   desc:"Es una lampara de pared de tamaño promedio para residencias",
                   tipo:"exteriores",
                   zona:"habitaciones,sala,cocina,comedor,patio,cochera",
                   precio:"$500",
                   imagen:ykan_pared2
                }
            ]
          });
       }
       else if (x==='Sala_1') {
        this.setState({
            lampara:[
                {
                   id:5,
                   nombre:x,
                   desc:"Es una lampara elegante de tamaño considerable para salas e interiores",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_sala_fh
                }
            ]
          });
       }
       else if (x==='Sala_2') {
        this.setState({
            lampara:[
                {
                   id:6,
                   nombre:x,
                   desc:"Es una lampara elegante de tamaño considerable para salas e interiores",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_sala2
                }
            ]
          });
       }
       else if (x==='Desk') {
        this.setState({
            lampara:[
                {
                   id:7,
                   nombre:x,
                   desc:"Es una lampara de escritorio tamaño promedio para residencias",
                   tipo:"interiores",
                   zona:"habitaciones,sala,cocina,comedor",
                   precio:"$500",
                   imagen:ykan_desk
                }
            ]
          });
       }
       else if (x==='Pared_1') {
        this.setState({
            lampara:[
                {
                   id:8,
                   nombre:x,
                   desc:"Es una lampara de pared de tamaño promedio para residencias",
                   tipo:"exteriores",
                   zona:"habitaciones,sala,cocina,comedor,patio,cochera",
                   precio:"$500",
                   imagen:ykan_pared
                }
            ]
          });
       }
       console.log('numSenso',this.state.numSenso);
      console.log('SENSOffE',this.state.lampara);
    }

    handleDelete=(i)=>{

        console.log('IIII',i);
        var ListaNueva=this.state.senso;
        var n=1;
        var itemmenosSen=this.state.numSenso-1;
        ListaNueva.splice(i,n);

    if (itemmenosSen>3 && itemmenosSen<=5) {
       var Bloqueo=0;
       var planMes='$500'; 
       var descPlan='Atsurabzaid te regala los primeros 5 sensores de tu lampara y en la compra de tu segunda lampara adquiere 5 sensores por $165 mas al mes' ;
    }
    if(itemmenosSen<=3){
        var Bloqueo=0;
        var planMes='$316.99';
        var descPlan='Atsurabzaid te regala los primeros 3 sensores de tu lampara y en la compra de tu segunda lampara adquiere 3 sensores por $100 mas al mes';
    }
    if (itemmenosSen>5) {
        var Bloqueo=1;
    }
 
    if (Bloqueo===0) {
        this.setState({
            senso:ListaNueva,
            numSenso:itemmenosSen,
            plan:planMes,
            descripPlan:descPlan,
         });
    }
        
        
    }


    handleName=(e)=>{
      const a = e.target;
      const xname = (a.value);
     // console.log('NAME',xname);
      this.setState({xnombre:xname,});
    }
    handleLastName=(e)=>{
      const a = e.target;
      const xlname = (a.value);
      //console.log('LASTNAME',xlname);
      this.setState({xapellido:xlname,});
    }
    handleDireccion=(e)=>{
      const a = e.target;
      const xdirec = (a.value);
      //console.log('DIRECCION',xdirec);
      this.setState({xdireccion:xdirec,});
    }
    handlePhone=(e)=>{
      const a = e.target;
      const xphon = (a.value);
      //console.log('PHONE',xphon);
      this.setState({xtelefono:xphon,});
    }
    handlePostal=(e)=>{
      const a = e.target;
      const xpostal = (a.value);
      this.setState({xCP:xpostal,});
    }

    handleAcepto=(e,{valueAcep})=>{
      this.setState({ valueAcep });

      if (valueAcep==='1') {
        var x='Acepto'
       console.log('ACEPTO',x);
      
      }else{
        var x='No acepto'
       console.log('NO ACEPTO',x);
      }
      
    }

    handleSubmit=()=>{
      const {xnombre,xdireccion,xtelefono,valueAcep,xapellido,xCP}=this.state;
 
        if (valueAcep==='1'&& xnombre!==''&&xapellido!=='' && xdireccion!=='' && xtelefono!==''&&xCP!=='') {

          this.setState({validacionCompra:'si',});

          var clienteName=xnombre+' '+xapellido;
          //  console.log('ACEPTASTE',valueAcep);
         // vamos a enviar los datos a fb y crear el botos de paypal de servicio
         const database= firebase.database()
         var user = this.auth.currentUser.uid;
   
         const fb_dataEnvioCliente = database.ref("CASAS").child(user).child("YKAN").child("Informacion").child("DatosEnvio");
         fb_dataEnvioCliente.set({clienteName,xdireccion,xCP,xtelefono});
         //console.log('ACEPTASTE',{clienteName,xdireccion,xtelefono});
         
        }
        else{

          console.log('ACEPTA!!');
          this.setState({validacionCompra:'no',});
        }
      

      
    }


    render(){
     //aceptacion de terminos y condiciones
       const {valueAcep}=this.state;
       if (valueAcep==='0') {
         var err=this.state.error;
       }else{
         var err;
       }


        var todoslosSensores=this.state.senso;
       
        var lampara=this.state.lampara;

        
        // var descLam=this.state.

        const sensodisp=desSe.map((s, i)=>{
            return(
              <option>{s.nombre} </option>
            )
          });
          const lampdisp=Lamparas.map((s, i)=>{
            return(
              <option>{s.nombre} </option>
            )
          });

          const nomLam=lampara.map((s,i)=>{
              return s.nombre;
          });
          const descLam=lampara.map((s,i)=>{
            return s.desc;
          });
          const imaLampa=lampara.map((s,i)=>{
            return s.imagen;
          });
          const zonaLampa=lampara.map((s,i)=>{
            return s.zona;
          });
          const precioLampa=lampara.map((s,i)=>{
            return s.precio;
          });


          var listSen=todoslosSensores.map((s,i)=>{
            return s.nombre;
          });
          var listPrecioSen=todoslosSensores.map((s,i)=>{
            return s.precio;
          });
   
          const descSens=todoslosSensores.map((s, i )=> {
         
            return(
                <Item.Group >

                <Item>
                  <Item.Content>
                    <Item.Header as='a'><div style={{paddingRight:10}}> <Icon circular size='small' name={s.imagen} /></div></Item.Header>
                     <Header as='h1'  content={s.nombre}  style={{paddingRight:10}}/>
                     <Icon name='trash' circular onClick={()=>this.handleDelete(i)} style={{cursor:'pointer'}}/>                    
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                       {s.desc}
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
     
                        <div> Precio {s.precio}</div>
                                       
                  </Item.Content>
                </Item>
    
              </Item.Group>
            )
    });


         
        return(
            
              
                    <Modal className="modalEditYkan " trigger={<button className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true" style={{padding:3}}>Comprar Plan</button>}>
                    
             
                      <Modal.Header className='flexin' style={{height:50}}>
                         {this.state.usuarioCli}
                         <div>{nomLam}</div>
                      </Modal.Header> 
                      
 

                    <Modal.Content image scrolling className='scrollModal'>
                      <section>
                  
                      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                         <div className="carousel-inner">
                            <div className="carousel-item active">
                            <Image size='medium' src={imaLampa} wrapped  style={{padding:10}}/>
                            </div>
                         </div>

                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true" />
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true" />
                              <span className="sr-only">Next</span>
                            </a>
                        </div>


                        <div>
                          <p>Selecciona tu lampara</p>
                              <section className='flexin'>
                                <div  className='listShop'> <List ordered vertical items={nomLam} /> </div>
                                <div  className='listShop'> <List divided vertical items={precioLampa} /> </div>
                              </section>
                             <br/>
                            <select id="Lampara"  className="form-control" onChange={(e)=>this.handleAddLamp(e)}>
                                {lampdisp}
                            </select>
                         
                       

                         <br/>
                         <p>Selecciona tus sensores</p>
                         <br/>
                              <section className='flexin'>
                                <div  className='listShop'> <List ordered vertical items={listSen} /> </div>
                                <div  className='listShop'> <List divided vertical items={listPrecioSen} style={{color:'#b6b6b6'}}/> </div>
                              </section>
                              <br/>
                              <section className='flexin'>
                                             <div className='listShop'>
                                               <List bulleted vertical>
                                                 <List.Item>Plan Mensual</List.Item>                                
                                               </List>
                                             </div>
                                             <div className='listShop'>
                                               <List  vertical>
                                                 <List.Item>{this.state.plan} al mes</List.Item>                                
                                               </List>                            
                                             </div>        
                                                    
                              </section>
                         
                        </div>
                         <br/>
                        
                           <div >
                               
                            
                            <select id="Sensores"  className="form-control" onChange={(e)=>this.handleAddSensor(e)}>
                                {sensodisp}
                            </select>
                            </div>

                            <br/>
                            <p>Registra el destino</p>
                            
                               <Form>
                                     <Form.Group unstackable widths={2}>
                                        <Form.Input onChange={(e)=>this.handleName(e)}  required label='Nombre' placeholder='Nombre' />
                                        <Form.Input onChange={(e)=>this.handleLastName(e)}  required label='Apellidos' placeholder='Apellidos' />
                                     </Form.Group>
                                     <Form.Group widths={2}>
                                       <Form.Input onChange={(e)=>this.handleDireccion(e)} required label='Direccion' placeholder='Direccion' />
                                       <Form.Input onChange={(e)=>this.handlePostal(e)} required label='Codigo postal' placeholder='Codigo postal' />
                                        <Form.Input onChange={(e)=>this.handlePhone(e)} required label='Telefono' placeholder='Telefono' />
                                     </Form.Group>
                                     <Form.Checkbox onChange={(this.handleAcepto)}                                      
                                      error={err}                                                       
                                      valueAcep='1'
                                      checked={valueAcep === '1'}
                                       required label='I agree to the Terms and Conditions'/>

                                       {
                                         this.state.validacionCompra=='si' ?
                                         <Message
                                         size='mini'
                                         icon='paypal'
                                         success
                                         header='Perfecto tu orden a sido registrada, ahora a pagar!!!'
                                         content='You may now log-in with the username you have chosen'
                                       /> :
                                           this.state.validacionCompra=='no' ?
                                         <Message
                                         size='mini'
                                         icon='paypal'
                                         negative
                                         header='Registre sus datos correctamente'
                                         content='You may now log-in with the username you have chosen'
                                       />
                                       :
                                       <br/>
                                       }
                                      

                                     
                                   </Form>
                                   <br/>

                      </section>
                    

                      <Modal.Description className='itemGrup'>
                         <h2 >Lampara</h2>
                         <section >
                          <Header as='h1' image={imaLampa} content={nomLam} />                       
                         </section>
                         <Item.Group >
                           <Item>
                           <Item.Content>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description >
                               {descLam}
                            </Item.Description>
                            <Item.Extra>Additional Details</Item.Extra>
                            Zonas de uso: {zonaLampa}
                            <Item.Extra>Ficha tecnica</Item.Extra>
                            Medidas: 165mm2
                           </Item.Content>
                            </Item>
                          </Item.Group>

                        <br/>
                        <h2 >Sensores</h2>
                        {descSens}
                        <br/>

                        <h2>Plan</h2>
                           <div>
                             <p>  Plan de {this.state.plan}</p>
                            
                             <Item.Group >
                           <Item>
                           <Item.Content>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description >
                              <p> {this.state.descripPlan} </p>
                            </Item.Description>
                            <Item.Extra>Additional Details</Item.Extra>
                              Y-KAN vigila y controla tu casa por voz estes donde estes, elige los sensores de tu preferencia
                           </Item.Content>
                            </Item>
                          </Item.Group>
                           </div>
                        <br/>
                     </Modal.Description>
                    </Modal.Content>
                        <br/>
  
                    <Modal.Actions>
                         <div style={{display:'flex',justifyContent:'space-around'}}>
                             <p className='parraGooAss'>Controlled by Google assistant</p>
                           <div className="iconeAssis">
                             <div className="barAssis" style={{backgroundColor: '#3498db', marginLeft: '-60px'}} />
                             <div className="barAssis" style={{backgroundColor: '#e74c3c', marginLeft: '-20px'}} />
                             <div className="barAssis" style={{backgroundColor: '#f1c40f', marginLeft: '20px'}} />
                             <div className="barAssis" style={{backgroundColor: '#27ae60', marginLeft: '60px'}} />
                           </div>
                         </div>
                   
                             <AuthUserContext.Consumer>
                                          {authUser =>
                                            // authUser ?  <Button onClick={(e)=>this.handleSubmit(e)} type='submit'>Submit</Button>
                                            authUser ? 
                                               <div style={{display:'flex'}}>
                                                 {/* <button onClick={(e)=>this.handleSubmit(e)} className="btn btn-outline-primary btn-sm" role="button" aria-pressed="false">Comprar plan {this.state.plan}<Icon name='paypal'/></button> */}
                                                 {
                                                   this.state.plan==='$316.99'?
                                                   <Popup  content={`Contrata el plan ${this.state.plan} al mes` } trigger={ <button style={{fontSize: '0.675rem',}} className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar<Icon name='paypal'/></button>} flowing hoverable>
                                                     <Grid centered divided columns={3}>
                                                           <Grid.Column textAlign='center'>
                                                             <Header as='h4'>Suscribirse a plan basico {this.state.plan} </Header>
                                                             <p>                                                               
                                                               <b>Soporta:</b> 1 Lampara de 3 sensores, a solo {this.state.plan}/mes
                                                             </p>
                                                             
                                                             <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P3KMLVWQCS6UQ"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Subscribirse<Icon name='paypal'/></a>
                                                           </Grid.Column>
                                                           <Grid.Column textAlign='center'>
                                                             <Header as='h4'>Comprar solo la Lampara, si ya cuentas con el plan</Header>                                                        
                                                             <p>
                                                               <b>1</b> Lampara, con 3 sensores de tu preferencia gratis, $499 c/u
                                                             </p>
                                                             <Popup content={`Para usarla contrata el plan de ${this.state.plan} al mes y controla tu casa mediante voz con google assistant` } trigger={ <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar<Icon name='paypal'/></a>} flowing hoverable/>
                                                           </Grid.Column>
                                                                                                   
                                                         </Grid>
                                                   </Popup>                                
                                                   :
                                                   <Popup content={`Contrata el plan ${this.state.plan} al mes` } trigger={ <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6TCYED9Y8GLDU"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Subscribirse<Icon name='paypal'/></a>} flowing hoverable>
                                                     <Grid centered divided columns={3}>
                                                           <Grid.Column textAlign='center'>
                                                             <Header as='h4'>Suscribirse a plan IotHome {this.state.plan} </Header>
                                                             <p>
                                                               <b>soporta:</b> 1 Lampara de 5 sensores, a solo {this.state.plan}/mes
                                                             </p>
                                                             
                                                             <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P3KMLVWQCS6UQ"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Subscribirse<Icon name='paypal'/></a>
                                                           </Grid.Column>
                                                           <Grid.Column textAlign='center'>
                                                             <Header as='h4'>Comprar solo la Lampara,si ya cuentas con el plan</Header>                                                            
                                                             <p>
                                                               <b>1</b> Lampara, con 5 sensores de tu preferencia gratis, $499 c/u                                                               
                                                             </p>
                                                             <Popup content={`Para usarla contrata el plan de ${this.state.plan} al mes y controla tu casa mediante voz con google assistant` } trigger={ <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5Z5CFN6NUC43N"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Comprar<Icon name='paypal'/></a>} flowing hoverable/>
                                                           </Grid.Column>
                                                                                                   
                                                         </Grid>
                                                   </Popup>
                                                  
                                                 }
                                                
                                                {/* <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=NDH4DXE3XTAEN"  className="btn btn-outline-danger btn-sm" role="button" aria-pressed="true">Cancelar subscripcion<Icon name='paypal'/></a> */}
                                               </div>
                                            : 
                                            <Popup content='Inicie secion para poder comprar' trigger={<a href="/signin"  className="btn btn-outline-primary btn-sm" role="button" aria-pressed="true">Iniciar sesion<Icon name='sync'/></a>} /> 
                                            
                                          }
                                        </AuthUserContext.Consumer>

                    </Modal.Actions>

                    


                  </Modal>
              
            
        )
    }
}

export default SelectProducto;
