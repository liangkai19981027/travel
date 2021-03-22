<template>
  <div id="home">
   <header-banner></header-banner>
   <section>特惠度假</section>
   <hotPlace-list class="hotPlace-list" :hotplaces='hotplaces1' :titles="['当季热门度假','今日特惠度假']"></hotPlace-list>
   <a href="https://dujia.qunar.com/tejia?from=tejiaindex01&tm=tejiaindex02"><div class="more">更多特惠度假<span>></span></div></a>
   <section>特惠门票</section>
   <hotPlace-list class="hotPlace-list" :hotplaces='hotplaces2' :titles="['当季景点门票','特惠门票']"></hotPlace-list>
   <a href="https://dujia.qunar.com/tejia?from=tejiaindex01&tm=tejiaindex02"><div class="more">更多特惠门票<span>></span></div></a>
   <swiper :swiperimages="swiperimages"></swiper>
   <section><img src="../../assets/img/home/攻略.png" alt=""> 旅行攻略</section>
   <hotPlace-list class="hotPlace-list" :hotplaces='hotplaces3' :titles="['趣味亲子游','旅拍也要出大片']"></hotPlace-list>
   <a href="https://dujia.qunar.com/tejia?from=tejiaindex01&tm=tejiaindex02"><div class="more">更多精彩攻略<span>></span></div></a>
   <foot-info class="foot-info"></foot-info>
  </div>
</template>

<script>

import HeaderBanner from './children/HeaderBanner'
import HotPlaceList from './children/HotPlaceList'
import Swiper from './children/Swiper'
import FootInfo from './children/FootInfo'
import {getHomedata} from '../../network/home'
export default {
  name: 'home',
  components: {
    HeaderBanner,
    HotPlaceList,
    Swiper,
    FootInfo
  },
  data() {
    return {
      hotplaces1:[],
       hotplaces2:[],
       hotplaces3:[],
       swiperimages:[]
    }
  },
created() {
  getHomedata().then(res=>{
    console.log(res.data.swiper)
    this.swiperimages=res.data.swiper
     this.hotplaces1=res.data.hotplace1
     this.hotplaces2=res.data.hotplace2
     this.hotplaces3=res.data.hotplace3
  })
},
}
</script>

<style scoped>
#home{
  height: 1800px;
}
section{
  font-weight:bolder;
  font-size: 18px;
      color: #26282a;
      margin: 1rem;
      height: 2rem;
      line-height: 2rem;
}
.hotPlace-list{
  margin-top: 1rem;
}
.more{
  position: relative;
  text-align: center;
  line-height: 2rem;
  margin: 2rem auto;
  height: 2rem;
  width: 80%;
  color: rgb(23, 192, 200);
  border: rgb(23, 192, 200) 1px solid;
}
span{
  position: absolute;
  right: 4rem;
}
img{
  height: 50%;
  vertical-align:middle;
}
.foot-info{
  height: 11rem;
}
</style>
