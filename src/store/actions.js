/*
通过mutation间接更新state的多个方法的对象

负责API的请求，结果更新通过mutations实现
 */
import {
  getmark
} from '../api'

export default {
  async addMarkList ({ commit, state }) {
    const responseBody = await getmark(state.user.token, state.pageIndex, state.markSubName)
    if (responseBody.status === 200) {
      const marks = responseBody.result.records
      if (marks.length === 0) {
        state.messageView('info', '没有更多')
        return
      }

      commit('addToMarkList', { marks })
      commit('setMarkCount', { count: responseBody.result.total })
    } else {
      state.messageView('info', '加载标注列表失败!' + responseBody.message)
    }
  }
}
