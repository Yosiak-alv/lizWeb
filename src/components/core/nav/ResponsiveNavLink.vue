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
        ? 'block w-full pl-3 pr-4 py-2 border-l-4 border-green-600 text-left text-base font-medium text-green-200 bg-green-900/50 focus:outline-none focus:text-green-200 focus:bg-green-900 focus:border-green-300 transition duration-150 ease-in-out'
        : 'block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-400 hover:border-gray-600 focus:outline-none focus:text-gray-200 focus:bg-gray-400 focus:border-gray-600 transition duration-150 ease-in-out'
);
</script>

<template>  
   <button @click="handleClick()" :class="classes">
        <slot />
    </button>
</template>
