<script setup>
import NavBar from '../components/core/nav/NavBar.vue';
import Footer from '../components/core/Footer.vue';
</script>

<template>
    <div class="mx-auto max-w-screen-2xl">
        <!-- Navigation -->
        <NavBar />
        <!-- Page Content -->
        <main>
            <slot />
        </main>
        <!-- Footer -->
        <Footer />
    </div>
</template>