<template>
    <div class="d-md-none nav-bottom position-fixed bottom-0 container d-flex mx-auto">
        <div class="nav-bottom-item col">
             <router-link to="/user/dashboard" class="">
                <h3 class="text-primary text-center fw-bold fs-1"><span class="fa fa-home"></span></h3>
            </router-link>
        </div>
        <div class="nav-bottom-item col">
            <router-link to="/transactions">
                <h3 class="text-primary text-center fw-bold fs-1"><span class="fa fa-exchange"></span></h3>
            </router-link>
        </div>
        <div class="nav-bottom-item col">
             <router-link to="/user/profile">
                <h3 class="text-primary text-center fw-bold fs-1"><span class="fa fa-user"></span></h3>
            </router-link>
        </div>
        <div class="nav-bottom-item col">
            <router-link to="/login">
                <h3 class="text-primary text-center fw-bold fs-1"><span class="fa fa-sign-out"></span></h3>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
    name:'NavBottom'
}
</script>