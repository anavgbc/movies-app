import { defineStore } from 'pinia';
import { TvShowShape } from '../types/models/tvShows/tvShows.types';

export const useTvShowStore = defineStore('tvShow', {
    state: () => ({
        popularTvShows: [] as TvShowShape[],
        topRatedTvShows: [] as TvShowShape[],
    }),
    actions: {
        setPopularTvShows(tvShows: TvShowShape[]) {
            this.popularTvShows = tvShows;
        },
        setTopRatedTvShows(tvShows: TvShowShape[]) {
            this.topRatedTvShows = tvShows
        }
    }
})