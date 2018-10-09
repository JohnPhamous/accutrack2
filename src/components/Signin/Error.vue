<template>
  <arc-card class="text-center" type="error">
    <h1 slot="header" class="fa fa-exclamation-circle"></h1>
    
    <div class="mb-5 mt-5">
      <div class="card-block">
        <p>Please check the following:</p>
        <ul>
          <li>You are signed in with your @ucr.edu email</li>
          <li>You are trying to sign in during the class period</li>
          <li>The code you are using is a valid code</li>
        </ul>

        <p>If you still cannot sign in, please contact the instructor.</p>
        <router-link to="/" class="btn btn-primary">Home</router-link>
      </div>
    </div>
  </arc-card>
</template>

<script>
import Card from "../Card";

export default {
  components: {
    arcCard: Card
  }
};
</script>

<style>
</style>
