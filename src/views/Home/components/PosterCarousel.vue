<script setup lang="ts">
import PosterCard from './PosterCard.vue';
//TODO: adicionar tipagem de movieList
defineProps(['movieList'])
</script>

<template>
    <v-carousel :show-arrows="false" hide-delimiter-background height="100%" continuous cycle color="text-secondary">
        <v-carousel-item v-for="(movie, i) in movieList" :key="i" :src="movie.img" cover max-height="100vh"
            class="movie-poster" height="100vh">
            <PosterCard :movie="movie"/>
        </v-carousel-item>
    </v-carousel>
</template>