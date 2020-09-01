<template>
    <div>
        <h3>The count value is: {{count}}</h3>
        <button @click="bnthandle1">-1</button>
        <button @click="bnthandle2">-3</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    data(){
        return{};
    },
    computed:{
        ...mapState(['count'])
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