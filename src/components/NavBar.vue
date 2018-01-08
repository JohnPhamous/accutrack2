<template>
  <nav class="navbar navbar-expand-lg navbar-dark pt-4 px-0">
    <router-link class="navbar-brand mr-5" to="/">
      AccuTrack 2
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="header-social-icons navbar-nav ml-auto">
        <router-link
          tag="li"
          activeClass="active"
          to="/classes"
          class="nav-item"
          v-if="isInstructor"
        >
          <a class="nav-link">View Classes</a>
        </router-link>
        <router-link
          tag="li"
          activeClass="active"
          to="/instructor"
          class="nav-item"
          v-if="!showSignIn"
        >
          <a class="nav-link">Instructor Sign In</a>
        </router-link>
        <li class="nav-item" @click="signOut" v-if="showSignIn"><a class="nav-link">Sign Out</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    computed: {
        showSignIn() {
            return this.$store.state.user.email.includes('@ucr.edu')
        },
        isInstructor() {
            return this.$store.state.user.instructor
        }
    },
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .navbar {
        display: none;
    }
}
.nav-link {
    cursor: pointer;
}
</style>
