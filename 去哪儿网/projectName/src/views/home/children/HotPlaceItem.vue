<template>
  <div id="hot-place-item">
      <a :href="item.a">
      <div><img :src="item.url" alt=""></div>
      <div><span>{{item.words}}</span>
      <span class="about">{{item.about}}</span>
      <span class="price">{{item.price}}</span>
      </div>
      <section>
          <p class="p1">{{item.city}}</p>
          <p class="p2">{{item.activety}}</p>
      </section>
      </a>
  </div>
</template>

<script>
export default {
  name: 'hotplacelistitem',
  props:{
    item:{
        type:Object,
        default:()=>{}
    }
  },
  components: {
  }
}
</script>

<style scoped>
#hot-place-item{
    font-size: 10px;
    position:relative;
   
}
img{
    width: 100%;
}
span{
    display: block;
     overflow: hidden;
    white-space:nowrap;
text-overflow:ellipsis;
}
.price{
    font-size: 8px;
    color: #ff7400;
}
section{
    position: absolute;
    text-align: center;
    background-color: #000;
    opacity: 0.8;
    bottom: 29px;
    width: 5rem;
    left: 50%;
    transform: translate(-50%);
}
p{
    margin: 0;
}
.p1{
    color: #fff;
}
.p2{
    color: #ffde00;
}
.about{
    color: #D3D3D3;
}
</style>
