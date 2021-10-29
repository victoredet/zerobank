<template>
    <div class="dash">
        <div class="d-flex">
            <div class="d-none d-md-block col-4">
                <Sidebar />
            </div>
            <div class="col dash-content">
                <div class="d-md-none dash-nav">
                    <NavTop />
                </div>
                <div class="dash-top col mx-auto">
                    <h1 class="fw-bold text-primary m-2 mt-4">Dashboard</h1>
                    <div class="row container">
                        <div class="col card border-0 shadow m-1">
                            <p class="">Account Balance</p>
                            <div>
                                <h2>${{$store.state.accountBal }} </h2>
                            </div>

                        </div>
                    </div>

                    <h3 class="fw-bold text-primary m-2 mt-4">Transactions</h3>
                    <div class="container bg-white shadow-sm">
                        <div v-for="transaction in $store.state.transHistory" :key="transaction.id" class="transaction border-2 border-bottom">
                            <div class="container d-flex justify-content-between">
                                <div class="col-5">
                                    <p class="mt-2 ms-3"><span class="fw-bold fs-3">${{transaction.amount}}</span>

                                        <br>
                                        {{transaction.banK}}
                                    </p>
                                </div>
                                <div class="col-5">
                                     <p class="m-3 fw-bold text-capitalize">{{transaction.id}} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavBottom />
    </div>
</template>
<script>
import NavBottom from '../components/NavBottom.vue';
import Sidebar from '../components/Sidebar.vue';
import NavTop from '../components/Nav-top.vue';
import axios from 'axios'

export default {
    name:'Dashboard',
    async beforeMount(){
    if(!this.$store.state.auth){
      this.$router.push('/login')
    }
     
    //   if(user.access)
  },
   mounted(){
    // console.log(this.$store.state.transHistory)

    //   await axios.get('https://bybit-autotrading.com/users/zero').then((response) => {
    //       const account = response.data;
    //        let test = localStorage.getItem('@user');
    //   test = JSON.parse(test);
    //   console.log(test)
    //       console.log(account.accountBal)
    //       this.$store.commit('initialAccBal', account)
    //   })

  },
    components:{
        Sidebar,
        NavBottom,
        NavTop
    }
}
</script>