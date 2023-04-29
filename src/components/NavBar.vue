<template>
  <div class="nav">
    <h1>Readings</h1>
    <h1>New Card</h1>
    <h1>Random Card</h1>
    <h1>Major Arcana</h1>
    <h1>Minor Arcana</h1>
  </div>
</template>

<script>
  export default {
    name: 'Nav-bar',
    props: { 
      msg: String
    }
  }
</script>

<style lang="scss" scoped>
  .nav{
    background-color: green;
  }
</style>