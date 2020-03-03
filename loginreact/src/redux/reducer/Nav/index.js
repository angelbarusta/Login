import * as types from "../../Types";

const initialState = {
  nav: false,
  si: true,
  no: false,
  activeItem: {}
};

const reducer = (state = initialState, action) => {
  console.log("Reducer", state);
  switch (action.type) {
    case types.VNAVSI:
      return {
        ...state,
        nav: state.si
      };
    case types.VNAVNO:
      return {
        ...state,
        nav: state.no
      };
    case types.ACTITEMNAVLAN:
      return {
        ...state,
        activeItem: action.name1
      };
    case types.ACTITEMNAVHOME:
      return {
        ...state,
        activeItem: action.name2
      };
    case types.ACTITEMNAVACC:
      return {
        ...state,
        activeItem: action.name3
      };
    case types.ACTITEMNAVNOTI:
      return {
        ...state,
        activeItem: action.name4
      };

    default:
      return state;
  }
};

export default reducer;
