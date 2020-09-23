<template>
    <div class="container">

        <a @click="to3d">
            <img src="../../assets/images/planet.png" style="width: 16px">
            三维视图
        </a>
        <a @click="toGLB">
            <img src="../../assets/images/planet.png" style="width: 16px">
            哥伦布视图
        </a>
        <a @click="to2d">
            <img src="../../assets/images/grid.png" style="width: 16px">
            二维 视图
        </a>

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
    to3d () {
      this.$Message.info('转换三维视图')
      this.viewer.scene.morphTo3D(1)
    },
    toGLB () {
      // 哥伦布视图
      this.$Message.info('转换2.5维视图')
      this.viewer.scene.morphToColumbusView(1)
    },
    to2d () {
      this.$Message.info('转换二维视图')
      this.viewer.scene.morphTo2D(1)
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
