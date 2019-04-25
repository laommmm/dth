<template>
<div class="playerBar">
  <audio ref="audio" :src="bottomPlay.audio_url"></audio>
  <div class="float" :style="{bottom:barBottom?'0':''}">
    <img :src="bottomPlay.face">
    <div class="info">
      <div class="name">{{bottomPlay.lesson_name}}</div>
      <p>{{bottomPlay.times|timefil}} - {{bottomPlay.tags}}</p>
    </div>
    <div class="control" :class="{'play':control===0,'move':control===1,'stop':control===2}" @click="audioFn">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" ref="line">
        <circle :style="{'stroke-dashoffset':progress+'px'}" class="line" stroke-linecap="round" r="47%" cy="50%" cx="50%" stroke-width="6%" stroke="#77A7CF" fill="none"/>
      </svg>
    </div>
  </div>
</div>
</template>

<style lang="scss" type="text/scss" scoped>
.playerBar{
  height:110px;
  audio{
    width:0;
    height:0;
  }
  .float{
    transition:0.5s;
    position:fixed;
    height:110px;
    bottom:99px;
    z-index:98;
    padding:0 40px;
    left:0;
    right:0;
    background-color:#FFF;
    border-radius:10px 10px 0 0;
    box-shadow:0 -4px 16px rgba(#274C7C,0.1);
    display:flex;
    img{
      width:80px;
      height:80px;
      margin:auto 0;
      border-radius:10px;
    }
    .info{
      flex:1;
      width:50%;
      margin:auto 0;
      margin-left:20px;
      font-size:24px;
      color:#AFB2B7;
      .name{
        font-size:32px;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        color:#354049;
        margin-bottom:10px;
      }
    }
    .control{
      margin:auto 0;
      width:68px;
      height:68px;
      svg{
        transform:rotate(-90deg);
        .line{
          stroke-dasharray:(68px*0.94*3.1415926);
          stroke-dashoffset:(68px*0.94*3.1415926);
        }
      }
      &.play{
        background:url('~@/img/ico_videoPlay.png') center/100% 100%;
      }
      &.stop{
        background:url('~@/img/ico_videoStop.png') center/100% 100%;
      }
      &.move{
        background:url('~@/img/ico_videoMove1.png') center/100% 100%;
        animation: videoMove 0.6s infinite;
        @keyframes videoMove{
          0%{
            background:url('~@/img/ico_videoMove1.png') center/100% 100%;
          }
          19%{
            background:url('~@/img/ico_videoMove2.png') center/100% 100%;
          }
          38%{
            background:url('~@/img/ico_videoMove3.png') center/100% 100%;
          }
          57%{
            background:url('~@/img/ico_videoMove4.png') center/100% 100%;
          }
          76%{
            background:url('~@/img/ico_videoMove5.png') center/100% 100%;
          }
          95%{
            background:url('~@/img/ico_videoMove6.png') center/100% 100%;
          }
        }
      }
    }
  }
}
</style>

<script>
import {mapState} from 'vuex';
export default {
  name:"PlayerBar",
  props:['barBottom'],
  filters:{
    timefil(value){
      let m = Math.floor((value / 60 % 60)) < 10 ? '0' + Math.floor((value / 60 % 60)) : Math.floor((value / 60 % 60));
      let s = Math.floor((value % 60)) < 10 ? '0' + Math.floor((value % 60)) : Math.floor((value % 60));
      return m+":"+s;
    }
  },
  data(){
    return{
      audioIdx:0,
      control:0,
      progress:0,
      oTime:null,
      duration:0,
      seat:0,
      progressSeat:0,
      bottomPlay:''
    }
  },
  computed:{
    ...mapState(['playerShow'])
  },
  mounted(){
    this.http(this.api.lesson_play).then(
      res=>{
        switch(parseInt(res.data.ret,10)){
          case 0:
            this.bottomPlay=res.data.data.play[0];
            this.duration=this.bottomPlay.times;
            this.progressSeat=this.$refs.line.clientWidth*0.94*3.1415926;
            this.progress=this.progressSeat*(1-this.bottomPlay.step/100);
            break;
          default:
            Toast(res.data.msg);
        }
      },
      error => {
        alert(error);
      }
    );
  },
  methods:{
    audioFn(){
      if(this.control===0){
        this.audioBtnFn();
      }else{
        if(this.control===1){
          this.control=2;
          this.$refs.audio.pause();
          clearInterval(this.oTime);
        }else{
          this.audioBtnFn();
        }
      }
    },
    audioBtnFn(){
      const audioMain=this.$refs.audio;
      audioMain.currentTime=this.duration*(this.bottomPlay.step/100);
      audioMain.play();
      this.control=1;
      this.oTime=setInterval(()=>{
        if(!audioMain||audioMain.paused){
          return false;
        }
        this.progress=this.progressSeat*(1-parseInt(audioMain.currentTime)/this.duration);
        this.playtimeFn();
      },100);
    },
    playtimeFn(){
      const audioMain=this.$refs.audio;
      this.audio_moveIdx++;
      if(this.audio_moveIdx<50){
        return false;
      }else{
        this.audio_moveIdx=0;
      }
      this.http(this.api.lesson_playTime,{
        lid:this.bottomPlay.lid,
        step:parseInt(audioMain.currentTime/this.duration*100)
      }).then(
        res=>{
          switch(parseInt(res.data.ret,10)){
            case 0:
              break;
            default:
              Toast(res.data.msg);
          }
        },
        error => {
          alert(error);
        }
      );
    }
  }
}
</script>

