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
                    <h1 class="fw-bold text-primary m-2 mt-2"></h1>
                    <br><br>
                    <div class="col-md-3 col-7 mx-auto text-center" >
                        <img src="../assets/check.png" class="w-100" alt="">
                    </div>
                    <p class="text-center fw-bold fs-3 m-1" >Your Transaction Was Successful! </p>
                    <div class="d-grid gap-2 col-md-5 col-7 mx-auto">
                        <router-link to="/transactions" class="py-3 btn m-3 btn-outline-primary bg-lg">Continue</router-link>
                    </div>
                    <div class="d-grid gap-2 col-md-5 col-7 mx-auto">
                        <router-link to="/dashboard" class="py-3 btn btn-primary m-3 bg-lg">Dashboard</router-link>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
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
    name:'Success',
    beforeMount(){
    if(!this.$store.state.auth){
      this.$router.push('/login')
    }
  },  
    components:{
        Sidebar,
        NavBottom,
        NavTop
    }
}
</script>