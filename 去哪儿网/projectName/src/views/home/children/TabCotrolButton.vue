<template>
  <div id="tab-cotrol-button">
      <div v-for="(item,index) in titles" :key="index" :class="{active:index===currentindex}" @click="Change(index)" class="tab">{{item}}</div>
  </div>
</template>

<script>


export default {
  name: 'tabcotrolbutton',
  components: {

  },
  data() {
      return {
          currentindex:0
      }
  },
   props:{
      titles:{
          type:Array,
          default:()=>[]
      }
},
methods: {
    Change(index){
        this.currentindex=index
        this.$emit('hotplace',this.currentindex)
    }
},
}
</script>

<style scoped>
#tab-cotrol-button{
    padding-left: 10px;
    display: flex;
    font-size: 10px;
    text-align: center;
}
.tab{
    margin-right: 10px;
    height: 2rem;
    width: 6rem;
    line-height: 2rem;
    border-radius: 10px;
    border: rgb(23, 192, 200) solid .5px;
}
.active{
    background-color: rgb(23, 192, 200);
    color: #fff;
}
</style>
