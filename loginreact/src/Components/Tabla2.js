import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";

class TablaEdit extends Component {
  render() {
    //const { datostabla } = this.props;
    const state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "E-mail address", field: "E-mail address", type: "string" },
        { title: "uuid", field: "uuid", type: "numeric" },
        { title: "Premium Plan", field: "Premium Plan", type: "numeric" }
      ],
      data: this.props.datostabla
    };

    return (
      <MaterialTable
        title='Editable Example'
        columns={state.columns}
        data={state.data}
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
