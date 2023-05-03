<template>
  <MajorArcana :cards="cards.cards"/>
</template>


<script>
import MajorArcana from '../components/MajorArcana'
  export default {
    name: 'MajorArcanaView',
    components: {
      MajorArcana
    },
      data(){
    return {
      cards: [],
    }
  }
  ,
  methods: {
    async fetchCards(){
      const res = await fetch('https://raw.githubusercontent.com/DXRovang/tarot-trove-frontend/main/src/cards.json')
      const data = await res.json()
      this.cards = data
    }
  },
  async created(){
    this.cards = await this.fetchCards()
  }
  }
</script>

<style lang="scss" scoped>

</style>