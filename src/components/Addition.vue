<template>
    <div>
        State: <h3>The count value is: {{ $store.state.count }}</h3>
        <p>----------------------------------</p>
        Getters:<h3>The count value is: {{ $store.getters.showNum }}</h3>
        <p>----------------------------------</p>
        <button @click="btnhandle1">+1</button>
         <button @click="btnhandle2">+3</button>
         <button @click="btnhandle3">+1 Async</button>
         <button @click="btnhandle4">+4 Async</button>
    </div>
</template>
<script>
export default {
    data(){
        return{};
    },
    methods: {
        btnhandle1(){
            //this.$store.state.count++  //不合法的用state修改全局数据
            this.$store.commit('add')
        } ,
         btnhandle2(){
    
            this.$store.commit('addN',3)
        } ,
        btnhandle3(){
            //dispatch 函数专门用来调用Action
            this.$store.dispatch('addAsync')

        },
        btnhandle4(){
            //dispatch 函数专门用来调用Action
            this.$store.dispatch('addNAsync',4)

        },
    }
    
};
</script>