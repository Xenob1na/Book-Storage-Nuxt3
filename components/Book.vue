<template>
    <div>
        <!-- <div class="bg-[#d8e6ff] max-w-[400px]">
            <img :src="book.img" alt="book" class="py-8">
        </div>
        <div class="max-w-[400px] mx-auto mt-5 mb-6">
            <h4 class="text-[#1B3764] text-[28px] font-bold leading-[120%] font-cardo">{{ book.title }}</h4>
            <p class="text-[18px] text-[#969AA0] font-normal leading-[180%]">{{ book.description }}</p>
        </div>
        <div>
            <nuxt-link :to="`/Book/${book.id}`">
                <button
                    class="bg-[#FFCA42] py-[20px] px-[53px] text-[#1B3764] text-[19px] font-medium leading-[125%] hover:bg-white hover:border-[#FFCA42] border border-[#FFCA42] hover:text-[#1B3764] font-cardo">
                    Book Read
                </button>
            </nuxt-link>
        </div> -->
        {{ book }}
    </div>
</template>

<script setup>
const props = defineProps({
    book: Object
})

</script>