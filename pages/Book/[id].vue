<template>
    <div class="max-w-[900px] mx-auto mt-10 h-full w-full">
        <div class="flex justify-between mb-[280px]">
            <div class="bg-[#d8e6ff] max-w-[300px]">
                <img :src="book.formats['image/jpeg']" alt="" class="py-8 px-8 w-[300px]">
            </div>
            <div>
                <h4 class="text-[#1B3764] text-[28px] font-bold leading-[120%] font-cardo line-clamp-1">{{ book.title }}
                </h4>
                <p class="text-[#969AA0] text-[22px] font-normal leading-[120%] font-cardo mt-3">Author: {{
                    book.authors[0].name
                }} ({{ book.authors[0].birth_year }}-{{ book.authors[0].death_year }})</p>
                <p class="text-[#969AA0] text-[22px] font-normal leading-[120%] font-cardo mt-3">Language: {{
                    book.languages[0]
                }}</p>
                <p class="text-[#969AA0] text-[22px] font-normal leading-[120%] font-cardo mt-3">Bookshelves: {{
                    book.bookshelves[0] }},{{ book.bookshelves[1] }}</p>
                <p class="text-[#969AA0] text-[22px] font-normal leading-[120%] font-cardo mt-3">Download Count: {{
                    book.download_count }}</p>
                <div>
                    <nuxt-link :to="book.formats['text/html']">
                        <button
                            class="bg-[#FFCA42] py-[20px] px-[53px] text-[#1B3764] text-[19px] font-medium leading-[125%] hover:bg-white hover:border-[#FFCA42] border border-[#FFCA42] hover:text-[#1B3764] font-cardo mt-8">
                            Book Read
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { id } = useRoute().params

const { data: book } = await useFetch(`https://gutendex.com/books/${id}/`)
</script>