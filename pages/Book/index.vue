<template>
    <div>
        <BookHead />
        <div v-if="isBook" class="max-w-[1300px] mx-auto grid grid-cols-3 gap-3 mt-[100px] mb-[100px]">
            <Book v-for="book in books" :key="book" :book="book"/>
        </div>
        <div v-else>
            <div v-if="isLoading" class="mt-20 w-full flex items-center justify-center mx-auto">
                <div class="text-black font-inter">Loading...</div>
            </div>
        </div>
    </div>
</template>

<script setup>
let books = ref([])
let isBook = ref(true)
let isLoading = ref(false)


onBeforeMount(() => {
    books.value = [
        {
            id: 1,
            img: '/Book.png',
            title: 'The Atomic One’s',
            description: 'Making this the first true generator on the Internet.'
        },
        {
            id: 2,
            img: '/Book.png',
            title: 'The Atomic One’s',
            description: 'Making this the first true generator on the Internet.'
        },
        {
            id: 3,
            img: '/Book.png',
            title: 'The Atomic One’s',
            description: 'Making this the first true generator on the Internet.'
        }
    ]
})
</script>