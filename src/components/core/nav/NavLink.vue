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
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-green-900 text-sm font-medium leading-5 text-green-900 focus:outline-none focus:border-green-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-green-900 hover:border-green-700 focus:outline-none focus:text-green-900 focus:border-green-700 transition duration-150 ease-in-out'
);
</script>

<template>
    <a :href="href" :class="classes">
        <slot />
    </a>
</template>


