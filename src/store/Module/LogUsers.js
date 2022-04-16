const state = {
    logUser: false,
    user: [],
};

const getters = {
    loggedOut: (state) => state.logUser,
    getUser: (state) => state.user,
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
            state.logUser = true;
            state.user = userData
        }
    },
    userDetails: (state, userData) => state.user.push(userData),

    SignOut: (state) => {
        state.logUser = false
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}