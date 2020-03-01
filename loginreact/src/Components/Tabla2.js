import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { datosTabla } from "../redux/actions/User";

class TablaEdit extends Component {
  render() {
    //const { datostabla } = this.props;
    const state = {
      columns: [
        { title: "Name", field: "title" },
        { title: "E-mail address", field: "email" },
        { title: "uuid", field: "uuid", type: "numeric" },
        { title: "Premium Plan", field: "price", type: "numeric" }
      ]
    };
    const { datostabla } = this.props;
    console.log("TABLA2", datostabla);
    return (
      <MaterialTable
        title='Clientes'
        columns={state.columns}
        data={datostabla}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    datostabla: state.User.datostabla,
    selectdatos: state.User.selectdatos
  };
};
export default connect(mapStateToProps)(TablaEdit);
