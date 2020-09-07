import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' //异步


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0, //默认值

        inputValue: 'aaa',
        nextId = 5,
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
        },
        initList(state, list) {
            state.list = list
        },

        setInputValue(state, val) {
            state.inputValue = val
        },
        addItemMutation(state) {
            const obj = {
                id: state.nextId,
                info: state.inputValue.trim(),
                done: fales
            }
            state.list.push(obj)
            state.nextId++
                state.inputValue = ''
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

        },
        getList(context) {
            axios.get('list.json').then(({ data }) => {
                console.log(data)
                context.commit('initList', data)
            })
        }


    },
    getters: {
        // getter不会修改store里面存储的数据 只会包装store里面state的数据，store里面数据改变 getter里面数据跟着变
        // 使用getters的方法：
        // 1. this.$store.getters.名称； 
        // 2. import { mapGetters } from 'vuex'
        //    computed: {
        //    ...mapGetters (['showNum'])
        // }
        showNum(state) {
            return '当前数量是[' + state.count + ']'

        }
    },

    modules: {}
})