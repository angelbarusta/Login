import * as types from '../../Types';

const initialState = {
    clear:111,
    pres:"0 psi s",
    temp:"0 °C s",
    nomb:"az-pets", 
    comb:"0 %s",
    horom:"0 hrs s",
    hume:"0 %s",
    movi:"sin movimiento s",
    bate:"0 %s",
    ambi:"0 °Cs",
    dataPres:0,
    dataTemp:0,
    dataComb:0,
    dataHume:0,
    dataAmbi:0,
    dataBate:0,
    si:true,
    no:false,
    graficatemp:false,
    graficadash:true,
    dataRealTemp:0,
    dataRealPres:0,
    dataRealComb:0,
    dataRealBat:0,
    date:new Date(),
    horaDateData:new Date(),
    horaDate:new Date(),
    SelectGraBar:111,

    aguaBar:0,
    comidaBar:0,
    dataRealComida:0,
    dataRealAgua:0,

    OpenG:0,
    OpenGB:0,
};

const reducer=(state = initialState, action )=>{
    console.log("Reducer",state)
    switch (action.type){
        case types.PRESION: 
            return{
                 ...state,
                 pres:[action.P1],
                 dataPres:action.P1,
             }
        case types.TEMPERATURA:
            return{
                ...state,
                temp:[action.T1],
                dataTemp:action.T1,
            }
        case types.NOMBRE:
            return{
                ...state,
                nomb:[action.NOM1],
            }
        case types.COMBUSTIBLE:
            return{
                ...state,
                comb:[action.C1],
                dataComb:action.C1,
            }  
        case types.HOROMETRO:
            return{
                ...state,
                horom:[action.HRS1],
            }   
        case types.HUMEDAD:
            return{
                ...state,
                hume:[action.H1],
                dataHume:action.H1,
            }
        case types.PRESENCIA:
            return{
                ...state,
                movi:[action.MOV1]
            }
        case types.BATERIA:
            return{
                ...state,
                dataBate:[action.B1]
            } 
        case types.AMBIENTE:
            return{
                ...state,
                dataAmbi:[action.A1]
            }        
        case types.GRAFTEMP:
            return{
                ...state,
                graficadash:state.no,
                graficatemp:action.tempg,
            }
        case types.GRAFDASH:
            return{
                ...state,
                graficatemp:state.no,
                graficadash:action.datag,
            }
        case types.TEMPERATURAREAL:
            return{
                ...state,
                dataRealTemp:action.TR1,
            } 
        case types.PRESIONREAL:
            return{
                ...state,
                dataRealPres:action.PR1,
            } 
        case types.COMBUSTIBLEREAL:
            return{
                ...state,
                dataRealComb:action.CR1,
            }
        case types.BATERIAREAL:
            return{
                ...state,
                dataRealBat:action.BR1,
            }  
        case types.TIMERELOJ:
            return{
                ...state,
                date:action.time,
            } 
        case types.SELE:
            return{
                ...state,
                SelectGraBar:action.sel,
            }
        case types.HTIME:
            return{
                ...state,
                horaDate:action.hTime,
            }        
        case types.AGUA:
            return{
                ...state,
                aguaBar:action.agua,
            };
        case types.COMIDA:
            return{
                ...state,
                comidaBar:action.comida,
            };
        case types.AGUATR:
             return{
                 ...state,
                 dataRealAgua:action.aguaR1,
             }
        case types.COMIDATR:
             return{
                 ...state,
                 dataRealComida:action.comiR1
             }     
        case types.VERGRAF:
             return{
                 ...state,
                 OpenG:action.ver,
             }       
        case types.VERGRAFB:
             return{
                 ...state,
                 OpenGB:action.ver,
             }                                                
        default:
           return state;
    }
}

export default reducer;