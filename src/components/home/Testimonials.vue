<script setup>

const testimonials = [
    {
        id: 1,
        name: 'Jane Doe',
        title: 'Product Designer',
        image: 'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp',
        content: 'LLorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.'
    },
    {
        id: 2,
        name: 'John Doe',
        title: 'Product Manager',
        image: 'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.'
    },
    {
        id: 3,
        name: 'John Doe',
        title: 'Product Manager',
        image: 'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.'
    }
]
</script>

<template>
    <div class="py-16">  
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">Nuestros Clientes</h2>
            <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2" >
                <div v-for="(testimonial, index) in testimonials" :key="testimonial.id" 
                    :class="['p-6 border border-gray-100 bg-gray-50 text-center sm:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2', { 'row-span-2': index === 0 }]">
                    <div class="h-full flex flex-col justify-center space-y-4">
                        <img class="w-20 h-20 mx-auto rounded-full" :src="testimonial.image" alt="user avatar" height="220" width="220" loading="lazy">
                        <p class="text-gray-600 md:text-xl"> <span class="font-serif">"
                        </span> 
                        {{ testimonial.content }}
                        <span class="font-serif">"</span></p>
                        <div>
                            <h6 class="text-lg font-semibold leading-none">{{testimonial.name}}</h6>
                            <span class="text-xs text-gray-500">{{testimonial.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>