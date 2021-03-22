<template>
  <div id="headerlist">
      <header-list-items v-for="(item,index) in images" :key=index :item="item" class="header-list-item"></header-list-items>
  </div>
</template>

<script>
import HeaderListItems from './HeaderListItems' 
export default {
  name: 'headerlists',
  components:{
      HeaderListItems
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
