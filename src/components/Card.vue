<template>

  <div class="card">
 <img :src="card.image" alt="Card Image" style="width: 18rem;"/>
  <div class="card-body">
   
    <p class="card-text">{{ card.name }}</p>
    <a href="#" class="btn btn-primary"></a>
  </div></div>



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


