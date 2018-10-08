<template>
  <div>
    <h3>this is from {{name}}</h3>
  </div>
</template>

<script>
  export default{
    data: function(){
      return {
        name: 'father'
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style scoped>

  div{
    background-color: yellow;
  }

</style>
