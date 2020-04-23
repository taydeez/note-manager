
<template>
 <div>
   <h3 class="text-center mt-5 mb-5">Your Available Notes</h3>

   <div class="container mb-4">
     <div class="row">
       <div class="col-sm-4 col-lg-4 col-md-6 col-xs-12 mb-3" v-for="note in noteList" :key="note.id">
         <h5 class="card-header bg-primary text-left">
           {{note.title.slice(0, 31)}}
         </h5>
         <div class="card-body">
           <p class="card-text text-justify"> {{note.main.slice(0,400)}} </p>
         </div>
         <div class="card-footer bg-dark">
           <button class="btn btn-primary mr-3">Edit Note</button>
           <button class="btn btn-danger" v-on:click="deleteNote(note)">Delete Note</button>
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
       noteList: [
          {
            id: 1,
            title: 'What is Lorem Ipsum?',
            main: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
              id: 2,
              title: 'Lorem Ipsum',
              main: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac venenatis est. Praesent congue arcu eget nisl dapibus, eget elementum massa fermentum. Aliquam mattis odio quis arcu imperdiet, et venenatis urna convallis. Donec vel arcu vehicula, tincidunt purus sit amet, facilisis quam. Nulla euismod at nisi a dignissim. Nullam gravida arcu ut dui posuere fringilla. Aenean porttitor in urna non dictum. Duis eget massa eget dolor molestie semper. Duis volutpat ante at ex sagittis, non aliquet sem commodo. Aenean faucibus at risus et accumsan. Pellentesque hendrerit nec erat eget malesuada. Curabitur non dui non arcu lobortis fermentum volutpat eu eros. Aliquam erat volutpat. Nulla vulputate purus diam, sit amet tincidunt diam aliquet mollis. Aliquam porta velit mi, eget dignissim erat scelerisque aliquet. Curabitur pellentesque in nisl a vulputate.'
            },
            {
              id: 2,
              title: 'China Raises Easing Coronavirus...',
              main: 'HONG KONG—China has approached a number of countries to discuss the possibility of easing border controls to allow some business travel to resume, part of broader efforts to restart economic activity stalled by the coronavirus pandemic. With China signalling initial success in containing its domestic contagion, its officials have in recent weeks proposed efforts to facilitate essential travel with foreign counterparts from more than a dozen countries across the Asia-Pacific region, diplomats familiar with the matter said.'
            }
        ],
     }
   },
   methods: {
     deleteNote(note) {
       if (confirm('You cannot undo this action after deleting?')) {
         this.noteList.splice(note, 1)
       }
     },
   },
 }
</script>

<style scoped>

</style>