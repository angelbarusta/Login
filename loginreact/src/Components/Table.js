import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

import "./Tabla.css";

class TableExampleSingleLine extends Component {
  render() {
    const { datostabla } = this.props;

    var cuerpo = datostabla.map((s, i) => {
      return (
        <Table.Row>
          <Table.Cell>{s.title}</Table.Cell>
          <Table.Cell>{s.email}</Table.Cell>
          <Table.Cell>{s.uuid}</Table.Cell>
          <Table.Cell>{s.price}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Table singleLine className='TablaGeneral' celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>uuid</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {datostabla != null ? (
          <Table.Body>{cuerpo}</Table.Body>
        ) : (
          <Table.Body>
            <Table.Row>
              <Table.Cell>John Lilki NOSIRVE</Table.Cell>
              <Table.Cell>September 14, 2013 NOSIRVE</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com NOSIRVO</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
      </Table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    datostabla: state.User.datostabla,
    selectdatos: state.User.selectdatos
  };
};
export default connect(mapStateToProps)(TableExampleSingleLine);
