<script setup lang="ts">
import PosterCard from './PosterCard.vue';
//TODO: adicionar tipagem de movieList
defineProps(['movieList'])
</script>

<template>
    <v-carousel :show-arrows="false" hide-delimiter-background height="100%" continuous color="text-secondary"
        class="teste">
        <v-carousel-item v-for="(movie, i) in movieList" :key="i" :src="movie.img" cover max-height="100vh"
            class="movie-poster" height="100vh">
            <div class="poster-overlay" />
            <PosterCard :movie="movie" />
        </v-carousel-item>
    </v-carousel>
</template>

<style>
.poster-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    transition:  background 0.7s ease;
}
.poster-overlay:hover {
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%);
}
</style>