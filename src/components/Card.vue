<template>
<div class="card carx">
  <img :src="card.image" class="card-img-top carx" alt="Card Image" style="width: 18rem;" />
  <div class="card-body">
    <h4 class="card-text" style="background-color: white">{{ card.name }}</h4>
    <a href="#" class="btn btn-primary"></a>
  </div>
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
