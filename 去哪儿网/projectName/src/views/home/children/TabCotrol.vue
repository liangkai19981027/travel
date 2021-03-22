<template>
  <div id="tab-cotrol-button">
    <tab-cotrol-button :titles="[hotplaces[0],hotplaces[1]]" @hotplace="c"></tab-cotrol-button>
  </div>
</template>

<script>
import TabCotrolButton from './TabCotrolButton'

export default {
  name: 'tabcotrol',
  components: {
      TabCotrolButton
  },
    props:{
     hotplaces:{
        type:Array,
        default:()=>[]
    }
  },
  methods: {
    c(index){
      this.$emit('hotplace',index)
    }
  },

}
</script>

<style>
</style>
