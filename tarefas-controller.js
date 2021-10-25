var Tarefa = require('./tarefas-model')

exports.listarTarefas = function (req, res) {
    Tarefa.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscarTarefa = function (req, res) {
    Tarefa.findById(req.params.id, function(err, tarefas){
        if (err) return next(err)
        return res.json(tarefas)
    })
}

exports.cadastrarTarefa = function (req, res) {
    let tarefa = new Tarefa({
        descricao: req.body.descricao,
        data: req.body.data,
        completa: req.body.completa     
    })
    tarefa.save(function (err){
        if (err) {
            return next(err)
        }
    })
    res.send('Tarefa cadastrada com sucesso.')
}

exports.atualizarTarefa = function (req, res) {
    Tarefa.updateOne({ _id: req.params.id}, req.body, (err) => {
        if (err) {
            return next(err)
        }

        res.send('Tarefa atualizada com sucesso.')
    });
}

exports.deletarTarefa = function (req, res) {
    Tarefa.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            return next(err)
        }

        res.send('Tarefa deletada com sucesso.')
    })
}
