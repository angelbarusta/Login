import * as types from "../../Types";

export const tempamb = (TA1) => {
  return {
    type: types.TEMPAMB,
    TA1
  };
};
export const humamb = (HA1) => {
  return {
    type: types.HUMAMB,
    HA1
  };
};
export const ilumina = (I1) => {
  return {
    type: types.ILUMINA,
    I1
  };
};
export const humsue = (HS1) => {
  return {
    type: types.HUMSUE,
    HS1
  };
};
export const presenciaCrop = (PRCR1) => {
  return {
    type: types.PRESENCROP,
    PRCR1
  };
};

export const relojReal = (reloj) => {
  return {
    type: types.REJRE,
    reloj
  };
};
export const lbtime = (lb) => {
  return {
    type: types.LB,
    lb
  };
};
export const vytime = (vy) => {
  return {
    type: types.VY,
    vy
  };
};
export const hatime = (ha) => {
  return {
    type: types.HA,
    ha
  };
};
export const uidUser = (user) => {
  return {
    type: types.UID,
    user
  };
};
export const LisHuSu = (Lhs) => {
  return {
    type: types.LISHUSU,
    Lhs
  };
};
