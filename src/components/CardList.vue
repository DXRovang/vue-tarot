<template>
  <div>
   <p>{{ msg }}</p>
   <ul>
     <li v-for="card in cards" 
     :key="card.id">
     {{ card.name }}>
     </li>
  </ul>
  
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
      msg: String,
      cards: Array
    }
  }
</script>

<style lang="scss" scoped>

</style>