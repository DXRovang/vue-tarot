<template>
  <div>
    <img :src="card.image" alt="Card Image" />
    <h2>{{card.name}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'One-Card',
    props: { 
      card: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>