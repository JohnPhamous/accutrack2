<template>
  <nav class="navbar navbar-expand-lg navbar-dark pt-4 px-0">
    <a class="navbar-brand mr-5" href="#">
      AccuTrack 2
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>

      <ul class="header-social-icons navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/JohnPhamous/accutrack2" target="_blank"><i class="fa fa-github"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
@media (max-width: 600px) {
    .navbar {
        display: none;
    }
}
</style>
