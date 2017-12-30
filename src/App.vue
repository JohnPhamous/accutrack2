<template>
  <div class="arc-landing-page--1">
    <div class="welcome d-flex justify-content-center flex-column">
      <div class="container">
        <arc-navbar/>
      </div>
      <router-view/>
      <arc-footer/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
import Footer from './components/Footer'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'

export default {
    components: {
        arcNavbar: Navbar,
        arcFooter: Footer
    }
}
</script>

<style>

</style>
