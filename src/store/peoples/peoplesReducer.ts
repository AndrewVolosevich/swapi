import {PeoplesAction, PeoplesActionTypes, PeoplesState} from "./types";

const initialState: PeoplesState = {
    peoples: [],
    loading: false,
    error: undefined
}
export const peoplesReducer = (state: PeoplesState = initialState, action: PeoplesAction) => {

    switch (action.type) {
        case PeoplesActionTypes.FETCH_PEOPLES:
            return {...state, error: undefined, loading: true}
        case PeoplesActionTypes.FETCH_PEOPLES_SUCCESS:
            return {...state, peoples: action.payload, loading: false, error: undefined}
        case PeoplesActionTypes.FETCH_PEOPLES_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}