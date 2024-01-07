 
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useMovieStore } from '../../store';
import { token } from '../../utils/token';

import { MoviesService } from '../../services/MovieService';
import CarouselMovie from '../Home/components/CarouselMovie.vue';
import { TMDBService } from '../../services/TMDBService';

const movieStore = useMovieStore();
const isLoading = ref<boolean>();
const toggleLoading = () => (isLoading.value = !isLoading.value);

const movieService = new MoviesService(token);
const tmdbService = new TMDBService(token);

onBeforeMount(async () => {
    if (!movieStore.popularMovies) {
        toggleLoading();
        const popularMoviesResponse = await movieService.listPopularMovies();
        const topRatedMoviesResponse = await movieService.listTopRatedMovies();

        const { genres } = await tmdbService.getGenres();
        const randomIndex = Math.floor(Math.random() * genres.length);
        const randomGenreId = genres[randomIndex].id;

        const randomMoviesGenres = await movieService.getMovieByGenre(randomGenreId);

        movieStore.setMoviesByGenre({
            title: genres[randomIndex].name,
            movies: randomMoviesGenres.results
        });
        movieStore.setPopularMovies(popularMoviesResponse.results);
        movieStore.setTopRatedMovies(topRatedMoviesResponse.results);
        toggleLoading();
    }
})
</script>
 
<template>
    <v-container style="max-width: 100%;" class="fluid w-100 mx-0 px-0 h-screen py-0">

        <v-row v-if="movieStore.popularMovies">
            <v-col cols="12" class="pt-9">
                <p class="px-10 mx-9">Popular movies</p>
                <CarouselMovie :popular-list="movieStore.popularMovies" />
            </v-col>
        </v-row>
        <v-row v-if="movieStore.topRatedMovies">
            <v-col cols="12" class="pt-9">
                <p class="px-10 mx-9">Top rated movies</p>
                <CarouselMovie :popular-list="movieStore.topRatedMovies" />
            </v-col>
        </v-row>
        <v-row v-if="movieStore.moviesByGenre.movies">
            <v-col cols="12" class="pt-9">
                <p class="px-10 mx-9">Top rated movies</p>
                <CarouselMovie :popular-list="movieStore.moviesByGenre.movies" />
            </v-col>
        </v-row>
    </v-container>
</template>
 
<style></style>