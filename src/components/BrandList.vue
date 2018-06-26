<template>
    <!-- <div class="brand-list">
        
        
       <ul class="swipe-list">
          <li class="list" :key="index" v-for="(brand, index) in list">
            <img :src="brand.brandLogoImageURL" alt="" class="brand-logo">
            <div class="brand-title small">{{brand.brandName}}</div>
          </li>
        </ul>
    </div> -->
    <div class="content">
        <div class="content-header">
            <ul class="swipe-list">
                <li class="swipe" :key="index" v-for="(brand, index) in list">
                    <img :src="brand.brandLogoImageURL" class="swipe-pic">
                    <span class="small">{{brand.brandName}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: ['list']
}
</script>
<style lang="scss" scoped>
.content{
    width: 100%;
}
.content-header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px #EA5A49 solid;
    padding-top: 5px;
    box-sizing: border-box;
}
.swipe-list{
    width: auto;
    display: flex;
    list-style-type: none;
    font-size: 0;
    overflow-x: scroll;
    flex-wrap: nowrap;
    box-sizing: border-box;
    padding: 0 5px;
    -webkit-overflow-scrolling: touch;
}
.swipe{
    padding: 0 5px;
}
.small{
    display: inline-block;
    overflow: scroll;
    word-break: break-all;
    word-wrap:break-word;
}
.swipe-pic{
    width: 80rpx;
    height: 80rpx;
}
</style>


