import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { datosTabla } from "../redux/actions/User";
import moment from "moment";
import "./Tabla.css";
import { emphasize } from "@material-ui/core";

class TablaEdit extends Component {
  componentWillUpdate() {
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  }
  muestraReloj = () => {
    var timeR = moment(new Date()).format("DD/MM/YYYY | HH:mm:ss");
    this.setState({ timeS: timeR });
  };
  handleClik = () => {
    setTimeout(this.muestraReloj, 1000); //1 Hra=3600000 1 Min=60000 1 mili=1000
  };
  render() {
    //const { datostabla } = this.props;
    const state = {
      columns: [
        { title: "Name", field: "title" },
        { title: "E-mail address", field: "email" },
        { title: "uuid", field: "uuid", type: "numeric" },
        { title: "Premium Plan", field: "price", type: "numeric" },
        { title: "Descripcion", field: "description" },
        { title: "friends", field: "friends", type: "numeric" }
      ]
    };
    //const { datostabla } = this.props;
    //var datostabla = this.props.datostabla;
    return (
      <div className='TablaGeneral' onClick={(e) => this.handleClik(e)}>
        <MaterialTable
          title={this.props.timeS}
          columns={state.columns}
          data={this.props.datostabla}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  const datos = this.props.datostabla;
                  datos.push(newData);
                  this.props.datosTabla(datos);
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    const datos = this.props.datostabla;
                    datos[datos.indexOf(oldData)] = newData;
                    //---------------------se extrae
                    var pos = datos.indexOf(oldData);
                    var pisicion = pos + 1;
                    var elementoEliminado = datos.splice(pisicion, 1);
                    //---------------------se agrega modificado------------------------
                    datos.push(newData);
                    this.props.datosTabla(datos);

                    console.log("EDIT", newData);
                    console.log("POSI", pos + 1);
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  const datos = this.props.datostabla;
                  //---------------------se extrae
                  var pos = datos.indexOf(oldData);
                  // var pisicion = pos + 1;
                  var elementoEliminado = datos.splice(pos, 1);
                  this.props.datosTabla(datos);
                  //console.log("DELET", elementoEliminado);
                  //console.log("POSI", pos);
                }, 1000);
              })
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datosTabla(datos) {
      dispatch(datosTabla(datos));
    }
  };
};

export default connect(null, mapDispatchToProps)(TablaEdit);
