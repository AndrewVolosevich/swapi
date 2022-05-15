import {
    FetchPeoplesAction, FetchPeoplesActionError,
    FetchPeoplesActionSuccess,
    PeoplesActionTypes
} from "./types";

export const fetchPeoples = (): FetchPeoplesAction => {
    return {
        type: PeoplesActionTypes.FETCH_PEOPLES
    }
}

export const fetchPeoplesSuccess = (data: any[]): FetchPeoplesActionSuccess => {
    return {
        type: PeoplesActionTypes.FETCH_PEOPLES_SUCCESS,
        payload: data
    }
}

export const fetchPeoplesError = (errorMessage: string | undefined): FetchPeoplesActionError => {
    return {
        type: PeoplesActionTypes.FETCH_PEOPLES_ERROR,
        payload: errorMessage
    }
}