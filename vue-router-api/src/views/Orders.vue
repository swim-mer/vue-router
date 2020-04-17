<template>
  <div class="orders">
    <h1>Orders</h1>
    <div id="order-list">
      <div v-for="one in many" :key="one.id">
        <p>Order id: {{ one.id }}, {{ one.description }}, 
        Patient id: {{ one.patient.id }}</p>
      </div>
    </div>
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
    axios.get('http://api.develop.processmaker.com/api/orders').then(response => {
        console.log(response)
        this.many = response.data.data
    })
  }
}

</script>

<style scoped>
</style>
