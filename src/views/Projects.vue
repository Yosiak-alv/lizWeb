<script setup>
import { projectsData } from '../utils/data';
import CardProject from '../components/projects/CardProject.vue';

</script>
<template>
    <div class="mt-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg text-gray-500 sm:text-lg ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold  text-gray-900">Mis Proyectos</h2>
            <p class="mb-4 font-light">
                Aquí encontrarás algunos de los proyectos en los que he trabajado. 
                Si deseas saber más sobre alguno de ellos, no dudes en contactarme.
            </p>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-2">    
            <CardProject v-for="project in projectsData()" :key="project.id" :project="project" />
        </div>
    </div>
</template>