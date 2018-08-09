import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    levels: [
      {
        id: 1,
        rate: 100,
        type: 'web development',
        stack: ['node', 'express', 'mongoDB'],
        status: {
          active: true,
          progress: 30,
          complete: false
        },
        project: {
          title: 'Lets Talk Apparel',
          img: 'img'
        }
      },
      {
        id: 2,
        rate: 200,
        type: 'web development',
        stack: ['node', 'express', 'mongoDB'],
        status: 'default',
        complete: false
      },
      {
        id: 3,
        rate: 300,
        type: 'web development',
        stack: ['node', 'express', 'mongoDB'],
        status: 'default',
        complete: false,
        project: {
          title: 'Collective Nourishment',
          img: 'img'
        }
      },
      {
        id: 4,
        rate: 400,
        type: 'web development',
        stack: ['node', 'express', 'mongoDB'],
        status: 'default',
        complete: false
      }
    ]
  },
  getters: {
    getLevels: state => {
      return state.levels
    },
    getCurrentLevel: state => {
      return state.levels.find(level => level.status.active === true)
    }
  },
  actions: {},
  mutations: {},
  modules: {}
})
