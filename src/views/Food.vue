<template>
  <div class="food">
    <img alt="Recipe logo" src="../assets/healthyfood.png" width="400" height="200">
    <h1>Healthy Foods</h1>
  </div>
</template>


<script>
import AddFood from '@/components/AddFood.vue'
export default {
  name: 'content',
  components: {
    AddFood
  }
}
</script>