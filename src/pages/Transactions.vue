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
                <div class="dash-top col mx-auto container border-2 border-bottom">
                    <h1 class="fw-bold text-primary m-3 mt-4 text-capitalize">Transfers</h1>
                    <p>Send money to/from other banks, or to someone else using an account number</p>
                </div>
                <div class="trans-form col-md-7 col-10 m-3">
                    <form action="" @submit="onSubmit">
                        <div class="form-group mt-3">
                            <label>Destination Account:  <span class="text-danger">*</span></label>
                           <select class="form-select" required aria-label="Default select example">
                                <option value="Domestic">Domestic</option>
                                <option value="International">International</option>
                                </select>
                        </div>

                        <div class="form-group mt-3">
                            <label>What kind of account is it? <span class="text-danger">*</span></label>
                            <select class="form-select" required aria-label="Default select example">
                                <option value="International">Someone else's personal account at another bank</option>
                                <option value="International">A bussiness account at another bank</option>
                                <option value="Domestic">My personal account at another bank</option>
                                </select>
                        </div>
                        <hr>
                        <div class="form-group mt-3">
                            <label for="" class="">Reciever's full name <span class="text-danger">*</span></label>
                            <input required autofocus type="text" class="form-control" placeholder="first name, surname" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">Nickname you would to call this account</label>
                            <input required autofocus type="text" class="form-control" placeholder="" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">Street Address<span class="text-danger">*</span></label>
                            <input required autofocus type="text" class="form-control" placeholder="first name, surname" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">City <span class="text-danger">*</span></label>
                            <input required autofocus type="text" class="form-control" placeholder="eg. New York" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">State <span class="text-danger">*</span></label>
                            <input required autofocus type="text" class="form-control" placeholder="eg. california" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">ZIP code<span class="text-danger">*</span></label>
                            <input required autofocus type="text" class="form-control" placeholder="94108" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">Email<span class="text-danger">*</span></label>
                            <input required autofocus type="email" class="form-control" placeholder="example@email.com" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">Routing number<span class="text-danger">*</span></label>
                            <input required autofocus type="text" class="form-control" placeholder="0794578933" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">Account number<span class="text-danger">*</span></label>
                            <input required autofocus type="password" class="form-control" placeholder="134309" >
                        </div>

                        <div class="form-group mt-3">
                            <label for="" class="">Re-enter account number<span class="text-danger">*</span></label>
                            <input required autofocus type="password" class="form-control" placeholder="134309" >
                        </div>
                        <div class="form-group mt-3">
                            <label for="" class="">Amount to send <span class="text-danger">*</span></label>
                            <input required autofocus type="text" v-model="amount" class="form-control" placeholder="USD" >
                        </div>
                        <div class="form-group mt-3">
                            <label for="" class="">Message<span class="text-danger">*</span></label>
                            <textarea name="" class="form-control">Notes are only for records. They don't get sent to the other bank</textarea>
                        </div>
                        <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary mt-3 mb-5 py-3 btn-lg fw-bold">Submit</button>
                        </div>
                    </form>
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
    name:'Transactions',
    
    data(){
        return{
            date:'',
            accountName:'',
            amount:'',
            zipcode:''
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.amount){
                alert('Please enter amount')
                return
            }
            const transaction = {
                amount:this.amount,
                date:this.date,
                accountName:this.accountName,
                zipcode:this.zipcode

            }
            this.$store.commit('updateTransHistory', transaction)
            this.$router.push('user/dashboard');
        }
    },
    components:{
        Sidebar,
        NavBottom,
        NavTop
    }
}
</script>
<style>
.dash-content{
    background: #f4f4f4;
}
</style>