import {PeoplesAction, PeoplesActionTypes, PeoplesState} from "./types";

const initialState: PeoplesState = {
    peoples: [],
    pageNumber: 1,
    peoplesCount: 0,
    search: '',
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
        case PeoplesActionTypes.SET_PEOPLES_COUNT:
            return {...state, peoplesCount: action.payload}
        case PeoplesActionTypes.SET_PEOPLES_PAGE:
            return {...state, pageNumber: action.payload}
        case PeoplesActionTypes.SET_SEARCH_PEOPLES:
            return {...state, search: action.payload, loading: true, error: undefined}
        default:
            return state
    }
}