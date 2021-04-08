import Vue from  'vue'
import Vuex from 'vuex'
import profiles from "./profiles";
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store( {
    strict: process.env.NODE_ENV !== 'production',
    modules :{
        profiles, chat
    }
})