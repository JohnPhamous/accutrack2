<template>
  <div class="inner-wrapper mt-auto mb-auto container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 mt-auto mb-auto mr-3">
        <div class="container py-4">
          <div class="row justify-content-md-center px-4">
            <div class="contact-form col-sm-12 col-md-10 col-lg-7 p-4 mb-4 card">
              <input 
                type="number"
                class="form-control input-lg"
                placeholder="Code"
                v-model="classCode"
              >
              <button class="btn btn-primary btn-pill btn-lg d-flex ml-auto mr-auto mt-5">R'Web Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            classCode: ''
        }
    }
}
</script>

<style scoped>
.input-lg {
    height: 80px;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
}
</style>
