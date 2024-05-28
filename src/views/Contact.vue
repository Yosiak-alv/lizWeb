<script setup>
import { computed } from 'vue';
import { contactData } from '../utils/data';
import InputLabel from '../components/core/form/InputLabel.vue';
import TextInput from '../components/core/form/TextInput.vue';
import TextAreaInput from '../components/core/form/TextAreaInput.vue';
import PrimaryButton from '../components/core/PrimaryButton.vue';
import ContactCard from '../components/contact/ContactCard.vue';

const slicedContactData = computed(() => {
  return contactData().slice(0, 4);
});
</script>

<template>
    <div class="mt-20 lg:py-8 px-4 mx-auto max-w-screen-sm">
        <h2 class="mb-4 mt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contáctame</h2>
        <p class="mb-2 font-light text-center text-gray-500 sm:text-xl">
            ¿Tienes alguna pregunta o quieres trabajar conmigo? ¡Estoy aquí para ayudarte!
        </p>
        <form action="https://app.formbold.com/s/60lj1" method="POST" class="space-y-2">
            <div>
                <InputLabel value="Tu Correo:" for="email" />
                <TextInput id="email" name="email" type="email" placeholder="nombre@example.com" required/>
                <!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tu Correo:</label>
                <input name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="email@example.com" required> -->
            </div>
            <div>
                <InputLabel value="Asunto:" for="subject" />
                <TextInput id="subject" name="subject" type="text" placeholder="Dime como puedo ayudarte" required/>
                <!-- <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Asunto:</label>
                <input name="subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Dime como puedo ayudarte" required> -->
            </div>
            <div class="sm:col-span-2">
                <InputLabel value="Tu Mensaje:" for="message" />
                <TextAreaInput id="message" name="message" rows="2" placeholder="Escribe un Mensaje..."/>
                <!-- <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Tu Mensaje:</label>
                <textarea name="message" id="message" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Escribe un Mensaje..."></textarea> -->
            </div>
            <PrimaryButton type="submit" class="w-full">Enviar</PrimaryButton>
        </form>
    </div>
    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"> 
        <ContactCard v-for="contact in slicedContactData" :key="contact.id" :contact="contact" />
    </div>                
</template>