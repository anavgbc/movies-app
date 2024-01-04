
<script setup lang="ts">
import router from '../../../router';


 defineProps(['movie', 'selectedClass', 'toggle'])

const redirectToDetails = (movie) => {
    let isMovie: boolean;

    movie.first_air_date ? isMovie = false : isMovie = true;

    isMovie ? router.push(`/details/${movie.id}/movie`) : router.push(`/details/${movie.id}/tvshow`);

}

const imageUrlBase = 'http://image.tmdb.org/t/p/w300';

</script>

<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <v-card :class="['ma-4', selectedClass, 'sssss']" height="200" width="140" v-if="movie.backdrop_path"
                :elevation="isHovering ? 12 : 2" @click="redirectToDetails(movie)">
                <v-card-item class="w-100 h-100 px-0">
                    <v-img :src="`${imageUrlBase}${movie.poster_path}`" cover min-width="100%" height="200" class="px-0" />
                </v-card-item>
            </v-card>
        </template>
    </v-hover>
</template>

<style>
.sssss:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;

}
</style>