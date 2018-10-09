<template>
  <div>
    <h3>this is from {{name}} Vue Component</h3>
    <h3>From Son: {{reversePropsData()}}</h3>
  </div>
</template>

<script>
  export default{
    props: {
      MyResponse: {
        type: String,
        required: true
      }
    },
    data: function(){
      return {
        name: 'father'
      }
    },
    methods: {
      reversePropsData(){
        return this.MyResponse.split('').reverse().join('');
      }
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
