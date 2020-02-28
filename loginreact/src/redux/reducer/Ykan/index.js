import * as types from "../../Types";
import { misYkans } from "../../../Ykan/components/ElePresentacional/CardDataYkan/DataItemYkan.json";

const initialState = {
  tempYkan: 0,
  ilumYkan: 0,
  moviYkan: 0,
  humAmbYkan: 0,

  stateYkan: 0,
  confAutYkan: 0,

  confTempY: 0,
  confIlumY: 0,
  confMoviY: 0,

  jasonYkans: misYkans,

  costoYkan: 0,
  llamadasYkanCount: 0,
  llamadasYkan: 0,

  costoTotalYkan: 0
};

const reducer = (state = initialState, action) => {
  console.log("Reducer", state);
  switch (action.type) {
    case types.ONYKAN:
      return {
        ...state,
        stateYkan: action.statY
      };
    case types.TEMPYKAN:
      return {
        ...state,
        tempYkan: action.tempY
      };
    case types.ILUMIY:
      return {
        ...state,
        ilumYkan: action.ilumY
      };
    case types.MOVIY:
      return {
        ...state,
        moviYkan: action.movY
      };
    case types.JSONYKANS:
      return {
        ...state,
        jasonYkans: action.jasonYkan
      };
    case types.LLAMADAS:
      return {
        ...state,
        llamadasYkan: state.llamadasYkanCount
        //llamadasYkanCount: state.llamadasYkanCount + 1
      };
    case types.COSTOYKAN:
      return {
        ...state,
        costoYkan: action.costY
      };
    case types.LLAMADASYKAN:
      return {
        ...state,
        llamadasYkanCount: action.LlamaY
      };
    case types.COSTOTOTALYKAN:
      return {
        ...state,
        costoTotalYkan: action.costTot
      };
    case types.RESETSTATES:
      return {
        ...state,
        llamadasYkanCount: 0,
        llamadasYkan: 0,
        costoYkan: 0
      };
    default:
      return state;
  }
};

export default reducer;
