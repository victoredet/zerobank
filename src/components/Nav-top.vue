<template>
    <div class="nav-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
   <h1> <a class="navbar-brand" href="#">Zero Bank</a></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <div class="d-flex">
        <a class="nav-link text-white" href="#about" tabindex="-1">About</a>
        <div class="" v-if="!this.$store.state.auth">
          <router-link class="nav-link text-white " to="/login" tabindex="-1">Sign in</router-link>
        </div>
        <div class="" v-if="this.$store.state.auth">
          <router-link class="nav-link text-white " to="/cards" tabindex="-1">Cards</router-link>
        </div>

      </div>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name:'NavTop'
}
</script>