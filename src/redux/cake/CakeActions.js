import { BUY_CAKE, ADD_CAKE } from "./CakeTypes"

export const buyCakes = () => {
    return {
        type : BUY_CAKE,
        info : 'To substract cake form inventory'
    }
}

export const addCakes = () => {
    return {
        type : ADD_CAKE,
        info : 'To add a cake to inventory'
    }
}