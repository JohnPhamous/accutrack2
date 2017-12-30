<template>
   <footer>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">AccuTrack 2</router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://github.com/JohnPhamous/accutrack2" target="_blank"><i class="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
@media (min-width: 800px) {
    .navbar {
        display: none;
    }
}
</style>
