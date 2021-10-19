<template>
    <div class="sidebar bg-primary vh-100">
        <div class="brand">
            <h1 class="pt-4 text-center  fw-bold text-white">Zero Bank</h1>
            <p class="fw-5 text-center text-secondary">Focus on what matters..</p>
        </div>
        <div class="nav__links col-6 mx-auto">
            <router-link to="/dashboard">
                <h3 class="text-white my-4"><span class="fa fa-home"></span> Dashboard</h3>
            </router-link>
            <router-link to="/transactions">
                <h3 class="text-white my-4"><span class="fa fa-user"></span> Profile</h3>
            </router-link>
            <router-link to="/transactions">
                <h3 class="text-white my-4"><span class="fa fa-exchange"></span> Transfer</h3>
            </router-link>
            <router-link to="/cards">
                <h3 class="text-white my-4"><span class="fa fa-credit-card"></span> Cards</h3>
            </router-link>
            
                <h3 class="text-white my-4" @click="logout()"><span class="fa fa-sign-out"></span> Log Out</h3>
        </div>
    </div>
</template>
<script>

export default {
    name:'Sidebar',
    methods:{
        logout(){
            
            this.$store.commit('logout')
            console.log(this.$store.state.auth)
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

</style>