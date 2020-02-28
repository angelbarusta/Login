import * as types from "../../Types";

const initialState = {
  clear: 111,
  temp: "0 °C s",
  nomb: "az-crops",
  hume: "0 %s",
  movi: "sin movimiento s",
  humesue: "0 %s",

  dataPresencia: 0,
  dataTemp: 0,
  dataHumesue: 0,
  dataHumeambi: 0,

  si: true,
  no: false,
  graficatemp: false,
  graficadash: true,
  dataRealTemp: 0,
  dataRealHumesue: 0,
  dataRealHumeambi: 0,
  date: new Date(),
  horaDateData: new Date(),
  horaDate: new Date(),
  SelectGraBar: 111,

  humedadBar: 0,
  temperaBar: 0,
  dataRealTemp: 0,
  dataRealHume: 0,
  dataRealHumesue: 0,

  OpenG: 0,
  OpenGB: 0,

  relj: [],
  lbt: [],
  vyt: [],
  hat: [],

  uids: "",

  misSenso: []
};

const reducer = (state = initialState, action) => {
  console.log("Reducer", state);
  switch (action.type) {
    case types.TEMPAMB:
      return {
        ...state,
        temp: [action.TA1],
        dataTemp: state.temp
      };
    case types.HUMAMB:
      return {
        ...state,
        hume: [action.HA1],
        dataHumeambi: state.hume
      };
    case types.REJRE:
      return {
        ...state,
        relj: action.reloj
      };
    case types.LB:
      return {
        ...state,
        lbt: action.lb
      };
    case types.VY:
      return {
        ...state,
        vyt: action.vy
      };
    case types.UID:
      return {
        ...state,
        uids: action.user
      };
    case types.LISHUSU:
      return {
        ...state,
        misSenso: action.Lhs
      };
    default:
      return state;
  }
};

export default reducer;
