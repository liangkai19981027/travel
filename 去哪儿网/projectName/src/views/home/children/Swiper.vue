<template>
<div class="header-swiper">
  <swiper :options="swiperOption" v-if="swiperimages.length" >
    <!-- slides -->
    <swiper-slide v-for="(item,index) in swiperimages" :key="index"><img :src="item.url" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <section><div class="right">广告</div></section>
  </div>
</template>

<script>
export default {
       props:{
      swiperimages:{
        type:Array,
        default:()=>[]
    }
  },
  data() {
      return {
        swiperOption: {
            loop:true,
            autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          },
          
        },
      }
  },
}
</script>

<style scoped>
.header-swiper{
    height: 6rem;
    /* padding-bottom: 26.67%; */
    padding-left: .5rem;
    padding-right: .5rem;
    border-radius: 5px;
    position: relative;
}
img{
    width: 100%;
    border-radius: 5px;
    
}
.header-swiper >>> .swiper-pagination-bullet-active{
    background-color: #fff;
}
section{
    position: absolute;
    width: 3rem;
    height: 1rem;
    bottom: 3px;
    background-color: #000;
    opacity: 0.5;
    background-image: url('../../../assets/img/home/ad_camel.png');
    background-repeat: no-repeat;
    background-position: 2px;
    z-index: 99999;
}
.right{
    float: right;
    color: #c4d0d6;
    font-size: 12px;
}
</style>
