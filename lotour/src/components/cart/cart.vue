<template>
	<div class="cart">
		  <header-bar :goBack='true' class="bg" head-title="购物车" :flag="flag" @flagChange='ditpach'>
	        <div class="title-box" slot='search' >
	        </div>
	        <div class="header-right"  slot='icon-image'  @click='log'>
	        </div>
	     </header-bar>
	     <div class="container">
	     	<div class="empty" v-show='proNum==0'>
	     		<img src='../../../static/images/ico_13.gif' alt="">
	     		<p>购物车是空哒~快去买买买</p>
	     		<router-link to="/"  class="link">去逛逛</router-link >
	     		<router-link  class="link" to="/">查看收藏夹</router-link >
	     	</div>
            <div class="proContent">
            	<ul class="proList">
            		<li class="proItem" v-for='(item,index) in proList'>
            			<div class="pro-left">
            				<img v-lazy="item.img" width='96' height='96'>
            			</div>
            			<div class="pro-right">
            				<h4 class="title">{{item.title}} <span>{{item.size}}</span></h4>
            				<p class="price">单价：￥{{item.price}}元</p>
            				<p class="num">
            				    <span>数量：</span>
            					<span class="buttonbox">
									<button class="button_a" @click='changeNum(index,-item.beishu)'>-</button>
					                <input class="inputBg" type="number" min="1" autocomplete="off" v-model='item.num'>
					                <button class="button_a"  @click='changeNum(index,item.beishu*1)'>+</button>
                               </span>
                               <span class="delete" @click='deletePro(index)'>
	                                <a href="javascript:;"><b></b></a>
                               </span>
            				</p>
            			</div>
            		</li>
            	</ul>
            	<footer class="cart-footer">
            		<div class="total"><span>合计:</span><b>￥{{total}}元</b></div>
            		<div class="buy">结算({{proNum}})</div>
            	</footer>
            </div>
	     </div>
	</div>
</template>
<script>
	import headerBar from "@/components/header/header"
	export default{
		components:{
			headerBar
		},
		data(){
			return {
				flag:false,
				proNum:0,
				proList:[]
			}
		},
		computed:{
          total:function(){
          	var total=0;
          	this.proList.forEach( function(val) {
                 total+=val.num*val.price;
          	});
          	return total.toFixed(2);
          }
		},
		created:function(){
			this.$emit('bodyH',true);
			this.proNum=this.$store.state.proNum;
			this.proList=this.$store.state.arr;
		},
		methods:{
			 log:function(){
		      	this.flag=!this.flag;
		      },
		      ditpach:function(res){
                 console.log(res);
		      },
		      changeNum:function(index,beishu){//点击+或-
                   this.proList[index].num+=beishu;
                   if( this.proList[index].num<=0){
                   	 this.proList[index].num-=beishu;
                   	 return false;
                   }
            	   this.proNum+=beishu;
            	   var obj={};
            	   obj.arr=this.proList;
            	   obj.num=this.proNum;
            	   this.$store.commit('setObj',obj);
            	   this.$store.commit('setStorage',obj.arr);
		      },
		      deletePro:function(index){
		      	var deleteNum=this.proList[index].num;
                  this.proList.splice(index,1);
                  this.proNum-=deleteNum;
                  var obj={};
            	  obj.arr=this.proList;
            	  obj.num=this.proNum;
                  this.$store.commit('setObj',obj);
            	  this.$store.commit('setStorage',obj.arr);
		      }
		}
	}
</script>
<style lang="less" scoped>
	.cart{
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
	.container{
		width:100%;
		height:100%;
		.empty{
			width:100%;
			margin-top:.8rem;
			margin-bottom:.3rem;
            text-align:center;
            padding:.1rem;
            box-sizing:border-box;
            img{
            	width:40%;
            }
            p{
            	margin-bottom:.3rem;
            }
            .link{
            	width:100%;
            	display:block;
            	height:.4rem;
            	line-height:.4rem;
            	color:#fff;
            	border-radius:.1rem;
            	margin-top:.12rem;
            	&:nth-of-type(1){
            	  background: #6bd0a2;
            	}
            	&:nth-of-type(2){
            	   background: #0091c6;
            	}
            }
		}
		.proContent{
			padding-top:.44rem;
			width:100%;
			height:100%;
			display:-webkit-box;
			-webkit-box-orient:vertical;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			.proList{
				-webkit-box-flex:1;
				width:100%;
				.proItem{
					width:100%;
					display:-webkit-box;
					background:#fff;
				}
				.pro-left{
					width:.96rem;
					display:-webkit-box;
					-webkit-box-align:center;
					-webkit-box-pack:center;
					img{
						display:block;
						-webkit-box-flex:1;
					}
				}
				.pro-right{
					-webkit-box-flex:1;
					padding:.08rem;
					.title,.price{
						width:100%;
						line-height:.2rem;
						overflow:hidden;
						font-size:.12rem;
					}
				    .num{
				    	width:100%;
				    	height:.4rem;
				    	line-height:.4rem;
				    	.buttonbox{
				    		display:inline-block;
				    		border:1px solid #eee;
				    		border-radius:.05rem;
                            .button_a{
                            	display:inline-block;
                            	width:.3rem;
                            	height:100%;
                            	background:#fff;
                            	border:0;
                            }
                            input{
                            	width:.6rem;
                            	border:0;
                            	border-left:1px solid #eee;
                            	border-right:1px solid #eee;
                            	display:inline-block;
                            	height:100%;
                            }
				    	}
				    	.delete{
				    		float:right;
				    		width:.4rem;
				    		height:100%;
				    		padding-left:.08rem;
				    		box-sizing:border-box;
				    		a{
				    			display:inline-block;
				    			width:.24rem;
				    			height:.24rem;
				    			vertical-align:middle;
				    			border-radius:.05rem;
				    			background:#ccc;
				    			b{
				    				display:block;
				    				width:100%;
				    				height:100%;
				    				background:url(../../../static/images/ico_16.png) no-repeat;
					    			background-size:90%;
					    			background-position:center center;
				    			}
				    			
				    		}
				    		
				    	}
				    }
				}
			}
			.cart-footer{
				width:100%;
				height:.44rem;
				line-height:.44rem;
				display:-webkit-box;
                .total{
                	-webkit-box-flex:1;
                	height:100%;
                	padding-left:.1rem;
                    background:#000;
                	color:#fff;
                	b{
                		font-size:.16rem;
                	}
                }
                .buy{
                	width:1.2rem;
                	height:100%;
                	font-size:.16rem;
                	text-align:center;
                	background:#0091c6;
                	color:#fff;
                }
			}
		}
	}
</style>