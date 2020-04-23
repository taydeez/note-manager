
<template>
 <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Note Taker</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></router-link>
          <router-link class="nav-item nav-link" to="/add">Add Notes</router-link>
        </div>
      </div>
    </div>
    </nav>
 </div>
</template>

<script>
 export default {

 }
</script>

<style scoped>

</style>