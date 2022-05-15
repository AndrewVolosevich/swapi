import {
    FetchPeoplesAction, FetchPeoplesActionError,
    FetchPeoplesActionSuccess, IPeople,
    PeoplesActionTypes, SetPeoplesCount, SetPeoplesPage, SetSearchPeoples
} from "./types";

export const fetchPeoples = (): FetchPeoplesAction => {
    return {
        type: PeoplesActionTypes.FETCH_PEOPLES
    }
}

export const fetchPeoplesSuccess = (data: IPeople[]): FetchPeoplesActionSuccess => {
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

export const setPeoplesCount = (peoplesCount: number): SetPeoplesCount => {
    return {
        type: PeoplesActionTypes.SET_PEOPLES_COUNT,
        payload: peoplesCount
    }
}

export const setPeoplesPage = (peoplesPage: number): SetPeoplesPage => {
    return {
        type: PeoplesActionTypes.SET_PEOPLES_PAGE,
        payload: peoplesPage
    }
}

export const setSearchPeoples = (search: string): SetSearchPeoples => {
    return {
        type: PeoplesActionTypes.SET_SEARCH_PEOPLES,
        payload: search
    }
}