<template>
  <div>
   <p>{{ msg }}</p>
   <Card msg="I am a Card"/>
  </div>
</template>

<script>
  import Card from './Card.vue'
  export default {
    name: 'CardList',
    components: {
      Card
    },
    props: { 
      msg: String
    }
  }
</script>

<style lang="scss" scoped>

</style>