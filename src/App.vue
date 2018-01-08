<template>
  <div class="arc-landing-page--1">
    <div class="welcome d-flex justify-content-center flex-column">
      <div class="container navbar-container">
        <arc-navbar/>
      </div>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
      <!-- <arc-footer/> -->
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
import Footer from './components/Footer'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery'

export default {
    components: {
        arcNavbar: Navbar,
        arcFooter: Footer
    }
}
</script>

<style>
.navbar-container {
    position: absolute;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}
.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-30px);
    }
}

.btn-primary {
    background: linear-gradient(120deg, #36d1dc, #5b86e5);
    border: none;
}

.btn-primary:active {
    background: linear-gradient(120deg, #26e1ec, #4b76d5) !important;
    border: none;
}
</style>
