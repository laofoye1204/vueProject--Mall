<template>
	<footer id='footer-bar'>
		<router-link to="/home">
			<span>首页</span>
		</router-link>
		<router-link to="/catalog">
			<span>分类</span>
		</router-link>
		<router-link to="/search">
			<span>搜索</span>
		</router-link>
		<router-link to="/cart">
			<span>购物车 <i class="proNum">{{$store.state.proNum}}</i></span>
		</router-link>
		<router-link to="/user">
			<span>登录</span>
		</router-link>
	</footer>
</template>
<script>
	export default{

	}
</script>
<style lang="less" scoped>
	#footer-bar{
		width:100%;
		height:.44rem;
		display:-webkit-box;
		-webkit-box-align:center;
        -webkit-box-pack:center;
		position:fixed;
		bottom:0;
		left:0;
		background-color: #2f2f2f;
		z-index:2;
        a{
        	display:block;
            -webkit-box-flex:1;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-box-align:center;
            -webkit-box-pack:center;
            position: relative;
            b{
            	display:block;
                -webkit-box-flex:1;
                display:-webkit-box;
				-webkit-box-align:center;
		        -webkit-box-pack:center;

                img{
                	display:block;
                	width:.3rem;
                	height:.3rem;
                }
                &:nth-child(2){
                	display:none;
                }
                &:nth-child(1){
                	display:block;
                }
            }
            span{
            	display:block;
            	line-height:.18rem;
            	font-size:.12rem;
            	color:#fff;	
            }
            .proNum{
                 position: absolute;
                 top:-.1rem;
                 right:.1rem;
                 font-style:normal;
                 padding:0 .05rem;
                 height:.15rem;
                 line-height:.15rem;
                 background:red;
                 border-radius:50%;
            }
        }
       
        .router-link-active{
        	
            b{
                &:nth-child(1){
                	display:none;
                }
                &:nth-child(2){
                	display:block;
                }
            }
            span{
            	color:#abcdef;
            }
        }
	}
</style>