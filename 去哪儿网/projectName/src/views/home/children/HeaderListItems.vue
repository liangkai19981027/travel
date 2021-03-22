<template>
  <div id="headerlistitems">
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
  name: 'headerlistitems',
   props:{
      item:{
          type:Object,
          default: () => {}
      }
  }
}
</script>

<style scoped>
#headerlistitems{
    display: flex;
    text-align: center;
}

img{
    width: 50%;
}
.h{
    text-align: center;
    font-size:.12rem;
    margin: .5rem .5rem;
}
</style>
