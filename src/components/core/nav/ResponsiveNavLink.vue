<script setup>
import { computed } from 'vue';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'block w-full pl-3 pr-4 py-2 border-l-4 border-gray-600 text-left text-base font-medium text-gray-200 bg-gray-900/50 focus:outline-none focus:text-gray-200 focus:bg-gray-900 focus:border-gray-300 transition duration-150 ease-in-out'
        : 'block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-400 hover:border-gray-600 focus:outline-none focus:text-gray-200 focus:bg-gray-400 focus:border-gray-600 transition duration-150 ease-in-out'
);
</script>

<template>  
    <a :href="href" :class="classes">
        <slot />
    </a>
</template>
