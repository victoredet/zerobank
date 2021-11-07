import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        auth: false,
        accountBal: '612500',
        count:1,
        transHistory:[
            {
                id:'Investment ROI',
                banK:'BOA',
                amount:612500,
                reciever:'Ben calz'
            }
        ]
    },
    mutations:{
        initialAccBal(state, account){
            state.accountBal = account.accountBal
        },
        updateTransHistory(state, transaction){
            state.accountBal = state.accountBal-transaction.amount
            state.transHistory = [...state.transHistory, transaction]
            state.count = state.count+1
        },
        setAuth(state){
            state.auth = true 
        },
        logout(state){
            state.auth = false 
        }
    },
    actions:{

    },
    modules:{

    }
})

