import { defineStore } from 'pinia';
import { MovieShape } from '../types/models/movies/movieTypes';

export const useMovieStore = defineStore('movies', {
    state: () => ({
        popularMovies: [] as MovieShape[],
        topRatedMovies: [] as MovieShape[],
        moviesByGenre: {} as {
            title: string;
            movies: MovieShape[]
        },
        selectedMovie: {} as any,
        selectedMovieImages: [] as any,
        selectedMovieCast: [] as any,
        selectedMovieSimilar: [] as any,
        selectedMovieReviews: [] as any,
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
        },
        setSelectedMovie(movie: any) {
            this.selectedMovie = movie;
        },
        setSelectedMovieImages(images: any[]) {
            this.selectedMovieImages = images;
        },
        setSelectedMovieCast(castList: any[]) {
            this.selectedMovieCast = castList;
        },
        setSelectedMovieSimilar(similarList: any[]) {
            this.selectedMovieSimilar = similarList;
        },
        setSelectedMovieReview(reviewList: any[]) {
            this.selectedMovieReviews = reviewList;
        },
    }
})