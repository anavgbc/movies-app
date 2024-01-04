import { defineStore } from 'pinia';
import { TvShowShape } from '../types/models/tvShows/tvShows.types';
import { Actor } from '../types/models/actor';

export const useTvShowStore = defineStore('tvShow', {
    state: () => ({
        popularTvShows: [] as TvShowShape[],
        topRatedTvShows: [] as TvShowShape[],
        selectedShow: {} as TvShowShape,
        selectedShowImages: [] as any,
        selectedShowCast: [] as any,
        selectedShowSimilar: [] as any,
        selectedShowReviews: [] as any,
    }),
    actions: {
        setPopularTvShows(tvShows: TvShowShape[]) {
            this.popularTvShows = tvShows;
        },
        setTopRatedTvShows(tvShows: TvShowShape[]) {
            this.topRatedTvShows = tvShows
        },
        setSelectedShow(show: TvShowShape) {
            this.selectedShow = show;
        },
        setSelectedShowImages(images: {
            aspect_ratio: number;
            height: number;
            width: number;
            vote_average: number;
            vote_count: number;
        }[]) {
            this.selectedShowImages = images;
        },
        setSelectedShowCast(castList: Actor[]) {
            this.selectedShowCast = castList;
        },
        setSelectedShowSimilar(similarList: any[]) {
            this.selectedShowSimilar = similarList;
        },
        setSelectedShowReview(reviewList: any[]) {
            this.selectedShowReviews = reviewList;
        },
    }
})