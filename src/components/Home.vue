<template>
  <arc-card class="text-center" type="primary">
    <h1 slot="header">AccuTrack 2</h1>
    <div class="mb-5 mt-5">
        <input 
            type="number"
            class="form-control input-lg m-auto"
            placeholder="Code"
            v-model="classCode"
            v-if="isSignedIn"
        />

        <button 
            class="btn btn-primary btn-pill btn-lg d-flex ml-auto mr-auto"
            :class="{ isSignedIn : 'mt-5'}"
            @click="signIn"
            v-if="!isSignedIn"
        >R'Web Sign In</button>

        <button
            class="btn btn-primary btn-lg d-flex ml-auto mr-auto mt-5"
            @click="checkIn"
            v-if="isSignedIn"
        >Sign Into Class</button>

    </div>
  </arc-card>
</template>

<script>
import Card from "./Card";

export default {
  data: function() {
    return {
      classCode: ""
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch("userSignIn");
    },
    checkIn() {
      this.$store.dispatch("studentCheckIn", this.classCode).then(response => {
        if (response) {
          this.$router.push("/success");
        } else {
          this.$router.push("/error");
        }
      });
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    userEmail() {
      return this.$store.state.user.email;
    },
    isSignedIn() {
      return this.$store.state.user.email.includes("@ucr.edu");
    }
  },
  watch: {
    userEmail(value) {
      if (value.includes("@ucr.edu")) {
        // this.isSignedIn = true
      } else {
        alert("Please use your @ucr.edu email when signing in");
        this.$router.push("/");
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch("getAuth", { instructor: false });
    this.$store.dispatch("loadClasses");
  },
  components: {
    arcCard: Card
  }
};
</script>

<style scoped>
.input-lg {
  height: 80px;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  width: 80%;
}
</style>
