<script setup lang="ts">
import router from '../router/index'

const redirectToHome = () => {
    router.push('/home')
}

const redirectToMovies = () => {
    router.push('/movies')
}

const redirectToTvShows = () => {
    router.push('/tvShows')
}

const redirectToFavoritesList = () => {
    router.push('/favorites')
}

</script>
<template>
    <v-app-bar class="bg-dark-1" flat scroll-behavior="hide">
        <v-app-bar-title @click="redirectToHome">Filmio</v-app-bar-title>
        <v-btn @click="redirectToHome">Home</v-btn>
        <v-btn @click="redirectToMovies">Movies</v-btn>
        <v-btn @click="redirectToTvShows">Tv shows</v-btn>
        <v-btn>Popular</v-btn>
        <v-btn @click="redirectToFavoritesList">Favorites</v-btn>
        <v-col cols="3">
            <v-text-field type="text" class="px-4" variant="outlined" hide-details density="compact"
                prepend-inner-icon="mdi-magnify" label="Search" placeholder="Your favorite movie" />
        </v-col>
    </v-app-bar>
</template>