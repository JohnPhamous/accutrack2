<template>
  <arc-card class="text-center" type="success">
    <h1 slot="header">Instructor Sign In</h1>

    <div class="mb-5 mt-5">
      <div class="card-block">
        <button class="btn btn-primary btn-pill btn-lg d-flex ml-auto mr-auto" @click="logIn">Instructor Sign In</button>

        <hr />

        <div class="alert alert-warning" role="alert">
          Only those who authorized are allowed to create an account. Contact your supervisor for the access code.
        </div>
        <label for="accessCode">Access Code</label>
        <input id="accessCode" type="text" class="form-control ml-auto mr-auto mb-3" v-model="accessCode">
        <button 
          class="btn btn-info btn-pill btn-lg d-flex ml-auto mr-auto"
          :disabled="!validCode"
          :class="{ disabled : !validCode}"
          @click="createAccount"
        >Create an Account</button>
      </div>
    </div>
  </arc-card>
</template>

<script>
import Card from './Card'

export default {
    components: {
        arcCard: Card
    },
    data: function() {
        return {
            accessCode: ''
        }
    },
    computed: {
        validCode() {
            return this.accessCode === 'SIReg'
        }
    },
    methods: {
        createAccount() {
            console.log('Create account')
        },
        logIn() {
            console.log('Log in')
            this.$router.push('/classes')
        }
    }
}
</script>

<style scoped>
.form-control {
    width: 40%;
}
.disabled {
    cursor: not-allowed;
}
</style>
