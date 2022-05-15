
export enum PeoplesActionTypes {
    FETCH_PEOPLES = 'FETCH_PEOPLES',
    FETCH_PEOPLES_SUCCESS = 'FETCH_PEOPLES_SUCCESS',
    FETCH_PEOPLES_ERROR = 'FETCH_PEOPLES_ERROR',
    SET_PEOPLES_COUNT = 'SET_PEOPLES_COUNT',
    SET_PEOPLES_PAGE = 'SET_PEOPLES_PAGE',
    SET_SEARCH_PEOPLES = 'SET_SEARCH_PEOPLES',
}

export interface IPeople {
    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    gender: string,
    hair_color: string,
    height: string,
    mass: string,
    name: string,
    skin_color: string,
}

export interface PeoplesState {
    peoples: IPeople[],
    pageNumber: number,
    peoplesCount: number,
    search: string,
    loading: boolean,
    error: string | undefined
}

export interface FetchPeoplesAction {
    type: PeoplesActionTypes.FETCH_PEOPLES
}

export interface FetchPeoplesActionSuccess {
    type: PeoplesActionTypes.FETCH_PEOPLES_SUCCESS,
    payload: IPeople[]
}

export interface FetchPeoplesActionError {
    type: PeoplesActionTypes.FETCH_PEOPLES_ERROR,
    payload: string | undefined
}

export interface SetPeoplesCount {
    type: PeoplesActionTypes.SET_PEOPLES_COUNT,
    payload: number
}

export interface SetPeoplesPage {
    type: PeoplesActionTypes.SET_PEOPLES_PAGE,
    payload: number
}

export interface SetSearchPeoples {
    type: PeoplesActionTypes.SET_SEARCH_PEOPLES,
    payload: string
}

export type PeoplesAction =
    FetchPeoplesAction
    | FetchPeoplesActionSuccess
    | FetchPeoplesActionError
    | SetPeoplesPage
    | SetPeoplesCount
    | SetSearchPeoples