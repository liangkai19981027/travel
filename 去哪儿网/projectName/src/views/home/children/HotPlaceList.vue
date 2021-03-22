<template>
  <div id="hot-place-list">
       <tab-cotrol :hotplaces="titles" @hotplace="c"></tab-cotrol>
       <section><hot-place-item v-for="(item,index) in hotplaces[currentindex]" :key="index" :item="item" class="item" ></hot-place-item></section>
  </div>
</template>

<script>
import HotPlaceItem from './HotPlaceItem'
import TabCotrol from './TabCotrol'
export default {
  name: 'hotplacelist',
  components: {
    HotPlaceItem,
    TabCotrol
  },
  data() {
    return {
      currentindex:0,
    }
  },
  props:{
     hotplaces:{
        type:Array,
        default:()=>[]
    },
    titles:{
      type:Array,
      default:()=>[]
    }
  },
methods: {
    c(index){
      this.currentindex=index
      this.$emit('hotplace',index)
    }
  },
}
</script>

<style scoped>
section{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item{
  width: 45%;
}

</style>
