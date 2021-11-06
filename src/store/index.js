import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        auth: false,
        accountBal: '800000',
        count:1,
        transHistory:[
            {
                id:'Fred Bradford',
                banK:'BOA',
                amount:20000,
                reciever:'Ben calz'
            },
            {
                id:'Spencer vendolitta',
                banK:'Prestine Bank',
                amount:30000,
                reciever:'Ben calz'
            },
            {
                id:'tony monn',
                banK:'Prestine Bank',
                amount:600000,
                reciever:'Ben calz'
            },
            {
                id:'Saji Amar',
                banK:'BOA',
                amount:67000,
                reciever:'Ben calz'
            },
            {
                id:'Fred Bradford',
                banK:'BOA',
                amount:900000,
                reciever:'Ben calz'
            },
            {
                id:'Donald Ben',
                banK:'Paypal',
                amount:800000,
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

