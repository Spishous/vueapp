<template>
  <div>
    <h2>Favorite</h2>
    <button @click="add()">ssdfsdf {{count}}</button>
  </div>
</template>

<script>
export default {
    name: 'FavoritePage',
    props:{
    count:Number
  },
  methods:{
    add(){
      this.$emit('countA');
    },
  }
}
</script>

<style>

</style>