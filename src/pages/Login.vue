<template>
    <div class="d-flex">
        <div class="d-none d-md-block col-md-5 bg-primary">
            <div class="col-9 mx-auto min-vh-100">

            <h1 class="text-center text-white fw-bold fs-1 my-5">Zero Bank</h1>
            <p class="text-white position-fixed bottom-0">Stripped down to just security and anonimousity</p>
            </div>
        </div>
        <div class="col-md-7 col-11 login">
            <div class="col-md-7 col-10 mx-auto">
                <h1 class="text-primary my-5">Welcome back! </h1>
                <form action="" @submit.prevent="login()" class="">
                    <div class="form-group my-3">
                        <label>User ID</label>
                        <input required autofocus v-model="email" name="" type="text" class="form-control border-0 shadow">
                    </div>
                    <div class="form-group my-3 ">
                        <label>Password</label>
                        <input required autofocus v-model="password" name="password" type="password" class="form-control border-0 shadow ">
                    </div>

                    <button class="btn btn-lg btn-primary shadow" type="submit">Log In</button>
                </form>
                <p class="text-primary text-center mx-auto position-fixed bottom-0">Stripped down to just security and anonimousity</p>
                
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default{
    name:'Login',
    data(){
        return{
            password:'',
            email:''
        }
    },
    methods:{
        login(){
            const user = 'jasonbrown66@gmail.com'
            const pass = 'Brown66!'
            if(this.email !== user){
                alert('invalid credentials')
                return
            }
            if(this.password !== pass){
                alert('invalid credentials')
                return
            }
            this.$store.commit('setAuth')
            console.log(this.$store.state.auth)
             this.$router.push('./dashboard')
        }
    }
}
</script>
