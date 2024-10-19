import { types } from "../types/types";


export const authReducer = (state = {}, action: any ) => { //initial state & action (params)

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}