import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Search,
  Grid,
  Header,
  Segment,
  Table,
  Card,
  Image,
  Icon
} from "semantic-ui-react";
import moment from "moment";
import { datosTabla, SelectdatosTabla } from "../redux/actions/User";

import "./search.css";

const initialState = {
  isLoading: false,
  results: [],
  value: "",
  timeS: moment(new Date()).format("DD/MM/YYYY | HH:mm:ss")
};

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
    //const source = this.props.datosTabla;
    const { datostabla, timeS } = this.props;

    const { isLoading, value, results } = this.state;

    const cuerpo = datostabla.map((s, i) => {
      return (
        <div>
          <hr />
          <p style={{ color: "transparent" }}>{timeS}</p>
          <Card className='Cartas'>
            <div style={{ width: 500 }}>
              <Image circular floated='center' src={s.image} size='tiny' />
            </div>
            <Card.Content>
              <Card.Header>{s.title}</Card.Header>
              <Card.Meta>Email:{s.email}</Card.Meta>
              <Card.Meta>uuid:{s.uuid}</Card.Meta>
              <Card.Description>Work{s.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {s.friends} Friends
              </a>
            </Card.Content>
          </Card>
          <hr />
        </div>
      );
    });

    return (
      <div>
        <Grid style={{ paddingBottom: 20 }}>
          {" "}
          <Grid.Column width={10}>
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
        </Grid>
        <div className='AvatarSelect'>
          {datostabla != null || datostabla != undefined ? (
            <div className='perfiles'>{cuerpo}</div>
          ) : (
            <div>MAL</div>
          )}
        </div>
      </div>
    );
  }
}

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
export default connect(null, mapDispatchToProps)(SearchExampleStandard);
