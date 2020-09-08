<template>
    <div>
<a-input placeholder="please input" class="my_ipt" 
:value="inputValue" @change="handleInputChange"/>
<a-button type="primary" @click="addItem">添加事项</a-button>
<a-list bordered :dataSource='list' class="dt_list">
    <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox :checked="item.done" @change="(e)=>{cbStatusChanged(e,item.id)}">{{item.info}} </a-checkbox>
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
    </a-list-item>
    <!--  footer  -->
    <div slot="footer" class="footer">
        <span> 0条剩余 </span>
        <a-button-group>
            <a-button type="primary">全部</a-button>
            <a-button>未完成</a-button>
        <a-button>已完成</a-button>
        </a-button-group>
        <a>清除已完成</a>
    </div>
</a-list>
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            //list:[]
        }
    },
       created(){
        this.$store.dispatch('getList')
    },

   computed: {
       ...mapState(['list','inputValue'])
   },
   method:{
       handleInputChange(e) {
           console.log(e.target.value)
           this.$store.commit('setInputValue',e.target.value)
       },
       addItem() {
           if(this.inputValue.trim.length<=0){
               return this.$message.warning('文本不能为空')
           }
           this.$store.commit('addItemMutation')
       },
       removeItemById(id){
           consle.log(id)
           this.$store.commit('removeItem',id)
           
   },
   cbStatusChanged(e,id){
//监听复选框状态(选中或者没有选中)
    console.log(e.target.checked+id)
   },

}
}
</script>

<style scoped>
#app {
    padding:10px;
}

.mp_ipt {
    width:500px;
    margin-right: 10px;
}

.my_ipt {
    width: 500px;
    margin-right: 10px;
}

.dt_list {
    width: 500px;
}

</style>