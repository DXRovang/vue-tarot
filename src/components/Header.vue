<template>
  <div>
    <h1 class="title" style="font-size: 200px">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: "the-Header",
    props: {
      title: String
    }
    
  }
</script>

<style lang="scss" scoped>

</style>