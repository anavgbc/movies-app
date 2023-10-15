import ApiService from "./apiService";

export class TMDBService extends ApiService implements TMDBService {
    constructor(token: string) {
        super('', token)
    }

    public async getGenres(): Promise<any> {
        try {
            const { data } = await this.apiInstance.get('/genre/movie/list');

            return data;
        } catch (err) {
            console.error(err)
        }
    }
    
}