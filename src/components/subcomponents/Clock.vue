<template>
    <div class="container">

        <Button @click="value3 = true">
            <img src="../../common/images/clock.png" style="width: 32px">
            <br>时钟
        </Button>

        <Drawer
                title="时钟"
                v-model="value3"
                width="400"
                :styles="styles"
        >
            <Form>
                <Row :gutter="32">
                    <Col span="12">

                    </Col>

                </Row>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="cancel">取消时钟插件</Button>
                <Button type="primary" @click="submit">重置时钟时间</Button>
            </div>
        </Drawer>

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
    ...mapState(['myMap'])
  },
  created () {

  },
  methods: {
    async getlunbotu () {

    },
    submit () {
      this.$Message.info('加载')
      var viewer = this.myMap.viewer
      var Cesium = this.myMap.Cesium

      /* var clock = new Cesium.Clock({

        startTime: Cesium.JulianDate.fromIso8601('2013-12-25'),
        //
        currentTime: Cesium.JulianDate.fromIso8601('2013-12-25'),
        stopTime: Cesium.JulianDate.fromIso8601('2013-12-26'),
        // 时间循环
        clockRange: Cesium.ClockRange.LOOP_STOP, // loop when we hit the end time
        clockStep: Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
        // 加速
        multiplier: 4000 // how much time to advance each tick
      }) */

      var resetTime = Cesium.JulianDate.fromIso8601('2013-12-25')
      viewer.clockViewModel.currentTime = resetTime
      viewer.timeline.updateFromClock()

      //                viewer.clockViewModel.clock =clock;

      // 光效
      viewer.scene.globe.enableLighting = true
    },

    cancel () {
      this.$Message.info('试图取消')
      //
      var viewer = this.myMap.viewer
      // var Cesium = this.myMap.Cesium
      // 应该不成功，因为是只读属性
      viewer.animation = true
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
