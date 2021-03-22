<template>
  <div id="header-banner">
 <header-list :images="images"></header-list>
    <header-lists :images="images2"></header-lists>
    <header-lists :images="images3"></header-lists>
    <header-lists :images="images4"></header-lists>
  </div>
</template>

<script>
import HeaderList from './HeaderList'
import HeaderLists from './HeaderLists'
import {getHomedata} from '../../../network/home'
export default {
  name: 'headerbanner',
    data() {
    return {
      images:[],
      images2:[],
      images3:[],
      images4:[],

    }
  },
  created() {
    getHomedata().then(res=>{
      this.images=res.data.images
      this.images2=res.data.images2
      this.images3=res.data.images3
       this.images4=res.data.images4
      
    })
  },
  components: {
      HeaderList,
       HeaderLists
  }
}
</script>

<style scoped>

</style>
