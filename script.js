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
            done:false,
        },
        {   
            text:'leggere',
            done:false,
        },
        {   
            text:'vedere film',
            done:false,
        },
        {   
            text:'andare dal barbiere',
            done:false,
        },
      ]
    }
  },

  methods: {

  },


}).mount('#app');





// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.