<template>
<div style="background-color: darkslategray">
  <NavBar msg="Your Navbar"/>
  <Header title="the Tarot Trove"/>
  </div>
  <router-view></router-view>

</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Header
    
  },
  
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 100px;

}
</style>
