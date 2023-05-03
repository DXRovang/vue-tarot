<template>
<div class="cardx" >
  <img :src="card.image"  alt="Card Image" class="cardx-img-top" />
  <div >
    <h4  style="background-color: white">{{ card.name }}</h4>
    <a href="#" ></a>
  </div>
</div>
</template>

<script>
// <div class="card" style="width: 13vw">
//   <img :src="card.image" class="card-img-top" alt="Card Image" style="width: 18rem; margin: auto;" />
//   <div class="card-body col-auto mb-3">
//     <h4 class="card-text" style="background-color: white">{{ card.name }}</h4>
//     <a href="#" class="btn btn-primary"></a>
//   </div>
// </div>
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
 .cardx{
  border-style: solid;
  border-width: 2px;
  border-color: black;
  margin: 10px;
  padding: 2px;
  float: left;
 }
 .cardx-img-top {
    width: 15vw;
    height: 40vh;
    object-fit: cover;
}
</style>

