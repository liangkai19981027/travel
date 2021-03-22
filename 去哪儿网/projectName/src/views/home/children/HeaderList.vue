<template>
  <div id="headerlist">
      <header-list-item v-for="(item,index) in images" :key=index :item="item" class="header-list-item"></header-list-item>
  </div>
</template>

<script>
import HeaderListItem from './HeaderListItem' 
export default {
  name: 'headerlist',
  components:{
      HeaderListItem
  },
  props:{
      images:{
          type:Array,
          default: () => []
      }
  }
}
</script>

<style scoped>
#headerlist{
    display: flex;
    justify-content: space-around;
}

</style>
