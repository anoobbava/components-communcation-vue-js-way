<template>
  <div>
    <h3>This is from {{name}}</h3>
    <father-component></father-component>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        name: 'App'
      }
    }
  }
</script>

<style scoped>
  h3{
    background-color: red;
  }
</style>
