<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="bg-white shadow m-4 mx-auto">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-900">&copy; {{currentYear}} Liz Alvarenga. All Rights Reserved.
            </span>
            <p class="mt-4  text-sm text-gray-800 lg:mt-0 lg:text-right">
                Made By 
                <a
                    href="https://yosiak-alv.github.io/portfolio-v2/"
                    target="_blank"
                    class="text-green-900"
                >
                    Josias Alvarenga
                </a> 
            </p>
        </div>
    </footer>
</template>