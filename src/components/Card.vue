<template>
  <div class="inner-wrapper mt-auto mb-auto container">
    <div class="row">
      <div class="col-md-12 mt-auto mb-auto">
        <div class="container py-4">
          <div class="row justify-content-md-center px-4">
            <div class="col-md-12 mb-4 card">

              <div class="card-title">
                <h1
                  class="card-header"
                  :class="{
                    'card-header-success' : type === 'success',
                    'card-header-error' : type === 'error',
                    'card-header-primary' : type === 'primary'
                  }"
                >
                  <slot name="header"></slot>
                </h1>

              </div>

              <slot></slot>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['headerColor', 'type']
}
</script>

<style scoped>
.card {
    border-radius: 1rem;
    border: none;
}
.col-md-12 {
    padding-left: 0px;
    padding-right: 0px;
    overflow: hidden;
}
.card-header-success {
    background: linear-gradient(120deg, #1fa2ff, #12d8fa, #a6ffcb);
    color: white;
}
.card-header-error {
    background: linear-gradient(120deg, #cb356b, #bd3f32);
    color: white;
}
.card-header-primary {
    background: linear-gradient(120deg, #bc4e9c, #f80759);
    color: white;
}
.card-title {
    margin-bottom: 0px;
}
</style>
