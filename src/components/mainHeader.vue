<template>
<header class="mainHeader" :class="[type,color,line]">
  <i class="return" @click="$router.go(-1)"></i>
  <slot></slot>
  <dl v-if="tabMenu" class="tabMenu">
    <router-link tag="dd" :to="{name:item.link}" v-for="(item,idx) in tabMenu" :key="idx" replace @click="tabIdx=idx">{{item.val}}</router-link>
    <dt class="line" :style="{transform:'translateX('+(100*(this.$route.name==='surveyMore_totality'?0:1))+'%)'}"></dt>
  </dl>
  <h1 v-if="type!=='noTitle'||!type">{{$route.meta.title}}</h1>
</header>
</template>

<style lang="scss" type="text/scss" scoped>
.mainHeader{
  height:88px;
  line-height:88px;
  position:relative;
  z-index:99;
  display:flex;
  justify-content:space-between;
  .return{
    width:88px;
    height:88px;
    background:url('~@/img/ico_return.png') center/22px auto no-repeat;
  }
  .tabMenu{
    position:absolute;
    transition:0.5s;
    left:0;
    right:0;
    width:400px;
    margin:auto;
    display:flex;
    justify-content:center;
    dd{
      width:200px;
      font-size:36px;
      font-weight:bold;
      text-align:center;
      color:#B0B2B7;
      &.curr{
        color:#384049;
      }
    }
    .line{
      position:absolute;
      bottom:0;
      left:0;
      width:200px;
      &:before{
        content:'';
        background-color:#83A6CE;
        width:40px;
        height:8px;
        display:block;
        margin:auto;
      }
    }
  }
  h1{
    position:absolute;
    left:0;
    right:0;
    font-size:40px;
    pointer-events:none;
    text-align:center;
    color:#354049;
  }
  &.white{
    .return{
      background-image:url('~@/img/ico_return_white.png');
    }
    h1{
      color:#FFF;
    }
  }
  &.line{
    border-bottom:1px solid #EEEEEE;
  }
}
</style>

<script>
  export default {
    name: "mainHeader",
    data(){
      return{
        tabIdx:0
      }
    },
    props:[
      'type',
      'color',
      'line',
      'tabMenu'
    ],
    mounted(){
    },
    methods:{}
  }
</script>