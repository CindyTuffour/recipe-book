<template>
  <div class="home">
    <img alt="Recipe logo" src="../assets/healthyfood.png" width="400" height="200">
    <HelloWorld msg="Smart healthy cookbook "/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>