<template>
    <div>
        <div class="bg-[#d8e6ff] max-w-[300px]">
            <img :src="book.images" alt="book" class="py-8 px-8 w-[300px]">
        </div>
        <div class="max-w-[300px] mt-5 mb-6">
            <h4 class="text-[#1B3764] text-[28px] font-bold leading-[120%] font-cardo line-clamp-1">{{ book.title }}</h4>
        </div>
        <div>
            <nuxt-link :to="`/Book/${book.id}`">
                <button
                    class="bg-[#FFCA42] py-[20px] px-[53px] text-[#1B3764] text-[19px] font-medium leading-[125%] hover:bg-white hover:border-[#FFCA42] border border-[#FFCA42] hover:text-[#1B3764] font-cardo">
                    Book Read
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    book: Object
})

</script>