<script setup lang="ts">
import PosterCarousel from './components/PosterCarousel.vue'
import { homeShape } from '../../utils/home';

console.log('oi')
</script>

<template>
    <v-container style="max-width: 100%;" class="fluid w-100 mx-0 px-0 h-screen py-0">
        <v-row>
            <v-col cols="12" class="py-0">
                <PosterCarousel :movie-list="homeShape"/>
            </v-col>
        </v-row>
    </v-container>

    
</template>

<style>
.movie-poster {
    position: relative;
}

.movie-poster--card {
    /* font-family: 'IBM Plex Sans Arabic', sans-serif; */
    font-family: 'Urbanist', sans-serif;
    bottom: 20px;
    left: 120px;
}
</style>