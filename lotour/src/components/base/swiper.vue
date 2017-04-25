<template>
    <swiper :options="swiperOption" class='swiper'>
		  <swiper-slide v-for="slide in swiperSlides">
		  	<img :src="slide.img">
		  </swiper-slide>
		  <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>
<script>
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        pagination : '.swiper-pagination',
        observeParents:true
      }
    }
  },
  props:{
  	swiperSlides: ''
  }
}
</script>
<style lang="less" scoped>
.swiper{
  margin-bottom:.02rem;
}
	.swiper-slide{
		img{
			display:block;
			width:100%;
		}
	}
</style>