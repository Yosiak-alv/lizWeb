<script setup>

const props = defineProps({
    title: String,
    description: String,
    href: String,
    hrefContent: String
});
</script>


<template>
    <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white  shadow-main">
        <span>
            <slot/>
        </span>
        <p class="text-2xl font-extrabold text-dark-grey-900">{{props.title}}</p>
        <p class="text-base leading-7 text-dark-grey-600">{{props.description}}</p>
        <a v-if="props.href" class="text-lg font-bold hover:text-green-900" :href="props.href" target="_blank">{{props.hrefContent}}</a>
        <p v-else class="text-lg font-bold">{{props.hrefContent}}</p>
    </div>
</template>