<template>
  <arc-card>
    <h1>Success!</h1>
    <div class="card-block">
      <div class="gif-container">
        <img :src="gifSrc" class="gif mb-3">
      </div>
      <p class="card-text">You've <strong><span style="color: green;">successfully</span></strong> signed into the class.</p>
      <router-link to="/" class="btn btn-primary">Home</router-link>
    </div>
  </arc-card>
</template>

<script>
import Card from '../Card'
import axios from 'axios'
import { giphy } from '../../../secrets/giphy.js'

export default {
    components: {
        arcCard: Card
    },
    data: function() {
        return {
            gifSrc: ''
        }
    },
    created() {
        axios
            .get(`http://api.giphy.com/v1/gifs/random?api_key=${giphy}&tag=dog`)
            .then(response => {
                this.gifSrc = response.data.data.image_url
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
.gif-container {
    width: 40vh;
    height: 40vh;
    overflow: hidden;
    background-color: #e5e5e5;
}
.gif {
    margin: auto;
    width: 105%;
    height: 105%;
}
</style>
