<template>
	<div id="header-bar">
	    <slot name='logo'></slot>
        <slot name='search'></slot>
        <section class="head_goback header-left" v-if="goBack" @click="$router.go(-1)">
           <a href="#" class="icon-back"></a>
        </section>
        <section class="title_head ellipsis" v-if="headTitle"  >
            <span class="title_text">{{headTitle}}</span>
        </section>
         <div class="list" v-show='flag' @click='log'>
		    <router-link to="/home">
				<span>首页</span>
			</router-link>
			<router-link :to='{path:"/catalog/"+argId}'>
				<span>分类</span>
			</router-link>
			<router-link to="/search">
				<span>搜索</span>
			</router-link>
			<router-link to="/cart">
				<span>购物车</span>
			</router-link>
			<router-link to="/user">
				<span>会员中心</span>
			</router-link>
	     </div>
		<slot name="icon-image" >
		</slot>
	</div>
</template>
<script>
	export default{
	   data(){
           return {
            	apiUrl: 'http://localhost:3000/catalog',
            	argId:''
            	
           }
	   },
       props: ['headTitle', 'goBack','tit','bgImg','flag',"id"],
       created:function(){
             if(this.id){
             	this.argId=this.id;
             }else{
             	 this.getCustomers();
             }
       },
       methods:{
			 log:function(){
			 	this.flag=!this.flag;
			 	var flag=this.flag;
			 	this.$emit('flagChange',flag);
		      	
		      },
		      getCustomers: function() {
		        this.$http.get(this.apiUrl)
		          .then((response) => { //请求成功
		            this.argId=response.data.content[0].id;
		          })
		          .catch(function(response) {//出错
		            console.log(response)
		          })
	        },
		}
	}
</script>
<style lang="less" scoped>
	#header-bar{
		width:100%;
		height:.44rem;
		padding:0 .05rem;
		box-sizing:border-box;
		overflow:hidden;
        position: fixed;
	    background: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0.498039) 0px, transparent 100%);
	    top: 0px;
	    opacity: 0.95;
	    z-index: 999;
	    .header-logo{
		    float:left;
		    width:.7rem;
		    height:100%;
		    .icon-logo{
		       width:100%;
		       height:100%;
		       display:block;
		       background:url(../../../static/images/logo.png) no-repeat 50% 50%;
		       background-size:100%;
		    }
        }
        .head_goback{
        	float:left;
		    width:.4rem;
		    height:100%;
        	line-height:.44rem;
        	background:url(../../../static/images/ico_10.png) no-repeat 50% 50%;
        	background-size:50%;
        }
        .title_head{
         	position:absolute;
		    left:.5rem;
		    top:0;
		    bottom:0;
		    right:0.5rem;
        	text-align:center;
        	line-height:.44rem;
        	color:#fff;
        }
	  .header-right{
	    float:right;
	    width:.4rem;
	    height:100%;
	    background-size:70%;
	    label{
           display:block;
           width:100%;
           height:100%;
           text-align:center;
           line-height:.44rem;
           color:#fff;
	    }
	  }
	  .title-box{
	    position:absolute;
	    left:.5rem;
	    top:0;
	    bottom:0;
	    right:.5rem;
	    &.homeIn{
          left:.8rem;
          right:.5rem;
	    }
	    form{
	      width:100%;
	      height:100%;
	      position:relative;
	      input{
	        border:none;
	        width:100%;
	        height:.32rem;
	        margin-top:.06rem;
	        line-height:1;
	        box-sizing:border-box;
	        padding-left:.1rem;
	        border-radius:.15rem;
	      }
	      button{
	        position:absolute;
	        right: 0;
		    bottom: 0;
		    top: 0;
		    width: .4rem;
		    height: .44rem;
	        background:url(../../../static/images/ico_07.png) no-repeat 50% 50%;
	        background-size:50%;
	        border:none;
	      }
	    }

	  }
	}
	.list{
		position:fixed;
		top:.54rem;
		right:.05rem;
		width:.95rem;
		border-radius:.1rem;
		background:#000;
		a{
			display:block;
			color:#fff;
			height:.3rem;
			line-height:.3rem;
			width:100%;
			padding-left:.2rem;
			box-sizing:border-box;
		}
		&:after{
			content: '';
		    width: 0;
		    height: 0;
		    border: 6px solid transparent;
		    border-bottom-color: rgba(0,0,0,0.80);
		    position: absolute;
		    top:-10px;
		    right:.2rem;
            z-index:10000000;
		}

	}
</style>