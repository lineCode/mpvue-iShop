<template>
    <div class="multi-media">
        <slot></slot>
        <swiper
          @change="currentChange"
          indicator-dots= 'true'
		  indicator-color="#EA5149"
		  :autoplay='true'
		  :interval="6000"
		  :duration='1000'
		  :circular="true"
		>
			<div :key="imgindex" v-for="(top,imgindex) in items" class="swiptlist">
				<swiper-item>
                    <img :src="top" 
                    class="slide-image" 
                    mode="scaleToFill"
                    >
				</swiper-item>
			</div>
		</swiper>
    </div>
</template>
<script>
export default {
  props: ['items']
}
</script>
<style lang="scss">
.multi-media {
    swiper{
        height: 200px;
    }
    .swiptlist{
        .slide-image{
            padding: 0 5px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }
    }
}
</style>


