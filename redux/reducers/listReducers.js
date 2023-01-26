const INITIAL_STATE = [];
const listReducers = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case "ADD_LIST":
            return[...state, payload];
            break;

        default:
            break;

    }
};