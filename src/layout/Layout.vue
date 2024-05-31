<script setup>
import NavBar from '../components/core/nav/NavBar.vue';
import Footer from '../components/core/Footer.vue';
</script>

<template>
    <div class="mx-auto">
        <!-- Navigation -->
        <NavBar />
        <!-- Page Content -->
        <main>
            <slot />
        </main>
        <!-- Footer -->
        <Footer class="max-w-screen-2xl"/>
    </div>
</template>