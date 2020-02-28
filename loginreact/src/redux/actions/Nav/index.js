import * as types from '../../Types';

export const vnavSi=(nav)=>{
    console.log("si",nav)
    return{
    type: types.VNAVSI,
    nav,
    };
};

export const vnavNo=(nav)=>{
    console.log("no",nav)
    return{
    type: types.VNAVNO,
    nav,
    };
};

export const activeItemNavLan=(name1)=>{
    return{
    type: types.ACTITEMNAVLAN,
    name1,
    };
};
export const activeItemNavHome=(name2)=>{
    return{
    type: types.ACTITEMNAVHOME,
    name2,
    };
};
export const activeItemNavAcc=(name3)=>{
    return{
    type: types.ACTITEMNAVACC,
    name3,
    };
};
export const activeItemNavNoti=(name4)=>{
    return{
    type: types.ACTITEMNAVNOTI,
    name4,
    };
};
export const dashPets=(p)=>{
    return{
        type:types.DASHPETS,
        p,
    }
}
