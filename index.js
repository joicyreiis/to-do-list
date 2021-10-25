const express = require('express');
const app = express();
const mongoose = require('mongoose');

const tarefa_controler = require('./tarefas-controller')

app.use(express.json());
mongoose.connect('mongodb+srv://usuariopadrao:WJVEemOkAfZKDvUM@cluster0.cc86o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco'))
} catch (e) {
    console.log(e)
}

const router = express.Router()
app.use('/', router)

router.post('/tarefas', tarefa_controler.cadastrarTarefa)
router.get('/tarefas', tarefa_controler.listarTarefas)
router.get('/tarefas/:id', tarefa_controler.buscarTarefa)
router.put('/tarefas/:id', tarefa_controler.atualizarTarefa)
router.delete('/tarefas/:id', tarefa_controler.deletarTarefa)

let porta = process.emit.PORT || 4000;

app.listen(4000, function() {
    console.log("Servidor rodando na porta " + porta);
})