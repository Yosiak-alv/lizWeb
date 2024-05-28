<script setup>
const props = defineProps({
    service:{
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div class="inline-block text-gray-900 mb-4">
            <!-- icon -->
            <img :src="props.service.icon" alt="icon" class="w-12 h-12">
        </div>
        <h3 class="text-lg leading-normal mb-2 font-semibold text-black">{{props.service.title}}</h3>
        <p class="text-gray-500">{{props.service.description}}</p>
    </div>
</template>