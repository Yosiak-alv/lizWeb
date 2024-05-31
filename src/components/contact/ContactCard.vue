<script setup>
const props = defineProps({
    contact: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="group flex flex-col items-center gap-3 px-8 py-10 bg-white shadow-main transform transition duration-300 ease-in-out hover:-translate-y-2"
        :class="{'sm:col-span-2' : props.contact.title == 'Ubicacion'}">
        <img :src="props.contact.icon" alt="icon" class="w-6 h-6">
        <p class="text-2xl font-extrabold text-dark-grey-900">{{props.contact.title}}</p>
        <p class="text-base leading-7 text-dark-grey-600">{{props.contact.description}}</p>
        <a v-if="props.contact.href" class="text-slate-900 group-hover:text-green-600 font-bold" :href="props.contact.href" target="_blank">{{props.contact.hrefContent}}</a>
        <p v-else class="text-slate-900 group-hover:text-green-600 text-lg font-bold">{{props.contact.hrefContent}}</p>
    </div>
</template>