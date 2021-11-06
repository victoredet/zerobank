<template>
    <div class="homepage">
        <NavTop />
        <section class="bg-primary">
            <div class="col col-md-10 col-lg-9 mx-auto top py-1">
                    <div class="col img text-center">
                        <img src="../assets/crown.png" class="spin w-25">
                    </div>
                <div class="m-2">
                    <p class="col text-white fw-bold fs-1 text-center">your good <span class="text-warning">BEST</span> starts here with royal <span class="text-warning">ROYAL</span>  proceedures</p>
                </div>
                <div class="row mb-2">
                    <p class="col text-center text-white fw-bold">No hidden charges.</p>
                    <p class="col text-center text-white fw-bold">Get paid early.</p>
                    <p class="col text-center text-white fw-bold">Money when you need it.</p>
                </div>
                <div class="d-flex justify-content-between py-2">
                    <button @click="signup"  class="col-5 btn btn-outline-secondary border-2 m-2 btn-lg fw-bold">Open an account</button>
                    <button @click="this.$router.push('/login')"  class="col-5 btn btn-outline-secondary border-2 m-2 btn-lg fw-bold">Sign In</button>
                </div>

                
            </div>
        </section>
        <section>
            <div class="col-md-10 col-lg-10 col mx-auto">
                <div class="container row">
                    <div class="col-md-6 mt-3 d-none d-md-block">
                        <img src="../assets/top.jpg" class="w-100" alt="">
                        <h2 class="text-center text-primary fw-bold">The Ultimate banking experience</h2>
                    </div>
                    <div class="col-md-6">
                        <h3 class="text-capitalize fw-bold m-1 text-center text-primary">security notice</h3>
                        Fifth Third employs a number of fraud protection measures and offers you fee-free tools, such as alerts, to help protect your account. You may also enroll in Fifth Third Identity Alert®, an optional, non-FDIC insured product, subject to additional fees, provided by Fifth Third's vendor, Trilegiant.
                        <h3 class="text-capitalize fw-bold m-1 text-center text-primary">Disclosure</h3>
                            Current early pay options have fees that apply. A fee-free early pay option, dependent on submission of direct deposit by payer, will be available later in 2021. See banker for details on all available options. Certain restrictions apply.<br>
                            *Account must be funded within 45 days of account opening. Service fees may apply.
                            <br>*All lending is subject to credit review and approval.
                            <br>*Subject to Digital Services User Agreement terms and conditions.

                    </div>
                </div>
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
    },
    methods:{
        signup(){
            alert('Your device is unverified. Please contact our branch managers for sign-up token')
        }
    }
}
</script>

<style scoped>
.spin{
    animation: rotation 25s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
  
}
</style>
