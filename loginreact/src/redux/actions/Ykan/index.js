import * as types from "../../Types";

export const stateY = (statY) => {
  return {
    type: types.ONYKAN,
    statY
  };
};
export const tempeY = (tempY) => {
  return {
    type: types.TEMPYKAN,
    tempY
  };
};
export const ilumiY = (ilumY) => {
  return {
    type: types.ILUMIY,
    ilumY
  };
};
export const moviY = (movY) => {
  return {
    type: types.MOVIY,
    movY
  };
};
export const JasonYkan = (jasonYkan) => {
  return {
    type: types.JSONYKANS,
    jasonYkan
  };
};
export const Llamadas = () => {
  return {
    type: types.LLAMADAS
  };
};
export const CostoYkan = (costY) => {
  console.log("FLOAT_ACT", costY);
  return {
    type: types.COSTOYKAN,
    costY
  };
};
export const LlamadasYkan = (LlamaY) => {
  return {
    type: types.LLAMADASYKAN,
    LlamaY
  };
};
export const CostoTotalYkan = (costTot) => {
  return {
    type: types.COSTOTOTALYKAN,
    costTot
  };
};
export const resetState = () => {
  return {
    type: types.RESETSTATES
  };
};
