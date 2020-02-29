import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { datosTabla, SelectdatosTabla } from "../redux/actions/User";

const initialState = { isLoading: false, results: [], value: "" };

// const source = _.times(5, () => ({
//   title: faker.name.findName(),
//   email: faker.internet.email(),
//   description: faker.company.catchPhrase(),
//   uuid: faker.random.uuid(),
//   image: faker.image.avatar(),
//   price: faker.finance.amount(0, 100, 2, "$")
// }));

class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    // const source = this.props.datostabla;
    this.setState({ value: result.title });
    var datos = this.state.results;
    this.props.SelectdatosTabla(datos);
  };

  handleSearchChange = (e, { value }) => {
    var datos = this.state.results;
    this.props.SelectdatosTabla(datos);
    const source = this.props.datostabla;
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < -1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const source = this.props.datosTabla;
    const { selectdatos } = this.props;

    const { isLoading, value, results } = this.state;

    const cuerpo = selectdatos.map((s, i) => {
      return <div>{s.title}</div>;
    });

    return (
      <Grid>
        {" "}
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: "auto" }}>
              {selectdatos != null || selectdatos != undefined ? (
                <div>{cuerpo}</div>
              ) : (
                <div>MAL</div>
              )}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    datostabla: state.User.datostabla,
    selectdatos: state.User.selectdatos
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datosTabla(datos) {
      dispatch(datosTabla(datos));
    },
    SelectdatosTabla(datos) {
      dispatch(SelectdatosTabla(datos));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchExampleStandard);
