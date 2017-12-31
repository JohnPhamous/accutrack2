<template>
  <arc-card class="text-center" type="primary">
    <h1 slot="header">AccuTrack 2</h1>

    <div class="mb-5 mt-5">
      <input 
        type="number"
        class="form-control input-lg m-auto"
        placeholder="Code"
        v-model="classCode"
      >
      <button class="btn btn-primary btn-pill btn-lg d-flex ml-auto mr-auto mt-5" @click="signIn">R'Web Sign In</button>
    </div>
  </arc-card>
</template>

<script>
import Card from './Card'

export default {
    data: function() {
        return {
            classCode: ''
        }
    },
    methods: {
        signIn() {
            this.$router.push('/success')
        }
    },
    components: {
        arcCard: Card
    }
}
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
