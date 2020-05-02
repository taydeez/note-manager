
<template>
 <div>
   <h3 class="text-center mt-5 mb-5">Your Available Notes</h3>

   <div class="container mb-4">
     <div class="row">
       <div class="col-sm-4 col-lg-4 col-md-6 col-xs-12 mb-3" v-for="note in noteList" :key="note.id">
         <h5 class="card-header bg-primary text-left">
         <router-link :to="{ name : 'note' , params : {id : note.id}  }" >  {{note.title.slice(0, 31)}} id: {{note.id}} </router-link>
         </h5>
         <div class="card-body">
           <p class="card-text text-justify"> {{note.body.slice(0,400)}} </p>
         </div>
         <div class="card-footer bg-dark">
           <button class="btn btn-primary mr-3">Edit Note</button>
           <button class="btn btn-danger" v-on:click="deleteNote(note.id)">Delete Note</button>
         </div>
       </div>
     </div>
   </div>
 </div>

 
</template>
<script>
 export default {
   data () {
     return {
       message: 'Welcome to Vue',
     }
   },
   methods: {
     deleteNote(noteId) {
       if (confirm('You cannot undo this action after deleting?')) {
         //call the delete note action from the store and pass id of the note
         this.$store.dispatch("delete_note",noteId)
       }
     },
   },
   computed: {
      //use the computed property to fetch your notes from the store
        noteList : function() {
            return this.$store.getters.getAllNotes
        },
 
   }
 }
</script>


<style scoped>

</style>