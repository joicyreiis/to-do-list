const express = require('express');
const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    res.send("oi teste");
});

let porta = process.emit.PORT || 4000;

app.listen(3000, function() {
    console.log("Servidor rodando na porta " + porta);
})