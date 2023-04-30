<template>
<div>
   <div class="card-group"  style="margin: 20px">
    <Card v-for="card in cards.slice(0,1)" 
     :key="card.id" 
     :card="card"/>
     </div>
  <div class="card-group" style="margin: 20px">
     <Card v-for="card in cards.slice(1,8)" 
     :key="card.id" 
     :card="card"/>
 </div>
 <div class="card-group" style="margin: 20px">
    <Card v-for="card in cards.slice(8,15)" 
     :key="card.id" 
     :card="card"/>
     </div>
  <div class="card-group" style="margin: 20px">
    <Card v-for="card in cards.slice(15,22)" 
     :key="card.id" 
     :card="card"/>
     </div>
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
      cards: Array,
    }
  }
</script>

<style lang="scss" scoped>

</style>