
export enum PeoplesActionTypes {
    FETCH_PEOPLES = 'FETCH_PEOPLES',
    FETCH_PEOPLES_SUCCESS = 'FETCH_PEOPLES_SUCCESS',
    FETCH_PEOPLES_ERROR = 'FETCH_PEOPLES_ERROR',
}

export interface PeoplesState {
    peoples: any[],
    loading: boolean,
    error: string | undefined
}

export interface FetchPeoplesAction {
    type: PeoplesActionTypes.FETCH_PEOPLES
}

export interface FetchPeoplesActionSuccess {
    type: PeoplesActionTypes.FETCH_PEOPLES_SUCCESS,
    payload: any[]
}

export interface FetchPeoplesActionError {
    type: PeoplesActionTypes.FETCH_PEOPLES_ERROR,
    payload: string | undefined
}

export type PeoplesAction =
    FetchPeoplesAction
    | FetchPeoplesActionSuccess
    | FetchPeoplesActionError