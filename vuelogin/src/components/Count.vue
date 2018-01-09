<template>
  <div>
    <h2>{{msg}}</h2><hr>
    <h3>{{count}}</h3>  
    <!-- {{$store.state.count}} -->
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <!-- <button @click="add">+</button> -->
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <!-- <button @click="add">+</button> -->
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'

export default {
  data () {
    return {
      msg:'Hello Vuex'
    }
  },
  // computed:{
  //   count() {
  //     return this.$store.state.count
  //   }
// },
  // computed:mapState ({
  //   count:state => state.count
  // }), 
  // 使用最多
  computed:{
    ...mapState (['count']),
    // count(){
    //   return this.$store.getters.count
    // }
    // ...mapGetters (['count'])
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>
