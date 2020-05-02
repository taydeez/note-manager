
<template>
 <div>
   <h2 class="text-center mt-3">Add Notes</h2>
   
   <form action="" class="container text-left">
     <div class="form-group">
       {{note}}
       <label for="title">Note Title</label>
       <input type="text"  v-model="note.title" class="form-control" required>
     </div>
     <div class="form-group">
       <label for="notes">Notes</label>
       <textarea name="Notes" v-model="note.body" cols="30" rows="10" class="form-control" required></textarea>
     </div>
     <div class="row">
       <div class="col-sm-3">
         <button type="button" v-on:click="addNote()" class="form-control btn btn-outline-primary btn-sm">Add Note</button>
       </div>
     </div>
   </form>
 </div>
</template>

<script>
 export default {

   data() {
      return {
          note : {
            id    : null, 
            title : "",
            body  : "",
            date  : "",
          }
      }
   },

 

   methods : {
        addNote(){
          
          let dateStamp = new Date;
          this.note.date = dateStamp.getTime()

          //this calls the save note action in the store
          this.$store.dispatch("save_note",this.note).then((data) =>{
              if(data){
                //when the note is added, redirect to the homepage
                this.$router.push('/');
              }
          })

        }
   }

 }
</script>

<style scoped>

</style>