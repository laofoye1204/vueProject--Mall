<template>
	<div class="user">
		  <header-bar :goBack='true' class="bg" :head-title="title" :flag="flag" @flagChange='wait'>
	        <div class="title-box" slot='search' >
	        </div>
	        <div class="header-right"  slot='icon-image' @click='log'>
	        </div>
	     </header-bar>	 
	     <component :is="currentView"></component>    
	</div>
</template>
<script>
import headerBar from "@/components/header/header"
import logIn from "@/components/user/logIn"
import userCenter from "@/components/user/userCenter"
	export default{
             data(){
             	return {
             		title:"用户登录",
             		 flag:false,
             		 currentView:''
             	}
             },
             created:function(){
                //获取登录状态 localstorage存储
                var islogIn=window.localStorage['userName'];
                 if(!islogIn){
                     this.currentView='logIn';
                 }else{
                 	 this.currentView='userCenter';
                 }
                
             },
             methods:{
             	 log:function(){
			      	this.flag=!this.flag;
			      },
		          wait:function(res){
		          	this.flag=res;
		          }
             },
             components:{
             	headerBar,
             	logIn,
             	userCenter
             }
	}
</script>
<style lang='less' scoped>
    .user{
    	width:100%;
    	height:100%;
    }
	.bg{
        background: rgb(0, 145, 198)!important;
        opacity: 0.95!important;
      }
       .header-right{
	    background:url(../../../static/images/ico_02.png) no-repeat 50% 50%;
	 }
</style>