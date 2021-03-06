import * as types from "../../Types";

import _ from "lodash";
import faker from "faker";

const source = _.times(25, () => ({
  title: faker.name.findName(),
  email: faker.internet.email(),
  description: faker.company.catchPhrase(),
  uuid: faker.random.uuid(),
  image: faker.image.avatar(),
  price: faker.finance.amount(0, 100, 2, "$"),
  friends: faker.random.number()
}));

const initialState = {
  user: {},
  datostabla: source,
  selectdatos: source
};

const reducer = (state = initialState, action) => {
  console.log("Reducer", state);
  switch (action.type) {
    case types.DUSER:
      return {
        ...state,
        user: [action.u]
      };
    case types.DATOSTABLA:
      return {
        ...state,
        datostabla: action.datos,
        selectdatos: action.datos
      };
    case types.SELECTDATOSTABLA:
      return {
        ...state,
        selectdatos: action.datos
      };
    default:
      return state;
  }
};

export default reducer;
