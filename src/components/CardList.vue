<template>
  <div>
     <Card v-for="card in cards" 
     :key="card.id" 
     :card="card"/>
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
      cards: Array
    }
  }
</script>

<style lang="scss" scoped>

</style>