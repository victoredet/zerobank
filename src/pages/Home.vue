<template>
    <div class="homepage bg-primary vh-100">
        <NavTop />
        <section class="container">
            <div class="banner">
                <p class="fw-bold fs-1 col-8 mx-auto text-secondary text-center">Stripped out to security and anonimousity, nothing else...</p>
            </div>
            <div class="">
                <br>
                <p class="text-center text-success fw-bold">oops! You can only sign up by referral and recommendation</p>
                <br>
            </div>

        </section>
    </div>
    
</template>

<script>
import NavTop from '../components/Nav-top.vue';
export default{
    name:'Home',
    components:{
        NavTop
    }
}
</script>
