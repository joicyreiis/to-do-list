const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefaSchema = new Schema({
    descricao: {type: String, required: true},
    data: {type: Date, required: true},
    completa: {type: Boolean, required: true}
})

module.exports = mongoose.model('Tarefas', TarefaSchema)