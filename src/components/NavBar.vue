<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Readings</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">New Draw</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Random Card</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Major Arcana</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Minor Arcana</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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