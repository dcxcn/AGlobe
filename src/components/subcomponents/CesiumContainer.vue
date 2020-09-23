<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>
<script>
export default {
  name: '',
  mounted () {
    var Cesium = window.Cesium
    const tdt = new Cesium.WebMapTileServiceImageryProvider({
      url:
        'http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb',
      layer: 'tdtBasicLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
      show: false
    })
    var viewer = new Cesium.Viewer('cesiumContainer', {
      imageryProvider: tdt,
      selectionIndicator: false,
      animation: false,
      baseLayerPicker: false,
      geocoder: false,
      homeButton: false,
      timeline: false,
      sceneModePicker: true,
      navigationHelpButton: false,
      infoBox: false,
      fullscreenButton: true,
      terrainProvider: Cesium.createWorldTerrain()
    })
    // eslint-disable-next-line no-undef
    viewer.extend(Cesium.viewerCesiumNavigationMixin, {})
    viewer.cesiumWidget.creditContainer.style.display = 'none'
    // eslint-disable-next-line no-undef
    this.$store.commit('setCesiumViewer', { Cesium: Cesium, viewer: viewer })
    // eslint-disable-next-line no-console
    console.log(viewer)
  }
}
</script>
<style scoped>
  .map-box{
    width: 100%;
    height: 100%;
  }
  #cesiumContainer{
    width: 100%;
    height: 100%;
  }
</style>
