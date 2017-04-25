<template>
	<div>
		<h4>这里是详情页，就不做css效果了</h4>
		<div>
			获取到商品的ID为{{argId}}
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				argId:0
			}
		},
		mounted:function(){
			this.argId=this.$route.params.id;
		}
	}
</script>