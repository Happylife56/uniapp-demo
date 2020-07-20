
interface configState {
  userInfo: object,
  globalData: any,
  storeList: Array<object>,
  selectedStore: object
}

const state: configState = {
  userInfo: {},
  globalData: {},
  storeList: [],
  selectedStore: {}
}

const mutations = {
  // 保存微信的用户信息
  SET_USER_INFO(state: configState, user: object) {
    state.userInfo = user
  },
  // 设置globalData
  SET_GLOBAL_DATA(state: configState, data: object) {
    state.globalData = data
  },
  // 设置门店的列表
  SET_STORE_LIST(state: configState, list: Array<object>) {
    state.storeList = list
  },
  // 设置选择的门店
  SET_SELECTED_STORE(state: configState, store: object) {
    state.selectedStore = store
  }

}

const actions = {
  addNumber(context: any, number: number) {
    context.commit('ADD_NUMBER', number)
  }
}

const getters = {
  getNumbers(state: configState) {
    return state.numbers
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
