import Router from '../Router'

const state = {
    login : {},
    msg : {},
    convoUsers : {},
}

const getters = {
    loginResponse : (state) => state.login,
    convoMsg : (state) => state.msg,
    allConvoUsers : state => state.convoUsers
}

const actions = {
    login({commit}, data) {
        axios.get('/sanctum/crsf-cookie')
        .then(() => {
            axios.post('/api/login/submit', data)
            .then(response => {
                commit('mutataLogin', response.data)
                sessionStorage.setItem('loginResponse', JSON.stringify(response.data))
                if(response.data.success) {
                    Router.push({ name : 'home.conversations'})
                }
            })
            .catch(error => {
                console.log(error)
            })
        })
    },

    logout({commit}) {
        axios.post('/api/logout')
        .then(response => {
            if(response.data) {
                commit('mutataLogin', {})
                sessionStorage.setItem('loginResponse', JSON.stringify({}))
                Router.push({name : 'login'})
            }
        })
        .catch(error => {
            console.log(error)
        })
    },

    sendMsg({commit}, request) {
        axios.post('/api/messages/create', request)
        .then(response => {
            if(response.status == 200) {
                commit('mutateMsg', response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
    },

    allMsg({commit}, request) {
        axios.post('/api/messages', {'convoSid' : request})
        .then(response => {
            if(response.status == 200) {
                //console.log(response.data)
                commit('mutateMsg', response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })     
    },

    ConvoUsers({commit}, request) {
        axios.post('/api/conversations/users', {'sid' : request})
        .then(response => {
            if(response.status == 200) {
                commit('mutateConvoUsers', response.data)
            }
        })
    }
}

const mutations = {
    mutataLogin : (state, payload) => state.login = payload,
    mutateMsg : (state, payload) => state.msg = payload,
    mutateConvoUsers : (state, payload) => state.convoUsers = payload,
}

export default {
    state, getters, actions, mutations
}