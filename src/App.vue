<template>
  <div>
    <h3>This is from {{name}} Component</h3>
    <child-component></child-component>
  </div>
</template>

<script>
  import Child from './Child.vue'
  export default {
    data: function(){
      return {
        name: 'App'
      }
    },
    methods:{},
    components:{
        childComponent: Child
    }
  }
</script>

<style scoped>
  h3{
    background-color: red;
  }
</style>
