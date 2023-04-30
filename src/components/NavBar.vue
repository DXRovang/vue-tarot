<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: darkred;">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Readings</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#">New Draw</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#">Random Card</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#">Major Arcana</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#">Minor Arcana</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'Nav-bar',
    props: { 
      msg: String
    }
  }
</script>

<style lang="scss" scoped>
  .nav{
    background-color: green;
  }
</style>