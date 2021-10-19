import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        auth: false,
        accountBal: 100000,
        count:0,
        transHistory:[
            {
                id:'Fred',
                banK:'Prestine',
                amount:2000,
                reciever:'Ben calz'
            },
            {
                id:'brown',
                banK:'Prestinecw wwcd',
                amount:3000,
                reciever:'Ben calz'
            },
            {
                id:'tony monn',
                banK:'Prestine',
                amount:60000,
                reciever:'Ben calz'
            },
            {
                id:'ghhjkl',
                banK:'Prestine',
                amount:6700,
                reciever:'Ben calz'
            },
            {
                id:'Fredt',
                banK:'Prestine',
                amount:90000,
                reciever:'Ben calz'
            },
            {
                id:'Fredp',
                banK:'Prestine',
                amount:80000,
                reciever:'Ben calz'
            }

        ]
    },
    mutations:{
        updateTransHistory(state, transaction){
            state.accountBal = state.accountBal-transaction.amount
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

