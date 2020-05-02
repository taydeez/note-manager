import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //demo notes
    notes: [
        { id : 1,  title : "Test Note", body : "This is a test note", date : null },
        { id : 2,  title : "Test Second Note", body : "This is the second test note", date : null},
],
currentNote : null,
  },

  mutations: {
    auth_request(state){
      state.status = 'loading'
    },

    add_note(state,note){
        state.notes.push({ id : 10,  title : note.title, body : note.body, date : note.date})
    },

    delete_note(state,noteId){
        //use array filter method to remove the intended note
    let  newNote =  state.notes.filter((element)=>{
                return element.id !== noteId
        })

        console.log(newNote);
    
        state.notes = newNote

    },

    set_current_note(state,noteId){
        
      //use filter to get the required note
        let note = state.notes.filter((element)=>{
                return element.id === noteId
        })
        //console.log(note)
        state.currentNote = note
    }

  },


  /**
 * 
 * note that using promises would come in more handy when 
 * you start making real api calls for your data
 * 
 */

  actions: {
    save_note({commit}, note){
      return new Promise((resolve, reject) => {

        try{
            commit('add_note',  note)
            resolve({ error : false , message : 'Note Added' })

        }catch(err){
          
            reject({ error : true, message: err.message})
          }

        })
      },



    delete_note({commit}, noteId){

        commit('delete_note',noteId);
        return true
    },

    get_note({commit},noteId){

        commit('set_current_note',noteId);
        return true

    }


    },





  getters : {
    getAllNotes : state => state.notes,
    getCurrentNote : state => state.currentNote      
}


})
