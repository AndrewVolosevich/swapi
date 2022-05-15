import apiClient from "./apiClient";

class SwapiService {
    getAllPeoples(page: number) {
        return apiClient().get('people/?format=json', {
            params: {page}
        })
    }
}

export default new SwapiService();