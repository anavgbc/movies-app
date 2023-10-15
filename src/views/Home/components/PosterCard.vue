<script setup lang="ts">
defineProps({
    movie: {
        type: Object,
        required: true
    }
})


</script>

<template>
    <v-card variant="text" class="w-50 movie-poster--card h-50" position="absolute">
        <v-card-item>
            <v-card-title>
                <h2 class="text-h1 font-weight-medium h-75">{{ movie.movie }} </h2>
            </v-card-title>
            <v-card-item class="py-0 my-0">
                <span class="d-flex flex-row w-50" style="gap: 5px">
                    <p>{{ movie.year }} | </p>
                    <p>{{ movie.range }} | </p>
                    <p>{{ movie.genre }} | </p>
                    <p>{{ movie.duration }}min</p>
                </span>
            </v-card-item>
        </v-card-item>
        <v-card-item class="w-75 text-justify">
            <v-card-text class="py-0 my-0">{{ movie.about }}
            </v-card-text>
        </v-card-item>
        <v-card-item class="py-0 my-0 px-7">
            <v-btn variant="elevated" class="bg-dark-1" prepend-icon="mdi-play">
                Play
            </v-btn>
            <v-btn variant="text" prepend-icon="mdi-heart-outline" class="ms-3" :ripple="false" />
        </v-card-item>
    </v-card>
</template>