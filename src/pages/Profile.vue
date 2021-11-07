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
                    <h1 class="fw-bold text-primary m-2 mt-4">Profile</h1>
                    <div class="row container">
                        <div class="col card border-0 shadow m-1">
                            <p class="m-2 fw-bold fs-3"> GENESIS ASSET INVESTMENT </p>
                        </div>
                    </div>

                    <h3 class="fw-bold text-danger m-2 ">Your Login IP address is not recognised as an authourized location to view this pagr. Please contact one of our branches in your district to resolve or register new authorised location</h3>
                    
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
// import axios from 'axios'

export default {
    name:'Profile',
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