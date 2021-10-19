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
                    <h1 class="fw-bold text-primary m-2 mt-4">Manage Cards</h1>
                    <div class="row container">
                        <div class="col card border-0 shadow m-1">
                           <h3 class="">Frank's Checkings</h3>
                           <div class="card rounded bg-primary col-md-5 col-11 m-3 ">
                                <h3 class="m-2 text-white">Zero Bank</h3>
                               <div class="d-flex container">
                                   <div class="col-9">
                                       <br>
                                       <br>
                                       <br>
                                       <br>
                                       <br>
                                       <br>
                                       <p class="text-white">**** **** **** **** 6574<br>Frank Took</p>
                                   </div>
                                   <div class="col">
                                       <br>
                                       <br>
                                       <br>
                                       <br>
                                       <br>
                                       <p class="text-end text-white">Debit</p>
                                       <h1 class="text-end"><span class="text- text-white fa fa-cc-visa"></span></h1>
                                   </div>
                               </div>
                           </div>
                           
                           <div class="d-flex">
                               <div class="col text-center">
                                   <h2><span class="fa fa-lock"></span></h2>
                                   <p>Lock Card</p>
                                </div>
                               <div class="col text-center">
                                   <h2><span class="fa fa-exchange"></span></h2>
                                   <p>Replace Card</p>
                                </div>
                               <div class="col text-center">
                                   <h2><span class="fa fa-exclamation-triangle"></span></h2>
                                   <p>Report Lost</p>
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

export default {
    name:'Dashboard',
    created(){
        if(!this.$store.state.auth){
            //this.$router.push('/login')
            console.log(this.$store.state.auth)
        }
    },    
    components:{
        Sidebar,
        NavBottom,
        NavTop
    }
}
</script>
<style scoped>
</style>