const INITIAL_STATE = 0;

const numberReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "INC_NUMBER":
            return state + 1;
            break;
    
        case "DEC_NUMBER":
            return state - 1;
            break;

        default:
            return state;
            break;
        
        }
}

export default numberReducer;