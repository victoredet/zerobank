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
                            <h2> $ 30,000 </h2>
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

export default {
    name:'Dashboard',

    data(){
        return{
            accountBal:[]
        }
    },

    methods:{
        async getUser(){
            const res = await fetch('http://localhost/3001/user')
            
            const data = await res.json()
            console.log(data)
        }
    },
     async created(){
       this.getUser() = await this.getUser()
    },

    components:{
        Sidebar,
        NavBottom,
        NavTop
    }
}
</script>