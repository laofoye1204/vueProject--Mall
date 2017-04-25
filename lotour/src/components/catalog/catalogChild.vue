<template>
	<div class="cataChild">
    	<div class="banner">
		  <img v-lazy='img' alt="" width="100%" >
	    </div>
		<dl v-for='item in room'>
			<dt class="items">
				<a href="#">{{item.tit}}</a>
			</dt>
			<dd >
				<a :href="i.href" v-for='i in item.goodsType'>{{i.msg}}</a>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default{
       data(){
       	return{
       		id:0
       	}
       },
       props:{
       	room:{
       		type:Array
       	},
       	img:''
       },
       mounted:function(){
       	
       }
	}
</script>
<style lang='less' scoped>
	.cataChild{
		height: 100%;
	    float: left;
	    width: 75%;
	    background-color: #ebeced;
	    -webkit-overflow-scrolling: touch;
	    overflow-y: scroll;
	    .banner{
	    	width: 100%;
	    	padding: .1rem;
	    	box-sizing:border-box;
	    }
        
	    a{
	    	display: inline-block;
	    	height:.3rem;
	    	line-height: .3rem;
	    	width: .6rem;
	    	color:#333;
	    	text-align: center;
	    	text-overflow: ellipsis;
	    	overflow: hidden;
	    	white-space: nowrap;
	    	margin-right: .1rem;
	    	margin-left: .2rem;
	    	background-color: #fff;
	    	margin-bottom: .1rem;
	    	font-size: .12rem;
	    }
	    .items a{
	    	color: #0091C6;
            border: solid 1px #0091C6;
            height: .2rem;
            line-height: .2rem;
            font-size: .14rem;
	    }
	}
</style>