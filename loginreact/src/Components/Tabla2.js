import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { datosTabla } from "../redux/actions/User";
import moment from "moment";
import "./Tabla.css";

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
      timeS: moment(new Date()).format("DD/MM/YYYY | HH:mm:ss"),
      columns: [
        { title: "Name", field: "title" },
        { title: "E-mail address", field: "email" },
        { title: "uuid", field: "uuid", type: "numeric" },
        { title: "Premium Plan", field: "price", type: "numeric" },
        { title: "Descripcion", field: "description" },
        { title: "friends", field: "friends", type: "numeric" }
      ]
    };
    // const { datostabla } = this.props;
    var datostabla = this.props.datostabla;
    return (
      <div className='TablaGeneral' onClick={(e) => this.handleClik(e)}>
        <MaterialTable
          title={state.timeS}
          columns={state.columns}
          data={datostabla}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  const datos = datostabla;
                  datos.push(newData);
                  this.props.datosTabla(datos);
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    const datos = datostabla;
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
                  const datos = datostabla;
                  //---------------------se extrae
                  var pos = datos.indexOf(oldData);
                  // var pisicion = pos + 1;
                  var elementoEliminado = datos.splice(pos, 1);
                  this.props.datosTabla(datos);
                  console.log("DELET", elementoEliminado);
                  console.log("POSI", pos);
                }, 600);
              })
          }}
        />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     datostabla: state.User.datostabla,
//     selectdatos: state.User.selectdatos
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    datosTabla(datos) {
      dispatch(datosTabla(datos));
    }
  };
};

export default connect(mapDispatchToProps)(TablaEdit);
