import { defineStore } from "pinia";

export const useBookStore = defineStore('Book', {
    state: () => ({
        books: [],
    }),

    actions: {
        async getAllBooks() {
            let res = await useFetch('/api/book')
            this.books = res.data
            return res.data
        }
    }
})