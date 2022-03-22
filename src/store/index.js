import todos from './modules/todos';
import { createStore } from 'vuex'

let store = createStore({
    modules: {
        todos
    }
})

export default store;