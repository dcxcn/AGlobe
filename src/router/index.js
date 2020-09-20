import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由组件
import LayerContainer from '../components/tabbar/LayerContainer.vue'
import MarkContainer from '../components/tabbar/MarkContainer.vue'
import MeatureContainer from '../components/tabbar/MeatureContainer.vue'
import SettingContainer from '../components/tabbar/SettingContainer.vue'
import TerrainContainer from '../components/tabbar/TerrainContainer.vue'
import ViewContainer from '../components/tabbar/ViewContainer.vue'

import StartContainer from '../components/ribbon/StartContainer.vue'
import ModelContainer from '../components/ribbon/ModelContainer.vue'
import DataContainer from '../components/ribbon/DataContainer.vue'
import EvenContainer from '../components/ribbon/EventContainer.vue'

import SystemContainer from '../components/ribbon/SystemContainer.vue'
import AnalyseContainer from '../components/ribbon/AnalyseContainer.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/start' },
  { path: '/start', component: StartContainer },
  { path: '/layer', component: LayerContainer },
  { path: '/data', component: DataContainer },

  { path: '/mark', component: MarkContainer },
  { path: '/meature', component: MeatureContainer },
  { path: '/model', component: ModelContainer },
  { path: '/setting', component: SettingContainer },
  { path: '/terrain', component: TerrainContainer },
  { path: '/view', component: ViewContainer },
  { path: '/event', component: EvenContainer },
  { path: '/system', component: SystemContainer },
  { path: '/analyse', component: AnalyseContainer }
]

const router = new VueRouter({
  routes
})

export default router
