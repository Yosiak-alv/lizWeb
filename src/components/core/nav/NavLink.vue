<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const handleClick = () => {
    router.push(props.href);
};

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-green-600 text-sm font-medium leading-5 text-green-600 focus:outline-none focus:border-green-600 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-green-600 hover:border-green-600 focus:outline-none focus:text-green-700 focus:border-green-700 transition duration-150 ease-in-out'
);
</script>

<template>
     <button @click="handleClick()" :class="classes">
        <slot />
    </button>
</template>


