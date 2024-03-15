<script setup>

</script>

<template>
    <section class="pt-4 services-section">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-xl mb-8 lg:mb-16 text-center mx-auto" v-motion-slide-visible-bottom>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Servicios</h2>
                <p class="text-gray-600 sm:text-xl ">
                    Nos especializamos en una amplia gama de servicios arquitectónicos 
                    para satisfacer todas tus necesidades de diseño. Desde la creación 
                    de espacios exteriores, la transformación de 
                    interiores, remodelaciones y la elaboración de planos detallados, 
                    damos vida a tus ideas con un enfoque de excelencia y de innovación.
                </p>
            </div>
            <!-- Service 1 -->
            <div>
                <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img class="w-full block aspect-square  " src="../assets/planos1.jpg" alt="plano 1" v-motion-slide-visible-left>
                    <div class="mt-4 md:mt-0 backdrop-blur-lg bg-white/30" v-motion-slide-visible-left>
                        <div class="p-5">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Elaboración de planos arquitectónicos.</h2>
                            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">
                            Planos, detalles constructivos, trámites y permisos para cualquier tipo de proyectos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             <!-- Service 2 -->
             <div>
                <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div class="mt-4 md:mt-0 backdrop-blur-lg bg-white/30" v-motion-slide-visible-right>
                        <div class="p-5">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Desarrollo arquitectónico.</h2>
                            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">
                                Desarrollo arquitectónico para ambientes interiores y exteriores con materiales de alta calidad.
                            </p>
                        </div>
                    </div>
                    <img class="w-full block aspect-square mt-4" src="../assets/interior1.jpg" alt="interior 1" v-motion-slide-visible-right>
                </div>
            </div>
            <!-- Service 3 -->
            <div>
                <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img class="w-full block aspect-square" src="../assets/nave1.jpg" alt="interior 2" v-motion-slide-visible-left>
                    <div class="mt-4 md:mt-0 backdrop-blur-lg bg-white/30" v-motion-slide-visible-left>
                        <div class="p-5">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Desarrollo de proyectos industriales.</h2>
                            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">
                                Naves industriales, plantas, parques industriales y parques de servicios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .services-section {
        /* https://archello.s3.eu-central-1.amazonaws.com/images/2022/04/29/ae-arquitectos-casa-jm-private-houses-archello.1651188091.1451.jpg */
        background: url('../assets/backgroundServices1.jpg') no-repeat center center;
    }
</style>