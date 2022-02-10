<template>
  <h1>Simwor</h1>
  <h2>Make this a simple world.</h2>
  <button>Bookcase</button>
  <input type="text" placeholder="Search" @input="onTyping" @keydown.enter="queryBooks">
</template>

<script>
export default {
  name: 'Book',
  setup() {
    function onTyping(e) {
      console.log(e.target.value)
    }

    function queryBooks(e) {
      console.log(e.target.value)
      e.srcElement.value = ''
      e.srcElement.blur()
    }

    return { onTyping, queryBooks }
  }
}
</script>
