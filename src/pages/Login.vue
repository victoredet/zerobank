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
                <form action="" class="">
                    <div class="form-group my-3">
                        <label>Email</label>
                        <input required autofocus type="email" class="form-control border-0 shadow">
                    </div>
                    <div class="form-group my-3 ">
                        <label>Password</label>
                        <input required autofocus type="password" class="form-control border-0 shadow ">
                    </div><router-link to="/dashboard">dashbord</router-link>

                    <button class="btn btn-lg btn-primary shadow" type="submit">Log In</button>
                </form>
                <p class="text-primary text-center mx-auto position-fixed bottom-0">Stripped down to just security and anonimousity</p>
                
            </div>
        </div>
    </div>
</template>