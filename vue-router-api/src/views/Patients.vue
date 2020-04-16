<template>
  <div class="patients">
    <h1>Patients</h1>
    <span v-bind:title="msg">
      <input v-model="msg">
    </span>
  </div>
</template>

<script>
// read from api
export default {
  name: 'patients',
  data () {
    return {
      msg: 'id'
    }
  }
}
</script>

<style scoped>
</style>
