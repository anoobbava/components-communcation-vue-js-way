<template>
  <div>
    <father-component></father-component>
    <h3>this is from {{name}}</h3>
  </div>
</template>
<script>
  import Father from './Father.vue'
  export default {
    data: function(){
      return {
        name: 'child'
      }
    },
    methods:{
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
