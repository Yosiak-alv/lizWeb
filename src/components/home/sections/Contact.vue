<script setup>
import { contactData } from '../../../utils/data';
import ContactCard from '../../contact/ContactCard.vue';
</script>

<template>
    <section>
        <div class="flex flex-col items-center gap-16 mx-auto my-12">
            <div class="mx-auto max-w-screen-sm text-center ">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Mantengamos el Contacto</h2>
            </div> 
            <div class="container flex flex-col items-center gap-16 mx-auto ">
                <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"> 
                    <ContactCard v-for="contact in contactData()" :key="contact.id" :contact="contact" />
                </div>              
            </div>   
        </div>
    </section> 
</template>