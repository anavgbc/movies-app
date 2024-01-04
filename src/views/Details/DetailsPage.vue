<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useMovieStore, useTvShowStore } from '../../store';
import { token } from '../../utils/token';
import { MoviesService } from '../../services/MovieService';
import { TvShowService } from '../../services/TvShowService';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import CarouselMovie from '../Home/components/CarouselMovie.vue';

const model = ref();
const router = useRoute();
const type = router.params.type as string;
const id = router.params.id as string;

const movieStore = useMovieStore()
const tvShowStore = useTvShowStore();

const originalImageUrl = 'http://image.tmdb.org/t/p/original';
const galleryImageUrlBase = 'http://image.tmdb.org/t/p/w500';

const movieService = new MoviesService(token);
const showService = new TvShowService(token);


const movie = ref()

onBeforeMount(async () => {
    console.log(router.params)

    if (type === 'movie') {
        const movie = await movieService.getMovieById(id);
        const images = await movieService.getMovieImages(id);

        movieStore.setSelectedMovie(movie.data);
        movieStore.setSelectedMovieReview(movie.data.reviews.results);
        movieStore.setSelectedMovieCast(movie.data.credits.cast);
        movieStore.setSelectedMovieSimilar(movie.data.similar.results);

        movieStore.setSelectedMovieImages(images.data.backdrops);
    } else {

        const { data: tvShow } = await showService.getShowById(id);
        const { data: images } = await showService.getShowImages(id);

        tvShowStore.setSelectedShow(tvShow);
        tvShowStore.setSelectedShowCast(tvShow.credits.cast);
        tvShowStore.setSelectedShowReview(tvShow.reviews.results);
        tvShowStore.setSelectedShowSimilar(tvShow.similar.results)
        tvShowStore.setSelectedShowImages(images.backdrops);
    }
})

</script>
<template>
    <v-container style="max-width: 100%;" class="fluid w-100 mx-0 px-0 h-screen py-0 bg-dark-1">
        <v-row v-if="movie">
            <v-col cols="12" class="py-0 teste">
                <v-card variant="text" class="w-50 movie-poster--card abacaxi" position="absolute">{{ movie.title
                }}</v-card>

                <div class="poster-overlay" />
                <v-card v-if="movieStore.selectedMovieImages[0]">
                    <v-img max-height="100vh" width='100wh'
                        :src="`${originalImageUrl}/${movieStore.selectedMovieImages[0].file_path}`" cover
                        class="text-white top-cropped-image" :aspect-ratio="movieStore.selectedMovieImages[0].aspect_ratio">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height bg-dark-1">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                </v-card>

            </v-col>
        </v-row>
        <v-row class=" mx-6 d-flex flex-row justify-space-between">

            <v-col cols="4" v-if="movieStore.selectedMovieImages" class="d-flex w-25 flex-wrap">
                <v-col v-for="image in movieStore.selectedMovieImages.slice(0, 6)" :key="image.file_path" class="d-flex"
                    cols="4">
                    <v-img :src="`${galleryImageUrlBase}${image.file_path}`" aspect-ratio="1" cover
                        class="bg-grey-lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-col>


            <v-col class="d-flex justify-space-between me-8" cols="6" v-if="movieStore.selectedMovieReviews">
                <v-card max-height="35vh" v-for="review in movieStore.selectedMovieReviews.slice(0, 2)" :key="review.id"
                    variant="text" class="ma-4">
                    <v-card-title>{{ review.author }}</v-card-title>
                    <v-card-item>{{ review.content }}</v-card-item>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="movieStore.selectedMovieCast">
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="person in movieStore.selectedMovieCast" :key="person">
                    <v-card variant="text" width="100" class="ma-4">
                        <v-img v-if="person.profile_path" :src="`${galleryImageUrlBase}${person.profile_path}`"
                            max-height="80%"></v-img>
                        <p class="text-center pt-4 text-subtitle">{{ person.name }}</p>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
            <!-- <v-col cols="12" class="d-flex flex-row">
                <v-col v-for="person in castList.slice(0,8)" class="d-flex flex-column px-0 h-75">
                    <v-card variant="text" width="150">
                        <v-img v-if="person.profile_path" :src="`${galleryImageUrlBase}${person.profile_path}`"  
                            max-height="80%"  ></v-img>
                        <p class="text-center pt-4 text-subtitle">{{ person.name }}</p>
                    </v-card>
                </v-col>
            </v-col> -->
        </v-row>

        <v-row v-if="movieStore.selectedMovieSimilar">
            <v-col cols="12" class="py-0">
                <p class="px-10 mx-9">Similar to</p>
                <CarouselMovie :popular-list="movieStore.selectedMovieSimilar" />
            </v-col>
        </v-row>

    </v-container>
</template>
<style scoped>
.teste {
    position: relative;
}

.top-cropped-image {
    object-position: 0% 0%;
    max-width: 100%;
    max-height: 100%;
}

.poster-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%);
    transition: background 0.7s ease;
    z-index: 1;
}

.poster-overlay:hover {
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%);
}

.abacaxi {
    bottom: 90px;
    left: 120px;
    z-index: 9;
    color: white;
}
</style>