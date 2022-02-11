<template>
  <Book/>
  <h1>{{books}}</h1>
</template>

<script>
import Book from './Book.vue'
import { useStore } from 'vuex'

export default {
  name: "BookList",
  components: {Book},
  setup() {
    const store = useStore()
    let books = store.dispatch('home/queryBooksByTitle')
    console.log(books)

    return { books }
  }
}
</script>
