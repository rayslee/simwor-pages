<template>
  <Head/>
  <hr/>
  <BookList/>
</template>

<script>
import Head from './components/Head.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    Head, BookList
  }
}
</script>
