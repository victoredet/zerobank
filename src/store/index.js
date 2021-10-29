import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        auth: false,
        accountBal: '80000',
        count:1,
        transHistory:[
            {
                id:'Fred Bradford',
                banK:'BOA',
                amount:2000,
                reciever:'Ben calz'
            },
            {
                id:'Spencer vendolitta',
                banK:'Prestine Bank',
                amount:3000,
                reciever:'Ben calz'
            },
            {
                id:'tony monn',
                banK:'Prestine Bank',
                amount:60000,
                reciever:'Ben calz'
            },
            {
                id:'Saji Amar',
                banK:'BOA',
                amount:6700,
                reciever:'Ben calz'
            },
            {
                id:'Fred Bradford',
                banK:'BOA',
                amount:90000,
                reciever:'Ben calz'
            },
            {
                id:'Donald Ben',
                banK:'Paypal',
                amount:80000,
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

