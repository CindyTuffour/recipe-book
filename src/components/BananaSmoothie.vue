<template>
<div class="bananasmoothie">
<p>Banana Smoothie</p>
<p>500ml whole milk</p>
<p>2 tbsp almond butter</p>
<p>6 prunes</p>
<p>1 tsp cinnamon</p>
<p>1 small ripe banana </p>
<div id="makeme">
<button v-on:click="change()">Make me vegan</button>
</div>
</div>
</template>

<script>
 export default {
    methods: {
        change(){
            alert("hey")
        }
    }
 }
</script>




