<template>
  <arc-card class="text-center" type="error">
    <h1 slot="header" class="fa fa-exclamation-circle"></h1>
    
    <div class="mb-5 mt-5">
      <div class="card-block">
        <p class="card-text px-5">Something went wrong when signing in. Let your instructor know.</p>
        <router-link to="/" class="btn btn-primary">Home</router-link>
      </div>
    </div>
  </arc-card>
</template>

<script>
import Card from '../Card'

export default {
    components: {
        arcCard: Card
    }
}
</script>

<style>

</style>
