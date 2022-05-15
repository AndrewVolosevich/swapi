import {
    fetchPeoples,
    fetchPeoplesError,
    fetchPeoplesSuccess, setPeoplesCount, setSearchPeoples
} from "./peoplesActionCreator";
import SwapiService from "../../services/swapiService/SwapiService";

export const fetchPeoplesDataOperation = (pageNumber: number) => async (dispatch: any) => {
    try {
        dispatch(fetchPeoples())
        const resp: any = await SwapiService.getAllPeoples(pageNumber)
        dispatch(setPeoplesCount(resp.count))
        dispatch(fetchPeoplesSuccess(resp.results))
    } catch (e) {
        dispatch(fetchPeoplesError('Fetch peoples failed'))
    }
}

export const searchPeoplesDataOperation = (page: number = 1, search: string = '') => async (dispatch: any) => {
    try {
        dispatch(setSearchPeoples(search))
        const resp: any = await SwapiService.searchPeoples(page, search)
        console.log(resp)
        dispatch(setPeoplesCount(resp.count))
        dispatch(fetchPeoplesSuccess(resp.results))
    } catch (e) {
        dispatch(fetchPeoplesError('Failed on search'))
    }
}