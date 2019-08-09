<template>
  <div class="drink">
      <img alt="Recipe logo" src="../assets/healthyfood.png" width="400" height="200">
    <h1>Healthy Drinks</h1>
    <div class="content">
    <img alt="Recipe logo" src="../assets/banana-smoothie.jpg" width="300" height="200">    
     <BananaSmoothie />
     </div>
  </div>
</template>

<script>
import BananaSmoothie from '@/components/BananaSmoothie.vue'
export default {
  name: 'content',
  components: {
    BananaSmoothie
  }
}
</script>

<style>
.content {
    background-color:  rgb(229, 235, 152);
    padding: 50px;
    width: 82%;
    margin: 120px;
}
</style>
