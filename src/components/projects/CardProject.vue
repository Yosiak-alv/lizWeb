<script setup>
    const props = defineProps({
        project: Object,
        required: true
    });
</script>

<template>
    <div class="max-w-sm bg-white border shadow">
        <a href="#">
            <img :src="props.project.image" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{project.title}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">
                {{project.description}}
            </p>
        </div>
    </div>
</template>