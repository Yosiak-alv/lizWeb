<script setup>
import NavBar from './components/nav/NavBar.vue';
import Hero from './sections/Hero.vue';
import Services from './sections/Services.vue';
import Contact from './sections/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <Hero id="inicio" />
  <Services id="servicios"/>
  <Contact id="contactanos"/>
  <Footer class="max-w-screen-2xl"/>
</template>