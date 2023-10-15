import { defineStore } from 'pinia';
import { MovieShape } from '../types/models/movies/movieTypes';

export const useMovieStore = defineStore('movies', {
    state: () => ({
        popularMovies: [] as MovieShape[],
        topRatedMovies: [] as MovieShape[],
        moviesByGenre: {} as {
            title: string;
            movies: MovieShape[]
        }
    }),
    actions: {
        setPopularMovies(movies: MovieShape[]) {
            this.popularMovies = movies;
        },
        setTopRatedMovies(movies: MovieShape[]) {
            this.topRatedMovies = movies;
        },
        setMoviesByGenre(movies: {
            title: string;
            movies: MovieShape[]
        }) {
            this.moviesByGenre = movies;
        }
    }
})