<template>
  <arc-card>
    <h1>Error</h1>
    <div class="card-block">
      <p class="card-text">Something went wrong when signing in. Let your instructor know.</p>
      <router-link to="/" class="btn btn-primary">Home</router-link>
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
