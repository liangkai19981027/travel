<template>
  <div id="headerlistitem">
      <a :href="item.a">
    <div class="h">
    <img :src="item.url" alt="">
    <section>{{item.title}}</section>
    </div>
      </a>
  </div>
</template>

<script>

export default {
  name: 'headerlistitem',
   props:{
      item:{
          type:Object,
          default: () => {}
      }
  }
}
</script>

<style scoped>
#headerlistitem{
    text-align: center;
}

img{
    width: 90%;
}
.h{
    text-align: center;
    font-size:.12rem;
    margin: .5rem .5rem;
}
</style>
