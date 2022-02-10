<template>
  <Book/>
  <h1>{{books}}</h1>
</template>

<script>
import axios from 'axios'
import Book from './Book.vue'

export default {
  name: "BookList",
  components: {Book},
  setup() {
    let books = null

    axios.get("http://localhost:8080/booker/api/booker/query-books-by-title?title=项塔兰").then(
      response => {
        this.books = response.data
        // console.log(books)
      },
      error => {
        console.log('请求失败了 ', error.message)
      }
    )

    console.log(books)

    return {books}
  }
}
</script>

<style>
</style>