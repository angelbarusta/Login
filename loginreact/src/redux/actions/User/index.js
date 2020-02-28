import * as types from '../../Types';

export const duser=(u)=>{
    console.log("USER",u)
    return{
        type:types.DUSER,
        u,
    };
};