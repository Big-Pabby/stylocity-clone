const state = {
    logUser: false
};

const getters = {
    loggedOut: (state) => state.logUser,
};

const actions = {
    SucessfulLogin({commit}, userData) {
        commit ('showShop', userData)
    },

    logOut({commit}) {
        commit ('SignOut')
    }
};

const mutations = {
    showShop: (state, userData) => {
        if(userData !== 'error loggin in') {
            return state.logUser = true
        }
    },
    SignOut: (state) => {
        return state.logUser = false,
        this.$router.push({ path: '/home'})
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}