<template>
    <div class="container">

        <Button @click="enlarge">
            <img src="../../assets/images/enlarge.png" style="width: 16px">
            放大
        </Button>
        <Button @click="shrink">
            <img src="../../assets/images/shrink.png" style="width: 16px">
            缩小
        </Button>

    </div>
</template>

<script>
// 导入自己封装的轮播图子组件

import { mapState } from 'vuex'

export default {
  data () {
    return {
      value3: false,
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      location: ''

    }
  },
  computed: {
    ...mapState(['viewer'])
  },
  created () {

  },
  methods: {
    async getlunbotu () {

    },
    enlarge () {
      this.$Message.info('放大')
      // zoomIn(amount) amount Number    optional The amount to move.
      // 缩放距离amount，单位：米，沿摄像机的视角方向。
      // 缩放 镜头到视角方向地面 的直线距离的 0.2倍。
      this.viewer.camera.zoomIn(this.viewer.camera.positionCartographic.height / Math.abs(Math.sin(this.viewer.camera.pitch)) * 0.2)
    },
    shrink () {
      this.$Message.info('缩小')
      this.viewer.camera.zoomOut(this.viewer.camera.positionCartographic.height / Math.abs(Math.sin(this.viewer.camera.pitch)) * 0.2)
    }
  },
  components: {
    // 注册子组件

  }
}
</script>

<style lang="scss" scoped>

    .container {
        display: flex;
        flex-direction: column;

        /*label {*/
        /*display: inline;*/
        /*}*/
        /*input {*/
        /*display: inline;*/
        /*}*/
    }

</style>
