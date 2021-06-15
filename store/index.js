export const state = () => ({
    bb: 'close',
    mobile_header: 'open'
})

export const getters = {
    getterValue: state => {
        return state.goHome
    }
}

export const mutations = {
    BBOPEN(state){
        state.bb = 'open'
    },
    BBCLOSED(state){
        state.bb = 'close'
    },
    MHOPEN(state){
        state.mobile_header = 'open'
    },
    MHCLOSED(state){
        state.mobile_header = 'close'
    },
}

export const actions = {
    openBB({ commit }) {
        commit( 'BBOPEN')
    },
    closeBB({ commit }) {
        commit( 'BBCLOSED')
    },
    openMH({ commit }) {
        commit( 'MHOPEN')
    },
    closeMH({ commit }) {
        commit( 'MHCLOSED')
    }
}
