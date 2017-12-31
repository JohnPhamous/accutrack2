<template>
  <div class="feature py-4 d-flex">
    <div class="icon text-white bg-primary mr-5">
      <slot name="icon"></slot>
    </div>
    <div>
      <h5><slot name="header"></slot></h5>
      <p><slot name="body"></slot></p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
