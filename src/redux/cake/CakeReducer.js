import { BUY_CAKE, ADD_CAKE } from "./CakeTypes"

const initialState = {
    numberofCakes : 10
}

const cakeReducer = ( state = initialState, action ) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numberofCakes : state.numberofCakes - 1
        }
        case ADD_CAKE : return {
            ...state,
            numberofCakes : state.numberofCakes + 1
        }
        default : return state 
    }
}

export default cakeReducer;