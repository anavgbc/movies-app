<script setup lang="ts">
import { ref } from 'vue';
import MovieCard from './MovieCard.vue';

const model = ref();

defineProps(['popularList'])

</script>
<template>
    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="movie in popularList" :key="movie.id" v-slot="{ selectedClass }">
            <MovieCard :movie="movie" :selected-class="selectedClass"   />
        </v-slide-group-item>
    </v-slide-group>
</template>