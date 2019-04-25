<template>
  <div class="bodyCont">
      <transition :name="transitionName" v-if="!$route.meta.keepAlive">
          <router-view class="child-view"></router-view>
      </transition>
      <navigation>
          <transition :name="transitionName">
              <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
          </transition>
      </navigation>
    <PlayerBar :barBottom="barBottom" v-if="playerShow.play&&playerShow.show"></PlayerBar>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
  name: 'app',
  data() {
      return {
          transitionName: 'slide-left',
          barBottom:true
      }
  },
  watch: {
    '$route'(to) {
      this.shareFn();
      if(to.name==='home'||to.name==='break'||to.name==='me'){
        this.barBottom=false;
      }else{
        this.barBottom=true;
      }
      if (to.meta.title) {
          document.title = to.meta.title;
      }
      if(to.matched[0].name!=='course'){
        this.playerShowEdit({
          play:this.playerShow.play,
          show:true
        });
      }else{
        this.playerShowEdit({
          play:this.playerShow.play,
          show:false
        });
      }
    }
  },
  computed:{
    ...mapState(['playerShow'])
  },
  created(){
    let arr = ['home', 'break', 'me'];
    if (this.$route.meta.title) {
        document.title = this.$route.meta.title;
    }
    this.$navigation.on('forward', (to, from) => {
        let t = to.route.name;
        let f = from.route.name;
        let index = $.inArray(t, arr) - $.inArray(f, arr);
        if (index === -1 || index === -2) {
            this.transitionName = 'slide-right';
        } else {
            this.transitionName = 'slide-left';
        }
    });
    this.$navigation.on('back', (to, from) => {
        let t = to.route.name;
        let f = from.route.name;
        let index = $.inArray(t, arr) - $.inArray(f, arr);
        if (index === 1 || index === 2) {
            this.transitionName = 'slide-left';
        } else {
            this.transitionName = 'slide-right';
        }
    });
  },
  mounted(){
  },
  methods:{
    ...mapMutations(['playerShowEdit']),
    shareFn(){
      let postData={};
      switch(this.$route.name){
        case 'course_play':
          postData={
            url:window.location.href,
            type:3,
            id:this.$route.params.lid
          };
          break;
        case 'lesson':
          postData={
            url:window.location.href,
            type:2,
            id:this.$route.params.cid
          };
          break;
        case 'signIn':
          postData={
            url:window.location.href,
            type:4,
            id:''
          };
          break;
        default:
          postData={
            url:window.location.href,
            type:1,
            id:''
          };
      };
      this.http(this.api.member_share,postData).then(
        res=>{
          this.wxSdk.config(res.data.data.share.wx);
          let wxConfig={
            title:res.data.data.share.title, // 分享标题
            desc:res.data.data.share.desc, // 分享描述
            link:res.data.data.share.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl:res.data.data.share.picture, // 分享图标
            success:()=>{
            }
          };
          this.wxSdk.ready(()=>{
            this.wxSdk.updateAppMessageShareData(wxConfig);
            this.wxSdk.updateTimelineShareData(wxConfig);
          })
        },
        error=>{
          alert(error);
        }
      );
    }
  }
}
</script>
<style lang="scss" type="text/scss">
  @import "style/common.scss";

  ul, li {
      list-style-type: none;
  }
  .child-view {
    width:100%;
    transition:.5s cubic-bezier(.55, 0, .1, 1);
  }
  .child-view:nth-child(2){
    position:absolute;
    z-index:2;
    left:0;
    top:0;
    width:100%;
    height:100%;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>
