const tarefas = []

const ToDoList = {
    data() {
        return {
            tarefas,
            novaTarefa: {
                nome: null,
                feita: false
            }
        }
    },
    methods: {
        adicionarTarefa: function() {
            if(this.novaTarefa.nome) {
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = {
                    feito: false
                };
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
            } else {
                alert("Digite uma tarefa para adicionar")
            }
            
           
        },

        limparTudo: function() {
            if(!(this.tarefas.length === 0)){
                confirm("Suas tarefas serão apagadas definitivamente")
                this.tarefas = []
            } else {
                alert("Não há tarefas para apagar")
            }
            
        },
        storeTarefas() {
         //   localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
          //  console.log("updated")
          //Desse forma precisa carregar a função em diversos pontos da aplicação
        }
    },
    created() {
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated() { 
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    } //Outra maneira de fazer, melhor para pequenas aplicações como essa.
}

Vue.createApp(ToDoList).mount('#app');