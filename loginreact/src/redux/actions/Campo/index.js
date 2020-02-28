import * as types from '../../Types';

export const presionC=(P1)=>{
    console.log("P1",P1)
    return{
    type: types.PRESION,
    P1,
    };
};

export const temperaturaC=(T1)=>{
    console.log("T1",T1)
    return{
    type: types.TEMPERATURA,
    T1,
    };
};
export const nombreC=(NOM1)=>{
    return{
        type: types.NOMBRE,
        NOM1,
    };
};
export const combustibleC=(C1)=>{
    return{
        type: types.COMBUSTIBLE,
        C1,
    };
};
export const horometroC=(HRS1)=>{
    return{
        type: types.HOROMETRO,
        HRS1,
    };
};
export const humedadC=(H1)=>{
    return{
        type: types.HUMEDAD,
        H1,
    };
};
export const presenciaC=(MOV1)=>{
    return{
        type: types.PRESENCIA,
        MOV1,
    };
};
export const bateriaC=(B1)=>{
    return{
        type: types.BATERIA,
        B1,
    };
};
export const ambienteC=(A1)=>{
    return{
        type: types.AMBIENTE,
        A1,
    };
};
export const tempgraf=(tempg)=>{
    console.log("true tempgraf")
    return{
        type: types.GRAFTEMP,
        tempg,
    };
};
export const datagraf=(datag)=>{
    console.log("true datagraf")
    return{
        type: types.GRAFDASH,
        datag,
    };
};

export const temperaturaR=(TR1)=>{
    console.log("TR1",TR1)
    return{
    type: types.TEMPERATURAREAL,
    TR1,
    };
};
export const presionR=(PR1)=>{
    console.log("PR1",PR1)
    return{
    type: types.PRESIONREAL,
    PR1,
    };
};
export const combustibleR=(CR1)=>{
    console.log("CR1",CR1)
    return{
    type: types.COMBUSTIBLEREAL,
    CR1,
    };
};
export const bateriaR=(BR1)=>{
    console.log("BR1",BR1)
    return{
    type: types.BATERIAREAL,
    BR1,
    };
};
export const relojT=(time)=>{
    return{
    type: types.TIMERELOJ,
    time,
    };
};
export const sele=(sel)=>{
    return{
    type: types.SELE,
    sel,
    };
};
export const htiempo=(hTime)=>{
    return{
    type: types.HTIME,
    hTime,
    };
};


export const comidaC=(comida)=>{
    return{
        type: types.COMIDA,
        comida,
    };
};
export const aguaC=(agua)=>{
    return{
        type:types.AGUA,
        agua
    };
};
export const comidaR=(comiR1)=>{
    return{
        type:types.COMIDATR,
        comiR1,
    };
};
export const aguaR=(aguaR1)=>{
    return{
        type:types.AGUATR,
        aguaR1,
    };
};
export const OpenGraf=(ver)=>{
    return{
        type:types.VERGRAF,
        ver,
    };
};
export const OpenGrafB=(ver)=>{
    return{
        type:types.VERGRAFB,
        ver,
    };
};


