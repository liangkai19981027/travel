<template>
  <div id="maintabber">
      <tab-bar>
    <a href="javascript:;">
    <tab-bar-item v-if="top<700">
      <img slot="item-icon" src="../../../assets/img/tabbar/首页-选中1.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item v-else>
      <img slot="item-icon" src="../../../assets/img/tabbar/火箭.png" alt="">
      <div slot="item-text" @click="backTop">回顶部</div>
    </tab-bar-item>
    </a>
    <a href="https://touch.qunar.com/mordercenter/index.html?hybridid=mob_ordercenter#orderlist.list?businessType=all&filterBusiness=true&source=touch">
     <tab-bar-item>
      <img slot="item-icon" src="../../../assets/img/tabbar/订单.png" alt="">
      <div slot="item-text">订单</div>
    </tab-bar-item>
    </a>
    <a href="https://complain.qunar.com/app/kf.htm?hybridid=mob_uc&source=complain.fback">
     <tab-bar-item>
      <img slot="item-icon" src="../../../assets/img/tabbar/服务订单详情-客服.png" alt="">
      <div slot="item-text">客服</div>
    </tab-bar-item>
    </a>
    <a href="https://pay.qunar.com/mobile/h5/personalcenter/myaccount/index.htm?hybridid=mob_uc">
     <tab-bar-item>
      <img slot="item-icon" src="../../../assets/img/tabbar/个人中心.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </a>
      </tab-bar>
      
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/Tabbar'
import TabBarItem from '../../common/tabbar/TabbarItem'
export default {
  name: 'maintabbar',
  data() {
      return {
          top:0
      }
  },
  components: {
      TabBar,
      TabBarItem
  },
  mounted() {
    window.addEventListener("scroll",()=> {
        this.top=document.documentElement.scrollTop
    })
  },
  methods: {
      backTop(){
          document.documentElement.scrollTop=0
      }
  },
}
</script>

<style scoped>
a{
    flex: 1;
}
</style>
