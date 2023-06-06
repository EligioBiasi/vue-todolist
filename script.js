const { createApp } = Vue

// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

createApp({
  data() {
    return {
      todolist:[
        {   
            text:'spesa',
            done:false,
        },
        {   
            text:'calcietto',
            done:true,
        },
        {   
            text:'leggere',
            done:false,
        },
        {   
            text:'vedere film',
            done:true,
        },
        {   
            text:'andare dal barbiere',
            done:false,
        },
        {   
            text:'stirare',
            done:true,
        },
        {   
            text:'lavare i piatti',
            done:true,
        },
      ],

        newItem: '',

        inputError: false,
    }
  },

  methods: {
    removeListItem(itemIndex){
        this.todolist.splice(itemIndex, 1)
    }
  },

    addTodo(){
    let cleanedTodo = this.newItem.trim();
    if(cleanedTodo.length >= 5) {
        this.todolist.unshift({
            text: this.newItem,
            done: false,
        });
        this.newItem = '';
        this.inputError = false
    } else {
        this.inputError = true;
    }
},

}).mount('#app');







// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.