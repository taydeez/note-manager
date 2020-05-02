
<template>
 <div>
   <h3 class="text-center mt-3">This is Notes Page</h3>
   <h3 class="title"> {{note.title}} </h3>
   <p>{{note.body}}</p>
 </div>
</template>

<script>
 export default {

   computed:{
            //this gets the value of the current note
      function() {
             let currentNote = this.$store.getters.getCurrentNote
             return currentNote[0]
      }
   },


    created(){

          //this calls the get_note action which sets the current note
          let noteId = parseInt(this.$route.params.id)

          this.$store.dispatch('get_note',noteId);


    }



 }
</script>

<style scoped>

</style>