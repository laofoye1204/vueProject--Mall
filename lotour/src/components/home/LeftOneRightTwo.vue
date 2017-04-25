<template>
	<div class="LeftOneRightTwo">
		<div class="left">
			<a :href="content[0].href"><img v-lazy='content[0].img'></a>
		</div>
		<div class="right">
		   	<a :href="content[1].href"><img v-lazy='content[1].img'></a>
		   	<a :href="content[2].href"><img v-lazy='content[2].img'></a>
		</div>
	</div>
</template>	
<script>
	export default{
		props:{
			content:{
				type:Array
			}
		}
	}
</script>
<style lang="less" scoped>
	.LeftOneRightTwo{
		width:100%;
        overflow:hidden;
		.left,.right{
			width:50%;
			float:left;
			box-sizing:border-box;
			a{
				display:block;
				width:100%;
				border-left: 1px solid #e5e5e5;
				img{
					display:block;
					width:100%;
				}
			}
		}
		.right{
			a{
				border-left: 1px solid #e5e5e5;
			}
		}
	}
</style>