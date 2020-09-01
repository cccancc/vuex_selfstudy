import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0 //默认值
    },
    mutations: {
        add(state) {
            //变更状态
            state.count++
        },
        addN(state, step) {
            //传参
            state.count += step
        },
        sub(state) {
            //变更状态
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }
    },
    actions: {
        ///用于处理异步任务，还是要利用Mutation方式间接变更数据
        addAsync(context) {
            //context 
            setTimeout(() => { context.commit('add') }, 1000)

        },
        addNAsync(context, step) {
            //context 
            setTimeout(() => { context.commit('addN', step) }, 1000)

        }


    },
    modules: {}
})