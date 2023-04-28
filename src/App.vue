<template>
  <NavBar msg="Your Navbar"/>
  <CardList msg="This is a CardList"/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CardList
  },
  data(){
    return {
      cards: []
    }
  },
  methods: {
    async fetchCards(){
      const res = await fetch('https://raw.githubusercontent.com/DXRovang/tarot-trove-frontend/main/src/cards.json')
      const data = await res.json()
      console.log(data)
      this.cards = data
    }
  },
  async created(){
    this.cards = await this.fetchCards()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
