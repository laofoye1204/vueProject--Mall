<template>
    <div class="home" id='home' v-scroll='getScrollTop'>
     <header-bar :goBack='false' :class="{'bg':flag}">
       <div class="header-logo" slot='logo'>
          <a href="#" class="icon-logo"></a>
       </div>
       <div class="title-box homeIn" slot='search'>
          <form>
            <input type="text" placeholder="请输入关键字">
            <button type="submmit"></button>
          </form>
        </div>
        <div class="header-right" slot='icon-image'>
          <a href="#"></a>
        </div>
     </header-bar>
     <div class='container'>
        <swiper :swiper-slides='gridData["home-bannerList"]' >
        </swiper>
        <nav class="small-nav">
             <a v-for='item in gridData["region-rows"]'>
              <img v-lazy="item.img" alt="">
              <span>{{item.title}}</span>
             </a>
        </nav>
        <div class="pageAticle" v-for="item in gridData['items-block']">  
          <content-header v-if="item['header-title']!=''" 
                           :title="item['header-title']"
                           :more='item.more'
                           :type='item.type'
          >
           <scroll v-if='item.type=="scroll"' :content='item.content' slot='scroll'></scroll>
          </content-header>
          <left-one-right-two v-if='item.type=="leftOneRightTwo"' :content='item.content'></left-one-right-two>
          <img-only v-if='item.type=="ImgOnly"' :content='item.content'></img-only>
           <swiper v-if='item.type=="focusImg"' :swiper-slides='item.content' class="swiper">
           </swiper>
           <div class='productList' v-if='item.type=="SixImages"' >
              <pro-item v-for="i in item.content" 
                     :img="i.img"
                     :title="i.title"
                     :price="i.price"
                     :beishu="i.beishu"
                     :size="i['goodsItem_size']"
                     :id='i.id'
             ></pro-item>
           </div>
           <div class="tags" v-if="item['item_tags'].length>0" >
             <a v-for="m in item['item_tags']" :href="m.href">{{m.title}}</a>
           </div>
        </div>
     </div>
     <footer-bar></footer-bar>
    </div>
</template>
<script>
import headerBar from "@/components/header/header"
import footerBar from "@/components/footer/footer"
import swiper from "@/components/base/swiper"
import contentHeader from "@/components/home/content-header"
import scroll from "@/components/home/scroll"
import leftOneRightTwo from "@/components/home/LeftOneRightTwo"
import imgOnly from "@/components/home/imgOnly"
import proItem from "@/components/base/pro-item"
  export default{
    data() {
      return {
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        gridData: [],
        apiUrl: 'http://localhost:3000/home',
        flag:false
      }
       
    },
    created: function() {
       this.getCustomers()
       this.$emit('bodyH',false);
    },
    methods: {
      getCustomers: function() {
        this.$http.get(this.apiUrl)
          .then((response) => { //请求成功
            this.gridData=response.data
          })
          .catch(function(response) {//出错
            console.log(response)
          })
      },
      getScrollTop:function(el){
        var _self=this;
        var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop)
           if(scrollTop>100){
              _self.flag=true;
           }else{
             _self.flag=false;
           }
      }
    },
    components:{
      headerBar,
      footerBar,
      swiper,
      contentHeader,
      scroll,
      leftOneRightTwo,
      imgOnly,
      proItem
    },
    directives:{
      scroll: {
            inserted: function(el,binding) {
             
                el.addEventListener('scroll',function(){
                      binding.value(this);
                },false)
                el.addEventListener('touchmove',function(){
                     binding.value(this);
                },false)
            }
        }
    }
  }
</script>
<style lang="less" scoped>
  .home{
    width:100%;
    overflow-y:scroll;
     .bg{
        background: rgb(0, 145, 198)!important;
        opacity: 0.95!important;
      }
  }  
  .container{
    width:100%;
    height:100%;
    overflow-y:auto;
    padding-bottom:.44rem;
  }
  .pageAticle{
    background:#fff;
  }
  .small-nav{
    width:100%;
    margin-bottom:.1rem;
    background:#fff;
    overflow:hidden;
    a{
      width:0;
      float:left;
      width:25%;
      padding-top:.15rem;
      box-sizing:border-box;
      display:-webkit-box;
      -webkit-box-align:center;
      -webkit-box-pack:center;
        -webkit-box-orient:vertical;
      img{
        display:block;
        width:.36rem;
        height:.36rem;
      }
      span{
        display:block;
        text-align:center;
        overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
    }
  }
  .productList{
    width:100%;
    overflow:hidden;
  }
  .tags{
    width:100%;
    padding: .1rem;
    overflow-x: scroll;
    white-space: nowrap;
    overflow-y: hidden;
     margin-bottom:.1rem;
    a{
      height: .2rem;
      line-height: .2rem;
      border: 1px solid #ececec;
      text-align: center;
      color: #666;
      background-color: #ebeced;
      padding: 0.06rem;
      font-size: .1rem;
      overflow: hidden;
      margin-right:.2rem;

    }
  }
  .header-right{
      background:url(../../../static/images/ico_19.png) no-repeat 50% 50%;
    }
</style>