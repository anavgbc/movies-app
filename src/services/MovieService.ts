import ApiService from "./apiService";

export class MoviesService extends ApiService implements MoviesService {
    constructor(token: string) {
        super('', token)
    }

    public async listPopularMovies(): Promise<any> {
        try {
            const { data } = await this.apiInstance.get('/movie/popular');

            return data;
        } catch (err) {
            console.error(err)
        }
    }
    public async listTopRatedMovies(): Promise<any> {
        try {
            const { data } = await this.apiInstance.get('/movie/top_rated');

            return data;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovie(name: string): Promise<any> {
        try {
            const response = await this.apiInstance.get(`/search/movie/query=${name}`);

            return response;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovieById(id: string): Promise<any> {
        try {
            const response = await this.apiInstance.get(`/movie/${id}?append_to_response=credits,similar,reviews`);

            return response;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovieByGenre(genreId: string): Promise<any> {
        try {
            const { data } = await this.apiInstance.get(`discover/movie?with_genres=${genreId}`);

            return data;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovieCredits(id: string): Promise<any> {
        try {
            const response = await this.apiInstance.get(`/movie/${id}/credits`);

            return response;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovieImages(id: string): Promise<any> {
        try {
            const response = await this.apiInstance.get(`/movie/${id}/images`);

            return response;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovieSimilar(id: string): Promise<any> {
        try {
            const response = await this.apiInstance.get(`/movie/${id}/similar`);

            return response;
        } catch (err) {
            console.error(err)
        }
    }
    public async getMovieReviews(id: string): Promise<any> {
        try {
            const response = await this.apiInstance.get(`/movie/${id}/reviews`);

            return response;
        } catch (err) {
            console.error(err)
        }
    }
}