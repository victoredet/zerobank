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
            <router-link to="/transactions">
                <h3 class="text-white my-4"><span class="fa fa-credit-card"></span> Cards</h3>
            </router-link>
            <router-link to="/transactions">
                <h3 class="text-white my-4"><span class="fa fa-sign-out"></span> Log Out</h3>
            </router-link>
        </div>
    </div>
</template>
<style scoped>

</style>