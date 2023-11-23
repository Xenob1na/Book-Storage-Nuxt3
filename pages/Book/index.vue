<template>
    <div>
        <BookHead />
        <div v-if="isBook" class="max-w-[1300px] mx-auto grid grid-cols-3 gap-3 mt-[100px] mb-[100px]">
            <Book v-for="book in books" :key="book" :book="book" />
        </div>
        <div v-else>
            <client-only>
                <div v-if="isLoading" class="mt-20 mb-20 w-full flex items-center justify-center mx-auto">
                    <div class="text-black font-inter">Loading...</div>
                </div>
                <div v-if="!isLoading" class="mt-20 mb-20 w-full flex items-center justify-center mx-auto">
                    <div class="text-black font-inter">No books</div>
                </div>
            </client-only>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Book Storage',
})

import { useBookStore } from '../../stores/Book'
const useBook = useBookStore()

let books = ref([])
let isBook = ref(false)
let isLoading = ref(false)

onBeforeMount(async () => {
    try {
        isLoading.value = true
        await useBook.getAllBooks()
        isLoading.value = false
    } catch (error) {
        console.log(error)
    }
})

onMounted(() => {
    watchEffect(() => {
        books.value = useBook.books
        if (useBook.books && useBook.books.length >= 1) {
            isBook.value = true
        } else {
            isBook.value = false
        }
    })
})





</script>