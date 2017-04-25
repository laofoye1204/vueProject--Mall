<template>
     <header class="scroll-main">
       <h3 class="scroll-title">{{title}}</h3>
       <slot name="scroll"></slot>
       <a :href="more"  v-if="more!=''"  class="scroll-more">更多</a>
     </header>
</template>
<script>

export default {
  props:{
    title:{
      type:String,
      default:"我是标题"
    },
    more:{
      type:String,
      default:"#"
    },
    type:{
      type:String
    },
    content:{
      type:Array,
       default:function(){

      }
    }
  },
  components:{
    
  }
}
</script>
<style lang="less" scoped>
	 .scroll-main{
     width:100%;
     padding:.1rem 0;
     height:.41rem;
     overflow:hidden;
     font-size:.16rem;
     border-bottom: 1px solid #EFEFEF;
      border-top: 1px solid #ececec;
      background:#fff;
     .scroll-title{
       float:left;
       border-left: 3px solid #0091c6;
       padding-left:.15rem;
       width:.9rem;
     }
     .scroll-more{
        float:right;
        padding-right:.15rem;
        width:.5rem;
        font-size:.1rem;
     }
   }
</style>