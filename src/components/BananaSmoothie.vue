<template>
<div class="bananasmoothie">
<p>Banana Smoothie</p>
<p>500ml {{ milk }}</p>
<p>2 tbsp almond butter</p>
<p>1 tsp {{ sweetneroption }}</p>
<p>1 tsp cinnamon</p>
<p>1 small ripe banana </p>
<div v-if=true>
<button v-on:click="change">Make me vegan</button>
</div>
<div v-else>
<button>Make me basic</button>
</div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            milk: this.$store.getters.milk,
            sweetneroption: this.$store.getters.sweetnerOption[0]
            }      
    },
        methods: {  
        change: function(){
            if (true)
            {
                this.milk = this.$store.getters.veganmilk
                this.sweetneroption = this.$store.getters.sweetnerOption[1]
            }
    
           
        }
    }

 }
</script>





