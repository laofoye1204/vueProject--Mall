<template>
  <div id="app">
  <transition name='fade'>
    <router-view @bodyH='bodyH'></router-view>
  </transition>  
     <div class="loading-box" v-show='$store.state.loadingShow'> 
      <div class="loading-css3">
         <div class="loader">Loading...</div> 
         <div>正在加载</div> 
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    bodyH:function(res){
      if(res){
          document.documentElement.style['height']=document.body.style['height']='100%';
      }else{
          document.documentElement.style['height']=document.body.style['height']='auto';
      }
    }
  }
}
</script>

<style lang='less'>
  @import "assets/css/reset.css";
   html{
      width: 100%;
      font-size: 100px;
    }
    body{
      width: 100%;
      background: #ebeced;
    }
     @media screen and(max-width: 414px){
      html{
          font-size: 114.4px;
        }
    }
    @media screen and(max-width: 375px){
      html{
          font-size: 100px;
        }
    }
    @media screen and(max-width: 320px){
      html{
          font-size: 85.3333333333333px;
        }
    } 
    #app{
      width: 100%;
      height: 100%;
      font-size: .14rem;
      overflow-y:auto;
    }
     .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .loading-box{
      position: fixed;
      z-index: 1000;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      .loading-css3 {
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -1rem;
        margin-left: -.6rem;
        padding: .3rem;
        text-align: center;
        background: rgba(0,0,0,.65);
        border-radius: .15rem;
        z-index: 1001;
        color: #fff;
        min-width: 1.2rem;
        max-width: 2rem;
      }
    }
</style>
