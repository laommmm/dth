<template>
<div class="sign">
  <main-header type="noTitle" color="white"></main-header>
  <div class="bg"></div>
</div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
    }
  },
  mounted(){
  },
  methods:{
  },
  beforeDestroy() {
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
.sign{
  .bg{
    position:fixed;
    background:url('~@/img/signImg.jpg');
  }
}
</style>