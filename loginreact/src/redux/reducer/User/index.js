import * as types from '../../Types';

const initialState = {
    user:{}
};

const reducer=(state = initialState, action )=>{
    console.log("Reducer",state)
    switch (action.type){
        case types.DUSER: 
            return{
                 ...state,
                 user:[action.u],
             }     
        default:
           return state;
    }
}

export default reducer;