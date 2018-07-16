<template>
    <div class="multi-media">
        <slot></slot>
        <video :src="url"
                controls>

        </video>
    </div>
</template>
<script>
export default {
  props: ['url']
}
</script>
<style lang="scss">
.multi-media {
    video{
        width: 100%;
        padding: 0 5px;
        box-sizing: border-box;
    }
}
</style>


