import * as types from "../../Types";

export const duser = (u) => {
  console.log("USER", u);
  return {
    type: types.DUSER,
    u
  };
};
export const datosTabla = (datos) => {
  console.log("DATOS", datos);
  return {
    type: types.DATOSTABLA,
    datos
  };
};
