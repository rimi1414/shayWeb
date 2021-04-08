import state from './chate.state';
import actions from './chat.actions';
import mutations from './chat.mutations';
import getters from './chat.getters'



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

