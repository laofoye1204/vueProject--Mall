<template>
	<div class="scrollToTop">
		<div class="pos">
			<a v-for='item in content' :href="item.href">{{item.title}}</a>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			content:{
		      type:Array,
		       default:function(){
                 return []
		      }
		    }
		},
		methods:{


		}
	}
</script>
<style lang='less' scoped>
	.scrollToTop{
		float: left;
		font-size: .14rem;
		height:.21rem;
		overflow: hidden;
		a{
			display:block;
			width:100%;
			color: #C00;
			line-height:.21rem;
		}
	}
	.pos{
		 margin-top: 0;
		-webkit-animation: brief-spinner 18s linear 0s normal none infinite;
	}
	@keyframes brief-spinner {
	    0% {
	        margin-top: 0;
	    }
	    20% {
	        margin-top: 0;
	    }
	    24% {
	       margin-top: -21px;
	    }
	    40% {
	        margin-top: -21px;
	    }
	    44% {
	        margin-top: -42px;
	    }
	    60% {
	        margin-top: -42px;
	    }
	    64% {
	        margin-top: -21px;
	    }
	    80% {
	       margin-top: -21px;
	    }
	    84% {
	       margin-top: 0;
	    }
	    100% {
	        margin-top: 0;
	    }
}        
</style>