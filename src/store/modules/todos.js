import axios from "axios";

const state = {
    todos: []
};
const getters = {
    allTodos: state => state.todos
};
const actions = {
    async fetchTodos({commit}) {
        // Just to make it more real to live project - adding error handling. Better use try-catch as much as possible to avoid unclear behaviour
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('SET_TODOS',response.data);
        }
        catch(err) {
            console.log(err);
            return err;
        }
    },

    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed:false});
        commit('NEW_TODO',response.data);
    },
    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('REMOVE_TODO', id);
    },
    async filterTodos({commit}, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);
        commit('SET_TODOS',response.data);
    },
    async updateTodo({commit}, updTodo) {
        try {
            const response =  await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
            commit('UPDATE_TODO', response.data);
        }
        catch(err) {
            alert(err)
        }
    },
};
const mutations = {
    // Mutations usually named with upper case. For easier differentiation with Actions
    SET_TODOS:(state, todos) => (state.todos = todos),
    NEW_TODO:(state, todo) => (state.todos.unshift(todo)),
    REMOVE_TODO:(state, id) => state.todos = state.todos.filter(todo=>todo.id !== id),
    UPDATE_TODO:(state, updTodo) => {
        console.log(updTodo.index)
        // looks better and cleaner huh?:)
        if (updTodo.index !== -1){
            state.todos.splice(updTodo.index, 1, updTodo)
        }
    }
};

export default  {
    state,
    getters,
    actions,
    mutations
};
