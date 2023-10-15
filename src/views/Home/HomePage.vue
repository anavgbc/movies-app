<script setup lang="ts">
import PosterCarousel from './components/PosterCarousel.vue'
import { homeShape } from '../../utils/home';
import { ref, onBeforeMount } from 'vue';
import { MoviesService } from '../../services/MovieService';
import { TMDBService } from '../../services/TMDBService';
import { token } from '../../utils/token';
import CarouselMovie from './components/CarouselMovie.vue';
import { TvShowService } from '../../services/TvShowService';
import { useMovieStore, useTvShowStore } from '../../store'

const isLoading = ref<boolean>();
const toggleLoading = () => (isLoading.value = !isLoading.value);

const movieStore = useMovieStore();
const tvShowStore = useTvShowStore();

const service = new MoviesService(token);
const tmdbService = new TMDBService(token);
const showService = new TvShowService(token);

onBeforeMount(async () => {
    toggleLoading()
    const popularMoviesResponse = await service.listPopularMovies();
    const topRatedMoviesResponse = await service.listTopRatedMovies();

    const { genres } = await tmdbService.getGenres();
    const randomIndex = Math.floor(Math.random() * genres.length);
    const randomGenreId = genres[randomIndex].id;

    const randomMoviesGenres = await service.getMovieByGenre(randomGenreId);
    const popularShowsResponse = await showService.listPopularShows();
    const topRatedShowsResponse = await showService.listTopRatedShows()

    movieStore.setPopularMovies(popularMoviesResponse.results);
    movieStore.setTopRatedMovies(topRatedMoviesResponse.results);
    movieStore.setMoviesByGenre({
        title: genres[randomIndex].name,
        movies: randomMoviesGenres.results
    });


    tvShowStore.setPopularTvShows(popularShowsResponse.results);
    tvShowStore.setTopRatedTvShows(topRatedShowsResponse.results);

})

</script>

<template>
    <v-container style="max-width: 100%;" class="fluid w-100 mx-0 px-0 h-screen py-0">
        <v-row class="teste">
            <v-col cols="12" class="py-0">
                <PosterCarousel :movie-list="homeShape" />
            </v-col>
        </v-row>
        <v-row v-if="movieStore.popularMovies">
            <v-col cols="12" class="pt-9">
                <p class="px-10 mx-9">Popular movies</p>
                <CarouselMovie :popular-list="movieStore.popularMovies" />
            </v-col>
        </v-row>
        <v-row v-if="movieStore.topRatedMovies">
            <v-col cols="12" class="py-0">
                <p class="px-10 mx-9">Top rated movies</p>
                <CarouselMovie :popular-list="movieStore.topRatedMovies" />
            </v-col>
        </v-row>
        <v-row v-if="movieStore.moviesByGenre.movies">
            <v-col cols="12" class="py-0">
                <p class="px-10 mx-9">{{ movieStore.moviesByGenre.title }} movies</p>
                <CarouselMovie :popular-list="movieStore.moviesByGenre.movies" />
            </v-col>
        </v-row>
        <v-row v-if="tvShowStore.popularTvShows">
            <v-col cols="12" class="py-0">
                <p class="px-10 mx-9">Popular shows</p>
                <CarouselMovie :popular-list="tvShowStore.popularTvShows" />
            </v-col>
        </v-row>
        <v-row v-if="tvShowStore.topRatedTvShows">
            <v-col cols="12" class="py-0">
                <p class="px-10 mx-9">Top rated shows</p>
                <CarouselMovie :popular-list="tvShowStore.topRatedTvShows" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.movie-poster {
    position: relative;
}

.movie-poster--card {
    font-family: 'Urbanist', sans-serif;
    bottom: 20px;
    left: 120px;
}
</style>