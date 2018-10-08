<template>
  <div>
    <h3>this is from {{name}} Vue Component</h3>
    <h3>From Son: {{response}}</h3>
  </div>
</template>

<script>
  export default{
    props: ['response'],
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
