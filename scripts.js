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
            if (this.tarefas.length === 0) {
                alert("Não há tarefas para apagar");
                return;
            }

        const querApagar = confirm("Suas tarefas serão apagadas definitivamente");

            if (querApagar) {
                this.tarefas = [];
                localStorage.removeItem("tarefas"); // opcional: limpar também do storage
            }
            
        },
        storeTarefas() {
            localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
            console.log("updated")
        }
    },
    created() {
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated() { 
        // this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    } //Outra maneira de fazer, melhor para pequenas aplicações como essa.
}

Vue.createApp(ToDoList).mount('#app');