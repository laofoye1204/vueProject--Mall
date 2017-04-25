<template>
	<div class="LeftOneRightTwo">
		<div class="left">
			<a :href="content[0].href"><img v-lazy='content[0].img'></a>
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
			width:100%;
			float:left;
			a{
				display:block;
				width:100%;
				height: auto!important;
				    border-bottom: 1px solid #e5e5e5;
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