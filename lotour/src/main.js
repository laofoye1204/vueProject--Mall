// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(VueLazyload);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading:"static/images/load.gif",
  error:"static/images/error.jpg",
  attempt: 1
})

Vue.use(VueAwesomeSwiper);//全局绑定
Vue.use(Vuex);
Vue.use(VueResource);

const store=new Vuex.Store({
      state:{
        loadingShow:false,
         proNum:0,
         arr:[],
         isAddPro:true
      },
      mutations:{ 
        loadingShow(state,n){
            state.loadingShow=n;
        },
        addProList(state,n){
           state.arr.push(n);
           window.localStorage.arr=JSON.stringify(state.arr);
        },
        addItemPro(state,arr){ //添加某一项商品数量
          var id=arr[1];//获取商品ID
          var num=arr[0];//获取商品需要添加的数量
            state.arr.forEach( function(val, index) {
               if(val.id==id){
                val.num+=num;
               }
            });
        },
        addNum(state,n){ //总的商品数
           state.proNum+=parseInt(n);
        },
        setObj:function(state,obj){
           state.proNum=obj.num;
           state.arr=obj.arr;
        },
        judgePro:function(state,id){ //判断此商品是否已经添加过了
            state.arr.forEach( function(val) {
              if(val.id==id){
                state.isAddPro=false;
              }else{
                state.isAddPro=true;
              }
            })
        },
        setStorage(state,arr){
           window.localStorage.arr=JSON.stringify(arr);
        }
      },
      actions:{ //用于提交mutations
        getStorage(context){
          var arr=JSON.parse(window.localStorage.arr);
          var num=0;
          var obj={};
          if(arr && arr.length>0){
            arr.forEach( function(val, index) {
              num+=val.num;
            });
            obj.arr=arr;
            obj.num=num;
          }else{
            obj.arr=[];
            obj.num=0;
          }
          context.commit('setObj',obj);
        }
      }
    })

Vue.http.interceptors.push((request, next) => {
   //获取页面本身的高度值
   var wh=document.documentElement.style['height'];
   if(wh=='auto'){
     document.documentElement.style['height']=document.body.style['height']='100%';
   }
   store.commit("loadingShow",true); 
  next((response) => {
    store.commit("loadingShow",false);
    document.documentElement.style['height']=document.body.style['height']=wh;
    return response;
  });
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created:function(){
    this.$store.dispatch('getStorage');
  }
})
