<template>
  <arc-card class="text-center" type="success">
    <h1 slot="header" class="fa fa-check-circle"></h1>

    <div class="mb-5 mt-5">
        <div class="card-block">
        <div class="gif-container mb-3">
            <img :src="gifSrc" class="gif">
        </div>
        <p class="card-text">You've <strong><span style="color: green;">successfully</span></strong> signed into the class.</p>
        <router-link to="/" class="btn btn-primary">Home</router-link>
        </div>
    </div>
  </arc-card>
</template>

<script>
import Card from "../Card";
import axios from "axios";
// import { giphy } from '../../../secrets/giphy.js'

export default {
  components: {
    arcCard: Card
  },
  data: function() {
    return {
      gifSrc: ""
    };
  },
  created() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=GjxOcnAtGNLQ2xjDDQDA71Ia0DD9IcYS&tag=dog`
      )
      .then(response => {
        this.gifSrc = response.data.data.image_url;
      })
      .catch(error => {});
  }
};
</script>

<style scoped>
.gif-container {
  width: 40vh;
  height: 40vh;
  overflow: hidden;
  background-color: #e5e5e5;
  margin: auto;
  display: block;
}
.gif {
  width: 105%;
  height: 105%;
}
</style>
