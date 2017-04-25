<template>
	  <div class="cast">
		<router-link  :to="{path:'/detail/'+id}">
             <img :src="img" alt="">
        </router-link>
		<h4 class="title">{{title}}</h4>
		<div>
			<div class="left">
				<span class="price">￥{{price}}元</span>
				<span class="beishu">倍数:{{beishu}}</span>
			</div>
			<div class="right" @click='addToCart(beishu)'>
				<img src="../../../static/images/cart.png" alt="" wdith='36' height='36'>
			</div>
		</div>
		<p class="size">{{size}}</p>
	</div>
</template>
<script>
	export default{
		props:['img','title','price','beishu','size','id'],
        methods:{
          addToCart:function(){
            var num=parseInt(this.beishu);
            var proMsg={
                img:this.img,
                title:this.title,
                price:this.price,
                beishu:this.beishu,
                num:num,
                size:this.size,
                id:this.id
            };
            //判断商品是否已经添加过了
            this.$store.commit('judgePro',this.id);
            if(this.$store.state.isAddPro){//无重复添加商品
                this.$store.commit('addProList',proMsg); //点击购物车 添加一次商品
            }else{ //已经添加过的商品，再次添加
                this.$store.commit('addItemPro',[num,this.id])
            }
            this.$store.commit('addNum',num); //添加总商品数
          }
        }
	}
</script>
<style lang='less' scoped>
	.cast{
		width: 33.333333333333%;
		float:left;
		border-right: 1px solid #EFEFEF;
        border-bottom: 1px solid #EFEFEF;
        box-sizing:border-box;
        padding: .1rem;
        color:#333;
        background: #fff;
        a{
        	width: 100%;
        	text-align: center;
        	img{
              display:block;
              width: 100%;
        	}
        }
        .title{
        	font-size: .1rem;
        	line-height: .18rem;
        	overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;

        }
        >div{
        	overflow: hidden;
        }
        .left{
        	float:left;
        	span{
        		display: block;
        		font-size: .1rem;
        		line-height:.18rem;
        		&.price{
        			    color: #0091c6;
        		}
        	}
        }
        .right{
        	float: right;
        }
        .size{
        	font-size: .1rem;
        	color: #fd4609;
            text-align:center;
        }
	}
</style>