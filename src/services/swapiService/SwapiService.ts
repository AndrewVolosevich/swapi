import apiClient from "./apiClient";

class SwapiService {
    getAllPeoples(page: number = 1) {
        return apiClient().get('people/?format=json', {
            params: {page}
        }).then(resp => resp.data)
    }
    searchPeoples(page: number = 1, search: string = '') {
        return apiClient().get('people/?format=json', {
            params: {page, search}
        }).then(resp => resp.data)
    }
}

export default new SwapiService();