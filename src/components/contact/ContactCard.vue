<script setup>
const props = defineProps({
    contact: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <a class="flex flex-col items-center gap-3 px-8 py-10 bg-white shadow-main transform transition duration-300 ease-in-out hover:-translate-y-2 hover:text-green-600"
    v-if="props.contact.href" :href="props.contact.href" target="_blank">
        <img :src="props.contact.icon" alt="icon" class="w-6 h-6">
        <p class="text-2xl font-extrabold text-dark-grey-900">{{props.contact.title}}</p>
        <p class="text-base leading-7 text-dark-grey-600">{{props.contact.description}}</p>
        <p class="text-lg font-bold">{{props.contact.hrefContent}}</p>
    </a>
    <div v-else class="flex flex-col items-center gap-3 px-8 py-10 bg-white shadow-main transform transition duration-300 ease-in-out hover:-translate-y-2 col-span-2 hover:text-green-600">
        <img :src="props.contact.icon" alt="icon" class="w-6 h-6">
        <p class="text-2xl font-extrabold text-dark-grey-900">{{props.contact.title}}</p>
        <p class="text-base leading-7 text-dark-grey-600">{{props.contact.description}}</p>
        <p class="text-lg font-bold">{{props.contact.hrefContent}}</p>
    </div>
</template>