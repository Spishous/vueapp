<template>
  <div>
      <img alt="Vue logo" src="../assets/logo.png">
  <button @click="add()">{{nameBtn}} {{count}}</button>
    <h1>Home</h1>
    <div class="d-flex" v-for="index in 5" :key="index">
      <div class="shimmer" style="width:6rem;height:6rem;border-radius: 100%;"></div>
      <div class="d-flex col f-1 f-center">
        <div class="shimmer"></div>
        <div class="shimmer"></div>
        <div class="d-flex">
          <div class="shimmer f-1"></div>
        <div class="shimmer f-1"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

export default {
  name: 'HomePage',
  props:{
    count:Number
  },
  data:()=>{
    return {
        var1:0,
        nameBtn:"button",
    }
  },
  methods:{
    add(){
      this.$emit('countA');
    },
  }
}
</script>

<style scoped>

</style>