
<template>
 <div>
   <h2 class="text-center mt-3">Add Notes</h2>
   
   <form action="" class="container text-left">
     <div class="form-group">
       <label for="title">Note Title</label>
       <input type="text" class="form-control" required>
     </div>
     <div class="form-group">
       <label for="notes">Notes</label>
       <textarea name="Notes" cols="30" rows="10" class="form-control" required></textarea>
     </div>
     <div class="row">
       <div class="col-sm-3">
         <button type="button" class="form-control btn btn-outline-primary btn-sm">Add Note</button>
       </div>
     </div>
   </form>
 </div>
</template>

<script>
 export default {

 }
</script>

<style scoped>

</style>