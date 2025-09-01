import { Buy_Cake } from "./cakeType"

const initialState = {
    numOfCakes: 10
}

export const cakeReducer =(state = initialState, action) => {

     switch(action.type) {
        case Buy_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return {
            ...state
        }
     }
}