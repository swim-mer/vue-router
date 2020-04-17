<template>
  <div class="patients">
    <h1>Patients</h1>
    <p>{{ many }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'patients',
  data () {
    return {
      many: [],
      msg: 'Enter id here'
    }
  },

  // fetch posts when component is made
  created() {
    axios.get('http://api.develop.processmaker.com/api/patients').then(response => {
        console.log(response.data.data)
        this.many = response.data.data
    })
  }
}

</script>

<style scoped>
</style>
