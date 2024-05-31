<template>
    <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">{{service.title}}</h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg text-justify">
           {{service.description}}
        </p>
    </div>
</template>

<script setup>
const { service } =  defineProps({
    service: {
        type: Object,
        required: true
    }
});
</script>