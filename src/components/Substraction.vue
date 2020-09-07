<template>
    <div>
        State:<h3>The count value is: {{count}}</h3>
        <p>----------------------------------</p>
        Getters: <h3>The count value is: {{showNum}}</h3>
        <p>----------------------------------</p>
        <button @click="bnthandle1">-1</button>
        <button @click="bnthandle2">-3</button>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    data(){
        return{};
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['showNum'])
    },
    methods: {
        ...mapMutations(['sub','subN']),
        bnthandle1(){

            this.sub()
        },
        bnthandle2(){
            this.subN(3)
        }
    }
    
};
</script>