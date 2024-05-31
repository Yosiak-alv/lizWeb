<script setup>
import { computed, ref } from 'vue';
import { contactData } from '../utils/data';
import { ContactSchema } from '../utils/schema';
import { useForm } from 'vee-validate';
import { useToast } from 'vue-toastification';

import InputLabel from '../components/core/form/InputLabel.vue';
import InputError from '../components/core/form/InputError.vue';
import TextInput from '../components/core/form/TextInput.vue';
import TextAreaInput from '../components/core/form/TextAreaInput.vue';

import PrimaryButton from '../components/core/PrimaryButton.vue';
import ContactCard from '../components/contact/ContactCard.vue';

const slicedContactData = computed(() => {
  return contactData().slice(0, 4);
});

const { errors, handleSubmit, defineField, resetForm } = useForm({
    validationSchema: ContactSchema,
});

const [email, emailAttrs] = defineField('email');
const [subject, subjectAttrs] = defineField('subject');
const [message, messageAttrs] = defineField('message');
const toast = useToast();

const onSubmit = handleSubmit(async(values) => {
    try {
        const response = await fetch('https://app.formbold.com/s/60lj1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (response.ok) {
            toast.success('Gracias Por Contactarme, Pronto nos Comunicaremos!');
            resetForm();
        } else {
            toast.error('Ocurrió un error al enviar el formulario, Intente de Nuevo.');
        }
    } catch (error) {
        toast.error('Ocurrió un error al enviar el formulario, Intente mas Tarde.');
    }
});

</script>

<template>
    <div class="mt-20 lg:py-8 px-4 mx-auto max-w-screen-sm" v-motion-slide-visible-once-bottom>
        <h2 class="mb-4 mt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contáctame</h2>
        <p class="mb-2 font-light text-center text-gray-500 sm:text-xl">
            ¿Tienes alguna pregunta o quieres trabajar conmigo? ¡Estoy aquí para ayudarte!
        </p>
        <form @submit="onSubmit" class="space-y-2">
            <div>
                <InputLabel value="Tu Correo:" for="email" />
                <TextInput id="email" name="email" type="email" v-model="email" v-bind="emailAttrs" placeholder="nombre@example.com" required/>
                <InputError class="mt-2" :message="errors.email" />
            </div>
            <div>
                <InputLabel value="Asunto:" for="subject" />
                <TextInput id="subject" name="subject" type="text" v-model="subject" v-bind="subjectAttrs" placeholder="Dime como puedo ayudarte" required/>
                <InputError class="mt-2" :message="errors.subject" />
            </div>
            <div class="sm:col-span-2">
                <InputLabel value="Tu Mensaje:" for="message" />
                <TextAreaInput id="message" name="message" rows="2" v-model="message" v-bind="messageAttrs" placeholder="Escribe un Mensaje..." required/>
                <InputError class="mt-2" :message="errors.message" />
            </div>
            <PrimaryButton type="submit" class="w-full">Enviar</PrimaryButton>
        </form>
    </div>
    <div class="container flex flex-col items-center gap-16 mx-auto mt-4" v-motion-slide-visible-once-bottom>
        <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"> 
            <ContactCard v-for="contact in slicedContactData" :key="contact.id" :contact="contact" />
        </div>   
    </div>
                
</template>