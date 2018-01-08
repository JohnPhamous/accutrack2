<template>
  <arc-card class="text-center" type="success">
    <h1 slot="header">Instructor Sign In</h1>

    <div class="mb-5 mt-5">
      <div class="card-block">
        <div class="alert alert-warning" role="alert">
          Only those who authorized are allowed to create an account. Contact your supervisor for the access code.
        </div>
        <label for="accessCode">Access Code</label>
        <input id="accessCode" type="password" class="form-control ml-auto mr-auto mb-3" v-model="userAccessCode">
        <button
            class="btn btn-primary btn-pill btn-lg d-flex ml-auto mr-auto" 
            @click="logIn"
            :disabled="!validCode"
        >Instructor Sign In</button>
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
            userAccessCode: ''
        }
    },
    computed: {
        validCode() {
            return this.userAccessCode === this.accessCode
        },
        accessCode() {
            return this.$store.state.accessCode
        },
        userEmail() {
            return this.$store.state.user.email
        }
    },
    watch: {
        userEmail(value) {
            if (value.includes('@ucr.edu')) {
                this.$router.push('/classes')
            } else {
                alert('Please use your @ucr.edu email when signing in')
                this.$router.push('/instructor')
            }
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('instructorSignIn')
        }
    },
    beforeCreate() {
        this.$store.dispatch('getAuth', { instructor: true })
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
