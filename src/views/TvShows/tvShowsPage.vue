 
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useTvShowStore } from '../../store';
import { token } from '../../utils/token';

import CarouselMovie from '../Home/components/CarouselMovie.vue';
import { TvShowService } from '../../services/TvShowService';

const tvShowStore = useTvShowStore();
const isLoading = ref<boolean>();
const toggleLoading = () => (isLoading.value = !isLoading.value);

const tvShowService = new TvShowService(token);

onBeforeMount(async () => {
    if (!tvShowStore.popularTvShows) {
        toggleLoading();
        const popularTvShows = await tvShowService.listPopularShows();
        const topRatedTvShows = await tvShowService.listTopRatedShows();

        tvShowStore.setPopularTvShows(popularTvShows.results);
        tvShowStore.setTopRatedTvShows(topRatedTvShows.results);
        toggleLoading();
    }
})
</script>
 
<template>
    <v-container style="max-width: 100%;" class="fluid w-100 mx-0 px-0 h-screen py-0">
        <v-row class="teste">
            <!-- <v-col cols="12" class="py-0">
                <PosterCarousel :movie-list="homeShape" />
            </v-col> -->
        </v-row>
        <v-row v-if="tvShowStore.popularTvShows">
            <v-col cols="12" class="pt-9">
                <p class="px-10 mx-9">Popular movies</p>
                <CarouselMovie :popular-list="tvShowStore.popularTvShows" />
            </v-col>
        </v-row>
        <v-row v-if="tvShowStore.topRatedTvShows">
            <v-col cols="12" class="pt-9">
                <p class="px-10 mx-9">Top rated movies</p>
                <CarouselMovie :popular-list="tvShowStore.topRatedTvShows" />
            </v-col>
        </v-row>
    </v-container>
</template>
 
<style>

</style>