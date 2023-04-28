<template>
  <div class="nav">
    <h1>{{ msg }}</h1>
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