<script setup>
import { servicesData } from '../../../utils/data';
import ServiceCard from '../ServiceCard.vue';
</script>

<template>
    <div class="section relative mt-20 pb-8 md:pt-16 md:pb-0">
        <div class="container xl:max-w-6xl mx-auto px-4">
            <!-- Heading start -->
            <header class="text-center mx-auto mb-12 lg:px-20">
                <h2 class="text-4xl leading-normal mb-2 font-extrabold text-black">Servicios</h2>
                <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                    Nos especializamos en una amplia gama de servicios arquitectónicos 
                    para satisfacer todas tus necesidades de diseño. Desde la creación 
                    de espacios exteriores, la transformación de 
                    interiores, remodelaciones y la elaboración de planos detallados, 
                    damos vida a tus ideas con un enfoque de excelencia y de innovación.
                </p>
            </header>
            <!-- End heading -->
            <!-- row -->
            <div class="flex flex-wrap flex-row -mx-4 text-center">
                <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " v-for="service in servicesData()" :key="service.title">
                    <ServiceCard :service="service"/>
                </div>
            </div>
            <!-- end row -->
        </div>
    </div>
</template>
