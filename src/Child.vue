<template>
  <div>
    <father-component :MyResponse="response"></father-component>
    <h3>this is from {{name}} Vue Component</h3>
    <button @click="PassData">Say thank you Daddy</button>
  </div>
</template>
<script>
  import Father from './Father.vue'
  export default {
    data: function(){
      return {
        name: 'child',
        response: '!!No response!!!'
      }
    },
    methods:{
      PassData(){
        this.response = 'thank you Daddy'
      }
    },
    components:{
      'father-component': Father
    }
  }
</script>
<style scoped>
h3{
  background-color: aquamarine;
}
</style>
